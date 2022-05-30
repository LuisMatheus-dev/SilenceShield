import UserData from '../data/userData.js';
import { nanoid } from 'nanoid';

class User {

    #userId;

    constructor( fristName, lastName, password, systems ) {
        this.fristName = fristName;
        this.lastName = lastName;
        this.password = password;
        this.systems = systems;
        
        this.#setId();
        this.username = this.#generateUserName();

        this.#saveUser(
            this.#userId,
            fristName, 
            lastName, 
            username, 
            password, 
            systems 
        );
    }

    static userData() {
        return UserData.getUserData();
    }

    #saveUser(  userId, fristName, lastName, username, password, systems ) {
        return UserData.saveUser( 
            userId, 
            fristName, 
            lastName, 
            username, 
            password, 
            systems 
        );
    }

    #setId() {
        this.#userId = nanoid();
    }

    #generateUserName() {
        return `${this.fristName + this.fristName + this.#userId.slice(-3)}`.toLowerCase();
    }    
}

export default User;