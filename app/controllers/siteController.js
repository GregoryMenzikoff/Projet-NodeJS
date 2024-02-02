import website from "../data/website.js"
import h1Value from "../data/title.js";


const siteDenController = {
     
    showFSearch: (req, res) => {
       
        try {
            const cleanSearch = req.query.search.trim();
            const filteredQuotes = website.filter(web => web.title.includes(cleanSearch));
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
    },

    detail: 
    
    (req, res, next) => {
    const slug = req.params.slug
    console.log(slug)
    const titleSlug = website.filter(web => web.slug === (slug))
    console.log(slug)
    console.log(titleSlug)
    if(!titleSlug) {
      
        next()
    }
    else {
      res.render('detail', {website: titleSlug})
    }
},
}

export default siteDenController