import { ChangeEvent } from "react"

type Props = {
    className: string
    type: string
    displayText: string
    name: string
    value?: string|number
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function FormFieldDefault({ className, type, displayText, name, value, onInputChange }: Props) {
    return (
        <>
            <div className={className}>
                <label htmlFor={name}>{displayText}</label>
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onInputChange}
                />
            </div>
        </>
    )
}
