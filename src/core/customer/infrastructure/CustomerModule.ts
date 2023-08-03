import { Module, Injectable} from '@nestjs/common';
import { FindAllCustomers } from 'src/core/customer/application/FindAllCustomers';
import { InMemoryCustomerRepository } from './persistence/InMemoryCustomerRepository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeORMCustomerRepository } from './persistence/TypeORMCustomerRepository';
import { Customer } from '../domain/Customer';
import { FindCustomerById } from '../application/FindCustomerById';
import { UpdateCustomer } from '../application/UpdateCustomer';

@Module({
    imports:[TypeOrmModule.forFeature([Customer])],
    providers:[{provide:'CustomerRepository',useClass:TypeORMCustomerRepository},FindAllCustomers,FindCustomerById,UpdateCustomer],
    exports:[FindAllCustomers,FindCustomerById,UpdateCustomer]
})
@Injectable()
export class CustomerModule {

}
