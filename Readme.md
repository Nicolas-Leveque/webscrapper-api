#My first webscrap api

Créé pour faciliter une veille informationnelle non technique, 'My first webscrap' est une api qui va aller chercher sur les pages d'accueil des sites suivant:
  - Lemonde.fr
  - bfmtv.com
  - 20minutes.fr

Cette liste est temporaire et d'autres site seront ajouter à la liste ultérieurement.

Pour chaque site susnommé, l'api ouvre une route GET dédiée qui extrait de la page d'accueil le titre, le lien et, si elle existe, l'adresse de l'image corespondante et les renvoie sous forme d'un array d'objet:

```js
[{
  title: 'exemple',
  url: 'exemple.com',
  image: ''
}]
```

