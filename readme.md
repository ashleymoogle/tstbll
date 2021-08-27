# Bell Test Technique Frontend 

Le sujet qui suit à été conçu pour que vous puissez mettre en avant vos savoirs-faire, il n'y a pas une et unique bonne solution. Traitez ce sujet aux meilleurs de vos compétences ! :)

## Sujet

Écrire un programme qui affiche une liste de mots (récupérés via une API dès que possible), ainsi qu'un formulaire comportant un champ de saisie (texte).
Quand le fomulaire est soumis, le programme doit chercher si un [anagramme](https://fr.wikipedia.org/wiki/Anagramme) du "mot" saisi dans le formulaire existe dans la liste de mots (précédemment affichée sur la page).
Si un anagramme est trouvé, un message avertira l'utilisateur de la présence d'un anagramme dans la liste.
Si aucun anagramme n'est trouvé, le mot devra être ajouté à la liste de façon persistente (enregistrement sur le serveur via l'API).

## Démarrage

L'application peut être démarrée localement ainsi:

    npm install
    npm start

L'application est alors disponible à http://localhost:8080 (l'API dont vous aurez besoin pour ce test est disponible à http://localhost:3000).

## Details concernant l'API

Pour cet exercice L'API serveur repose sur la librairie [json-server](https://github.com/typicode/json-server).

Une liste de mots (celle à afficher) est donc disponible via le endpoint `http://localhost:3000/words`. Par ce même endoint, il est possible d'ajouter des éléments à la liste en utilisant la méthode http POST (se référer à la documentation de la librairie)

## Informations diverses

Le test technique sera évalué selon les critères suivants:

* Il n'est pas permis de retirer des dépendances, mais il est tout à fait permis d'en ajouter (dites-nous pour quelle(s) raison(s) vous en aviez besoin)
* La qualité du code (simplicité, style, etc.)
* La compréhension et la complétude des requis.
* Le rendu visuel (UI/UX) : le choix d'une librairie visuelle (ex: Element-UI) est laissé à la discrétion du candidat.
* Les correcteurs sont des humains, n'hésitez pas à joindre à votre application tout ce que vous jugerez utile à l'évaluation de ce test (documentaion, note d'intention, etc...).

