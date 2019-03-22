let mysql = require('mysql');

//assim evita que seja aberta conexao a cada requisicao.
let connMySql = function () {
    console.log('conexao com o bd estabelecida');
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'portal_noticias'
    });
}

module.exports = function () {
    console.log('o autoload carregou o modulo de conexao com o bd');
    return connMySql;
}