import { Redis } from 'ioredis'; // Importa la CLASE Redis

let redisClient: Redis | null = null; // Tipo Redis (la clase)

export const connectRedis = () => {
  if (redisClient) {
    return redisClient;
  }
  redisClient = new Redis({ // Crea una INSTANCIA de Redis
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT || '6379', 10), // Base 10 para parseInt
    password: process.env.REDIS_PASSWORD, // No es necesario || undefined
    db: parseInt(process.env.REDIS_DB || '0', 10) // Base 10 para parseInt
  });

  redisClient.on('error', (err) => console.error('Redis error:', err)); // No es necesario tipar err como string
  redisClient.on('connect', () => console.log('Connected to Redis'));

  return redisClient;
};

export default connectRedis;