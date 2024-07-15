'use client'

import DefaultFlashMessage from "@/component/layout/FlashMessage/DefaultFlashMessage"
import { FlashMessageTypeEnum } from "@/enum/FlashMessageType"

export default function Home() {
    return (
        <main>
            <DefaultFlashMessage message="ログインしてください" flash_message_type={FlashMessageTypeEnum['SUCCESS']} />
            <div>お知らせ一覧</div>
            <div>メッセージ一覧</div>
        </main>
    )
}
