import AuthLayout from "@/component/layout/AuthLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Jayden管理 | 設定",
    description: "jayden管理サイトの設定画面",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <AuthLayout>
            {children}
        </AuthLayout>
    );
}
