import express from 'express';
import User from '../entities/User.js';

const router = express.Router();

router.get('/user/login', async function( req, res, next ) {

    const { username, password } = req.query;

    try {
        const [ data ] = await User.login( username, password );
        res.status(200).json({ message: 'Login bem sucecido', userId: data});

    } catch(error) {
        next(error.message);
    }

});

router.get('/:userId/user', async function( req, res, next ) {
    res.status(200).json({message: 'Deu bom'});
});


export default router;

