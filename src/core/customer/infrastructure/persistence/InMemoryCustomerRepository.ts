import { CustomerRepository } from "src/core/customer/domain/CustomerRepository";
import { Injectable } from '@nestjs/common';
import { Customer } from "../../domain/Customer";
import { CustomerIdentification } from "../../domain/CustomerIdentification";
import { CustomerName } from "../../domain/CustomerName";
import { Pagination } from "src/core/shared/paginate/Pagination";


@Injectable()
export class InMemoryCustomerRepository implements CustomerRepository{


        update(id:string,customer: Customer): Promise<Customer> {
                throw new Error("Method not implemented.");
        }

        findById(id:string): Promise<Customer> {

                return Promise.resolve(new Customer('5',new CustomerName('',''),new CustomerIdentification(0,'hola')));
        }
        

        findAll(): Promise<Pagination<Customer>> {

           const customer = new Customer('',new CustomerName('',''),new CustomerIdentification(0,'hola'));
           throw new Error("Method not implemented.");
        }

   
    
}