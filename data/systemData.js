import database from '../infra/database.js';

class SystemData {

    static async getSystemData() {

        try {
            let { data } = await database
                .from('systems')
                .select('*');

            return data;

        } catch(error) {
            console.log(error);
        }
    }
}

export default SystemData;