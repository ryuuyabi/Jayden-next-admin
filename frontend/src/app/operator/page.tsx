'use client';

import OperatorIndexFilter from "@/components/layout/Filter/OperatorIndexFilter";
import DefaultLoading from "@/components/layout/Loading/DefaultLoading";
import OperatorIndexSubContent from "@/components/layout/SubContent/OperatorIndexSubContent";
import OperatorIndexTable from "@/components/layout/Table/OperatorIndexTable";
import PaginationSwr from "@/features/api/PaginationSwr";
import { getQueryString } from "@/features/url/getQueryString";
import { OperatorIndex } from "@/types/ApiResponseData";

export default function Home() {
    const searchUrl: string = `http://admin.localhost/api/operator/index?${getQueryString()}`
    const apiData = PaginationSwr<OperatorIndex>(searchUrl, true)
    if(apiData === undefined) return <DefaultLoading />;

    return (
        <div className="l-main">
            <OperatorIndexSubContent />
            <OperatorIndexFilter />
            <OperatorIndexTable operators={apiData.data.data.data} />
        </div>
    )
}
