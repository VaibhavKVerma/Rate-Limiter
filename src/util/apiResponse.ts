class ApiResponse {
    statusCode: number;
    body: any;
    constructor(statusCode: number, body: any) {
        this.statusCode = statusCode;
        this.body = body;
    };
}

export default ApiResponse;