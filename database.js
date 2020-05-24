//DB
const mysql = require('mysql')
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'nodelogin' //nome da base de dados
})
connection.connect(function(err) {
    if (err) {
        console.log(err.code);
        console.log(err.fatal);
    }
    console.log("Conexão efetuada")
})

var query = 'SELECT * FROM accounts';
connection.query(query, function(err, result, fields) {
    if (err) {
        console.log("Erro na query.");
    }
    console.log(result[0].id)
});


//Fechar coneção DB
connection.end(function() {
    console.log('Conexão concluida.');
});