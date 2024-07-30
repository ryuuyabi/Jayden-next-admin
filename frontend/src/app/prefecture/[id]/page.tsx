'use client'

import PrefectureShowForm from "@/components/layout/Form/PrefectureShowForm";
import DefaultLoading from "@/components/layout/Loading/DefaultLoading";
import DefaultSwr from "@/features/api/DefaultSwr";
import { getId } from "@/features/url/getPathName";
import { PrefectureShow } from "@/types/ApiResponseData";

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
