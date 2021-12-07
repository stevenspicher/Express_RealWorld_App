const express = require('express');
const router = express.Router();
const tagsController = require('../controller/tags');

// Get Tags
// GET /api/tags
router.get('/tags', tagsController.getTags);

module.exports = router;