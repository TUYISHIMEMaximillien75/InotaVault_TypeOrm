import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum UserRole {
    USER = "USER",
    ADMIN = "ADMIN"
}

@Entity("users")

export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.USER
    })
    role: UserRole;
    
    @Column({ default: false })
    verified: boolean;

    @CreateDateColumn()
    createdAt: Date;
}

