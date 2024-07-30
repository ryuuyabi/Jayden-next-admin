'use client'

import DefaultLoading from "@/components/layout/Loading/DefaultLoading";
import PrefectureIndexSubContent from "@/components/layout/SubContent/MasterMaintenance/PrefectureIndexSubContent"
import PrefectureIndexTable from "@/components/layout/Table/MasterMaintenance/PrefectureIndexTable"
import DefaultSwr from "@/features/api/DefaultSwr"
import { PrefectureIndex } from "@/types/ApiResponseData";

export default function Home() {
    const apiResponseData = DefaultSwr<Array<PrefectureIndex>>(`http://admin.localhost/api/master_maintenance/prefecture`, true);
    if (apiResponseData === undefined) {
        return <DefaultLoading />
    }
    return (
        <div className="l-main">
            <PrefectureIndexSubContent />
            <PrefectureIndexTable prefectures={apiResponseData.data.data} />
        </div>
    )
}
