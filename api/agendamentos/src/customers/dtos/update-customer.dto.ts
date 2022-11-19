import { CreateCustomerDto } from "./request-create-customer.dto";

export interface UpdateCustomerDto extends Partial<CreateCustomerDto> {}