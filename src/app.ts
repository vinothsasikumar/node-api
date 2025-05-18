import express from 'express';
import mongoose from 'mongoose';
import cors from "cors";
import userRoutes from './routes/user.routes';
import { setupSwagger } from './configuration/swagger';

const app = express();
mongoose
    .connect('mongodb+srv://vinothshrsh:lsm8j00xvQMAdaQF@playercluster.xygv0ik.mongodb.net/user_database')
    .then(() => { console.log('Database Connection Established') })
    .catch(() => { console.log('Connection Failed') });

app.use(cors())
app.use(express.json());

setupSwagger(app);
app.use('/api/user', userRoutes);

export default app;