'use client'

import DefaultLoading from "@/component/layout/Loading/DefaultLoading";
import NewsIndexSubContext from "@/component/layout/SubContent/NewsIndexSubContext";
import NewsIndexTable from "@/component/layout/Table/NewsIndexTable";
import PaginationSwr from "@/feature/api/PaginationSwr";
import { NewsIndex } from "@/type/ApiResponseData";

export default function Home() {
    const data = PaginationSwr<NewsIndex>("http://admin.localhost/api/news/index", true)
    if (data === undefined) return <DefaultLoading />;
    return (
        <div className="l-main">
            <NewsIndexSubContext />
            <NewsIndexTable news_list={data.data.data.data} />
        </div>
    )
}
