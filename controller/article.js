const { Article, User } = require('../model'); // Article

// List Articles
// GET /api/articles
exports.listArticles = async (req, res, next) => {
    try {
        // Deal with request
        // console.log(req.query)
        const {
            limit = 20,
            offset = 0,
            tag,
            author,
            sort
        } = req.query; // 1 get params from clients

        const filter = {}

        // Check tags
        if (tag) {
            filter.tagList = tag;
        };
        // Check author from DB
        if (author) {
            const user = await User.findOne({ username: author });
            filter.author = user ? user._id : null;
        };

        const articles = await Article.find() // find all
            .limit(Number.parseInt(limit))  // How many do you want to get when you retrieve DB.
            .skip(Number.parseInt(offset))  // How many do you want to skip when you retrieving DB.
            .sort({                         // sorting
                // createdAt: 1             // ascending with time
                // createdAt: -1          // descending with time
                createdAt: sort
            }); // How many do you want to skip when retrieving DB.
        // const articleCount = await Article.countDocuments(); // count all articles in the db
        const articleCount = Object.keys(articles).length; // counts the number of printed articles
        res.status(200).json({
            articles,
            articleCount
        });
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
        // 1. get id
        // console.log(req.params.articleId);
        // 2. use id to check db
        const article = await Article.findById(req.params.articleId)
            .populate('author');//.execPopulate() // When retrieving data from the DB we do not need to use
        // execPopulate(), because we are retrieing DB data now.
        if (!article) {
            return res.status(404).end();
        };
        res.status(200).json({
            article
        });
    } catch (err) {
        next(err);
    };
};

exports.createArticle = async (req, res, next) => {
    try {
        // Deal with request
        const article = new Article(req.body.article);
        article.author = req.user._id;
        article.populate('author').execPopulate(); // Return author information instead of userID
        // We use userID to check DB, and find user information.
        await article.save();
        res.status(201).json({
            article
        });
    } catch (err) {
        next(err);
    };
};

exports.updateArticle = async (req, res, next) => {
    try {
        // Deal with request
        const article = req.article; // We have mounted it.
        const bodyArticle = req.body.article;       // req.body.article is the one we mounted to the body
        article.title = bodyArticle.title || article.title;
        article.description = bodyArticle.description || article.description;
        article.body = bodyArticle.body || article.body;
        await article.save();
        res.status(200).json({
            article
        });
    } catch (err) {
        next(err);
    };
};

exports.deleteArticle = async (req, res, next) => {
    try {
        // Deal with request
        const article = req.article; // We have mounted it
        await article.remove();
        res.status(204).end();
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