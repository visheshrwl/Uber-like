import { DataSource } from 'typeorm';
import { User } from './entity/User';
import { Ride } from './entity/Ride';
import { Delivery } from './entity/Delivery';
import { Booking } from './entity/Booking';
import { __prod__ } from './constants';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'uber_like_app',
  synchronize: !__prod__, // true in development, false in production
  logging: !__prod__, // true in development, false in production
  entities: [User, Ride, Delivery, Booking],
  migrations: ['./migrations/*.ts'],
  subscribers: [],
});

export default AppDataSource;
