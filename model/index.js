const mongoose = require('mongoose');

// load our configuration file
const { dbUri } = require('../config/config.defaults');

// connect db
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection

// if fail
db.on('error', err => {
    console.log('MongoDB database connection error', err);
});

// if succeed
db.once('open', function () {
    console.log('MongoDB database connected!');
});

// create model
// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: "Zildjian" });

// kitty.save().then(() => console.log("meow"));

module.exports = {
    User: mongoose.model('User', require('./user')),
    Article: mongoose.model('Article', require('./article'))
}