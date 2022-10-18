// Crie uma classe chamada UserModel. Onde, deve ser inicializada com os seguintes atributos:
// name, email, age e password. Além dos atributos a classe deverá conter 2 métodos:
// encryptPassword e decryptPassword, o papél dessas funções será criptografar e decriptografar a senha do usuario.
// obs: no construtor deve ser adicionado um valor aleatório ao atributo id e
// a senha deverá ser criptografada no construtor

// encryptPassword: recebe 1 parâmetro(password) e retorna o valor encriptado
// decryptPassword: recebe 1 parâmetro(encryptedPassword) e retorna o valor decriptado








// CRIE A CLASSE AQUI







// Crie uma classe chamada Repository. Onde, deve ser inicializada com os atributos:
// database(array) e model(classe modelo). Além dos atributos a classe deverá conter 5 métodos:
// findOne: recebe 1 parâmetro(id) e retorna o modelo encontrado no database com o mesmo id
// findAll: retorna todo database
// create: recebe parametros indefinidos(...props), cria um modelo e persiste no database.
// update: recebe 2 parâmetro(id[numero], props[objeto]), atualiza o modelo e retornar o modelo atualizado
// remove: recebe 1 parâmetro(id) e remove o modelo no database que tenha o id igual ao passado no parâmetro








// CRIE A CLASSE AQUI









// const users = [];
// const userRepository = new Repository(users, UserModel);

// userRepository.create('Victor de Souto', 'vs@email.com', '123456');
// userRepository.create('João Vitor Gonçalves', 'jv@email.com', '123456');
// userRepository.create('Thiago Menezes', 'tm@email.com', '123456');
// userRepository.update(userRepository.findAll()[1].id, { name: 'Thiago' });
// userRepository.remove(userRepository.findAll()[0].id);

// console.log('\n\n')
// console.log('ACHAR O PRIMEIRO USUÁRIO')
// console.log(userRepository.findOne(userRepository.findAll()[0].id));
// console.log('\n\n')
// console.log('PEGAR TODOS OS USUÁRIOS')
// console.log(userRepository.findAll());







// DESAFIO







// Crie uma classe chamada CarModel. Onde, deve ser inicializada com os seguintes atributos:
// name e age







// CRIE A CLASSE AQUI






// const cars = [];
// const carRepository = new Repository(cars, CarModel);

// carRepository.create('Celta', 2013);
// carRepository.create('Ferrari', 2020);
// carRepository.create('Gol', 2015);
// carRepository.update(carRepository.findAll()[1].id, { name: 'Stepway' });
// carRepository.remove(carRepository.findAll()[0].id);

// console.log('\n\n')
// console.log('ACHAR O PRIMEIRO CARRO')
// console.log(carRepository.findOne(carRepository.findAll()[0].id));
// console.log('\n\n')
// console.log('PEGAR TODOS OS CARROS')
// console.log(carRepository.findAll());