const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3308,
});

async function testConnection() {
    try {
        const connection = await pool.getConnection();
        console.log('Base de Dados conectada com sucesso.');
        connection.release();
    } catch (error) {
        console.error('Erro ao conectar na Base de Dados:', error);
    }
}
testConnection();

module.exports = pool;