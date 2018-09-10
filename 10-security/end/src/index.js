import dotenv from 'dotenv';
dotenv.config({ path: '.env' });
console.log(process.env.JWT_SECRET);
import express from 'express';
import { join } from 'path';
import config from './config/config';
import songs from './routes/songs';
import auth from './routes/auth';
import passport from './config/passport';
import { notFound, catchErrors } from './middlewares/errors';
import bodyParser from 'body-parser';
import register from 'babel-core/register';
import babelPolyfill from 'babel-polyfill';

// Connect to database
import dbConfig from './config/database';
import mongoose from 'mongoose';

// Configure passport
passport();

mongoose.connect(dbConfig.mongoUrl, dbConfig.settings);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

const app = express();

app.set('view engine', 'pug');
app.set('views', join(__dirname, 'views'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes config
app.use('/api/songs', songs());
app.use('/api/auth', auth());

// errors handling
app.use(notFound);
app.use(catchErrors);

// let's play!
app.listen(config.server.port, () => {
    console.log(`Server is up!`);
});