'use client'

import DefaultFlashMessage from "@/component/layout/FlashMessage/DefaultFlashMessage"
import TopActiveHistoryList from "@/component/layout/Top/TopActiveHistoryList"
import TopNewsList from "@/component/layout/Top/TopNewsList"
import { FlashMessageTypeEnum } from "@/enum/FlashMessageType"

export default function Home() {
    return (
        <div className="l-main">
            <DefaultFlashMessage message="メッセージ" flash_message_type={FlashMessageTypeEnum['SUCCESS']} />
            <TopNewsList />
            {/* <TopActiveHistoryList /> */}
        </div>
    )
}
