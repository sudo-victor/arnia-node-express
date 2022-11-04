function mainFactory() {
    const repository = new MongoRepository(client);
    const service = new MainService(repository);
    return service
}

module.exports = { service }