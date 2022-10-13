
function carFactory({ name, year, color, price }) {
    return {
        name,
        year,
        color,
        price,
        sold: false,
        owner: null
    }
}

// Dica: para manipular o banco de dados devem utilizar o THIS

function repository(database) {
    return {
        db: database,

        // deve ser passado os PARÂMETROS ({ name, year, color, price } à função, GERAR um carro(com a FACTORY FUNCTION) e PERSISTIR no banco de dados
        create: this,

        // deve ser capaz de RETORNAR todos os dados PERSISTIDOS
        findAll: () => {
            return this.db;
        },

        // deve ser passado o PARÂMETRO (year) e retornar todos os dados que tenham o mesmo ano
        findAllByYear: null,

        // deve ser capaz de RETORNAR todos os carros vendidos
        findAllSold: null,

        // deve ser passado o PARÂMETRO (name) e RETORNAR o objeto que tenham o mesmo nome
        findOneByName: null,

        // deve ser passado os PARÂMETROS (carName, ownerName) e atualizar os atributos (name, owner, sold) de um objeto no banco de dados
        updateOwner: null,

    }
}

const cars = []
const carRepository = repository(cars)

carRepository.create({ name: 'Fiat Uno', year: 2020, color: 'gray', price: 15000 })
carRepository.create({ name: 'Drako GTE', year: 2019, color: 'red', price: 6197115 })
carRepository.create({ name: 'Gordon Murray T.33', year: 2020, color: 'black', price: 8779247 })
carRepository.create({ name: 'Gordon Murray T.33', year: 2020, color: 'black', price: 8779247 })

carRepository.updateOwner('Fiat Uno', 'Pedro Souza')
carRepository.updateOwner('Drako GTE', 'Rafael Vinicios')
carRepository.updateOwner('Gordon Murray T.33', 'Lucas Perdigão')

console.log(userRepository.findOneByName('Fiat Uno'))
console.log('\n\n\n')
console.log(userRepository.findAllByYear(2020))
console.log('\n\n\n')
console.log(userRepository.findAllSold())
console.log('\n\n\n')
console.log(userRepository.findAll())