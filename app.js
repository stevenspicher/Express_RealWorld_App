const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./router');

// error middleware
const errorHandler = require('./middleware/error-handler');

// DB
require('./model');

const PORT = 3000; // Port Number

const app = express();

// configure morgan logger
app.use(morgan('tiny'));

// config body parser
app.use(express.json());

// config cors
// CORS: Cross-Origin Resource Sharing
app.use(cors());

// load router
app.use('/api', router);

// load error handler middleware
app.use(errorHandler());

app.listen(PORT, () => console.log(`Server is running on port http://localost:${PORT}`));