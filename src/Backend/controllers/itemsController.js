const db = require('../config/db')
const jwt = require('jsonwebtoken');

exports.getAllItems = async (req, res) => {
    const query = `SELECT * FROM item;`;
    const response = await db.query(query);

    const items = await Promise.all(response[0].map( async (item) => {
        const query = `SELECT foto FROM imagens WHERE id_item = ?;`;
        const [images] = await db.query(query, [item.id_item]);

        return {
            id: item.id_item,
            nome_item: item.nome_item,
            descricao_item: item.descricao_item,
            categoria_item: item.categoria_item,
            estado_uso_item: item.estado_uso_item,
            images: images
        }
    }));

    console.log(items)

    res.status(200).json(items);
}

exports.getItemById = async (req, res) => {
    const itemId = req.params.id;
    const query = `SELECT * FROM item WHERE id_item = ?;`;
    const response = await db.query(query, [itemId]);

    const items = await Promise.all(response[0].map( async (item) => {
        const query = `SELECT foto FROM imagens WHERE id_item = ?;`;
        const [images] = await db.query(query, [item.id_item]);

        return {
            id: item.id_item,
            nome_item: item.nome_item,
            descricao_item: item.descricao_item,
            categoria_item: item.categoria_item,
            estado_uso_item: item.estado_uso_item,
            images: images
        }
    }));

    console.log(items);
    console.log(items.images)

    res.status(200).json(items);
}

exports.getItemsByUser = async (req, res) => {
    const cpf = req.params.cpf;
    const query = `SELECT * FROM item WHERE CPF = ?;`;
    const response = await db.query(query, [cpf]);

    const items = await Promise.all(response[0].map( async (item) => {
        const query = `SELECT foto FROM imagens WHERE id_item = ?;`;
        const [images] = await db.query(query, [item.id_item]);

        return {
            id: item.id_item,
            nome_item: item.nome_item,
            descricao_item: item.descricao_item,
            categoria_item: item.categoria_item,
            estado_uso_item: item.estado_uso_item,
            images: images
        }
    }));
    
    console.log(items)
    console.log(items.images)
    
    res.status(200).json(items);
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
        const { descricao_item, nome_item, categoria_item, estado_uso_item, images } = req.body;

        if (!descricao_item || !nome_item || !categoria_item || !estado_uso_item) {
            return res.status(400).json({ message: 'Campos obrigatórios ausentes.' });
        }

        if (!req.files) {
            return res.status(400).json({ message: 'Imagens não encontradas!' });
        }

        const query = `
            INSERT INTO item (descricao_item, nome_item, categoria_item, estado_uso_item, cpf)
            VALUES (?, ?, ?, ?, ?)
        `;

        const [result] = await db.query(query, [descricao_item, nome_item, categoria_item, estado_uso_item, cpf]);
        console.log('Item inserido:', result);

        const itemId = result.insertId;

        req.files.forEach(async image => {
            const query = `
                INSERT INTO imagens (foto, id_item)
                VALUES (?, ?)
            `;

            const response = await db.query(query, [image.filename, itemId]);
            console.log('Imagem inserida:', response);
        });

        res.status(200).json({ message: 'Item cadastrado com sucesso!' });
    } catch (error) {
        console.error('Erro ao cadastrar item:', error.message);

        // Verifique se o erro é relacionado ao token
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: 'Token inválido.' });
        } else if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token expirado.' });
        }

        res.status(500).json({ message: 'Erro ao cadastrar o item.' + error.message });
    }
};


exports.updateItem = async (req, res) => {
    try {
        const id_item = req.params.id;
        const {nome_item, categoria_item, estado_uso_item, descricao_item} = req.body;

        if (!id_item || !nome_item || !descricao_item || !categoria_item || !estado_uso_item) {
            res.status(400).json({ message: 'Todos os campos obrigatórios devem ser preenchidos.' });
        }

        const query = `
            UPDATE
                item 
            SET 
                nome_item = ?,
                descricao_item = ?,
                categoria_item = ?,
                estado_uso_item = ?
            WHERE 
                id_item = ?
        `;

        const [result] = await db.query(query, [nome_item, descricao_item, categoria_item, estado_uso_item, id_item]);

        res.status(200).json({ message: 'Item atualizado com sucesso!: ' });
    } catch (error) {
        console.error('Erro ao atualizar item:', error);
        res.status(500).json({ message: 'Erro ao atualizar item. Tente novamente mais tarde.' });
    }  
}

exports.deleteItem = async (req, res) => {
    const itemId = req.params.id;

    const queryImages = `
        DELETE FROM
            imagens
        WHERE 
            id_item = ?
    `;

    const responseImages = await db.query(queryImages, [itemId]);

    const query = `
        DELETE FROM
            item
        WHERE 
            id_item = ?
    `;

    const response = await db.query(query, [itemId]);


    res.status(200).json(response);   
}