import SystemData from '../data/systemData.js';

class System {
    constructor(name, devices, enabled, id) {
        this.name = name;
        this.devices = devices;
        this.enabled = enabled;
        this.id = id;
    }

    get deviceCount() {
        return this.devices.length;
    }

    get systemData() {
        return SystemData.getSystemData();
    }


}

export default System;