'use client'

import { ChangeEvent, FormEvent, useState } from "react";
import FormDefault from "./FormDefault";
import { FetchPost } from "@/feature/form/FetchPost";
import FormFieldDefault from "./Field/FormFieldDefault";
import FormFiledTextarea from "./Field/FormFiledTextarea";
import SubmitButton from "./SubmitButton";
import FormFieldDate from "./Field/FormFieldDate";
import DefaultSwr from "@/feature/api/DefaultSwr";
import { getId } from "@/feature/url/getPathName";
import { NewsShow } from "@/type/ApiResponseData";

export default function NewsShowForm() {
    const [postData, setPostData] = useState({name: '', body: '', release_date: ''})
    const { data, error } = DefaultSwr<NewsShow>(`http://admin.localhost/api/news/${getId()}`)
    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        await FetchPost(e, "http://admin.localhost/api/news/store", postData)
    }
    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setPostData({ ...postData, name: e.target.value })
    }
    const onChangeBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setPostData({ ...postData, body: e.target.value })
    }
    const onChangeReleaseDate = (e: ChangeEvent<HTMLDataElement>) => {
        setPostData({ ...postData, release_date: e.target.value })
    }

    return (
        <FormDefault onSubmit={onSubmit} className="l-form">
            <FormFieldDefault className="l-form__field" type="text" name="name" displayText="名前" value={data.data.name} onInputChange={onChangeName} />
            <FormFiledTextarea className="l-form__field" name="body" displayText="本文" rows={14} value={data.data.body} onTextareaChange={onChangeBody} />
            <FormFieldDate className="l-form__field" name="release_date" displayText="公開日" value={data.data.release_date} onDateChange={onChangeReleaseDate} />
            <SubmitButton displayText="更新" />
        </FormDefault>
    )
}
