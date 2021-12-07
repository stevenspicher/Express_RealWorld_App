// Get Tags
// GET /api/tags
exports.getTags = async (req, res, next) => {
    try {
        // Deal with request
        res.send('get /tags');
    } catch (err) {
        next(err);
    };
};