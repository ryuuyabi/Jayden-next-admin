'use client'

import FormFieldDefault from "./Field/FormFieldDefault";
import FormFieldSelect from "./Field/FormFieldSelect";
import FormDefault from "./FormDefault";
import SubmitButton from "./SubmitButton";
import { ChangeEvent, FormEvent, useState } from "react";
import { OperatorRoleOptions } from "@/enum/OperatorRole";
import { FetchPost } from "@/feature/form/FetchPost";

export default function OperatorCreateForm() {
    const [postData, setPostData] = useState({personal_name: '', nickname: '', email: '', password: '', role: ''})
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        const response = await FetchPost(e, "http://admin.localhost/api/operator/store", postData)
    }
    const onChangePersonalName = (e: ChangeEvent<HTMLInputElement>) => {
        setPostData({ ...postData, personal_name: e.target.value })
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
            <FormFieldDefault className="l-form__field" type="text" name="personal_name" displayText="個人名" onInputChange={onChangePersonalName} />
            <FormFieldDefault className="l-form__field" type="text" name="nickname" displayText="ニックネーム" onInputChange={onChangeNickname} />
            <FormFieldDefault className="l-form__field" type="email" name="email" displayText="メールアドレス" onInputChange={onChangeEmail} />
            <FormFieldDefault className="l-form__field" type="password" name="password" displayText="パスワード" onInputChange={onChangePassword} />
            <SubmitButton displayText="新規登録" />
        </FormDefault>
    )
}
