import { Redis } from "ioredis";

let redisClient: Redis;

const connectToRedis = async (): Promise<void> => {
    try {
        redisClient = new Redis({ host: 'localhost', port: 6379 });
        console.log('Connected to Redis');
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error connecting to Redis:', error.message);
        } else {
            console.error('Unknown error connecting to Redis');
        }
        throw error;
    }
}

const closeRedisConnection = async (): Promise<void> => {
    try {
        await redisClient.quit();
        console.log('Closed Redis connection');
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error closing Redis connection:', error.message);
        } else {
            console.error('Unknown error closing Redis connection');
        }
    }
}

export { connectToRedis, closeRedisConnection };