import { SelectOptions } from "@/types/Form"

export const IsActiveEnum = {
    OFF: 0,
    ON: 1,
} as const

export type IsActive = typeof IsActiveEnum[keyof typeof IsActiveEnum]

export const IsActiveOptions: SelectOptions = [
    { key: '行動不可', value: IsActiveEnum.OFF },
    { key: '行動可能', value: IsActiveEnum.ON },
]
