import { Module } from '@nestjs/common';
import { CustomerHttpModule } from './http/customer/CustomerHttpModule';
import { UserHttpModule } from './http/user/UserHttpModule';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
      TypeOrmModule.forRoot({
        type: 'mysql',//type database
        host: '10.181.11.20',//server database
        port: 3306,// port database
        username: 'root',//user database
        password: 'g64sX@23CB17',
        database: 'movilven_corbeta_trans',
        autoLoadEntities:true,
        synchronize:false,
    }),
    CustomerHttpModule,
    UserHttpModule
    
  ],
})
export class AppModule {
  constructor() {}
}
