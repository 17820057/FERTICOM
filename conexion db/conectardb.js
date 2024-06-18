const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ferticom'
});

db.connect(error => {
    if (error) {
        console.error("Error al conectar a la base de datos: " + error.stack);
        return;
    }
    console.log("Conexión exitosa a la base de datos con ID: " + db.threadId);
});

module.exports = db;

