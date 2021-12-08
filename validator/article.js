const { body } = require('express-validator');
const validate = require('../middleware/validate');

exports.createArticle = validate([
    body('article.title').notEmpty().withMessage('Article title cannot be empty'),
    body('article.description').notEmpty().withMessage('Article description cannot be empty'),
    body('article.body').notEmpty().withMessage('Article body cannot be empty')
]);