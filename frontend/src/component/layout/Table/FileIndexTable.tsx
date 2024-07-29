import Table from '@/component/element/Table/Table'
import Tbody from '@/component/element/Table/Tbody'
import Td from '@/component/element/Table/Td'
import TdId from '@/component/element/Table/TdId'
import Th from '@/component/element/Table/Th'
import Thead from '@/component/element/Table/Thead'
import Tr from '@/component/element/Table/Tr'
import React from 'react'

export default function FileIndexTable() {
    return (
        <Table className="l-table">
            <Thead>
                <Tr className="l-table__tr">
                    <Th className="l-table__tr__th" displayText="ID" />
                    <Th className="l-table__tr__th" displayText="ファイル名" />
                    <Th className="l-table__tr__th" displayText="ファイル種類" />
                    <Th className="l-table__tr__th" displayText="使用用途" />
                </Tr>
            </Thead>
            <Tbody>
                <Tr className="l-table__tr">
                    <TdId className="l-table__tr__td" displayText={1} />
                    <Td className="l-table__tr__td" displayText='ファイル名' />
                    <Td className="l-table__tr__td" displayText='ファイル種類' />
                    <Td className="l-table__tr__td" displayText='使用用途' />
                </Tr>
            </Tbody>
        </Table>
    )
}
