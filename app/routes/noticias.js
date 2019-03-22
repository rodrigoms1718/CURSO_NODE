module.exports = function (app) {
    app.get('/noticias', function (req, res) {
        //referencia que faz a conexao com o BD.
        let connection = app.config.dbConnection();

        connection.query('select * from noticias', function (error, result) {
            res.render('noticias/noticias', { noticias: result });
        });
    });
}