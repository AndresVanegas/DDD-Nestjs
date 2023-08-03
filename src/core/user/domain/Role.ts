import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('role')
export class Role{

    @PrimaryGeneratedColumn()
    private id:string;

    @Column()
    private name:string;

    @Column()
    private pages:string;

    constructor(id:string,name:string,pages:string) {
       this.id = id;  
       this.name = name;
       this.pages = pages;
    }
    
    get getName(): string {
        return this.name;
    }
    
}