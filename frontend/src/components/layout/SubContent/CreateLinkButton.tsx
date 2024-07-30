import Link from "next/link";

type Props = {
    link: string
}

export default function CreateLinkButton({ link }: Props) {
    return (
        <div className="l-sub-content">
            <Link className="l-sub-content__create" href={link}>新規登録</Link>
        </div>
    )
}
