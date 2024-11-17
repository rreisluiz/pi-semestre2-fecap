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
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Token ausente ou malformado.' });
        }

        const token = authHeader.split(' ')[1];

        // Verificação do token com o segredo do ambiente
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log('Token decodificado:', decoded);

        const cpf = decoded.id;
        const { foto_item, descricao_item, nome_item, categoria_item, estado_uso_item } = req.body;

        if (!foto_item || !descricao_item || !nome_item || !categoria_item || !estado_uso_item) {
            return res.status(400).json({ message: 'Campos obrigatórios ausentes.' });
        }

        const query = `
            INSERT INTO item (foto_item, descricao_item, nome_item, categoria_item, estado_uso_item, cpf)
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        const response = await db.query(query, [foto_item, descricao_item, nome_item, categoria_item, estado_uso_item, cpf]);
        console.log('Item inserido:', response);

        res.status(200).json({ message: 'Item cadastrado com sucesso!' });
    } catch (error) {
        console.error('Erro ao cadastrar item:', error.message);

        // Verifique se o erro é relacionado ao token
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: 'Token inválido.' });
        } else if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token expirado.' });
        }

        res.status(500).json({ message: 'Erro ao cadastrar o item.' });
    }
};


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