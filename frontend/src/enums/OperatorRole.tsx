import { SelectOptions } from "@/types/Form"

export const OperatorRoleEnum = {
    MASTER_ADMIN: 1,
    ADMIN: 2,
    GENERAL: 3,
    EXTERNAL: 4,
} as const

export type OperatorRole = typeof OperatorRoleEnum[keyof typeof OperatorRoleEnum]

export const OperatorRoleDescription = (name: OperatorRole): string => {
    switch (name) {
        case 1:
            return 'マスタ管理者'
        case 2:
            return '通常管理者'
        case 3:
            return '一般'
        case 4:
            return '外部'
    }
}

export const OperatorRoleOptions: SelectOptions = [
    { key: 'マスタ管理者', value: 1 },
    { key: '通常管理者', value: 2 },
    { key: '一般管理者', value: 3 },
    { key: '外部管理者', value: 4 },
]
