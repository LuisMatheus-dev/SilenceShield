import database from '../infra/database.js';

class DeviceData {

    static async getDeviceData() {

        try {
            let { data } = await database
                .from('Device')
                .select('*');
                

            return data;

        } catch(error) {
            console.log(error);
        }
    }
}

export default DeviceData;