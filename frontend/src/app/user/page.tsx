'use client'

import DefaultFlashMessage from "@/component/layout/FlashMessage/DefaultFlashMessage"
import UserIndexSubContent from "@/component/layout/SubContent/UserIndexSubContent"
import UserIndexTable from "@/component/layout/Table/UserIndexTable"
import { FlashMessageTypeEnum } from "@/enum/FlashMessageType"

export default function Home() {
    return (
        <div className="l-main">
            <DefaultFlashMessage message="ユーザを削除しました" flash_message_type={FlashMessageTypeEnum['SUCCESS']} />
            <UserIndexSubContent />
            <UserIndexTable />
        </div>
    )
}
