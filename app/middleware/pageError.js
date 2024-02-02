const pageError ={ 
    showError: (req, res) => {
        res.status(404).render('page404', {message: 'La page demandée n\'a pas pu être trouvée'})
}}

export default pageError