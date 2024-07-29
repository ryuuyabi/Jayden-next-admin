'use client'

import { FormEvent, useState } from "react";
import { FetchPost } from "./FetchPost";

export function onSubmitHandle(url: string, initialFormData: object) {
    const [response, setResponse] = useState<any>()
    const [redirectUri, setRedirectUri] = useState<string|null>(null)
    const [formData, setFormData] = useState(initialFormData)
    const [isPostFetching, setIsPostFetching] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();

        const response = await FetchPost(e, url, formData);

        setRedirectUri(response.data === null ? null : response.data.redirectUri)
        setResponse(response);
        setIsPostFetching(true);
    };

    return { handleSubmit, handleChange, isPostFetching, redirectUri }
}
