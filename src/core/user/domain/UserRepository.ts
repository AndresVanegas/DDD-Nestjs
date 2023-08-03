import { Pagination } from "src/core/shared/paginate/Pagination";
import { PaginationOptions } from "src/core/shared/paginate/PaginationOptions";
import { User } from "./User";

export interface UserRepository {
    findAll(options: PaginationOptions): Promise<Pagination<User>>;
    findByRol(id:string):Promise<User | undefined>; 
}