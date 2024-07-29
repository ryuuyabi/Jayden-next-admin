'use client'

import FormDefault from "@/component/layout/Form/FormDefault";
import ValidationErrorMessage from "@/component/layout/Form/ValidationErrorMessage";
import { SaveAuthOperator } from "@/feature/auth/SaveAuthOperator";
import { FetchPost } from "@/feature/form/FetchPost";
import Link from "next/link";
import { redirect } from 'next/navigation'
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";

export default function Page() {
    const [postData, setPostData] = useState({email: '', password: ''});
    const [errors, setErrors] = useState<null|{email: string|null, password: string|null}>(null);
    const [redirectUriPath, setRedirectUriPath] = useState<string>('');

    const isSubmitted = useRef(false)

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();

        if (isSubmitted.current) return;
        isSubmitted.current = true;

        const response = await FetchPost(e, "http://admin.localhost/api/auth/login/store", postData)
        console.log(response)
        if (response.status ===  422) {
            setErrors(response.data.errors)
        }

        if (response.status === 200) {
            SaveAuthOperator(response.data.jwt);
            setRedirectUriPath(response.data.redirect_uri_path);
        }
        isSubmitted.current = false;
    }

    useEffect(() => {
        if (redirectUriPath === '') {
            return;
        }
        redirect(redirectUriPath)
    },[redirectUriPath])

    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setPostData({ ...postData, email: e.target.value })
    }
    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPostData({ ...postData, password: e.target.value })
    }

    return (
        <main className="l-gest-main">
            <div className="l-gest">
                {/* <div className="login-error-message">管理者のログインに失敗しました</div> */}
                <div className="l-gest__container">
                    <FormDefault onSubmit={onSubmit} className="l-gest__form">
                        <div className="l-gest__form__field">
                            <div className="l-gest__form__field__label">メールアドレス</div>
                            <input className="l-gest__form__field__input" type="text" name="email" onChange={onChangeEmail} />
                            { errors && errors.email ? <ValidationErrorMessage displayText={errors.email} /> : '' }
                        </div>
                        <div className="l-gest__form__field">
                            <div className="l-gest__form__field__label">パスワード</div>
                            <input className="l-gest__form__field__input" type="password" name="password" onChange={onChangePassword} />
                            { errors && errors.password ? <ValidationErrorMessage displayText={errors.password} /> : '' }
                        </div>
                        <button className="l-gest__form__button">ログイン</button>
                    </FormDefault>
                    <div className="l-gest__register-form">
                        <Link className="l-gest__register-form__link" href="/auth/register">アカウント作成申請</Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
