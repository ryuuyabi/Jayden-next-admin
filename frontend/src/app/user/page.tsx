'use client'

import DefaultFlashMessage from "@/components/layout/FlashMessage/DefaultFlashMessage"
import UserIndexSubContent from "@/components/layout/SubContent/UserIndexSubContent"
import UserIndexTable from "@/components/layout/Table/UserIndexTable"
import { FlashMessageTypeEnum } from "@/enums/FlashMessageType"

export default function Home() {
    return (
        <div className="l-main">
            <DefaultFlashMessage message="ユーザを削除しました" flash_message_type={FlashMessageTypeEnum['SUCCESS']} />
            <UserIndexSubContent />
            <UserIndexTable />
        </div>
    )
}
