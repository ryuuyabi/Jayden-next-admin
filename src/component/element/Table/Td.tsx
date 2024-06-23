import { ComponentProps } from "react"

type Props = ComponentProps<'td'>&{
    className: string,
    displayText: string|number
}

export default function Td({ className, displayText, ...props }: Props) {
    return (
        <td className={className} { ...props }>{ displayText }</td>
    )
}
