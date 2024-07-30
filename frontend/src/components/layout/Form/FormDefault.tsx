import { ComponentProps, ReactNode } from "react"

type Props = ComponentProps<'form'>&{
    className: string
    children: ReactNode
}

export default function FormDefault({ className, children, ...props }: Props) {
    return (
        <form className={className} method="POST" { ...props }>
            { children }
        </form>
    )
}
