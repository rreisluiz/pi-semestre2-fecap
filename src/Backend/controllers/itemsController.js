const db = require('../db')

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
        const { foto_item, descricao_item, nome_item, categoria_item, estado_uso_item, cpf } = req.body;

        if (!cpf || !nome_item || !descricao_item || !categoria_item || !estado_uso_item || !foto_item) {
            res.status(400).json({ message: 'Todos os campos obrigatórios devem ser preenchidos.' });
        }

        const query = `
            INSERT INTO item (foto_item, descricao_item, nome_item, categoria_item, estado_uso_item, cpf)
            VALUES
            (?, ?, ?, ?, ?, ?)
        `;

        await db.query(query, [foto_item, descricao_item, nome_item, categoria_item, estado_uso_item, cpf], (err, result) => {});

        res.status(200).json({ message: 'Item cadastrado com sucesso!' });
    } catch (error) {
        console.error('Erro ao inserir novo item:', err);
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