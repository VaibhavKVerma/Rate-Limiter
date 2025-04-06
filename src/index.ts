import dotenv from "dotenv";
import app from './app';
import { connectToMongoDb, closeMongoDbConnection } from './db/mongo';

dotenv.config();

const init = async (): Promise<void> => {
    try {
        const portNumber: string = process.env.PORT || '';
        await connectToMongoDb();
        const handleClose = async (): Promise<void> => {
            await closeMongoDbConnection();
            process.exit(0);
        };

        process.on('SIGINT', handleClose);
        process.on('SIGTERM', handleClose);

        app.listen(Number(portNumber), () => {
            console.log(`Server started on PORT ${portNumber}`);
        });
    } catch (error) {
        if (error instanceof Error) {
            console.error('Initialization error:', error.message);
        } else {
            console.error('Unknown error during initialization');
        }
        process.exit(1);
    }
};

init();