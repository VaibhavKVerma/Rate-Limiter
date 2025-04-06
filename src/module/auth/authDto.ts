class CreateJWTTokenRequest {
    userId: string;

    constructor(userId: string) {
        this.userId = userId;
    }
}

class VerifyJWTTokenRequest {
    token: string;

    constructor(token: string) {
        this.token = token;
    }
}

class VerifyJWTTokenResponse {
    token: string;

    constructor(token: string) {
        this.token = token;
    }
}

export { CreateJWTTokenRequest, VerifyJWTTokenRequest, VerifyJWTTokenResponse };
