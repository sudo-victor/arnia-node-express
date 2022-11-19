import { CreateCustomerDto } from "../dtos/request-create-customer.dto";
import { ResponseCreateCustomer } from "../dtos/response-create-customer.dto";
import { Customer } from "../models/customer.model";
import { CustomerRepository } from "../repositories/customer.repository";

export class CustomerService {
    constructor(
        private readonly customerRepository: CustomerRepository
    ) {}

    async create(createCustomerDto: CreateCustomerDto): Promise<ResponseCreateCustomerDto | Error> {
        try {
            const customerAlreadyExists = await this.customerRepository
                .findByPhoneNumber(createCustomerDto.phoneNumber);
            if (customerAlreadyExists) throw new Error('Customer already exists');

            const customer = await this.customerRepository.create(createCustomerDto);
            const formattedCustomer = {
                ...customer,
                phoneNumber: "+55 " + customer.phoneNumber
            }
            return formattedCustomer;
        } catch (error: any) {
            return new Error(error.message);
        }
    }

    async findAll(): Promise<Customer[] | Error> {
        try {
            const customers = await this.customerRepository.find();
            return customers;
        } catch (error: any) {
            return new Error(error.message);
        }
    }

    async findById(id: number): Promise<Customer | null | Error> {
        try {
            const customers = await this.customerRepository.findById(id);
            return customers;
        } catch (error: any) {
            return new Error(error.message);
        }
    }
}