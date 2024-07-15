import { ComponentProps } from "react"

type Props = ComponentProps<'td'>&{
    className: string,
    displayText: number
}

export default function TdId({ className, displayText, ...props }: Props) {
    return (
        <td className={className} { ...props }>{ displayText }</td>
    )
}
