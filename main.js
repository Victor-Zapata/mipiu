/* ============================================================================
   MIPIÚ ESPACIOS MÚLTIPLES — main.js
   IIFE · sin módulos · el JS solo enriquece (la web se lee sin él).
   ============================================================================ */
(function () {
  "use strict";

  var data = window.__WONKA__ || {};
  var brand = data.brand || {};

  var $  = function (s, sc) { return (sc || document).querySelector(s); };
  var $$ = function (s, sc) { return Array.prototype.slice.call((sc || document).querySelectorAll(s)); };
  function escHTML(s){ return String(s==null?"":s).replace(/[&<>"']/g,function(c){return ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[c];}); }
  function safe(fn, name){ try { fn(); } catch(e){ console.warn("["+name+"]", e); } }

  /* ---------- iconos de línea minimalistas ---------- */
  function svg(inner){ return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+inner+'</svg>'; }
  var ICONS = {
    tree:    svg('<path d="M12 3l5 7h-3l4 6H6l4-6H7z"/><path d="M12 16v5"/>'),
    droplet: svg('<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>'),
    ball:    svg('<circle cx="12" cy="12" r="9"/><path d="M12 7.5l3.2 2.3-1.2 3.9h-4l-1.2-3.9z"/>'),
    slide:   svg('<path d="M4 20c5 0 9.5-4.5 14-15"/><path d="M14 5h4v4"/><path d="M4 20h4.5"/>'),
    music:   svg('<circle cx="7" cy="18" r="2.4"/><circle cx="17" cy="16" r="2.4"/><path d="M9.4 18V6l10-2v10"/>'),
    utensils:svg('<path d="M6 3v7a2 2 0 0 0 4 0V3"/><path d="M8 12v9"/><path d="M16.5 3c-2 0-3 2.4-3 5.5s1 4 3 4v8.5"/>'),
    sun:     svg('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19"/>'),
    sparkles:svg('<path d="M12 3l1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7z"/><path d="M19 14l.7 1.8L21.5 16.5l-1.8.7L19 19l-.7-1.8L16.5 16.5l1.8-.7z"/>'),
    shield:  svg('<path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z"/><path d="M9 12l2 2 4-4"/>'),
    users:   svg('<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M16 5.6a3 3 0 0 1 0 5.8M21.5 20c0-2.6-1.6-4.8-4-5.6"/>'),
    chef:    svg('<path d="M7 13.5a3.6 3.6 0 1 1 1-7 4 4 0 0 1 8 0 3.6 3.6 0 1 1 1 7z"/><path d="M7.5 13.5V19h9v-5.5"/>'),
    snow:    svg('<path d="M12 2v20M4 7l16 10M20 7L4 17"/><path d="M9.5 3.5L12 5.5l2.5-2M9.5 20.5L12 18.5l2.5 2"/>'),
    car:     svg('<path d="M5 16l1.3-4.6A2 2 0 0 1 8.2 10h7.6a2 2 0 0 1 1.9 1.4L19 16"/><path d="M4 16h16v3h-2.5v-1.2H6.5V19H4z"/>'),
    leaf:    svg('<path d="M4 20c0-9 6-15 16-16C19 14 13 20 4 20z"/><path d="M4 20c4-6 8-8.5 12-9.5"/>'),
    chat:    svg('<path d="M5 4h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H10l-4 4v-4H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>'),
    calendar:svg('<rect x="3" y="5" width="18" height="16" rx="2.5"/><path d="M3 9.5h18M8 3v4M16 3v4"/>'),
    check:   svg('<circle cx="12" cy="12" r="9"/><path d="M8 12.2l2.8 2.8L16 9"/>'),
    star:    svg('<path d="M12 3l2.6 5.8 6.4.6-4.8 4.2 1.4 6.2L12 17l-5.6 3 1.4-6.2L3 9.4l6.4-.6z"/>'),
    whatsapp:svg('<path d="M6 3h3l1.6 5-2 1.5a11 11 0 0 0 5 5l1.5-2 5 1.6V22a0 0 0 0 1 0 0A18 18 0 0 1 2 5V5a2 2 0 0 1 2-2z"/>'),
    instagram:svg('<rect x="3" y="3" width="18" height="18" rx="5.5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1"/>'),
    pin:     svg('<path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z"/><circle cx="12" cy="10" r="2.6"/>'),
    chevL:   svg('<path d="M15 5l-7 7 7 7"/>'),
    chevR:   svg('<path d="M9 5l7 7-7 7"/>')
  };
  var TILE_TINTS = ["verde","turquesa","naranja","morado","amarillo","celeste"];
  var AVATAR_BG  = ["#7A1FA2","#008B8B","#E88C45","#9A4AC7","#5f7d30","#a9810b"];

  /* ---------- WhatsApp ---------- */
  function waBase(){ return "https://wa.me/" + (brand.whatsapp || "").replace(/\D/g,""); }
  function waLink(msg){ return waBase() + "?text=" + encodeURIComponent(msg || "Hola Mipiú 👋 quiero consultar por un evento."); }

  /* =====================================================================
     MOUNTS desde el manifest
     ===================================================================== */
  function mountContact(){
    $$("[data-wa-link]").forEach(function(a){
      a.setAttribute("href", waLink());
      if (brand.whatsapp){ a.setAttribute("target","_blank"); a.setAttribute("rel","noopener"); }
    });
    $$("[data-ig-link]").forEach(function(a){
      if (brand.instagramUrl) a.setAttribute("href", brand.instagramUrl);
      if (brand.instagram) a.textContent = brand.instagram;
    });
    $$("[data-address]").forEach(function(el){ if (brand.addressShort) el.textContent = brand.addressShort + ", " + (brand.city||""); });
    $$("[data-address-full]").forEach(function(el){ if (brand.address) el.textContent = brand.address; });
    // iconos del bloque de contacto
    $$("[data-icon]").forEach(function(el){ var k = el.getAttribute("data-icon"); if (ICONS[k] && !el.children.length) el.innerHTML = ICONS[k]; });
  }

  function mountAbout(){
    if (!data.about) return;
    var h = $("[data-about-heading]"); if (h && data.about.heading) h.textContent = data.about.heading;
    var b = $("[data-about-body]");
    if (b && data.about.paragraphs && data.about.paragraphs.length){
      b.innerHTML = data.about.paragraphs.map(function(p){ return "<p>"+escHTML(p)+"</p>"; }).join("");
    }
  }

  function mountServices(){
    var box = $("[data-services]");
    if (!box || !data.spaces || box.dataset.mounted) return;
    var cards = data.spaces.map(function(sp, i){
      var tint = TILE_TINTS[i % TILE_TINTS.length];
      var ic = ICONS[sp.icon] || ICONS.sparkles;
      return ''
      + '<div class="svc-card-w"><article class="card service-card lift">'
      +   '<div class="icon-tile tile-'+tint+'">'+ic+'</div>'
      +   '<h3>'+escHTML(sp.name)+'</h3>'
      +   '<p>'+escHTML(sp.text)+'</p>'
      +   '<span class="service-tag">'+escHTML(sp.type)+'</span>'
      + '</article></div>';
    }).join("");
    box.classList.remove("services-grid");
    box.innerHTML = '<div class="svc-marquee"><div class="svc-track">'
      + '<div class="svc-set">' + cards + '</div>'
      + '<div class="svc-set" aria-hidden="true">' + cards + '</div>'
      + '</div></div>';
    box.dataset.mounted = "1";
  }

  function mountGallery(){
    var box = $("[data-gallery]");
    if (!box || !data.gallery || box.dataset.mounted) return;
    box.innerHTML = data.gallery.map(function(g, i){
      var d = (i % 4) + 1;
      return '<figure class="ph r-'+escHTML(g.ratio||"square")+'" data-reveal="scale" data-d="'+d+'"><img src="'+escHTML(g.img)+'" alt="'+escHTML(g.alt||"Foto de Mipiú")+'" loading="lazy" decoding="async" /></figure>';
    }).join("");
    box.dataset.mounted = "1";
  }

  function mountBenefits(){
    var box = $("[data-benefits]");
    if (!box || !data.benefits || box.dataset.mounted) return;
    var last = data.benefits.length - 1;
    box.innerHTML = data.benefits.map(function(b, i){
      var ic = ICONS[b.icon] || ICONS.star;
      var tint = b.tint || "morado";
      if (i === 0){
        return ''
        + '<article class="bento-cell lg" data-reveal>'
        +   (b.img ? '<img src="'+escHTML(b.img)+'" alt="" aria-hidden="true" />' : '')
        +   '<div class="icon-tile">'+ic+'</div>'
        +   '<h3>'+escHTML(b.title)+'</h3><p>'+escHTML(b.text)+'</p>'
        + '</article>';
      }
      if (i === last){
        return ''
        + '<article class="bento-cell wide tinted-'+tint+'" data-reveal="rise">'
        +   '<div class="icon-tile tile-'+tint+'">'+ic+'</div>'
        +   '<div class="bento-body"><h3>'+escHTML(b.title)+'</h3><p>'+escHTML(b.text)+'</p></div>'
        + '</article>';
      }
      return ''
      + '<article class="bento-cell tinted-'+tint+'" data-reveal="'+((i%2)?"rise-r":"rise")+'" data-d="'+((i%2)+1)+'">'
      +   '<div class="icon-tile tile-'+tint+'">'+ic+'</div>'
      +   '<h3>'+escHTML(b.title)+'</h3><p>'+escHTML(b.text)+'</p>'
      + '</article>';
    }).join("");
    box.dataset.mounted = "1";
  }

  function mountSteps(){
    var box = $("[data-steps]");
    if (!box || !data.steps || box.dataset.mounted) return;
    box.innerHTML = data.steps.map(function(s, i){
      var ic = ICONS[s.icon] || ICONS.check;
      return ''
      + '<div class="step" data-reveal="rise" data-d="'+(i+1)+'">'
      +   '<div class="step-num">'+ic+'<span class="step-badge">'+escHTML(s.n)+'</span></div>'
      +   '<h3>'+escHTML(s.title)+'</h3><p>'+escHTML(s.text)+'</p>'
      + '</div>';
    }).join("");
    box.dataset.mounted = "1";
  }

  function mountOpiniones(){
    var box = $("[data-opiniones]");
    if (!box || !data.testimonials || box.dataset.mounted) return;
    var cards = data.testimonials.map(function(t, i){
      var initial = (t.author || "M").trim().charAt(0).toUpperCase();
      var bg = AVATAR_BG[i % AVATAR_BG.length];
      return ''
      + '<article class="op-card">'
      +   '<span class="op-avatar" style="background:'+bg+'">'+escHTML(initial)+'</span>'
      +   '<b class="op-name">'+escHTML(t.author)+'</b>'
      +   '<span class="op-role">'+escHTML(t.meta||"")+'</span>'
      +   '<div class="op-stars">★★★★★ <b>5.0</b></div>'
      +   '<p class="op-quote">“'+escHTML(t.quote)+'”</p>'
      + '</article>';
    }).join("");
    box.classList.remove("op-grid");
    box.innerHTML = '<div class="op-carousel" data-op-carousel>'
      + '<div class="op-stage">' + cards + '</div>'
      + '<div class="op-nav">'
      +   '<button class="op-btn" type="button" data-op-prev aria-label="Opinión anterior">' + ICONS.chevL + '</button>'
      +   '<button class="op-btn" type="button" data-op-next aria-label="Opinión siguiente">' + ICONS.chevR + '</button>'
      + '</div></div>';
    box.dataset.mounted = "1";
  }

  function mountFaqs(){
    var box = $("[data-faqs]");
    if (!box || !data.faqs || box.dataset.mounted) return;
    box.innerHTML = data.faqs.map(function(f){
      return ''
      + '<div class="faq-item" data-reveal>'
      +   '<button class="faq-q"><span>'+escHTML(f.q)+'</span><span class="faq-icon" aria-hidden="true"></span></button>'
      +   '<div class="faq-a"><div class="faq-a-inner"><p>'+escHTML(f.a)+'</p></div></div>'
      + '</div>';
    }).join("");
    box.dataset.mounted = "1";
  }

  /* =====================================================================
     SPLASH
     ===================================================================== */
  function initSplash(){
    var splash = $("[data-splash]");
    if (!splash) return;
    var hide = function(){ splash.classList.add("is-out"); };
    if (document.readyState === "complete") setTimeout(hide, 1500);
    else window.addEventListener("load", function(){ setTimeout(hide, 1300); });
    setTimeout(hide, 3500);
  }

  /* =====================================================================
     NAV — sticky condense + burger + scroll suave
     ===================================================================== */
  function initNav(){
    var nav = $("[data-nav]");
    var burger = $("[data-burger]");
    if (nav){
      var onScroll = function(){ nav.classList.toggle("scrolled", window.scrollY > 8); };
      onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    }
    if (burger && nav){
      burger.addEventListener("click", function(){
        var open = nav.classList.toggle("menu-open");
        burger.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }
    document.addEventListener("click", function(e){
      var a = e.target.closest('a[href^="#"]');
      if (!a) return;
      var id = a.getAttribute("href");
      if (!id || id === "#") return;
      var el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      if (nav){ nav.classList.remove("menu-open"); if (burger) burger.setAttribute("aria-expanded","false"); }
      var top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: top, behavior: "smooth" });
    });
  }

  /* =====================================================================
     FAQ — acordeón (single-open)
     ===================================================================== */
  function initFaq(){
    var box = $("[data-faqs]");
    if (!box) return;
    var items = $$(".faq-item", box);
    items.forEach(function(item, i){
      var q = $(".faq-q", item);
      if (!q) return;
      if (i === 0) item.classList.add("open");
      q.addEventListener("click", function(){
        var isOpen = item.classList.contains("open");
        items.forEach(function(it){ it.classList.remove("open"); });
        if (!isOpen) item.classList.add("open");
      });
    });
  }

  /* =====================================================================
     CARRUSEL DE OPINIONES (coverflow): central nítida + 2 laterales borrosas
     ===================================================================== */
  function initOpCarousel(){
    var root = $("[data-op-carousel]");
    if (!root) return;
    var stage = $(".op-stage", root);
    var cards = $$(".op-card", root);
    var n = cards.length;
    if (!n) return;
    var active = 0, timer = null;
    function render(){
      for (var i = 0; i < n; i++){
        var c = cards[i];
        c.classList.remove("is-active", "is-prev", "is-next");
        if (i === active) c.classList.add("is-active");
        else if (i === (active - 1 + n) % n) c.classList.add("is-prev");
        else if (i === (active + 1) % n) c.classList.add("is-next");
      }
      if (stage && cards[active]) stage.style.height = (cards[active].offsetHeight + 40) + "px";
    }
    function go(d){ active = (active + d + n) % n; render(); }
    // Avanza siempre (3s por tarjeta), sin pausa en hover.
    function arm(){ if (timer) clearInterval(timer); timer = setInterval(function(){ go(1); }, 3000); }
    var prev = $("[data-op-prev]", root), next = $("[data-op-next]", root);
    if (prev) prev.addEventListener("click", function(){ go(-1); arm(); });
    if (next) next.addEventListener("click", function(){ go(1); arm(); });
    render(); arm();
    window.addEventListener("resize", render);
    window.addEventListener("load", render);
    setTimeout(render, 600);
  }

  /* =====================================================================
     REVEAL al scroll (defensivo: visible sin JS)
     ===================================================================== */
  function initReveal(){
    var els = $$("[data-reveal]");
    if (!els.length) return;
    document.documentElement.classList.add("js-reveal");
    if (typeof IntersectionObserver === "undefined"){ els.forEach(function(e){ e.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if (en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    els.forEach(function(e){ io.observe(e); });
    setTimeout(function(){ $$("[data-reveal]:not(.in)").forEach(function(e){ e.classList.add("in"); }); }, 6000);
  }

  /* =====================================================================
     SCROLL FX — parallax + rotación al paso del scroll (GSAP ScrollTrigger)
     ===================================================================== */
  function buildScrollFx(){
    // Hero: la foto se inclina y flota suave al hacer scroll
    var heroPhoto = $(".hero-photo");
    if (heroPhoto){
      gsap.fromTo(heroPhoto, { rotate: -2.5, y: -18 }, {
        rotate: 2.8, y: 34, ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 }
      });
    }
    // Hero blobs: rotan lento de fondo
    var blobs = $(".hero-blobs");
    if (blobs){
      gsap.to(blobs, { rotate: 45, ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1.4 } });
    }
    // Foto de "Quiénes somos": parallax + leve giro
    var aboutImg = $(".about-photo img");
    if (aboutImg){
      gsap.fromTo(aboutImg, { scale: 1.16, yPercent: -7, rotate: 1.5 }, {
        yPercent: 7, rotate: -1.5, ease: "none",
        scrollTrigger: { trigger: "#nosotros", start: "top bottom", end: "bottom top", scrub: 1 }
      });
    }
    // Celda destacada del Bento: zoom-parallax de la imagen
    var bentoImg = $(".bento-cell.lg img");
    if (bentoImg){
      gsap.fromTo(bentoImg, { scale: 1.2, yPercent: -8 }, {
        yPercent: 8, ease: "none",
        scrollTrigger: { trigger: "#beneficios", start: "top bottom", end: "bottom top", scrub: 1 }
      });
    }
    // Galería masonry: cada foto se mueve a distinta velocidad (parallax)
    gsap.utils.toArray(".masonry .ph img").forEach(function(img, i){
      var dir = (i % 2) ? 1 : -1;
      gsap.fromTo(img, { scale: 1.14, yPercent: -6 * dir }, {
        yPercent: 6 * dir, ease: "none",
        scrollTrigger: { trigger: img.closest(".ph"), start: "top bottom", end: "bottom top", scrub: 1 }
      });
    });
  }
  function initScrollFx(){
    if (!window.gsap || !window.ScrollTrigger) return;
    // gsap.matchMedia evalúa el media query de forma robusta (solo desktop/tablet).
    if (gsap.matchMedia){
      gsap.matchMedia().add("(min-width: 760px)", function(){ buildScrollFx(); });
    } else {
      buildScrollFx();
    }
    window.addEventListener("load", function(){ try { ScrollTrigger.refresh(); } catch(_){} });
    setTimeout(function(){ try { ScrollTrigger.refresh(); } catch(_){} }, 800);
  }

  /* =====================================================================
     CONTADORES (about-mini)
     ===================================================================== */
  function countEl(el){
    var raw = el.textContent.trim();
    var m = raw.match(/^([\d.,]+)(.*)$/);
    if (!m) return;
    var target = parseFloat(m[1].replace(",", "."));
    if (isNaN(target)) return;
    var suffix = m[2] || "";
    var decimals = m[1].indexOf(".") >= 0 ? 1 : 0;
    var dur = 1200, start = null;
    function frame(ts){
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      el.textContent = (target * p).toFixed(decimals) + suffix;
      if (p < 1) requestAnimationFrame(frame);
      else el.textContent = target.toFixed(decimals) + suffix;
    }
    requestAnimationFrame(frame);
  }
  function initCounters(){
    var nums = $$(".about-mini strong");
    if (!nums.length) return;
    if (typeof IntersectionObserver === "undefined"){ nums.forEach(countEl); return; }
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){ if (en.isIntersecting){ countEl(en.target); io.unobserve(en.target); } });
    }, { threshold: 0.5 });
    nums.forEach(function(n){ io.observe(n); });
  }

  /* =====================================================================
     FORMULARIO → WhatsApp
     ===================================================================== */
  function initForm(){
    var form = $("[data-rform]");
    if (!form) return;
    form.addEventListener("submit", function(e){
      e.preventDefault();
      if (!form.reportValidity()) return;
      var get = function(n){ var el = form.querySelector('[name="'+n+'"]'); return el ? el.value.trim() : ""; };
      var msg = "🎈 *Reserva de evento — Mipiú*\n\n"
        + "👦 Cumpleañero/a: " + (get("festejado")||"—") + "\n"
        + "🧑 Responsable: " + (get("adulto")||"—") + "\n"
        + "📅 Fecha + invitados: " + (get("fecha")||"—") + "\n"
        + "📝 Nota: " + (get("nota")||"—") + "\n\n"
        + "¿Tienen disponible esa fecha?";
      window.open(waLink(msg), "_blank", "noopener");
    });
  }

  /* =====================================================================
     ETIQUETA local (galería) — solo en file:// o localhost
     ===================================================================== */
  function initLocalHint(){
    var hint = $("[data-localhint]");
    if (!hint) return;
    var isLocal = location.protocol === "file:" || /^(localhost|127\.|0\.0\.0\.0)/.test(location.hostname);
    if (!isLocal) hint.remove();
  }

  /* =====================================================================
     BOOT
     ===================================================================== */
  function boot(){
    safe(mountContact, "mountContact");
    safe(mountAbout, "mountAbout");
    safe(mountServices, "mountServices");
    safe(mountGallery, "mountGallery");
    safe(mountBenefits, "mountBenefits");
    safe(mountSteps, "mountSteps");
    safe(mountOpiniones, "mountOpiniones");
    safe(mountFaqs, "mountFaqs");

    safe(initSplash, "initSplash");
    safe(initNav, "initNav");
    safe(initFaq, "initFaq");
    safe(initOpCarousel, "initOpCarousel");
    safe(initReveal, "initReveal");
    safe(initCounters, "initCounters");
    safe(initForm, "initForm");
    safe(initLocalHint, "initLocalHint");

    if (window.gsap && window.ScrollTrigger){
      try { gsap.registerPlugin(ScrollTrigger); } catch(_){}
      safe(initScrollFx, "initScrollFx");
    }
    document.documentElement.classList.add("is-ready");
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
