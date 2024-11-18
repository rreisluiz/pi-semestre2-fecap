const db = require('../config/db')

exports.createInterest = async (req, res) => {
    try {
        const { cpf, id_item } = req.body;

        if (!cpf || !id_item) {
            res.status(400).json({ message: 'Todos os campos obrigatórios devem ser preenchidos.' });
        }

        const query = `
            INSERT INTO interesse (data_interesse, cpf, id_item)
            VALUES
            (NOW(), ?, ?)
        `;

        await db.query(query, [cpf, id_item], (err, result) => {});

        res.status(200).json({ message: 'Interesse cadastrado com sucesso!' });
    } catch (error) {
        console.error('Erro ao inserir novo Interesse:', err);
        res.status(500).json({ message: 'Erro ao cadastrar novo Interesse. Tente novamente mais tarde.' });
    }
}

exports.verifyInterest = async (req, res) => {
    // Verifica se o usuário logado já demonstrou interesse pelo item quando ele estiver na tela
}