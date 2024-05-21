function doThings() {
    // let name = document.querySelector("#name").value;
    // let surname = document.querySelector("#surname").value;
    // let pesel = document.querySelector("#pesel").value;

    let name = "jan";
    let surname = "kowalski";
    let pesel = "12345678910";

    var mysql = require("mysql")

    var connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'mariadb',
        password: 'mariadb',
        database: 'mariadb'
    })

    connection.query("INSERT INTO ludzie VALUES (NULL, " + name + ", " + surname + ", " + pesel + ");")

    connection.end();
}