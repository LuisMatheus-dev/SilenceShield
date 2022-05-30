import database from '../infra/database.js';

class UserData {

    static async getUserData() {

        try {
            let { data } = await database
                .from('users')
                .select('*');

            return data;

        } catch(error) {
            console.log(error);
        }
    }


    static async saveUser(  userId, fristName, lastName, username, password, systems ) {
        try {
            let { data } = await database
                .from('users')
                .insert({ userId, fristName, lastName, username, password, systems });
            
            return data;

        } catch(error) {
            throw new Error(error);
        }
    }
}

export default UserData;