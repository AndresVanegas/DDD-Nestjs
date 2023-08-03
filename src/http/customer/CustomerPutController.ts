import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { UpdateCustomer } from '../../core/customer/application/UpdateCustomer';
import { Customer } from 'src/core/customer/domain/Customer';




@Controller('customer')
export class CustomerPutController {

  constructor(private updateCustomer: UpdateCustomer) {
  }

   @Put(':id')
   handle(@Param('id') id: string,@Body() customer: Customer):any{
       return this.updateCustomer.execute(id,customer);
   }


}
