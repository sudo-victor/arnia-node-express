import { Model } from 'mongoose';
import { CreateCustomerDto } from '../dtos/request-create-customer.dto';
import { UpdateCustomerDto } from '../dtos/update-customer.dto';
import { Customer } from '../models/customer.model';

export class CustomerRepository {
    constructor(
        private readonly customerModel: Model<Customer>
    ) {}

    async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
        const customer = await this.customerModel.create(createCustomerDto);
        return customer;
    }

    async find(): Promise<Customer[]> {
        const customers = await this.customerModel.find();
        return customers;
    }

    async findById(id: number): Promise<Customer | null> {
        const customer = await this.customerModel.findById(id);
        return customer;
    }

    async findByName(name: string): Promise<Customer | null> {
        const customer = await this.customerModel.findOne({ name });
        return customer;
    }

    async findByPhoneNumber(phoneNumber: number): Promise<Customer | null> {
        const customer = await this.customerModel.findOne({ phoneNumber });
        return customer;
    }

    async update(updateCustomerDto: UpdateCustomerDto): Promise<Customer | null> {
        const customer = await this.customerModel.findOneAndUpdate(updateCustomerDto);
        return customer;
    }

    async delete(id: number): Promise<Customer | null> {
        const customer = await this.customerModel.findByIdAndDelete(id);
        return customer;
    }
}