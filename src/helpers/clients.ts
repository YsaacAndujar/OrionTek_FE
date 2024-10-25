import axios from "axios"
import { IClient, IClientCreate } from "interfaces/clients"
import { PaginationResponse } from "interfaces/generic"

export const getClients  = (params?: {EntitiesPerPage?: number, page?:number, name?: string}) =>{
    return axios.get<never, PaginationResponse<IClient>>('/Clients', {params})
}

export const getClient  = (id:string) =>{
    return axios.get<never, IClient>(`/Clients/${id}`, )
}

export const deleteClient  = (id:string) =>{
    return axios.delete(`/Clients/${id}`, )
}

export const updateClient  = (id:string, Client: IClientCreate) =>{
    return axios.put(`/Clients/${id}`, Client)
}

export const postClient  = (Client: IClientCreate) =>{
    return axios.post(`/Clients`, Client)
}