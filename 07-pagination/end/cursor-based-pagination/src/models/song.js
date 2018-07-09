import mongoose from 'mongoose';
import URLSlugs from 'mongoose-url-slugs';
import mongoPagination from 'mongo-cursor-pagination';

const Song = mongoose.Schema({
    title: String
}, {
   timestamps: true
});

Song.plugin(URLSlugs('title', { field: 'slug', update: true }));
Song.plugin(mongoPagination.mongoosePlugin);

export default mongoose.model('Song', Song);