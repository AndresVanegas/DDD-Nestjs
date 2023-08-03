import {CustomerRepository} from "../domain/CustomerRepository";
import {Customer} from "../domain/Customer";
import { Injectable, Inject } from "@nestjs/common";
import { Pagination } from "src/core/shared/paginate/Pagination";
import { PaginationOptions } from "src/core/shared/paginate/PaginationOptions";

@Injectable()
export class FindAllCustomers {
    constructor(@Inject('CustomerRepository') private customerRepository: CustomerRepository) {
    }

    execute(options: PaginationOptions): Promise<Pagination<Customer>> {
        return this.customerRepository.findAll(options);
    }
}

