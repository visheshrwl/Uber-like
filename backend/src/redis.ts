// redis.js
import { createClient } from 'redis';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const redisClient = createClient({
  socket: {
    host: process.env.REDIS_HOST || 'localhost', // Default to localhost
    port: parseInt(process.env.REDIS_PORT, 10) || 6379, // Default to port 6379
  },
});

// Event listeners for Redis client
redisClient.on('error', (err) => {
  console.error('Redis Client Error', err);
});

redisClient.on('connect', () => {
  console.log('Connected to Redis');
});

// Connect to Redis
const connectRedis = async () => {
  await redisClient.connect();
};

connectRedis();

export const getRedisClient = () => {
  return redisClient;
};
