import { MouseEvent, useState } from 'react'

export default function useDefaultModal() {
    const [isOpen, setIsOpen] = useState(false)

    const onClickOpenModal = () => {
        setIsOpen(true)
    }
    const onClickCloseModal = () => {
        setIsOpen(true)
    }
    const onClickModal = (e: MouseEvent<HTMLDivElement>): void => {
        if(e.currentTarget === e.target) setIsOpen(false);
    }

    return { isOpen, onClickOpenModal, onClickCloseModal, onClickModal }
}
