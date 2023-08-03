import { CustomerIdentification } from "./CustomerIdentification";
import { CustomerName } from "./CustomerName";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";


@Entity('customers')
export class Customer {

     @PrimaryGeneratedColumn()
      id: string;

     @Column(()=> CustomerName,{prefix:''})
      name: CustomerName;

     @Column(()=> CustomerIdentification,{prefix:''})
      identification: CustomerIdentification;

    constructor(id: string,name:CustomerName, identification: CustomerIdentification) {
        this.id = id;
        this.identification = identification;
        this.name = name;
    }
  
}