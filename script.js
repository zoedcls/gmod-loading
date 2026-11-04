// PERSONNALISATION : modifier ce bloc uniquement.
var CONFIG = {
  serverName: 'MON SERVEUR GMOD',
  backgrounds: [
    'assets/backgrounds/bg-1.svg',
    'assets/backgrounds/bg-2.svg',
    'assets/backgrounds/bg-3.svg'
  ],
  intervalMs: 7000,
  spinnerGif: 'assets/spinner.gif'
};

(function () {
  var container = document.getElementById('backgrounds');
  var nameNode = document.getElementById('server-name');
  nameNode.textContent = CONFIG.serverName;
  var layers = [];
  CONFIG.backgrounds.forEach(function (url, index) {
    var node = document.createElement('div');
    node.className = 'background' + (index === 0 ? ' active' : '');
    node.style.backgroundImage = 'url("' + url.replace(/"/g, '%22') + '")';
    container.appendChild(node);
    layers.push(node);
  });
  if (layers.length > 1) {
    var current = 0;
    window.setInterval(function () {
      layers[current].classList.remove('active');
      current = (current + 1) % layers.length;
      layers[current].classList.add('active');
    }, Math.max(2500, CONFIG.intervalMs));
  }
  var gif = document.getElementById('custom-spinner');
  var fallback = document.getElementById('spinner-fallback');
  gif.onload = function () { gif.hidden = false; fallback.style.display = 'none'; };
  gif.onerror = function () { gif.hidden = true; fallback.style.display = 'block'; };
  gif.src = CONFIG.spinnerGif;
  if (gif.complete && gif.naturalWidth > 0) { gif.onload(); }
})();

// Les callbacks natifs ne sont pas utilisés : aucune info map/fichier/progression n'est affichée.
window.GameDetails = function () {};
window.SetFilesTotal = function () {};
window.SetFilesNeeded = function () {};
window.DownloadingFile = function () {};
window.SetStatusChanged = function () {};
