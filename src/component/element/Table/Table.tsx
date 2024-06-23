import { ComponentProps } from "react"

type Props = ComponentProps<'table'>&{
    className: string
}

export default function Table({ className, children, ...props }: Props) {
    return (
        <table className={className} { ...props }>
            { children }
        </table>
    )
}
