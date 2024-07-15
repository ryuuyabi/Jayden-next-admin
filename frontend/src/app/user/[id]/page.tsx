'use client'

import UserCooking from "@/component/layout/User/UserCooking"
import UserDetail from "@/component/layout/User/UserDetail"
import UserNotification from "@/component/layout/User/UserNotification"

export default function Home() {
    return (
        <main>
            <UserDetail />
            <UserNotification />
            <UserCooking />
        </main>
    )
}
