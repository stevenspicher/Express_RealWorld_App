const mongoose = require('mongoose');
// import base-model
const baseModel = require('./base-model');
const Schema = mongoose.Schema

const articleScheme = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    taglist: {
        type: [String],
        default: null,
    },
    favoritesCount: {
        type: Number,
        default: 0,
    },
    author: {
        type: Schema.Types.ObjectId, // object
        ref: 'User' // It will map user to User
    },
    ...baseModel
});

module.exports = articleScheme;