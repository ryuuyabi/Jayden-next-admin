import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@styles/index.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Jayden管理 | アカウント作成申請",
    description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="jp">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    );
}
