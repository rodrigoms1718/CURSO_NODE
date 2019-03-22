var express = require('express');
let consign = require('consign');
let bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

//middleware
//informacoes transitadas via post
app.use(bodyParser.urlencoded({ extended: true }));

//varre todas as rotas do app
consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .into(app);

module.exports = app;