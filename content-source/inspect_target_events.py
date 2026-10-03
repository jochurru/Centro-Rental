#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import json
import os

with open("content-source/manifests/manifest.json", "r", encoding="utf-8") as f:
    data = json.load(f)

unique_records = [r for r in data if r.get("review_status") != "duplicate_reference"]

target_keywords = [
    "colon", "ed-sheeran", "versace", "alvear", "teatro-nd", "hilton",
    "scala", "marruecos", "israel", "mihanovich", "newbery", "usina",
    "fepais", "exolgan", "catedral", "ibertic", "macbeth", "deroense"
]

events_by_target = {}
for kw in target_keywords:
    events_by_target[kw] = []

for r in unique_records:
    page = r.get("source_page", "").lower()
    for kw in target_keywords:
        if kw in page:
            events_by_target[kw].append(r)

for kw, items in events_by_target.items():
    print(f"\n=== KEYWORD: {kw} ({len(items)} items) ===")
    for it in items:
        fn = it["filename"]
        w, h = it.get("width", 0), it.get("height", 0)
        size_kb = it.get("filesize", 0) / 1024
        print(f"  {fn} ({w}x{h}, {size_kb:.1f} KB) | page: {it['source_page'].split('/')[-1]}")
