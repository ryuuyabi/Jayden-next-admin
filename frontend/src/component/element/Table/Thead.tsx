import { ComponentProps, ReactNode } from "react"

type Props = ComponentProps<'thead'>&{
    className?: string
    children: ReactNode
}
export default function Thead({ className, children, ...props }: Props) {
    return (
        <thead className={className} { ...props }>{children}</thead>
    )
}
