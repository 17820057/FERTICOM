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









// const mysql = require('mysql2')

// // Configuracion Conexión a la base de datos MySQL
// const db = mysql.createConnection({ 
//     host: 'localhost',
//     user: 'root',
//     password: 'Nico28095',
//     database: 'FERTICOM'
// });

// //funcion para conectar de la base de datos MySQL
// function conectarDB() {
//     db.connect((error) => {
//         if (error){
//             console.error("Error al conectar la DB: " + error.stack);
//             return;
//         }
//         console.log("Conexion exitosa ID: " + connection.threadId)
//     });
//     return db;
// }

// module.exports = conectarDB();
