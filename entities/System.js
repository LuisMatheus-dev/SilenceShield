import SystemData from '../data/systemData.js';

class System {

    #systemId;

    constructor(name, devices, enabled) {
        this.name = name; //String
        this.devices = devices; //Um array de 
        this.enabled = enabled;
        
        this.#setId();
        this.#saveDevice(name, devices, enabled, this.#systemId);
    }

    #saveDevice(nickname, devices, enabled,systemId) {
        return SystemData.saveSystem(nickname, devices, systemId, enabled);
    }

    #setId() {
        this.#systemId = nanoid();
    }

    get deviceCount() {
        return this.devices.length;
    }

    static systemData() {
        return SystemData.getSystemData();
    }


}

export default System;