const express = require('express');

// App1: Port number 1000
const app = express();
app.use(express.static(__dirname));
app.listen(1000);

// App2: Port number 2000
const app2 = express();
app2.get('/', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*')
    res.send("Hello");
});
app2.listen(2000);