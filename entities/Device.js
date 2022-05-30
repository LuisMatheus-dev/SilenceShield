import DeviceData from '../data/deviceData.js';
class Device {

    constructor( systemId, name, status ) {
        this.systemId = systemId;
        this.name = name;
        this.status = status;

        this.#saveDevice( systemId, name, status );
    }
    
    #saveDevice( systemId, name, status ) {
        return DeviceData.saveDevice( systemId, name, status );
    }

    static deviceData() {
        return DeviceData.getDeviceData();
    }

    static deviceData() {
        return DeviceData.getDeviceData();
    }

    static getById(deviceId) {
        return DeviceData.getById(deviceId);
    }
}

export default Device;