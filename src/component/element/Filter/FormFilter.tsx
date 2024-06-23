import { FormEvent, ReactNode } from "react"

type Props = {
    className: string
    children: ReactNode
}

export default function FormFilter({ className, children, ...props }: Props) {
    return (
        <form className={className} action="" method="GET" { ...props }>
            { children }
        </form>
    )
}
