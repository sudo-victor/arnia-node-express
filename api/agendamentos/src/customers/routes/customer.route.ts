import { Router } from "express";
import { customer } from "../factories/customer.factory";

const customerRouter = Router()

customerRouter.post('/', customer.create.bind(customer))
customerRouter.post('/', customer.findAll.bind(customer))
customerRouter.post('/:id', customer.findById.bind(customer))

export { customerRouter }