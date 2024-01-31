import Website from "../models/Website.js"

export  default [

   new Website({
   title: 'Oclock.io',
   description: "Il y a un gros problème. Je constate de très gros soucis pour naviguer et c'est impossible d'utiliser correctement tous les boutons à disposition.",
   adress: 'https://oclock.io/',
   appareil: 'Mobile',
   level: 'Bloquant',
   }),

  /*new Website({
   title: 'NPM',
   adress: 'https://www.npmjs.com/',
   }),*/

   new Website({
      title: 'Google',
      description: 'Il y a un tout petit problème.',
      adress: 'https://www.google.com/',
      appareil: 'Ordinateur',
      level: 'Casse tete',
   }),

   new Website({
      title: 'Wikipedia',
      description: "C'est pas jojo",
      adress: 'https://fr.wikipedia.org/',
      appareil: 'Mobile',
      level: 'Bloquant',
   }),
]
