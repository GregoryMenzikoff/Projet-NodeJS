export const users = []
import User from "../models/User.js"
import bcrypt from 'bcrypt';



const authController = {
    register: (req, res) => {
        res.render('register')
    },
    
    registerAction: (req, res) => {
        try {
            const formData = req.body
            const user = new User(formData)
            users.push(user)
            console.log(user)
            res.redirect('/connexion')
        } catch (error) {
            res.render('register', {message: error.message})
        }
    },
 
    login: (req, res) => {
        res.render('login');
      },

      loginAction: (req, res) => {
        const formData = req.body;
    
        const foundUser = users.find(user => user.email === formData.email);
        if(foundUser) {
          // Je vais comparer le password fourni dans la requete avec le hash du password stocké dans foundUser
          bcrypt.compare(formData.password, foundUser.password, (err, result) => {
            // result est true quand le mot de passe est bon
            if (result) {
              req.session.isLogged = true;
              req.session.user = foundUser
              res.redirect('/');
            }
            else {
              // on ne va pas throw depuis un callback, on verra la notation promesse citée dans la doc plus tard ;)
              res.render('login', { message: 'Mauvais couple identifiant/mot de passe' });
            }
          });
        } else {
          res.render('login', { message: 'Mauvais couple identifiant/mot de passe' });
        }
      },

      logout: (req, res) => {
        req.session.destroy()
        res.redirect('/');
      },
} 

export default authController