const { Article } = require('../model'); // Article

// List Articles
// GET /api/articles
exports.listArticles = async (req, res, next) => {
    try {
        // Deal with request
        res.send('get /articles');
    } catch (err) {
        next(err);
    };
};

exports.feedArticles = async (req, res, next) => {
    try {
        // Deal with request
        res.send('get /articles/feed');
    } catch (err) {
        next(err);
    };
};

exports.getArticle = async (req, res, next) => {
    try {
        // Deal with request
        res.send('get /articles/:slug');
    } catch (err) {
        next(err);
    };
};

exports.createArticle = async (req, res, next) => {
    try {
        // Deal with request
        const article = new Article(req.body.article);
        await article.save();
        res.status(201).json({
            article
        });
        res.send('post /articles');
    } catch (err) {
        next(err);
    };
};

exports.updateArticle = async (req, res, next) => {
    try {
        // Deal with request
        res.send('put /articles/:slug');
    } catch (err) {
        next(err);
    };
};

exports.deleteArticle = async (req, res, next) => {
    try {
        // Deal with request
        res.send('delete /articles/:slug');
    } catch (err) {
        next(err);
    };
};

exports.addComment = async (req, res, next) => {
    try {
        // Deal with request
        res.send('post /articles/:slug/comments');
    } catch (err) {
        next(err);
    };
};

exports.getComment = async (req, res, next) => {
    try {
        // Deal with request
        res.send('get /articles/:slug/comments');
    } catch (err) {
        next(err);
    };
};

exports.deleteComment = async (req, res, next) => {
    try {
        // Deal with request
        res.send('delete /articles/:slug/comments/:id');
    } catch (err) {
        next(err);
    };
};

exports.favoriteArticle = async (req, res, next) => {
    try {
        // Deal with request
        res.send('post /articles/:slug/favorite');
    } catch (err) {
        next(err);
    };
};

exports.unfavoriteArticle = async (req, res, next) => {
    try {
        // Deal with request
        res.send('delete /articles/:slug/favorite');
    } catch (err) {
        next(err);
    };
};