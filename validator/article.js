const { body, param } = require('express-validator');
const mongoose = require('mongoose');
const validate = require('../middleware/validate');
const { Article } = require('../model');

exports.createArticle = validate([
    body('article.title').notEmpty().withMessage('Article title cannot be empty'),
    body('article.description').notEmpty().withMessage('Article description cannot be empty'),
    body('article.body').notEmpty().withMessage('Article body cannot be empty')
]);

// Get article
exports.getArticle = validate([
    validate.isValidObjectId(['params'], 'articleId')
]);

// update article (Not the best choice)
exports.updateArticle =
    [
        validate(
            [
                validate.isValidObjectId(['params'], 'articleId') // articleId is from our Router.
                // router.put('./:articleId')
            ]
        ),
        // Can we find this article?
        async (req, res, next) => {
            const articleId = req.params.articleId;
            const article = await Article.findById(articleId);
            if (!article) {
                return res.status(404).end();
            };
            req.article = article // Mount article
            // console.log(article);
            next();
        },
        // Is the right author?
        async (req, res, next) => {
            if (req.user._id.toString() !== req.article.author.toString()) {
                return res.status(403).end();
            };
            next(); // Make sure to pass control to next middleware
        },
    ]

// Delete Article
exports.deleteArticle = exports.updateArticle;