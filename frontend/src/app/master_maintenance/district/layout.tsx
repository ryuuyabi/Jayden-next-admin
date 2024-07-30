import AuthLayout from "@/components/layout/AuthLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Jayden管理 | マスタメンテナンス | 地区",
    description: "jayden管理サイトのマスタメンテナンス地区画面",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <AuthLayout>
            {children}
        </AuthLayout>
    );
}
