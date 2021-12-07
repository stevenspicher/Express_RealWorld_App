const mongoose = require('mongoose');
// import base-model
const baseModel = require('./base-model');

const articleScheme = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
        default: null,
    },
    image: {
        type: String,
        default: null,
    },
    ...baseModel
});

module.exports = articleScheme;