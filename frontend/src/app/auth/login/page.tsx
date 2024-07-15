'use client'

import FormDefault from "@/component/layout/Form/FormDefault";
import { FetchPost } from "@/feature/form/FetchPost";
import { ChangeEvent, FormEvent, useState } from "react";

export default function Page() {
    const [postData, setPostData] = useState({email: '', password: ''})

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        await FetchPost(e, "http://admin.localhost/api/auth/login/store", postData)
    }

    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setPostData({ ...postData, email: e.target.value })
    }
    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPostData({ ...postData, password: e.target.value })
    }

    return (
        <main>
            <div>ログイン画面</div>
            <FormDefault onSubmit={onSubmit} className="">
                <div>メールアドレス : <input type="text" name="email" onChange={onChangeEmail} /></div>
                <div>パスワード : <input type="password" name="password" onChange={onChangePassword} /></div>
                <div>
                    <button>ログイン</button>
                </div>
            </FormDefault>
        </main>
    )
}
