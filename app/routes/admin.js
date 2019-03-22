module.exports = function (app) {
    app.get('/formulario_inclusao_noticia', function (req, res) {
        res.render('admin/form_add_noticia');
    });

    app.post('/noticias/salvar', function (req, res) {
        //o body(bodyParser) popula a variavel com o request(req)
        let noticias = req.body;
        res.send(noticias);
    });
}