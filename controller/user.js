const { User } = require('../model');

// Authentication
// POST /api/users/login
exports.login = async (req, res, next) => {
    try {
        // Deal with request
        res.send('post /users/login');
    } catch (err) {
        next(err);
    };
};

// Registration
// POST /api/users
exports.register = async (req, res, next) => {
    try {
        // Deal with request
        // 1. get data
        console.log(req.body);
        // 2. check data

        // 2-1. basic data check: must have username, email, and password
        // 2-2. no duplicate emails and username
        // 3. pass checking data then save data in mongodb
        let user = new User(req.body.user); // create user in DB
        // 3-1. save into db
        await user.save();
        // 4. send ok response
        user = user.toJSON();
        delete user.password;
        res.status(201).json({
            user
        });
    } catch (err) {
        next(err);
    };
};

// Get Current User
// GET /api/users
exports.getUser = async (req, res, next) => {
    try {
        // Deal with request
        // JSON.parse('adfa') // it will have errors
        res.send('get /user');
    } catch (err) {
        next(err);
    };
};

// Update User
// PUT /api/user
exports.updateUser = async (req, res, next) => {
    try {
        // Deal with request
        res.send('put /user');
    } catch (err) {
        next(err);
    };
};

// Get Profile
// GET /api/profiles/:username
exports.getProfile = async (req, res, next) => {
    try {
        // Deal with request
        res.send('get /profiles/:username');
    } catch (err) {
        next(err);
    };
};

// Follow User
// POST /api/profiles/:username/follow
exports.followUser = async (req, res, next) => {
    try {
        // Deal with request
        res.send('post /profiles/:username/follow');
    } catch (err) {
        next(err);
    };
};

// Unfollow User
// DELETE /api/profiles/:username/follow
exports.unfollowUser = async (req, res, next) => {
    try {
        // Deal with request
        res.send('delete /profiles/:username/follow');
    } catch (err) {
        next(err);
    };
};
