'use client';

import OperatorIndexFilter from "@/component/layout/Filter/OperatorIndexFilter";
import OperatorIndexSubContent from "@/component/layout/SubContent/OperatorIndexSubContent";
import OperatorIndexTable from "@/component/layout/Table/OperatorIndexTable";
import { getQueryString } from "@/feature/url/getQueryString";
import { ApiResponsePagination } from "@/type/ApiResponse";
import { OperatorIndex } from "@/type/ApiResponseData";
import useSWR from "swr";

export default function Home() {
    const searchUrl: string = `http://admin.localhost/api/operator/index?${getQueryString()}`
    const fetcher = (): Promise<ApiResponsePagination<OperatorIndex>> => fetch(searchUrl).then(res => res.json());
    const { data, error } = useSWR<ApiResponsePagination<OperatorIndex>>(searchUrl, fetcher);
    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <main>
            <OperatorIndexSubContent />
            <OperatorIndexFilter />
            <OperatorIndexTable operators={data.data.data} />
        </main>
    );
}
