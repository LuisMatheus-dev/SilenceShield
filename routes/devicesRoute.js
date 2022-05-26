import express from 'express';
import Device from '../entities/Device.js';

const router = express.Router();

router.get('/', async function( req, res) {

    try {
        const data = await Device.deviceData();
        
        res.json({
            'title':'Dispositivos Ativos 💻 | 🟢',
            'disp': data
        });

    } catch(error) {
        console.error(error);
    }
});



export default router;