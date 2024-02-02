import slugify from "slugify";
import validator from "validator";


class Website {
    #title;
    #description;
    #adress;
    #appareil;
    #level;
    slug;

    constructor(config) {
        this.title = config.title
        this.description = config.description
        this.adress = config.adress
        this.appareil = config.appareil
        this.level = config.level
    }

    get title() {
        return this.#title
    }

    get description() {
        return this.#description
    }

    get adress() {
        return this.#adress
    }

    get appareil() {
        return this.#appareil
    }

    get level() {
        return this.#level
    }

    get slug() {
        const slug = slugify(this.title, {
            lower: true
        })
        console.log(slug)
        return this.slug = slug
    }

    set title(value) {
        if(typeof value !== 'string') {
            throw new Error('Le titre doit être une chaine de caractére obligatoire')
        }  
       this.#title = value
    }

    set description(value) {
        this.#description = value
    }

    set adress(value) {
        if(!validator.isURL(value)) {
            throw new Error('Veuillez saisir une adresse URL')
        }
        this.#adress = value
    }

    set appareil(value) {
        if(value !== undefined) {
            const valueAppareils = ["Mobile", "Ordinateur", "Lecteur d'écran"]
            const selectAppareil = valueAppareils.find(appareil => appareil === value)
            if (!selectAppareil) {
                throw new Error('La chaine de caractere n\'existe pas')
            }
            this.#level = selectAppareil
        }       
    }

    set level(value) {
        if(value !== undefined) {
            const valueLevels = ["Bloquant", "Genant", "Casse tete"]
            const selectLevel = valueLevels.find(level => level === value)
            if (!selectLevel) {
                throw new Error('La chaine de caractere n\'existe pas')
            }
            this.#level = selectLevel
        }
    }
}

export default Website