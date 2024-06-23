import { ComponentProps } from "react"

type Props = ComponentProps<'tr'>&{
    className: string
}

export default function Tr({ className, children, ...props }: Props) {
    return (
        <tr className={className} { ...props }>{ children }</tr>
    )
}
