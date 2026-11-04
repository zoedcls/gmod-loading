// Les Terres Désolées RP — écran de chargement
// Modifier uniquement les chemins des images pour personnaliser les fonds.
var CONFIG = {
  backgrounds: [
    'assets/backgrounds/bg-1.png',
    'assets/backgrounds/bg-2.png'
  ],
  intervalMs: 7000,
  spinnerGif: 'assets/spinner.gif'
};

(function () {
  'use strict';
  var container = document.getElementById('backgrounds');
  var gif = document.getElementById('custom-spinner');
  var fallback = document.getElementById('spinner-fallback');

  // Aucune dépendance à l'ancien élément #server-name (supprimé du HTML).
  if (container && CONFIG.backgrounds && CONFIG.backgrounds.length) {
    var layers = [];
    CONFIG.backgrounds.forEach(function (url, index) {
      var layer = document.createElement('div');
      layer.className = 'background' + (index === 0 ? ' active' : '');
      // Le chemin est relatif à index.html, à la racine du dépôt GitHub Pages.
      layer.style.backgroundImage = 'url(' + JSON.stringify(url) + ')';
      container.appendChild(layer);
      layers.push(layer);
    });

    if (layers.length > 1) {
      var active = 0;
      window.setInterval(function () {
        layers[active].classList.remove('active');
        active = (active + 1) % layers.length;
        layers[active].classList.add('active');
      }, Math.max(2500, CONFIG.intervalMs));
    }
  }

  if (gif) {
    gif.onload = function () {
      gif.hidden = false;
      if (fallback) fallback.style.display = 'none';
    };
    gif.onerror = function () {
      gif.hidden = true;
      if (fallback) fallback.style.display = 'block';
    };
    gif.src = CONFIG.spinnerGif;
    if (gif.complete && gif.naturalWidth > 0) gif.onload();
  }
})();

// Aucun nom de map, fichier, statut ni pourcentage de progression affiché.
window.GameDetails = function () {};
window.SetFilesTotal = function () {};
window.SetFilesNeeded = function () {};
window.DownloadingFile = function () {};
window.SetStatusChanged = function () {};
