import cors from 'cors';
import express from 'express';
import userRouter from './routes/userRouter';

const app = express();

// config
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

// routes api
app.use('/users', userRouter);

export default app;