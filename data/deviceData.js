import database from '../infra/database.js';

class DeviceData {

    static async getDeviceData() {

        const { data, error } = await database
            .from('devices')
            .select('*');
        
        if(error) throw new Error(error);            
        return data;
    }

    static async saveDevice( systemId, name, status ) {
        
        const { data, error } = await database
            .from('devices')
            .insert({ 
                'system_id': systemId, 
                'name': name, 
                'status': status 
            });

        if(error) throw new Error(error);
        return data;
    }

    static async getById( deviceId ) {
        const { data, error } = await database
            .from('devices')
            .select('id, system_id, name, status')
            .eq('id', deviceId);

            console.log(error)
        if(error) throw new Error(error);
        return data;

    }
}

export default DeviceData;