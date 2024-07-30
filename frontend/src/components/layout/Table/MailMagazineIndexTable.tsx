import Table from "@/components/element/Table/Table";
import Tbody from "@/components/element/Table/Tbody";
import Td from "@/components/element/Table/Td";
import TdId from "@/components/element/Table/TdId";
import Th from "@/components/element/Table/Th";
import Thead from "@/components/element/Table/Thead";
import Tr from "@/components/element/Table/Tr";

export default function MailMagazineIndexTable() {
    return (
        <Table className="l-table">
            <Thead>
                <Tr className="l-table__tr">
                    <Th className="l-table__tr__th" displayText="ID" />
                    <Th className="l-table__tr__th" displayText="タイトル" />
                    <Th className="l-table__tr__th" displayText="メール対象" />
                    <Th className="l-table__tr__th" displayText="公開日" />
                    <Th className="l-table__tr__th" displayText="公開状態" />
                </Tr>
            </Thead>
            <Tbody>
                <Tr className="l-table__tr">
                    <TdId className="l-table__tr__td" displayText={1} />
                    <Td className="l-table__tr__td" displayText='タイトル' />
                    <Td className="l-table__tr__td" displayText='メール対象' />
                    <Td className="l-table__tr__td" displayText='2024/07/15' />
                    <Td className="l-table__tr__td" displayText='公開済み' />
                </Tr>
            </Tbody>
        </Table>
    )
}
