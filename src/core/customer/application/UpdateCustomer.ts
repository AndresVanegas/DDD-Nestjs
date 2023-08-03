import {CustomerRepository} from "../domain/CustomerRepository";
import {Customer} from "../domain/Customer";
import { Injectable, Inject } from "@nestjs/common";

@Injectable()
export class UpdateCustomer {
    constructor(@Inject('CustomerRepository') private customerRepository: CustomerRepository) {
    }

     async execute(id:string,customer:Customer): Promise<Customer> {
        return this.customerRepository.update(id,customer);
    }
}

