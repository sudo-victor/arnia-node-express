class UserService {
    constructor(repository) {
        this.repository = repository
    }

    async create(data) {
        const userAlreadyExists = await this.repository.getOne(data.name)
        if (userAlreadyExists) throw new Error('User already exists')
        await this.repository.create("users", data)
    }
}