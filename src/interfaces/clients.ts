import { GenericEntity } from "./generic"

export interface IClient extends GenericEntity {
    name: string
    directions: IDirections[]
}

export interface IDirections {
    name: string
}

export interface IClientCreate {
    name: string
    directions: IDirections[]
}