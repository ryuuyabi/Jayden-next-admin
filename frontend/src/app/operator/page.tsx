'use client';

import OperatorIndexFilter from "@/component/layout/Filter/OperatorIndexFilter";
import DefaultLoading from "@/component/layout/Loading/DefaultLoading";
import OperatorIndexSubContent from "@/component/layout/SubContent/OperatorIndexSubContent";
import OperatorIndexTable from "@/component/layout/Table/OperatorIndexTable";
import PaginationSwr from "@/feature/api/PaginationSwr";
import { getQueryString } from "@/feature/url/getQueryString";
import { OperatorIndex } from "@/type/ApiResponseData";

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
