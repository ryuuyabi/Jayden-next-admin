import { ComponentProps, ReactNode } from "react"

type Props = ComponentProps<'tbody'>&{
    className?: string
    children: ReactNode
}
export default function Tbody({ className, children, ...props }: Props) {
    return (
        <thead className={className} { ...props }>{children}</thead>
    )
}
