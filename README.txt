GARRY’S MOD — ECRAN DE CHARGEMENT

1. Mettre votre GIF dans : assets/spinner.gif
   Sans ce fichier, un spinner CSS de secours est visible.
2. Remplacer les images de démonstration (SVG) par vos images JPEG/WebP/PNG.
   Modifier ensuite la liste CONFIG.backgrounds dans script.js, par exemple :
   backgrounds: ['assets/backgrounds/map1.jpg', 'assets/backgrounds/map2.jpg']
3. Changer CONFIG.serverName dans script.js.
4. Envoyer le contenu de ce dossier sur un hébergement web PUBLIC en HTTPS.
   Ex. https://example.com/gmod-loading/index.html
5. Dans garrysmod/cfg/server.cfg ajouter :
   sv_loadingurl "https://example.com/gmod-loading/index.html"
   Redémarrer le serveur, puis rejoindre pour tester.

Le chargement GMod se poursuit normalement ; seules les informations visuelles
sur la carte, les téléchargements et leur progression sont volontairement masquées.
Cela ne cache pas d'éventuels messages superposés par GMod lui-même ou par un addon.

Réglages dans script.js : intervalMs (en ms), backgrounds, spinnerGif, serverName.
La taille d'affichage du GIF se règle dans style.css (.spinner-holder).
Fichiers web uniquement : aucun PHP ni base de données nécessaire.

Doc officielle : https://wiki.facepunch.com/gmod/Loading_URL
