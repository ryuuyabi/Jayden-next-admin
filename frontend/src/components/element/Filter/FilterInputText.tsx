import {getQuery} from '@/features/url/getQuery';
import { ChangeEvent, useState } from 'react';

type Props = {
    className: string
    name: string
    placeholder: string
}

export default function FilterInputText({ className, name, placeholder, ...props }: Props) {
    const [value, setValue] = useState<string>(getQuery(name))
    const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    return (
        <input className={className}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChangeInputValue}
            { ...props }
        />
    );
}
