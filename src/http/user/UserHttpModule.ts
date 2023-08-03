import { Module } from '@nestjs/common';
import { UserAllGetController } from './UserAllGetController';
import { UserModule } from 'src/core/user/infrastucture/UserModule';


@Module({
  controllers: [UserAllGetController],
  imports:[UserModule]
})
export class UserHttpModule {}