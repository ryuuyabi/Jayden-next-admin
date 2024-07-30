import { ComponentProps, ReactNode } from "react"

type Props = ComponentProps<'table'>&{
    className: string
    children: ReactNode
}

export default function Table({ className, children, ...props }: Props) {
    return (
        <table className={className} { ...props }>
            { children }
        </table>
    )
}
