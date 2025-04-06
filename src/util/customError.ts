class CustomError extends Error {
    status?: number;

    constructor(message: string, statusCode: number = 500) {
        super(message);
        this.status = statusCode;
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

export default CustomError;