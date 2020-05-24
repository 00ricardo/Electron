function login() {
    const mysql = require('mysql')
    const connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'nodelogin'
    });
    connection.connect(function(err) {
        if (err) {
            console.log(err.code);
            console.log(err.fatal);
        }
        console.log("Conexão efetuada")
    })
    var username = document.getElementById("username").value;
    var pass = document.getElementById("pass").value;
    var query = "SELECT * FROM accounts WHERE username='" + username + "' and password='" + pass + "'";
    connection.query(query, function(err, result, fields) {
        if (err) {
            console.log("Erro na query.");
        }
        console.log(result);
        if (result.length == 0) {
            alert("Os dados não estão corretos.")
            window.location.replace("./login.html")
        } else {
            sessionStorage.setItem("idUser", result[0].id);
            sessionStorage.setItem("typeUser", result[0].type);
            window.location.replace("./AdminLTE-3.0.5/index.html")
            alert("Login efetuado.")
        }
    });
    //Fechar coneção DB
    connection.end(function() {
        console.log('Conexão concluida.');
    });
}