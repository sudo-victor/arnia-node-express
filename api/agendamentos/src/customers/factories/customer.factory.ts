import { CustomerController } from "../controllers/customer.controller";
import { CustomerModel } from "../models/customer.model";
import { CustomerRepository } from "../repositories/customer.repository";
import { CustomerService } from "../services/customer.services";

function factory() {
    const customerRepository = new CustomerRepository(CustomerModel);
    const customerService = new CustomerService(customerRepository);
    const customerController = new CustomerController(customerService);
    return { customerController, customerService }   
}

const customerFactory = factory();
export const customer = customerFactory.customerController;
export const customerService = customerFactory.customerService;