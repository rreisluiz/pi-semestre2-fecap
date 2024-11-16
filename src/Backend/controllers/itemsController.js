const db = require('../db')
const jwt = require('jsonwebtoken');

exports.getAllItems = async (req, res) => {
    const query = `SELECT * FROM item;`;
    const response = await db.query(query);
    res.status(200).json(response[0]);
}

exports.getItemById = async (req, res) => {
    const itemId = req.params.id;
    const query = `SELECT * FROM item WHERE id_item = ?;`;
    const response = await db.query(query, [itemId]);
    res.status(200).json(response[0]);
}

exports.getItemsByUser = async (req, res) => {
    const cpf = req.params.cpf;
    const query = `SELECT * FROM item WHERE cpf = ?;`;
    const response = await db.query(query, [cpf]);
    res.status(200).json(response[0]);
}

exports.addItem = async (req, res) => {

    try {
        // 1. Obter o token do header da requisição
        const token = req.headers.authorization;

        // 2. Verificar se o token foi fornecido
        if (!token) {
            // Adicionar headers CORS na resposta
            res.set({
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Access-Control-Allow-Methods': 'POST',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization'
            });
            return res.status(401).json({ message: 'Token não fornecido' });
        }

        // 3. Decodificar o token
        const decoded = jwt.verify(token, 'senha_de_fallback'); // Substitua 'seu_segredo' pelo segredo do JWT

        // 4. Acessar o CPF do usuário no payload
        const cpf = decoded.id; // 'id' é a propriedade que você usou para armazenar o CPF no payload
        console.log(cpf)
        // 5. Usar o CPF para inserir o item no banco de dados
        const { foto_item, descricao_item, nome_item, categoria_item, estado_uso_item } = req.body;

        if (!cpf || !nome_item || !descricao_item || !categoria_item || !estado_uso_item || !foto_item) {
            // Adicionar headers CORS na resposta
            res.set({
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Access-Control-Allow-Methods': 'POST',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization'
            });
            return res.status(400).json({ message: 'Todos os campos obrigatórios devem ser preenchidos.' });
        }

        const query = `
            INSERT INTO item (foto_item, descricao_item, nome_item, categoria_item, estado_uso_item, cpf)
            VALUES
            (?, ?, ?, ?, ?, ?)
          `;

        await db.query(query, [foto_item, descricao_item, nome_item, categoria_item, estado_uso_item, cpf], (err, result) => { });

        // Adicionar headers CORS na resposta
        res.set({
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        });
        res.status(200).json({ message: 'Item cadastrado com sucesso!' });

    } catch (error) {
        console.error('Erro ao inserir novo item:', error);
        // Adicionar headers CORS na resposta
        res.set({
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        });
        res.status(500).json({ message: 'Erro ao cadastrar o novo item. Tente novamente mais tarde.' });
    }
}


exports.updateItem = async (req, res) => {
    try {
        const id_item = req.params.id;
        const { foto_item, descricao_item, nome_item, categoria_item, estado_uso_item, cpf } = req.body;

        if (!id_item || !nome_item || !descricao_item || !categoria_item || !estado_uso_item || !foto_item) {
            res.status(400).json({ message: 'Todos os campos obrigatórios devem ser preenchidos.' });
        }

        const query = `
            UPDATE
                item 
            SET
                foto_item = ?, 
                descricao_item = ?,
                nome_item = ?,
                categoria_item = ?,
                estado_uso_item = ?
            WHERE 
                id_item = ?
        `;

        await db.query(query, [foto_item, descricao_item, nome_item, categoria_item, estado_uso_item, id_item], (err, result) => {});

        res.status(200).json({ message: 'Item atualizado com sucesso!' });
    } catch (error) {
        console.error('Erro ao atualizar item:', err);
        res.status(500).json({ message: 'Erro ao atualizar item. Tente novamente mais tarde.' });
    }  
}

exports.deleteItem = async (req, res) => {
    const itemId = req.params.id;

    const query = `
        DELETE FROM
            item
        WHERE 
            id_item = ?
    `;

    const response = await db.query(query, [itemId]);

    res.status(200).json(response);   
}