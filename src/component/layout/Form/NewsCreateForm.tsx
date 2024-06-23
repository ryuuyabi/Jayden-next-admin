'use client'

import { ChangeEvent, FormEvent, useState } from "react";
import FormDefault from "./FormDefault";
import { FetchPost } from "@/feature/form/FetchPost";
import FormFieldDefault from "./Field/FormFieldDefault";
import FormFiledTextarea from "./Field/FormFiledTextarea";
import SubmitButton from "./SubmitButton";
import FormFieldDate from "./Field/FormFieldDate";

export default function NewsCreateForm() {
    const [postData, setPostData] = useState({name: '', body: '', release_date: ''})
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        const response = await FetchPost(e, "http://admin.localhost/api/news/store", postData)
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
            <FormFieldDefault className="l-form__field" type="text" name="name" displayText="名前" onInputChange={onChangeName} />
            <FormFiledTextarea className="l-form__field" name="body" displayText="本文" rows={14} onTextareaChange={onChangeBody} />
            <FormFieldDate className="l-form__field" name="release_date" displayText="公開日" onDateChange={onChangeReleaseDate} />
            <SubmitButton displayText="新規登録" />
        </FormDefault>
    )
}
