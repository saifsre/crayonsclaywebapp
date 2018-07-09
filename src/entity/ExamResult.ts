import {ManyToOne, Entity, PrimaryGeneratedColumn, OneToOne, Column, JoinColumn } from "typeorm";
import { Student } from "./Student";
import { Course } from "./Course";
import { Exam } from "./Exam";

@Entity()
export class ExamResult {
    @PrimaryGeneratedColumn()
    Id: number;

    @ManyToOne(type=>Student,s=>s.examsResults)
    student: Student;

    @OneToOne(type=>Exam)
    @JoinColumn({name: "exam_id"})
    exam: Exam
    
    @Column()
    marks: string
}