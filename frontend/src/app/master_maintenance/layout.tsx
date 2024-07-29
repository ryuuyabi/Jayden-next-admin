import AuthLayout from "@/component/layout/AuthLayout";
import Header from "@/component/layout/Header";
import Sidebar from "@/component/layout/Sidebar";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "@style/index.scss";

export const metadata: Metadata = {
    title: "Jayden管理 | マスタメンテナンス",
    description: "jayden管理サイトのマスタメンテナンス画面",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
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
    );
}
