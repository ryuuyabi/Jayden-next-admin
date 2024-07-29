'use client'

import PrefectureShowForm from "@/component/layout/Form/PrefectureShowForm";
import DefaultLoading from "@/component/layout/Loading/DefaultLoading";
import DefaultSwr from "@/feature/api/DefaultSwr";
import { getId } from "@/feature/url/getPathName";
import { PrefectureShow } from "@/type/ApiResponseData";

export default function Home() {
    const apiResponseData = DefaultSwr<PrefectureShow>(`http://admin.localhost/api/master_maintenance/prefecture/${getId()}`, true);
    if (apiResponseData === undefined) {
        return <DefaultLoading />
    }
    const prefecture = apiResponseData.data.data
    return (
        <div className="l-main">
            <PrefectureShowForm prefecture={prefecture} />
        </div>
    )
}
