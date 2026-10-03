#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Genera manifest.csv y el reporte de inventario completo a partir de manifest.json y los archivos descargados.
"""

import os
import json
import csv
import time
from urllib.parse import urlparse
from collections import defaultdict

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MANIFESTS_DIR = os.path.join(BASE_DIR, "manifests")
REPORTS_DIR = os.path.join(BASE_DIR, "reports")
RAW_DIR = os.path.join(BASE_DIR, "raw")

json_path = os.path.join(MANIFESTS_DIR, "manifest.json")
if not os.path.exists(json_path):
    print("No se encontro manifest.json")
    exit(1)

with open(json_path, "r", encoding="utf-8") as f:
    manifest_records = json.load(f)

print(f"Total registros cargados desde manifest.json: {len(manifest_records)}")

# 1. Generar CSV
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

print(f"[OK] Manifiesto CSV guardado en: {csv_path}")

# 2. Análisis por categorías y hashes únicos
unique_hashes = {}
duplicates_count = 0
items_by_cat = defaultdict(list)
events_by_page = defaultdict(list)
pages_found = set()

for r in manifest_records:
    pages_found.add(r.get("source_page", ""))
    h = r.get("hash")
    if h not in unique_hashes:
        unique_hashes[h] = r
        cat = r.get("category", "images")
        items_by_cat[cat].append(r)
        if cat == "events":
            page_slug = urlparse(r.get("source_page", "")).path.strip("/")
            events_by_page[page_slug].append(r)
    else:
        duplicates_count += 1

# 3. Generar Reporte Markdown
report_path = os.path.join(REPORTS_DIR, "inventory-report.md")

with open(report_path, "w", encoding="utf-8") as f:
    f.write("# Reporte de Recuperación y Catalogación de Identidad — Centro Rental\n\n")
    f.write(f"- **Fecha de generación**: {time.strftime('%Y-%m-%d %H:%M:%S')}\n")
    f.write(f"- **Dominio de origen**: `centrorental.com.ar`\n")
    f.write(f"- **Páginas rastreadas con contenido**: {len(pages_found)}\n")
    f.write(f"- **Total de referencias analizadas**: {len(manifest_records)}\n")
    f.write(f"- **Activos descargados únicos en disco**: {len(unique_hashes)}\n")
    f.write(f"- **Referencias duplicadas consolidadas**: {duplicates_count}\n\n")
    
    f.write("## 1. Resumen por Categorías\n\n")
    f.write("| Categoría | Activos Únicos en `raw/` | Descripción |\n")
    f.write("| :--- | :---: | :--- |\n")
    f.write(f"| **`events/`** | **{len(items_by_cat['events'])}** | Registro fotográfico real de eventos, recitales, obras y galas |\n")
    f.write(f"| **`equipment/`** | **{len(items_by_cat['equipment'])}** | Sistemas de sonido, iluminación, pantallas LED, streaming, tarimas |\n")
    f.write(f"| **`clients/`** | **{len(items_by_cat['clients'])}** | Logotipos y testimonios de marcas, empresas e instituciones |\n")
    f.write(f"| **`products/`** | **{len(items_by_cat['products'])}** | TVs 4K, notebooks, soportes, gaming, biombos y accesorios |\n")
    f.write(f"| **`logos/`** | **{len(items_by_cat['logos'])}** | Logotipos oficiales de Centro Rental en distintas resoluciones |\n")
    f.write(f"| **`images/`** | **{len(items_by_cat['images'])}** | Banners, fotos generales de salón y recursos institucionales |\n")
    f.write(f"| **TOTAL ÚNICOS** | **{len(unique_hashes)}** | Archivos físicos descargados y deduplicados por SHA-256 |\n\n")

    f.write("## 2. Eventos Reales Catalogados (Material de Alto Impacto)\n\n")
    f.write("Se agrupan aquí las producciones técnicas reales encontradas en la web actual, ideales para reemplazar los placeholders ficticios de la landing:\n\n")
    
    for page_slug, items in sorted(events_by_page.items(), key=lambda x: len(x[1]), reverse=True):
        clean_title = page_slug.replace("--", "").replace("-", " ").title()
        f.write(f"### {clean_title} (`/{page_slug}`) — {len(items)} fotos\n")
        f.write(f"- **Página**: `{items[0].get('source_page', '')}`\n")
        f.write("- **Muestras de fotos recuperadas**:\n")
        for it in items[:5]:
            dim = f"{it.get('width')}x{it.get('height')}px"
            size_kb = f"{it.get('filesize', 0)/1024:.1f} KB"
            nearby = it.get('nearby_text') or it.get('alt') or ''
            nearby_str = f" — *{nearby[:80]}*" if nearby else ""
            f.write(f"  - `{it.get('filename')}` ({dim}, {size_kb}){nearby_str}\n")
        if len(items) > 5:
            f.write(f"  - *... y {len(items) - 5} imágenes adicionales catalogadas en el manifiesto.*\n")
        f.write("\n")

    f.write("## 3. Clientes y Marcas Identificadas\n\n")
    f.write("Activos recuperados de la sección de clientes y eventos corporativos:\n\n")
    for it in items_by_cat['clients'][:20]:
        dim = f"{it.get('width')}x{it.get('height')}px"
        txt = it.get('alt') or it.get('nearby_text') or 'Cliente'
        f.write(f"- `{it.get('filename')}` ({dim}): {txt}\n")
    if len(items_by_cat['clients']) > 20:
        f.write(f"- *... y {len(items_by_cat['clients']) - 20} clientes adicionales en manifest.csv.*\n")
    f.write("\n")

    f.write("## 4. Equipamiento Técnico Relevado\n\n")
    f.write("Equipos reales fotografiados en depósito o en operación:\n\n")
    for it in items_by_cat['equipment'][:25]:
        dim = f"{it.get('width')}x{it.get('height')}px"
        nearby = it.get('nearby_text') or it.get('alt') or ''
        f.write(f"- `{it.get('filename')}` ({dim}) — `{it.get('source_page')}`: *{nearby[:70]}*\n")
    if len(items_by_cat['equipment']) > 25:
        f.write(f"- *... y {len(items_by_cat['equipment']) - 25} equipos más en manifest.csv.*\n")
    f.write("\n")

    f.write("## 5. Material Descartado y Justificación\n\n")
    f.write("- **AFIP DATAWEB**: Icono reglamentario `DATAWEB.jpg` y enlaces QR excluidos de descarga.\n")
    f.write("- **Favicons e iconos técnicos**: Conjunto de `icon-32.png` a `icon-228.png` excluidos para no saturar el catálogo visual.\n")
    f.write("- **Píxeles y recursos menores a 30x30px**: Excluidos automáticamente por falta de valor visual.\n\n")

    f.write("## 6. Selección Recomendada para la Curaduría de Centro Rental 2.0\n\n")
    f.write("Para la próxima fase de curaduría comercial y diseño, se recomienda priorizar los siguientes activos:\n\n")
    f.write("1. **Teatro Colón para UNICEF** (`teatro-colon-para-unicef`): Máxima jerarquía cultural e institucional.\n")
    f.write("2. **VIP Ed Sheeran en Estadio Único de La Plata** (`--vip-ed-sheeran-estadio-unico-la-plata`): Credencial en eventos de escala masiva internacional.\n")
    f.write("3. **Versace en Sofitel** (`--versace-en-el-sofitel-presentacion-perfume-eros-3`): Evento de marca de lujo con ambientación lumínica refinada.\n")
    f.write("4. **Hotel Alvear Palace** (`--alvear-palace---casamiento`): Posicionamiento en eventos sociales y bodas de alta gama.\n")
    f.write("5. **Hotel Hilton & Hotel Scala**: Congresos corporativos con pantallas LED y sonido de precisión.\n")
    f.write("6. **Embajada de Marruecos & Embajada de Israel**: Actos protocolares y streaming institucional.\n\n")

    f.write("## 7. Instrucciones para la Curaduría Manual\n\n")
    f.write("1. Consultar `content-source/manifests/manifest.csv` para filtrar por categoría y dimensiones.\n")
    f.write("2. Seleccionar las mejores fotos de cada evento y copiarlas a `content-source/curated/<evento-nombre>/`.\n")
    f.write("3. Cuando el usuario lo indique, vincular las imágenes curadas en `data/site.ts` y en las secciones de la web.\n")

print(f"[OK] Reporte Markdown guardado en: {report_path}")
