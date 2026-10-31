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

window.CATALOG = {
  currency: "DH",

  /* Snacks & rafraîchissements */
  snacks: {
    categories: [],
    products: []
  },

  /* Huiles & lubrifiants Shell */
  lubrifiants: {
    categories: [],
    products: []
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
