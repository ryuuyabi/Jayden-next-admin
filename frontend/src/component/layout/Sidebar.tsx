import Link from "next/link";

export default function Sidebar() {
    return (
        <div className="l-sidebar">
            <div className="l-sidebar__item">
                <Link href="/top" className="l-sidebar__item__link">HOME</Link>
            </div>
            <div className="l-sidebar__item">
                <Link href="/user" className="l-sidebar__item__link">ユーザ</Link>
            </div>
            <div  className="l-sidebar__item">
                <Link href="/operator" className="l-sidebar__item__link">管理者</Link>
            </div>
            <div  className="l-sidebar__item">
                <Link href="/operator" className="l-sidebar__item__link">管理者作成申請</Link>
            </div>
            <div  className="l-sidebar__item">
                <Link href="/news" className="l-sidebar__item__link">お知らせ</Link>
            </div>
            <div  className="l-sidebar__item">
                <Link href="/mail_magazine" className="l-sidebar__item__link">メールマガジン</Link>
            </div>
            <div  className="l-sidebar__item">
                <Link href="/file" className="l-sidebar__item__link">ファイル</Link>
            </div>
            <div  className="l-sidebar__item">
                <Link href="/master_maintenance" className="l-sidebar__item__link">マスタメンテナンス</Link>
            </div>
            <div  className="l-sidebar__item">
                <Link href="/setting" className="l-sidebar__item__link">設定</Link>
            </div>
        </div>
    )
}
