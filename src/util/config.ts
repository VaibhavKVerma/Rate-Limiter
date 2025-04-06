interface Config {
    JWT_SECRET: string;
    JWT_EXPIRY: any;
    PORT: number;
    MONGO_URI_USERNAME: string;
    MONGO_URI_PASSWORD: string;
    MONGO_DB_NAME: string;
    REDIS_HOST: string;
    REDIS_PORT: number;
}

let config: Config;

const init = (): Config => {
    const JWT_SECRET = process.env.JWT_SECRET || '';
    const JWT_EXPIRY: any = Number(process.env.JWT_EXPIRY) || '1d';
    const PORT = Number(process.env.PORT) || 3000;
    const MONGO_URI_USERNAME = process.env.MONGO_URI_USERNAME || '';
    const MONGO_URI_PASSWORD = process.env.MONGO_URI_PASSWORD || '';
    const MONGO_DB_NAME = process.env.MONGO_DB_NAME || '';
    const REDIS_HOST = process.env.REDIS_HOST || '';
    const REDIS_PORT = Number(process.env.REDIS_PORT) || 6379;
    config = { JWT_SECRET, JWT_EXPIRY, PORT, MONGO_URI_USERNAME, MONGO_URI_PASSWORD, MONGO_DB_NAME, REDIS_HOST, REDIS_PORT };
    return config;
};

export {init, config};