import Table from '@/components/element/Table/Table'
import Tbody from '@/components/element/Table/Tbody'
import Td from '@/components/element/Table/Td'
import TdBoolean from '@/components/element/Table/TdBoolean'
import TdId from '@/components/element/Table/TdId'
import Th from '@/components/element/Table/Th'
import Thead from '@/components/element/Table/Thead'
import Tr from '@/components/element/Table/Tr'
import { PrefectureIndex } from '@/types/ApiResponseData'
import React from 'react'
import NotFoundData from '../NotFoundData'
import TdShowLink from '@/components/element/Table/TdShowLink'

type Props = {
    prefectures: PrefectureIndex[]
}

export default function PrefectureIndexTable({ prefectures }: Props) {
    if (prefectures.length === 0) {
        return <NotFoundData />
    }
    return (
        <Table className="l-table">
            <Thead>
                <Tr className="l-table__tr">
                    <Th className="l-table__tr__th" displayText="ID" />
                    <Th className="l-table__tr__th" displayText="コード" />
                    <Th className="l-table__tr__th" displayText="県名" />
                    <Th className="l-table__tr__th" displayText="行動可能" />
                    <Th className="l-table__tr__th" displayText="登録日" />
                    <Th className="l-table__tr__th" displayText="更新日" />
                    <Th className="l-table__tr__th" displayText="詳細" />
                </Tr>
            </Thead>
            <Tbody>
                {
                    prefectures.map((prefecture, index: number) => {
                        return (
                            <Tr className="l-table__tr" key={index}>
                                <TdId className="l-table__tr__td" displayText={prefecture.id} />
                                <Td className="l-table__tr__td" displayText={prefecture.code} />
                                <Td className="l-table__tr__td" displayText={prefecture.name} />
                                <TdBoolean className="l-table__tr__td" boolean={prefecture.is_active} />
                                <Td className="l-table__tr__td" displayText={prefecture.created_at} />
                                <Td className="l-table__tr__td" displayText={prefecture.updated_at} />
                                <TdShowLink className="l-table__tr__td" displayText="編集" link={`/prefecture/${prefecture.id}`} />
                            </Tr>
                        )
                    })
                }
            </Tbody>
        </Table>
    )
}
