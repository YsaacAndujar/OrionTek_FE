import axios from "axios"
import { IChangePassword, IProfile, IUpdateProfile } from "interfaces/profile"

export const getProfile  = () =>{
    return axios.get<never, IProfile>(`/authentication/me`, )
}

export const updateProfile  = (profile: IUpdateProfile) =>{
    return axios.put(`/authentication/me`, profile)
}

export const updatePassword = (data: IChangePassword) =>{
    return axios.put(`/authentication/changePassword`, data)
}