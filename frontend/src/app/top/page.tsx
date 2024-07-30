'use client'

import DefaultFlashMessage from "@/components/layout/FlashMessage/DefaultFlashMessage"
import TopNewsList from "@/components/layout/Top/TopNewsList"
import { FlashMessageTypeEnum } from "@/enums/FlashMessageType"

export default function Home() {
    return (
        <div className="l-main">
            <DefaultFlashMessage message="メッセージ" flash_message_type={FlashMessageTypeEnum['SUCCESS']} />
            <TopNewsList />
        </div>
    )
}
