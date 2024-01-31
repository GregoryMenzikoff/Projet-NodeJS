import express from 'express';
import * as dotenv from 'dotenv';
import session from 'express-session';
import router from './app/router.js';
import Website from './app/models/Website.js';
import website  from './app/data/website.js';

dotenv.config()

const port = process.env.PORT || 3000;
const app = express()

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(session({
    resave: true, // la session est réenregistrée meme si elle n'est pas modifiée
    secret: process.env.SECRET, // ajoute une part d'aléatoire dans la génération des id de session imprédictible
    saveUninitialized: true, // génère un id de session pour tous ceux qui n'en ont pas encore
  }));

app.use(express.static('./S06-inte-pilori-GregoryMENZIKOFF/public'))

app.use(express.urlencoded({extended: true}));
app.use(router)


const user = new Website({title:"Toto", description:"blabla", adress:"http://toto.fr", appareil:"Ordinateur", level:"Casse tete"})
//console.log(user.level)



app.listen(port, () => {
    console.log(`Serveur de demarrage @ http://localhost:${port}`)
});
