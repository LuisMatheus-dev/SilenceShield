import express from 'express';
import Device from '../entities/Device.js';
import User from '../entities/User.js';
import DeviceError from '../utils/DeviceError.js';


const router = express.Router();

router.get('/', async( req, res, next ) => {
    const { userId } =  req.params;
    try {
        const data = await Device.deviceData();
        res.json(data);
        next(userId);

    } catch(error) {
        next(error);
    }
 
});

router.get('/:deviceId', async(req, res, next) => {
    const { deviceId } = req.params;

    try {
      
        const data = await Device.getById(deviceId);
        res.json(data);

    } catch(error) {
        next(error);
    }

        
});

router.post('/', DeviceError.checkAssignedSystem,

    async( req, res, next ) => {
        const { status, name, systemId } = req.body;

        try {
            const device = new Device(status, name, systemId);
            res.status(201).json({ "msg": "Criado com Sucesso", "data": device });

        } catch(error) {
            next(error);
        }
    }
);



export default router;