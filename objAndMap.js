const bancoDadosObj = new Array()

// Crie uma Factory Function para gerar um usuário

function createUser(name, age, bancoDados){
  // Crie uma factory function(fora da função) para criar um usuário
}

function findOneUser (index, bancoDados) {
  // utilizar função de iteração para encontrar o usuário desejado
}

function getAllUser(bancoDados) {
  // não é necessário dica ;)
}

function updateUser(id, name, age, bancoDados) {
  // sem dica ;)
}

function usersCount(bancoDados) {
  // sem dica ;)
}

createUser('Lucas Perdigão', '40', bancoDadosObj)
createUser('Ricardo Borges', '22', bancoDadosObj)
createUser('Lucas Perdigão', '18', bancoDadosObj)
createUser('Mauro Luiz', '70', bancoDadosObj)
createUser('Alan Almeida', '25', bancoDadosObj)

updateUser(1, 'Rafael Vinicius', '30', bancoDadosObj)

console.log(findOneUser(1, bancoDadosObj))
console.log(getAllUser(bancoDadosObj))
console.log(usersCount(bancoDadosObj))
