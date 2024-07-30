'use server'

import { cookies } from 'next/headers'
import { jwtDecode } from "jwt-decode";

type DecodedJwtPayload = {
    operator_sub: number
    role: number
    nickname: string
    iat: number
    exp: number
    iss: string
    sub: string
    aud: string
}

export default async function CheckAuthOperator() {
    const cookie = cookies()
    const jwt = cookie.get('jwt')
    if (jwt === undefined) {
        return false
    }
    const payload: DecodedJwtPayload = jwtDecode(jwt.value)

    const today = new Date(Date.now())
    const exp = new Date(payload.exp)

    return true
}
