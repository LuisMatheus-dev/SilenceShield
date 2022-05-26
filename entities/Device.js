import DeviceData from '../data/deviceData.js';

class Device {

    #id;

    constructor(status, nickname, hardwareID) {
        this.status = status;
        this.nickname = nickname;
        this.hardwareID = hardwareID;

        this.setId();
    }

    setId() {
        this.#id = Math.random();
    }

    static deviceData() {
        return DeviceData.getDeviceData();
    }




}

export default Device;