module.exports = function (app) {
    app.get('/noticia', function (req, res) {
        //referencia que faz a conexao com o BD.
        let connection = app.config.dbConnection();

        let noticiasModel = app.app.models.noticiasModel;

        noticiasModel.getNoticia(connection, function (error, result) {
            res.render('noticias/noticia', { noticia: result });
        });
    });
}