'use client'

import FormFieldDefault from "./Field/FormFieldDefault";
import FormFieldSelect from "./Field/FormFieldSelect";
import FormDefault from "./FormDefault";
import SubmitButton from "./SubmitButton";
import { ChangeEvent, FormEvent, useState } from "react";
import { OperatorRoleOptions } from "@/enum/OperatorRole";
import { FetchPost } from "@/feature/form/FetchPost";
import DefaultSwr from "@/feature/api/DefaultSwr";
import { OperatorShow } from "@/type/ApiResponseData";
import { getId } from "@/feature/url/getPathName";

export default function OperatorShowForm() {
    const [postData, setPostData] = useState({personal_name: '', nickname: '', email: '', password: '', role: ''})
    const { data, error } = DefaultSwr<OperatorShow>(`http://admin.localhost/api/operator/${getId()}`)
    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        await FetchPost(e, "http://admin.localhost/api/operator/store", postData)
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
    const onChangeRole = (e: ChangeEvent<HTMLSelectElement>) => {
        setPostData({ ...postData, role: e.target.value })
    }

    return (
        <FormDefault onSubmit={onSubmit} className="l-form">
            <FormFieldSelect className="l-form__field" name="role" displayText="権限" options={OperatorRoleOptions} onSelectChange={onChangeRole} />
            <FormFieldDefault className="l-form__field" type="text" name="personal_name" displayText="個人名" value={data.data.personal_name} onInputChange={onChangePersonalName} />
            <FormFieldDefault className="l-form__field" type="text" name="nickname" displayText="ニックネーム" value={data.data.nickname} onInputChange={onChangeNickname} />
            <FormFieldDefault className="l-form__field" type="email" name="email" displayText="メールアドレス" value={data.data.email} onInputChange={onChangeEmail} />
            <SubmitButton displayText='更新' />
        </FormDefault>
    )
}
