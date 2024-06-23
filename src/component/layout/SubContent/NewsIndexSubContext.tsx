import Link from "next/link";

export default function NewsIndexSubContext() {
    return (
        <div className="l-sub-content">
            <Link className="l-sub-content__create" href="news/create">新規登録</Link>
        </div>
)
}
