import { ChangeEvent } from "react"

type Props = {
    className: string
    name: string
    displayText: string
    value?: string
    onDateChange: (e: ChangeEvent<HTMLDataElement>) => void
}

export default function FormFieldDate({ className, name, displayText, value, onDateChange }: Props) {
    return (
        <>
            <div className={className}>
                <label htmlFor={name}>{displayText}</label>
                <input type="date" name={name} value={value} onChange={onDateChange} />
            </div>
        </>
    )
}
