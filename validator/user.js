const { body } = require('express-validator');
const validate = require('../middleware/validate');
const { User } = require('../model');
const md5 = require('../util/md5');

exports.register = validate([
    // username
    body('user.username')
        .notEmpty().withMessage('Username cannot be empty')     // check not empty username
        .bail()
        .custom(async username => {         // check no duplicate username
            const user = await User.findOne({ username });
            if (user) {
                return Promise.reject('Username taken');
            };
        }),
    // password
    body('user.password').notEmpty().withMessage('Password cannot be empty'),
    // email
    body('user.email')
        .notEmpty().withMessage('Email cannot be empty') // check not empty
        .isEmail().withMessage('Email format is not correct') // check email format
        .bail()                              // It will stop here if did not pass prior validation
        .custom(async email => {                            // check no duplicate email
            const user = await User.findOne({ email });
            if (user) {
                return Promise.reject('Email already exists');
            };
        }),
]);

exports.login = [
    validate([  // username/password exists?
        body('user.email').notEmpty().withMessage('Email cannot be empty'),
        body('user.password').notEmpty().withMessage('Password cannot be empty')
    ]),
    validate([  // Does email exist in the db?
        body('user.email').custom(async (email, { req }) => {
            // const user = await User.findOne({ email }).select('password'); select password if you need it
            const user = await User.findOne({ email })
                .select(['email', 'username', 'bio', 'image', 'password'])
            if (!user) {
                return Promise.reject('User does not exist')
            };
            // After finding out this user using email
            req.user = user // Mount data to req object, so the following middleware can use the data
        })
    ]),
    validate([  // check password 
        body('user.password').custom(async (password, { req }) => {
            if (md5(password) !== req.user.password) {
                return Promise.reject('Password is not correct');
            }
        })
    ])
];
