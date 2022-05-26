import express from 'express';

import userRoute from './routes/userRoute.js';
import devicesRoute from './routes/devicesRoute.js';
import systemRoute from './routes/systemRoute.js';

const app = express();

app.use(express.json()); //Padronizando I/O

//Routes
app.use('/', systemRoute);
app.use('/device', devicesRoute);
app.use('/user', userRoute);

app.listen(3000);
