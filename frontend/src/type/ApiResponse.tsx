export interface ApiResponse<T> {
    message: string
    status: number
    data_type: number
    data: T
}

export interface ApiResponsePagination<T> {
    message: string
    status: string
    data_type: number
    data: {
        current_page: number
        data: Array<T>
        next_page_url: string
        path: string
        per_page: number
        prev_page_url: string|null
        to: number
        total: number
    }
}
