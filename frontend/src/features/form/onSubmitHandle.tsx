'use client'

import { FormEvent, useState } from "react";
import { FetchPost } from "./FetchPost";
import { ApiResponse } from "@/types/ApiResponse";

export function onSubmitHandle<T>(url: string, initialFormData: object) {
    const [response, setResponse] = useState<ApiResponse<T>|null>(null)
    const [redirectUri, setRedirectUri] = useState<string|null>(null)
    const [formData, setFormData] = useState(initialFormData)
    const [isPostFetching, setIsPostFetching] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();

        const apiResponse = await FetchPost<T>(e, url, formData);

        if (apiResponse && apiResponse.data) {
            setRedirectUri(apiResponse.data.redirectUri)
            setResponse(response);
            setIsPostFetching(true);
        }
    };

    return { handleSubmit, handleChange, isPostFetching, redirectUri, response }
}
