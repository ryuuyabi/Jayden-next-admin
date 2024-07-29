'use client'

import { ApiResponse } from "@/type/ApiResponse";
import { FormEvent } from "react";
import { GetJwt } from "../jwt/JwtService";

export async function FetchPost(e: FormEvent<HTMLFormElement>, url: string, body: object) {
    let data: null | ApiResponse<any> = null;
    let status: number = 500;
    let validationMessages = null;
    let isValidationError = false;
    let isError = false;

    try {
        e.preventDefault();
        e.stopPropagation();

        const method: string = 'POST';
        const credentials = 'include';
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer: ${await GetJwt()}`,
        };

        const response = await fetch(url, {
            method: method,
            credentials: credentials,
            headers: headers,
            body: JSON.stringify(body),
        });

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const apiResponse: ApiResponse<any> = await response.json();

        status = apiResponse.status

        // 正常
        if (apiResponse.status === 200) {
            data = apiResponse.data ?? null;
        }
        // バリデーションエラー
        if (apiResponse.status === 422) {
            validationMessages = apiResponse.data.errors;
            isValidationError = true;
        }
    } catch (error) {
        console.log(error);
        isError = true;
    }

    return { data, status, validationMessages, isValidationError, isError };
}
