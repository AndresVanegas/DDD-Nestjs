import {Customer}  from "./Customer";
import { Long } from "typeorm";
import { Pagination } from "src/core/shared/paginate/Pagination";
import { PaginationOptions } from "src/core/shared/paginate/PaginationOptions";

export interface CustomerRepository {
    findAll(options: PaginationOptions): Promise<Pagination<Customer>>;
    findById(id:string):Promise<Customer | undefined>; 
    update(id:string,customer:Customer):Promise<Customer>;
}