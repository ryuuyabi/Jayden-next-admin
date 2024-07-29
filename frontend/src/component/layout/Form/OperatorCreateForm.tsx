'use client'

import FormFieldDefault from "./Field/FormFieldDefault";
import FormFieldSelect from "./Field/FormFieldSelect";
import FormDefault from "./FormDefault";
import SubmitButton from "./SubmitButton";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { OperatorRoleOptions } from "@/enum/OperatorRole";
import { FetchPost } from "@/feature/form/FetchPost";
import { redirect } from "next/navigation";

export default function OperatorCreateForm() {
    const [postData, setPostData] = useState({personal_name: '', nickname: '', email: '', password: '', role: ''});
    const [errors, setErrors] = useState({personal_name: '', nickname: '', email: '', password: '', role: ''});
    const isSubmitted = useRef(false)

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        if (isSubmitted.current) return;
        isSubmitted.current = true;

        const response = await FetchPost(e, "http://admin.localhost/api/operator/store", postData);

        isSubmitted.current = false;
    }

    const onChangeNickname = (e: ChangeEvent<HTMLInputElement>) => {
        setPostData({ ...postData, nickname: e.target.value })
    }
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setPostData({ ...postData, email: e.target.value })
    }
    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPostData({ ...postData, password: e.target.value })
    }
    const onChangeRole = (e: ChangeEvent<HTMLSelectElement>) => {
        setPostData({ ...postData, role: e.target.value })
    }

    return (
        <FormDefault onSubmit={onSubmit} className="l-form">
            <FormFieldSelect className="l-form__field" name="role" displayText="権限" options={OperatorRoleOptions} onSelectChange={onChangeRole} />
            <FormFieldDefault className="l-form__field" type="text" name="nickname" displayText="ニックネーム" validationMessage={errors.nickname} onInputChange={onChangeNickname} />
            <FormFieldDefault className="l-form__field" type="email" name="email" displayText="メールアドレス" validationMessage={errors.email} onInputChange={onChangeEmail} />
            <FormFieldDefault className="l-form__field" type="password" name="password" displayText="パスワード" validationMessage={errors.password} onInputChange={onChangePassword} />
            <SubmitButton displayText="新規登録" />
        </FormDefault>
    )
}
