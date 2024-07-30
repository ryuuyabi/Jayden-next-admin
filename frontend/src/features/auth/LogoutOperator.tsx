'use server'

import { cookies } from "next/headers";

export async function LogoutOperator() {
    const cookie = cookies()
    cookie.delete('jwt')
}
