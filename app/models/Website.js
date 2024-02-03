import slugify from "slugify";
import validator from "validator";
import {valueAppareils} from "../data/data.js"
import { valueLevels } from "../data/data.js";

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
        return slugify(this.#title, {
            lower: true
        });
    }

    set title(value) {
        if(typeof value !== 'string' || value.length === 0) {
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
    
            const selectAppareil = valueAppareils.find(appareil => appareil === value)
            if (!selectAppareil) {
                throw new Error("L'appareil selectionner n'est pas conforme")
            }
            this.#appareil = value
        }       
    }

    set level(value) {
        if(value !== undefined) {
            
            const selectLevel = valueLevels.find(level => level === value)
            if (!selectLevel) {
                throw new Error("Le niveau selectionné n'est pas conforme")
            }
            this.#level = value
        }
    }
}

export default Website