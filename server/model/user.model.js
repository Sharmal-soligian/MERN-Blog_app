const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        default: null,
        min: 4
    },
    password: {
        type: String,
        required: true
    }
},{
    versionKey: false
});

const User = mongoose.model('User', userSchema);
module.exports = User;