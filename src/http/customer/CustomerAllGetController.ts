import { Controller, Post, Body, Get, Param, Put, Delete,Request } from '@nestjs/common';
import { FindAllCustomers } from 'src/core/customer/application/FindAllCustomers';
import { Pagination } from 'src/core/shared/paginate/Pagination';
import { Customer } from 'src/core/customer/domain/Customer';



@Controller('customer')
export class CustomerAllGetController {

  constructor(private findAllCustomers: FindAllCustomers) {
  }

   @Get()
   handle(@Request() request):Promise<Pagination<Customer>>{
       return this.findAllCustomers.execute({
          limit: request.query.hasOwnProperty('limit') ? request.query.limit : 10,
          page: request.query.hasOwnProperty('page') ? request.query.page : 0,
       });
   }


}
