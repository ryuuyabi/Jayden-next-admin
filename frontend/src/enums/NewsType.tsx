export const NewsTypeEnum = {
    USER: 1,
    ADMIN: 2,
    EVERYONE: 3
} as const

export type NewsType = typeof NewsTypeEnum[keyof typeof NewsTypeEnum]

export const NewsTypeOptions = [
    { key: 'ユーザ', value: NewsTypeEnum['USER'] },
    { key: '管理者', value: NewsTypeEnum['ADMIN'] },
    { key: '全員', value: NewsTypeEnum['EVERYONE'] },
]
