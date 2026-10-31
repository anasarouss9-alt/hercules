/* ============================================================
   CITY PROM · Shell HERCULES — shared catalog engine
   Renders the page, search, filters, sorting and product details.
   Product data lives in products.js (this file never needs editing
   to add or change products).
   ============================================================ */
(function () {
  "use strict";

  const PAGE = window.PAGE || {};
  const ROOT = window.CATALOG || {};
  const DATA = ROOT[PAGE.key] || {};
  const CURRENCY = ROOT.currency || "DH";
  const LANG_KEY = "shell_hercules_lang";
  const LOCALES = { fr: "fr-FR", ar: "ar-MA", en: "en-GB", es: "es-ES", pt: "pt-PT" };

  /* ---------------- UI translations ---------------- */
  const UI = {
    fr: {
      brandSub: "Shell HERCULES Tanger", btnHome: "Retour à l'accueil", btnLocation: "Voir la localisation",
      rights: "Tous droits réservés.", city: "Tanger",
      searchPh: "Rechercher un produit, une marque…", searchLabel: "Rechercher", clear: "Effacer",
      sort: "Trier", sFeatured: "Pertinence", sPriceAsc: "Prix croissant", sPriceDesc: "Prix décroissant", sNameAsc: "Nom A–Z", sNameDesc: "Nom Z–A", sNewest: "Nouveautés", sDiscount: "Plus grosse remise",
      filters: "Filtres", categories: "Catégories", brands: "Marques", tags: "Étiquettes", price: "Prix",
      min: "Min", max: "Max", availability: "Disponibilité", inStock: "En stock uniquement", promo: "En promotion",
      resetAll: "Tout réinitialiser", showResults: "Voir les résultats",
      results1: "{n} produit", resultsN: "{n} produits",
      noResTitle: "Aucun produit trouvé", noResBody: "Essayez d'autres mots-clés ou retirez certains filtres.",
      emptyTitle: "Bientôt disponible",
      emptyBody: "La liste des produits de cette catégorie est en cours de préparation. Elle sera disponible très prochainement.",
      available: "Disponible", outOfStock: "Épuisé", badgePromo: "Promo", badgeNew: "Nouveau",
      viewGrid: "Affichage en grille", viewList: "Affichage en liste", close: "Fermer",
      options: "Options", from: "À partir de", category: "Catégorie", brand: "Marque", all: "Tous"
    },
    ar: {
      brandSub: "شل هيركوليس طنجة", btnHome: "العودة إلى الرئيسية", btnLocation: "عرض الموقع",
      rights: "جميع الحقوق محفوظة.", city: "طنجة",
      searchPh: "ابحث عن منتج أو علامة تجارية…", searchLabel: "بحث", clear: "مسح",
      sort: "ترتيب", sFeatured: "الأكثر صلة", sPriceAsc: "السعر: من الأقل", sPriceDesc: "السعر: من الأعلى", sNameAsc: "الاسم أ–ي", sNameDesc: "الاسم ي–أ", sNewest: "الأحدث", sDiscount: "أكبر تخفيض",
      filters: "التصفية", categories: "الفئات", brands: "العلامات التجارية", tags: "الوسوم", price: "السعر",
      min: "الأدنى", max: "الأقصى", availability: "التوفر", inStock: "المتوفر فقط", promo: "العروض",
      resetAll: "إعادة تعيين الكل", showResults: "عرض النتائج",
      results1: "{n} منتج", resultsN: "{n} منتجات",
      noResTitle: "لم يتم العثور على منتجات", noResBody: "جرّب كلمات أخرى أو أزل بعض عوامل التصفية.",
      emptyTitle: "قريبًا",
      emptyBody: "نعمل حاليًا على إعداد لائحة منتجات هذا الصنف. ستتوفر قريبًا جدًا.",
      available: "متوفر", outOfStock: "نفد المخزون", badgePromo: "عرض", badgeNew: "جديد",
      viewGrid: "عرض شبكي", viewList: "عرض قائمة", close: "إغلاق",
      options: "الخيارات", from: "ابتداءً من", category: "الفئة", brand: "العلامة", all: "الكل"
    },
    en: {
      brandSub: "Shell HERCULES Tangier", btnHome: "Back to home", btnLocation: "View location",
      rights: "All rights reserved.", city: "Tangier",
      searchPh: "Search for a product or brand…", searchLabel: "Search", clear: "Clear",
      sort: "Sort", sFeatured: "Relevance", sPriceAsc: "Price: low to high", sPriceDesc: "Price: high to low", sNameAsc: "Name A–Z", sNameDesc: "Name Z–A", sNewest: "Newest", sDiscount: "Biggest discount",
      filters: "Filters", categories: "Categories", brands: "Brands", tags: "Tags", price: "Price",
      min: "Min", max: "Max", availability: "Availability", inStock: "In stock only", promo: "On promotion",
      resetAll: "Reset all", showResults: "Show results",
      results1: "{n} product", resultsN: "{n} products",
      noResTitle: "No products found", noResBody: "Try different keywords or remove some filters.",
      emptyTitle: "Coming soon",
      emptyBody: "The product list for this category is being prepared. It will be available very soon.",
      available: "Available", outOfStock: "Out of stock", badgePromo: "Sale", badgeNew: "New",
      viewGrid: "Grid view", viewList: "List view", close: "Close",
      options: "Options", from: "From", category: "Category", brand: "Brand", all: "All"
    },
    es: {
      brandSub: "Shell HERCULES Tánger", btnHome: "Volver al inicio", btnLocation: "Ver ubicación",
      rights: "Todos los derechos reservados.", city: "Tánger",
      searchPh: "Buscar un producto o una marca…", searchLabel: "Buscar", clear: "Borrar",
      sort: "Ordenar", sFeatured: "Relevancia", sPriceAsc: "Precio: de menor a mayor", sPriceDesc: "Precio: de mayor a menor", sNameAsc: "Nombre A–Z", sNameDesc: "Nombre Z–A", sNewest: "Novedades", sDiscount: "Mayor descuento",
      filters: "Filtros", categories: "Categorías", brands: "Marcas", tags: "Etiquetas", price: "Precio",
      min: "Mín", max: "Máx", availability: "Disponibilidad", inStock: "Solo en stock", promo: "En oferta",
      resetAll: "Restablecer todo", showResults: "Ver resultados",
      results1: "{n} producto", resultsN: "{n} productos",
      noResTitle: "No se encontraron productos", noResBody: "Pruebe con otras palabras o quite algunos filtros.",
      emptyTitle: "Disponible próximamente",
      emptyBody: "Estamos preparando la lista de productos de esta categoría. Estará disponible muy pronto.",
      available: "Disponible", outOfStock: "Agotado", badgePromo: "Oferta", badgeNew: "Nuevo",
      viewGrid: "Vista en cuadrícula", viewList: "Vista en lista", close: "Cerrar",
      options: "Opciones", from: "Desde", category: "Categoría", brand: "Marca", all: "Todos"
    },
    pt: {
      brandSub: "Shell HERCULES Tânger", btnHome: "Voltar ao início", btnLocation: "Ver localização",
      rights: "Todos os direitos reservados.", city: "Tânger",
      searchPh: "Pesquisar um produto ou uma marca…", searchLabel: "Pesquisar", clear: "Limpar",
      sort: "Ordenar", sFeatured: "Relevância", sPriceAsc: "Preço: do menor para o maior", sPriceDesc: "Preço: do maior para o menor", sNameAsc: "Nome A–Z", sNameDesc: "Nome Z–A", sNewest: "Novidades", sDiscount: "Maior desconto",
      filters: "Filtros", categories: "Categorias", brands: "Marcas", tags: "Etiquetas", price: "Preço",
      min: "Mín", max: "Máx", availability: "Disponibilidade", inStock: "Apenas em stock", promo: "Em promoção",
      resetAll: "Repor tudo", showResults: "Ver resultados",
      results1: "{n} produto", resultsN: "{n} produtos",
      noResTitle: "Nenhum produto encontrado", noResBody: "Experimente outras palavras ou remova alguns filtros.",
      emptyTitle: "Disponível em breve",
      emptyBody: "Estamos a preparar a lista de produtos desta categoria. Estará disponível muito em breve.",
      available: "Disponível", outOfStock: "Esgotado", badgePromo: "Promoção", badgeNew: "Novo",
      viewGrid: "Vista em grelha", viewList: "Vista em lista", close: "Fechar",
      options: "Opções", from: "A partir de", category: "Categoria", brand: "Marca", all: "Todos"
    }
  };

  /* ---------------- helpers ---------------- */
  let lang = "fr";
  const app = document.getElementById("app");
  const $ = (s) => app.querySelector(s);

  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const norm = (s) => String(s == null ? "" : s).toLowerCase().normalize("NFD").replace(/[̀-ًͯ-ٟـ]/g, "");
  const allText = (v) => (v == null ? "" : typeof v === "object" ? Object.values(v).join(" ") : String(v));
  const tr = (v) => {
    if (v == null) return "";
    if (typeof v !== "object") return String(v);
    return v[lang] || v.fr || v.en || v.ar || Object.values(v)[0] || "";
  };
  const t = (key, vars) => {
    const ovr = (PAGE.ui && PAGE.ui[lang]) || {};
    let s = ovr[key] != null ? ovr[key] : UI[lang][key] != null ? UI[lang][key] : UI.fr[key] != null ? UI.fr[key] : key;
    if (vars) for (const k in vars) s = s.replace("{" + k + "}", vars[k]);
    return s;
  };
  const num = (v) => {
    const s = String(v == null ? "" : v).replace(",", ".").trim();
    if (s === "") return null;
    const n = Number(s);
    return isFinite(n) && n >= 0 ? n : null;
  };
  const fmt = (n) => {
    let s;
    try { s = new Intl.NumberFormat(LOCALES[lang] || "fr-FR", { minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(n); }
    catch (e) { s = String(n); }
    return s + " " + CURRENCY;
  };

  const ICON = {
    search: '<svg class="s-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
    list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
    filter: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M7 12h10M10 18h4"/></svg>'
  };

  /* ---------------- data ---------------- */
  const products = (Array.isArray(DATA.products) ? DATA.products : [])
    .filter((p) => p && p.id != null && p.name)
    .map((p, i) => Object.assign({ _i: i }, p));
  const catDefs = new Map((Array.isArray(DATA.categories) ? DATA.categories : []).map((c) => [String(c.id), c]));

  const catLabel = (id) => {
    const d = catDefs.get(String(id));
    if (d) return tr(d.name);
    const s = String(id || "");
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  const catIcon = (id) => (catDefs.get(String(id)) && catDefs.get(String(id)).icon) || PAGE.icon || "🛍️";
  const tagKey = (tg) => (typeof tg === "object" && tg ? tg.id || tg.en || tg.fr || Object.values(tg)[0] : String(tg));
  const optList = (p) => (Array.isArray(p.options) ? p.options : []).filter((o) => o && o.price != null && isFinite(Number(o.price)));
  const basePrice = (p) => {
    if (p.price != null && isFinite(Number(p.price))) return Number(p.price);
    const o = optList(p);
    return o.length ? Math.min.apply(null, o.map((x) => Number(x.price))) : null;
  };
  const fromPrice = (p) => !(p.price != null && isFinite(Number(p.price))) && optList(p).length > 1;
  const isPromo = (p) => p.badge === "promo" || (p.oldPrice != null && p.price != null && Number(p.oldPrice) > Number(p.price));
  const isNew = (p) => p.badge === "new";
  const images = (p) => [].concat(p.images || [], p.image || []).filter(Boolean);

  products.forEach((p) => {
    p._s = norm([allText(p.name), allText(p.description), allText(p.brand), (p.tags || []).map(allText).join(" "), allText(catLabelAll(p.category)), p.sku || "", p.id].join(" "));
  });
  function catLabelAll(id) {
    const d = catDefs.get(String(id));
    return d ? d.name : String(id || "");
  }

  /* ---------------- state ---------------- */
  const state = { q: "", cats: new Set(), brands: new Set(), tags: new Set(), min: null, max: null, inStock: false, promo: false, sort: "featured", view: "grid" };
  const SORTS = ["featured", "newest", "priceAsc", "priceDesc", "nameAsc", "nameDesc", "discount"];

  function readURL() {
    try {
      const p = new URLSearchParams(location.search);
      state.q = p.get("q") || "";
      p.getAll("cat").forEach((v) => state.cats.add(v));
      p.getAll("brand").forEach((v) => state.brands.add(v));
      p.getAll("tag").forEach((v) => state.tags.add(v));
      state.min = num(p.get("min"));
      state.max = num(p.get("max"));
      state.inStock = p.get("stock") === "1";
      state.promo = p.get("promo") === "1";
      if (SORTS.includes(p.get("sort"))) state.sort = p.get("sort");
      if (p.get("view") === "list") state.view = "list";
    } catch (e) {}
  }
  function writeURL() {
    try {
      const p = new URLSearchParams();
      if (state.q) p.set("q", state.q);
      state.cats.forEach((v) => p.append("cat", v));
      state.brands.forEach((v) => p.append("brand", v));
      state.tags.forEach((v) => p.append("tag", v));
      if (state.min != null) p.set("min", state.min);
      if (state.max != null) p.set("max", state.max);
      if (state.inStock) p.set("stock", "1");
      if (state.promo) p.set("promo", "1");
      if (state.sort !== "featured") p.set("sort", state.sort);
      if (state.view === "list") p.set("view", "list");
      const qs = p.toString();
      history.replaceState(null, "", location.pathname + (qs ? "?" + qs : "") + location.hash);
    } catch (e) {}
  }

  /* ---------------- filtering ---------------- */
  function match(p, skip) {
    if (skip !== "q" && state.q) {
      const toks = norm(state.q).split(/\s+/).filter(Boolean);
      if (!toks.every((tk) => p._s.includes(tk))) return false;
    }
    if (skip !== "cats" && state.cats.size && !state.cats.has(String(p.category))) return false;
    if (skip !== "brands" && state.brands.size && !state.brands.has(String(p.brand || ""))) return false;
    if (skip !== "tags" && state.tags.size && !(p.tags || []).some((tg) => state.tags.has(tagKey(tg)))) return false;
    if (skip !== "price") {
      const pr = basePrice(p);
      if (state.min != null && (pr == null || pr < state.min)) return false;
      if (state.max != null && (pr == null || pr > state.max)) return false;
    }
    if (skip !== "inStock" && state.inStock && p.available === false) return false;
    if (skip !== "promo" && state.promo && !isPromo(p)) return false;
    return true;
  }
  function belongs(p, f, v) {
    if (f === "cats") return String(p.category) === v;
    if (f === "brands") return String(p.brand || "") === v;
    return (p.tags || []).some((tg) => tagKey(tg) === v);
  }
  function compare(a, b) {
    let r = 0;
    if (state.sort === "priceAsc" || state.sort === "priceDesc") {
      const pa = basePrice(a), pb = basePrice(b);
      if (pa == null && pb == null) r = 0;
      else if (pa == null) return 1;
      else if (pb == null) return -1;
      else r = state.sort === "priceAsc" ? pa - pb : pb - pa;
    } else if (state.sort === "nameAsc") {
      r = tr(a.name).localeCompare(tr(b.name), lang);
    } else if (state.sort === "nameDesc") {
      r = tr(b.name).localeCompare(tr(a.name), lang);
    } else if (state.sort === "newest") {
      r = (isNew(b) ? 1 : 0) - (isNew(a) ? 1 : 0);
      if (!r) return b._i - a._i; // most recently added first
    } else if (state.sort === "discount") {
      const da = isPromo(a) && a.oldPrice ? 1 - Number(a.price) / Number(a.oldPrice) : 0;
      const db = isPromo(b) && b.oldPrice ? 1 - Number(b.price) / Number(b.oldPrice) : 0;
      r = db - da;
    } else {
      r = (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    }
    return r || a._i - b._i;
  }
  const activeCount = () => state.cats.size + state.brands.size + state.tags.size + (state.min != null || state.max != null ? 1 : 0) + (state.inStock ? 1 : 0) + (state.promo ? 1 : 0);

  /* ---------------- markup ---------------- */
  function headerHTML() {
    const opts = [["fr", "FR 🇫🇷"], ["ar", "العربية 🇲🇦"], ["en", "EN 🇬🇧"], ["es", "ES 🇪🇸"], ["pt", "PT 🇵🇹"]]
      .map((o) => `<option value="${o[0]}"${o[0] === lang ? " selected" : ""}>${o[1]}</option>`).join("");
    return `<header class="hdr"><div class="hdr-in">
      <a href="/" class="brand"><span class="brand-logo"><img src="shell-logo.png" alt="Shell"></span>
        <span class="brand-t"><b>CITY PROM</b><span>${esc(t("brandSub"))}</span></span></a>
      <div class="hdr-r"><select id="langSelect" class="sel" aria-label="Langue / Language">${opts}</select>
        <a href="/" class="btn btn-red hide-s">${esc(t("btnHome"))}</a></div></div></header>`;
  }
  function heroHTML() {
    return `<section class="hero"><div class="hero-ic">${PAGE.icon || "🛍️"}</div>
      <span class="kick">${esc(tr(PAGE.kicker))}</span><h1>${esc(tr(PAGE.title))}</h1></section>`;
  }

  function facetData() {
    const catIds = [];
    catDefs.forEach((d, id) => catIds.push(id)); // every category you define is shown, even before it has products
    products.forEach((p) => { const id = String(p.category || ""); if (id && !catIds.includes(id)) catIds.push(id); });
    const brands = [...new Set(products.map((p) => String(p.brand || "")).filter(Boolean))].sort((a, b) => a.localeCompare(b, lang));
    const tagMap = new Map();
    products.forEach((p) => (p.tags || []).forEach((tg) => { const k = tagKey(tg); if (!tagMap.has(k)) tagMap.set(k, tg); }));
    const prices = products.map(basePrice).filter((x) => x != null);
    return {
      catIds, brands, tags: [...tagMap.entries()],
      minP: prices.length ? Math.floor(Math.min.apply(null, prices)) : null,
      maxP: prices.length ? Math.ceil(Math.max.apply(null, prices)) : null,
      anyPromo: products.some(isPromo), anyOut: products.some((p) => p.available === false)
    };
  }
  const opt = (f, val, label) =>
    `<label class="opt"><input type="checkbox" data-f="${f}" value="${esc(val)}"><span class="box"></span><span class="opt-t">${esc(label)}</span><span class="opt-n" data-n="${f}" data-v="${esc(val)}"></span></label>`;

  function sidebarHTML(fd) {
    let h = "";
    if (fd.catIds.length) h += `<div class="fgroup"><h3>${esc(t("categories"))}</h3>${fd.catIds.map((id) => opt("cats", id, catLabel(id))).join("")}</div>`;
    if (fd.brands.length) h += `<div class="fgroup"><h3>${esc(t("brands"))}</h3>${fd.brands.map((b) => opt("brands", b, b)).join("")}</div>`;
    if (fd.tags.length) h += `<div class="fgroup"><h3>${esc(t("tags"))}</h3>${fd.tags.map((e) => opt("tags", e[0], tr(e[1]))).join("")}</div>`;
    const hint = (v) => (v != null ? " " + v : "");
    h += `<div class="fgroup"><h3>${esc(t("price"))} (${esc(CURRENCY)})</h3><div class="prange">
        <input id="pMin" type="number" inputmode="decimal" min="0" placeholder="${esc(t("min"))}${hint(fd.minP)}" aria-label="${esc(t("min"))}">
        <span>–</span>
        <input id="pMax" type="number" inputmode="decimal" min="0" placeholder="${esc(t("max"))}${hint(fd.maxP)}" aria-label="${esc(t("max"))}"></div></div>`;
    h += `<div class="fgroup"><h3>${esc(t("availability"))}</h3>
        <label class="opt"><input type="checkbox" data-f="inStock"><span class="box"></span><span class="opt-t">${esc(t("inStock"))}</span></label>
        <label class="opt"><input type="checkbox" data-f="promo"><span class="box"></span><span class="opt-t">${esc(t("promo"))}</span></label></div>`;
    h += `<button type="button" class="reset" id="resetAll">${esc(t("resetAll"))}</button>`;
    return h;
  }

  function mainHTML() {
    const has = true; // search, sort and filters are always visible, even before products are added
    const fd = facetData();
    const controls = has ? `
      <button type="button" class="btn btn-soft only-m" id="openFilters">${ICON.filter} ${esc(t("filters"))} <span class="fbadge" id="fBadge"></span></button>
      <label class="sortbox"><select id="sort" class="sel" aria-label="${esc(t("sort"))}" style="height:48px;padding:0 18px">
        ${SORTS.map((s) => `<option value="${s}">${esc(t("s" + s.charAt(0).toUpperCase() + s.slice(1)))}</option>`).join("")}</select></label>
      <div class="seg" role="group">
        <button type="button" data-view="grid" aria-label="${esc(t("viewGrid"))}">${ICON.grid}</button>
        <button type="button" data-view="list" aria-label="${esc(t("viewList"))}">${ICON.list}</button></div>` : "";
    const tabs = has && fd.catIds.length > 1
      ? `<div class="tabs" id="catChips"><button type="button" class="tab" data-cat="">${esc(t("all"))}</button>${fd.catIds.map((id) => `<button type="button" class="tab" data-cat="${esc(id)}">${esc(catLabel(id))}</button>`).join("")}</div>` : "";
    const side = has ? `<div class="overlay" id="overlay"></div>
      <aside class="sidebar" id="sidebar"><div class="sb-head"><span>${esc(t("filters"))}</span>
        <button type="button" class="q-clear show" id="closeFilters" aria-label="${esc(t("close"))}" style="position:static;transform:none">${ICON.x}</button></div>
        <div class="sb-body">${sidebarHTML(fd)}</div>
        <div class="sb-foot"><button type="button" class="btn btn-red" id="applyFilters">${esc(t("showResults"))}</button></div></aside>` : "";
    return `<main class="wrap">
      <div class="toolbar">
        <div class="search" role="search">${ICON.search}
          <input id="q" type="search" autocomplete="off" enterkeyhint="search" placeholder="${esc(t("searchPh"))}" aria-label="${esc(t("searchLabel"))}">
          <button type="button" class="q-clear" id="qClear" aria-label="${esc(t("clear"))}">${ICON.x}</button></div>
        ${controls}
      </div>
      ${tabs}
      <div class="layout${has ? "" : " nofilters"}">
        ${side}
        <section class="results">
          <div class="res-head"><div class="count" id="count" aria-live="polite"></div><div class="active" id="active"></div></div>
          <div class="grid" id="grid"></div>
          <div id="state"></div>
        </section></div></main>`;
  }
  function footerHTML() {
    return `<footer class="ftr">© ${new Date().getFullYear()} CITY PROM ${esc(t("city"))} · Station Shell HERCULES. ${esc(t("rights"))}</footer>`;
  }

  function priceHTML(p, big) {
    const b = basePrice(p);
    if (b == null) return "";
    const old = isPromo(p) && p.oldPrice != null ? `<span class="old">${esc(fmt(Number(p.oldPrice)))}</span>` : "";
    const from = fromPrice(p) ? `<small>${esc(t("from"))}</small> ` : "";
    return `<span class="${big ? "m-price" : "price"}">${from}${esc(fmt(b))}${old}</span>`;
  }
  function stockHTML(p) {
    return p.available === false ? `<span class="stock out">${esc(t("outOfStock"))}</span>` : `<span class="stock in">${esc(t("available"))}</span>`;
  }
  function cardHTML(p, i) {
    const imgs = images(p);
    const media = imgs.length ? `<img src="${esc(imgs[0])}" alt="${esc(tr(p.name))}" loading="lazy" data-ic="${esc(catIcon(p.category))}">` : esc(catIcon(p.category));
    const badges = (isPromo(p) ? `<span class="badge">${esc(t("badgePromo"))}</span>` : "") + (isNew(p) ? `<span class="badge new">${esc(t("badgeNew"))}</span>` : "");
    const meta = [p.brand, p.category ? catLabel(p.category) : ""].filter(Boolean).join(" · ");
    return `<article class="card${p.available === false ? " sold" : ""}" tabindex="0" role="button" data-id="${esc(p.id)}" style="--i:${Math.min(i, 14)}">
      <div class="card-img">${badges ? `<div class="badges">${badges}</div>` : ""}${media}</div>
      <div class="card-b">${meta ? `<span class="card-meta">${esc(meta)}</span>` : ""}
        <h3 class="card-t">${esc(tr(p.name))}</h3>
        ${p.description ? `<p class="card-d">${esc(tr(p.description))}</p>` : ""}
        <div class="card-f">${priceHTML(p)}${stockHTML(p)}</div></div></article>`;
  }
  function stateHTML(kind) {
    const home = `<a href="/" class="btn btn-red">${esc(t("btnHome"))}</a><a href="/#localisation" class="btn btn-soft">${esc(t("btnLocation"))}</a>`;
    if (kind === "empty") {
      return `<div class="empty"><div class="empty-ic">${PAGE.icon || "🛍️"}</div>
        <span class="pill"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>${esc(t("emptyTitle"))}</span>
        <p>${esc(t("emptyBody"))}</p><div class="btns">${home}</div></div>`;
    }
    return `<div class="empty"><div class="empty-ic">🔍</div><h2>${esc(t("noResTitle"))}</h2><p>${esc(t("noResBody"))}</p>
      <div class="btns"><button type="button" class="btn btn-red" id="emptyReset">${esc(t("resetAll"))}</button></div></div>`;
  }

  /* ---------------- render / sync ---------------- */
  function renderResults() {
    const grid = $("#grid"), st = $("#state"), cnt = $("#count"), act = $("#active");
    if (!products.length) { grid.innerHTML = ""; cnt.textContent = ""; act.innerHTML = ""; st.innerHTML = ""; return; } // no products yet: blank results area
    const list = products.filter((p) => match(p)).sort(compare);
    cnt.textContent = list.length === 1 ? t("results1", { n: list.length }) : t("resultsN", { n: list.length });
    grid.className = "grid" + (state.view === "list" ? " list" : "");
    grid.innerHTML = list.map(cardHTML).join("");
    st.innerHTML = list.length ? "" : stateHTML("none");

    const chips = [];
    state.cats.forEach((v) => chips.push(["cats", v, catLabel(v)]));
    state.brands.forEach((v) => chips.push(["brands", v, v]));
    state.tags.forEach((v) => { const tg = products.flatMap((p) => p.tags || []).find((x) => tagKey(x) === v); chips.push(["tags", v, tg ? tr(tg) : v]); });
    if (state.min != null || state.max != null) chips.push(["price", "", `${state.min != null ? fmt(state.min) : "…"} – ${state.max != null ? fmt(state.max) : "…"}`]);
    if (state.inStock) chips.push(["inStock", "", t("inStock")]);
    if (state.promo) chips.push(["promo", "", t("promo")]);
    act.innerHTML = chips.map((c) => `<button type="button" class="chip" data-rm="${c[0]}" data-v="${esc(c[1])}">${esc(c[2])} ${ICON.x}</button>`).join("");
  }
  function updateCounts() {
    app.querySelectorAll(".opt-n").forEach((el) => {
      const f = el.dataset.n, v = el.dataset.v;
      const n = products.filter((p) => match(p, f) && belongs(p, f, v)).length;
      el.textContent = n;
      el.closest(".opt").classList.toggle("dim", n === 0 && !state[f].has(v));
    });
  }
  function sync() {
    app.querySelectorAll("input[data-f]").forEach((inp) => {
      const f = inp.dataset.f;
      inp.checked = f === "inStock" || f === "promo" ? state[f] : state[f].has(inp.value);
    });
    const pMin = $("#pMin"), pMax = $("#pMax"), q = $("#q"), sortEl = $("#sort");
    if (pMin && document.activeElement !== pMin) pMin.value = state.min == null ? "" : state.min;
    if (pMax && document.activeElement !== pMax) pMax.value = state.max == null ? "" : state.max;
    if (q && document.activeElement !== q) q.value = state.q;
    if (sortEl) sortEl.value = state.sort;
    const qc = $("#qClear"); if (qc) qc.classList.toggle("show", !!state.q);
    app.querySelectorAll("[data-view]").forEach((b) => b.classList.toggle("on", b.dataset.view === state.view));
    app.querySelectorAll("[data-cat]").forEach((b) => {
      const c = b.dataset.cat;
      b.classList.toggle("on", c === "" ? state.cats.size === 0 : state.cats.size === 1 && state.cats.has(c));
    });
    const fb = $("#fBadge"); if (fb) { const n = activeCount(); fb.textContent = n; fb.classList.toggle("show", n > 0); }
  }
  function apply() { sync(); renderResults(); updateCounts(); writeURL(); }
  function resetAll() {
    state.q = ""; state.cats.clear(); state.brands.clear(); state.tags.clear();
    state.min = state.max = null; state.inStock = state.promo = false; apply();
  }

  /* ---------------- drawer ---------------- */
  function setDrawer(open) {
    const sb = $("#sidebar"), ov = $("#overlay");
    if (!sb) return;
    sb.classList.toggle("open", open); ov.classList.toggle("open", open);
    document.body.classList.toggle("lock", open);
  }

  /* ---------------- product modal ---------------- */
  let modal, lastFocus = null;
  function openModal(id) {
    const p = products.find((x) => String(x.id) === String(id));
    if (!p) return;
    lastFocus = document.activeElement;
    const imgs = images(p), ic = catIcon(p.category);
    const meta = [p.brand ? `${t("brand")}: ${p.brand}` : "", p.category ? `${t("category")}: ${catLabel(p.category)}` : ""].filter(Boolean).map((x) => `<span>${esc(x)}</span>`).join("");
    const opts = optList(p);
    modal.innerHTML = `<div class="m-box" role="dialog" aria-modal="true" aria-label="${esc(tr(p.name))}">
      <button type="button" class="m-close" data-close aria-label="${esc(t("close"))}">${ICON.x}</button>
      <div class="m-media"><div class="m-main" id="mMain">${imgs.length ? `<img src="${esc(imgs[0])}" alt="${esc(tr(p.name))}" data-ic="${esc(ic)}">` : esc(ic)}</div>
        ${imgs.length > 1 ? `<div class="m-thumbs">${imgs.map((s, i) => `<button type="button" data-thumb="${esc(s)}" class="${i ? "" : "on"}"><img src="${esc(s)}" alt=""></button>`).join("")}</div>` : ""}</div>
      <div class="m-info"><h2>${esc(tr(p.name))}</h2>
        ${meta ? `<div class="m-meta">${meta}</div>` : ""}
        <div>${priceHTML(p, true)} ${stockHTML(p)}</div>
        ${p.description ? `<p class="m-desc">${esc(tr(p.description))}</p>` : ""}
        ${opts.length ? `<div class="m-h">${esc(t("options"))}</div><ul class="m-opts">${opts.map((o) => `<li><span>${esc(tr(o.label))}</span><b>${esc(fmt(Number(o.price)))}</b></li>`).join("")}</ul>` : ""}
        ${(p.tags || []).length ? `<div class="m-tags">${p.tags.map((tg) => `<span>${esc(tr(tg))}</span>`).join("")}</div>` : ""}
      </div></div>`;
    modal.classList.add("open");
    document.body.classList.add("lock");
    const c = modal.querySelector(".m-close"); if (c) c.focus();
  }
  function closeModal() {
    if (!modal.classList.contains("open")) return;
    modal.classList.remove("open"); modal.innerHTML = "";
    if (!$("#sidebar") || !$("#sidebar").classList.contains("open")) document.body.classList.remove("lock");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  /* ---------------- init & events ---------------- */
  function renderAll() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = PAGE.pageTitle ? tr(PAGE.pageTitle) : tr(PAGE.title) + " | CITY PROM Shell HERCULES";
    app.innerHTML = headerHTML() + heroHTML() + mainHTML() + footerHTML();
    apply();
  }
  function detectLang() {
    try { const s = localStorage.getItem(LANG_KEY); if (s && UI[s]) return s; } catch (e) {}
    const n = (navigator.language || "fr").slice(0, 2).toLowerCase();
    return UI[n] ? n : "fr";
  }

  let timer;
  const debounce = (fn, ms) => (...a) => { clearTimeout(timer); timer = setTimeout(() => fn(...a), ms); };
  const onSearch = debounce((v) => { state.q = v.trim(); apply(); }, 120);
  const onPrice = debounce(() => { state.min = num($("#pMin").value); state.max = num($("#pMax").value); apply(); }, 250);

  app.addEventListener("input", (e) => {
    if (e.target.id === "q") { $("#qClear").classList.toggle("show", !!e.target.value); onSearch(e.target.value); }
    else if (e.target.id === "pMin" || e.target.id === "pMax") onPrice();
  });
  app.addEventListener("change", (e) => {
    const el = e.target;
    if (el.id === "langSelect") {
      lang = UI[el.value] ? el.value : "fr";
      try { localStorage.setItem(LANG_KEY, lang); } catch (x) {}
      closeModal(); renderAll();
    } else if (el.id === "sort") { state.sort = el.value; apply(); }
    else if (el.dataset && el.dataset.f) {
      const f = el.dataset.f;
      if (f === "inStock" || f === "promo") state[f] = el.checked;
      else if (el.checked) state[f].add(el.value); else state[f].delete(el.value);
      apply();
    }
  });
  app.addEventListener("click", (e) => {
    const c = e.target.closest("button, .card, .overlay, [data-id]");
    if (!c) return;
    if (c.id === "qClear") { state.q = ""; $("#q").value = ""; $("#q").focus(); apply(); }
    else if (c.dataset.view) { state.view = c.dataset.view; apply(); }
    else if (c.dataset.cat !== undefined && c.classList.contains("tab")) { state.cats.clear(); if (c.dataset.cat) state.cats.add(c.dataset.cat); apply(); }
    else if (c.dataset.rm) {
      const k = c.dataset.rm;
      if (k === "price") state.min = state.max = null;
      else if (k === "inStock" || k === "promo") state[k] = false;
      else state[k].delete(c.dataset.v);
      apply();
    }
    else if (c.id === "resetAll" || c.id === "emptyReset") resetAll();
    else if (c.id === "openFilters") setDrawer(true);
    else if (c.id === "closeFilters" || c.id === "applyFilters" || c.id === "overlay") setDrawer(false);
    else if (c.classList.contains("card")) openModal(c.dataset.id);
  });
  app.addEventListener("keydown", (e) => {
    if ((e.key === "Enter" || e.key === " ") && e.target.classList && e.target.classList.contains("card")) { e.preventDefault(); openModal(e.target.dataset.id); }
  });
  // Broken images fall back to the category icon
  document.addEventListener("error", (e) => {
    const im = e.target;
    if (im && im.tagName === "IMG" && im.dataset && im.dataset.ic !== undefined) {
      const holder = im.parentElement; im.remove();
      if (holder && !holder.textContent.trim()) holder.append(document.createTextNode(im.dataset.ic));
    }
  }, true);

  document.addEventListener("DOMContentLoaded", () => {});
  modal = document.createElement("div");
  modal.className = "modal";
  document.body.appendChild(modal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.closest("[data-close]")) return closeModal();
    const th = e.target.closest("[data-thumb]");
    if (th) {
      const main = modal.querySelector("#mMain img");
      if (main) main.src = th.dataset.thumb;
      modal.querySelectorAll("[data-thumb]").forEach((b) => b.classList.toggle("on", b === th));
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { if (modal.classList.contains("open")) closeModal(); else setDrawer(false); }
  });

  lang = detectLang();
  readURL();
  renderAll();
})();
