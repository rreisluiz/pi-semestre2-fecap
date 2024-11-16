const db = require('../db')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.createUser = async (req, res) => {
    const { CPF, nome_usuario, email_usuario, senha_usuario, data_nascimento_usuario, logradouro, complemento, bairro, uf, cidade, estado, telefone } = req.body;

    // Verifica se todos os dados necessários foram enviados
    if (!CPF || !nome_usuario || !email_usuario || !senha_usuario || !data_nascimento_usuario) {
        return res.status(400).json({ message: 'Todos os campos obrigatórios devem ser preenchidos.' });
    }

    try {
        // Verifica se o CPF já existe
        const checkCpfQuery = 'SELECT * FROM usuario WHERE CPF = ?';
        const [results] = await db.query(checkCpfQuery, [CPF]);

        if (results.length > 0) {
            return res.status(400).json({ message: 'CPF já cadastrado.' });
        }

        // Se o CPF não existe, prossegue com o cadastro
        bcrypt.hash(senha_usuario, 10, async (err, hashedPassword) => {
            if (err) {
                return res.status(500).json({ message: 'Erro ao criar a senha. Tente novamente.' });
            }

            const query = `
                INSERT INTO usuario (CPF, nome_usuario, email_usuario, senha_usuario, data_nascimento_usuario, logradouro, complemento, bairro, uf, cidade, estado, telefone)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;

            await db.query(query, [CPF, nome_usuario, email_usuario, hashedPassword, data_nascimento_usuario, logradouro, complemento, bairro, uf, cidade, estado, telefone]);

            res.status(200).json({ message: 'Usuário cadastrado com sucesso!' });
        });
    } catch (error) {
        console.error('Erro ao inserir usuário:', error);
        return res.status(500).json({ message: 'Erro ao cadastrar o usuário. Tente novamente mais tarde.' });
    }
}

function generateToken(user) {
    // 1. Definir a payload do token (dados do usuário)
    const payload = {
      id: user.CPF, // CPF do usuário
      nome: user.nome_usuario, // Nome do usuário
    };
  
    // 2. Definir o segredo do token (armazenar em .env ou variáveis de ambiente)
    const secret = process.env.JWT_SECRET;
  
    // 3. Definir as opções do token (ex: tempo de expiração)
    const options = {
      expiresIn: '1h', // Token expira em 1 hora
      // ... outras opções
    };
  
    // 4. Gerar o token
    const token = jwt.sign(payload, secret, options);
  
    return token;
}

exports.loginUser = async (req, res) => {
    console.log("Início da função loginUser");
    const { email_usuario, senha_usuario } = req.body;

    // Consulta SQL para verificar se o email existe
    const query = 'SELECT * FROM usuario WHERE email_usuario = ?';
    
    try {
        const [results] = await db.query(query, [email_usuario]);

        if (results.length === 0) {
            return res.status(404).json({ message: 'Usuário não encontrado. Verifique suas credenciais.' });
        }

        const user = results[0];

        // Comparar as senhas 
        bcrypt.compare(senha_usuario, user.senha_usuario, (err, result) => {
            if (err) {
                console.error('Erro ao comparar senhas:', err);

                // Adicionar headers CORS na resposta
                res.set({
                    'Access-Control-Allow-Origin': 'http://localhost:3000',
                    'Access-Control-Allow-Methods': 'POST',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
                });

                return res.status(500).json({ message: 'Erro ao realizar o login. Tente novamente.' });
            } 

            if (!result) {

                // Adicionar headers CORS na resposta
                res.set({
                    'Access-Control-Allow-Origin': 'http://localhost:3000',
                    'Access-Control-Allow-Methods': 'POST',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
                });

                return res.status(401).json({ message: 'Senha incorreta. Tente novamente.' });
            }
            const token = generateToken(user);

            // Adicionar headers CORS na resposta
            res.set({
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Access-Control-Allow-Methods': 'POST',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization'
            });

            // Se o login for bem-sucedido
            return res.status(200).json({ 
                message: 'Login bem-sucedido!', 
                token: token // Inclui o token na resposta
              });
        });

    } catch (err) {
        console.error('Erro ao verificar o email:', err);

        // Adicionar headers CORS na resposta
        res.set({
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        });

        return res.status(500).json({ message: 'Erro ao realizar o login. Tente novamente.' });
    }
}

exports.getNomeUsuario = async (req, res) => {
    try {
      const token = req.headers.authorization;
  
      if (!token) {
        return res.status(401).json({ message: 'Token não fornecido' });
      }
  
      const decoded = jwt.verify(token, process.env.JWT_SECRET);   
  
      const cpf = decoded.id; // Obtém o CPF do token
  
      const query = 'SELECT nome_usuario FROM usuario WHERE CPF = ?';
      const [rows] = await db.query(query, [cpf]);
  
      if (rows.length === 0) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }
  
      const nomeUsuario = rows[0].nome_usuario;
      res.status(200).json({ nome: nomeUsuario });
  
    } catch (error) {
      console.error('Erro ao obter nome do usuário:', error);
      res.status(500).json({ message: 'Erro ao obter nome do usuário' });
    }
  };
  
exports.deleteUser = async (req, res) => {
    
}