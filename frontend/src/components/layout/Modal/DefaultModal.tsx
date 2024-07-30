import { ReactNode } from "react"

type Props = {
    isOpen: boolean
    modalClick: any
    children: ReactNode
}

export default function DefaultModal({ isOpen, modalClick, children }: Props) {
    if (isOpen) {
        return (
            <div className="l-modal" onClick={modalClick}>{children}</div>
        )
    } else {
        return ''
    }
}
