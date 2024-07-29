import { ChangeEvent } from "react"
import ValidationErrorMessage from "../ValidationErrorMessage"

type Props = {
    className: string
    type: string
    displayText: string
    name: string
    value?: string|number
    validationMessage: string|null
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function FormFieldDefault({ className, type, displayText, name, value, validationMessage, onInputChange }: Props) {
    return (
        <>
            <div className={className}>
                <label htmlFor={name}>{displayText}</label>
                <div className="l-form__field__input">
                    <input
                        type={type}
                        name={name}
                        defaultValue={value}
                        onChange={onInputChange}
                    />
                </div>
                { validationMessage ? <ValidationErrorMessage displayText={validationMessage} /> : '' }
            </div>
        </>
    )
}
