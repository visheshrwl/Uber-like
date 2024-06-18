import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';

import { User } from './User';
import { Ride } from './Ride';
import { Delivery } from './Delivery';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string; // Either 'ride' or 'delivery'

  @Column({ nullable: true })
  rideId?: number;

  @Column({ nullable: true })
  deliveryId?: number;

  @Column()
  status: string;

  @ManyToOne(() => User, user => user.bookings)
  user: User;

  @ManyToOne(() => Ride, ride => ride.bookings, { nullable: true })
  ride?: Ride;

  @ManyToOne(() => Delivery, delivery => delivery.bookings, { nullable: true })
  delivery?: Delivery;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  constructor(id: number, type: string, status: string, user: User, ride?: Ride, delivery?: Delivery) {
    this.id = id;
    this.type = type;
    this.status = status;
    this.user = user;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    if (ride) {
      this.ride = ride;
      this.rideId = ride.id;
    }
    if (delivery) {
      this.delivery = delivery;
      this.deliveryId = delivery.id;
    }
  }
}
