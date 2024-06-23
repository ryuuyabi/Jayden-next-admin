import { ApiResponse } from "@/type/ApiResponse";
import { FormEvent } from "react";

export async function FetchPost(e: FormEvent<HTMLFormElement>, url: string, body: object) {
    try {
            e.preventDefault();
            const response = await fetch(url, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            })
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            const data: ApiResponse<any> = await response.json()
            if (typeof data === undefined) {
                throw new Error('response no data')
            }
            return data
    } catch (error) {
        console.log(error)
    }
}
