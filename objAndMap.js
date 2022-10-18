const bancoDadosObj = new Array()
const bancoDadosMap = new Map()

//Factory Function
const userFactory = (name, age) => ({ name, age })

function createUser(name, age, bancoDados) {
  const user = userFactory(name, age);
  bancoDados.push(user)
}

function createUserMap(name, age, bancoDados){
  // utilizar factory function para criar um usuário
  const user = userFactory(name, age);
  bancoDados.set(bancoDados.size, user)
}

function findOneUser (index, bancoDados) {
  return bancoDados[index]
  // return  bancoDados.find((_,  i) => i === index)
}

function findOneUserMap(index, bancoDados) {
  return bancoDados.get(index)
}

function getAllUser(bancoDados) {
  return bancoDados
}

function updateUser(id, name, age, bancoDados) {
  const user = bancoDados.find((user, index) => index === id)

  if (user) {
    user['name'] = name
    user['age'] = age
    return true
  }

  return false
}

function updateUserMap(id, name, age, bancoDados) {
  // não é necessário dica ;)
  const user = bancoDados.get(id)

  if (user) {
    user.name = name;
    user.age = age;
  }
}

function usersCount(bancoDados) {
  return bancoDados.length;
}

function usersCountMap(bancoDados) {
  return bancoDados.size;
}

createUser('Lucas Perdigão', '40', bancoDadosObj)
createUser('Ricardo Borges', '22', bancoDadosObj)
updateUser(1, 'Rafael Vinicius', '30', bancoDadosObj)

createUserMap('Lucas Perdigão', '40', bancoDadosMap)
createUserMap('Ricardo Borges', '22', bancoDadosMap)
updateUserMap(1, 'Robson Luciano', '15', bancoDadosMap)

console.log(findOneUser(1, bancoDadosObj))
console.log(findOneUserMap(1, bancoDadosMap))

console.log(getAllUser(bancoDadosObj))
console.log(getAllUser(bancoDadosMap))

console.log(usersCount(bancoDadosObj))
console.log(usersCountMap(bancoDadosMap))
