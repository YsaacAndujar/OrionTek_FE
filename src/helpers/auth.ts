import axios from "axios"
import { IForgotPasswordRequest, ILoginRequest, ILoginResponse, IRecoverPasswordRequest } from "interfaces/auth"

export const postLogin  = (data: ILoginRequest) =>{
    return axios.post<never, ILoginResponse>('auth/login', data)
}

export const postSignin  = (data: ILoginRequest) =>{
    return axios.post<never, ILoginResponse>('auth/signin', data)
}

export const postForgotPassword  = (data: IForgotPasswordRequest) =>{
    return axios.post('auth/forgot-password', data)
}

export const postRecoverPassword  = (data: IRecoverPasswordRequest) =>{
    return axios.put<never, ILoginResponse>('auth/password-by-code', data)
}