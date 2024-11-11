const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');
require('dotenv').config();
const bcrypt = require('bcrypt');

// Middleware para processar dados no formato JSON
app.use(express.json());

// Configuração do CORS
app.use(cors({
    origin: 'http://localhost:3000', // Permite solicitações do frontend
    optionsSuccessStatus: 200
}));

// Conexão com o banco de dados MySQL
const db = mysql.createConnection({
    host: 'localhost', // Host do banco de dados
    user: 'root', // Usuário do MySQL (substitua conforme seu ambiente)
    password: '', // Senha do MySQL (substitua conforme seu ambiente)
    database: 'repasseco', // Nome do banco de dados
    port: 3308
});

// Conectar ao banco de dados
db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar no banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL');
});

// Endpoint para cadastro de usuário
app.post('/users/add', (req, res) => {
    const { CPF, nome_usuario, email_usuario, senha_usuario, data_nascimento_usuario, logradouro, complemento, bairro, uf, cidade, estado, telefone } = req.body;

    // Verifica se todos os dados necessários foram enviados
    if (!CPF || !nome_usuario || !email_usuario || !senha_usuario || !data_nascimento_usuario) {
        return res.status(400).json({ message: 'Todos os campos obrigatórios devem ser preenchidos.' });
    }

    // Hash da senha antes de salvar no banco
    bcrypt.hash(senha_usuario, 10, (err, hashedPassword) => {
        if (err) {
            return res.status(500).json({ message: 'Erro ao criar a senha. Tente novamente.' });
        }

        // SQL para inserir o usuário na tabela 'usuario', agora com a senha hash
        const query = `
            INSERT INTO usuario (CPF, nome_usuario, email_usuario, senha_usuario, data_nascimento_usuario, logradouro, complemento, bairro, uf, cidade, estado, telefone)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        // Executa a query para inserir os dados no banco de dados
        db.query(query, [CPF, nome_usuario, email_usuario, hashedPassword, data_nascimento_usuario, logradouro, complemento, bairro, uf, cidade, estado, telefone], (err, result) => {
            if (err) {
                console.error('Erro ao inserir usuário:', err);
                return res.status(500).json({ message: 'Erro ao cadastrar o usuário. Tente novamente mais tarde.' });
            }

            // Se tudo der certo, responde com sucesso
            res.status(200).json({ message: 'Usuário cadastrado com sucesso!' });
        });
    });
});

// Endpoint para login de usuário
// Endpoint para login de usuário
app.post('/users/login', (req, res) => {
    const { email_usuario, senha_usuario } = req.body;

    // Consulta SQL para verificar se o email existe
    const query = 'SELECT * FROM usuario WHERE email_usuario = ?';
    db.query(query, [email_usuario], (err, results) => {
        if (err) {
            console.error('Erro ao verificar o email:', err);
            return res.status(500).json({ message: 'Erro ao realizar o login. Tente novamente.' });
        }

        // Se não encontrar o usuário
        if (results.length === 0) {
            return res.status(404).json({ message: 'Usuário não encontrado. Verifique suas credenciais.' });
        }

        const user = results[0];

        // Comparar as senhas (se estiver usando bcrypt, por exemplo)
        bcrypt.compare(senha_usuario, user.senha_usuario, (err, result) => {
            if (err) {
                console.error('Erro ao comparar senhas:', err);
                return res.status(500).json({ message: 'Erro ao realizar o login. Tente novamente.' });
            }

            if (!result) {
                return res.status(401).json({ message: 'Senha incorreta. Tente novamente.' });
            }

            // Se o login for bem-sucedido
            return res.status(200).json({ message: 'Login bem-sucedido!' });
        });
    });
});


// Porta do servidor
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
