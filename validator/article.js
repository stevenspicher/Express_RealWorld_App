const { body, param } = require('express-validator');
const mongoose = require('mongoose');
const validate = require('../middleware/validate');

exports.createArticle = validate([
    body('article.title').notEmpty().withMessage('Article title cannot be empty'),
    body('article.description').notEmpty().withMessage('Article description cannot be empty'),
    body('article.body').notEmpty().withMessage('Article body cannot be empty')
]);

exports.getArticle = validate([
    param('articleId').custom(async value => {
        if (!mongoose.isValidObjectId(value)) {
            return Promise.reject('ArticleID Type Error.');
        };
    })
]);

// update article (Not the best choice)
exports.updateArticle = validate([
    validate.isValidObjectId(['param'], 'articleId') // articleId is from our Router.
                                                    // router.put('./:articleId')
]);