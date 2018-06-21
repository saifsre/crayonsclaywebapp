import { Entity, PrimaryGeneratedColumn, Column, Timestamp, OneToOne, JoinColumn, CreateDateColumn } from "typeorm";
import { ColumnEnumOptions } from "typeorm/decorator/options/ColumnEnumOptions";
import { Course } from "./Course";
import { ExamResult } from "./ExamResult";

@Entity()
export class Exam {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    examType: string;

    @Column()
    examDateTime: Date;

    @Column()
    examLocation: string;
    
    @OneToOne(type=>Course)
    @JoinColumn({name:"course_id"})
    course: Course

}