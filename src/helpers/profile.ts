import axios from "axios"
import { IPasswordRequest, IProfile } from "interfaces/profile"

export const getProfile  = () =>{
    return axios.get<never, IProfile>(`/auth/profile`, )
}

export const updateProfile  = (profile: IProfile) =>{
    return axios.put(`/auth/profile`, profile)
}

export const updatePassword = (data: IPasswordRequest) =>{
    return axios.put(`/auth/password`, data)
}