import React, { ChangeEvent, FormEvent, useState } from 'react'
import FormDefault from './FormDefault'
import SubmitButton from './SubmitButton'
import { FetchPost } from '@/features/form/FetchPost'
import FormFieldDefault from './Field/FormFieldDefault'

export default function UserCreateForm() {
    const [postData, setPostData] = useState({})

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        const response = await FetchPost(e, "http://admin.localhost/api/operator/store", postData)
    }
    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setPostData({ ...postData, name: e.target.value })
    }
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setPostData({ ...postData, email: e.target.value })
    }

    return (
        <FormDefault className="l-form" onSubmit={onSubmit}>
            <FormFieldDefault className="l-form__field" type="text" name="nickname" displayText="ニックネーム" onInputChange={onChangeName} />
            <FormFieldDefault className="l-form__field" type="email" name="email" displayText="メールアドレス" onInputChange={onChangeEmail} />
            <FormFieldDefault className="l-form__field" type="password" name="password" displayText="パスワード" onInputChange={onChangeEmail} />
            <SubmitButton displayText="新規登録" />
        </FormDefault>
    )
}
