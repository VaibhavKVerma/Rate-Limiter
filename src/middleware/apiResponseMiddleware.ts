const ApiResponseMiddleware = (req: any, res: any, next: any) => {
    if (res) {
        res.send(new ApiResponse(res.statusCode, res.body));
    }
    next();
};

class ApiResponse {
    status: number;
    body: any;
    timestamp: Date = new Date();
    constructor(statusCode: number, body: any) {
        this.status = statusCode;
        this.body = body;
        this.timestamp = new Date();
    };
}

export default ApiResponseMiddleware;