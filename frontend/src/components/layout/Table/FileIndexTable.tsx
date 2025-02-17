import Table from '@/components/element/Table/Table'
import Tbody from '@/components/element/Table/Tbody'
import Td from '@/components/element/Table/Td'
import TdId from '@/components/element/Table/TdId'
import Th from '@/components/element/Table/Th'
import Thead from '@/components/element/Table/Thead'
import Tr from '@/components/element/Table/Tr'
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
