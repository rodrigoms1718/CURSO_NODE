module.exports = function (app) {
    app.get('/noticias', function (req, res) {
        let mysql = require('mysql');
        let connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'portal_noticias'
        });

        connection.query('select * from noticias', function (error, result) {
            res.render('noticias/noticias', { noticias: result });
        });

    });
}