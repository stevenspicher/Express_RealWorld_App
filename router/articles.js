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
// GET /api/articles/:slug
router.get('/:slug', articleController.getArticle);

// Create Article
// POST /api/articles
router.post('/', auth, articleValidator.createArticle, articleController.createArticle);

// Update Article
router.put('/:slug', articleController.updateArticle);

// Delete Article
router.delete('/:slug', articleController.deleteArticle);

// Add Comments to an Article
router.post('/:slug/comments', articleController.addComment);

// Get Comments from an Article
router.get('/:slug/comments', articleController.getComment);

// Delete Comments
router.delete('/:slug/comments/:id', articleController.deleteArticle);

// Favorite Article
router.post('/:slug/favorite', articleController.favoriteArticle);

// Unfavorite Article
router.delete('/:slug/favorite', articleController.unfavoriteArticle);

module.exports = router;