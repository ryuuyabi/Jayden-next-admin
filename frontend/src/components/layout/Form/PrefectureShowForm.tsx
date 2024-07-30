import React, { ChangeEvent, FormEvent, useState } from 'react'
import FormDefault from './FormDefault'
import FormFieldDefault from './Field/FormFieldDefault'
import FormFieldSelect from './Field/FormFieldSelect'
import { IsActiveOptions } from '@/enums/IsActive'
import { PrefectureShow } from '@/types/ApiResponseData'
import { FetchPost } from '@/features/form/FetchPost'
import { getId } from '@/features/url/getPathName'
import SubmitButton from './SubmitButton'

type Props = {
    prefecture: PrefectureShow
}

export default function PrefectureShowForm({ prefecture }: Props) {
    const [postData, setPostData] = useState({name: prefecture.name, origin_name: prefecture.origin_name, code: prefecture.code, is_active: prefecture.is_active})

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        const response = await FetchPost(e, `http://admin.localhost/api/master_maintenance/prefecture/${getId()}`, postData)
    }

    const onChangeInputHandle = (e: ChangeEvent<HTMLInputElement|HTMLSelectElement>) => {
        const { name, value } = e.target
        setPostData({ ...postData, [name]: value })
    }

    return (
        <FormDefault onSubmit={onSubmit} className="l-form">
            <FormFieldDefault className="l-form__field" type="text" name="name" displayText="県名" onInputChange={onChangeInputHandle} value={prefecture.name} />
            <FormFieldDefault className="l-form__field" type="text" name="origin_name" displayText="元県名" onInputChange={onChangeInputHandle} value={prefecture.origin_name} />
            <FormFieldDefault className="l-form__field" type="text" name="code" displayText="コード" onInputChange={onChangeInputHandle} value={prefecture.code} />
            <FormFieldSelect className="l-form__field" name="is_active" displayText="行動判定" options={IsActiveOptions} onSelectChange={onChangeInputHandle} value={prefecture.is_active} />
            <SubmitButton displayText="更新" />
        </FormDefault>
    )
}
