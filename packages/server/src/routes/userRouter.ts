import express from 'express';
import UserController from '../controllers/userController';

const userRouter = express.Router();

const userController = new UserController();

userRouter.get('/', userController.getAllUsers);

export default userRouter;
