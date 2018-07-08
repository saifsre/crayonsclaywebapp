import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { Student } from "./Student";

@Entity()
export class Address {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    address1: string;

    @Column()
    address2: string;

    @Column()
    address3: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    country: string;
    @Column()
    postalCode: string;

}