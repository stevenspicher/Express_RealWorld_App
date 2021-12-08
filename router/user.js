const express = require('express');

const userController = require('../controller/user');

// user validator
const userValidator = require('../validator/user');

// Authentication middleware
const auth = require('../middleware/auth');

const router = express.Router();

// Authentication
// POST /api/users/login
router.post('/users/login', userValidator.login, userController.login);

// Registration
// POST /api/users
// express-validator middelware
router.post('/users', userValidator.register, userController.register); // data comes we do validation, then register

// Get Current User
// GET /api/users
router.get('/user', auth, userController.getUser);

// Update User
// PUT /api/user
router.put('/user', auth, userController.updateUser);

// Get Profile
// GET /api/profiles/:username
router.get('/profiles/:username', userController.getProfile);

// Follow User
// POST /api/profiles/:username/follow
router.post('/profiles/:username/follow', userController.followUser);

// Unfollow User
// DELETE /api/profiles/:username/follow
router.delete('/profiles/:username/follow', userController.unfollowUser);

module.exports = router;