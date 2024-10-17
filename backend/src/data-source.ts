import { DataSource } from 'typeorm';
import { User } from './entity/User';
import { Ride } from './entity/Ride';
import { Delivery } from './entity/Delivery';
import { Booking } from './entity/Booking';
import { __prod__ } from './constants';
import { HealthCheck } from './entity/healthCheck'; // Use a consistent naming convention
import { RefreshToken } from './entity/RefreshTokens';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,  
  synchronize: !__prod__,
  logging: !__prod__,
  entities: [User, Ride, Delivery, Booking, HealthCheck], // Ensure HealthCheck is referenced correctly
  migrations: ['./migrations/*.ts'],
  subscribers: [],
});

export default AppDataSource;
