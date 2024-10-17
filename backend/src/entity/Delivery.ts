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
import { IsNotEmpty, Length, IsNumber, IsString } from 'class-validator';


@Entity()
export class Delivery {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @Length(5, 100)
  pickupLocation: string;

  @Column()
  @IsNotEmpty()
  @Length(5, 100)
  dropoffLocation: string;

  @Column()
  @IsNotEmpty()
  @Length(5, 255)
  packageDetails: string;

  @Column()
  @IsNumber()
  deliveryFee: number;

  @Column()
  @IsString()
  status: string;

  @ManyToOne(() => User, (user) => user.deliveries)
  user: User;

  @OneToMany(() => Booking, (booking) => booking.delivery)
  bookings: Booking[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  constructor(
    id: number,
    pickupLocation: string,
    dropoffLocation: string,
    packageDetails: string,
    deliveryFee: number,
    status: string,
    user: User,
  ) {
    this.id = id;
    this.pickupLocation = pickupLocation;
    this.dropoffLocation = dropoffLocation;
    this.packageDetails = packageDetails;
    this.deliveryFee = deliveryFee;
    this.status = status;
    this.user = user;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.bookings = [];
  }
}
