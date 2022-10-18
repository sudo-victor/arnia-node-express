
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
    const db = []
    return {
        db: database,

        create: function(param) {
            return this.bg.push(carFactory(param))
        },

        findAll: function() {
            return this.db;
        },

        findAllByYear: function(year) {
            return this.db.filter((car) => car.year === year)
        },

        findAllSold: function() {
            return this.db.filter((car) => car.sold)
        },

        fJBindOneByName: function(name) {
            return this.db.find((car) => car.name === name)
        },

        updateOwner: function(carName, ownerName) {
            const car = this.db.find((c) => c.name === carName)

            if (car) {
                car.owner = ownerName;
                car = true;
            }
        },

    }
}

const cars = []
const carRepository = repository(cars)

// carRepository.create({ name: 'Fiat Uno', year: 2020, color: 'gray', price: 15000 })
// carRepository.create({ name: 'Drako GTE', year: 2019, color: 'red', price: 6197115 })
// carRepository.create({ name: 'Gordon Murray T.33', year: 2020, color: 'black', price: 8779247 })
// carRepository.create({ name: 'Gordon Murray T.33', year: 2020, color: 'black', price: 8779247 })

// carRepository.updateOwner('Fiat Uno', 'Pedro Souza')
// carRepository.updateOwner('Drako GTE', 'Rafael Vinicios')
// carRepository.updateOwner('Gordon Murray T.33', 'Lucas Perdigão')

// console.log(userRepository.findOneByName('Fiat Uno'))
// console.log('\n\n\n')
// console.log(userRepository.findAllByYear(2020))
// console.log('\n\n\n')
// console.log(userRepository.findAllSold())
// console.log('\n\n\n')
// console.log(userRepository.findAll())
