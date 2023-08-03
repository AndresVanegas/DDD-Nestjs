import { Module } from '@nestjs/common';
import { CustomerModule } from 'src/core/customer/infrastructure/CustomerModule';
import { CustomerAllGetController } from './CustomerAllGetController';
import { CustomerByIdGetController } from './CustomerByIdGetController';
import { CustomerPutController } from './CustomerPutController';

@Module({
  controllers: [CustomerAllGetController,CustomerByIdGetController,CustomerPutController],
  imports:[CustomerModule]
})
export class CustomerHttpModule {}