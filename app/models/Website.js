import validator from "validator";


class Website {
    #title;
    #description;
    #adress;
    #appareil;
    #level;

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
            throw new Error('Veuillez saisir un URL')
        }
        this.#adress = value
    }

    set appareil(value) {
        const valueAppareils = ["Mobile", "Ordinateur", "Lecteur d'écran"]
        const selectAppareil = valueAppareils.find(appareil => appareil === value)
        if (!selectAppareil) {
            throw new Error('La chaine de caractere n\'existe pas')
        }
        
        this.#appareil = selectAppareil
    }

    set level(value) {
       const valueLevels = ["Bloquant", "Genant", "Casse tete"]
        const selectLevel = valueLevels.find(level => level === value)
        if (!selectLevel) {
            throw new Error('La chaine de caractere n\'existe pas')
        }
        this.#level = value
    }
}

export default Website