import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Ride } from './Ride';
import { Delivery } from './Delivery';
import { Booking } from './Booking';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Ride, ride => ride.user)
  rides: Ride[];

  @OneToMany(() => Delivery, delivery => delivery.user)
  deliveries: Delivery[];

  @OneToMany(() => Booking, booking => booking.user)
  bookings: Booking[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  constructor(id: number,name: string, email: string, password: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.rides = [];
    this.deliveries = [];
    this.bookings = [];
  }
}
