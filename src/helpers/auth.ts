import axios from "axios"
import { IForgotPasswordRequest, ILoginRequest, ILoginResponse, IRecoverPasswordRequest } from "interfaces/auth"

export const postLogin = (data: ILoginRequest) => {
    return axios.post<never, ILoginResponse>('authentication/login', data)
}

export const postSignin = (data: ILoginRequest) => {
    return axios.post<never, ILoginResponse>('authentication/signin', data)
}

export const postRequestPasswordRecovery = (data: IForgotPasswordRequest) => {
    return axios.post('authentication/requestPasswordRecovery', data)
}

export const postRecoverPassword = (data: IRecoverPasswordRequest) => {
    return axios.put<never, ILoginResponse>('authentication/passwordRecovery', data)
}