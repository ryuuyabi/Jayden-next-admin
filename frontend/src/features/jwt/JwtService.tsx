'use server'

import { cookies } from "next/headers"

export async function GetJwt() {
    const cookie = cookies()
    const jwt = cookie.get('jwt')
    if (jwt === undefined) {
        new Error('not found jwt')
        return false
    }
    return jwt.value
}
