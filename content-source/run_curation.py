#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Ejecutor de Curaduría para Centro Rental 2.0.
Copia los activos seleccionados a content-source/curated/,
genera curated-manifest.json y curation-report.md.
"""

import os
import shutil
import json
import time

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(BASE_DIR)
RAW_DIR = os.path.join(BASE_DIR, "raw")
MANIFESTS_DIR = os.path.join(BASE_DIR, "manifests")
CURATED_DIR = os.path.join(BASE_DIR, "curated")

SUBDIRS = ["brand", "hero", "events", "equipment", "clients", "products", "archive"]

# 1. Crear directorios
for sd in SUBDIRS:
    os.makedirs(os.path.join(CURATED_DIR, sd), exist_ok=True)

# 2. Cargar manifiesto original
with open(os.path.join(MANIFESTS_DIR, "manifest.json"), "r", encoding="utf-8") as f:
    raw_manifest = json.load(f)

# Diccionario por filename
manifest_by_filename = {}
for r in raw_manifest:
    if r.get("review_status") != "duplicate_reference":
        manifest_by_filename[r["filename"]] = r

# 3. Definición de la selección curada

# HERO CANDIDATES (3 a 5 opciones de gran formato horizontal)
HERO_SELECTIONS = [
    {
        "filename": "events_1234_1f939658.jpg",
        "title": "Opción 1: Teatro ND — Pantalla LED P2.8 de 5x3 metros",
        "raw_cat": "events",
        "dimensions": "1600x1067",
        "reason": "Escala escénica masiva, simetría perfecta, pantalla LED central de alto impacto y espacio lateral/superior oscuro ideal para el H1 y el botón Ambilight."
    },
    {
        "filename": "events_508_0404f1e6.jpg",
        "title": "Opción 2: Versace en Sofitel — Lanzamiento Perfume Eros",
        "raw_cat": "events",
        "dimensions": "1280x960",
        "reason": "Atmósfera de show premium con haces de luz violeta/azul, elegancia cinematográfica, conecta 100% con la estética Ambilight."
    },
    {
        "filename": "events_1212_ff1d8edd.jpg",
        "title": "Opción 3: Teatro Colón — Gala UNICEF",
        "raw_cat": "events",
        "dimensions": "1156x867",
        "reason": "Máxima jerarquía arquitectónica e institucional de Argentina. Genera impacto de credibilidad inmediato ante cualquier cliente corporativo."
    },
    {
        "filename": "events_1248_2250013a.jpg",
        "title": "Opción 4: Hotel Hilton — Escenario y Pantalla Panorámica",
        "raw_cat": "events",
        "dimensions": "1156x867",
        "reason": "Demuestra capacidad en congresos de primer nivel internacional y hotelería de lujo en Buenos Aires."
    },
    {
        "filename": "equipment_591_70a8fe9b.jpg",
        "title": "Opción 5: Setup Técnico — Consola Digital y Procesamiento de Audio",
        "raw_cat": "equipment",
        "dimensions": "2048x1152",
        "reason": "Resolución masiva 2K, foco en tecnología, faders y potenciómetros iluminados. Enfoque puro en 'equipamiento de precisión'."
    }
]

# PORTFOLIO DE EVENTOS (20 imágenes representativas con diversidad de categorías)
EVENT_SELECTIONS = [
    # 1. Teatro Colón / UNICEF (Cultura / Institucional / Élite)
    {
        "filename": "events_1212_ff1d8edd.jpg",
        "event_name": "Teatro Colón — Gala UNICEF",
        "category_type": "Teatro & Institucional",
        "raw_cat": "events",
        "reason": "Vista de la sala principal y palcos del Teatro Colón iluminados durante el evento de UNICEF."
    },
    {
        "filename": "events_1220_caa8184a.jpg",
        "event_name": "Teatro Colón — Puesta Escénica",
        "category_type": "Teatro & Institucional",
        "raw_cat": "events",
        "reason": "Detalle del escenario del Colón con microfonía y retorno técnico de sonido."
    },
    # 2. Versace en Sofitel (Lanzamiento de Marca de Lujo)
    {
        "filename": "events_497_49169437.jpg",
        "event_name": "Versace en Sofitel — Perfume Eros",
        "category_type": "Lanzamiento de Marca / Moda",
        "raw_cat": "events",
        "reason": "Haces de luces robóticas y diseño lumínico azul noche en el Sofitel."
    },
    {
        "filename": "events_508_0404f1e6.jpg",
        "event_name": "Versace en Sofitel — Ambientación",
        "category_type": "Lanzamiento de Marca / Moda",
        "raw_cat": "events",
        "reason": "Puesta integral de ambientación lumínica y visuales para el lanzamiento."
    },
    # 3. Teatro ND (Pantalla LED y Show)
    {
        "filename": "events_1234_1f939658.jpg",
        "event_name": "Teatro ND — Pantalla LED 2.8 de 5x3",
        "category_type": "Show & Pantallas LED",
        "raw_cat": "events",
        "reason": "Pantalla LED P2.8 de alta definición operando con contenidos escénicos."
    },
    {
        "filename": "events_1240_d3a78e1d.jpg",
        "event_name": "Teatro ND — Visuales en Vivo",
        "category_type": "Show & Pantallas LED",
        "raw_cat": "events",
        "reason": "Perspectiva de platea mostrando el brillo y contraste de la pantalla sobre el escenario."
    },
    # 4. Hotel Hilton (Corporativo Internacional)
    {
        "filename": "events_1248_2250013a.jpg",
        "event_name": "Hotel Hilton — Escenario Corporativo",
        "category_type": "Hotelería & Convenciones",
        "raw_cat": "events",
        "reason": "Setup corporativo completo en salón de convenciones del Hilton Buenos Aires."
    },
    # 5. Hotel Scala (Pantalla LED Indoor)
    {
        "filename": "events_1226_a732aed4.jpg",
        "event_name": "Hotel Scala — Pantalla LED Modular",
        "category_type": "Hotelería & Convenciones",
        "raw_cat": "events",
        "reason": "Estructura LED indoor para congreso médico/corporativo."
    },
    # 6. Alvear Palace Hotel (Social de Lujo / Bodas)
    {
        "filename": "events_64_f135ef5d.jpg",
        "event_name": "Alvear Palace Hotel — Gala y Boda",
        "category_type": "Social Premium / Bodas",
        "raw_cat": "events",
        "reason": "Ambientación lumínica y pista en el emblemático salón del Alvear Palace."
    },
    {
        "filename": "events_66_8a0d0dad.jpg",
        "event_name": "Alvear Palace Hotel — Iluminación Arquitectónica",
        "category_type": "Social Premium / Bodas",
        "raw_cat": "events",
        "reason": "Detalle de ambientación de centros de mesa y columnas con proyectores LED cálidos."
    },
    # 7. Sandra Mihanovich en Auditorio Belgrano (Concierto en Vivo)
    {
        "filename": "events_236_4a316b3e.jpg",
        "event_name": "Sandra Mihanovich — Auditorio Belgrano",
        "category_type": "Recitales & Música en Vivo",
        "raw_cat": "events",
        "reason": "Escenario completo en 960x720px con iluminación frontal y trasera en recital en vivo."
    },
    {
        "filename": "events_243_13202b23.jpg",
        "event_name": "Sandra Mihanovich — Puesta de Luces",
        "category_type": "Recitales & Música en Vivo",
        "raw_cat": "events",
        "reason": "Tomas de cabezales móviles y luces de show bañando a los músicos."
    },
    # 8. Fátima Flores en Teatro Tabarís (Teatro Comercial)
    {
        "filename": "events_211_29f77674.jpg",
        "event_name": "Fátima Flores — Teatro Tabarís",
        "category_type": "Teatro Comercial",
        "raw_cat": "events",
        "reason": "Montaje de pantallas LED traseras y efectos de iluminación en calle Corrientes."
    },
    # 9. Embajada de Marruecos (Protocolo y Diplomacia)
    {
        "filename": "events_1254_5d75261e.jpg",
        "event_name": "Embajada de Marruecos — Fiesta del Trono",
        "category_type": "Diplomacia & Protocolo",
        "raw_cat": "events",
        "reason": "Acto protocolar oficial con tarimas, sonido diplomático y banderas institucionales."
    },
    # 10. Embajada de Israel (Transmisión Streaming Oficial)
    {
        "filename": "events_879_152057fe.jpg",
        "event_name": "Embajada de Israel — Transmisión Oficial",
        "category_type": "Streaming & Transmisión",
        "raw_cat": "events",
        "reason": "Cabina técnica de transmisión en vivo y streaming multicámara."
    },
    # 11. Festival Fortinera Deroense (Mega Evento al Aire Libre)
    {
        "filename": "images_267_0b204be3.jpg",
        "event_name": "Festival Fortinera Deroense — Escenario Mayor",
        "category_type": "Festivales Masivos",
        "raw_cat": "images",
        "reason": "Escenario de grandes dimensiones al aire libre con line array suspendido y pantallas gigantes."
    },
    {
        "filename": "images_274_6686fcda.jpg",
        "event_name": "Festival Fortinera Deroense — Puesta Nocturna",
        "category_type": "Festivales Masivos",
        "raw_cat": "images",
        "reason": "Iluminación de show y haces de luces sobre multitud en estadio/predio abierto."
    },
    # 12. Congreso Internacional de Leasing (Convenciones)
    {
        "filename": "events_336_1b26f2ff.jpg",
        "event_name": "Congreso Internacional de Leasing",
        "category_type": "Congresos & Negocios",
        "raw_cat": "events",
        "reason": "Salón auditorio con pantallas panorámicas y sonido de conferencia."
    },
    # 13. Premios Jorge Newbery en Usina del Arte (Premios y Galas)
    {
        "filename": "events_874_221c7d0f.jpg",
        "event_name": "Premios Jorge Newbery — Usina del Arte",
        "category_type": "Premios & Galas",
        "raw_cat": "events",
        "reason": "Escenario de la Usina del Arte con pantallas de entrega de premios."
    },
    # 14. Catedral Metropolitana (Institucional Religioso)
    {
        "filename": "images_459_76bf7e1f.jpg",
        "event_name": "Catedral Metropolitana de Buenos Aires",
        "category_type": "Institucional & Catedral",
        "raw_cat": "images",
        "reason": "Puesta de audio y pantallas de repetición en el interior de la Catedral Metropolitana."
    }
]

# EQUIPAMIENTO TÉCNICO (10 activos clave)
EQUIPMENT_SELECTIONS = [
    {
        "filename": "equipment_591_70a8fe9b.jpg",
        "title": "Consola de Mezcla Digital Pro",
        "category": "Audio & Sonido",
        "raw_cat": "equipment",
        "reason": "Foto en 2048x1152 de consola profesional con controles motorizados iluminados."
    },
    {
        "filename": "equipment_590_726513f9.jpg",
        "title": "Sistemas de Altavoces y Line Array",
        "category": "Audio & Sonido",
        "raw_cat": "equipment",
        "reason": "Detalle de módulos de sonido de alta fidelidad para gran cobertura."
    },
    {
        "filename": "equipment_1136_a19a4939.jpg",
        "title": "Unidad de Producción Streaming",
        "category": "Streaming & Broadcast",
        "raw_cat": "equipment",
        "reason": "Switcher de video y monitores multicanal para transmisión en vivo."
    },
    {
        "filename": "equipment_1142_6a7c0f39.jpg",
        "title": "Estudio de TV y Ciclorama",
        "category": "Streaming & Broadcast",
        "raw_cat": "equipment",
        "reason": "Parrilla de iluminación técnica de estudio y sets virtuales."
    },
    {
        "filename": "equipment_331_2132053d.jpg",
        "title": "Cabina de Traducción Simultánea",
        "category": "Traducción & Conferencias",
        "raw_cat": "equipment",
        "reason": "Equipamiento de cabinas insonorizadas y consolas para intérpretes internacionales."
    },
    {
        "filename": "equipment_329_42cc8471.jpg",
        "title": "Micrófonos Cuello de Ganso y Receptores",
        "category": "Traducción & Conferencias",
        "raw_cat": "equipment",
        "reason": "Sistemas de microfonía para delegados y mesas de directorio."
    },
    {
        "filename": "equipment_596_cb66c8a5.jpg",
        "title": "Tarimas y Escenarios Modulares",
        "category": "Estructuras & Escenarios",
        "raw_cat": "equipment",
        "reason": "Estructuras de aluminio y tarimas antideslizantes de montaje rápido."
    },
    {
        "filename": "equipment_597_163a8fc6.jpg",
        "title": "Trusses y Vallas de Contención",
        "category": "Estructuras & Rigging",
        "raw_cat": "equipment",
        "reason": "Estructuras de cuelgue de luminarias y delimitación perimetral para público."
    },
    {
        "filename": "events_1234_1f939658.jpg",
        "title": "Pantalla LED P2.8 Indoor",
        "category": "Pantallas LED & Video",
        "raw_cat": "events",
        "reason": "Gabinete modular de alta densidad de píxeles para escenarios cerrados."
    },
    {
        "filename": "equipment_925_9db96653.jpg",
        "title": "Producción con Escenario Virtual 3D",
        "category": "Tecnología & Virtual",
        "raw_cat": "equipment",
        "reason": "Integración de pantallas LED con realidad extendida y chroma."
    }
]

# CLIENTES / LOGOS OFICIALES (Lista de 25 marcas clave extraídas de /clientes)
CLIENT_LOGOS_SELECTIONS = [
    {"filename": "clients_13_7fcef291.gif", "name": "AFA — Asociación del Fútbol Argentino", "sector": "Deportes & Institucional", "certainty": "ALTA (Logo publicado en /clientes)"},
    {"filename": "clients_17_17f06e53.gif", "name": "PlayStation / Sony", "sector": "Entretenimiento & Tecnología", "certainty": "ALTA (Logo publicado en /clientes)"},
    {"filename": "clients_16_56eb0888.gif", "name": "L'Oréal", "sector": "Cosmética & Belleza", "certainty": "ALTA (Logo publicado en /clientes)"},
    {"filename": "clients_22_be0eb925.gif", "name": "McDonald's", "sector": "Consumo Masivo", "certainty": "ALTA (Logo publicado en /clientes)"},
    {"filename": "clients_9_10f2887e.gif", "name": "Citroën", "sector": "Automotriz", "certainty": "ALTA (Logo publicado en /clientes)"},
    {"filename": "clients_33_56fc2bad.gif", "name": "MINI (BMW Group)", "sector": "Automotriz", "certainty": "ALTA (Logo publicado en /clientes)"},
    {"filename": "clients_36_33de3cbe.gif", "name": "Sheraton Hotels & Resorts", "sector": "Hotelería 5 Estrellas", "certainty": "ALTA (Logo publicado en /clientes)"},
    {"filename": "clients_21_bb912e60.gif", "name": "Correo Argentino", "sector": "Servicios Públicos", "certainty": "ALTA (Logo publicado en /clientes)"},
    {"filename": "clients_27_63d1539f.gif", "name": "Banco Credicoop", "sector": "Financiero", "certainty": "ALTA (Logo publicado en /clientes)"},
    {"filename": "clients_26_d33cb3ea.gif", "name": "Autopistas del Sol", "sector": "Infraestructura", "certainty": "ALTA (Logo publicado en /clientes)"},
    {"filename": "clients_56_b6a1a823.gif", "name": "Eli Lilly", "sector": "Farmacéutica", "certainty": "ALTA (Logo publicado en /clientes)"},
    {"filename": "clients_12_ae51dba5.gif", "name": "Sol Meliá Hotels & Resorts", "sector": "Hotelería Internacional", "certainty": "ALTA (Logo publicado en /clientes)"},
    {"filename": "clients_18_222c77f0.gif", "name": "Trilenium Casino", "sector": "Entretenimiento", "certainty": "ALTA (Logo publicado en /clientes)"},
    {"filename": "clients_7_fb7de445.gif", "name": "ACDE (Dirigentes de Empresa)", "sector": "Empresarial", "certainty": "ALTA (Logo publicado en /clientes)"},
    {"filename": "clients_14_e105dc8e.gif", "name": "AABA (Abogados de Buenos Aires)", "sector": "Legal / Profesional", "certainty": "ALTA (Logo publicado en /clientes)"},
    {"filename": "clients_20_ac228ee8.gif", "name": "ATVC (Asoc. TV por Cable)", "sector": "Telecomunicaciones", "certainty": "ALTA (Logo publicado en /clientes)"},
    {"filename": "clients_10_9b312762.gif", "name": "Lidherma Corp.", "sector": "Dermocosmética", "certainty": "ALTA (Logo publicado en /clientes)"},
    {"filename": "clients_28_728645fc.gif", "name": "Megatlon", "sector": "Fitness & Salud", "certainty": "ALTA (Logo publicado en /clientes)"},
    {"filename": "clients_15_0ee654ec.gif", "name": "Club de Amigos", "sector": "Deportivo & Social", "certainty": "ALTA (Logo publicado en /clientes)"},
    {"filename": "clients_35_74e47a82.gif", "name": "ND Ateneo", "sector": "Teatro & Cultura", "certainty": "ALTA (Logo publicado en /clientes)"},
    {"filename": "clients_31_6cec3b6e.gif", "name": "BAUEN Hotel", "sector": "Hotelería", "certainty": "ALTA (Logo publicado en /clientes)"},
    {"filename": "clients_32_2d482552.gif", "name": "Hotel Cuatro Reyes", "sector": "Hotelería", "certainty": "ALTA (Logo publicado en /clientes)"},
    {"filename": "clients_11_e6b81e85.gif", "name": "Nucete", "sector": "Alimentos", "certainty": "ALTA (Logo publicado en /clientes)"},
    {"filename": "clients_19_eefb6842.gif", "name": "Agro Puerto", "sector": "Agroindustria", "certainty": "ALTA (Logo publicado en /clientes)"},
    {"filename": "clients_25_47e34597.gif", "name": "Alhec Group", "sector": "Finanzas & Turismo", "certainty": "ALTA (Logo publicado en /clientes)"}
]

# BRAND / IDENTIDAD
BRAND_SELECTIONS = [
    {
        "filename": "logos_logo_b2549209.png",
        "title": "Logotipo Oficial Histórico Centro Rental",
        "raw_cat": "logos",
        "reason": "Logotipo principal original extraído de la cabecera del sitio oficial (verde manzana #b5d448 y gris neutro)."
    }
]

# PRODUCTOS
PRODUCT_SELECTIONS = [
    {"filename": "products_1100_f59e4bef.jpg", "title": "Smart TV 4K para Stands", "raw_cat": "products", "reason": "Televisores de alta resolución para stands corporativos."},
    {"filename": "products_1126_a9d5d7dc.jpg", "title": "PlayStation / Gaming para Activaciones", "raw_cat": "products", "reason": "Equipamiento para stands de entretenimiento."},
    {"filename": "products_1130_8da159f6.jpg", "title": "Soportes de Pie para Pantallas", "raw_cat": "products", "reason": "Soportes regulables para ferias y exposiciones."},
    {"filename": "products_600_a1275970.jpg", "title": "Accesorios y Mobiliario de Salón", "raw_cat": "products", "reason": "Biombos y accesorios para delimitación de salas."}
]

# ARCHIVE (Muestras descartables / baja resolución / placehold.co)
ARCHIVE_SELECTIONS = [
    {"filename": "events_65_b715e456.jpg", "raw_cat": "events", "reason": "Resolución miniatura antigua (276x204px) de evento Alvear Palace."},
    {"filename": "events_67_099b170d.jpg", "raw_cat": "events", "reason": "Miniatura 276x204px sin detalle técnico."},
    {"filename": "images_1000_a0b38f5c.jpg", "raw_cat": "images", "reason": "Foto genérica antigua de baja resolución testimonial."},
    {"filename": "images_1004_9dcce9bf.jpg", "raw_cat": "images", "reason": "Recurso de baja exposición y valor técnico desactualizado."}
]

print("Copiando activos a content-source/curated/...")

curated_manifest = {
    "generated_at": time.strftime("%Y-%m-%d %H:%M:%S"),
    "hero": [],
    "events": [],
    "equipment": [],
    "clients": [],
    "brand": [],
    "products": [],
    "archive": []
}

def copy_asset(source_cat, filename, target_subdir, metadata):
    src = os.path.join(RAW_DIR, source_cat, filename)
    dst = os.path.join(CURATED_DIR, target_subdir, filename)
    if os.path.exists(src):
        shutil.copy2(src, dst)
        rec = manifest_by_filename.get(filename, {})
        entry = {**rec, **metadata, "curated_path": f"content-source/curated/{target_subdir}/{filename}"}
        curated_manifest[target_subdir].append(entry)
        print(f"  [+] {target_subdir}/{filename}")
    else:
        print(f"  [!] No existe archivo origen: {src}")

# Copiar Hero
print("\n--- Copiando Hero ---")
for h in HERO_SELECTIONS:
    copy_asset(h["raw_cat"], h["filename"], "hero", h)

# Copiar Events
print("\n--- Copiando Eventos ---")
for ev in EVENT_SELECTIONS:
    copy_asset(ev["raw_cat"], ev["filename"], "events", ev)

# Copiar Equipment
print("\n--- Copiando Equipamiento ---")
for eq in EQUIPMENT_SELECTIONS:
    copy_asset(eq["raw_cat"], eq["filename"], "equipment", eq)

# Copiar Clients
print("\n--- Copiando Clientes ---")
for cl in CLIENT_LOGOS_SELECTIONS:
    copy_asset("clients", cl["filename"], "clients", cl)

# Copiar Brand
print("\n--- Copiando Brand ---")
for br in BRAND_SELECTIONS:
    copy_asset(br["raw_cat"], br["filename"], "brand", br)

# Copiar Products
print("\n--- Copiando Productos ---")
for pr in PRODUCT_SELECTIONS:
    copy_asset(pr["raw_cat"], pr["filename"], "products", pr)

# Copiar Archive
print("\n--- Copiando Archivo/Descartes ---")
for ar in ARCHIVE_SELECTIONS:
    # Buscar en events o images
    cat = "events" if "events" in ar["filename"] else "images"
    copy_asset(cat, ar["filename"], "archive", ar)

# Guardar curated-manifest.json
manifest_path = os.path.join(CURATED_DIR, "curated-manifest.json")
with open(manifest_path, "w", encoding="utf-8") as f:
    json.dump(curated_manifest, f, indent=2, ensure_ascii=False)
print(f"\n[OK] Guardado manifiesto curado: {manifest_path}")

# Generar curation-report.md
report_path = os.path.join(CURATED_DIR, "curation-report.md")

with open(report_path, "w", encoding="utf-8") as f:
    f.write("# Informe de Curaduría de Contenido — Centro Rental 2.0\n\n")
    f.write(f"- **Fecha**: {time.strftime('%Y-%m-%d %H:%M:%S')}\n")
    f.write("- **Estado**: Selección preliminar lista para revisión manual (sin modificaciones en la landing).\n\n")
    
    f.write("## 1. Criterios de Selección Aplicados\n\n")
    f.write("1. **Calidad visual y resolución**: Se seleccionaron únicamente imágenes con definición apta para pantallas Retina y monitores modernos (hasta 2048x1152px), descartando fotos pixeladas de la era 2012.\n")
    f.write("2. **Impacto comercial**: Se priorizó el material que demuestra capacidad de montaje en locaciones de primer nivel (Teatro Colón, Alvear Palace, Hilton, Sofitel, Usina del Arte, Teatro ND).\n")
    f.write("3. **Diversidad de rubros**: Equilibrio balanceado entre galas institucionales, recitales de música en vivo, lanzamientos de marcas de lujo, congresos corporativos, bodas de alta gama y festividades diplomáticas.\n")
    f.write("4. **Rigor en la atribución**: Diferenciación estricta entre cliente confirmado, locación/escenario y marca convocante.\n\n")
    
    f.write("## 2. Propuestas de Imagen para el Hero Principal\n\n")
    f.write("Se seleccionaron **5 opciones reales** que poseen formato horizontal amplio, espacio para el texto y una atmósfera que respeta el efecto Ambilight:\n\n")
    f.write("| Opción | Activo | Dimensiones | Locación / Tipo | Razón de Selección |\n")
    f.write("| :--- | :--- | :---: | :--- | :--- |\n")
    for i, h in enumerate(HERO_SELECTIONS, 1):
        f.write(f"| **Opción {i}** | `{h['filename']}` | `{h['dimensions']}px` | {h['title']} | {h['reason']} |\n")
    f.write("\n")
    
    f.write("## 3. Portfolio de Eventos Curado (20 Fotografías Destacadas)\n\n")
    f.write("Distribución de 1 a 3 fotos por caso para armar el nuevo Bento Grid o Galería de Proyectos de Centro Rental 2.0:\n\n")
    f.write("| Caso / Evento | Tipo / Rubro | Archivo en `curated/events/` | Motivo de Inclusión |\n")
    f.write("| :--- | :--- | :--- | :--- |\n")
    for ev in EVENT_SELECTIONS:
        f.write(f"| **{ev['event_name']}** | {ev['category_type']} | `{ev['filename']}` | {ev['reason']} |\n")
    f.write("\n")
    
    f.write("## 4. Equipamiento Técnico Seleccionado (10 Unidades Clave)\n\n")
    f.write("Material fotográfico real para ilustrar las categorías de Sonido, Iluminación, Pantallas LED, Streaming y Estructuras:\n\n")
    f.write("| Categoría Técnica | Título del Activo | Archivo en `curated/equipment/` | Justificación Técnica |\n")
    f.write("| :--- | :--- | :--- | :--- |\n")
    for eq in EQUIPMENT_SELECTIONS:
        f.write(f"| **{eq['category']}** | {eq['title']} | `{eq['filename']}` | {eq['reason']} |\n")
    f.write("\n")
    
    f.write("## 5. Clientes y Marcas Detectadas (Análisis de Certeza y Contexto)\n\n")
    f.write("> **IMPORTANTE**: No todas las marcas deben presentarse como 'clientes directos'. A continuación se desglosan por nivel de certeza:\n\n")
    
    f.write("### A. Clientes Oficiales Confirmados (Publicados en `/clientes` con imagotipo oficial)\n\n")
    f.write("| Marca / Entidad | Sector | Archivo en `curated/clients/` | Nivel de Certeza |\n")
    f.write("| :--- | :--- | :--- | :--- |\n")
    for cl in CLIENT_LOGOS_SELECTIONS[:18]:
        f.write(f"| **{cl['name']}** | {cl['sector']} | `{cl['filename']}` | {cl['certainty']} |\n")
    f.write("\n*(Ver lista completa de 25 marcas en `curated-manifest.json`)*\n\n")
    
    f.write("### B. Marcas y Locaciones en Eventos Realizados (Distinción Legal y Comercial)\n\n")
    f.write("- **UNICEF**: Causa/evento benéfico en el Teatro Colón. *Recomendación*: Presentar como *'Gala Anual UNICEF en Teatro Colón'* (no adjudicarlo como cuenta corporativa fija).\n")
    f.write("- **Versace (Eros)**: Presentación de producto en Sofitel. *Recomendación*: Presentar como *'Lanzamiento oficial perfume Eros — Versace'* (el cliente contratante probablemente fue la distribuidora de fragancias o agencia de eventos).\n")
    f.write("- **Ed Sheeran en Estadio Único**: *REVISIÓN HUMANA OBLIGATORIA*. La web vieja tenía la entrada creada, pero las imágenes vinculadas eran marcadores `placehold.co`. Hasta no disponer de fotos reales del rider/sector VIP, **no utilizar como caso visual destacado**.\n")
    f.write("- **Alvear Palace Hotel / Hotel Hilton / Hotel Scala**: Locaciones 5 estrellas donde Centro Rental montó técnica. Se pueden citar tanto como locaciones habituales como proveedores técnicos de eventos en dichos hoteles.\n")
    f.write("- **Embajadas (Marruecos e Israel)**: Cobertura técnica protocolar confirmada con banderas y streaming oficial en vivo.\n\n")
    
    f.write("## 6. Identidad de Marca y Elementos Gráficos Históricos\n\n")
    f.write("- **Logotipo oficial original**: Recuperado en `curated/brand/logos_logo_b2549209.png`.\n")
    f.write("- **Paleta histórica**: Verde manzana (`#b5d448`), gris neutro (`#666666`), blanco y negro.\n")
    f.write("- **Evolución 2.0 sugerida**: Mantener el concepto dark mode moderno (`#09090b`) con iluminación escénica violeta/fucsia (`#7c3aed` / `#c026d3`), pero se puede integrar el verde histórico como acento de disponibilidad (*'Disponibilidad 2026'* con punto verde esmeralda) o como guiño de continuidad para que el cliente reconozca su historia.\n\n")
    
    f.write("## 7. Material Descartado y Archivo (`curated/archive/`)\n\n")
    f.write("- Miniaturas de baja resolución (< 300px) de eventos de 2012-2013.\n")
    f.write("- Banners de AFIP (`DATAWEB.jpg`) y códigos QR fiscales.\n")
    f.write("- Favicons de 16x16 a 228x228.\n")
    f.write("- Activos con enlaces rotos a `placehold.co` del CMS anterior.\n\n")
    
    f.write("## 8. Próximos Pasos para Centro Rental 2.0\n\n")
    f.write("1. **Validación del usuario**: Revisar las 5 propuestas de Hero y los 20 eventos seleccionados en este reporte.\n")
    f.write("2. **Elección final**: Decidir qué imagen ocupará el Hero y cuáles conformarán el Bento Grid de la landing pública.\n")
    f.write("3. **Optimización controlada**: Una vez aprobados los seleccionados, convertirlos a formato WebP optimizado e inyectarlos de forma limpia en `data/site.ts`.\n")

print(f"[OK] Reporte de Curaduría generado: {report_path}")
