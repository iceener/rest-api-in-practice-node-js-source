import Song from '../../models/song';
import qs from 'qs';
import _ from 'lodash';

export default function getFilters(req, res, next) {
    const availableFilters = Object.keys(Song.schema.paths);
    const filters = qs.parse(req.query);

    req.filters = _.pickBy(filters, (value, key) => availableFilters.indexOf(key) > -1);
    next();
}