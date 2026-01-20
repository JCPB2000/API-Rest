    // módulo mysql
    const mysql = require('mysql');


    const pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: 'j.12345',
        database: 'api_rest',
        port: 3307
    });


    const getConnection = (callback) => {
        pool.getConnection((err, connection) => {
            if (err) {
                console.log('Error al conectar con la base de datos');
                return callback(err);
            }
            callback(null, connection);
        });
    };


    module.exports = getConnection;
