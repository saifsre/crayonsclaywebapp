import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from "typeorm";
import { GradeSection } from "./GradeSection";

@Entity()
export class Grade {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string
    
    @Column()
    description: string;

    @OneToMany(type=>GradeSection,gs=>gs.grade)
    sections: GradeSection[];


}