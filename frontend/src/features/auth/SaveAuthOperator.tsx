'use server'

import { cookies } from "next/headers";

export async function SaveAuthOperator(jwt: string) {
    const cookie = cookies()
    cookie.set('jwt', jwt)
}
