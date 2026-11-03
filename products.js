/* ============================================================
   PRODUCTS — the only file you edit to add products.
   Every list is empty for now, so each page shows "Coming soon".
   As soon as you add a product, the page switches to the search
   system and the filters (categories, brands, tags, price,
   stock, promo) are generated automatically from your data.

   ------------------------------------------------------------
   HOW TO ADD A PRODUCT  (copy this block into "products": [ ])
   ------------------------------------------------------------
   {
     id: "coca-33",                    // unique, required
     name: { fr: "Coca-Cola 33 cl", ar: "كوكا كولا 33 cl", en: "Coca-Cola 33 cl", es: "Coca-Cola 33 cl", pt: "Coca-Cola 33 cl" },
                                       // or simply  name: "Coca-Cola 33 cl"  (same in every language)
     description: { fr: "Canette fraîche.", en: "Chilled can." },   // optional (text or per-language)
     category: "boissons",             // must match a category id below (optional)
     brand: "Coca-Cola",               // optional -> "Marques" filter
     tags: ["sans sucre", { id: "froid", fr: "Servi froid", en: "Served cold" }],   // optional -> "Étiquettes" filter
     price: 8,                         // number, in the currency below
     oldPrice: 10,                     // optional, shown crossed out + "Promo" badge
     options: [                        // optional, e.g. sizes (shown in the product window)
       { label: { fr: "33 cl", en: "33 cl" }, price: 8 },
       { label: { fr: "1 L",   en: "1 L"   }, price: 14 }
     ],                                // if "price" is left out, the lowest option price is used ("À partir de")
     image: "images/coca.jpg",         // optional, one picture ...
     images: ["images/a.jpg", "images/b.jpg"],   // ... or several (gallery)
     available: true,                  // false -> "Épuisé"
     badge: "new",                     // optional: "new" or "promo"
     featured: true,                   // optional: shown first when sorted by relevance
     sku: "CC33"                       // optional: searchable reference
   }

   HOW TO ADD A CATEGORY  (copy into "categories": [ ])
   { id: "boissons", name: { fr: "Boissons", ar: "مشروبات", en: "Drinks", es: "Bebidas", pt: "Bebidas" }, icon: "🥤" }

   Tip: text in fr/ar/en/es/pt is optional — any missing language falls
   back to French, so you can start with French only.
   ============================================================ */

const PRICE_NOTE = {
  fr: "Prix public conseillé TTC · tarifs applicables à partir du 15 juin 2026",
  ar: "السعر العمومي الموصى به بما فيه الضريبة · أسعار سارية ابتداءً من 15 يونيو 2026",
  en: "Recommended retail price incl. VAT · prices from 15 June 2026",
  es: "Precio público recomendado IVA incl. · tarifas desde el 15 de junio de 2026",
  pt: "Preço público recomendado c/ IVA · tarifas a partir de 15 de junho de 2026"
};

window.CATALOG = {
  currency: "DH",

  /* Snacks & rafraîchissements */
  snacks: {
    categories: [],
    products: []
  },

  /* Huiles & lubrifiants Shell */
  lubrifiants: {
    "categories": [
      {
        "id": "moteur-legers",
        "icon": "🚗",
        "name": {
          "fr": "Moteur véhicules légers",
          "ar": "زيوت محركات السيارات الخفيفة",
          "en": "Light-vehicle engine oils",
          "es": "Aceites de motor para vehículos ligeros",
          "pt": "Óleos de motor para veículos ligeiros"
        }
      },
      {
        "id": "moteur-diesel",
        "icon": "🚛",
        "name": {
          "fr": "Moteur diesel professionnel",
          "ar": "زيوت محركات الديزل المهنية",
          "en": "Professional diesel engine oils",
          "es": "Aceites de motor diésel profesional",
          "pt": "Óleos de motor diesel profissional"
        }
      },
      {
        "id": "transmission",
        "icon": "⚙️",
        "name": {
          "fr": "Transmission",
          "ar": "زيوت ناقل الحركة",
          "en": "Transmission oils",
          "es": "Aceites de transmisión",
          "pt": "Óleos de transmissão"
        }
      },
      {
        "id": "moto",
        "icon": "🏍️",
        "name": {
          "fr": "Motos",
          "ar": "زيوت الدراجات النارية",
          "en": "Motorcycle oils",
          "es": "Aceites para motos",
          "pt": "Óleos para motos"
        }
      },
      {
        "id": "industrie",
        "icon": "🏭",
        "name": {
          "fr": "Hydrauliques & engrenages industriels",
          "ar": "زيوت هيدروليكية وتروس صناعية",
          "en": "Hydraulic & industrial gear oils",
          "es": "Aceites hidráulicos y de engranajes industriales",
          "pt": "Óleos hidráulicos e de engrenagens industriais"
        }
      },
      {
        "id": "graisses",
        "icon": "🛢️",
        "name": {
          "fr": "Graisses",
          "ar": "شحوم",
          "en": "Greases",
          "es": "Grasas",
          "pt": "Massas lubrificantes"
        }
      },
      {
        "id": "entretien",
        "icon": "💧",
        "name": {
          "fr": "Entretien & fluides",
          "ar": "العناية والسوائل",
          "en": "Care & fluids",
          "es": "Mantenimiento y fluidos",
          "pt": "Manutenção e fluidos"
        }
      }
    ],
    "products": [
      {
        "id": "shell-helix-hybrid-sp-0w-20",
        "image": "images/lubrifiants/shell-helix-hybrid-sp-0w-20.webp",
        "name": "Shell Helix Hybrid SP 0W-20",
        "category": "moteur-legers",
        "brand": "Shell Helix",
        "tags": [
          "0W-20"
        ],
        "options": [
          {
            "label": "1 L",
            "price": 175
          },
          {
            "label": "5 L",
            "price": 840
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "helix-ultra-ect-c6-0w-20",
        "image": "images/lubrifiants/helix-ultra-ect-c6-0w-20.webp",
        "name": "Helix Ultra ECT C6 0W-20",
        "category": "moteur-legers",
        "brand": "Shell Helix",
        "tags": [
          "0W-20"
        ],
        "options": [
          {
            "label": "1 L",
            "price": 175
          },
          {
            "label": "5 L",
            "price": 840
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-helix-ultra-ect-c2-c3-c3-sp-0w-30",
        "image": "images/lubrifiants/shell-helix-ultra-ect-c2-c3-c3-sp-0w-30.webp",
        "name": "Shell Helix Ultra ECT C2/C3 & C3 SP 0W-30",
        "category": "moteur-legers",
        "brand": "Shell Helix",
        "tags": [
          "0W-30"
        ],
        "options": [
          {
            "label": "1 L",
            "price": 170
          },
          {
            "label": "5 L",
            "price": 810
          },
          {
            "label": "209 L",
            "price": 31900
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-helix-ultra-ect-c3-5w-30",
        "image": "images/lubrifiants/shell-helix-ultra-ect-c3-5w-30.webp",
        "name": "Shell Helix Ultra ECT C3 5W-30",
        "category": "moteur-legers",
        "brand": "Shell Helix",
        "tags": [
          "5W-30"
        ],
        "options": [
          {
            "label": "1 L",
            "price": 160
          },
          {
            "label": "5 L",
            "price": 740
          },
          {
            "label": "209 L",
            "price": 29900
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-helix-ultra-pro-ag-5w-30",
        "image": "images/lubrifiants/shell-helix-ultra-pro-ag-5w-30.webp",
        "name": "Shell Helix Ultra Pro AG 5W-30",
        "category": "moteur-legers",
        "brand": "Shell Helix",
        "tags": [
          "5W-30"
        ],
        "options": [
          {
            "label": "1 L",
            "price": 150
          },
          {
            "label": "5 L",
            "price": 690
          },
          {
            "label": "209 L",
            "price": 29300
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-helix-ultra-pro-arl-5w-30",
        "image": "images/lubrifiants/shell-helix-ultra-pro-arl-5w-30.webp",
        "name": "Shell Helix Ultra Pro ARL 5W-30",
        "category": "moteur-legers",
        "brand": "Shell Helix",
        "tags": [
          "5W-30"
        ],
        "options": [
          {
            "label": "1 L",
            "price": 135
          },
          {
            "label": "5 L",
            "price": 649
          },
          {
            "label": "209 L",
            "price": 25292
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-helix-ultra-5w-40-sn-plus",
        "image": "images/lubrifiants/shell-helix-ultra-5w-40-sn-plus.webp",
        "name": "Shell Helix Ultra 5W-40 SN Plus",
        "category": "moteur-legers",
        "brand": "Shell Helix",
        "tags": [
          "5W-40"
        ],
        "options": [
          {
            "label": "1 L",
            "price": 135
          },
          {
            "label": "4 L",
            "price": 629
          },
          {
            "label": "5 L",
            "price": 649
          },
          {
            "label": "209 L",
            "price": 25400
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-helix-hx8-ect-5w-30-c3",
        "image": "images/lubrifiants/shell-helix-hx8-ect-5w-30-c3.webp",
        "name": "Shell Helix HX8 ECT 5W-30 C3",
        "category": "moteur-legers",
        "brand": "Shell Helix",
        "tags": [
          "5W-30"
        ],
        "options": [
          {
            "label": "1 L",
            "price": 129
          },
          {
            "label": "5 L",
            "price": 629
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-helix-hx8-ect-5w-40-c3",
        "image": "images/lubrifiants/shell-helix-hx8-ect-5w-40-c3.webp",
        "name": "Shell Helix HX8 ECT 5W-40 C3",
        "category": "moteur-legers",
        "brand": "Shell Helix",
        "tags": [
          "5W-40"
        ],
        "options": [
          {
            "label": "1 L",
            "price": 126
          },
          {
            "label": "5 L",
            "price": 589
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-helix-hx8-5w-40-sn-plus",
        "image": "images/lubrifiants/shell-helix-hx8-5w-40-sn-plus.webp",
        "name": "Shell Helix HX8 5W-40 SN Plus",
        "category": "moteur-legers",
        "brand": "Shell Helix",
        "tags": [
          "5W-40"
        ],
        "options": [
          {
            "label": "1 L",
            "price": 115
          },
          {
            "label": "4 L",
            "price": 459
          },
          {
            "label": "5 L",
            "price": 569
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-helix-hx7-10w-40-sn-plus",
        "image": "images/lubrifiants/shell-helix-hx7-10w-40-sn-plus.webp",
        "name": "Shell Helix HX7 10W-40 SN Plus",
        "category": "moteur-legers",
        "brand": "Shell Helix",
        "tags": [
          "10W-40"
        ],
        "options": [
          {
            "label": "1 L",
            "price": 89
          },
          {
            "label": "4 L",
            "price": 330
          },
          {
            "label": "5 L",
            "price": 370
          },
          {
            "label": "209 L",
            "price": 13290
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-helix-hx6-10w-40-sn-cf",
        "image": "images/lubrifiants/shell-helix-hx6-10w-40-sn-cf.webp",
        "name": "Shell Helix HX6 10W-40 SN CF",
        "category": "moteur-legers",
        "brand": "Shell Helix",
        "tags": [
          "10W-40"
        ],
        "options": [
          {
            "label": "1 L",
            "price": 78
          },
          {
            "label": "5 L",
            "price": 320
          },
          {
            "label": "209 L",
            "price": 11750
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-helix-hx5-15w-40-sl-cf-mf",
        "image": "images/lubrifiants/shell-helix-hx5-15w-40-sl-cf-mf.webp",
        "name": "Shell Helix HX5 15W-40 SL/CF MF",
        "category": "moteur-legers",
        "brand": "Shell Helix",
        "tags": [
          "15W-40"
        ],
        "options": [
          {
            "label": "1 L",
            "price": 75
          },
          {
            "label": "4 L",
            "price": 249
          },
          {
            "label": "5 L",
            "price": 299
          },
          {
            "label": "20 L",
            "price": 1149
          },
          {
            "label": "209 L",
            "price": 11099
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-helix-hx3-20w-50-sl-cf",
        "image": "images/lubrifiants/shell-helix-hx3-20w-50-sl-cf.webp",
        "name": "Shell Helix HX3 20W-50 SL CF",
        "category": "moteur-legers",
        "brand": "Shell Helix",
        "tags": [
          "20W-50"
        ],
        "options": [
          {
            "label": "1 L",
            "price": 56
          },
          {
            "label": "5 L",
            "price": 250
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-helix-hx3-40-sg-cd-mf",
        "image": "images/lubrifiants/shell-helix-hx3-40-sg-cd-mf.webp",
        "name": "Shell Helix HX3 40 SG/CD MF",
        "category": "moteur-legers",
        "brand": "Shell Helix",
        "tags": [],
        "options": [
          {
            "label": "1 L",
            "price": 55
          },
          {
            "label": "4 L",
            "price": 200
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-rimula-r6-lme-plus-5w-30",
        "image": "images/lubrifiants/shell-rimula-r6-lme-plus-5w-30.webp",
        "name": "Shell Rimula R6 LME Plus 5W-30",
        "category": "moteur-diesel",
        "brand": "Shell Rimula",
        "tags": [
          "5W-30"
        ],
        "options": [
          {
            "label": "209 L",
            "price": 28400
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-rimula-r6-lm-10w-40-cj4",
        "image": "images/lubrifiants/shell-rimula-r6-lm-10w-40-cj4.webp",
        "name": "Shell Rimula R6 LM 10W-40 CJ4",
        "category": "moteur-diesel",
        "brand": "Shell Rimula",
        "tags": [
          "10W-40"
        ],
        "options": [
          {
            "label": "209 L",
            "price": 24500
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-rimula-r5-le-10w-40-ci4",
        "image": "images/lubrifiants/shell-rimula-r5-le-10w-40-ci4.webp",
        "name": "Shell Rimula R5 LE 10W-40 CI4",
        "category": "moteur-diesel",
        "brand": "Shell Rimula",
        "tags": [
          "10W-40"
        ],
        "options": [
          {
            "label": "20 L",
            "price": 2100
          },
          {
            "label": "209 L",
            "price": 20180
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-rimula-r5-e-10w-40-ci4",
        "image": "images/lubrifiants/shell-rimula-r5-e-10w-40-ci4.webp",
        "name": "Shell Rimula R5 E 10W-40 CI4",
        "category": "moteur-diesel",
        "brand": "Shell Rimula",
        "tags": [
          "10W-40"
        ],
        "options": [
          {
            "label": "5 L",
            "price": 540
          },
          {
            "label": "20 L",
            "price": 2100
          },
          {
            "label": "209 L",
            "price": 20180
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-rimula-r4-x-15w-40-ci4",
        "image": "images/lubrifiants/shell-rimula-r4-x-15w-40-ci4.webp",
        "name": "Shell Rimula R4 X 15W-40 CI4",
        "category": "moteur-diesel",
        "brand": "Shell Rimula",
        "tags": [
          "15W-40"
        ],
        "options": [
          {
            "label": "1 L",
            "price": 79
          },
          {
            "label": "5 L",
            "price": 345
          },
          {
            "label": "20 L",
            "price": 1300
          },
          {
            "label": "209 L",
            "price": 12950
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-rimula-r3-t-15w-40-ch4",
        "image": "images/lubrifiants/shell-rimula-r3-t-15w-40-ch4.webp",
        "name": "Shell Rimula R3 T 15W-40 CH4",
        "category": "moteur-diesel",
        "brand": "Shell Rimula",
        "tags": [
          "15W-40"
        ],
        "options": [
          {
            "label": "1 L",
            "price": 70
          },
          {
            "label": "5 L",
            "price": 305
          },
          {
            "label": "20 L",
            "price": 1115
          },
          {
            "label": "209 L",
            "price": 11500
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-rimula-r2-extra-15w-40-cf4",
        "image": "images/lubrifiants/shell-rimula-r2-extra-15w-40-cf4.webp",
        "name": "Shell Rimula R2 Extra 15W-40 CF4",
        "category": "moteur-diesel",
        "brand": "Shell Rimula",
        "tags": [
          "15W-40"
        ],
        "options": [
          {
            "label": "1 L",
            "price": 60
          },
          {
            "label": "20 L",
            "price": 269
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-rimula-r2-40-r2-50-cf",
        "image": "images/lubrifiants/shell-rimula-r2-40-r2-50-cf.webp",
        "name": "Shell Rimula R2 40 / R2 50 CF",
        "category": "moteur-diesel",
        "brand": "Shell Rimula",
        "tags": [],
        "options": [
          {
            "label": "1 L",
            "price": 55
          },
          {
            "label": "5 L",
            "price": 239
          },
          {
            "label": "20 L",
            "price": 925
          },
          {
            "label": "209 L",
            "price": 9349
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-rimula-r1-50-cf",
        "image": "images/lubrifiants/shell-rimula-r1-50-cf.webp",
        "name": "Shell Rimula R1 50 CF",
        "category": "moteur-diesel",
        "brand": "Shell Rimula",
        "tags": [],
        "options": [
          {
            "label": "1 L",
            "price": 51
          },
          {
            "label": "20 L",
            "price": 225
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-spirax-s2-atf-d2",
        "image": "images/lubrifiants/shell-spirax-s2-atf-d2.webp",
        "name": "Shell Spirax S2 ATF D2",
        "category": "transmission",
        "brand": "Shell Spirax",
        "tags": [],
        "options": [
          {
            "label": "1 L",
            "price": 82
          },
          {
            "label": "20 L",
            "price": 1390
          },
          {
            "label": "209 L",
            "price": 13450
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-spirax-s2-a-80w-90",
        "image": "images/lubrifiants/shell-spirax-s2-a-80w-90.webp",
        "name": "Shell Spirax S2 A 80W-90",
        "category": "transmission",
        "brand": "Shell Spirax",
        "tags": [
          "80W-90"
        ],
        "options": [
          {
            "label": "20 L",
            "price": 1160
          },
          {
            "label": "209 L",
            "price": 11300
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-spirax-s2-a-85w-140",
        "image": "images/lubrifiants/shell-spirax-s2-a-85w-140.webp",
        "name": "Shell Spirax S2 A 85W-140",
        "category": "transmission",
        "brand": "Shell Spirax",
        "tags": [
          "85W-140"
        ],
        "options": [
          {
            "label": "5 L",
            "price": 305
          },
          {
            "label": "20 L",
            "price": 1075
          },
          {
            "label": "209 L",
            "price": 10200
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-spirax-s2-g-90",
        "image": "images/lubrifiants/shell-spirax-s2-g-90.webp",
        "name": "Shell Spirax S2 G 90",
        "category": "transmission",
        "brand": "Shell Spirax",
        "tags": [],
        "options": [
          {
            "label": "1 L",
            "price": 72
          },
          {
            "label": "20 L",
            "price": 1110
          },
          {
            "label": "209 L",
            "price": 11100
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-spirax-s2-g-140",
        "image": "images/lubrifiants/shell-spirax-s2-g-140.webp",
        "name": "Shell Spirax S2 G 140",
        "category": "transmission",
        "brand": "Shell Spirax",
        "tags": [],
        "options": [
          {
            "label": "1 L",
            "price": 69
          },
          {
            "label": "20 L",
            "price": 1080
          },
          {
            "label": "209 L",
            "price": 10600
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-spirax-s2-g-80w-90",
        "image": "images/lubrifiants/shell-spirax-s2-g-80w-90.webp",
        "name": "Shell Spirax S2 G 80W-90",
        "category": "transmission",
        "brand": "Shell Spirax",
        "tags": [
          "80W-90"
        ],
        "options": [
          {
            "label": "1 L",
            "price": 75
          },
          {
            "label": "20 L",
            "price": 1150
          },
          {
            "label": "209 L",
            "price": 10200
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-advance-4t-ultra-15w-50",
        "image": "images/lubrifiants/shell-advance-4t-ultra-15w-50.webp",
        "name": "Shell Advance 4T Ultra 15W-50",
        "category": "moto",
        "brand": "Shell Advance",
        "tags": [
          "15W-50"
        ],
        "options": [
          {
            "label": "1 L",
            "price": 120
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-advance-4t-ultra-10w-40-sp",
        "image": "images/lubrifiants/shell-advance-4t-ultra-10w-40-sp.webp",
        "name": "Shell Advance 4T Ultra 10W-40 SP",
        "category": "moto",
        "brand": "Shell Advance",
        "tags": [
          "10W-40"
        ],
        "options": [
          {
            "label": "1 L",
            "price": 115
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-advance-4t-ax7-10w-40",
        "image": "images/lubrifiants/shell-advance-4t-ax7-10w-40.webp",
        "name": "Shell Advance 4T AX7 10W-40",
        "category": "moto",
        "brand": "Shell Advance",
        "tags": [
          "10W-40"
        ],
        "options": [
          {
            "label": "1 L",
            "price": 90
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-advance-4t-ax5-15w-40",
        "image": "images/lubrifiants/shell-advance-4t-ax5-15w-40.webp",
        "name": "Shell Advance 4T AX5 15W-40",
        "category": "moto",
        "brand": "Shell Advance",
        "tags": [
          "15W-40"
        ],
        "options": [
          {
            "label": "1 L",
            "price": 75
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-advance-4t-ax3-20w-50",
        "image": "images/lubrifiants/shell-advance-4t-ax3-20w-50.webp",
        "name": "Shell Advance 4T AX3 20W-50",
        "category": "moto",
        "brand": "Shell Advance",
        "tags": [
          "20W-50"
        ],
        "options": [
          {
            "label": "1 L",
            "price": 65
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-advance-4t-ax2-sae-40",
        "image": "images/lubrifiants/shell-advance-4t-ax2-sae-40.webp",
        "name": "Shell Advance 4T AX2 SAE 40",
        "category": "moto",
        "brand": "Shell Advance",
        "tags": [],
        "options": [
          {
            "label": "1 L",
            "price": 55
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-advance-sx2-fb-egb",
        "image": "images/lubrifiants/shell-advance-sx2-fb-egb.webp",
        "name": "Shell Advance SX2 FB EGB",
        "category": "moto",
        "brand": "Shell Advance",
        "tags": [],
        "options": [
          {
            "label": "1 L",
            "price": 60
          },
          {
            "label": "20 L",
            "price": 965
          },
          {
            "label": "209 L",
            "price": 9760
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-tellus-s2-m-68",
        "image": "images/lubrifiants/shell-tellus-s2-m-68.webp",
        "name": "Shell Tellus S2 M 68",
        "category": "industrie",
        "brand": "Shell Tellus",
        "tags": [],
        "options": [
          {
            "label": "20 L",
            "price": 1065
          },
          {
            "label": "209 L",
            "price": 9745
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-tellus-s2-m-46",
        "image": "images/lubrifiants/shell-tellus-s2-m-46.webp",
        "name": "Shell Tellus S2 M 46",
        "category": "industrie",
        "brand": "Shell Tellus",
        "tags": [],
        "options": [
          {
            "label": "20 L",
            "price": 959
          },
          {
            "label": "209 L",
            "price": 8780
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-tellus-s2-m-32",
        "image": "images/lubrifiants/shell-tellus-s2-m-32.webp",
        "name": "Shell Tellus S2 M 32",
        "category": "industrie",
        "brand": "Shell Tellus",
        "tags": [],
        "options": [
          {
            "label": "20 L",
            "price": 1040
          },
          {
            "label": "209 L",
            "price": 8565
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-omala-s2-gx-680",
        "image": "images/lubrifiants/shell-omala-s2-gx-680.webp",
        "name": "Shell Omala S2 GX 680",
        "category": "industrie",
        "brand": "Shell Omala",
        "tags": [],
        "options": [
          {
            "label": "209 L",
            "price": 20760
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-omala-s2-gx-460",
        "image": "images/lubrifiants/shell-omala-s2-gx-460.webp",
        "name": "Shell Omala S2 GX 460",
        "category": "industrie",
        "brand": "Shell Omala",
        "tags": [],
        "options": [
          {
            "label": "20 L",
            "price": 1300
          },
          {
            "label": "209 L",
            "price": 12360
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-omala-s2-gx-320",
        "image": "images/lubrifiants/shell-omala-s2-gx-320.webp",
        "name": "Shell Omala S2 GX 320",
        "category": "industrie",
        "brand": "Shell Omala",
        "tags": [],
        "options": [
          {
            "label": "20 L",
            "price": 1220
          },
          {
            "label": "209 L",
            "price": 12200
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-omala-s2-gx-220",
        "image": "images/lubrifiants/shell-omala-s2-gx-220.webp",
        "name": "Shell Omala S2 GX 220",
        "category": "industrie",
        "brand": "Shell Omala",
        "tags": [],
        "options": [
          {
            "label": "20 L",
            "price": 1180
          },
          {
            "label": "209 L",
            "price": 11700
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-omala-s2-gx-150",
        "image": "images/lubrifiants/shell-omala-s2-gx-150.webp",
        "name": "Shell Omala S2 GX 150",
        "category": "industrie",
        "brand": "Shell Omala",
        "tags": [],
        "options": [
          {
            "label": "20 L",
            "price": 1160
          },
          {
            "label": "209 L",
            "price": 11270
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-gadus-s2-v-220-2",
        "image": "images/lubrifiants/shell-gadus-s2-v-220-2.webp",
        "name": "Shell Gadus S2 V 220 2",
        "category": "graisses",
        "brand": "Shell Gadus",
        "tags": [],
        "options": [
          {
            "label": "180 kg",
            "price": 19400
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-gadus-s1-v-160-2",
        "image": "images/lubrifiants/shell-gadus-s1-v-160-2.webp",
        "name": "Shell Gadus S1 V 160 2",
        "category": "graisses",
        "brand": "Shell Gadus",
        "tags": [],
        "options": [
          {
            "label": "18 kg",
            "price": 1900
          },
          {
            "label": "180 kg",
            "price": 17000
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "adblue",
        "image": "images/lubrifiants/adblue.webp",
        "name": "AdBlue",
        "category": "entretien",
        "brand": "Shell",
        "tags": [],
        "options": [
          {
            "label": "10 L",
            "price": 245
          },
          {
            "label": "200 L",
            "price": 4100
          },
          {
            "label": "1000 L",
            "price": 17560
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-long-life-coolants",
        "image": "images/lubrifiants/shell-long-life-coolants.webp",
        "name": "Shell Long-Life Coolants",
        "category": "entretien",
        "brand": "Shell",
        "tags": [],
        "options": [
          {
            "label": "1 L",
            "price": 25
          },
          {
            "label": "5 L",
            "price": 85
          },
          {
            "label": "20 L",
            "price": 285
          },
          {
            "label": "205 L",
            "price": 2540
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-summer-screenwash",
        "image": "images/lubrifiants/shell-summer-screenwash.webp",
        "name": "Shell Summer Screenwash",
        "category": "entretien",
        "brand": "Shell",
        "tags": [],
        "options": [
          {
            "label": "1 L",
            "price": 25
          },
          {
            "label": "5 L",
            "price": 89
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      },
      {
        "id": "shell-brake-clutch-fluid-dot-4",
        "image": "images/lubrifiants/shell-brake-clutch-fluid-dot-4.webp",
        "name": "Shell Brake & Clutch Fluid DOT 4",
        "category": "entretien",
        "brand": "Shell",
        "tags": [],
        "options": [
          {
            "label": "0,25 L",
            "price": 30
          },
          {
            "label": "0,5 L",
            "price": 50
          }
        ],
        "available": true,
        "description": PRICE_NOTE
      }
    ]
  },

  /* Entretien auto */
  entretien: {
      "categories": [
          {
              "id": "diesel",
              "icon": "⛽",
              "name": {
                  "fr": "Additifs diesel",
                  "ar": "إضافات الديزل",
                  "en": "Diesel additives",
                  "es": "Aditivos diésel",
                  "pt": "Aditivos diesel"
              }
          },
          {
              "id": "essence",
              "icon": "⛽",
              "name": {
                  "fr": "Additifs essence",
                  "ar": "إضافات البنزين",
                  "en": "Petrol additives",
                  "es": "Aditivos gasolina",
                  "pt": "Aditivos gasolina"
              }
          },
          {
              "id": "mixte",
              "icon": "💧",
              "name": {
                  "fr": "Essence & diesel",
                  "ar": "بنزين وديزل",
                  "en": "Petrol & diesel",
                  "es": "Gasolina y diésel",
                  "pt": "Gasolina e diesel"
              }
          },
          {
              "id": "adblue",
              "icon": "🔵",
              "name": {
                  "fr": "AdBlue",
                  "ar": "أدبلو",
                  "en": "AdBlue",
                  "es": "AdBlue",
                  "pt": "AdBlue"
              }
          },
          {
              "id": "huile",
              "icon": "🛢️",
              "name": {
                  "fr": "Huile & transmission",
                  "ar": "نظام الزيت وناقل الحركة",
                  "en": "Oil & transmission",
                  "es": "Aceite y transmisión",
                  "pt": "Óleo e transmissão"
              }
          },
          {
              "id": "refroid",
              "icon": "❄️",
              "name": {
                  "fr": "Refroidissement",
                  "ar": "نظام التبريد",
                  "en": "Cooling system",
                  "es": "Refrigeración",
                  "pt": "Arrefecimento"
              }
          },
          {
              "id": "atelier",
              "icon": "🔧",
              "name": {
                  "fr": "Produits d'atelier",
                  "ar": "منتجات الورش",
                  "en": "Workshop products",
                  "es": "Productos de taller",
                  "pt": "Produtos de oficina"
              }
          },
          {
              "id": "equipement",
              "icon": "⚙️",
              "name": {
                  "fr": "Équipements d'atelier",
                  "ar": "معدات الخدمة الاحترافية",
                  "en": "Workshop equipment",
                  "es": "Equipos de taller",
                  "pt": "Equipamentos de oficina"
              }
          },
          {
              "id": "clim",
              "icon": "🌬️",
              "name": {
                  "fr": "Climatisation & désinfection",
                  "ar": "التكييف والتعقيم",
                  "en": "A/C & disinfection",
                  "es": "Climatización y desinfección",
                  "pt": "Climatização e desinfeção"
              }
          },
          {
              "id": "entretien",
              "icon": "🧽",
              "name": {
                  "fr": "Entretien & lavage",
                  "ar": "الصيانة وسوائل الغسيل",
                  "en": "Maintenance & washing",
                  "es": "Mantenimiento y lavado",
                  "pt": "Manutenção e lavagem"
              }
          }
      ],
      "products": [
          {
              "id": "diesel-total-action",
              "name": {
                  "fr": "Diesel Total Action Treatment · traitement diesel complet",
                  "ar": "وينز - معالج محركات الديزل الشامل",
                  "en": "Diesel Total Action Treatment"
              },
              "category": "diesel",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-voitures",
                      "fr": "Gamme pro · voitures",
                      "ar": "الفئة الاحترافية · سيارات الركاب",
                      "en": "Pro range · cars",
                      "es": "Gama pro · turismos",
                      "pt": "Gama pro · ligeiros"
                  }
              ],
              "description": {
                  "fr": "Traitement tout-en-un : nettoie et protège avant, pendant et après la combustion. · 500 ml · Réf. W33092 W33093",
                  "ar": "معالج متكامل يعالج الوقود قبل وأثناء وبعد الاحتراق. · 500 مل · المرجع W33092 W33093",
                  "en": "All-in-one treatment that cleans and protects before, during and after combustion. · 500 ml · Ref. W33092 W33093"
              },
              "image": "images/entertien/diesel-total-action.webp",
              "sku": "W33092 W33093",
              "available": true
          },
          {
              "id": "diesel-pre-emission",
              "name": {
                  "fr": "Diesel Pre-Emission Test Treatment · avant contrôle anti-pollution",
                  "ar": "وينز - معالج انبعاثات الديزل قبل الفحص",
                  "en": "Diesel Pre-Emission Test Treatment"
              },
              "category": "diesel",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-voitures",
                      "fr": "Gamme pro · voitures",
                      "ar": "الفئة الاحترافية · سيارات الركاب",
                      "en": "Pro range · cars",
                      "es": "Gama pro · turismos",
                      "pt": "Gama pro · ligeiros"
                  }
              ],
              "description": {
                  "fr": "Traitement à action rapide pour réussir le contrôle des émissions. · 500 ml · Réf. W35392 W35393",
                  "ar": "علاج سريع المفعول لاجتياز اختبار الانبعاثات. · 500 مل · المرجع W35392 W35393",
                  "en": "Fast-acting treatment to help your car pass the emissions test. · 500 ml · Ref. W35392 W35393"
              },
              "image": "images/entertien/diesel-pre-emission.webp",
              "sku": "W35392 W35393",
              "available": true
          },
          {
              "id": "diesel-dpf-regenerator",
              "name": {
                  "fr": "Régénérateur et nettoyant de filtre à particules (FAP)",
                  "ar": "مجدد ومنظف فلتر دبة التلوث / مرشح جسيمات الديزل",
                  "en": "Diesel Particulate Filter Regenerator"
              },
              "category": "diesel",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-voitures",
                      "fr": "Gamme pro · voitures",
                      "ar": "الفئة الاحترافية · سيارات الركاب",
                      "en": "Pro range · cars",
                      "es": "Gama pro · turismos",
                      "pt": "Gama pro · ligeiros"
                  }
              ],
              "description": {
                  "fr": "Nettoie les filtres à particules colmatés et réduit les émissions de fumée. · 500 ml · Réf. W28392 W28393 W28395",
                  "ar": "ينظف المرشحات والفلاتر المسدودة ويقلل من انبعاثات السخام. · 500 مل · المرجع W28392 W28393 W28395",
                  "en": "Cleans clogged particulate filters and reduces smoke emissions. · 500 ml · Ref. W28392 W28393 W28395"
              },
              "image": "images/entertien/diesel-dpf-regenerator.webp",
              "sku": "W28392 W28393 W28395",
              "available": true
          },
          {
              "id": "diesel-extreme-injector-cleaner",
              "name": {
                  "fr": "Diesel Extreme Injector Cleaner · nettoyant injecteurs",
                  "ar": "منظف بخاخات / صمامات محركات الديزل المركز",
                  "en": "Diesel Extreme Injector Cleaner"
              },
              "category": "diesel",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-voitures",
                      "fr": "Gamme pro · voitures",
                      "ar": "الفئة الاحترافية · سيارات الركاب",
                      "en": "Pro range · cars",
                      "es": "Gama pro · turismos",
                      "pt": "Gama pro · ligeiros"
                  }
              ],
              "description": {
                  "fr": "Nettoyage complet et rapide du circuit de carburant dès le premier plein. · 500 ml · Réf. W12292 W12293 W12295",
                  "ar": "تنظيف كامل وسريع لنظام الوقود من التعبئة الأولى. · 500 مل · المرجع W12292 W12293 W12295",
                  "en": "Complete, fast cleaning of the fuel system from the first tank. · 500 ml · Ref. W12292 W12293 W12295"
              },
              "image": "images/entertien/diesel-extreme-injector-cleaner.webp",
              "sku": "W12292 W12293 W12295",
              "available": true
          },
          {
              "id": "diesel-emission-reducer",
              "name": {
                  "fr": "Diesel Emission Reducer · réducteur d'émissions",
                  "ar": "وينز معالج ومخفض انبعاثات الديزل",
                  "en": "Diesel Emission Reducer"
              },
              "category": "diesel",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-voitures",
                      "fr": "Gamme pro · voitures",
                      "ar": "الفئة الاحترافية · سيارات الركاب",
                      "en": "Pro range · cars",
                      "es": "Gama pro · turismos",
                      "pt": "Gama pro · ligeiros"
                  }
              ],
              "description": {
                  "fr": "Réduit les émissions, améliore les performances du moteur et économise le carburant. · 500 ml · Réf. W50392 W50393",
                  "ar": "يقلل انبعاثات العادم ويحسن أداء المحرك ويوفر الوقود. · 500 مل · المرجع W50392 W50393",
                  "en": "Reduces exhaust emissions, improves engine performance and saves fuel. · 500 ml · Ref. W50392 W50393"
              },
              "image": "images/entertien/diesel-emission-reducer.webp",
              "sku": "W50392 W50393",
              "available": true
          },
          {
              "id": "diesel-turbo-cleaner",
              "name": {
                  "fr": "Diesel Turbo Cleaner · nettoyant turbo",
                  "ar": "وينز منظف تيربو الديزل",
                  "en": "Diesel Turbo Cleaner"
              },
              "category": "diesel",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-voitures",
                      "fr": "Gamme pro · voitures",
                      "ar": "الفئة الاحترافية · سيارات الركاب",
                      "en": "Pro range · cars",
                      "es": "Gama pro · turismos",
                      "pt": "Gama pro · ligeiros"
                  }
              ],
              "description": {
                  "fr": "Nettoie les ailettes de turbo encrassées pour retrouver puissance et réactivité. · 500 ml · Réf. W32092 W32093",
                  "ar": "يعمل على تنظيف شواحن التيربو المسدودة. · 500 مل · المرجع W32092 W32093",
                  "en": "Cleans sticking turbo vanes to restore power and response. · 500 ml · Ref. W32092 W32093"
              },
              "image": "images/entertien/diesel-turbo-cleaner.webp",
              "sku": "W32092 W32093",
              "available": true
          },
          {
              "id": "diesel-system-cleaner",
              "name": {
                  "fr": "Diesel System Cleaner · nettoyant circuit diesel",
                  "ar": "منظف دورة الديزل",
                  "en": "Diesel System Cleaner"
              },
              "category": "diesel",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-voitures",
                      "fr": "Gamme pro · voitures",
                      "ar": "الفئة الاحترافية · سيارات الركاب",
                      "en": "Pro range · cars",
                      "es": "Gama pro · turismos",
                      "pt": "Gama pro · ligeiros"
                  }
              ],
              "description": {
                  "fr": "Nettoie et lubrifie pompes, injecteurs et tout le circuit diesel. · 325 ml · Réf. W46751 W46754",
                  "ar": "ينظف ويزيّت المضخات والمحاقن والرشاشات. · 325 مل · المرجع W46751 W46754",
                  "en": "Cleans and lubricates pumps, injectors and the whole diesel circuit. · 325 ml · Ref. W46751 W46754"
              },
              "image": "images/entertien/diesel-system-cleaner.webp",
              "sku": "W46751 W46754",
              "available": true
          },
          {
              "id": "diesel-power-7",
              "name": {
                  "fr": "Diesel Power 7 · traitement et améliorant de performance",
                  "ar": "وينز باور 7 - معالج ومحسن أداء وقود محركات الديزل",
                  "en": "Wynn's Diesel Power 7"
              },
              "category": "diesel",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-voitures",
                      "fr": "Gamme pro · voitures",
                      "ar": "الفئة الاحترافية · سيارات الركاب",
                      "en": "Pro range · cars",
                      "es": "Gama pro · turismos",
                      "pt": "Gama pro · ligeiros"
                  }
              ],
              "description": {
                  "fr": "Nettoie le circuit de carburant, aide la régénération du FAP et réduit la consommation. · 1 L · Réf. W76411",
                  "ar": "ينظف نظام الوقود ويساعد في تجديد الفلتر ويحسن الاستهلاك. · 1 لتر · المرجع W76411",
                  "en": "Cleans the fuel system, helps DPF regeneration and cuts consumption. · 1 L · Ref. W76411"
              },
              "image": "images/entertien/diesel-power-7.webp",
              "sku": "W76411",
              "available": true
          },
          {
              "id": "diesel-clean-up",
              "name": {
                  "fr": "Diesel Clean-Up · nettoyage via filtre à gazole",
                  "ar": "منظف نظام الديزل",
                  "en": "Diesel Clean-Up"
              },
              "category": "diesel",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-voitures",
                      "fr": "Gamme pro · voitures",
                      "ar": "الفئة الاحترافية · سيارات الركاب",
                      "en": "Pro range · cars",
                      "es": "Gama pro · turismos",
                      "pt": "Gama pro · ligeiros"
                  }
              ],
              "description": {
                  "fr": "Produit concentré à appliquer directement via le filtre à gazole. · 325 ml · Réf. W25241",
                  "ar": "منتج مركز للاستخدام المباشر عبر فلتر الديزل. · 325 مل · المرجع W25241",
                  "en": "Concentrated product applied directly through the diesel filter. · 325 ml · Ref. W25241"
              },
              "image": "images/entertien/diesel-clean-up.webp",
              "sku": "W25241",
              "available": true
          },
          {
              "id": "fuel-biocide-250",
              "name": {
                  "fr": "Fuel Biocide · anti-bactérien carburant",
                  "ar": "وينز معالج ومقاوم البكتيريا",
                  "en": "Wynn's Fuel Biocide"
              },
              "category": "diesel",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-voitures",
                      "fr": "Gamme pro · voitures",
                      "ar": "الفئة الاحترافية · سيارات الركاب",
                      "en": "Pro range · cars",
                      "es": "Gama pro · turismos",
                      "pt": "Gama pro · ligeiros"
                  }
              ],
              "description": {
                  "fr": "Traitement préventif et curatif contre les micro-organismes dans les réservoirs diesel et biodiesel. · 250 ml · Réf. W10601",
                  "ar": "علاج وقائي ونهائي ضد نمو الكائنات الدقيقة في خزانات الديزل. · 250 مل · المرجع W10601",
                  "en": "Preventive and curative treatment against microbes in diesel and biodiesel tanks. · 250 ml · Ref. W10601"
              },
              "image": "images/entertien/fuel-biocide-250.webp",
              "sku": "W10601",
              "available": true
          },
          {
              "id": "dry-fuel-325",
              "name": {
                  "fr": "Dry Fuel · absorbeur d'eau et d'humidité",
                  "ar": "وينز معالج ماء الوقود والرطوبة",
                  "en": "Wynn's Dry Fuel"
              },
              "category": "mixte",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-voitures",
                      "fr": "Gamme pro · voitures",
                      "ar": "الفئة الاحترافية · سيارات الركاب",
                      "en": "Pro range · cars",
                      "es": "Gama pro · turismos",
                      "pt": "Gama pro · ligeiros"
                  }
              ],
              "description": {
                  "fr": "Absorbe l'eau et l'humidité du circuit de carburant (essence et diesel). · 325 ml · Réf. W71851",
                  "ar": "لامتصاص الرطوبة والتخلص من المياه في دورة الوقود (بنزين وديزل). · 325 مل · المرجع W71851",
                  "en": "Absorbs water and moisture in the fuel system (petrol and diesel). · 325 ml · Ref. W71851"
              },
              "image": "images/entertien/dry-fuel-325.webp",
              "sku": "W71851",
              "available": true
          },
          {
              "id": "petrol-total-action",
              "name": {
                  "fr": "Petrol Total Action Treatment · traitement essence complet",
                  "ar": "معالج نظام البنزين المتكامل",
                  "en": "Petrol Total Action Treatment"
              },
              "category": "essence",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-voitures",
                      "fr": "Gamme pro · voitures",
                      "ar": "الفئة الاحترافية · سيارات الركاب",
                      "en": "Pro range · cars",
                      "es": "Gama pro · turismos",
                      "pt": "Gama pro · ligeiros"
                  }
              ],
              "description": {
                  "fr": "Technologie PEA : nettoie et protège le moteur avant, pendant et après la combustion. · 500 ml · Réf. W33692 W33693",
                  "ar": "تقنية PEA لتنظيف وحماية المحرك قبل وأثناء وبعد الاحتراق. · 500 مل · المرجع W33692 W33693",
                  "en": "PEA technology: cleans and protects the engine before, during and after combustion. · 500 ml · Ref. W33692 W33693"
              },
              "image": "images/entertien/petrol-total-action.webp",
              "sku": "W33692 W33693",
              "available": true
          },
          {
              "id": "petrol-pre-emission",
              "name": {
                  "fr": "Petrol Pre-Emission Test Treatment · avant contrôle",
                  "ar": "وينز معالج البنزين لتقليل الانبعاثات قبل الفحص",
                  "en": "Petrol Pre-Emission Test Treatment"
              },
              "category": "essence",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-voitures",
                      "fr": "Gamme pro · voitures",
                      "ar": "الفئة الاحترافية · سيارات الركاب",
                      "en": "Pro range · cars",
                      "es": "Gama pro · turismos",
                      "pt": "Gama pro · ligeiros"
                  }
              ],
              "description": {
                  "fr": "Nettoyant à action rapide pour réduire les émissions avant le contrôle. · 500 ml · Réf. W35792 W35793",
                  "ar": "منظف سريع المفعول لتقليل العادم قبل الفحص. · 500 مل · المرجع W35792 W35793",
                  "en": "Fast-acting cleaner designed to reduce exhaust emissions before the test. · 500 ml · Ref. W35792 W35793"
              },
              "image": "images/entertien/petrol-pre-emission.webp",
              "sku": "W35792 W35793",
              "available": true
          },
          {
              "id": "petrol-gdi-restorer",
              "name": {
                  "fr": "GDI Efficiency Restorer · nettoyant injection directe",
                  "ar": "منظف ومرمم نظام الحقن المباشر بمحركات البنزين",
                  "en": "GDI Efficiency Restorer"
              },
              "category": "essence",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-voitures",
                      "fr": "Gamme pro · voitures",
                      "ar": "الفئة الاحترافية · سيارات الركاب",
                      "en": "Pro range · cars",
                      "es": "Gama pro · turismos",
                      "pt": "Gama pro · ligeiros"
                  }
              ],
              "description": {
                  "fr": "Élimine rapidement et en profondeur dépôts et calamine des moteurs à injection directe. · 500 ml · Réf. W37593",
                  "ar": "تنظيف سريع وإزالة شاملة للرواسب والكربون في الحقن المباشر. · 500 مل · المرجع W37593",
                  "en": "Quick, thorough removal of deposits and carbon in direct-injection engines. · 500 ml · Ref. W37593"
              },
              "image": "images/entertien/petrol-gdi-restorer.webp",
              "sku": "W37593",
              "available": true
          },
          {
              "id": "petrol-fuel-system-cleaner",
              "name": {
                  "fr": "Fuel System Cleaner · nettoyant circuit essence",
                  "ar": "منظف دورة الوقود",
                  "en": "Fuel System Cleaner"
              },
              "category": "essence",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-voitures",
                      "fr": "Gamme pro · voitures",
                      "ar": "الفئة الاحترافية · سيارات الركاب",
                      "en": "Pro range · cars",
                      "es": "Gama pro · turismos",
                      "pt": "Gama pro · ligeiros"
                  }
              ],
              "description": {
                  "fr": "Maintient le circuit de carburant propre et limite le besoin d'un indice d'octane plus élevé. · 325 ml · Réf. W61351 W61354",
                  "ar": "يحافظ على نظافة دورة الوقود ويقلل الحاجة لرفع رقم الأوكتان. · 325 مل · المرجع W61351 W61354",
                  "en": "Keeps the fuel system clean and reduces the need for higher octane. · 325 ml · Ref. W61351 W61354"
              },
              "image": "images/entertien/petrol-fuel-system-cleaner.webp",
              "sku": "W61351 W61354",
              "available": true
          },
          {
              "id": "petrol-power-7",
              "name": {
                  "fr": "Petrol Power 7 · protection et économie de carburant",
                  "ar": "بترول باور 7",
                  "en": "Petrol Power 7"
              },
              "category": "essence",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-voitures",
                      "fr": "Gamme pro · voitures",
                      "ar": "الفئة الاحترافية · سيارات الركاب",
                      "en": "Pro range · cars",
                      "es": "Gama pro · turismos",
                      "pt": "Gama pro · ligeiros"
                  }
              ],
              "description": {
                  "fr": "Protège le moteur et optimise la consommation de carburant. · 1 L · Réf. W70711",
                  "ar": "يمنح المحرك حماية وتحسين مثالي في استهلاك الوقود. · 1 لتر · المرجع W70711",
                  "en": "Protects the engine and optimises fuel consumption. · 1 L · Ref. W70711"
              },
              "image": "images/entertien/petrol-power-7.webp",
              "sku": "W70711",
              "available": true
          },
          {
              "id": "petrol-extreme-injector-cleaner",
              "name": {
                  "fr": "Petrol Extreme Injector Cleaner · nettoyant injecteurs",
                  "ar": "منظف البخاخات فائق القوة",
                  "en": "Petrol Extreme Injector Cleaner"
              },
              "category": "essence",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-voitures",
                      "fr": "Gamme pro · voitures",
                      "ar": "الفئة الاحترافية · سيارات الركاب",
                      "en": "Pro range · cars",
                      "es": "Gama pro · turismos",
                      "pt": "Gama pro · ligeiros"
                  }
              ],
              "description": {
                  "fr": "Nettoyage complet et puissant du circuit essence en un seul plein. · 500 ml · Réf. W29792 W29793",
                  "ar": "تنظيف شامل وقوي لنظام وقود البنزين في تفويلة واحدة. · 500 مل · المرجع W29792 W29793",
                  "en": "Powerful, complete clean of the petrol fuel system in a single tank. · 500 ml · Ref. W29792 W29793"
              },
              "image": "images/entertien/petrol-extreme-injector-cleaner.webp",
              "sku": "W29792 W29793",
              "available": true
          },
          {
              "id": "petrol-emission-reducer",
              "name": {
                  "fr": "Petrol Emission Reducer · réducteur d'émissions",
                  "ar": "معالج ومخفض انبعاثات البنزين",
                  "en": "Petrol Emission Reducer"
              },
              "category": "essence",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-voitures",
                      "fr": "Gamme pro · voitures",
                      "ar": "الفئة الاحترافية · سيارات الركاب",
                      "en": "Pro range · cars",
                      "es": "Gama pro · turismos",
                      "pt": "Gama pro · ligeiros"
                  }
              ],
              "description": {
                  "fr": "Réduit les émissions nocives, améliore la combustion et économise le carburant. · 500 ml · Réf. W29392 W29393",
                  "ar": "يقلل الانبعاثات الضارة ويحسن الاحتراق ويوفر الوقود. · 500 مل · المرجع W29392 W29393",
                  "en": "Reduces harmful emissions, improves combustion and saves fuel. · 500 ml · Ref. W29392 W29393"
              },
              "image": "images/entertien/petrol-emission-reducer.webp",
              "sku": "W29392 W29393",
              "available": true
          },
          {
              "id": "catalytic-oxygen-cleaner",
              "name": {
                  "fr": "Nettoyant catalyseur et sonde lambda",
                  "ar": "منظف المحول الحفاز وحساس الأكسجين",
                  "en": "Catalytic Converter & Oxygen Sensor Cleaner"
              },
              "category": "essence",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-voitures",
                      "fr": "Gamme pro · voitures",
                      "ar": "الفئة الاحترافية · سيارات الركاب",
                      "en": "Pro range · cars",
                      "es": "Gama pro · turismos",
                      "pt": "Gama pro · ligeiros"
                  }
              ],
              "description": {
                  "fr": "Améliore l'efficacité du catalyseur et préserve les sondes à oxygène. · 325 ml · Réf. W25692 W25693",
                  "ar": "يرفع كفاءة المحول الحفاز ويضمن الأداء المثالي لحساسات الأكسجين. · 325 مل · المرجع W25692 W25693",
                  "en": "Boosts catalytic converter efficiency and keeps oxygen sensors working properly. · 325 ml · Ref. W25692 W25693"
              },
              "image": "images/entertien/catalytic-oxygen-cleaner.webp",
              "sku": "W25692 W25693",
              "available": true
          },
          {
              "id": "adblue-crystal-125",
              "name": {
                  "fr": "AdBlue Crystal Clean & Protect · anti-cristallisation",
                  "ar": "وينز : منظف البلورة والتكلس الوقائي",
                  "en": "AdBlue Crystal Clean & Protect"
              },
              "category": "adblue",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-voitures",
                      "fr": "Gamme pro · voitures",
                      "ar": "الفئة الاحترافية · سيارات الركاب",
                      "en": "Pro range · cars",
                      "es": "Gama pro · turismos",
                      "pt": "Gama pro · ligeiros"
                  }
              ],
              "description": {
                  "fr": "Empêche la cristallisation et garde le système SCR / AdBlue propre. · 125 ml · Réf. W21001 W21002",
                  "ar": "يمنع التبلور ويحافظ على نظافة نظام SCR. · 125 مل · المرجع W21001 W21002",
                  "en": "Prevents crystallisation and keeps the SCR / AdBlue system clean. · 125 ml · Ref. W21001 W21002"
              },
              "image": "images/entertien/adblue-crystal-125.webp",
              "sku": "W21001 W21002",
              "available": true
          },
          {
              "id": "adblue-crystal-500",
              "name": {
                  "fr": "Crystal Clean & Protect · véhicules utilitaires",
                  "ar": "مزيل الترسبات والأملاح ومانع التكلس",
                  "en": "Crystal Clean & Protect (commercial)"
              },
              "category": "adblue",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-utilitaires",
                      "fr": "Gamme pro · utilitaires",
                      "ar": "الفئة الاحترافية · المركبات التجارية",
                      "en": "Pro range · commercial vehicles",
                      "es": "Gama pro · vehículos comerciales",
                      "pt": "Gama pro · comerciais"
                  }
              ],
              "description": {
                  "fr": "Évite les cristaux d'AdBlue et protège le système SCR des camions et utilitaires. · 500 ml · Réf. W21090",
                  "ar": "يمنع تبلور الأدبلو ويحافظ على نظافة نظام SCR. · 500 مل · المرجع W21090",
                  "en": "Prevents AdBlue crystals and protects SCR components on trucks and vans. · 500 ml · Ref. W21090"
              },
              "image": "images/entertien/adblue-crystal-500.webp",
              "sku": "W21090",
              "available": true
          },
          {
              "id": "adblue-ibc-protector",
              "name": {
                  "fr": "IBC Crystal Protector · cuves AdBlue",
                  "ar": "حامي ومحسن نظام AdBlue المتقدم",
                  "en": "IBC Crystal Protector"
              },
              "category": "adblue",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-utilitaires",
                      "fr": "Gamme pro · utilitaires",
                      "ar": "الفئة الاحترافية · المركبات التجارية",
                      "en": "Pro range · commercial vehicles",
                      "es": "Gama pro · vehículos comerciales",
                      "pt": "Gama pro · comerciais"
                  }
              ],
              "description": {
                  "fr": "Protection complète contre la cristallisation de l'AdBlue en grandes cuves (2 L traitent 1000 L). · 4 L · Réf. W21011",
                  "ar": "حماية شاملة ضد تبلور سائل الأدبلو في الخزانات الكبيرة. · 4 لتر · المرجع W21011",
                  "en": "Full protection against AdBlue crystallisation in large storage tanks (2 L treats 1000 L). · 4 L · Ref. W21011"
              },
              "image": "images/entertien/adblue-ibc-protector.webp",
              "sku": "W21011",
              "available": true
          },
          {
              "id": "pro-super-charge",
              "name": {
                  "fr": "Pro Super Charge · traitement d'huile moteur",
                  "ar": "وينز معالج ومحسن زيت المحرك",
                  "en": "Wynn's Pro Super Charge"
              },
              "category": "huile",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-voitures",
                      "fr": "Gamme pro · voitures",
                      "ar": "الفئة الاحترافية · سيارات الركاب",
                      "en": "Pro range · cars",
                      "es": "Gama pro · turismos",
                      "pt": "Gama pro · ligeiros"
                  }
              ],
              "description": {
                  "fr": "Aide l'huile à donner le meilleur d'elle-même et prolonge la vie du moteur. · 325 ml · Réf. W51841 W51844",
                  "ar": "يطيل عمر المحرك من خلال ضمان أفضل أداء للزيت. · 325 مل · المرجع W51841 W51844",
                  "en": "Helps oil perform at its best and extends engine life. · 325 ml · Ref. W51841 W51844"
              },
              "image": "images/entertien/pro-super-charge.webp",
              "sku": "W51841 W51844",
              "available": true,
              "badge": "new"
          },
          {
              "id": "pro-engine-protector",
              "name": {
                  "fr": "Pro Engine Protector · stop fuites d'huile",
                  "ar": "وينز مانع تسريب لحماية المحرك",
                  "en": "Wynn's Pro Engine Protector"
              },
              "category": "huile",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-voitures",
                      "fr": "Gamme pro · voitures",
                      "ar": "الفئة الاحترافية · سيارات الركاب",
                      "en": "Pro range · cars",
                      "es": "Gama pro · turismos",
                      "pt": "Gama pro · ligeiros"
                  }
              ],
              "description": {
                  "fr": "Stoppe et prévient les fuites d'huile sans démontage ; compatible huiles Low SAPS. · 325 ml · Réf. W48041 W48044",
                  "ar": "يوقف ويمنع تسريب الزيت بدون الحاجة لفك المحرك. · 325 مل · المرجع W48041 W48044",
                  "en": "Stops and prevents oil leaks without dismantling; suitable for Low SAPS oils. · 325 ml · Ref. W48041 W48044"
              },
              "image": "images/entertien/pro-engine-protector.webp",
              "sku": "W48041 W48044",
              "available": true,
              "badge": "new"
          },
          {
              "id": "oil-system-cleaner-325",
              "name": {
                  "fr": "Oil System Cleaner · nettoyant circuit d'huile",
                  "ar": "وينز - منظف دورة الزيت",
                  "en": "Oil System Cleaner"
              },
              "category": "huile",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-voitures",
                      "fr": "Gamme pro · voitures",
                      "ar": "الفئة الاحترافية · سيارات الركاب",
                      "en": "Pro range · cars",
                      "es": "Gama pro · turismos",
                      "pt": "Gama pro · ligeiros"
                  }
              ],
              "description": {
                  "fr": "Nettoie et protège tout le circuit d'huile avant la vidange. · 325 ml · Réf. W47244",
                  "ar": "يعمل على تنظيف وحماية نظام دورة الزيت بالكامل. · 325 مل · المرجع W47244",
                  "en": "Cleans and protects the whole oil circuit before an oil change. · 325 ml · Ref. W47244"
              },
              "image": "images/entertien/oil-system-cleaner-325.webp",
              "sku": "W47244",
              "available": true,
              "badge": "new"
          },
          {
              "id": "hydraulic-lifter-concentrate",
              "name": {
                  "fr": "Hydraulic Valve Lifter Concentrate · poussoirs hydrauliques",
                  "ar": "معالج التكايات الهيدروليكية",
                  "en": "Hydraulic Valve Lifter Concentrate"
              },
              "category": "huile",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-voitures",
                      "fr": "Gamme pro · voitures",
                      "ar": "الفئة الاحترافية · سيارات الركاب",
                      "en": "Pro range · cars",
                      "es": "Gama pro · turismos",
                      "pt": "Gama pro · ligeiros"
                  }
              ],
              "description": {
                  "fr": "Rétablit le fonctionnement des poussoirs hydrauliques et supprime le bruit de cliquetis. · 325 ml · Réf. W76844",
                  "ar": "يعيد الكفاءة لرافعات الصمامات الهيدروليكية ويزيل صوت التكتكة. · 325 مل · المرجع W76844",
                  "en": "Restores normal operation of hydraulic lifters and removes valve tapping noise. · 325 ml · Ref. W76844"
              },
              "image": "images/entertien/hydraulic-lifter-concentrate.webp",
              "sku": "W76844",
              "available": true
          },
          {
              "id": "automatic-transmission-treatment",
              "name": {
                  "fr": "Automatic Transmission Treatment · boîte automatique",
                  "ar": "معالج ناقل الحركة الأوتوماتيكي",
                  "en": "Automatic Transmission Treatment"
              },
              "category": "huile",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-voitures",
                      "fr": "Gamme pro · voitures",
                      "ar": "الفئة الاحترافية · سيارات الركاب",
                      "en": "Pro range · cars",
                      "es": "Gama pro · turismos",
                      "pt": "Gama pro · ligeiros"
                  }
              ],
              "description": {
                  "fr": "Stoppe les fuites et rend les passages de vitesses plus souples. · 325 ml · Réf. W64544",
                  "ar": "يوقف التسرب ويسهل تبديل الغيارات. · 325 مل · المرجع W64544",
                  "en": "Stops leaks and makes gear changes smoother. · 325 ml · Ref. W64544"
              },
              "image": "images/entertien/automatic-transmission-treatment.webp",
              "sku": "W64544",
              "available": true
          },
          {
              "id": "automatic-transmission-flush",
              "name": {
                  "fr": "Automatic Transmission Flush · rinçage boîte automatique",
                  "ar": "منظف (فلاش) ناقل الحركة الأوتوماتيكي",
                  "en": "Automatic Transmission Flush"
              },
              "category": "huile",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-voitures",
                      "fr": "Gamme pro · voitures",
                      "ar": "الفئة الاحترافية · سيارات الركاب",
                      "en": "Pro range · cars",
                      "es": "Gama pro · turismos",
                      "pt": "Gama pro · ligeiros"
                  }
              ],
              "description": {
                  "fr": "Nettoie la boîte automatique avant le remplacement de l'ATF. · 325 ml · Réf. W64401",
                  "ar": "ينظف القير الأوتوماتيك بالكامل قبل تغيير الزيت. · 325 مل · المرجع W64401",
                  "en": "Cleans the automatic gearbox before an ATF change. · 325 ml · Ref. W64401"
              },
              "image": "images/entertien/automatic-transmission-flush.webp",
              "sku": "W64401",
              "available": true
          },
          {
              "id": "hpls-transmission",
              "name": {
                  "fr": "HPLS · traitement boîte de vitesses",
                  "ar": "معالج ناقل الحركة (الترس) HPLS",
                  "en": "HPLS Transmission Treatment"
              },
              "category": "huile",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-voitures",
                      "fr": "Gamme pro · voitures",
                      "ar": "الفئة الاحترافية · سيارات الركاب",
                      "en": "Pro range · cars",
                      "es": "Gama pro · turismos",
                      "pt": "Gama pro · ligeiros"
                  }
              ],
              "description": {
                  "fr": "Améliore l'enclenchement, réduit le bruit de boîte et stoppe les fuites. · 125 ml · Réf. W59405 W59406",
                  "ar": "يحسن تعشيق التروس ويقلل ضجيج الجير ويوقف تهريب الزيت. · 125 مل · المرجع W59405 W59406",
                  "en": "Improves gear engagement, reduces gearbox noise and stops oil leaks. · 125 ml · Ref. W59405 W59406"
              },
              "image": "images/entertien/hpls-transmission.webp",
              "sku": "W59405 W59406",
              "available": true
          },
          {
              "id": "power-steering-stop-leak",
              "name": {
                  "fr": "Power Steering Stop Leak · fuites de direction assistée",
                  "ar": "مانع تسرب الباور ستيرنج",
                  "en": "Power Steering Stop Leak"
              },
              "category": "huile",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-voitures",
                      "fr": "Gamme pro · voitures",
                      "ar": "الفئة الاحترافية · سيارات الركاب",
                      "en": "Pro range · cars",
                      "es": "Gama pro · turismos",
                      "pt": "Gama pro · ligeiros"
                  }
              ],
              "description": {
                  "fr": "Stoppe et prévient les fuites du système de direction assistée. · 125 ml · Réf. W64503 W64505",
                  "ar": "يوقف ويمنع التسرب في نظام التوجيه المعزز. · 125 مل · المرجع W64503 W64505",
                  "en": "Stops and prevents leaks in the power steering system. · 125 ml · Ref. W64503 W64505"
              },
              "image": "images/entertien/power-steering-stop-leak.webp",
              "sku": "W64503 W64505",
              "available": true
          },
          {
              "id": "cooling-stop-leak",
              "name": {
                  "fr": "Cooling System Stop Leak · anti-fuite radiateur",
                  "ar": "مانع تهريب الراديتر",
                  "en": "Cooling System Stop Leak"
              },
              "category": "refroid",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-voitures",
                      "fr": "Gamme pro · voitures",
                      "ar": "الفئة الاحترافية · سيارات الركاب",
                      "en": "Pro range · cars",
                      "es": "Gama pro · turismos",
                      "pt": "Gama pro · ligeiros"
                  }
              ],
              "description": {
                  "fr": "Stoppe les petites fuites du radiateur et du circuit de refroidissement, avec protection anti-rouille. · 325 ml · Réf. W45644",
                  "ar": "يوقف التسريبات الصغيرة في الراديتر ودورة التبريد. · 325 مل · المرجع W45644",
                  "en": "Stops small leaks in the radiator and cooling circuit, with rust protection. · 325 ml · Ref. W45644"
              },
              "image": "images/entertien/cooling-stop-leak.webp",
              "sku": "W45644",
              "available": true
          },
          {
              "id": "cooling-flush",
              "name": {
                  "fr": "Cooling System Flush · nettoyant circuit de refroidissement",
                  "ar": "فلاش منظف دورة التبريد",
                  "en": "Cooling System Flush"
              },
              "category": "refroid",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-voitures",
                      "fr": "Gamme pro · voitures",
                      "ar": "الفئة الاحترافية · سيارات الركاب",
                      "en": "Pro range · cars",
                      "es": "Gama pro · turismos",
                      "pt": "Gama pro · ligeiros"
                  }
              ],
              "description": {
                  "fr": "Nettoie en profondeur tous les éléments du circuit de refroidissement. · 325 ml · Réf. W45944",
                  "ar": "ينظف جميع عناصر نظام التبريد بعمق وكفاءة. · 325 مل · المرجع W45944",
                  "en": "Deep-cleans every part of the cooling system. · 325 ml · Ref. W45944"
              },
              "image": "images/entertien/cooling-flush.webp",
              "sku": "W45944",
              "available": true
          },
          {
              "id": "cylinder-block-seal",
              "name": {
                  "fr": "Cylinder Block Seal · colmatant bloc moteur",
                  "ar": "لحام سلندر",
                  "en": "Cylinder Block Seal"
              },
              "category": "refroid",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-voitures",
                      "fr": "Gamme pro · voitures",
                      "ar": "الفئة الاحترافية · سيارات الركاب",
                      "en": "Pro range · cars",
                      "es": "Gama pro · turismos",
                      "pt": "Gama pro · ligeiros"
                  }
              ],
              "description": {
                  "fr": "Répare les fissures du bloc moteur sans démonter le moteur. · 325 ml · Réf. W72250",
                  "ar": "يصلح الشروخ في كتلة المحرك بدون الحاجة لفك. · 325 مل · المرجع W72250",
                  "en": "Repairs cracks in the engine block without dismantling the engine. · 325 ml · Ref. W72250"
              },
              "image": "images/entertien/cylinder-block-seal.webp",
              "sku": "W72250",
              "available": true
          },
          {
              "id": "cooling-degreaser",
              "name": {
                  "fr": "Cooling System Degreaser · dégraissant circuit de refroidissement",
                  "ar": "مزيل شحوم دورة ونظام التبريد",
                  "en": "Cooling System Degreaser"
              },
              "category": "refroid",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-voitures",
                      "fr": "Gamme pro · voitures",
                      "ar": "الفئة الاحترافية · سيارات الركاب",
                      "en": "Pro range · cars",
                      "es": "Gama pro · turismos",
                      "pt": "Gama pro · ligeiros"
                  }
              ],
              "description": {
                  "fr": "Élimine l'huile et les boues du circuit de refroidissement. · 325 ml · Réf. W25541",
                  "ar": "يعمل على إزالة الزيوت والرواسب الطينية من دورة التبريد. · 325 مل · المرجع W25541",
                  "en": "Removes oil and sludge from the cooling circuit. · 325 ml · Ref. W25541"
              },
              "image": "images/entertien/cooling-degreaser.webp",
              "sku": "W25541",
              "available": true
          },
          {
              "id": "cv-dpf-nox",
              "name": {
                  "fr": "Régénérateur FAP & protecteur sonde NOx",
                  "ar": "معالج منظف فلتر دبة البيئة لسيارات الديزل وحساسات الأكسجين",
                  "en": "DPF Regenerator & NOx Sensor Protector"
              },
              "category": "diesel",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-utilitaires",
                      "fr": "Gamme pro · utilitaires",
                      "ar": "الفئة الاحترافية · المركبات التجارية",
                      "en": "Pro range · commercial vehicles",
                      "es": "Gama pro · vehículos comerciales",
                      "pt": "Gama pro · comerciais"
                  }
              ],
              "description": {
                  "fr": "Nettoie et régénère les FAP colmatés des véhicules diesel et réduit les émissions. · 1 L · Réf. W28090",
                  "ar": "ينظف ويعالج انسداد فلتر دبة التلوث في سيارات الديزل. · 1 لتر · المرجع W28090",
                  "en": "Cleans and regenerates clogged DPF filters on diesel vehicles and reduces emissions. · 1 L · Ref. W28090"
              },
              "image": "images/entertien/cv-dpf-nox.webp",
              "sku": "W28090",
              "available": true
          },
          {
              "id": "cv-diesel-emission-reducer",
              "name": {
                  "fr": "Diesel Emission Reducer · utilitaires",
                  "ar": "مخفض انبعاثات الديزل",
                  "en": "Diesel Emission Reducer (commercial)"
              },
              "category": "diesel",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-utilitaires",
                      "fr": "Gamme pro · utilitaires",
                      "ar": "الفئة الاحترافية · المركبات التجارية",
                      "en": "Pro range · commercial vehicles",
                      "es": "Gama pro · vehículos comerciales",
                      "pt": "Gama pro · comerciais"
                  }
              ],
              "description": {
                  "fr": "Produit multifonction : améliore la combustion, réduit fumées et suie, baisse la consommation. · 1 L · Réf. W62190",
                  "ar": "منتج متعدد الوظائف يحسن الحرق ويقلل الدخان والسخام. · 1 لتر · المرجع W62190",
                  "en": "Multi-function product: improves combustion, cuts smoke and soot, lowers fuel use. · 1 L · Ref. W62190"
              },
              "image": "images/entertien/cv-diesel-emission-reducer.webp",
              "sku": "W62190",
              "available": true
          },
          {
              "id": "cv-injector-fuel-filter-primer",
              "name": {
                  "fr": "Nettoyant injecteurs & amorçage du filtre à gazole",
                  "ar": "منظف الرشاشات / البخاخات ومعالج فلتر الوقود",
                  "en": "Injector Cleaner & Fuel Filter Primer"
              },
              "category": "diesel",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-utilitaires",
                      "fr": "Gamme pro · utilitaires",
                      "ar": "الفئة الاحترافية · المركبات التجارية",
                      "en": "Pro range · commercial vehicles",
                      "es": "Gama pro · vehículos comerciales",
                      "pt": "Gama pro · comerciais"
                  }
              ],
              "description": {
                  "fr": "Nettoie le circuit de carburant et amorce le filtre à gazole des véhicules lourds. · 1 L · Réf. W25290",
                  "ar": "لضبط أداء الرشاشات وتنظيف دورة الوقود وتجهيز فلتر الديزل. · 1 لتر · المرجع W25290",
                  "en": "Cleans the fuel circuit and primes the diesel filter for heavy-duty vehicles. · 1 L · Ref. W25290"
              },
              "image": "images/entertien/cv-injector-fuel-filter-primer.webp",
              "sku": "W25290",
              "available": true
          },
          {
              "id": "cv-supremium-diesel",
              "name": {
                  "fr": "Supremium Diesel · améliorant de gazole premium",
                  "ar": "سوبريميوم محسّن الديزل الفاخر",
                  "en": "Supremium Diesel"
              },
              "category": "diesel",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-utilitaires",
                      "fr": "Gamme pro · utilitaires",
                      "ar": "الفئة الاحترافية · المركبات التجارية",
                      "en": "Pro range · commercial vehicles",
                      "es": "Gama pro · vehículos comerciales",
                      "pt": "Gama pro · comerciais"
                  }
              ],
              "description": {
                  "fr": "Transforme le gazole ordinaire en gazole premium : cétane plus élevé, injecteurs propres, consommation réduite. · 200 L (fût) · Réf. W25399",
                  "ar": "منتج يحول الديزل العادي إلى ديزل سوبر عالي الجودة. · 200 لتر (برميل) · المرجع W25399",
                  "en": "Turns ordinary diesel into premium diesel: higher cetane, cleaner injectors, lower consumption. · 200 L (drum) · Ref. W25399"
              },
              "image": "images/entertien/cv-supremium-diesel.webp",
              "sku": "W25399",
              "available": true
          },
          {
              "id": "cv-rco-31",
              "name": {
                  "fr": "RCO 3.1 · économiseur de carburant diesel",
                  "ar": "أر سي أو 3.1",
                  "en": "RCO 3.1"
              },
              "category": "diesel",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-utilitaires",
                      "fr": "Gamme pro · utilitaires",
                      "ar": "الفئة الاحترافية · المركبات التجارية",
                      "en": "Pro range · commercial vehicles",
                      "es": "Gama pro · vehículos comerciales",
                      "pt": "Gama pro · comerciais"
                  }
              ],
              "description": {
                  "fr": "Additif diesel économiseur (3,1 % testé par UTAC) qui réduit aussi les émissions. · 30 L · 200 L · 1000 L · Réf. W39497 W39499 W39410",
                  "ar": "محسّن أداء وقود الديزل يقلل الاستهلاك والانبعاثات (توفير 3.1%). · 30 لتر · 200 لتر · 1000 لتر · المرجع W39497 W39499 W39410",
                  "en": "Fuel-saving diesel additive (3.1% saving tested by UTAC) that also cuts emissions. · 30 L · 200 L · 1000 L · Ref. W39497 W39499 W39410"
              },
              "image": "images/entertien/cv-rco-31.webp",
              "sku": "W39497 W39499 W39410",
              "available": true
          },
          {
              "id": "cv-ice-proof",
              "name": {
                  "fr": "Ice Proof for Diesel · antigel gazole",
                  "ar": "مانع تجمد الديزل / آيس بروف للديزل",
                  "en": "Ice Proof for Diesel"
              },
              "category": "diesel",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-utilitaires",
                      "fr": "Gamme pro · utilitaires",
                      "ar": "الفئة الاحترافية · المركبات التجارية",
                      "en": "Pro range · commercial vehicles",
                      "es": "Gama pro · vehículos comerciales",
                      "pt": "Gama pro · comerciais"
                  }
              ],
              "description": {
                  "fr": "Empêche le gazole de se figer par temps froid (jusqu'à −30 °C CFPP). · 1 L · 5 L · 60 L · 200 L · Réf. W22790 W22796 W22798 W22799",
                  "ar": "الحل الجذري لمنع تجمد السولار وتكون الشمع في الأجواء الباردة. · 1 لتر · 5 لتر · 60 لتر · 200 لتر · المرجع W22790 W22796 W22798 W22799",
                  "en": "Prevents diesel waxing and freezing in cold weather (down to −30 °C CFPP). · 1 L · 5 L · 60 L · 200 L · Ref. W22790 W22796 W22798 W22799"
              },
              "image": "images/entertien/cv-ice-proof.webp",
              "sku": "W22790 W22796 W22798 W22799",
              "available": true
          },
          {
              "id": "cv-fuel-biocide",
              "name": {
                  "fr": "Fuel Biocide · biocide carburant",
                  "ar": "مبيد الوقود الحيوي",
                  "en": "Fuel Biocide (commercial)"
              },
              "category": "diesel",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-utilitaires",
                      "fr": "Gamme pro · utilitaires",
                      "ar": "الفئة الاحترافية · المركبات التجارية",
                      "en": "Pro range · commercial vehicles",
                      "es": "Gama pro · vehículos comerciales",
                      "pt": "Gama pro · comerciais"
                  }
              ],
              "description": {
                  "fr": "Élimine microbes et bactéries dans les cuves de diesel et de biodiesel. · 5 L · Réf. W22790",
                  "ar": "منتج مخصص للقضاء على الميكروبات والبكتيريا في الديزل. · 5 لتر · المرجع W22790",
                  "en": "Kills microbes and bacteria in diesel and biodiesel storage tanks. · 5 L · Ref. W22790"
              },
              "image": "images/entertien/cv-fuel-biocide.webp",
              "sku": "W22790",
              "available": true
          },
          {
              "id": "cv-diesel-fuel-system-cleaner-plus",
              "name": {
                  "fr": "Diesel Fuel System Cleaner + · nettoyant circuit diesel",
                  "ar": "منظف نظام وقود الديزل بلس",
                  "en": "Diesel Fuel System Cleaner +"
              },
              "category": "diesel",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-utilitaires",
                      "fr": "Gamme pro · utilitaires",
                      "ar": "الفئة الاحترافية · المركبات التجارية",
                      "en": "Pro range · commercial vehicles",
                      "es": "Gama pro · vehículos comerciales",
                      "pt": "Gama pro · comerciais"
                  }
              ],
              "description": {
                  "fr": "Nettoie et lubrifie pompes et injecteurs. · 5 L · 60 L · 200 L · Réf. W46796 W46798 W46799",
                  "ar": "منتج مخصص لتنظيف وتزييت الطلمبات والرشاشات. · 5 لتر · 60 لتر · 200 لتر · المرجع W46796 W46798 W46799",
                  "en": "Cleans and lubricates pumps and injectors. · 5 L · 60 L · 200 L · Ref. W46796 W46798 W46799"
              },
              "image": "images/entertien/cv-diesel-fuel-system-cleaner-plus.webp",
              "sku": "W46796 W46798 W46799",
              "available": true
          },
          {
              "id": "cv-dry-fuel",
              "name": {
                  "fr": "Dry Fuel · absorbeur d'eau (utilitaires)",
                  "ar": "دراي فيول معالج وممتص الرطوبة والمياه",
                  "en": "Dry Fuel (commercial)"
              },
              "category": "mixte",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-utilitaires",
                      "fr": "Gamme pro · utilitaires",
                      "ar": "الفئة الاحترافية · المركبات التجارية",
                      "en": "Pro range · commercial vehicles",
                      "es": "Gama pro · vehículos comerciales",
                      "pt": "Gama pro · comerciais"
                  }
              ],
              "description": {
                  "fr": "Solution professionnelle pour éliminer l'eau et l'humidité du circuit de carburant. · 5 L · 60 L · Réf. W71896 W71898",
                  "ar": "الحل الاحترافي للتخلص من الرطوبة والمياه داخل دورة الوقود. · 5 لتر · 60 لتر · المرجع W71896 W71898",
                  "en": "Professional solution to remove water and moisture from the fuel system. · 5 L · 60 L · Ref. W71896 W71898"
              },
              "image": "images/entertien/cv-dry-fuel.webp",
              "sku": "W71896 W71898",
              "available": true
          },
          {
              "id": "cv-super-charge-concentrate",
              "name": {
                  "fr": "Super Charge · traitement d'huile concentré",
                  "ar": "معالج زيت المحرك المركز – سوبر شارج",
                  "en": "Super Charge Oil Treatment Concentrate"
              },
              "category": "huile",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-utilitaires",
                      "fr": "Gamme pro · utilitaires",
                      "ar": "الفئة الاحترافية · المركبات التجارية",
                      "en": "Pro range · commercial vehicles",
                      "es": "Gama pro · vehículos comerciales",
                      "pt": "Gama pro · comerciais"
                  }
              ],
              "description": {
                  "fr": "Traitement concentré qui améliore les performances de l'huile et du moteur. · 1 L · Réf. W51390",
                  "ar": "منتج مركز لتحسين أداء زيت المحرك ورفع كفاءة التشغيل. · 1 لتر · المرجع W51390",
                  "en": "Concentrated treatment that boosts oil performance and engine efficiency. · 1 L · Ref. W51390"
              },
              "image": "images/entertien/cv-super-charge-concentrate.webp",
              "sku": "W51390",
              "available": true
          },
          {
              "id": "cv-oil-system-flush",
              "name": {
                  "fr": "Oil System Flush · rinçage circuit d'huile",
                  "ar": "منظف نظام الزيت",
                  "en": "Oil System Flush"
              },
              "category": "huile",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-utilitaires",
                      "fr": "Gamme pro · utilitaires",
                      "ar": "الفئة الاحترافية · المركبات التجارية",
                      "en": "Pro range · commercial vehicles",
                      "es": "Gama pro · vehículos comerciales",
                      "pt": "Gama pro · comerciais"
                  }
              ],
              "description": {
                  "fr": "Nettoyage interne complet du circuit d'huile avant la vidange. · 1 L · Réf. W47290",
                  "ar": "تنظيف داخلي كامل لدورة الزيت قبل تغيير الزيت. · 1 لتر · المرجع W47290",
                  "en": "Full internal cleaning of the oil circuit before changing the oil. · 1 L · Ref. W47290"
              },
              "image": "images/entertien/cv-oil-system-flush.webp",
              "sku": "W47290",
              "available": true
          },
          {
              "id": "cv-hydraulic-lifter-cleaner",
              "name": {
                  "fr": "Hydraulic Valve Lifter Cleaner · poussoirs hydrauliques",
                  "ar": "منظف رافعات الصمامات الهيدروليكية",
                  "en": "Hydraulic Valve Lifter Cleaner"
              },
              "category": "huile",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-utilitaires",
                      "fr": "Gamme pro · utilitaires",
                      "ar": "الفئة الاحترافية · المركبات التجارية",
                      "en": "Pro range · commercial vehicles",
                      "es": "Gama pro · vehículos comerciales",
                      "pt": "Gama pro · comerciais"
                  }
              ],
              "description": {
                  "fr": "Nettoie et silencie les poussoirs hydrauliques et assure une bonne lubrification. · 1 L · Réf. W76890",
                  "ar": "حل فعال لتنظيف وتقليل صوت التكايات. · 1 لتر · المرجع W76890",
                  "en": "Cleans and quiets hydraulic lifters and ensures proper lubrication. · 1 L · Ref. W76890"
              },
              "image": "images/entertien/cv-hydraulic-lifter-cleaner.webp",
              "sku": "W76890",
              "available": true
          },
          {
              "id": "cv-cooling-treatment-stop-leak",
              "name": {
                  "fr": "Cooling System Treatment & Stop Leak",
                  "ar": "معالج نظام التبريد وإيقاف التسريبات",
                  "en": "Cooling System Treatment & Stop Leak"
              },
              "category": "refroid",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-utilitaires",
                      "fr": "Gamme pro · utilitaires",
                      "ar": "الفئة الاحترافية · المركبات التجارية",
                      "en": "Pro range · commercial vehicles",
                      "es": "Gama pro · vehículos comerciales",
                      "pt": "Gama pro · comerciais"
                  }
              ],
              "description": {
                  "fr": "Solution rapide et efficace pour les petites fuites, avec protection du circuit. · 1 L · Réf. W45690",
                  "ar": "الحل السريع والفعال لإيقاف التسريبات الدقيقة وحماية دورة التبريد. · 1 لتر · المرجع W45690",
                  "en": "Fast, effective fix for small leaks, with protection of the cooling circuit. · 1 L · Ref. W45690"
              },
              "image": "images/entertien/cv-cooling-treatment-stop-leak.webp",
              "sku": "W45690",
              "available": true
          },
          {
              "id": "cv-cooling-flush",
              "name": {
                  "fr": "Cooling System Flush · utilitaires",
                  "ar": "منظف دورة التبريد",
                  "en": "Cooling System Flush (commercial)"
              },
              "category": "refroid",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "pro-utilitaires",
                      "fr": "Gamme pro · utilitaires",
                      "ar": "الفئة الاحترافية · المركبات التجارية",
                      "en": "Pro range · commercial vehicles",
                      "es": "Gama pro · vehículos comerciales",
                      "pt": "Gama pro · comerciais"
                  }
              ],
              "description": {
                  "fr": "Nettoie et restaure l'efficacité du circuit de refroidissement (traite 10 à 25 L). · 1 L · Réf. W45990",
                  "ar": "ينظف ويعيد كفاءة نظام التبريد كما كانت. · 1 لتر · المرجع W45990",
                  "en": "Cleans and restores cooling system efficiency (treats 10–25 L). · 1 L · Ref. W45990"
              },
              "image": "images/entertien/cv-cooling-flush.webp",
              "sku": "W45990",
              "available": true
          },
          {
              "id": "super-rust-penetrant",
              "name": {
                  "fr": "Super Rust Penetrant · dégrippant",
                  "ar": "مزيل الصدأ الفائق",
                  "en": "Super Rust Penetrant"
              },
              "category": "atelier",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "atelier",
                      "fr": "Atelier",
                      "ar": "الورش",
                      "en": "Workshop",
                      "es": "Taller",
                      "pt": "Oficina"
                  }
              ],
              "description": {
                  "fr": "Dégrippant multi-usage qui libère les pièces rouillées et lubrifie. · 500 ml · Réf. W56479",
                  "ar": "زيت تنظيف متعدد الاستخدامات يقهر الصدأ للتشحيم والفك. · 500 مل · المرجع W56479",
                  "en": "Multi-purpose penetrating oil that frees rusted parts and lubricates. · 500 ml · Ref. W56479"
              },
              "image": "images/entertien/super-rust-penetrant.webp",
              "sku": "W56479",
              "available": true
          },
          {
              "id": "chain-lube",
              "name": {
                  "fr": "Chain Lube · graisse pour chaînes et courroies",
                  "ar": "زيت تشحيم الجنازير والسيور",
                  "en": "Chain Lube"
              },
              "category": "atelier",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "atelier",
                      "fr": "Atelier",
                      "ar": "الورش",
                      "en": "Workshop",
                      "es": "Taller",
                      "pt": "Oficina"
                  }
              ],
              "description": {
                  "fr": "Lubrifiant adhésif puissant, résistant à l'eau, très pénétrant. · 500 ml · Réf. W66479",
                  "ar": "مزيت لاصق قوي مقاوم للماء بقدرة اختراق عالية. · 500 مل · المرجع W66479",
                  "en": "Strong, water-resistant adhesive lubricant with high penetration. · 500 ml · Ref. W66479"
              },
              "image": "images/entertien/chain-lube.webp",
              "sku": "W66479",
              "available": true
          },
          {
              "id": "viscotene",
              "name": {
                  "fr": "Viscotene · graisse spray adhérente",
                  "ar": "فيكوتين اسبراي تزليق وتشحيم",
                  "en": "Viscotene"
              },
              "category": "atelier",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "atelier",
                      "fr": "Atelier",
                      "ar": "الورش",
                      "en": "Workshop",
                      "es": "Taller",
                      "pt": "Oficina"
                  }
              ],
              "description": {
                  "fr": "Lubrifiant industriel très visqueux et très adhérent. · 500 ml · Réf. W80179",
                  "ar": "مادة تشحيم صناعية عالية اللزوجة وشديدة الالتصاق. · 500 مل · المرجع W80179",
                  "en": "High-viscosity, very adhesive industrial lubricant. · 500 ml · Ref. W80179"
              },
              "sku": "W80179",
              "available": true
          },
          {
              "id": "silicone-lubricant",
              "name": {
                  "fr": "Silicone Lubricant · lubrifiant silicone",
                  "ar": "سيليكون تشحيم وتزليق",
                  "en": "Silicone Lubricant"
              },
              "category": "atelier",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "atelier",
                      "fr": "Atelier",
                      "ar": "الورش",
                      "en": "Workshop",
                      "es": "Taller",
                      "pt": "Oficina"
                  }
              ],
              "description": {
                  "fr": "Lubrification sèche et propre pour de nombreux matériaux, sans film gras. · 500 ml · Réf. W52579",
                  "ar": "للتشحيم الجاف والنظيف لمختلف المواد. · 500 مل · المرجع W52579",
                  "en": "Clean, dry lubrication for many materials; leaves no oily film. · 500 ml · Ref. W52579"
              },
              "image": "images/entertien/silicone-lubricant.webp",
              "sku": "W52579",
              "available": true
          },
          {
              "id": "brake-clutch-cleaner",
              "name": {
                  "fr": "Brake & Clutch Cleaner · nettoyant freins et embrayage",
                  "ar": "منظف الفرامل والقابض",
                  "en": "Brake & Clutch Cleaner"
              },
              "category": "atelier",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "atelier",
                      "fr": "Atelier",
                      "ar": "الورش",
                      "en": "Workshop",
                      "es": "Taller",
                      "pt": "Oficina"
                  }
              ],
              "description": {
                  "fr": "Nettoyant puissant qui élimine huile et graisse des pièces mécaniques. · 500 ml · Réf. W61479",
                  "ar": "منظف قوي لتنظيف وإزالة الزيوت والشحوم. · 500 مل · المرجع W61479",
                  "en": "Strong cleaner that removes oil and grease from mechanical parts. · 500 ml · Ref. W61479"
              },
              "image": "images/entertien/brake-clutch-cleaner.webp",
              "sku": "W61479",
              "available": true
          },
          {
              "id": "injector-decarbonizer",
              "name": {
                  "fr": "Injector Decarbonizer · décalaminant injecteurs",
                  "ar": "بخاخ تفتيت الكربون",
                  "en": "Injector Decarbonizer"
              },
              "category": "atelier",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "atelier",
                      "fr": "Atelier",
                      "ar": "الورش",
                      "en": "Workshop",
                      "es": "Taller",
                      "pt": "Oficina"
                  }
              ],
              "description": {
                  "fr": "Désagrège les dépôts carbonés autour des injecteurs et des pièces moteur. · 500 ml · Réf. W14355",
                  "ar": "يفتت الرواسب الكربونية المتراكمة حول الرشاشات وأجزاء المحرك. · 500 مل · المرجع W14355",
                  "en": "Breaks down carbon deposits around injectors and engine parts. · 500 ml · Ref. W14355"
              },
              "image": "images/entertien/injector-decarbonizer.webp",
              "sku": "W14355",
              "available": true
          },
          {
              "id": "dpf-off-car",
              "name": {
                  "fr": "DPF Off-Car · nettoyant FAP après dépose",
                  "ar": "منظف الفلتر الخارجي",
                  "en": "DPF Off-Car"
              },
              "category": "atelier",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "atelier",
                      "fr": "Atelier",
                      "ar": "الورش",
                      "en": "Workshop",
                      "es": "Taller",
                      "pt": "Oficina"
                  }
              ],
              "description": {
                  "fr": "Produit de lavage et nettoyage du FAP déposé du véhicule. · 500 ml · 5 L · Réf. W28779 W18985",
                  "ar": "بكج غسيل وتنظيف فلتر الكربون بعد فكه من السيارة. · 500 مل · 5 لتر · المرجع W28779 W18985",
                  "en": "Wash-and-clean product for a DPF removed from the vehicle. · 500 ml · 5 L · Ref. W28779 W18985"
              },
              "image": "images/entertien/dpf-off-car.webp",
              "sku": "W28779 W18985",
              "available": true
          },
          {
              "id": "dpf-gpf-on-car",
              "name": {
                  "fr": "DPF & GPF On-Car Cleaner · nettoyage sans démontage",
                  "ar": "منظف فلاتر الجسيمات بدون فك",
                  "en": "DPF & GPF On-Car Cleaner"
              },
              "category": "atelier",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "atelier",
                      "fr": "Atelier",
                      "ar": "الورش",
                      "en": "Workshop",
                      "es": "Taller",
                      "pt": "Oficina"
                  }
              ],
              "description": {
                  "fr": "Restaure l'efficacité du filtre à particules sans le démonter. · 500 ml · Réf. W29079",
                  "ar": "يعيد كفاءة فلاتر الجسيمات دون الحاجة لفكها. · 500 مل · المرجع W29079",
                  "en": "Restores particulate filter efficiency without removing it. · 500 ml · Ref. W29079"
              },
              "image": "images/entertien/dpf-gpf-on-car.webp",
              "sku": "W29079",
              "available": true
          },
          {
              "id": "direct-injection-valve-cleaner",
              "name": {
                  "fr": "Direct Injection Valve Cleaner · nettoyant soupapes",
                  "ar": "منظف صمامات الحقن المباشر",
                  "en": "Direct Injection Valve Cleaner"
              },
              "category": "atelier",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "atelier",
                      "fr": "Atelier",
                      "ar": "الورش",
                      "en": "Workshop",
                      "es": "Taller",
                      "pt": "Oficina"
                  }
              ],
              "description": {
                  "fr": "Élimine rapidement la calamine dure et autres dépôts. · 500 ml · Réf. W28879",
                  "ar": "يزيل الكربون الصلب والملوثات الأخرى بسرعة فائقة. · 500 مل · المرجع W28879",
                  "en": "Removes hard carbon and other deposits very quickly. · 500 ml · Ref. W28879"
              },
              "image": "images/entertien/direct-injection-valve-cleaner.webp",
              "sku": "W28879",
              "available": true
          },
          {
              "id": "petrol-egr-cleaner",
              "name": {
                  "fr": "Petrol EGR Extreme Cleaner · nettoyant vanne EGR essence",
                  "ar": "منظف إي جي آر القوي لنظام البنزين",
                  "en": "Petrol EGR Extreme Cleaner"
              },
              "category": "atelier",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "atelier",
                      "fr": "Atelier",
                      "ar": "الورش",
                      "en": "Workshop",
                      "es": "Taller",
                      "pt": "Oficina"
                  }
              ],
              "description": {
                  "fr": "Nettoie conduits d'air, soupapes, débitmètre et vanne EGR des moteurs essence. · 200 ml · Réf. W29879",
                  "ar": "ينظف مجاري الهواء وصمامات السحب وصمام EGR. · 200 مل · المرجع W29879",
                  "en": "Cleans air passages, valves, air-flow sensor and EGR valve on petrol engines. · 200 ml · Ref. W29879"
              },
              "image": "images/entertien/petrol-egr-cleaner.webp",
              "sku": "W29879",
              "available": true
          },
          {
              "id": "diesel-egr-cleaner",
              "name": {
                  "fr": "Diesel EGR Extreme Cleaner · nettoyant vanne EGR diesel",
                  "ar": "منظف إي جي آر القوي لنظام الديزل",
                  "en": "Diesel EGR Extreme Cleaner"
              },
              "category": "atelier",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "atelier",
                      "fr": "Atelier",
                      "ar": "الورش",
                      "en": "Workshop",
                      "es": "Taller",
                      "pt": "Oficina"
                  }
              ],
              "description": {
                  "fr": "Nettoie admission d'air, soupapes, capteur, turbo et EGR des moteurs diesel. · 200 ml · Réf. W23379",
                  "ar": "ينظف نظام سحب الهواء والصمامات والتيربو ونظام EGR. · 200 مل · المرجع W23379",
                  "en": "Cleans air intake, valves, sensor, turbo and EGR on diesel engines. · 200 ml · Ref. W23379"
              },
              "image": "images/entertien/diesel-egr-cleaner.webp",
              "sku": "W23379",
              "available": true
          },
          {
              "id": "turbo-cleaner-spray",
              "name": {
                  "fr": "Turbo Cleaner · nettoyant turbo",
                  "ar": "منظف التوربو",
                  "en": "Turbo Cleaner"
              },
              "category": "atelier",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "atelier",
                      "fr": "Atelier",
                      "ar": "الورش",
                      "en": "Workshop",
                      "es": "Taller",
                      "pt": "Oficina"
                  }
              ],
              "description": {
                  "fr": "Nettoie et débouche les turbos encrassés, effet durable. · 200 ml · Réf. W28679",
                  "ar": "ينظف ويزيل انسداد التوربو المتسخ مع تأثير طويل الأمد. · 200 مل · المرجع W28679",
                  "en": "Cleans and unclogs dirty turbos with a long-lasting effect. · 200 ml · Ref. W28679"
              },
              "image": "images/entertien/turbo-cleaner-spray.webp",
              "sku": "W28679",
              "available": true
          },
          {
              "id": "air-intake-carburettor-cleaner",
              "name": {
                  "fr": "Air Intake – Carburettor Cleaner · nettoyant admission/carburateur",
                  "ar": "منظف مجرى الهواء وكاربوراتور",
                  "en": "Air Intake – Carburettor Cleaner"
              },
              "category": "atelier",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "atelier",
                      "fr": "Atelier",
                      "ar": "الورش",
                      "en": "Workshop",
                      "es": "Taller",
                      "pt": "Oficina"
                  }
              ],
              "description": {
                  "fr": "Élimine les dépôts de l'admission d'air, du papillon et du carburateur. · 200 ml · Réf. W54179",
                  "ar": "يزيل الرواسب في مجرى سحب الهواء وعلى صمام الخانق. · 200 مل · المرجع W54179",
                  "en": "Removes deposits from the air intake, throttle body and carburettor. · 200 ml · Ref. W54179"
              },
              "image": "images/entertien/air-intake-carburettor-cleaner.webp",
              "sku": "W54179",
              "available": true
          },
          {
              "id": "black-gasket-maker",
              "name": {
                  "fr": "Black Gasket Maker · pâte à joint noire",
                  "ar": "سيليكون جاسكيت أسود لعمل حشوة ومنع التهريب",
                  "en": "Black Gasket Maker"
              },
              "category": "atelier",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "atelier",
                      "fr": "Atelier",
                      "ar": "الورش",
                      "en": "Workshop",
                      "es": "Taller",
                      "pt": "Oficina"
                  }
              ],
              "description": {
                  "fr": "Joint silicone RTV facile pour carters d'huile et couvre-culasses (−50 à +260 °C). · 80 ml · Réf. W36144",
                  "ar": "سيليكون سهل الاستخدام لعلبة زيت المحرك وأغطية الصمامات. · 80 مل · المرجع W36144",
                  "en": "Easy RTV silicone gasket for oil sumps and valve covers (−50 to +260 °C). · 80 ml · Ref. W36144"
              },
              "image": "images/entertien/black-gasket-maker.webp",
              "sku": "W36144",
              "available": true,
              "badge": "new"
          },
          {
              "id": "red-gasket-maker",
              "name": {
                  "fr": "Red Gasket Maker · pâte à joint rouge haute température",
                  "ar": "سيليكون جاسكيت أحمر لعمل حشوة منع التهريب",
                  "en": "Red Gasket Maker"
              },
              "category": "atelier",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "atelier",
                      "fr": "Atelier",
                      "ar": "الورش",
                      "en": "Workshop",
                      "es": "Taller",
                      "pt": "Oficina"
                  }
              ],
              "description": {
                  "fr": "Joint silicone haute température pour collecteurs et turbos (−50 à +300 °C). · 80 ml · Réf. W36134",
                  "ar": "موصى به لمشاعب السحب والتوربينات، مقاومة حرارة عالية. · 80 مل · المرجع W36134",
                  "en": "High-temperature silicone gasket for intake manifolds and turbos (−50 to +300 °C). · 80 ml · Ref. W36134"
              },
              "image": "images/entertien/red-gasket-maker.webp",
              "sku": "W36134",
              "available": true,
              "badge": "new"
          },
          {
              "id": "grey-gasket-maker-80",
              "name": {
                  "fr": "Grey Gasket Maker · pâte à joint grise",
                  "ar": "سيليكون جاسكيت رمادي لعمل حشوة ومنع التهريب",
                  "en": "Grey Gasket Maker"
              },
              "category": "atelier",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "atelier",
                      "fr": "Atelier",
                      "ar": "الورش",
                      "en": "Workshop",
                      "es": "Taller",
                      "pt": "Oficina"
                  }
              ],
              "description": {
                  "fr": "Idéal pour pompes à eau et boîtes de vitesses ; résiste au liquide de refroidissement et aux vibrations. · 80 ml",
                  "ar": "مثالي لمضخات المياه وعلب التروس. · 80 مل",
                  "en": "Ideal for water pumps and gearboxes; resists coolant and vibration. · 80 ml"
              },
              "image": "images/entertien/grey-gasket-maker-80.webp",
              "available": true,
              "badge": "new"
          },
          {
              "id": "gasket-maker-200-black",
              "name": {
                  "fr": "Pâte à joint multi-usage – Noire",
                  "ar": "جاسكيت سيليكون صانع الحشوات متعدد الأغراض - أسود",
                  "en": "Multi-Purpose Gasket Maker – Black"
              },
              "category": "atelier",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "atelier",
                      "fr": "Atelier",
                      "ar": "الورش",
                      "en": "Workshop",
                      "es": "Taller",
                      "pt": "Oficina"
                  }
              ],
              "description": {
                  "fr": "Grand tube de 200 ml polyvalent ; ne convient pas aux joints de culasse. · 200 ml · Réf. W57680",
                  "ar": "عبوة أكبر (200 مل) لاستخدامات واسعة وشاملة. · 200 مل · المرجع W57680",
                  "en": "Larger 200 ml tube for wide use; not for cylinder-head gaskets. · 200 ml · Ref. W57680"
              },
              "image": "images/entertien/gasket-maker-200-black.webp",
              "sku": "W57680",
              "available": true
          },
          {
              "id": "gasket-maker-200-red",
              "name": {
                  "fr": "Pâte à joint multi-usage – Rouge",
                  "ar": "جاسكيت سيليكون صانع الحشوات متعدد الأغراض - أحمر",
                  "en": "Multi-Purpose Gasket Maker – Red"
              },
              "category": "atelier",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "atelier",
                      "fr": "Atelier",
                      "ar": "الورش",
                      "en": "Workshop",
                      "es": "Taller",
                      "pt": "Oficina"
                  }
              ],
              "description": {
                  "fr": "Grand tube de 200 ml polyvalent ; ne convient pas aux joints de culasse. · 200 ml · Réf. W10807",
                  "ar": "عبوة أكبر (200 مل) لاستخدامات واسعة وشاملة. · 200 مل · المرجع W10807",
                  "en": "Larger 200 ml tube for wide use; not for cylinder-head gaskets. · 200 ml · Ref. W10807"
              },
              "image": "images/entertien/gasket-maker-200-red.webp",
              "sku": "W10807",
              "available": true
          },
          {
              "id": "fast-orange",
              "name": {
                  "fr": "Fast Orange · nettoyant mains",
                  "ar": "فاست أورانج",
                  "en": "Fast Orange"
              },
              "category": "entretien",
              "brand": "Permatex",
              "tags": [
                  {
                      "id": "atelier",
                      "fr": "Atelier",
                      "ar": "الورش",
                      "en": "Workshop",
                      "es": "Taller",
                      "pt": "Oficina"
                  }
              ],
              "description": {
                  "fr": "Nettoyant mains biodégradable sans solvants, élimine huile, graisse et saletés. · 3,78 L · Réf. W35405",
                  "ar": "منظف يدين قابل للتحلل الحيوي وخال من المذيبات الضارة. · 3.78 لتر · المرجع W35405",
                  "en": "Biodegradable, solvent-free hand cleaner that removes oil, grease and grime. · 3.78 L · Ref. W35405"
              },
              "image": "images/entertien/fast-orange.webp",
              "sku": "W35405",
              "available": true
          },
          {
              "id": "multiserve",
              "name": {
                  "fr": "MultiSERVE 4 en 1 · machine d'entretien",
                  "ar": "جهاز مالتي سيرف 4 في 1",
                  "en": "MultiSERVE 4 in 1"
              },
              "category": "equipement",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "atelier",
                      "fr": "Atelier",
                      "ar": "الورش",
                      "en": "Workshop",
                      "es": "Taller",
                      "pt": "Oficina"
                  }
              ],
              "description": {
                  "fr": "Une machine, 4 fonctions : injection, admission d'air, turbo et FAP. · Réf. W68433",
                  "ar": "جهاز واحد بـ 4 وظائف: الحقن - مدخل الهواء - التيربو - مرشح الديزل. · المرجع W68433",
                  "en": "One machine, 4 functions: injection, air intake, turbo and DPF cleaning. · Ref. W68433"
              },
              "image": "images/entertien/multiserve.webp",
              "sku": "W68433",
              "available": true
          },
          {
              "id": "multiserve-injection-purge",
              "name": {
                  "fr": "Injection System Purge · nettoyant injection essence (MultiSERVE)",
                  "ar": "منظف نظام حقن البنزين",
                  "en": "Injection System Purge"
              },
              "category": "equipement",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "atelier",
                      "fr": "Atelier",
                      "ar": "الورش",
                      "en": "Workshop",
                      "es": "Taller",
                      "pt": "Oficina"
                  }
              ],
              "description": {
                  "fr": "Liquide de nettoyage du système d'injection essence, pour MultiSERVE. · 1 L · Réf. W76695",
                  "ar": "سائل تنظيف نظام حقن البنزين لجهاز MultiSERVE. · 1 لتر · المرجع W76695",
                  "en": "Cleaning fluid for the petrol injection system, for use with MultiSERVE. · 1 L · Ref. W76695"
              },
              "image": "images/entertien/multiserve-injection-purge.webp",
              "sku": "W76695",
              "available": true
          },
          {
              "id": "multiserve-diesel-purge",
              "name": {
                  "fr": "Diesel System Purge · nettoyant injection diesel (MultiSERVE)",
                  "ar": "منظف نظام حقن الديزل",
                  "en": "Diesel System Purge"
              },
              "category": "equipement",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "atelier",
                      "fr": "Atelier",
                      "ar": "الورش",
                      "en": "Workshop",
                      "es": "Taller",
                      "pt": "Oficina"
                  }
              ],
              "description": {
                  "fr": "Liquide de nettoyage du système d'injection diesel, pour MultiSERVE. · 1 L · Réf. W89195",
                  "ar": "سائل تنظيف نظام حقن الديزل لجهاز MultiSERVE. · 1 لتر · المرجع W89195",
                  "en": "Cleaning fluid for the diesel injection system, for use with MultiSERVE. · 1 L · Ref. W89195"
              },
              "image": "images/entertien/multiserve-diesel-purge.webp",
              "sku": "W89195",
              "available": true
          },
          {
              "id": "multiserve-air-intake",
              "name": {
                  "fr": "Air Intake Cleaner diesel & essence (MultiSERVE)",
                  "ar": "منظف مدخل الهواء (ديزل وبنزين)",
                  "en": "Diesel & Petrol Air Intake Cleaner"
              },
              "category": "equipement",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "atelier",
                      "fr": "Atelier",
                      "ar": "الورش",
                      "en": "Workshop",
                      "es": "Taller",
                      "pt": "Oficina"
                  }
              ],
              "description": {
                  "fr": "Liquide de nettoyage de l'admission d'air diesel et essence, pour MultiSERVE. · 1 L · Réf. W11495",
                  "ar": "سائل تنظيف مدخل الهواء لجهاز MultiSERVE. · 1 لتر · المرجع W11495",
                  "en": "Air-intake cleaning fluid for diesel and petrol engines, for MultiSERVE. · 1 L · Ref. W11495"
              },
              "image": "images/entertien/multiserve-air-intake.webp",
              "sku": "W11495",
              "available": true
          },
          {
              "id": "multiserve-turbo",
              "name": {
                  "fr": "Diesel Turbo Serve · nettoyant turbo (MultiSERVE)",
                  "ar": "منظف تيربو محركات الديزل",
                  "en": "Diesel Turbo Serve"
              },
              "category": "equipement",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "atelier",
                      "fr": "Atelier",
                      "ar": "الورش",
                      "en": "Workshop",
                      "es": "Taller",
                      "pt": "Oficina"
                  }
              ],
              "description": {
                  "fr": "Liquide de nettoyage du turbo des moteurs diesel, pour MultiSERVE. · 1 L · Réf. W38295",
                  "ar": "سائل تنظيف التيربو لجهاز MultiSERVE. · 1 لتر · المرجع W38295",
                  "en": "Turbo cleaning fluid for diesel engines, for MultiSERVE. · 1 L · Ref. W38295"
              },
              "image": "images/entertien/multiserve-turbo.webp",
              "sku": "W38295",
              "available": true
          },
          {
              "id": "multiserve-dpf-kit",
              "name": {
                  "fr": "Kit de nettoyage et de rinçage FAP",
                  "ar": "طقم منظف ومغسل مرشح الديزل",
                  "en": "DPF Cleaning Kit"
              },
              "category": "equipement",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "atelier",
                      "fr": "Atelier",
                      "ar": "الورش",
                      "en": "Workshop",
                      "es": "Taller",
                      "pt": "Oficina"
                  }
              ],
              "description": {
                  "fr": "Kit de nettoyage et de rinçage du FAP pour MultiSERVE. · Réf. W18784",
                  "ar": "طقم منظف ومغسل مرشح الديزل. · المرجع W18784",
                  "en": "DPF cleaner and flush kit for MultiSERVE. · Ref. W18784"
              },
              "image": "images/entertien/multiserve-dpf-kit.webp",
              "sku": "W18784",
              "available": true
          },
          {
              "id": "aircomatic-iii",
              "name": {
                  "fr": "Aircomatic III · appareil de nettoyage de la climatisation",
                  "ar": "جهاز إيركوماتيك 3",
                  "en": "Aircomatic III"
              },
              "category": "clim",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "atelier",
                      "fr": "Atelier",
                      "ar": "الورش",
                      "en": "Workshop",
                      "es": "Taller",
                      "pt": "Oficina"
                  }
              ],
              "description": {
                  "fr": "Appareil professionnel pour nettoyer la climatisation et éliminer les odeurs (12 V, 15–45 min). · Réf. W68485",
                  "ar": "الحل المهني المتكامل لتنظيف التكييف وإزالة الروائح. · المرجع W68485",
                  "en": "Professional machine to clean A/C systems and remove odours (12 V, 15–45 min). · Ref. W68485"
              },
              "image": "images/entertien/aircomatic-iii.webp",
              "sku": "W68485",
              "available": true
          },
          {
              "id": "airco-clean-disinfectant",
              "name": {
                  "fr": "Airco-Clean Disinfectant · désinfectant climatisation",
                  "ar": "مطهر إيركو-كلين",
                  "en": "Airco-Clean Disinfectant"
              },
              "category": "clim",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "atelier",
                      "fr": "Atelier",
                      "ar": "الورش",
                      "en": "Workshop",
                      "es": "Taller",
                      "pt": "Oficina"
                  }
              ],
              "description": {
                  "fr": "Nettoie, désinfecte et assainit la climatisation (pour Aircomatic). · 100 ml · Réf. W20201",
                  "ar": "سائل لتنظيف وتطهير وتعقيم نظام تكييف الهواء. · 100 مل · المرجع W20201",
                  "en": "Cleans, disinfects and sanitises the A/C system (for use with Aircomatic). · 100 ml · Ref. W20201"
              },
              "image": "images/entertien/airco-clean-disinfectant.webp",
              "sku": "W20201",
              "available": true,
              "badge": "new"
          },
          {
              "id": "airco-clean-probiotic",
              "name": {
                  "fr": "Airco-Clean Probiotic · nettoyant probiotique",
                  "ar": "سائل AIRCO-CLEAN بالبروبيوتيك",
                  "en": "Airco-Clean Probiotic"
              },
              "category": "clim",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "atelier",
                      "fr": "Atelier",
                      "ar": "الورش",
                      "en": "Workshop",
                      "es": "Taller",
                      "pt": "Oficina"
                  }
              ],
              "description": {
                  "fr": "Technologie probiotique pour un nettoyage profond et durable de la clim (pour Aircomatic). · 100 ml · Réf. W30905",
                  "ar": "تقنية حيوية لتنظيف عميق ومستدام. · 100 مل · المرجع W30905",
                  "en": "Probiotic technology for deep, lasting A/C cleaning (for use with Aircomatic). · 100 ml · Ref. W30905"
              },
              "image": "images/entertien/airco-clean-probiotic.webp",
              "sku": "W30905",
              "available": true,
              "badge": "new"
          },
          {
              "id": "air-purifier",
              "name": {
                  "fr": "Air Purifier · neutralisant d'odeurs",
                  "ar": "مزيل الروائح ومنقي الهواء",
                  "en": "Air Purifier"
              },
              "category": "clim",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "atelier",
                      "fr": "Atelier",
                      "ar": "الورش",
                      "en": "Workshop",
                      "es": "Taller",
                      "pt": "Oficina"
                  }
              ],
              "description": {
                  "fr": "Élimine instantanément les odeurs tenaces dans l'habitacle. · 100 ml · Réf. W38501",
                  "ar": "للتخلص الفوري من الروائح الصعبة داخل مقصورة السيارة. · 100 مل · المرجع W38501",
                  "en": "Instantly eliminates tough odours inside the vehicle cabin. · 100 ml · Ref. W38501"
              },
              "image": "images/entertien/air-purifier.webp",
              "sku": "W38501",
              "available": true,
              "badge": "new"
          },
          {
              "id": "airco-pure",
              "name": {
                  "fr": "Airco Pure · parfum oud",
                  "ar": "إيركو بيور - برائحة العود الملكي",
                  "en": "Airco Pure – Oud"
              },
              "category": "clim",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "atelier",
                      "fr": "Atelier",
                      "ar": "الورش",
                      "en": "Workshop",
                      "es": "Taller",
                      "pt": "Oficina"
                  }
              ],
              "description": {
                  "fr": "Nettoyant de clim au parfum oriental d'oud ; élimine odeurs et microbes. · 150 ml · Réf. W38501",
                  "ar": "منظف مكيف بلمسة فخامة شرقية. · 150 مل · المرجع W38501",
                  "en": "A/C cleaner with an oriental oud fragrance; removes odours and microbes. · 150 ml · Ref. W38501"
              },
              "image": "images/entertien/airco-pure.webp",
              "sku": "W38501",
              "available": true,
              "badge": "new"
          },
          {
              "id": "c-dpf-cleaner",
              "name": {
                  "fr": "Nettoyant filtre à particules diesel",
                  "ar": "منظف فلاتر جزيئات الديزل",
                  "en": "Diesel Particulate Filter Cleaner"
              },
              "category": "diesel",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "grand-public",
                      "fr": "Grand public",
                      "ar": "فئة المستهلك",
                      "en": "Consumer",
                      "es": "Consumidor",
                      "pt": "Consumidor"
                  }
              ],
              "description": {
                  "fr": "Nettoie et régénère un filtre à particules colmaté. · 325 ml · Réf. W28263",
                  "ar": "الحل الأمثل لتنظيف وتجديد فلاتر الكربون. · 325 مل · المرجع W28263",
                  "en": "Cleans and renews a clogged DPF filter. · 325 ml · Ref. W28263"
              },
              "image": "images/entertien/c-dpf-cleaner.webp",
              "sku": "W28263",
              "available": true
          },
          {
              "id": "c-wda",
              "name": {
                  "fr": "WDA – Wynn's Diesel Additive · améliorant diesel",
                  "ar": "محسن ومعالج الديزل الشامل",
                  "en": "WDA – Wynn's Diesel Additive"
              },
              "category": "diesel",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "grand-public",
                      "fr": "Grand public",
                      "ar": "فئة المستهلك",
                      "en": "Consumer",
                      "es": "Consumidor",
                      "pt": "Consumidor"
                  }
              ],
              "description": {
                  "fr": "Améliore la qualité du diesel, évite la paraffine par temps froid et nettoie les injecteurs. · 350 ml · Réf. W28510",
                  "ar": "محسن قوي لرفع كفاءة الديزل وحماية المحرك. · 350 مل · المرجع W28510",
                  "en": "Boosts diesel quality, prevents wax in cold weather and cleans the injectors. · 350 ml · Ref. W28510"
              },
              "image": "images/entertien/c-wda.webp",
              "sku": "W28510",
              "available": true
          },
          {
              "id": "c-diesel-turbo-cleaner",
              "name": {
                  "fr": "Nettoyant turbo diesel",
                  "ar": "منظف تيربو الديزل",
                  "en": "Diesel Turbo Cleaner"
              },
              "category": "diesel",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "grand-public",
                      "fr": "Grand public",
                      "ar": "فئة المستهلك",
                      "en": "Consumer",
                      "es": "Consumidor",
                      "pt": "Consumidor"
                  }
              ],
              "description": {
                  "fr": "Restaure le couple du moteur et protège le turbo de l'encrassement. · 325 ml · Réf. W31563",
                  "ar": "الحل الأمثل لاستعادة عزم السيارة وحماية التيربو. · 325 مل · المرجع W31563",
                  "en": "Restores engine torque and protects the turbo from clogging. · 325 ml · Ref. W31563"
              },
              "image": "images/entertien/c-diesel-turbo-cleaner.webp",
              "sku": "W31563",
              "available": true
          },
          {
              "id": "c-ice-proof",
              "name": {
                  "fr": "Antigel gazole",
                  "ar": "مانع التجمد آيس بروف للديزل",
                  "en": "Ice Proof for Diesel"
              },
              "category": "diesel",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "grand-public",
                      "fr": "Grand public",
                      "ar": "فئة المستهلك",
                      "en": "Consumer",
                      "es": "Consumidor",
                      "pt": "Consumidor"
                  }
              ],
              "description": {
                  "fr": "Protège le gazole du gel par temps froid. · 350 ml · Réf. W22710",
                  "ar": "منتج مخصص للحماية القصوى من التجمد. · 350 مل · المرجع W22710",
                  "en": "Protects diesel from freezing in cold weather. · 350 ml · Ref. W22710"
              },
              "image": "images/entertien/c-ice-proof.webp",
              "sku": "W22710",
              "available": true
          },
          {
              "id": "c-3xa-triple-action",
              "name": {
                  "fr": "3XA – action triple",
                  "ar": "ثري إكس إيه - المفعول الثلاثي",
                  "en": "3XA – Triple Action"
              },
              "category": "diesel",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "grand-public",
                      "fr": "Grand public",
                      "ar": "فئة المستهلك",
                      "en": "Consumer",
                      "es": "Consumidor",
                      "pt": "Consumidor"
                  }
              ],
              "description": {
                  "fr": "Trois bénéfices en un : nettoie, protège et améliore les performances. · 325 ml · Réf. W76459",
                  "ar": "ثلاث فوائد في عبوة واحدة: تنظيف، حماية، وتحسين أداء المحرك. · 325 مل · المرجع W76459",
                  "en": "Three benefits in one: cleans, protects and improves engine performance. · 325 ml · Ref. W76459"
              },
              "image": "images/entertien/c-3xa-triple-action.webp",
              "sku": "W76459",
              "available": true
          },
          {
              "id": "c-xtreme-diesel-emission-reducer",
              "name": {
                  "fr": "Xtreme Diesel Emission Reducer · réducteur d'émissions",
                  "ar": "إكستريم ديزل - مخفض الانبعاثات",
                  "en": "Xtreme Diesel Emission Reducer"
              },
              "category": "diesel",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "grand-public",
                      "fr": "Grand public",
                      "ar": "فئة المستهلك",
                      "en": "Consumer",
                      "es": "Consumidor",
                      "pt": "Consumidor"
                  }
              ],
              "description": {
                  "fr": "Aide à réussir le contrôle des émissions et réduit la fumée noire. · 325 ml · Réf. W67969",
                  "ar": "الحل المثالي لتخطي فحص انبعاثات العادم والسموم. · 325 مل · المرجع W67969",
                  "en": "Helps you pass the emissions inspection and cuts black smoke. · 325 ml · Ref. W67969"
              },
              "image": "images/entertien/c-xtreme-diesel-emission-reducer.webp",
              "sku": "W67969",
              "available": true
          },
          {
              "id": "c-supremium-diesel",
              "name": {
                  "fr": "Supremium Diesel · améliorant premium",
                  "ar": "سوبريميوم ديزل",
                  "en": "Supremium Diesel"
              },
              "category": "diesel",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "grand-public",
                      "fr": "Grand public",
                      "ar": "فئة المستهلك",
                      "en": "Consumer",
                      "es": "Consumidor",
                      "pt": "Consumidor"
                  }
              ],
              "description": {
                  "fr": "Augmente le cétane, restaure la puissance et protège pompe et injecteurs. · 250 ml · Réf. W22910 W22911",
                  "ar": "الرفيق المثالي لكل تفويلة لقطع مسافات أطول وأداء أقوى. · 250 مل · المرجع W22910 W22911",
                  "en": "Raises cetane, restores power and protects pump and injectors. · 250 ml · Ref. W22910 W22911"
              },
              "image": "images/entertien/c-supremium-diesel.webp",
              "sku": "W22910 W22911",
              "available": true
          },
          {
              "id": "c-injector-cleaner-diesel",
              "name": {
                  "fr": "Nettoyant injecteurs diesel",
                  "ar": "منظف البخاخات (ديزل)",
                  "en": "Injector Cleaner (diesel)"
              },
              "category": "diesel",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "grand-public",
                      "fr": "Grand public",
                      "ar": "فئة المستهلك",
                      "en": "Consumer",
                      "es": "Consumidor",
                      "pt": "Consumidor"
                  }
              ],
              "description": {
                  "fr": "Entretien complet du circuit diesel ; réduit la fumée. · 325 ml · Réf. W51668 W51672",
                  "ar": "للعناية الكاملة بنظام الوقود والقضاء على الدخان. · 325 مل · المرجع W51668 W51672",
                  "en": "Complete care of the diesel fuel system; reduces smoke. · 325 ml · Ref. W51668 W51672"
              },
              "image": "images/entertien/c-injector-cleaner-diesel.webp",
              "sku": "W51668 W51672",
              "available": true
          },
          {
              "id": "c-high-pressure-injector-protection",
              "name": {
                  "fr": "Protection injection haute pression",
                  "ar": "حماية نظام الحقن عالي الضغط",
                  "en": "High Pressure Injector Protection"
              },
              "category": "diesel",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "grand-public",
                      "fr": "Grand public",
                      "ar": "فئة المستهلك",
                      "en": "Consumer",
                      "es": "Consumidor",
                      "pt": "Consumidor"
                  }
              ],
              "description": {
                  "fr": "Nettoie et protège pompe, rampe et injecteurs des diesels modernes. · 325 ml · Réf. W13960",
                  "ar": "مخصص لتنظيف وحماية أجزاء المحرك الدقيقة. · 325 مل · المرجع W13960",
                  "en": "Cleans and protects pump, rail and injectors of modern diesels. · 325 ml · Ref. W13960"
              },
              "image": "images/entertien/c-high-pressure-injector-protection.webp",
              "sku": "W13960",
              "available": true
          },
          {
              "id": "c-formula-gold-diesel",
              "name": {
                  "fr": "Formula Gold · traitement système diesel",
                  "ar": "معالج ديزل فورمولا جولد",
                  "en": "Formula Gold Diesel System Treatment"
              },
              "category": "diesel",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "grand-public",
                      "fr": "Grand public",
                      "ar": "فئة المستهلك",
                      "en": "Consumer",
                      "es": "Consumidor",
                      "pt": "Consumidor"
                  }
              ],
              "description": {
                  "fr": "Traitement puissant et complet réservé aux moteurs diesel. · 500 ml · Réf. W76401",
                  "ar": "معالج قوي وشامل مخصص لمحركات الديزل فقط. · 500 مل · المرجع W76401",
                  "en": "Powerful, comprehensive treatment for diesel engines only. · 500 ml · Ref. W76401"
              },
              "image": "images/entertien/c-formula-gold-diesel.webp",
              "sku": "W76401",
              "available": true
          },
          {
              "id": "c-dry-fuel",
              "name": {
                  "fr": "Dry Fuel · absorbeur d'humidité",
                  "ar": "طارد الرطوبة / الوقود الجاف",
                  "en": "Dry Fuel"
              },
              "category": "mixte",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "grand-public",
                      "fr": "Grand public",
                      "ar": "فئة المستهلك",
                      "en": "Consumer",
                      "es": "Consumidor",
                      "pt": "Consumidor"
                  }
              ],
              "description": {
                  "fr": "Absorbe l'eau du réservoir pour éviter rouille et corrosion. · 500 ml · Réf. W71867",
                  "ar": "مخصص لامتصاص الماء من خزان الوقود. · 500 مل · المرجع W71867",
                  "en": "Absorbs water in the fuel tank to prevent rust and corrosion. · 500 ml · Ref. W71867"
              },
              "image": "images/entertien/c-dry-fuel.webp",
              "sku": "W71867",
              "available": true
          },
          {
              "id": "c-injector-cleaner-general",
              "name": {
                  "fr": "Nettoyant injecteurs",
                  "ar": "منظف البخاخات",
                  "en": "Injector Cleaner"
              },
              "category": "mixte",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "grand-public",
                      "fr": "Grand public",
                      "ar": "فئة المستهلك",
                      "en": "Consumer",
                      "es": "Consumidor",
                      "pt": "Consumidor"
                  }
              ],
              "description": {
                  "fr": "Nettoyant polyvalent pour injecteurs essence et diesel. · 325 ml · Réf. W71867",
                  "ar": "منظف عام وشامل للبخاخات. · 325 مل · المرجع W71867",
                  "en": "All-round cleaner for petrol and diesel injectors. · 325 ml · Ref. W71867"
              },
              "image": "images/entertien/c-injector-cleaner-general.webp",
              "sku": "W71867",
              "available": true
          },
          {
              "id": "c-injector-cleaner-petrol",
              "name": {
                  "fr": "Nettoyant injecteurs essence",
                  "ar": "منظف البخاخات (بنزين)",
                  "en": "Injector Cleaner (petrol)"
              },
              "category": "essence",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "grand-public",
                      "fr": "Grand public",
                      "ar": "فئة المستهلك",
                      "en": "Consumer",
                      "es": "Consumidor",
                      "pt": "Consumidor"
                  }
              ],
              "description": {
                  "fr": "Restaure l'efficacité des injecteurs et le jet de pulvérisation idéal. · 325 ml · Réf. W55964 W55972",
                  "ar": "لاستعادة كفاءة أداء البخاخات وإعادة نظام الرش. · 325 مل · المرجع W55964 W55972",
                  "en": "Restores injector efficiency and the ideal spray pattern. · 325 ml · Ref. W55964 W55972"
              },
              "image": "images/entertien/c-injector-cleaner-petrol.webp",
              "sku": "W55964 W55972",
              "available": true
          },
          {
              "id": "c-xtreme-petrol-emission-reducer",
              "name": {
                  "fr": "Xtreme Petrol Emission Reducer · réducteur d'émissions",
                  "ar": "مخفض الانبعاثات الفائق للبنزين",
                  "en": "Xtreme Petrol Emission Reducer"
              },
              "category": "essence",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "grand-public",
                      "fr": "Grand public",
                      "ar": "فئة المستهلك",
                      "en": "Consumer",
                      "es": "Consumidor",
                      "pt": "Consumidor"
                  }
              ],
              "description": {
                  "fr": "Solution rapide pour réussir le contrôle des émissions et améliorer les performances. · 325 ml · Réf. W67264",
                  "ar": "الحل السريع لاجتياز اختبارات الانبعاثات وتحسين الأداء. · 325 مل · المرجع W67264",
                  "en": "Quick fix for passing emission tests and improving performance. · 325 ml · Ref. W67264"
              },
              "image": "images/entertien/c-xtreme-petrol-emission-reducer.webp",
              "sku": "W67264",
              "available": true
          },
          {
              "id": "c-hybrid-cleaner",
              "name": {
                  "fr": "Hybrid Cleaner and Protector · moteurs hybrides",
                  "ar": "منظف وحامي المحركات الهجينة",
                  "en": "Hybrid Cleaner and Protector"
              },
              "category": "essence",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "grand-public",
                      "fr": "Grand public",
                      "ar": "فئة المستهلك",
                      "en": "Consumer",
                      "es": "Consumidor",
                      "pt": "Consumidor"
                  }
              ],
              "description": {
                  "fr": "Conçu spécialement pour les défis des moteurs hybrides. · 325 ml · Réf. W16020",
                  "ar": "مصمم خصيصاً لتحديات المحركات الهجينة. · 325 مل · المرجع W16020",
                  "en": "Designed specifically for the challenges of hybrid engines. · 325 ml · Ref. W16020"
              },
              "image": "images/entertien/c-hybrid-cleaner.webp",
              "sku": "W16020",
              "available": true,
              "badge": "new"
          },
          {
              "id": "c-petrol-treatment",
              "name": {
                  "fr": "Petrol Treatment · traitement essence",
                  "ar": "معالج البنزين",
                  "en": "Petrol Treatment"
              },
              "category": "essence",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "grand-public",
                      "fr": "Grand public",
                      "ar": "فئة المستهلك",
                      "en": "Consumer",
                      "es": "Consumidor",
                      "pt": "Consumidor"
                  }
              ],
              "description": {
                  "fr": "Produit d'entretien complet des circuits de carburant classiques. · 325 ml · Réf. W65263",
                  "ar": "منتج الصيانة الشاملة لنظام الوقود التقليدي. · 325 مل · المرجع W65263",
                  "en": "Complete maintenance product for conventional fuel systems. · 325 ml · Ref. W65263"
              },
              "image": "images/entertien/c-petrol-treatment.webp",
              "sku": "W65263",
              "available": true
          },
          {
              "id": "c-catalytic-lambda-cleaner",
              "name": {
                  "fr": "Nettoyant catalyseur et sonde lambda",
                  "ar": "منظف المحول الحفزي وحساس الشكمان",
                  "en": "Catalytic Converter & Lambda Cleaner"
              },
              "category": "essence",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "grand-public",
                      "fr": "Grand public",
                      "ar": "فئة المستهلك",
                      "en": "Consumer",
                      "es": "Consumidor",
                      "pt": "Consumidor"
                  }
              ],
              "description": {
                  "fr": "Améliore l'efficacité du catalyseur et de la sonde lambda. · 325 ml · Réf. W24463",
                  "ar": "يعمل على تحسين كفاءة المحول الحفاز. · 325 مل · المرجع W24463",
                  "en": "Improves catalytic converter efficiency and lambda sensor performance. · 325 ml · Ref. W24463"
              },
              "image": "images/entertien/c-catalytic-lambda-cleaner.webp",
              "sku": "W24463",
              "available": true
          },
          {
              "id": "c-3xa-complete-fuel-system",
              "name": {
                  "fr": "3XA · nettoyant circuit de carburant complet",
                  "ar": "منظف نظام الوقود المتكامل",
                  "en": "3XA Complete Fuel System Cleaner"
              },
              "category": "essence",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "grand-public",
                      "fr": "Grand public",
                      "ar": "فئة المستهلك",
                      "en": "Consumer",
                      "es": "Consumidor",
                      "pt": "Consumidor"
                  }
              ],
              "description": {
                  "fr": "Améliore les performances globales du moteur et aide à réduire la consommation. · 325 ml · Réf. W70759",
                  "ar": "يعمل على تحسين الأداء العام للمحرك. · 325 مل · المرجع W70759",
                  "en": "Improves overall engine performance and helps lower fuel consumption. · 325 ml · Ref. W70759"
              },
              "image": "images/entertien/c-3xa-complete-fuel-system.webp",
              "sku": "W70759",
              "available": true
          },
          {
              "id": "c-octane-booster",
              "name": {
                  "fr": "Octane Booster & protecteur de sièges de soupapes",
                  "ar": "معزز الأوكتان وحامي مقاعد الصمامات",
                  "en": "Octane Booster & Valve Seat Protector"
              },
              "category": "essence",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "grand-public",
                      "fr": "Grand public",
                      "ar": "فئة المستهلك",
                      "en": "Consumer",
                      "es": "Consumidor",
                      "pt": "Consumidor"
                  }
              ],
              "description": {
                  "fr": "Augmente l'indice d'octane, protège les sièges de soupapes et réduit le cliquetis. · 325 ml · Réf. W43873",
                  "ar": "يرفع رقم الأوكتان ويحمي مقاعد الصمامات. · 325 مل · المرجع W43873",
                  "en": "Raises octane, protects valve seats and reduces engine knock. · 325 ml · Ref. W43873"
              },
              "image": "images/entertien/c-octane-booster.webp",
              "sku": "W43873",
              "available": true
          },
          {
              "id": "c-formula-gold-fuel",
              "name": {
                  "fr": "Formula Gold · traitement circuit de carburant",
                  "ar": "معالج نظام الوقود فورميولا جولد",
                  "en": "Formula Gold Fuel System Treatment"
              },
              "category": "essence",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "grand-public",
                      "fr": "Grand public",
                      "ar": "فئة المستهلك",
                      "en": "Consumer",
                      "es": "Consumidor",
                      "pt": "Consumidor"
                  }
              ],
              "description": {
                  "fr": "Nettoyage et protection complets du système d'injection. · 500 ml · Réf. W70701",
                  "ar": "تنظيف وحماية شاملة لنظام الحقن. · 500 مل · المرجع W70701",
                  "en": "Complete cleaning and protection of the injection system. · 500 ml · Ref. W70701"
              },
              "image": "images/entertien/c-formula-gold-fuel.webp",
              "sku": "W70701",
              "available": true
          },
          {
              "id": "c-supremium-petrol",
              "name": {
                  "fr": "Supremium Petrol · améliorant essence",
                  "ar": "سبريميوم بنزين",
                  "en": "Supremium Petrol"
              },
              "category": "essence",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "grand-public",
                      "fr": "Grand public",
                      "ar": "فئة المستهلك",
                      "en": "Consumer",
                      "es": "Consumidor",
                      "pt": "Consumidor"
                  }
              ],
              "description": {
                  "fr": "Améliore le rendement, nettoie les injecteurs et protège le circuit de carburant. · 250 ml · Réf. W22810",
                  "ar": "يحسن كفاءة الوقود وينظف البخاخات. · 250 مل · المرجع W22810",
                  "en": "Improves fuel efficiency, cleans injectors and protects the fuel system. · 250 ml · Ref. W22810"
              },
              "image": "images/entertien/c-supremium-petrol.webp",
              "sku": "W22810",
              "available": true
          },
          {
              "id": "c-lead-substitute",
              "name": {
                  "fr": "Substitut de plomb",
                  "ar": "بديل الرصاص",
                  "en": "Lead Substitute"
              },
              "category": "essence",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "grand-public",
                      "fr": "Grand public",
                      "ar": "فئة المستهلك",
                      "en": "Consumer",
                      "es": "Consumidor",
                      "pt": "Consumidor"
                  }
              ],
              "description": {
                  "fr": "Protège les sièges de soupapes tendres des moteurs anciens roulant au sans-plomb. · 250 ml · Réf. W70611 W70612",
                  "ar": "يحمي مقاعد الصمامات اللينة في المحركات القديمة. · 250 مل · المرجع W70611 W70612",
                  "en": "Protects soft valve seats of older engines running on unleaded petrol. · 250 ml · Ref. W70611 W70612"
              },
              "image": "images/entertien/c-lead-substitute.webp",
              "sku": "W70611 W70612",
              "available": true
          },
          {
              "id": "c-fuel-stabilizer",
              "name": {
                  "fr": "Stabilisateur de carburant",
                  "ar": "مثبت الوقود",
                  "en": "Fuel Stabilizer"
              },
              "category": "essence",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "grand-public",
                      "fr": "Grand public",
                      "ar": "فئة المستهلك",
                      "en": "Consumer",
                      "es": "Consumidor",
                      "pt": "Consumidor"
                  }
              ],
              "description": {
                  "fr": "Évite la dégradation de l'essence pendant un stockage ou un arrêt prolongé. · 250 ml · Réf. W23912",
                  "ar": "يحمي الوقود من التحلل بعد فترات التوقف الطويلة. · 250 مل · المرجع W23912",
                  "en": "Keeps petrol from degrading during long periods of storage or inactivity. · 250 ml · Ref. W23912"
              },
              "image": "images/entertien/c-fuel-stabilizer.webp",
              "sku": "W23912",
              "available": true
          },
          {
              "id": "c-super-charge-compression",
              "name": {
                  "fr": "Super Charge · améliorateur de compression (nouvelle formule)",
                  "ar": "سوبر تشارج - محسن ضغط المحرك",
                  "en": "Super Charge Compression Improver"
              },
              "category": "huile",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "grand-public",
                      "fr": "Grand public",
                      "ar": "فئة المستهلك",
                      "en": "Consumer",
                      "es": "Consumidor",
                      "pt": "Consumidor"
                  }
              ],
              "description": {
                  "fr": "Restaure la compression, réduit la consommation d'huile et la fumée bleue. · 325 ml · Réf. W51420",
                  "ar": "يعيد قوة ضغط المحرك ويقلل استهلاك الزيت. · 325 مل · المرجع W51420",
                  "en": "Restores compression, cuts oil consumption and blue smoke. · 325 ml · Ref. W51420"
              },
              "image": "images/entertien/c-super-charge-compression.webp",
              "sku": "W51420",
              "available": true,
              "badge": "new"
          },
          {
              "id": "c-ceramic-engine-protector",
              "name": {
                  "fr": "Protecteur moteur céramique",
                  "ar": "معالج المحرك بالسيراميك",
                  "en": "Ceramic Engine Protector"
              },
              "category": "huile",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "grand-public",
                      "fr": "Grand public",
                      "ar": "فئة المستهلك",
                      "en": "Consumer",
                      "es": "Consumidor",
                      "pt": "Consumidor"
                  }
              ],
              "description": {
                  "fr": "Technologie céramique qui réduit frottements et usure pour une protection durable. · 325 ml · Réf. W66920",
                  "ar": "يمتاز بتقنية السيراميك لتقليل الاحتكاك والتآكل. · 325 مل · المرجع W66920",
                  "en": "Ceramic technology that reduces friction and wear for lasting protection. · 325 ml · Ref. W66920"
              },
              "image": "images/entertien/c-ceramic-engine-protector.webp",
              "sku": "W66920",
              "available": true,
              "badge": "new"
          },
          {
              "id": "c-engine-stop-leak",
              "name": {
                  "fr": "Stop fuites d'huile moteur",
                  "ar": "مانع تسرب زيت المحرك",
                  "en": "Engine Stop Leak"
              },
              "category": "huile",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "grand-public",
                      "fr": "Grand public",
                      "ar": "فئة المستهلك",
                      "en": "Consumer",
                      "es": "Consumidor",
                      "pt": "Consumidor"
                  }
              ],
              "description": {
                  "fr": "Stoppe et prévient les fuites d'huile moteur sans démontage. · 325 ml · Réf. W50664 W50672 W50624",
                  "ar": "يوقف ويمنع تسرب زيت المحرك دون الحاجة لفك المحرك. · 325 مل · المرجع W50664 W50672 W50624",
                  "en": "Stops and prevents engine oil leaks without dismantling. · 325 ml · Ref. W50664 W50672 W50624"
              },
              "image": "images/entertien/c-engine-stop-leak.webp",
              "sku": "W50664 W50672 W50624",
              "available": true
          },
          {
              "id": "c-hydraulic-lifter-treatment",
              "name": {
                  "fr": "Traitement poussoirs hydrauliques",
                  "ar": "معالج تكايات الصمامات الهيدروليكية",
                  "en": "Hydraulic Valve Lifter Treatment"
              },
              "category": "huile",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "grand-public",
                      "fr": "Grand public",
                      "ar": "فئة المستهلك",
                      "en": "Consumer",
                      "es": "Consumidor",
                      "pt": "Consumidor"
                  }
              ],
              "description": {
                  "fr": "Rétablit le fonctionnement des poussoirs hydrauliques et calme la distribution. · 325 ml · Réf. W76858",
                  "ar": "يعيد كفاءة عمل التكايات ويقلل الضجيج. · 325 مل · المرجع W76858",
                  "en": "Restores hydraulic lifter operation and quiets the valve train. · 325 ml · Ref. W76858"
              },
              "image": "images/entertien/c-hydraulic-lifter-treatment.webp",
              "sku": "W76858",
              "available": true
          },
          {
              "id": "c-motor-cleaner-engine-flush",
              "name": {
                  "fr": "Motor Cleaner – rinçage moteur",
                  "ar": "منظف المحرك (غسيل المحرك - فلاش)",
                  "en": "Motor Cleaner – Engine Flush"
              },
              "category": "huile",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "grand-public",
                      "fr": "Grand public",
                      "ar": "فئة المستهلك",
                      "en": "Consumer",
                      "es": "Consumidor",
                      "pt": "Consumidor"
                  }
              ],
              "description": {
                  "fr": "Nettoie en profondeur le circuit d'huile avant la vidange. · 325 ml · Réf. W51265 W51272",
                  "ar": "ينظف نظام الزيت داخل المحرك من الداخل بعمق. · 325 مل · المرجع W51265 W51272",
                  "en": "Deep-cleans the oil system from the inside before an oil change. · 325 ml · Ref. W51265 W51272"
              },
              "image": "images/entertien/c-motor-cleaner-engine-flush.webp",
              "sku": "W51265 W51272",
              "available": true
          },
          {
              "id": "c-stop-smoke",
              "name": {
                  "fr": "Stop Smoke · anti-fumée",
                  "ar": "مانع الدخان",
                  "en": "Stop Smoke"
              },
              "category": "huile",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "grand-public",
                      "fr": "Grand public",
                      "ar": "فئة المستهلك",
                      "en": "Consumer",
                      "es": "Consumidor",
                      "pt": "Consumidor"
                  }
              ],
              "description": {
                  "fr": "Réduit la fumée d'échappement due à la combustion d'huile et calme le moteur. · 325 ml · Réf. W76858",
                  "ar": "يقلل من دخان العادم الناتج عن احتراق الزيت. · 325 مل · المرجع W76858",
                  "en": "Reduces exhaust smoke caused by burning oil and quiets the engine. · 325 ml · Ref. W76858"
              },
              "image": "images/entertien/c-stop-smoke.webp",
              "sku": "W76858",
              "available": true
          },
          {
              "id": "c-formula-gold-engine",
              "name": {
                  "fr": "Formula Gold · traitement moteur",
                  "ar": "معالج المحرك فورميولا جولد",
                  "en": "Formula Gold Engine Treatment"
              },
              "category": "huile",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "grand-public",
                      "fr": "Grand public",
                      "ar": "فئة المستهلك",
                      "en": "Consumer",
                      "es": "Consumidor",
                      "pt": "Consumidor"
                  }
              ],
              "description": {
                  "fr": "Réduit oxydation, frottements et usure pour prolonger la vie du moteur. · 500 ml · Réf. W77101",
                  "ar": "يساعد في إطالة عمر المحرك عبر تقليل الاحتكاك والتآكل. · 500 مل · المرجع W77101",
                  "en": "Reduces oxidation, friction and wear to extend engine life. · 500 ml · Ref. W77101"
              },
              "image": "images/entertien/c-formula-gold-engine.webp",
              "sku": "W77101",
              "available": true
          },
          {
              "id": "c-radiator-flush",
              "name": {
                  "fr": "Nettoyant radiateur",
                  "ar": "غسيل الرادياتير",
                  "en": "Radiator Flush"
              },
              "category": "refroid",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "grand-public",
                      "fr": "Grand public",
                      "ar": "فئة المستهلك",
                      "en": "Consumer",
                      "es": "Consumidor",
                      "pt": "Consumidor"
                  }
              ],
              "description": {
                  "fr": "Nettoyant radiateur puissant, sans acides. · 325 ml · Réf. W56064",
                  "ar": "منظف قوي وخال من الأحماض لنظام التبريد. · 325 مل · المرجع W56064",
                  "en": "Strong, acid-free radiator cleaner for the cooling system. · 325 ml · Ref. W56064"
              },
              "image": "images/entertien/c-radiator-flush.webp",
              "sku": "W56064",
              "available": true
          },
          {
              "id": "c-radiator-stop-leak",
              "name": {
                  "fr": "Stop fuites radiateur",
                  "ar": "مانع تسرب الرادياتير",
                  "en": "Radiator Stop Leak"
              },
              "category": "refroid",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "grand-public",
                      "fr": "Grand public",
                      "ar": "فئة المستهلك",
                      "en": "Consumer",
                      "es": "Consumidor",
                      "pt": "Consumidor"
                  }
              ],
              "description": {
                  "fr": "Stoppe et prévient les fuites du radiateur et du circuit de refroidissement. · 325 ml · Réf. W55864 W55872",
                  "ar": "يوقف ويمنع التسربات في نظام التبريد. · 325 مل · المرجع W55864 W55872",
                  "en": "Stops and prevents leaks in the radiator and cooling system. · 325 ml · Ref. W55864 W55872"
              },
              "image": "images/entertien/c-radiator-stop-leak.webp",
              "sku": "W55864 W55872",
              "available": true
          },
          {
              "id": "c-probiotic-ac-cleaner",
              "name": {
                  "fr": "Nettoyant clim probiotique",
                  "ar": "منظف مكيف الهواء بالبروبيوتيك",
                  "en": "Probiotic A/C Cleaner"
              },
              "category": "clim",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "grand-public",
                      "fr": "Grand public",
                      "ar": "فئة المستهلك",
                      "en": "Consumer",
                      "es": "Consumidor",
                      "pt": "Consumidor"
                  }
              ],
              "description": {
                  "fr": "Nettoyant clim très efficace aux probiotiques, parfum menthe fraîche. · 150 ml · Réf. W38701",
                  "ar": "منظف عالي الفعالية لنظام التكييف برائحة نعناع. · 150 مل · المرجع W38701",
                  "en": "High-efficiency A/C cleaner with probiotics for a fresh mint scent. · 150 ml · Ref. W38701"
              },
              "image": "images/entertien/c-probiotic-ac-cleaner.webp",
              "sku": "W38701",
              "available": true,
              "badge": "new"
          },
          {
              "id": "c-clean-air",
              "name": {
                  "fr": "Clean-Air · traitement anti-odeurs",
                  "ar": "كلين-إير - معالج الروائح الكريهة",
                  "en": "Clean-Air"
              },
              "category": "clim",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "grand-public",
                      "fr": "Grand public",
                      "ar": "فئة المستهلك",
                      "en": "Consumer",
                      "es": "Consumidor",
                      "pt": "Consumidor"
                  }
              ],
              "description": {
                  "fr": "Neutralise les odeurs de fumée, sueur, nourriture, moisissure et humidité. · 100 ml · Réf. W29601",
                  "ar": "يعالج الروائح الكريهة من خلال تفاعل كيميائي جزيئي. · 100 مل · المرجع W29601",
                  "en": "Neutralises odours from smoke, sweat, food, mould and damp. · 100 ml · Ref. W29601"
              },
              "image": "images/entertien/c-clean-air.webp",
              "sku": "W29601",
              "available": true
          },
          {
              "id": "c-exhaust-repair-putty",
              "name": {
                  "fr": "Pâte de réparation d'échappement",
                  "ar": "معجون إصلاح العادم",
                  "en": "Exhaust Repair Putty"
              },
              "category": "entretien",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "grand-public",
                      "fr": "Grand public",
                      "ar": "فئة المستهلك",
                      "en": "Consumer",
                      "es": "Consumidor",
                      "pt": "Consumidor"
                  }
              ],
              "description": {
                  "fr": "Répare durablement trous et fissures d'échappement (jusqu'à 1000 °C). · 250 g · Réf. W10804",
                  "ar": "يستخدم لإصلاح الثقوب والشقوق في أنظمة العادم. · 250 غ · المرجع W10804",
                  "en": "Permanently repairs holes and cracks in exhaust systems (up to 1000 °C). · 250 g · Ref. W10804"
              },
              "image": "images/entertien/c-exhaust-repair-putty.webp",
              "sku": "W10804",
              "available": true
          },
          {
              "id": "c-starting-fluid",
              "name": {
                  "fr": "Spray de démarrage",
                  "ar": "سائل التشغيل السريع",
                  "en": "Starting Fluid"
              },
              "category": "entretien",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "grand-public",
                      "fr": "Grand public",
                      "ar": "فئة المستهلك",
                      "en": "Consumer",
                      "es": "Consumidor",
                      "pt": "Consumidor"
                  }
              ],
              "description": {
                  "fr": "Démarre le moteur rapidement par grand froid et protège la batterie. · 200 ml · Réf. W58055",
                  "ar": "يشغّل المحرك فوراً ويساعد في الطقس البارد جداً. · 200 مل · المرجع W58055",
                  "en": "Starts engines fast in very cold weather and protects the battery. · 200 ml · Ref. W58055"
              },
              "image": "images/entertien/c-starting-fluid.webp",
              "sku": "W58055",
              "available": true
          },
          {
              "id": "c-anti-insect-screen-wash",
              "name": {
                  "fr": "Lave-glace anti-insectes",
                  "ar": "غسول الزجاج المضاد للحشرات",
                  "en": "Anti-Insect Screen-Wash"
              },
              "category": "entretien",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "grand-public",
                      "fr": "Grand public",
                      "ar": "فئة المستهلك",
                      "en": "Consumer",
                      "es": "Consumidor",
                      "pt": "Consumidor"
                  }
              ],
              "description": {
                  "fr": "Lave-glace concentré qui élimine insectes et salissures du pare-brise. · 250 ml · 1000 ml · Réf. W45201 W45202",
                  "ar": "منتج مركز قوي لإزالة الحشرات والأوساخ. · 250 مل · 1000 مل · المرجع W45201 W45202",
                  "en": "Concentrated screen-wash that removes insects and dirt from the windscreen. · 250 ml · 1000 ml · Ref. W45201 W45202"
              },
              "image": "images/entertien/c-anti-insect-screen-wash.webp",
              "sku": "W45201 W45202",
              "available": true
          },
          {
              "id": "c-super-screen-wash",
              "name": {
                  "fr": "Lave-glace super concentré 21+",
                  "ar": "غسول الزجاج فائق التركيز 21",
                  "en": "Super Concentrated Screen-Wash 21+"
              },
              "category": "entretien",
              "brand": "Wynn's",
              "tags": [
                  {
                      "id": "grand-public",
                      "fr": "Grand public",
                      "ar": "فئة المستهلك",
                      "en": "Consumer",
                      "es": "Consumidor",
                      "pt": "Consumidor"
                  }
              ],
              "description": {
                  "fr": "Lave-glace super concentré, protection antigel jusqu'à −58 °C. · 1 L · 5 L · Réf. W45101 W77395 W77396",
                  "ar": "منتج مركز جداً لتنظيف الزجاج مع حماية من التجمد. · 1 لتر · 5 لتر · المرجع W45101 W77395 W77396",
                  "en": "Super-concentrated screen-wash with frost protection down to −58 °C. · 1 L · 5 L · Ref. W45101 W77395 W77396"
              },
              "image": "images/entertien/c-super-screen-wash.webp",
              "sku": "W45101 W77395 W77396",
              "available": true
          }
      ]
  },

  /* Menu & Restauration (Relais de l'Aéroport) */
  menu: {
    "categories": [
      {
        "id": "petit-dejeuner",
        "icon": "🥐",
        "name": {
          "fr": "Petit-déjeuner",
          "en": "Breakfast",
          "ar": "الفطور"
        }
      },
      {
        "id": "carte",
        "icon": "🍳",
        "name": {
          "fr": "À la carte",
          "en": "À la carte",
          "ar": "على الطلب"
        }
      },
      {
        "id": "supplements",
        "icon": "➕",
        "name": {
          "fr": "Suppléments",
          "en": "Extras",
          "ar": "إضافات"
        }
      },
      {
        "id": "boissons-chaudes",
        "icon": "☕",
        "name": {
          "fr": "Boissons chaudes",
          "en": "Hot drinks",
          "ar": "مشروبات ساخنة"
        }
      },
      {
        "id": "boissons-fraiches",
        "icon": "🥤",
        "name": {
          "fr": "Boissons fraîches",
          "en": "Cold drinks",
          "ar": "مشروبات باردة"
        }
      },
      {
        "id": "jus",
        "icon": "🧃",
        "name": {
          "fr": "Jus naturels",
          "en": "Fresh juices",
          "ar": "عصائر طبيعية"
        }
      },
      {
        "id": "plats",
        "icon": "🍖",
        "name": {
          "fr": "Plats",
          "en": "Main dishes",
          "ar": "الأطباق"
        }
      },
      {
        "id": "tajine",
        "icon": "🍲",
        "name": {
          "fr": "Tajines",
          "en": "Tagines",
          "ar": "الطواجن"
        }
      },
      {
        "id": "plats-chauds",
        "icon": "🥣",
        "name": {
          "fr": "Plats chauds",
          "en": "Hot soups",
          "ar": "شوربات ساخنة"
        }
      },
      {
        "id": "salades",
        "icon": "🥗",
        "name": {
          "fr": "Salades",
          "en": "Salads",
          "ar": "سلطات"
        }
      },
      {
        "id": "pizza",
        "icon": "🍕",
        "name": {
          "fr": "Pizzas",
          "en": "Pizzas",
          "ar": "بيتزا"
        }
      },
      {
        "id": "tacos",
        "icon": "🌮",
        "name": {
          "fr": "Tacos",
          "en": "Tacos",
          "ar": "تاكوس"
        }
      },
      {
        "id": "wraps",
        "icon": "🌯",
        "name": {
          "fr": "Wraps",
          "en": "Wraps",
          "ar": "راب"
        }
      },
      {
        "id": "sandwiches",
        "icon": "🥪",
        "name": {
          "fr": "Sandwiches",
          "en": "Sandwiches",
          "ar": "سندويتشات"
        }
      },
      {
        "id": "burgers",
        "icon": "🍔",
        "name": {
          "fr": "Burgers",
          "en": "Burgers",
          "ar": "برغر"
        }
      },
      {
        "id": "fast-food",
        "icon": "🥖",
        "name": {
          "fr": "Fast food",
          "en": "Fast food",
          "ar": "وجبات سريعة"
        }
      },
      {
        "id": "pasticcio",
        "icon": "🍝",
        "name": {
          "fr": "Pasticcio",
          "en": "Pasticcio",
          "ar": "باستيتشيو"
        }
      },
      {
        "id": "desserts",
        "icon": "🍰",
        "name": {
          "fr": "Desserts",
          "en": "Desserts",
          "ar": "حلويات"
        }
      }
    ],
    "products": [
      {
        "id": "petit-dejeuner-marocain",
        "name": "Marocain",
        "category": "petit-dejeuner",
        "price": 47,
        "description": "Boisson chaude, Harcha, Baghrir, Reghayaf, Pain grillé, 5 accompagnements (Jben beldi, Beurre, Miel, Amlou, Confiture), Jus d'orange, Eau minérale. Servi jusqu'à 14h.",
        "available": true
      },
      {
        "id": "petit-dejeuner-chamali",
        "name": "Chamali",
        "category": "petit-dejeuner",
        "price": 45,
        "description": "Boisson chaude, Pain, 2 Œufs plat, Jben beldi, La vache qui rit, Luncheon, Jus d'orange, Eau minérale. Servi jusqu'à 14h.",
        "available": true
      },
      {
        "id": "petit-dejeuner-fassi",
        "name": "Fassi",
        "category": "petit-dejeuner",
        "price": 50,
        "description": "Boisson chaude, Pain, Tajine de khlie aux 2 Œufs, Jus d'orange, Eau minérale, Hssoua. Servi jusqu'à 14h.",
        "available": true
      },
      {
        "id": "petit-dejeuner-francais",
        "name": "Français",
        "category": "petit-dejeuner",
        "price": 45,
        "description": "Boisson chaude, (Chenik, Petit pain, Croissant / deux choix), 3 accompagnements (La vache qui rit, Confiture, Nutella), Jus d'orange, Eau minérale. Servi jusqu'à 14h.",
        "available": true
      },
      {
        "id": "petit-dejeuner-light",
        "name": "Light",
        "category": "petit-dejeuner",
        "price": 45,
        "description": "Boisson chaude, Pain grillé, Fromage edam, 3 accompagnements (Jben beldi, La vache qui rit light, Confiture light), Jus d'orange, Eau minérale. Servi jusqu'à 14h.",
        "available": true
      },
      {
        "id": "petit-dejeuner-hollandais",
        "name": "Hollandais",
        "category": "petit-dejeuner",
        "price": 50,
        "description": "Boisson chaude, Toast, 2 Œufs, Dinde fumée, Fromage edam, Jus d'orange, Eau minérale. Servi jusqu'à 14h.",
        "available": true
      },
      {
        "id": "petit-dejeuner-espagnol",
        "name": "Espagnol",
        "category": "petit-dejeuner",
        "price": 55,
        "description": "Boisson chaude, Pain grillé, Purée tomate, Fromage manchego, Huile d'olive, Jus d'orange, Eau minérale. Servi jusqu'à 14h.",
        "available": true
      },
      {
        "id": "petit-dejeuner-classic",
        "name": "Classic",
        "category": "petit-dejeuner",
        "price": 45,
        "description": "Boisson chaude, Pain, Omelette Fromage, Jben beldi, Olive, Jus d'orange, Eau minérale. Servi jusqu'à 14h.",
        "available": true
      },
      {
        "id": "petit-dejeuner-dejeuner-enfants",
        "name": "Déjeuner enfants",
        "category": "petit-dejeuner",
        "price": 45,
        "description": "Chocolat chaud, Corn-flakes, Pain au chocolat, Jus d'orange, Eau minérale. Servi jusqu'à 14h.",
        "available": true
      },
      {
        "id": "carte-toast-aux-fromage",
        "name": "Toast aux fromage",
        "category": "carte",
        "price": 18,
        "available": true
      },
      {
        "id": "carte-toast-aux-fromage-dinde",
        "name": "Toast aux fromage dinde",
        "category": "carte",
        "price": 24,
        "available": true
      },
      {
        "id": "carte-toast-maison-ufs-fromage-edam-dinde-fumee",
        "name": "Toast maison, œufs, fromage edam, dinde fumée",
        "category": "carte",
        "price": 30,
        "available": true
      },
      {
        "id": "carte-croque-aux-fromage",
        "name": "Croque aux fromage",
        "category": "carte",
        "price": 25,
        "available": true
      },
      {
        "id": "carte-croque-aux-fromage-dinde",
        "name": "Croque aux fromage dinde",
        "category": "carte",
        "price": 32,
        "available": true
      },
      {
        "id": "carte-tajine-aux-khlie-avec-1-uf",
        "name": "Tajine aux khlie avec 1 œuf",
        "category": "carte",
        "price": 35,
        "available": true
      },
      {
        "id": "carte-tajine-aux-khlie-avec-2-ufs",
        "name": "Tajine aux khlie avec 2 œufs",
        "category": "carte",
        "price": 40,
        "available": true
      },
      {
        "id": "carte-baghrir-avec-miel",
        "name": "Baghrir avec miel",
        "category": "carte",
        "price": 20,
        "available": true
      },
      {
        "id": "carte-baghrir-avec-amlou-banane",
        "name": "Baghrir avec amlou, banane",
        "category": "carte",
        "price": 26,
        "available": true
      },
      {
        "id": "carte-1-uf-au-plat",
        "name": "1 œuf au plat",
        "category": "carte",
        "price": 12,
        "available": true
      },
      {
        "id": "carte-2-ufs-au-plat",
        "name": "2 œufs au plat",
        "category": "carte",
        "price": 16,
        "available": true
      },
      {
        "id": "carte-omelette-nature",
        "name": "Omelette nature",
        "category": "carte",
        "price": 18,
        "available": true
      },
      {
        "id": "carte-omelette-aux-fromage",
        "name": "Omelette aux fromage",
        "category": "carte",
        "price": 22,
        "available": true
      },
      {
        "id": "carte-omelette-aux-fromage-dinde",
        "name": "Omelette aux fromage dinde",
        "category": "carte",
        "price": 34,
        "available": true
      },
      {
        "id": "carte-omelette-aux-fromage-champignons",
        "name": "Omelette aux fromage champignons",
        "category": "carte",
        "price": 40,
        "available": true
      },
      {
        "id": "carte-omelette-legumes",
        "name": "Omelette légumes",
        "category": "carte",
        "price": 30,
        "available": true
      },
      {
        "id": "carte-omelette-a-l-ail-et-au-persil",
        "name": "Omelette à l'ail et au persil",
        "category": "carte",
        "price": 25,
        "available": true
      },
      {
        "id": "supplements-amlou",
        "name": "Amlou",
        "category": "supplements",
        "price": 7,
        "available": true
      },
      {
        "id": "supplements-confiture",
        "name": "Confiture",
        "category": "supplements",
        "price": 5,
        "available": true
      },
      {
        "id": "supplements-miel",
        "name": "Miel",
        "category": "supplements",
        "price": 5,
        "available": true
      },
      {
        "id": "supplements-beurre",
        "name": "Beurre",
        "category": "supplements",
        "price": 6,
        "available": true
      },
      {
        "id": "supplements-jben-arabi",
        "name": "Jben arabi",
        "category": "supplements",
        "price": 7,
        "available": true
      },
      {
        "id": "supplements-nutella",
        "name": "Nutella",
        "category": "supplements",
        "price": 8,
        "available": true
      },
      {
        "id": "supplements-la-vache-qui-rit",
        "name": "La vache qui rit",
        "category": "supplements",
        "price": 3,
        "available": true
      },
      {
        "id": "supplements-kiri",
        "name": "Kiri",
        "category": "supplements",
        "price": 4,
        "available": true
      },
      {
        "id": "supplements-huile-d-olive",
        "name": "Huile d'olive",
        "category": "supplements",
        "price": 7,
        "available": true
      },
      {
        "id": "supplements-luncheon-chef",
        "name": "Luncheon (chef)",
        "category": "supplements",
        "price": 10,
        "available": true
      },
      {
        "id": "supplements-dinde-fumee",
        "name": "Dinde fumée",
        "category": "supplements",
        "price": 8,
        "available": true
      },
      {
        "id": "supplements-uf",
        "name": "Œuf",
        "category": "supplements",
        "price": 5,
        "available": true
      },
      {
        "id": "supplements-fromage-edam",
        "name": "Fromage edam",
        "category": "supplements",
        "price": 9,
        "available": true
      },
      {
        "id": "supplements-pain-normal",
        "name": "Pain normal",
        "category": "supplements",
        "price": 3,
        "available": true
      },
      {
        "id": "supplements-pain-complet",
        "name": "Pain complet",
        "category": "supplements",
        "price": 4,
        "available": true
      },
      {
        "id": "supplements-pain-cereales",
        "name": "Pain céréales",
        "category": "supplements",
        "price": 5,
        "available": true
      },
      {
        "id": "supplements-pain-makla",
        "name": "Pain makla",
        "category": "supplements",
        "price": 5,
        "available": true
      },
      {
        "id": "supplements-toast",
        "name": "Toast",
        "category": "supplements",
        "price": 6,
        "available": true
      },
      {
        "id": "supplements-harcha",
        "name": "Harcha",
        "category": "supplements",
        "price": 6,
        "available": true
      },
      {
        "id": "supplements-rghaif",
        "name": "Rghaif",
        "category": "supplements",
        "price": 7,
        "available": true
      },
      {
        "id": "supplements-baghrir",
        "name": "Baghrir",
        "category": "supplements",
        "price": 6,
        "available": true
      },
      {
        "id": "supplements-thon",
        "name": "Thon",
        "category": "supplements",
        "price": 12,
        "available": true
      },
      {
        "id": "supplements-avocat",
        "name": "Avocat",
        "category": "supplements",
        "price": 15,
        "available": true
      },
      {
        "id": "supplements-leban",
        "name": "Leban",
        "category": "supplements",
        "price": 5,
        "available": true
      },
      {
        "id": "supplements-dattes-3",
        "name": "Dattes (3)",
        "category": "supplements",
        "price": 5,
        "available": true
      },
      {
        "id": "supplements-chebakia-2",
        "name": "Chebakia (2)",
        "category": "supplements",
        "price": 5,
        "available": true
      },
      {
        "id": "boissons-chaudes-cafe-noir",
        "name": "Café noir",
        "category": "boissons-chaudes",
        "price": 15,
        "available": true
      },
      {
        "id": "boissons-chaudes-nespresso",
        "name": "Nespresso",
        "category": "boissons-chaudes",
        "price": 18,
        "available": true
      },
      {
        "id": "boissons-chaudes-cafe-au-lait",
        "name": "Café au lait",
        "category": "boissons-chaudes",
        "price": 16,
        "available": true
      },
      {
        "id": "boissons-chaudes-nescafe",
        "name": "Nescafé",
        "category": "boissons-chaudes",
        "price": 16,
        "available": true
      },
      {
        "id": "boissons-chaudes-nespresso-au-lait",
        "name": "Nespresso au lait",
        "category": "boissons-chaudes",
        "price": 20,
        "available": true
      },
      {
        "id": "boissons-chaudes-double-expresso",
        "name": "Double expresso",
        "category": "boissons-chaudes",
        "price": 24,
        "available": true
      },
      {
        "id": "boissons-chaudes-latte-macchiato",
        "name": "Latte macchiato",
        "category": "boissons-chaudes",
        "price": 22,
        "available": true
      },
      {
        "id": "boissons-chaudes-cappuccino-italien",
        "name": "Cappuccino italien",
        "category": "boissons-chaudes",
        "price": 18,
        "available": true
      },
      {
        "id": "boissons-chaudes-lait-chaud-froid",
        "name": "Lait chaud/froid",
        "category": "boissons-chaudes",
        "price": 14,
        "available": true
      },
      {
        "id": "boissons-chaudes-chocolat-chaud",
        "name": "Chocolat chaud",
        "category": "boissons-chaudes",
        "price": 16,
        "available": true
      },
      {
        "id": "boissons-chaudes-the-a-la-menthe",
        "name": "Thé à la menthe",
        "category": "boissons-chaudes",
        "price": 14,
        "available": true
      },
      {
        "id": "boissons-chaudes-the-noir",
        "name": "Thé noir",
        "category": "boissons-chaudes",
        "price": 14,
        "available": true
      },
      {
        "id": "boissons-chaudes-the-americain",
        "name": "Thé américain",
        "category": "boissons-chaudes",
        "price": 16,
        "available": true
      },
      {
        "id": "boissons-chaudes-infusion",
        "name": "Infusion",
        "category": "boissons-chaudes",
        "price": 14,
        "available": true
      },
      {
        "id": "boissons-chaudes-infusion-au-lait",
        "name": "Infusion au lait",
        "category": "boissons-chaudes",
        "price": 16,
        "available": true
      },
      {
        "id": "boissons-fraiches-eau-minerale-33cl",
        "name": "Eau minérale 33cl",
        "category": "boissons-fraiches",
        "price": 5,
        "available": true
      },
      {
        "id": "boissons-fraiches-oulmes-25cl-verre",
        "name": "Oulmes 25cl verre",
        "category": "boissons-fraiches",
        "price": 14,
        "available": true
      },
      {
        "id": "boissons-fraiches-soda-canette",
        "name": "Soda canette",
        "category": "boissons-fraiches",
        "price": 13,
        "available": true
      },
      {
        "id": "boissons-fraiches-mojito",
        "name": "Mojito",
        "category": "boissons-fraiches",
        "price": 35,
        "available": true
      },
      {
        "id": "boissons-fraiches-frappuccino",
        "name": "Frappuccino",
        "category": "boissons-fraiches",
        "price": 40,
        "description": "Café noir, lait froid, crème chantilly, glaçons, sauce caramel ou chocolat.",
        "available": true
      },
      {
        "id": "jus-orange",
        "name": "Orange",
        "category": "jus",
        "price": 25,
        "available": true
      },
      {
        "id": "jus-carotte-orange",
        "name": "Carotte & orange",
        "category": "jus",
        "price": 30,
        "available": true
      },
      {
        "id": "jus-citron",
        "name": "Citron",
        "category": "jus",
        "price": 30,
        "available": true
      },
      {
        "id": "jus-mangue",
        "name": "Mangue",
        "category": "jus",
        "price": 45,
        "available": true
      },
      {
        "id": "jus-amande-lait",
        "name": "Amande & lait",
        "category": "jus",
        "price": 22,
        "available": true
      },
      {
        "id": "jus-dragon",
        "name": "Dragon",
        "category": "jus",
        "price": 45,
        "available": true
      },
      {
        "id": "jus-banane-a-l-orange",
        "name": "Banane à l'orange",
        "category": "jus",
        "price": 27,
        "available": true
      },
      {
        "id": "jus-fraise",
        "name": "Fraise",
        "category": "jus",
        "price": 35,
        "available": true
      },
      {
        "id": "jus-ananas",
        "name": "Ananas",
        "category": "jus",
        "price": 45,
        "available": true
      },
      {
        "id": "jus-avocat",
        "name": "Avocat",
        "category": "jus",
        "price": 45,
        "available": true
      },
      {
        "id": "jus-panache-au-lait",
        "name": "Panaché au lait",
        "category": "jus",
        "price": 47,
        "available": true
      },
      {
        "id": "jus-panache-orange",
        "name": "Panaché orange",
        "category": "jus",
        "price": 45,
        "available": true
      },
      {
        "id": "jus-kiwi",
        "name": "Kiwi",
        "category": "jus",
        "price": 45,
        "available": true
      },
      {
        "id": "jus-citron-gingembre",
        "name": "Citron & gingembre",
        "category": "jus",
        "price": 35,
        "available": true
      },
      {
        "id": "jus-citron-a-la-menthe",
        "name": "Citron à la menthe",
        "category": "jus",
        "price": 35,
        "available": true
      },
      {
        "id": "jus-pomme-orange",
        "name": "Pomme orange",
        "category": "jus",
        "price": 30,
        "available": true
      },
      {
        "id": "jus-banane-pomme-au-lait",
        "name": "Banane & pomme au lait",
        "category": "jus",
        "price": 30,
        "available": true
      },
      {
        "id": "jus-banane-pomme-a-l-orange",
        "name": "Banane & pomme à l'orange",
        "category": "jus",
        "price": 35,
        "available": true
      },
      {
        "id": "jus-framboise",
        "name": "Framboise",
        "category": "jus",
        "price": 60,
        "available": true
      },
      {
        "id": "jus-ananas-mint",
        "name": "Ananas mint",
        "category": "jus",
        "price": 47,
        "available": true
      },
      {
        "id": "plats-brochettes-de-poulet",
        "name": "Brochettes de poulet",
        "category": "plats",
        "price": 60,
        "description": "Avec légumes sautés.",
        "available": true
      },
      {
        "id": "plats-emince-de-poulet",
        "name": "Émincé de poulet",
        "category": "plats",
        "price": 80,
        "description": "Avec champignon et légumes sautés.",
        "available": true
      },
      {
        "id": "plats-brochettes-de-viande-hachee",
        "name": "Brochettes de viande hachée",
        "category": "plats",
        "price": 70,
        "description": "Avec champignon et légumes sautés.",
        "available": true
      },
      {
        "id": "plats-brochettes-mix",
        "name": "Brochettes mix",
        "category": "plats",
        "price": 67,
        "description": "Avec légumes sautés.",
        "available": true
      },
      {
        "id": "tajine-tajine-de-viande-aux-pruneaux",
        "name": "Tajine de viande aux pruneaux",
        "category": "tajine",
        "description": "Avec pruneaux et œuf.",
        "available": true,
        "options": [
          {
            "label": "1/4 kg",
            "price": 75
          },
          {
            "label": "1/2 kg",
            "price": 120
          },
          {
            "label": "1 kg",
            "price": 220
          }
        ]
      },
      {
        "id": "tajine-tajine-de-viande-hachee",
        "name": "Tajine de viande hachée",
        "category": "tajine",
        "price": 65,
        "description": "Avec tomates et œufs.",
        "available": true
      },
      {
        "id": "tajine-tajine-de-viande-aux-legumes",
        "name": "Tajine de viande aux légumes",
        "category": "tajine",
        "price": 75,
        "description": "Avec légumes.",
        "available": true
      },
      {
        "id": "tajine-tajine-de-pil-pil",
        "name": "Tajine de pil pil",
        "category": "tajine",
        "price": 65,
        "description": "Avec poisson.",
        "available": true
      },
      {
        "id": "tajine-tajine-de-poulet",
        "name": "Tajine de poulet",
        "category": "tajine",
        "price": 60,
        "description": "Avec citron, olives et frites.",
        "available": true
      },
      {
        "id": "plats-chauds-hrira",
        "name": "Hrira",
        "category": "plats-chauds",
        "price": 25,
        "available": true
      },
      {
        "id": "plats-chauds-bisara",
        "name": "Bisara",
        "category": "plats-chauds",
        "price": 25,
        "available": true
      },
      {
        "id": "plats-chauds-hssoua",
        "name": "Hssoua",
        "category": "plats-chauds",
        "price": 15,
        "available": true
      },
      {
        "id": "salades-marocaine",
        "name": "Marocaine",
        "category": "salades",
        "price": 45,
        "description": "Tomate, salade verte, concombre, oignon, thon.",
        "available": true
      },
      {
        "id": "salades-nicoise",
        "name": "Niçoise",
        "category": "salades",
        "price": 60,
        "description": "Pomme de terre, haricot vert, tomate cerise, œuf, salade verte, carotte, concombre, betterave, thon, maïs.",
        "available": true
      },
      {
        "id": "salades-cesar",
        "name": "César",
        "category": "salades",
        "price": 65,
        "description": "Poulet, salade verte, fromage parmesan, tomate cerise, croûton de pain.",
        "available": true
      },
      {
        "id": "salades-crevette-avocat",
        "name": "Crevette avocat",
        "category": "salades",
        "price": 70,
        "description": "Salade verte, tomate cerise, avocat, crevette.",
        "available": true
      },
      {
        "id": "salades-russe",
        "name": "Russe",
        "category": "salades",
        "price": 45,
        "description": "Riz, 2 œufs durs, thon, maïs, carotte, pomme de terre.",
        "available": true
      },
      {
        "id": "pizza-margherita",
        "name": "Margherita",
        "category": "pizza",
        "price": 40,
        "description": "Crevettes, calamars, poulet, viande hachée, thon, sauce tomate, mozzarella, olives noires.",
        "available": true
      },
      {
        "id": "pizza-thon",
        "name": "Thon",
        "category": "pizza",
        "price": 45,
        "description": "Thon, sauce tomate, mozzarella, oignons, olives noires.",
        "available": true
      },
      {
        "id": "pizza-poulet",
        "name": "Poulet",
        "category": "pizza",
        "price": 55,
        "description": "Poulet, sauce tomate, mozzarella, champignons.",
        "available": true
      },
      {
        "id": "pizza-bolognaise",
        "name": "Bolognaise",
        "category": "pizza",
        "price": 65,
        "description": "Viande hachée, sauce tomate, mozzarella, olives noires.",
        "available": true
      },
      {
        "id": "pizza-fruits-de-mer",
        "name": "Fruits de mer",
        "category": "pizza",
        "price": 75,
        "description": "Crevettes, calamars, sauce tomate, mozzarella, champignons.",
        "available": true
      },
      {
        "id": "pizza-4-fromages",
        "name": "4 fromages",
        "category": "pizza",
        "price": 65,
        "description": "Fromage rouge, mozzarella, cheddar, parmesan.",
        "available": true
      },
      {
        "id": "pizza-royal",
        "name": "Royal",
        "category": "pizza",
        "price": 85,
        "description": "Viande hachée, sauce tomate, mozzarella, olives noires.",
        "available": true
      },
      {
        "id": "pizza-4-saisons",
        "name": "4 saisons",
        "category": "pizza",
        "price": 75,
        "description": "Thon, sauce tomate, mozzarella, oignons, olives noires.",
        "available": true
      },
      {
        "id": "tacos-poulet",
        "name": "Poulet",
        "category": "tacos",
        "price": 55,
        "available": true
      },
      {
        "id": "tacos-viande-hachee",
        "name": "Viande hachée",
        "category": "tacos",
        "price": 65,
        "available": true
      },
      {
        "id": "tacos-mixte",
        "name": "Mixte",
        "category": "tacos",
        "price": 65,
        "available": true
      },
      {
        "id": "tacos-crispy",
        "name": "Crispy",
        "category": "tacos",
        "price": 45,
        "available": true
      },
      {
        "id": "tacos-nuggets",
        "name": "Nuggets",
        "category": "tacos",
        "price": 45,
        "available": true
      },
      {
        "id": "tacos-cordon-bleu",
        "name": "Cordon bleu",
        "category": "tacos",
        "price": 60,
        "available": true
      },
      {
        "id": "tacos-fruits-de-mer",
        "name": "Fruits de mer",
        "category": "tacos",
        "price": 65,
        "available": true
      },
      {
        "id": "tacos-royal",
        "name": "Royal",
        "category": "tacos",
        "price": 70,
        "available": true
      },
      {
        "id": "wraps-wrap-cesar",
        "name": "Wrap César",
        "category": "wraps",
        "price": 45,
        "description": "Tortilla, poulet pané, laitue, edam, sauce, frites.",
        "available": true
      },
      {
        "id": "wraps-wrap-avocat-charcuterie",
        "name": "Wrap avocat charcuterie",
        "category": "wraps",
        "price": 45,
        "description": "Avocat, tortilla, œuf omelette, cheddar, charcuterie, sauce, frites.",
        "available": true
      },
      {
        "id": "wraps-wrap-poulet",
        "name": "Wrap poulet",
        "category": "wraps",
        "price": 45,
        "description": "Tortilla + poulet, laitue, tomate, fromage edam, sauce, frites.",
        "available": true
      },
      {
        "id": "sandwiches-poulet",
        "name": "Poulet",
        "category": "sandwiches",
        "price": 45,
        "description": "Servi avec frites et sauce.",
        "available": true
      },
      {
        "id": "sandwiches-charcuterie",
        "name": "Charcuterie",
        "category": "sandwiches",
        "price": 35,
        "description": "Servi avec frites et sauce.",
        "available": true
      },
      {
        "id": "sandwiches-viande-hachee",
        "name": "Viande hachée",
        "category": "sandwiches",
        "price": 50,
        "description": "Servi avec frites et sauce.",
        "available": true
      },
      {
        "id": "sandwiches-fruit-de-mer",
        "name": "Fruit de mer",
        "category": "sandwiches",
        "price": 70,
        "description": "Servi avec frites et sauce.",
        "available": true
      },
      {
        "id": "sandwiches-mixte",
        "name": "Mixte",
        "category": "sandwiches",
        "price": 65,
        "description": "Servi avec frites et sauce.",
        "available": true
      },
      {
        "id": "sandwiches-thon",
        "name": "Thon",
        "category": "sandwiches",
        "price": 35,
        "description": "Servi avec frites et sauce.",
        "available": true
      },
      {
        "id": "sandwiches-crispy",
        "name": "Crispy",
        "category": "sandwiches",
        "price": 40,
        "description": "Servi avec frites et sauce.",
        "available": true
      },
      {
        "id": "sandwiches-cordon-bleu",
        "name": "Cordon bleu",
        "category": "sandwiches",
        "price": 45,
        "description": "Servi avec frites et sauce.",
        "available": true
      },
      {
        "id": "sandwiches-merguez",
        "name": "Merguez",
        "category": "sandwiches",
        "price": 45,
        "description": "Servi avec frites et sauce.",
        "available": true
      },
      {
        "id": "burgers-cheese-burger",
        "name": "Cheese burger",
        "category": "burgers",
        "price": 60,
        "description": "Œufs, cheddar, salade verte, viande hachée, sauce.",
        "available": true
      },
      {
        "id": "burgers-double-burger",
        "name": "Double burger",
        "category": "burgers",
        "price": 70,
        "description": "Œufs, double cheddar, salade verte, double viande hachée, sauce.",
        "available": true
      },
      {
        "id": "burgers-chicken-burger",
        "name": "Chicken burger",
        "category": "burgers",
        "price": 55,
        "description": "Cheddar, salade verte, poulet, sauce.",
        "available": true
      },
      {
        "id": "fast-food-fromage",
        "name": "Fromage",
        "category": "fast-food",
        "price": 35,
        "description": "Servi avec frites.",
        "available": true
      },
      {
        "id": "fast-food-dinde-fumee",
        "name": "Dinde fumée",
        "category": "fast-food",
        "price": 40,
        "description": "Servi avec frites.",
        "available": true
      },
      {
        "id": "fast-food-thon",
        "name": "Thon",
        "category": "fast-food",
        "price": 40,
        "description": "Servi avec frites.",
        "available": true
      },
      {
        "id": "fast-food-mixte",
        "name": "Mixte",
        "category": "fast-food",
        "price": 60,
        "description": "Servi avec frites.",
        "available": true
      },
      {
        "id": "fast-food-poulet",
        "name": "Poulet",
        "category": "fast-food",
        "price": 50,
        "description": "Servi avec frites.",
        "available": true
      },
      {
        "id": "fast-food-crevette",
        "name": "Crevette",
        "category": "fast-food",
        "price": 65,
        "description": "Servi avec frites.",
        "available": true
      },
      {
        "id": "pasticcio-poulet",
        "name": "Poulet",
        "category": "pasticcio",
        "price": 50,
        "description": "Frites ou penne.",
        "available": true
      },
      {
        "id": "pasticcio-charcuterie",
        "name": "Charcuterie",
        "category": "pasticcio",
        "price": 40,
        "description": "Frites ou penne.",
        "available": true
      },
      {
        "id": "pasticcio-viande-hachee",
        "name": "Viande hachée",
        "category": "pasticcio",
        "price": 60,
        "description": "Frites ou penne.",
        "available": true
      },
      {
        "id": "pasticcio-fruit-de-mer",
        "name": "Fruit de mer",
        "category": "pasticcio",
        "price": 70,
        "description": "Frites ou penne.",
        "available": true
      },
      {
        "id": "pasticcio-mixte",
        "name": "Mixte",
        "category": "pasticcio",
        "price": 65,
        "description": "Frites ou penne.",
        "available": true
      },
      {
        "id": "desserts-browny",
        "name": "Browny",
        "category": "desserts",
        "price": 30,
        "available": true
      },
      {
        "id": "desserts-lingua",
        "name": "Lingua",
        "category": "desserts",
        "price": 30,
        "available": true
      },
      {
        "id": "desserts-pain-suisse",
        "name": "Pain suisse",
        "category": "desserts",
        "price": 12,
        "available": true
      },
      {
        "id": "desserts-pain-au-chocolat",
        "name": "Pain au chocolat",
        "category": "desserts",
        "price": 9,
        "available": true
      },
      {
        "id": "desserts-mille-feuille-vanille",
        "name": "Mille-feuille vanille",
        "category": "desserts",
        "price": 23,
        "available": true
      },
      {
        "id": "desserts-eclair-au-chocolat",
        "name": "Éclair au chocolat",
        "category": "desserts",
        "price": 23,
        "available": true
      },
      {
        "id": "desserts-eclair-a-la-vanille",
        "name": "Éclair à la vanille",
        "category": "desserts",
        "price": 23,
        "available": true
      },
      {
        "id": "desserts-eclair-aux-amandes",
        "name": "Éclair aux amandes",
        "category": "desserts",
        "price": 23,
        "available": true
      },
      {
        "id": "desserts-schneck",
        "name": "Schneck",
        "category": "desserts",
        "price": 9,
        "available": true
      },
      {
        "id": "desserts-tarte-gourmande-royal",
        "name": "Tarte gourmande royal",
        "category": "desserts",
        "price": 30,
        "available": true
      },
      {
        "id": "desserts-tarte-gourmande-aux-pommes",
        "name": "Tarte gourmande aux pommes",
        "category": "desserts",
        "price": 30,
        "available": true
      },
      {
        "id": "desserts-tarte-gourmande-aux-noix",
        "name": "Tarte gourmande aux noix",
        "category": "desserts",
        "price": 30,
        "available": true
      },
      {
        "id": "desserts-tarte-gourmande-au-chocolat",
        "name": "Tarte gourmande au chocolat",
        "category": "desserts",
        "price": 30,
        "available": true
      },
      {
        "id": "desserts-sedra",
        "name": "Sedra",
        "category": "desserts",
        "price": 15,
        "available": true
      },
      {
        "id": "desserts-snickers",
        "name": "Snickers",
        "category": "desserts",
        "price": 30,
        "available": true
      },
      {
        "id": "desserts-flan-royal",
        "name": "Flan royal",
        "category": "desserts",
        "price": 30,
        "available": true
      },
      {
        "id": "desserts-tarte-aux-fruits",
        "name": "Tarte aux fruits",
        "category": "desserts",
        "price": 30,
        "available": true
      },
      {
        "id": "desserts-tiramisu",
        "name": "Tiramisu",
        "category": "desserts",
        "price": 35,
        "available": true
      },
      {
        "id": "desserts-cheesecake",
        "name": "Cheesecake",
        "category": "desserts",
        "price": 30,
        "available": true
      },
      {
        "id": "desserts-salade-de-fruits",
        "name": "Salade de fruits",
        "category": "desserts",
        "price": 40,
        "available": true
      }
    ]
  }
};
