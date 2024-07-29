'use client'

import { ChangeEvent, FormEvent, useRef, useState } from "react";
import FormDefault from "./FormDefault";
import { FetchPost } from "@/feature/form/FetchPost";
import FormFieldDefault from "./Field/FormFieldDefault";
import FormFiledTextarea from "./Field/FormFiledTextarea";
import SubmitButton from "./SubmitButton";
import FormFieldDate from "./Field/FormFieldDate";
import FormFieldSelect from "./Field/FormFieldSelect";
import { NewsTypeOptions } from "@/enum/NewsType";
import { redirect } from "next/navigation";
import CheckAuthOperator from "@/feature/auth/CheckAuthOperator";

export default function NewsCreateForm() {
    const [postData, setPostData] = useState({name: '', body: '', release_date: '', news_type: ''});
    const [errors, setErrors] = useState({name: '', body: '', release_date: '', news_type: ''});

    const isSubmitted = useRef(false)

    console.log(CheckAuthOperator())

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();

        const response = await FetchPost(e, "http://admin.localhost/api/news/store", postData)
        if (response === undefined) {
            return;
        }

        if (response.status === 200) {
            redirect("/news")
        }
        if (response.status === 422) {
            setErrors(response.data.errors)
        }
        isSubmitted.current = false;
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
    const onChangeNewsType = (e: ChangeEvent<HTMLSelectElement>) => {
        setPostData({ ...postData, release_date: e.target.value })
    }

    return (
        <FormDefault onSubmit={onSubmit} className="l-form">
            <FormFieldDefault className="l-form__field" type="text" name="name" displayText="名前" validationMessage={errors?.name} onInputChange={onChangeName} />
            <FormFiledTextarea className="l-form__field" name="body" displayText="本文" rows={14} onTextareaChange={onChangeBody} />
            <FormFieldDate className="l-form__field" name="release_date" displayText="公開日" onDateChange={onChangeReleaseDate} />
            <FormFieldSelect className="l-form__field" name="news_type" displayText="お知らせ種類" options={NewsTypeOptions} onSelectChange={onChangeNewsType} />
            <SubmitButton displayText="新規登録" />
        </FormDefault>
    )
}
