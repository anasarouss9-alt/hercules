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

  /* Accessoires voyage & auto */
  accessoires: {
    categories: [],
    products: []
  },

  /* Menu & Restauration (Relais de l'Aéroport) */
  menu: {
    categories: [],
    products: []
  }
};
