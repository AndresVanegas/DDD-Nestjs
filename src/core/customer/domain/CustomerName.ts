import { Column } from "typeorm";


export class CustomerName {

    @Column({name:'first_name'})
    private first_name: string;

    @Column({name:'last_name'})
    private last_name: string;

   constructor(first_name: string, last_name: string) {
      this.first_name = first_name;
      this.last_name = last_name;
   }


   toString() {
    return `Value:${this.first_name,this.last_name}`;
}

}