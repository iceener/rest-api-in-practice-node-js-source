import mongoose from 'mongoose';
import URLSlugs from 'mongoose-url-slugs';

const Song = mongoose.Schema({
    title: String
}, {
   timestamps: true
});

Song.plugin(URLSlugs('title', { field: 'slug', update: true }));

export default mongoose.model('Song', Song);