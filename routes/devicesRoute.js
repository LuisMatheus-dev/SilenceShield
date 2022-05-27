import express from 'express';
import Device from '../entities/Device.js';
import DeviceError from '../utils/DeviceError.js';


const router = express.Router();

router.get('/', async( req, res, next ) => {

    try {
        const data = await Device.deviceData();
        res.json(data);

    } catch(error) {
        next(error);
    }
});


router.post('/', DeviceError.checkAssignedSystem,

    async( req, res, next ) => {
        const { status, nickname, systemID } = req.body;
        
        try {
            const device = new Device(status, nickname, systemID);
            res.status(201).json({ "msg": "Criado com Sucesso", "data": device });

        } catch(error) {
            next(error);
        }
    }
);



export default router;