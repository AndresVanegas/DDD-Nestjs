import {CustomerRepository} from "../domain/CustomerRepository";
import {Customer} from "../domain/Customer";
import { Injectable, Inject } from "@nestjs/common";

@Injectable()
export class FindCustomerById {
    constructor(@Inject('CustomerRepository') private customerRepository: CustomerRepository) {
    }

     execute(customerId:string): Promise<Customer>{
        const customer = this.customerRepository.findById(customerId);

        if(customer === undefined){
            throw new CustomerNotFound();    
        }

        return customer;
    }
}

export class CustomerNotFound extends Error{

}
