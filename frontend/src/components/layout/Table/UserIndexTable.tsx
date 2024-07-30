import Table from "@/components/element/Table/Table";
import Tbody from "@/components/element/Table/Tbody";
import Td from "@/components/element/Table/Td";
import TdBoolean from "@/components/element/Table/TdBoolean";
import TdId from "@/components/element/Table/TdId";
import TdShowLink from "@/components/element/Table/TdShowLink";
import Th from "@/components/element/Table/Th";
import Thead from "@/components/element/Table/Thead";
import Tr from "@/components/element/Table/Tr";

export default function UserIndexTable() {
    return (
        <Table className="l-table">
            <Thead>
                <Tr className="l-table__tr">
                    <Th className="l-table__tr__th" displayText="ID" />
                    <Th className="l-table__tr__th" displayText="個人番号" />
                    <Th className="l-table__tr__th" displayText="メールアドレス" />
                    <Th className="l-table__tr__th" displayText="権限" />
                    <Th className="l-table__tr__th" displayText="行動可能" />
                    <Th className="l-table__tr__th" displayText="お知らせ" />
                    <Th className="l-table__tr__th" displayText="編集" />
                    <Th className="l-table__tr__th" displayText="削除" />
                </Tr>
            </Thead>
            <Tbody>
                <Tr className="l-table__tr">
                    <TdId className="l-table__tr__td" displayText={1} />
                    <Td className="l-table__tr__td" displayText='テスト' />
                    <Td className="l-table__tr__td" displayText='テスト' />
                    <Td className="l-table__tr__td" displayText='テスト' />
                    <TdBoolean className="l-table__tr__td" boolean={true} />
                    <TdShowLink className="l-table__tr__td" displayText="お知らせ" link={`/user/1/notification`} />
                    <TdShowLink className="l-table__tr__td" displayText="編集" link={`/user/1`} />
                    <Td className="l-table__tr__td" displayText="削除" />
                </Tr>
            </Tbody>
        </Table>
    )
}
