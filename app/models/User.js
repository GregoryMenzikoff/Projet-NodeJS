import validator from "validator";
import bcrypt from 'bcrypt';

class User {
    #email;
    #password;

    constructor(login) {
        this.email = login.email
        this.password = login.password
    }

    get email() {
        return this.#email
    }

    get password() {
        return this.#password
    }

    set email(value) {
        if (!validator.isEmail(value)) {
            throw new Error('Email invalide')
        }
        this.#email = value
    }

    set password(value) {
        const options = {minlength: 12, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1};
        if (!validator.isStrongPassword(value, options)) {
            throw new Error('Le mot de passe doit comporter au moins 12 caractères et au moins 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial');
          }
          bcrypt.hash(value, 10, (error, hash) => {
            this.#password = hash;
          })
    }
}

export default User