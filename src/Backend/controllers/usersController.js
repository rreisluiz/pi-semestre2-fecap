const db = require('../db')
const bcrypt = require('bcrypt');

exports.createUser = async (req, res) => {
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
}

exports.loginUser = async (req, res) => {
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
}

exports.deleteUser = async (req, res) => {
    
}