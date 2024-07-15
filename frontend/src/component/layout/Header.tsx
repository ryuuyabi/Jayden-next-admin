'use client'

import Image from "next/image"
import Sample1Image from "@image/sample1.jpeg";
import Link from "next/link";
import HeaderSearchForm from "./Header/HeaderSearchForm";
import { GetAuthOperator } from "@/endpoint/auth/GetAuthOperator";
import { createContext, useContext } from "react";

// ログイン状態の管理者のデータを保持するためにhookを作成
const AuthOperatorContext = createContext({ personal_id: '', name: '', icon_image_url: '' });

// ログイン状態の管理者を表示するコンポーネントです
const OperatorProfileLink = () => {
    const authOperator = useContext(AuthOperatorContext)
    return (
        <Link href={`/profile/${authOperator.personal_id}`} className="l-header__right__profile">
            <Image className="l-header__right__profile__icon" src={Sample1Image} width={42} height={42} alt="管理者アイコン" />
            <div>{authOperator.name}</div>
        </Link>
    )
}

export default function Header() {
    const authOperator = GetAuthOperator()?.data
    if (authOperator === undefined) {
        return (
            <div className="l-header">
            <div className="l-header__left">
                {/* <HeaderSearchForm /> */}
            </div>
            <div className="l-header__center"></div>
            <div className="l-header__right">
            </div>
        </div>
        )
    }
    return (
        <div className="l-header">
            <div className="l-header__left">
                {/* <HeaderSearchForm /> */}
            </div>
            <div className="l-header__center"></div>
            <div className="l-header__right">
                <AuthOperatorContext.Provider value={authOperator}>
                    <OperatorProfileLink />
                </AuthOperatorContext.Provider>
            </div>
        </div>
    )
}
