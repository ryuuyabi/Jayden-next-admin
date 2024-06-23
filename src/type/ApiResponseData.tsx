export interface FlashMessage {
    message: string
}

export interface IsLogin {
    is_login: boolean
}

export interface OperatorIndex {
    id: number
    personal_name: string
    nickname: string
    email: string
    is_active: boolean
    role: number
}

export interface OperatorShow {
    personal_name: string
    nickname: string
    email: string
    role: number
    is_notion: boolean
    is_active: boolean
}

export interface NewsIndex {
    id: number
    name: string
    release_date: string
    is_active: boolean
}

export interface NewsShow {
    id: number
    name: string
    body: string
    release_date: string
    is_active: boolean
}
