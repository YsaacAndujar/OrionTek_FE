export interface ILoginRequest {
    email: string,
    password: string
}

export interface ISigninRequest extends ILoginRequest {

}

export interface ILoginResponse {
    token: string,
}

export interface IForgotPasswordRequest {
    email: string,
}

export interface IRecoverPasswordRequest {
    userId: number,
    code: string,
    password: string,
}