const db = require('../config/db');
const jwt = require('jsonwebtoken');

exports.createInterest = async (req, res) => {
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

        const { id_item } = req.body;

        if (!cpf || !id_item) {
            return res.status(400).json({ message: 'Todos os campos obrigatórios devem ser preenchidos.' });
        }

        const query = `
            INSERT INTO interesse (data_interesse, cpf, id_item)
            VALUES
            (NOW(), ?, ?)
        `;

        const [result] = await db.query(query, [cpf, id_item]);

        res.status(200).json({ message: 'Interesse cadastrado com sucesso!' });
    } catch (error) {
        console.error('Erro ao inserir novo Interesse:', error);
        res.status(500).json({ message: 'Erro ao cadastrar novo Interesse. Tente novamente mais tarde.' });
    }
}

exports.getInterestedItems = async (req, res) => {
    const cpf = req.params.cpf;
    const query = `SELECT * FROM interesse inter 
                    INNER JOIN item item on item.id_item = inter.id_item
                    INNER JOIN usuario u on u.cpf = item.cpf  
                    WHERE inter.cpf = ?;`;
    const response = await db.query(query, [cpf]);

    const items = await Promise.all(response[0].map( async (item) => {
        const query = `SELECT foto FROM imagens WHERE id_item = ?;`;
        const [images] = await db.query(query, [item.id_item]);

        return {
            id: item.id_item,
            data_interesse: item.data_interesse,
            nome_item: item.nome_item,
            descricao_item: item.descricao_item,
            categoria_item: item.categoria_item,
            estado_uso_item: item.estado_uso_item,
            nome_usuario: item.nome_usuario,
            email_usuario: item.email_usuario,
            telefone: item.telefone,
            bairro: item.bairro,
            cidade: item.cidade,
            uf: item.uf,
            images: images
        }
    }));
    
    console.log(items)
    console.log(items.images)
    
    res.status(200).json(items);
}