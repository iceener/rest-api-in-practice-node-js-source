import { Router } from 'express';
import { catchAsync } from "../middlewares/errors";
import AuthController from '../controllers/authController';
import passport from 'passport';

export default () => {
    const api = Router();

    api.post('/login', passport.authenticate('local', { session: false }), AuthController.login);

    api.post('/register', AuthController.register);

    return api;
}