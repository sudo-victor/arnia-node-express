import { Request, Response } from "express";
import { CustomerService } from "../services/customer.services";

export class CustomerController {
    constructor(
        private customerService: CustomerService
    ) {}

    async create(request: Request, response: Response) {
        try {
            await this.customerService.create(request.body);

            return response.status(201).json();
        } catch (err: any) {
            return response.status(500).json({ message: err.message})
        }
    }

    async findAll(request: Request, response: Response) {
        try {
            const customers = await this.customerService.findAll()
            return response.status(200).json({ customers });
        } catch (err: any) {
            return response.status(500).json({ message: err.message})
        }
    }

    async findById(request: Request, response: Response) {
        try {
            const customer = await this.customerService.findById(+request.params.id)
            return response.status(200).json({ customer });
        } catch (err: any) {
            return response.status(500).json({ message: err.message})
        }
    }
}