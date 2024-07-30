type Props = {
    displayText: string
}

export default function SubmitButton({ displayText }: Props) {
    return (
        <button className="l-form__button">{displayText}</button>
    )
}
