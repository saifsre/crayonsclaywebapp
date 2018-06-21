import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class Login {
    @PrimaryColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string

}