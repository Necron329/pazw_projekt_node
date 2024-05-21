function doThings() {
    let name = document.querySelector("#name").value;
    let surname = document.querySelector("#surname").value;
    let pesel = document.querySelector("#pesel").value;

    var mysql = require("mysql")

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'kurs_node'
    })

    connection.query("INSERT INTO ludzie VALUES (NULL, " + name + ", " + surname + ", " + pesel + ");")

    connection.end();
}