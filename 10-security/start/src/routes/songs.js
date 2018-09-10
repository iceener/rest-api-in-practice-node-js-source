import { Router } from 'express';
import { catchAsync } from "../middlewares/errors";
import songsController from '../controllers/songsController';
import getFilters from '../middlewares/filters/songs';

export default () => {
    const api = Router();

    // GET /songs/:slug
    api.get('/:slug', catchAsync(songsController.findOne));

    // GET /songs
    api.get('/', getFilters, catchAsync(songsController.findAll));

    // POST /songs
    api.post('/', catchAsync(songsController.create));

    // PUT /songs/:slug
    api.put('/:slug', catchAsync(songsController.update));

    // DELETE /songs/:slug
    api.delete('/:slug', catchAsync(songsController.remove));

    return api;
}