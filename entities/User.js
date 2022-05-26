import UserData from '../data/userData.js';

class User {
    constructor(fristName, lastName, password, id, systems) {
        this.fristName = fristName;
        this.lastName = lastName;
        this.password = password;
        this.id = id;
        this.systems = systems;
    }

    get userData() {
        return UserData.getUserData();
    }
    
}

export default User;