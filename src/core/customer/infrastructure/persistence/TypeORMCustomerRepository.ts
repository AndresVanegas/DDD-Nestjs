import { CustomerRepository } from "src/core/customer/domain/CustomerRepository";
import {Customer} from '../../domain/Customer';

import { Injectable } from '@nestjs/common';
import { Repository, EntityManager } from "typeorm";
import { PaginationOptions } from "src/core/shared/paginate/PaginationOptions";
import { Pagination } from "src/core/shared/paginate/Pagination";

@Injectable()
export class TypeORMCustomerRepository implements CustomerRepository{
        
        constructor(private entityManager:EntityManager) {

        }

        update(id:string,customer: Customer): Promise<Customer> {
                console.log(customer);
               return this.entityManager.save(Customer,customer);         
        }

        findById(id:string): Promise<Customer> {
                const customer = this.entityManager.findOne(Customer,id);

                return customer;
        }
   
   
        async findAll(options: PaginationOptions): Promise<Pagination<Customer>> {
                const [results, total] = await this.entityManager.findAndCount(Customer,{
                        take: options.limit,
                        skip: options.page, // think this needs to be page * limit
                      });
                
           return new Pagination<Customer>({
                results,
                total,
              });    
        }

   
    
}