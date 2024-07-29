import { SelectOption, SelectOptions } from "@/type/Form"
import { ChangeEvent } from "react"

type Props = {
    className: string
    displayText: string
    name: string
    options: SelectOptions
    value?: string|number|boolean
    onSelectChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

export default function FormFieldSelect({ className, displayText, name, options, value, onSelectChange }: Props) {
    return (
        <div className={className}>
            <label htmlFor={name}>{displayText}</label>
            <select name={name} onChange={onSelectChange}>
                <option value="">選択してください</option>
                {
                    options.map((option: SelectOption, index: number) => {
                        return <option key={index} value={option.value} defaultChecked={option.value === value}>{option.key}</option>
                    })
                }
            </select>
        </div>
    )
}
