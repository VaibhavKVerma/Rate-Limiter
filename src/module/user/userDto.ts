class UserSignupRequest {
    name: string;
    email: string;
    password: string;

    constructor(name: string, email: string, password: string) {
        this.name = name;
        this.email = email;
        this.password = password;
    };
}

class UserLoginRequest {
    email: string;
    password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    };
}

class UserSignupResponse {
    token: string;
    constructor(token: string) {
        this.token = token;
    };
}

class UserLoginResponse {
    token: string;
    constructor(token: string) {
        this.token = token;
    };
}

export {
    UserSignupRequest,
    UserLoginRequest,
    UserSignupResponse,
    UserLoginResponse,
}