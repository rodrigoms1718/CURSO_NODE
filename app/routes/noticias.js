module.exports = function (application) {
    application.get('/noticias', function (req, res) {
        //referencia que faz a conexao com o BD.
        let connection = application.config.dbConnection();

        let noticiasModel = application.app.models.noticiasModel;

        noticiasModel.getNoticias(connection, function (error, result) {
            res.render('noticias/noticias', { noticias: result });
        });
    });
}