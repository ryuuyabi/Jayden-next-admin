import { FlashMessageType } from "@/enums/FlashMessageType"

type Props = {
    message: string
    flash_message_type: FlashMessageType
}

export default function DefaultFlashMessage({message, flash_message_type}: Props) {
    if (flash_message_type === 1) {
        return (
            <div className="flash_message flash_message_success">{ message }</div>
        )
    }
    if (flash_message_type === 2) {
        return (
            <div className="flash_message flash_message_danger">{ message }</div>
        )
    }
}
