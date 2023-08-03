import { Injectable, Inject } from "@nestjs/common";
import { Pagination } from "src/core/shared/paginate/Pagination";
import { PaginationOptions } from "src/core/shared/paginate/PaginationOptions";
import { UserRepository } from "../domain/UserRepository";
import { User } from "../domain/User";

@Injectable()
export class FindAllUsers {
    constructor(@Inject('UserRepository') private userRepository: UserRepository) {
    }

    execute(options: PaginationOptions): Promise<Pagination<User>> {
        return this.userRepository.findAll(options);
    }
}

