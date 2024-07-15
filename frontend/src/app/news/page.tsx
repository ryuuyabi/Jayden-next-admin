'use client'

import NewsIndexSubContext from "@/component/layout/SubContent/NewsIndexSubContext";
import NewsIndexTable from "@/component/layout/Table/NewsIndexTable";
import PaginationSwr from "@/feature/api/PaginationSwr";
import { NewsIndex } from "@/type/ApiResponseData";

export default function Home() {
    const { data, error } = PaginationSwr<NewsIndex>("http://admin.localhost/api/news/index")
    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;
    return (
        <main>
            <NewsIndexSubContext />
            <NewsIndexTable news_list={data.data.data} />
        </main>
    )
}
