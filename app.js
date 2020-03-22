const express = require('express');
const flash = require('express-flash');
const cookieParser = require('cookie-parser');
const webRoute = require('./routes/web');

const app = express();

var port = 5000;

require('dotenv').config();

app.use(express.json());
app.use(cookieParser('keyboard cat'));

app.use(flash());
app.use(express.static('./public'));

// Use the route file
app.use('/', webRoute);

app.listen(port, function () {
    console.log('Server started on port ' + port);
});