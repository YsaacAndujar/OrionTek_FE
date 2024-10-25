export interface ILoginRequest {
    username: string,
    password: string
}

export interface ILoginResponse {
    token: string,
}

export interface IForgotPasswordRequest {
    username: string,
}

export interface IRecoverPasswordRequest {
    username: string,
    code: string,
    password: string,
}