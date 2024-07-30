'use client'

import UserCooking from "@/components/layout/User/UserCooking"
import UserDetail from "@/components/layout/User/UserDetail"
import UserNotification from "@/components/layout/User/UserNotification"

export default function Home() {
    return (
        <main>
            <UserDetail />
            <UserNotification />
            <UserCooking />
        </main>
    )
}
