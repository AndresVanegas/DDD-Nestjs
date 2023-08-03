import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { UserName } from "./UserName";
import { Role } from "./Role";
import { Type } from 'class-transformer';

@Entity('users')
export class User{

    @PrimaryColumn()
     id: string;

     @Column(()=> UserName,{prefix:''})
     name:UserName;

     @Column()
     is_active: number;

    // @Type((t) => Role)
     //@OneToOne((type) => Role, (p) => p.getName, { cascade: true })
     //@JoinColumn()
     @Column()
     role_id: number;


}