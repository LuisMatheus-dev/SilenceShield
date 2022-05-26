import express from 'express';
const router = express.Router();

//import systemService from '../services/systemService.js';

router.get('/', async function( req, res) {
    res.json('ESSES SÃO OS SISTEMAS ATIVOS 🤖');
})

export default router;