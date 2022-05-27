import express from 'express';
import Device from '../entities/Device.js';

const router = express.Router();

router.get('/', async( req, res, next ) => {

    try {
        const data = await Device.deviceData();
        res.json(data);

    } catch(error) {
        next(error);
    }
});

router.post('/', async( req, res, next ) => {
    const { status, nickname, hardwareID } = req.body;
    console.log(req.body);

    
    try {
        const device = await new Device(status, nickname, hardwareID);
        res.status(201).json({ "msg": "Criado com Sucesso", "data": device });

    } catch(error) {
        next(error);
    }
})



export default router;