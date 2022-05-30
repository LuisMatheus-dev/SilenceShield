import SystemData from '../data/systemData.js';

class System {

    constructor( userId, name, devices ) {
        this.name = name;
        this.user_id = userId;
        this.devices = devices; //Um array de Dispositivos
        this.enabled = enabled;
        
        this.#saveSystem( name, userId, devices, enabled );
    }

    #saveSystem( name, userId, devices, enabled ) {
        return SystemData.saveSystem( name, userId, devices, enabled );
    }

    get deviceCount() {
        return this.devices.length;
    }

    static systemData() {
        return SystemData.getSystemData();
    }


}

export default System;