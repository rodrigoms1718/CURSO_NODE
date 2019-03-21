var http = require('http');

var server = http.createServer(function (req, res) {
    var categoria = req.url;

    if (categoria == '/tecnologia') {
        req.end(<html><body>Noticias de Tecnologia</body></html>)
    } else if (categoria == '/moda') {
        req.end(<html><body>Noticias de Moda</body></html>)
    } else if (categoria == '/beleza') {
        req.end(<html><body>Noticias de Beleza</body></html>)
    } else {
        req.end(<html><body>Noticias de Noticias</body></html>)
    }
}).listen(3000);