export interface GetAuthOperatorEndpoint{
    personal_id: string
    name: string
    icon_image_url: string
    access_token_at: string
    refresh_token_at: string
}

export interface AuthOperatorContext{
    personal_id: number|string
    name: string
    icon_image_url: string
}
