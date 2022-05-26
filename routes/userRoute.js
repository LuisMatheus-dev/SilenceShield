import express from 'express';
const router = express.Router();

//import userService from '../services/userService.js';

router.get('/', async function( req, res) {
    res.json('ESSES SÃO OS DADOS DO USÚARIO 🧑‍🦱');
})

export default router;

