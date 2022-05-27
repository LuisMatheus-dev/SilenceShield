import DeviceData from '../data/deviceData.js';
import { nanoid } from 'nanoid';
class Device {

    #deviceId;

    constructor(status, nickname, systemId) {
        this.status = status;
        this.nickname = nickname;
        this.systemId = systemId;

        this.setId();
        this.saveDevice(status, nickname, systemId, this.#deviceId);
    }

    setId() {
        this.#deviceId = nanoid();
    }
    
    saveDevice(status, nickname, systemId, deviceId) {
        return DeviceData.saveDevice(status, nickname, systemId, deviceId);
    }

    static deviceData() {
        return DeviceData.getDeviceData();
    }

    static deviceData() {
        return DeviceData.getDeviceData();
    }





}

export default Device;