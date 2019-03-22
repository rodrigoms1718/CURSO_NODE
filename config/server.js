var express = require('express');
let consign = require('consign');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views')

//varre todas as rotas do app
consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .into(app);

module.exports = app;