const { verify } = require('../util/jwt');
const { jwtSecret } = require('../config/config.defaults');
const { User } = require('../model');

module.exports = async (req, res, next) => {
    // 1. Get token from request header.
    let token = req.headers['authorization'];
    token = token ? token.split('Bearer ')[1] : null // get second part of the string

    // 2. Verify if token is invalid.
    if (!token) { // if we don't have token, reject

        // 3. If invalid -> respond 401 invalid.
        return res.status(401).end();
    }

    // 4. If valid -> read user info (by checking db) then mount user info to the req. Then continue...
    try {
        const decodedToken = await verify(token, jwtSecret);
        // console.log(decodedToken);
        req.user = await User.findById(decodedToken.userID); // mount user info to the req, so the following middleware can use it.
        next();
    } catch (error) {
        return res.status(401).end(); // reject
    }
};