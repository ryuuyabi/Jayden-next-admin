export const FlashMessageTypeEnum = {
    SUCCESS: 1,
    DANGER: 2
} as const

export type FlashMessageType = typeof FlashMessageTypeEnum[keyof typeof FlashMessageTypeEnum]
