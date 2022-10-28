
// A classe MongoRepository deverá receber o parâmetro mongoRepository no construtor e 3 métodos
// constructor:
//          Parâmetro: mongoRepository(instancia do repositório do mongo)
// getAll:
//         Parâmetro: collection(string)
//         Retorno: array
// getOne:
//         Parâmetro: collection(string), id(string)
//         Retorno: object
// create:
//         Parâmetro: collection(string), data(object)
//         Retorno: 

class MainService {
    constructor(repository) {
        this.repository = repository
    }

    async create(data) {
        try {
            return await this.repository.create("pokemons", data)
        } catch (error) {
            throw new Error('Error creating pokemon')
        }
    }
}

module.exports = { MainService };