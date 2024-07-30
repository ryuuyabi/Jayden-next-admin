import AuthLayout from "@/components/layout/AuthLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Jayden管理 | TOP",
    description: "jayden管理サイトのTOP画面",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <AuthLayout>
            {children}
        </AuthLayout>
    );
}
