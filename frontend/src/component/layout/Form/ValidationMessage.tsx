import ValidationErrorMessage from "./ValidationErrorMessage"

type Props<T> = {
    errors: null|T
    name: string
    displayText: string
}

export default function ValidationMessage({ errors, name, displayText, T }: Props<T>) {
    if (errors === null) {
        return '';
    }
    return <ValidationErrorMessage displayText={displayText} />
}
