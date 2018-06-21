import { Entity, PrimaryColumn, PrimaryGeneratedColumn, CreateDateColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Teacher } from "./Teacher";

@Entity()

export class PayStub {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created: Date

    @Column()
    grossIncome: number
    
    @Column()
    taxedAmount: number;

    @Column()
    netPay: number;

    @Column()
    additionalDeductions: number;

    @OneToOne(type=>Teacher)
    @JoinColumn({name: "teacher_id"})
    teacher: Teacher

    @Column()
    hasbeenPaid: boolean;

}