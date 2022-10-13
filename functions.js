
function carFactory({ carName, carYear, carColor, carPrice }) {
    return {
        name: carName,
        year: carYear,
        color: carColor,
        price: carPrice,
        sold: false,
        owner: null
    }
}

// Dica: para acessar o bancoDados devem utilizar o THIS

function repository(database) {
    return {
        db: database,

        // deve ser passado os PARÂMETROS ({ name, year, color, price } à função, GERAR um carro(com a FACTORY FUNCTION) e PERSISTIR no bancoDados
        create: function({ name, year, color, price }) {
            this.db.push(carFactory({name, year, color, price}))
        },

        // deve ser capaz de RETORNAR todos os dados PERSISTIDOS
        findAll: function() {
            return this.db;
        },

        // deve ser passado o PARÂMETRO (year) e retornar todos os dados que tenham o mesmo ano
        findAllByYear: function(year) {
            return this.db.filter((car) => car.year === year)
        },

        // deve ser capaz de RETORNAR todos os carros vendidos
        findAllSold: function() {
            return this.db.filter((car) => car.sold)
        },

        // deve ser passado o PARÂMETRO (name) e RETORNAR o objeto que tenham o mesmo nome
        findOneByName: function(name) {
            return this.db.find((car) => car.name === name)
        },

        // deve ser passado os PARÂMETROS (carName, ownerName) e atualizar os atributos (name, owner, sold) de um objeto no bancoDados
        updateOwner: function(carName, ownerName) {
            this.db = this.db.map((car) => {
                if (car.name === carName) {
                    return {
                        ...car,
                        sold: true,
                        owner: ownerName
                    }
                }

                return car
            })
        },

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