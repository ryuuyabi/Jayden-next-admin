import AuthLayout from "@/components/layout/AuthLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Jayden管理 | ユーザ",
    description: "jayden管理サイトのユーザ系画面",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <AuthLayout>
            {children}
        </AuthLayout>
    );
}
