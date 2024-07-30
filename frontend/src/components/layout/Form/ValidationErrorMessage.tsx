type Props = {
    displayText: string
}

export default function ValidationErrorMessage({displayText}: Props) {
    return (
        <div className="validation-error">{displayText}</div>
    )
}
