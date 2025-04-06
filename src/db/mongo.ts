import mongoose, { Error } from 'mongoose';
import { config } from '../util/config';
const connectToMongoDb = async (): Promise<void> => {
    try {
        await mongoose.connect(`mongodb://${config.MONGO_URI_USERNAME}:${config.MONGO_URI_PASSWORD}@localhost:27017`, {
            dbName: config.MONGO_DB_NAME,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error connecting to MongoDB:', error.message);
        } else {
            console.error('Unknown error connecting to MongoDB');
        }
        throw error;
    }
};

const closeMongoDbConnection = async (): Promise<void> => {
    try {
        await mongoose.connection.close();
        console.log('Closed MongoDB connection');
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error closing MongoDB connection:', error.message);
        } else {
            console.error('Unknown error closing MongoDB connection');
        }
    }
};

export { connectToMongoDb, closeMongoDbConnection };
