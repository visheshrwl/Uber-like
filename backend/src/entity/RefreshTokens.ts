import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import { User } from './User';
  
  @Entity()
  export class RefreshToken {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @Column()
    token!: string;
  
    @ManyToOne(() => User, (user) => user.refreshTokens)
    user!: User;
  
    @CreateDateColumn()
    createdAt!: Date;
  
    @UpdateDateColumn()
    updatedAt!: Date;
  }