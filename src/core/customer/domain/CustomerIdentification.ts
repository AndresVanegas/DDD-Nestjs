import { Column } from "typeorm";


export class CustomerIdentification {

    @Column({name:'identification_type_id'})
    private identification_type_id: number;
    @Column({name:'identification'})
    private identification: string;

   constructor(identification_type_id: number, identification: string) {
      this.identification_type_id = identification_type_id;
      this.identification = identification;
   }

   toString() {
      return `Value:${this.identification_type_id,this.identification}`;
  }

}