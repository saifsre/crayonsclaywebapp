import { Entity, PrimaryColumn, PrimaryGeneratedColumn, OneToMany, JoinColumn, Column, OneToOne, ManyToOne } from "typeorm";
import { Student } from "./Student";
import { Teacher } from "./Teacher";
import { Grade } from "./Grade";

@Entity()

export class GradeSection {


    @PrimaryGeneratedColumn()
    Id: number;

    @OneToMany(type=>Student, s=>s.currGrade)
    students: Student[];

    @OneToOne(type=>Teacher)
    @JoinColumn({
        name: "teacher_id"
    })
    classTeacher: Teacher;

    @ManyToOne(type=>Grade,g=>g.sections)
    grade: Grade;
}