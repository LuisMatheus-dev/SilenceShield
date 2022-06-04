import express from 'express';

import userRoute from './routes/userRoute.js';
import devicesRoute from './routes/devicesRoute.js';
import systemRoute from './routes/systemRoute.js';
import Auth from './utils/Auth.js';


const app = express();
//Padronizando I/O
app.use(express.json()); 

//Rota de login para retorno de id do usúario
app.use('/', userRoute);

//Instrução aos novos acessos

//Garante que tenha um usúario logado como referência
app.use('/:userId/device', Auth.verifyId, devicesRoute);
app.use('/:userId/system', Auth.verifyId, systemRoute);


app.use(Auth.verifyLogin);
//End of Exceptions
app.use(function(error, req, res, next) {
    
    if(error) {
        res.status(500).send(error.message);
    }
});
app.listen(3000);

