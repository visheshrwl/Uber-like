import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './User';
import { Booking } from './Booking';

@Entity()
export class Ride {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  pickupLocation: string;

  @Column()
  dropoffLocation: string;

  @Column()
  fare: number;

  @Column()
  status: string;

  @Column({ nullable: true })
  trafficDuration: string;  // Duration of the trip with real-time traffic

  @Column({ nullable: true })
  distance: string;  // Distance of the trip route

  @ManyToOne(() => User, (user) => user.rides)
  user: User;

  @OneToMany(() => Booking, (booking) => booking.ride)
  bookings: Booking[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  constructor(
    id: number,
    pickupLocation: string,
    dropoffLocation: string,
    fare: number,
    status: string,
    user: User,
    trafficDuration?: string,
    distance?: string,
  ) {
    this.id = id;
    this.pickupLocation = pickupLocation;
    this.dropoffLocation = dropoffLocation;
    this.fare = fare;
    this.status = status;
    this.user = user;
    this.trafficDuration = trafficDuration || '';
    this.distance = distance || '';
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.bookings = [];
  }
}
