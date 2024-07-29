'use client'

import DefaultLoading from "@/component/layout/Loading/DefaultLoading";
import PrefectureIndexSubContent from "@/component/layout/SubContent/MasterMaintenance/PrefectureIndexSubContent"
import PrefectureIndexTable from "@/component/layout/Table/MasterMaintenance/PrefectureIndexTable"
import DefaultSwr from "@/feature/api/DefaultSwr"
import { PrefectureIndex } from "@/type/ApiResponseData";

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
