// arrow function - abreviar uma função
module.exports= (req, res) => { //req - requisição, res - resposta
    return res.status(200).json({ //status - status da resposta, json - resposta em formato json
        message: "API online!" //mensagem a ser retornada
    });
}