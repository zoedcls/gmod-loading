ÉCRAN DE CHARGEMENT GMOD — MOJAVE UI (VERSION CORRIGÉE)

FICHIERS À PUBLIER : importez directement le CONTENU de ce dossier à la racine du dépôt GitHub zoedcls/gmod-loading (pas un sous-dossier).

index.html
style.css
script.js
assets/spinner.gif             <- GIF animé inclus (265 x 132)
assets/backgrounds/bg-1.png  <- image de fond incluse
assets/backgrounds/bg-2.png  <- image de fond incluse

La version précédente bloquait dans script.js : elle recherchait #server-name, supprimé du HTML. Le chargement des fonds et du GIF ne pouvait donc pas s'exécuter. Ce problème est corrigé.

Sur GitHub : Add file > Upload files > glissez tous les fichiers/dossiers du dossier décompressé > Commit changes. S'il existe déjà des fichiers de même nom, les nouveaux remplacent les anciens.

Page : https://zoedcls.github.io/gmod-loading/
En cas de cache navigateur : Ctrl+F5. Si vous ajoutez d'autres fonds, modifiez la liste CONFIG.backgrounds dans script.js.

IMPORTANT : pour conserver vos changements ultérieurs, modifiez les fichiers dans GitHub, et non le fichier ZIP seulement.
