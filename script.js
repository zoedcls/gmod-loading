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

  // Les images sont déjà présentes dans le HTML : pas de CSS background-image.
  if (container) {
    var layers = container.querySelectorAll('img.background');
    var active = 0;
    if (layers.length > 1) {
      window.setInterval(function () {
        layers[active].classList.remove('active');
        active = (active + 1) % layers.length;
        layers[active].classList.add('active');
      }, 7000);
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
