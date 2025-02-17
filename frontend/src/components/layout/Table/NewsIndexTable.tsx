import { NewsIndex } from "@/types/ApiResponseData"
import NotFoundData from "./NotFoundData"
import Table from "@/components/element/Table/Table"
import Tr from "@/components/element/Table/Tr"
import Th from "@/components/element/Table/Th"
import TdId from "@/components/element/Table/TdId"
import TdBoolean from "@/components/element/Table/TdBoolean"
import Td from "@/components/element/Table/Td"
import TdShowLink from "@/components/element/Table/TdShowLink"

type Props = {
    news_list: Array<NewsIndex>
}

export default function NewsIndexTable({ news_list }: Props) {
    if (news_list.length === 0) {
        return <NotFoundData />
    }
    return (
        <Table className="l-table">
            <thead>
                <Tr className="l-table__tr">
                    <Th className="l-table__tr__th" displayText="ID" />
                    <Th className="l-table__tr__th" displayText="名前" />
                    <Th className="l-table__tr__th" displayText="公開日" />
                    <Th className="l-table__tr__th" displayText="行動可能" />
                    <Th className="l-table__tr__th" displayText="編集" />
                    <Th className="l-table__tr__th" displayText="削除" />
                </Tr>
            </thead>
            <tbody>
                {
                    news_list.map((news, index: number) => {
                        return (
                            <Tr className="l-table__tr" key={index}>
                                <TdId className="l-table__tr__td" displayText={news.id} />
                                <Td className="l-table__tr__td" displayText={news.name} />
                                <Td className="l-table__tr__td" displayText={news.release_date} />
                                <TdBoolean className="l-table__tr__td" boolean={news.is_active} />
                                <TdShowLink className="l-table__tr__td" displayText="編集" link={`/news/${news.id}`} />
                                <Td className="l-table__tr__td" displayText="削除" />
                            </Tr>
                        )
                    })
                }
            </tbody>
        </Table>
    )
}
