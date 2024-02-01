import website from "../data/website.js"

const mainController = {
    showHome: (req, res) => {
        res.render('acceuil', {website})
    },

    showContact: (req, res) => {
        res.render('contact', {title: 'Contact'})
    },

    showPlan: (req, res) => {
        res.render('plandusite', {title: 'Plan du site'})
    },

    showMention: (req, res) => {
        res.render('mentionslegales', {title: 'Mentions legales'})
    }
}

export default mainController