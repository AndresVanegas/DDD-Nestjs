import { Controller, Get, Param } from '@nestjs/common';
import { FindCustomerById } from 'src/core/customer/application/FindCustomerById';

@Controller('customer')
export class CustomerByIdGetController {

  constructor(private findCustomerById: FindCustomerById) {
  }

   @Get(':id')
   handle(@Param() params):any{
       return this.findCustomerById.execute(params.id);
   }


}
