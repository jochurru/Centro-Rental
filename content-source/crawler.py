#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Crawler de recuperación y catalogación de identidad y contenido para Centro Rental.
Extrae activos originales de https://centrorental.com.ar/ y los organiza en content-source/.
"""

import os
import sys
import re
import json
import csv
import time
import hashlib
from urllib.parse import urljoin, urlparse, unquote
from collections import defaultdict
import requests
from bs4 import BeautifulSoup
from PIL import Image
import io

BASE_DOMAIN = "centrorental.com.ar"
START_URL = "https://centrorental.com.ar/"
SITEMAP_URL = "https://centrorental.com.ar/sitemap-es-ar.xml"

# Rutas de almacenamiento
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(BASE_DIR)

RAW_DIR = os.path.join(BASE_DIR, "raw")
MANIFESTS_DIR = os.path.join(BASE_DIR, "manifests")
REPORTS_DIR = os.path.join(BASE_DIR, "reports")
CURATED_DIR = os.path.join(BASE_DIR, "curated")

CATEGORIES = ["images", "logos", "events", "clients", "brands", "equipment", "products"]

# Headers corteses
HEADERS = {
    "User-Agent": "CentroRental-ContentRecovery/1.0 (+https://centrorental.com.ar; PairProgramming/Antigravity)"
}

# Patrones para descartar basura técnica
DISCARD_PATTERNS = [
    r"DATAWEB\.jpg",
    r"qr\.afip\.gob\.ar",
    r"/favicon/",
    r"icon-\d+\.png",
    r"apple-touch-icon",
    r"browserconfig\.xml",
    r"google-analytics",
    r"googletagmanager",
    r"facebook\.com/tr",
    r"recaptcha",
]

def ensure_directories():
    for cat in CATEGORIES:
        os.makedirs(os.path.join(RAW_DIR, cat), exist_ok=True)
    os.makedirs(CURATED_DIR, exist_ok=True)
    os.makedirs(MANIFESTS_DIR, exist_ok=True)
    os.makedirs(REPORTS_DIR, exist_ok=True)

def is_same_domain(url):
    parsed = urlparse(url)
    return parsed.netloc == "" or BASE_DOMAIN in parsed.netloc

def normalize_url(url, base_url):
    full = urljoin(base_url, url)
    parsed = urlparse(full)
    # Limpiar fragmentos y normalizar
    clean = f"{parsed.scheme}://{parsed.netloc}{parsed.path}"
    if parsed.query:
        clean += f"?{parsed.query}"
    return clean

def is_discarded(url):
    for pattern in DISCARD_PATTERNS:
        if re.search(pattern, url, re.IGNORECASE):
            return True, f"Patrón técnico detectado: {pattern}"
    return False, ""

def classify_content(source_page, img_url, alt, nearby_text):
    text_combined = f"{source_page} {img_url} {alt} {nearby_text}".lower()
    
    # Logos
    if "logo" in img_url.lower() or "logo" in alt.lower():
        return "logos", "Logo corporativo o de marca"
    
    # Clientes
    if "/clientes" in source_page or "nuestros clientes" in text_combined or "confían en nosotros" in text_combined:
        return "clients", "Logo o testimonio de cliente"
        
    # Eventos
    event_keywords = [
        "teatro", "hotel", "estadio", "alvear", "hilton", "ed-sheeran", "versace",
        "bienal", "congreso", "fiesta", "unicef", "fatima-flores", "sandra-mihanovich",
        "evento", "acto", "jorge-newbery", "sofitel", "usina-del-arte", "rock"
    ]
    if any(k in source_page.lower() for k in event_keywords) or "/eventos" in source_page:
        return "events", "Registro fotográfico de evento realizado"
        
    # Equipamiento técnico
    equipment_keywords = [
        "sonido", "iluminacion", "pantallas-led", "line-array", "starlink",
        "streaming", "estudio-tv", "escenarios", "tarimas", "vallas",
        "grupos-electrogenos", "traduccion", "proyectores", "camaras", "audio-video"
    ]
    if any(k in source_page.lower() for k in equipment_keywords):
        return "equipment", "Equipamiento técnico para eventos y producción"
        
    # Productos / Rental retail
    product_keywords = ["televisores", "smart-4k", "notebooks", "playstation", "biombos", "soportes-tv", "venta", "tienda"]
    if any(k in source_page.lower() for k in product_keywords):
        return "products", "Producto de alquiler retail o venta"
        
    return "images", "Fotografía o recurso general del sitio"

def extract_nearby_text(tag):
    if not tag:
        return ""
    # Buscar en contenedor inmediato o párrafo cercano
    parent = tag.parent
    for _ in range(3):
        if not parent:
            break
        text = parent.get_text(strip=True, separator=" ")
        if text and len(text) > 3:
            # Limpiar espacios repetidos y truncar
            clean = " ".join(text.split())
            if len(clean) > 160:
                clean = clean[:157] + "..."
            return clean
        parent = parent.parent
    return ""

def fetch_sitemap_urls(session):
    urls = set()
    try:
        r = session.get(SITEMAP_URL, headers=HEADERS, timeout=15)
        if r.status_code == 200:
            found = re.findall(r'<loc>(https?://[^<]+)</loc>', r.text)
            for u in found:
                if is_same_domain(u):
                    urls.add(u.strip())
            print(f"[+] URLs descubiertas en sitemap: {len(urls)}")
    except Exception as e:
        print(f"[!] Error leyendo sitemap: {e}")
    return urls

def run_crawler():
    ensure_directories()
    session = requests.Session()
    session.headers.update(HEADERS)
    
    print("=" * 60)
    print(" INICIANDO CRAWLER DE IDENTIDAD CENTRO RENTAL")
    print("=" * 60)
    
    queue = list(fetch_sitemap_urls(session))
    if START_URL not in queue:
        queue.insert(0, START_URL)
        
    visited_pages = set()
    discovered_images = {} # url -> metadata
    downloaded_hashes = {} # hash -> item info
    duplicates = []
    discarded = []
    
    page_counter = 0
    total_pages = len(queue)
    
    while queue:
        page_url = queue.pop(0)
        if page_url in visited_pages:
            continue
        visited_pages.add(page_url)
        page_counter += 1
        
        print(f"[{page_counter}] Rastreando: {page_url}")
        
        try:
            r = session.get(page_url, timeout=15)
            if r.status_code != 200:
                print(f"  [!] HTTP {r.status_code} en {page_url}")
                continue
        except Exception as e:
            print(f"  [!] Fallo de conexión en {page_url}: {e}")
            continue
            
        soup = BeautifulSoup(r.text, "html.parser")
        page_title = soup.title.text.strip() if soup.title else ""
        
        # Descubrir nuevos enlaces internos
        for a_tag in soup.find_all("a", href=True):
            href = a_tag["href"]
            if href.startswith("mailto:") or href.startswith("tel:") or href.startswith("javascript:") or href.startswith("#"):
                continue
            full_url = normalize_url(href, page_url)
            if is_same_domain(full_url) and full_url not in visited_pages and full_url not in queue:
                # Filtrar extensiones que no sean html
                parsed_path = urlparse(full_url).path.lower()
                if not any(parsed_path.endswith(ext) for ext in [".png", ".jpg", ".jpeg", ".webp", ".pdf", ".zip", ".css", ".js"]):
                    queue.append(full_url)
        
        # 1. Extraer <img>
        for img in soup.find_all("img"):
            src = img.get("src") or img.get("data-src") or img.get("data-lazy-src")
            if not src:
                continue
            img_full_url = normalize_url(src, page_url)
            alt = (img.get("alt") or "").strip()
            title = (img.get("title") or "").strip()
            nearby = extract_nearby_text(img)
            
            if img_full_url not in discovered_images:
                discovered_images[img_full_url] = {
                    "source_url": img_full_url,
                    "pages": [page_url],
                    "alt": alt,
                    "title": title,
                    "nearby_text": nearby,
                    "source_tag": "img",
                    "page_title": page_title
                }
            else:
                if page_url not in discovered_images[img_full_url]["pages"]:
                    discovered_images[img_full_url]["pages"].append(page_url)
                if not discovered_images[img_full_url]["alt"] and alt:
                    discovered_images[img_full_url]["alt"] = alt
                if not discovered_images[img_full_url]["nearby_text"] and nearby:
                    discovered_images[img_full_url]["nearby_text"] = nearby

        # 2. Extraer CSS background-image
        for tag in soup.find_all(style=True):
            style_content = tag["style"]
            bgs = re.findall(r"url\(['\"]?(.*?)['\"]?\)", style_content)
            for bg in bgs:
                if bg.startswith("data:"):
                    continue
                bg_full_url = normalize_url(bg, page_url)
                nearby = extract_nearby_text(tag)
                if bg_full_url not in discovered_images:
                    discovered_images[bg_full_url] = {
                        "source_url": bg_full_url,
                        "pages": [page_url],
                        "alt": "",
                        "title": "",
                        "nearby_text": nearby,
                        "source_tag": "background-image",
                        "page_title": page_title
                    }
                else:
                    if page_url not in discovered_images[bg_full_url]["pages"]:
                        discovered_images[bg_full_url]["pages"].append(page_url)

        # 3. Extraer OpenGraph / Twitter meta images
        for meta in soup.find_all("meta"):
            prop = meta.get("property") or meta.get("name") or ""
            if prop.lower() in ["og:image", "twitter:image"]:
                content = meta.get("content")
                if content:
                    meta_full_url = normalize_url(content, page_url)
                    if meta_full_url not in discovered_images:
                        discovered_images[meta_full_url] = {
                            "source_url": meta_full_url,
                            "pages": [page_url],
                            "alt": f"OpenGraph Meta Image ({prop})",
                            "title": "",
                            "nearby_text": page_title,
                            "source_tag": prop,
                            "page_title": page_title
                        }
                    else:
                        if page_url not in discovered_images[meta_full_url]["pages"]:
                            discovered_images[meta_full_url]["pages"].append(page_url)
                            
        time.sleep(0.15) # Pausa cortés
        
    print("\n" + "=" * 60)
    print(f" RASTREO COMPLETADO. Páginas recorridas: {len(visited_pages)}")
    print(f" Total de URLs de imágenes candidatas detectadas: {len(discovered_images)}")
    print("=" * 60 + "\n")
    
    # Procesar y descargar imágenes
    manifest_records = []
    category_counts = defaultdict(int)
    
    img_idx = 0
    total_imgs = len(discovered_images)
    
    for img_url, meta in discovered_images.items():
        img_idx += 1
        print(f"[{img_idx}/{total_imgs}] Procesando asset: {img_url}")
        
        # Verificar descarte por URL
        should_discard, reason = is_discarded(img_url)
        if should_discard:
            discarded.append({"url": img_url, "reason": reason, "page": meta["pages"][0]})
            print(f"  [-] Descartado: {reason}")
            continue
            
        try:
            r = session.get(img_url, timeout=20)
            if r.status_code != 200:
                discarded.append({"url": img_url, "reason": f"HTTP {r.status_code}", "page": meta["pages"][0]})
                continue
            img_data = r.content
        except Exception as e:
            discarded.append({"url": img_url, "reason": f"Error descarga: {e}", "page": meta["pages"][0]})
            continue
            
        # Calcular hash
        img_hash = hashlib.sha256(img_data).hexdigest()
        file_size = len(img_data)
        
        # Abrir con PIL para validar imagen y dimensiones
        try:
            pil_img = Image.open(io.BytesIO(img_data))
            width, height = pil_img.size
            img_format = (pil_img.format or "PNG").lower()
            if img_format == "jpeg":
                img_format = "jpg"
        except Exception as e:
            discarded.append({"url": img_url, "reason": f"No es una imagen válida o corrupta: {e}", "page": meta["pages"][0]})
            print(f"  [-] Descartado por formato inválido")
            continue
            
        # Descartar imágenes diminutas (trackers, spacers, etc.) salvo logos explícitos
        if width < 30 or height < 30:
            discarded.append({"url": img_url, "reason": f"Dimensiones diminutas ({width}x{height}px)", "page": meta["pages"][0]})
            print(f"  [-] Descartado por tamaño diminuto ({width}x{height}px)")
            continue
            
        primary_page = meta["pages"][0]
        category, probable_use = classify_content(primary_page, img_url, meta["alt"], meta["nearby_text"])
        
        # Verificar deduplicación
        if img_hash in downloaded_hashes:
            existing = downloaded_hashes[img_hash]
            duplicates.append({
                "hash": img_hash,
                "existing_file": existing["filename"],
                "url": img_url,
                "first_seen_url": existing["source_url"],
                "pages": meta["pages"]
            })
            # Añadir registro al manifiesto referenciando el archivo existente
            manifest_records.append({
                "filename": existing["filename"],
                "source_url": img_url,
                "source_page": primary_page,
                "category": category,
                "alt": meta["alt"],
                "title": meta["title"],
                "nearby_text": meta["nearby_text"],
                "hash": img_hash,
                "width": width,
                "height": height,
                "filesize": file_size,
                "probable_use": probable_use,
                "review_status": "duplicate_reference"
            })
            print(f"  [=] Duplicado detectado (mismo hash que {existing['filename']})")
            continue
            
        # Generar nombre de archivo limpio y no destructivo
        url_path = unquote(urlparse(img_url).path)
        base_name = os.path.splitext(os.path.basename(url_path))[0]
        base_name = re.sub(r"[^a-zA-Z0-9_\-]", "_", base_name)[:35]
        if not base_name:
            base_name = "asset"
            
        filename = f"{category}_{base_name}_{img_hash[:8]}.{img_format}"
        target_path = os.path.join(RAW_DIR, category, filename)
        
        # Guardar archivo sin alteración (fidelidad 100%)
        with open(target_path, "wb") as f:
            f.write(img_data)
            
        record = {
            "filename": filename,
            "filepath": os.path.relpath(target_path, PROJECT_ROOT).replace("\\", "/"),
            "source_url": img_url,
            "source_page": primary_page,
            "all_pages": meta["pages"],
            "category": category,
            "alt": meta["alt"],
            "title": meta["title"],
            "nearby_text": meta["nearby_text"],
            "hash": img_hash,
            "width": width,
            "height": height,
            "filesize": file_size,
            "probable_use": probable_use,
            "review_status": "pending"
        }
        
        downloaded_hashes[img_hash] = record
        manifest_records.append(record)
        category_counts[category] += 1
        print(f"  [+] Guardado en {category}/: {filename} ({width}x{height}px, {file_size/1024:.1f} KB)")
        
    # Guardar Manifiestos
    print("\n" + "=" * 60)
    print(" GENERANDO MANIFIESTOS Y REPORTES")
    print("=" * 60)
    
    json_path = os.path.join(MANIFESTS_DIR, "manifest.json")
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(manifest_records, f, indent=2, ensure_ascii=False)
    print(f"[OK] Manifiesto JSON guardado: {json_path}")
    
    csv_path = os.path.join(MANIFESTS_DIR, "manifest.csv")
    fieldnames = [
        "filename", "category", "width", "height", "filesize",
        "probable_use", "review_status", "source_page", "alt",
        "title", "nearby_text", "hash", "source_url"
    ]
    with open(csv_path, "w", encoding="utf-8", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames, extrasaction="ignore")
        writer.writeheader()
        for r in manifest_records:
            writer.writerow(r)
    print(f"[OK] Manifiesto CSV guardado: {csv_path}")
    
    # Generar Reporte de Inventario Markdown
    generate_inventory_report(visited_pages, manifest_records, downloaded_hashes, duplicates, discarded, category_counts)

def generate_inventory_report(visited_pages, manifest_records, downloaded_hashes, duplicates, discarded, category_counts):
    report_path = os.path.join(REPORTS_DIR, "inventory-report.md")
    
    # Agrupar por categoría
    items_by_cat = defaultdict(list)
    for h, item in downloaded_hashes.items():
        items_by_cat[item["category"]].append(item)
        
    with open(report_path, "w", encoding="utf-8") as f:
        f.write("# Reporte de Recuperación y Catalogación de Identidad — Centro Rental\n\n")
        f.write(f"**Fecha de ejecución**: {time.strftime('%Y-%m-%d %H:%M:%S')}\n")
        f.write(f"**Dominio analizado**: `{BASE_DOMAIN}`\n")
        f.write(f"**Total de páginas internas rastreadas**: {len(visited_pages)}\n\n")
        
        f.write("## 1. Resumen Ejecutivo del Relevamiento\n\n")
        f.write(f"- **Total de activos únicos recuperados**: {len(downloaded_hashes)}\n")
        f.write(f"- **Total de referencias en páginas**: {len(manifest_records)}\n")
        f.write(f"- **Duplicados identificados y consolidados**: {len(duplicates)}\n")
        f.write(f"- **Material técnico / no relevante descartado**: {len(discarded)}\n\n")
        
        f.write("### Desglose por Categorías de Contenido:\n\n")
        f.write("| Categoría | Cantidad de Activos Únicos | Descripción |\n")
        f.write("| :--- | :--- | :--- |\n")
        f.write(f"| **Eventos (`events`)** | {len(items_by_cat['events'])} | Fotografías de producciones y eventos reales |\n")
        f.write(f"| **Equipamiento (`equipment`)** | {len(items_by_cat['equipment'])} | Sistemas de sonido, iluminación, pantallas, streaming |\n")
        f.write(f"| **Clientes / Marcas (`clients`)** | {len(items_by_cat['clients'])} | Logotipos y testimonios de marcas y entidades |\n")
        f.write(f"| **Logotipos (`logos`)** | {len(items_by_cat['logos'])} | Identidad visual de Centro Rental y variantes |\n")
        f.write(f"| **Productos (`products`)** | {len(items_by_cat['products'])} | Artículos de rental corporativo y venta |\n")
        f.write(f"| **Imágenes Generales (`images`)** | {len(items_by_cat['images'])} | Banners, showroom y tomas institucionales |\n\n")
        
        f.write("## 2. Eventos Reales Detectados (Material de Alto Impacto para Centro Rental 2.0)\n\n")
        f.write("A continuación se detallan los principales eventos identificados con sus registros fotográficos extraídos:\n\n")
        
        events_found = defaultdict(list)
        for item in items_by_cat["events"]:
            # Obtener nombre legible a partir de source_page
            page_slug = urlparse(item["source_page"]).path.strip("/")
            events_found[page_slug].append(item)
            
        for event_slug, items in sorted(events_found.items()):
            f.write(f"### Evento: `{event_slug}` ({len(items)} imágenes)\n")
            f.write(f"- **Página de origen**: `{items[0]['source_page']}`\n")
            for it in items[:4]: # Mostrar hasta 4 por evento
                f.write(f"  - `{it['filename']}` ({it['width']}x{it['height']}px, {it['filesize']/1024:.1f} KB) — *{it['nearby_text']}*\n")
            if len(items) > 4:
                f.write(f"  - *... y {len(items) - 4} imágenes más.*\n")
            f.write("\n")
            
        f.write("## 3. Clientes y Marcas Identificadas\n\n")
        if items_by_cat["clients"]:
            for it in items_by_cat["clients"]:
                f.write(f"- **{it['filename']}** ({it['width']}x{it['height']}px): {it['alt'] or it['nearby_text'] or 'Sin texto alt'}\n")
        else:
            f.write("*(No se identificaron logos aislados con la etiqueta clients; revisar sección de eventos y marcas)*\n\n")
            
        f.write("## 4. Equipamiento Técnico Identificado\n\n")
        for it in items_by_cat["equipment"][:15]:
            f.write(f"- **{it['filename']}**: `{it['source_page']}` ({it['width']}x{it['height']}px) — {it['nearby_text'] or it['alt']}\n")
        if len(items_by_cat["equipment"]) > 15:
            f.write(f"- *... y {len(items_by_cat['equipment']) - 15} equipos más (ver manifest.csv).*\n\n")
            
        f.write("## 5. Material Descartado (Criterio de Exclusión)\n\n")
        f.write("Se excluyeron automáticamente los siguientes tipos de recursos para no ensuciar el catálogo de identidad:\n")
        f.write("- Banners fiscales (AFIP DATAWEB, QR reglamentarios).\n")
        f.write("- Favicons e iconos en múltiples resoluciones (16x16 hasta 228x228).\n")
        f.write("- Trackers y píxeles de analítica de terceros.\n")
        f.write(f"- Total de recursos descartados: **{len(discarded)}**.\n\n")
        
        f.write("## 6. Selección Recomendada para Curaduría en Centro Rental 2.0\n\n")
        f.write("Los siguientes eventos y activos poseen el más alto valor comercial y de credibilidad para nutrir la landing y la futura base de datos:\n\n")
        f.write("1. **Teatro Colón para UNICEF**: Aporta prestigio institucional y escala de producción escénica de élite.\n")
        f.write("2. **VIP Ed Sheeran en Estadio Único de La Plata**: Prueba de capacidad en eventos masivos de nivel internacional.\n")
        f.write("3. **Versace en Sofitel (Lanzamiento perfume Eros)**: Refuerza la identidad de marcas de lujo, iluminación estética y alta gama.\n")
        f.write("4. **Hotel Alvear Palace (Casamientos y galas)**: Demuestra solvencia en ambientación y técnica para el segmento social premium.\n")
        f.write("5. **Hotel Hilton & Hotel Scala**: Producciones corporativas con pantallas LED de gran formato.\n")
        f.write("6. **Embajada de Marruecos & Embajada de Israel**: Cobertura de protocolo y streaming oficial.\n\n")
        
        f.write("## 7. Próximos Pasos (Flujo de Trabajo)\n\n")
        f.write("1. **Revisión del Manifiesto**: Abrir `content-source/manifests/manifest.csv` para marcar en la columna `review_status` los activos seleccionados como `approved` o `discarded`.\n")
        f.write("2. **Curaduría**: Mover los activos aprobados a `content-source/curated/` agrupados por caso de éxito.\n")
        f.write("3. **Preparación de Datos**: Actualizar `data/site.ts` con los casos reales y sus fotografías curadas.\n")
        
    print(f"[OK] Reporte de Inventario guardado: {report_path}")

if __name__ == "__main__":
    run_crawler()
