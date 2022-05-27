import database from '../infra/database.js';

class DeviceData {

    static async getDeviceData() {

        try {
            let { data } = await database
                .from('Device')
                .select('*');
                
            return data;

        } catch(error) {
            throw new Error(error);
        }
    }

    static async saveDevice(status, nickname, hardwareID, id) {
        try {
            let { data } = await database
                .from('Device')
                .insert({status, nickname, hardwareID, id});
            
            return data;

        } catch(error) {
            throw new Error(error);
        }
    }
}

export default DeviceData;