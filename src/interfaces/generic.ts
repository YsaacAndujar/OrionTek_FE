import { IProfile } from "./profile"

export interface GenericEntity {
    id: number
    createdAt: string
    modifiedAt: string
    createdBy: IProfile
    updatedBy: IProfile
}

export  interface PaginationResponse<T> {
    totalPages: number
    totalEntities: number
    data: T[]
}