const express = require('express');
const router = express.Router();

// User related router
router.use(require('./user'));

// Article related router
router.use("/articles", require('./articles'));

// Tag related router
router.use(require('./tags'));

router.get('/', (req, res) => {
    res.send('get /');
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.send('post /');
});

module.exports = router;