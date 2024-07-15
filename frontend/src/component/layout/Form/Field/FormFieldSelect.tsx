import { SelectOption, SelectOptions } from "@/type/Form"
import { ChangeEvent } from "react"

type Props = {
    className: string
    displayText: string
    name: string
    options: SelectOptions
    onSelectChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

export default function FormFieldSelect({ className, displayText, name, options, onSelectChange }: Props) {
    return (
        <div className={className}>
            <label htmlFor={name}>{displayText}</label>
            <select name={name} onChange={onSelectChange}>
                <option value="">選択してください</option>
                {
                    options.map((option: SelectOption, index: number) => {
                        return <option key={index} value={option.value}>{option.key}</option>
                    })
                }
            </select>
        </div>
    )
}
