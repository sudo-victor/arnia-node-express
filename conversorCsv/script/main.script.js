const { MongoClient } = require('mongodb');
const { config } = require('dotenv');
const { MongoRepository } = require('../repositories/mongo.repository');
const { MainService } = require('../services/main.service');
const { csvData } = require('./csv.script');
config();

async function script() {
    // Instancie as variáveis de configruaçao do banco de dados
    console.log("Variaveis globais instanciadas");

    // Instancie o serviço e suas camadas
    console.log("camada de serviços instanciada");

    // Conecte com o banco de dados
    console.log("conectado ao banco de dados");

    // Faça uma iteração pelos dados recebidos no csvData e persista no banco de dados
    console.log("dados inseridos no banco de dados");

    // Encerre a conexao do banco de dados
    console.log("Conexão encerrada");
}

module.exports = { script };