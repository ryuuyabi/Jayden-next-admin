import AuthLayout from "@/component/layout/AuthLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Jayden管理 | メールマガジン",
    description: "jayden管理サイトのメールマガジン一覧画面",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <AuthLayout>
            {children}
        </AuthLayout>
    );
}
