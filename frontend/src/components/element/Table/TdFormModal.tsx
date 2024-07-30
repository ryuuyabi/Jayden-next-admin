import { ComponentProps } from "react"

type Props = ComponentProps<'td'>&{
    className: string,
    displayText: string|number
    closeModal: any
}

export default function TdFormModal({ className, displayText, closeModal, ...props }: Props) {
    return (
        <td className={className} onClick={closeModal} { ...props }>{ displayText }</td>
    )
}
