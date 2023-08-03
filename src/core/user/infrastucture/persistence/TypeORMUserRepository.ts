import { UserRepository } from "../../domain/UserRepository";
import { User } from "../../domain/User";
import { PaginationOptions } from "src/core/shared/paginate/PaginationOptions";
import { Pagination } from "src/core/shared/paginate/Pagination";
import { EntityManager } from "typeorm";
import { Injectable } from "@nestjs/common";

@Injectable()
export class TypeORMUserRepository implements UserRepository{

    constructor(private entityManager:EntityManager) {
    
    }

    async findAll(options: PaginationOptions): Promise<Pagination<User>> {
        const [results, total] = await this.entityManager.findAndCount(User,{
                take: options.limit,
                skip: options.page, // think this needs to be page * limit
              });

              console.log(results);
        
        return new Pagination<User>({
            results,
            total,
        });    
    }

   
    findByRol(id: string): Promise<User> {
        throw new Error("Method not implemented.");
    }



}