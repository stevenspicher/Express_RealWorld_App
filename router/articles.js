const express = require('express');
const auth = require('../middleware/auth');
const articleController = require('../controller/article');
const articleValidator = require('../validator/article');

const router = express.Router();

// List Articles
// GET /api/articles
router.get('/', articleController.listArticles);

// Feed Articles
// GET /api/articles/feed
router.get('/feed', articleController.feedArticles);

// Get Article
// GET /api/articles/:articleId
router.get('/:articleId', articleValidator.getArticle, articleController.getArticle);

// Create Article
// POST /api/articles
router.post('/', auth, articleValidator.createArticle, articleController.createArticle);

// Update Article
router.put('/:articleId', auth, articleValidator.updateArticle, articleController.updateArticle);

// Delete Article
router.delete('/:articleId', articleController.deleteArticle);

// Add Comments to an Article
router.post('/:articleId/comments', articleController.addComment);

// Get Comments from an Article
router.get('/:articleId/comments', articleController.getComment);

// Delete Comments
router.delete('/:articleId/comments/:id', articleController.deleteArticle);

// Favorite Article
router.post('/:articleId/favorite', articleController.favoriteArticle);

// Unfavorite Article
router.delete('/:articleId/favorite', articleController.unfavoriteArticle);

module.exports = router;