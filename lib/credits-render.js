/* Renderiza la lista de créditos fotográficos desde assets/credits.json */
(function () {
  "use strict";
  var list = document.querySelector("[data-credits]");
  if (!list) return;

  function render(credits){
    var entries = Array.isArray(credits) ? credits : Object.keys(credits).map(function(k){ return credits[k]; });
    if (!entries.length){ list.innerHTML = "<li>Sin imágenes de stock — todas las fotos son propias de Mipiú.</li>"; return; }
    list.innerHTML = entries.map(function(c){
      var author = c.creator || "Autor desconocido";
      var authorHTML = c.creator_url ? '<a href="'+c.creator_url+'" target="_blank" rel="noopener">'+author+'</a>' : author;
      var lic = (c.license || "cc").toUpperCase() + " " + (c.license_version || "");
      var licHTML = c.license_url ? '<a href="'+c.license_url+'" target="_blank" rel="noopener">'+lic.trim()+'</a>' : lic;
      var orig = c.foreign_landing_url ? ' · <a href="'+c.foreign_landing_url+'" target="_blank" rel="noopener">ver original ↗</a>' : "";
      return "<li><strong>"+(c.title||"Imagen")+"</strong> — "+authorHTML+" ("+(c.source||"Openverse")+") · "+licHTML+orig+"</li>";
    }).join("");
  }

  fetch("assets/credits.json")
    .then(function(r){ return r.json(); })
    .then(render)
    .catch(function(){
      list.innerHTML = "<li>No se pudo cargar la lista de créditos. Abrí el sitio desde un servidor (o Hostinger) para verla.</li>";
    });
})();
