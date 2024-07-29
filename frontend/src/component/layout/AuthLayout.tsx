import React, { ReactNode } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Inter } from 'next/font/google'
import "@style/index.scss";

type Props = {
    children: ReactNode
}

const inter = Inter({ subsets: ["latin"] });

export default function AuthLayout({ children }: Props) {
    return (
        <html lang="jp">
            <body className={inter.className}>
                <Sidebar />
                <main className="l-main-container">
                    <Header />
                    {children}
                </main>
            </body>
        </html>
    )
}
