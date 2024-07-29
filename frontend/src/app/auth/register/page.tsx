'use client'

import FormDefault from "@/component/layout/Form/FormDefault";
import { onSubmitHandle } from "@/feature/form/onSubmitHandle";

export default function Page(){
    const { handleSubmit, handleChange, redirectUri } = onSubmitHandle('http://admin.localhost/api/auth/register/store', {email: ''})
    return (
        <main className="l-gest-main">
            <div className="l-gest">
                <div className="l-gest__container">
                    <FormDefault onSubmit={handleSubmit} className="l-gest__form">
                        <div className="l-gest__form__field">
                            <div className="l-gest__form__field__label">メールアドレス</div>
                            <input className="l-gest__form__field__input" type="email" name="email" onChange={handleChange} />
                        </div>
                        <button className="l-gest__form__button">アカウント新規作成申請</button>
                    </FormDefault>
                </div>
            </div>
        </main>
    )
}
