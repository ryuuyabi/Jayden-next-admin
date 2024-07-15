import { ComponentProps } from "react"

type Props = ComponentProps<'th'>&{
    className: string,
    displayText: string|number
}

export default function Th({ className, displayText, ...props }: Props) {
    return (
        <th className={className} { ...props }>{ displayText }</th>
    )
}
