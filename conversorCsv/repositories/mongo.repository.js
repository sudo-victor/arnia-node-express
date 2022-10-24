const { ObjectId } = require("mongodb");

// A classe MongoRepository deverá receber o parâmetro db no construtor e 3 métodos
// constructor:
//          Parâmetro: db(client.db)
// getAll:
//         Parâmetro: collection(string)
//         Retorno: array
// getOne:
//         Parâmetro: collection(string), id(string)
//         Retorno: object
// create:
//         Parâmetro: collection(string), data(object)
//         Retorno: 

class MongoRepository {}

module.exports = { MongoRepository };