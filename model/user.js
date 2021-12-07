const mongoose = require('mongoose');
// import base-model
const baseModel = require('./base-model');

// import md5
const md5 = require('../util/md5');

const userSchema = new mongoose.Schema({
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
        set: value => md5(value),
        select: false // do not select password when reading db
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

module.exports = userSchema;