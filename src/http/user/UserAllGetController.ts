import { Controller, Post, Body, Get, Param, Put, Delete,Request } from '@nestjs/common';
import { Pagination } from 'src/core/shared/paginate/Pagination';
import { FindAllUsers } from 'src/core/user/application/FindAllUsers';
import { User } from 'src/core/user/domain/User';
import { Crud, CrudController, CrudRequest, CreateManyDto } from '@nestjsx/crud';
import { TypeORMUserRepository } from 'src/core/user/infrastucture/persistence/TypeORMUserRepository';

@Crud({
   model: {
     type: User,
   },
 })
@Controller('user')
export class UserAllGetController{

  constructor(private findAllUser: FindAllUsers) {
  }

   @Get()
   handle(@Request() request):Promise<Pagination<User>>{
       return this.findAllUser.execute({
          limit: request.query.hasOwnProperty('limit') ? request.query.limit : 50,
          page: request.query.hasOwnProperty('page') ? request.query.page : 0,
       });
   }


}
