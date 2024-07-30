import Table from "@/components/element/Table/Table"
import Td from "@/components/element/Table/Td"
import TdBoolean from "@/components/element/Table/TdBoolean"
import TdId from "@/components/element/Table/TdId"
import Th from "@/components/element/Table/Th"
import Tr from "@/components/element/Table/Tr"
import { OperatorIndex } from "@/types/ApiResponseData"
import NotFoundData from "./NotFoundData"
import TdShowLink from "@/components/element/Table/TdShowLink"

type Props = {
    operators: Array<OperatorIndex>
}

export default function OperatorIndexTable({ operators }: Props) {
    if (operators.length === 0) {
        return <NotFoundData />
    }
    return (
        <Table className="l-table">
            <thead>
                <Tr className="l-table__tr">
                    <Th className="l-table__tr__th" displayText="ID" />
                    <Th className="l-table__tr__th" displayText="個人番号" />
                    <Th className="l-table__tr__th" displayText="メールアドレス" />
                    <Th className="l-table__tr__th" displayText="権限" />
                    <Th className="l-table__tr__th" displayText="行動可能" />
                    <Th className="l-table__tr__th" displayText="編集" />
                    <Th className="l-table__tr__th" displayText="削除" />
                </Tr>
            </thead>
            <tbody>
                {
                    operators.map((operator, index: number) => {
                        return (
                            <Tr className="l-table__tr" key={index}>
                                <TdId className="l-table__tr__td" displayText={operator.id} />
                                <Td className="l-table__tr__td" displayText={operator.personal_name} />
                                <Td className="l-table__tr__td" displayText={operator.email} />
                                <Td className="l-table__tr__td" displayText={operator.role} />
                                <TdBoolean className="l-table__tr__td" boolean={operator.is_active} />
                                <TdShowLink className="l-table__tr__td" displayText="編集" link={`/operator/${operator.id}`} />
                                <Td className="l-table__tr__td" displayText="削除" />
                            </Tr>
                        )
                    })
                }
            </tbody>
        </Table>
    )
}
