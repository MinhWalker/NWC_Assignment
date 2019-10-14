var express = require('express');
var app = express();

var indexRoute = require('./routes/index.route.js');

var app = express();
var port = process.env.PORT || 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/', indexRoute);

app.listen(port, function(){
    console.log('Server listening on port ' + port);
});
