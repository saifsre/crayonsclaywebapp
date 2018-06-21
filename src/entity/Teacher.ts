import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Address } from "./Address";

@Entity()

export class Teacher {

    @PrimaryColumn({name:"Id"})
    teacherId: number;

    @Column()
    fName: string;
    
    @Column()
    lName: string;

    @Column()
    dob:  Date;

    @OneToOne(type=>Address)
    @JoinColumn()
    address: string;

}