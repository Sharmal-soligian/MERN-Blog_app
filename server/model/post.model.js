const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String
    },
    summary: {
        type: String
    },
    content: {
        type: String
    },
    cover: {
        type: String
    },
    author: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    }
},
{
    versionKey: false,
    timestamps: true
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;