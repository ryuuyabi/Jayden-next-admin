import AuthLayout from "@/components/layout/AuthLayout";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "@styles/index.scss";

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
