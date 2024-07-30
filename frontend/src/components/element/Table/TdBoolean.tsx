import { ComponentProps } from "react"

type Props = ComponentProps<'td'>&{
    className: string,
    boolean: boolean
}

export default function TdBoolean({ className, boolean, ...props }: Props) {
    return (
        <td className={className} { ...props }>
            { boolean ? '○' : '×' }
        </td>
    )
}
