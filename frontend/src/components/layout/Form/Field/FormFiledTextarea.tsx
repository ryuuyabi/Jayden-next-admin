import { ChangeEvent, ComponentProps } from "react"

type Props = ComponentProps<'textarea'>&{
    className: string
    name: string
    displayText: string
    rows: number
    value?: string
    onTextareaChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export default function FormFiledTextarea({ className, name, displayText, rows, value, onTextareaChange }: Props) {
    return (
        <div className={className}>
            <label htmlFor={name}>{displayText}</label>
            <textarea name={name} rows={rows} value={value} onChange={onTextareaChange}></textarea>
        </div>
    )
}
