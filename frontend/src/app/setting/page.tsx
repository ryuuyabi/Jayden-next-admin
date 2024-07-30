'use client'

import { LogoutOperator } from "@/features/auth/LogoutOperator"

export default function Home() {
    const onClickLogout = () => {
        LogoutOperator()
    }
    return (
        <main>
            <div>設定画面</div>
            <div onClick={onClickLogout}>ログアウト</div>
        </main>
    )
}
