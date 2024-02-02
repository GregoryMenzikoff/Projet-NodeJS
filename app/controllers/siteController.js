import website from "../data/website.js"
import Website from "../models/Website.js";
import {h1Value} from "../data/title.js";


const siteDenController = {

    showFSearch: (req, res) => {
      const Search = req.query.search
        if (Search) {
        try {
              const cleanSearch = Search.trim();
            const filteredQuotes = website.filter(web => web.title.toLowerCase().includes(cleanSearch));
            //console.log(typeof cleanSearch)
            if(cleanSearch === '') {
              //console.log(cleanSearch)
              res.render('list', {website, title: h1Value[0]})
            }

            else if (filteredQuotes.length > 0) {
              //console.log(filteredQuotes)
              res.render('list' , {website: filteredQuotes, title: h1Value[1]})
            }

            else {
              throw new Error('Aucun resultats')
            }
            }
            catch (error) {
              //console.log(error.message)
              res.render('erreur', {
                error
              });
          }   
    }
    else {
      res.render('list', {website, title: h1Value[0]})  
   } 
  },

      detail: (req, res) => {
      const slug = req.params.slug
      const titleSlug = website.filter(web => web.title.includes(slug))
  
      if(titleSlug) {
        
        res.render('detail', {website: titleSlug})
      }
    
      else {
        res.render('page404')
      }
  },

 denoncer: (req,res) => {
  res.render('formulaire')
 },

 handleDenoncer: (req,res) => {
    try { 
      const toto = req.body
      const denonceSite = new Website(toto)
      console.log(denonceSite)
      website.push(denonceSite)
      res.render('detail', {website, title: h1Value[0]})
    } catch (error) {
      console.log(error)
      res.render('formulaire', {alert: error.message, data: req.body, website})
    }  
 }
}

export default siteDenController