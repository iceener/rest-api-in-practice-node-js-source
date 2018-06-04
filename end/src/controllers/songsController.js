import Song from '../models/song';

export default {
    async findOne(req, res, next) {
        const song = await Song.findOne({ slug: req.params.slug });
        console.log(song);
        if (!song) return next();
        return res.status(200).send({ data: song });
    },

    async findAll(req, res) {
        const songs = await Song.find().sort({ createdAt: 'desc' });
        return res.status(200).send({ data: songs });
    },

    async create(req, res) {
        const song = await new Song({
            title: req.body.title
        }).save();

        return res.status(201).send({ data: song, message: `Song was created` });
    },

    async update(req, res, next) {
        const song = await Song.find({ 'slug': req.params.slug });
        if (!song) return next();

        song.title = req.body.title;
        await song.save();

        return res.status(200).send({ data: song, message: `Song was updated` });
    },

    async remove(req, res, next) {
        const song = await Song.findOne({ 'slug': req.params.slug });
        if (!song) return next();
        await song.remove();

        console.log(song);

        return res.status(200).send({ message: `Song was removed` });
    }
}