import User from '../models/user';
import jwt from 'jsonwebtoken';

export default {
    async login (req, res, next) {
        // generate token
        const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, { expiresIn: 1200 });
        // return token
        return res.send({ token });
    },

    async register(req, res, next) {
        const { first_name, last_name, email, password } = req.body;
        const user = new User({ first_name, last_name, email });
        await User.register(user, password);

        res.send('User created successfully. Now you can log in.');
    }
}