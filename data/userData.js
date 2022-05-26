import database from '../infra/database.js';

class UserData {

    static async getUserData() {

        try {
            let { data } = await database
                .from('User')
                .select('*');

            return data;

        } catch(error) {
            console.log(error);
        }
    }
}

export default UserData;