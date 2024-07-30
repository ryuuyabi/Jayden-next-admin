type Props = {
    isOpen: boolean
    modalClick: any
}

export default function FormModal({ isOpen, modalClick }: Props) {
    if (isOpen) {
        return (
            <div className="l-modal" onClick={modalClick}>
                <div className="l-modal--container">モーダル</div>
            </div>
        )
    } else {
        return ''
    }
}
