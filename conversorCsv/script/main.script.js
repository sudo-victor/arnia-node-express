const { MongoClient } = require('mongodb');
const { config } = require('dotenv');
const { MongoRepository } = require('../repositories/mongo.repository');
const { MainService } = require('../services/main.service');
const { csvData } = require('./csv.script');
config();

async function script() {
    const url = process.env.MONGO_URL;
    console.log(url)
    const client = new MongoClient(url);
    const db = client.db("test");
    const csvCollection = "pokemons";
    console.log("Variaveis globais instanciadas");

    function factory() {
        const mongoRepository = new MongoRepository(db);
        const mainService = new MainService(mongoRepository);
        return mainService;
    }
    const service = factory();
    console.log("camada de serviços instanciada");

    await client.connect();
    console.log("conectado ao banco de dados");

    // Faça uma iteração pelos dados recebidos no csvData e persista no banco de dados
    console.log("dados inseridos no banco de dados");

    console.log("Conexão encerrada");
}

module.exports = { script };