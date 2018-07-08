import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToOne, JoinColumn } from "typeorm";
import { Student } from "./Student";
import { Login } from "./Login";

@Entity()
export class Parent {
    @PrimaryGeneratedColumn({name:"Id"})
    parentId: number;

    @Column()
    fName: string;
    
    @Column()
    lName: string;

    @Column()
    dob:  Date;

    @Column()
    maritalStatus: string

    @ManyToMany(type=>Student, s=>s.parents)
    students:Student[];

}