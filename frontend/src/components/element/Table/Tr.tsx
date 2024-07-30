import { ComponentProps, ReactNode } from "react"

type Props = ComponentProps<'tr'>&{
    className: string
    children: ReactNode
}

export default function Tr({ className, children, ...props }: Props) {
    return (
        <tr className={className} { ...props }>{ children }</tr>
    )
}
