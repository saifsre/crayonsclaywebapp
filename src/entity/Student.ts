import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn, ManyToOne, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { Address } from "./Address";
import { GradeSection } from "./GradeSection";
import { Parent } from "./Parent";
import { Login } from "./Login";
import { ExamResult } from "./ExamResult";

@Entity()
export class Student{

    @PrimaryColumn({name:"Id"})
    studentNumber: number;
    
    @Column()
    fName: string;
    
    @Column()
    lName: string;

    @Column()
    dob:  Date;

    @OneToOne(type=>Address, address => address.id)
    @JoinColumn()
    address: Address;

    @ManyToOne(type=>GradeSection, gs=>gs.students)
    currGrade: GradeSection;

    @ManyToMany(type=>Parent, p=>p.students)
    @JoinTable({name:"student_parent"})
    parents: Parent[]
    
    @OneToMany(type=>ExamResult, eR=>eR.student) 
    examsResults: ExamResult[];

    @OneToOne(type=>Login)
    @JoinColumn()
    login: Login
}