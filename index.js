import express from 'express';
import * as dotenv from 'dotenv';
import session from 'express-session';

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

app.use(express.urlencoded({extended: true}));

app.listen(port, () => {
    console.log(`Serveur de demarrage @ http://localhost:${port}`)
});
