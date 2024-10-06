export const __prod__ = process.env.NODE_ENV === 'production';

// Database Configuration
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_PORT = Number(process.env.DB_PORT) || 5432;
export const DB_USERNAME = process.env.DB_USERNAME || 'postgres';
export const DB_PASSWORD = process.env.DB_PASSWORD || 'postgres';
export const DB_NAME = process.env.DB_NAME || 'uber_like_app';

// JWT Configuration
export const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// Server Configuration
export const PORT = process.env.PORT || 4000;

// Other Constants
export const MAX_UPLOAD_SIZE = 10 * 1024 * 1024; // 10MB

// Example of Environment-specific Configuration
export const API_URL = __prod__
  ? 'https://api.production.com'
  : 'http://localhost:3000';
