import Link from "next/link";
import { ComponentProps } from "react";

type Props = ComponentProps<'td'>&{
    className: string,
    displayText: string
    link: string
}

export default function TdShowLink({ className, displayText, link, ...props }: Props) {
    return (
        <td className={className} { ...props }>
            <Link href={link}>{ displayText }</Link>
        </td>
    )
}

