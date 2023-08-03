import { Module, Injectable} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeORMUserRepository } from './persistence/TypeORMUserRepository';
import { User } from '../domain/User';
import { FindAllUsers } from '../application/FindAllUsers';
import { Role } from '../domain/Role';

@Module({
    imports:[TypeOrmModule.forFeature([User,Role])],
    providers:[{provide:'UserRepository',useClass:TypeORMUserRepository},FindAllUsers],
    exports:[FindAllUsers]
})
@Injectable()
export class UserModule {

}
