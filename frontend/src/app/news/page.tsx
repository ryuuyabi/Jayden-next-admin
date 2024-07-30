'use client'

import DefaultLoading from "@/components/layout/Loading/DefaultLoading";
import NewsIndexSubContext from "@/components/layout/SubContent/NewsIndexSubContext";
import NewsIndexTable from "@/components/layout/Table/NewsIndexTable";
import PaginationSwr from "@/features/api/PaginationSwr";
import { NewsIndex } from "@/types/ApiResponseData";

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
