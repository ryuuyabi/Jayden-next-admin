'use client'

import DefaultLoading from "@/component/layout/Loading/DefaultLoading";
import PrefectureIndexSubContent from "@/component/layout/SubContent/MasterMaintenance/PrefectureIndexSubContent"
import PrefectureIndexTable from "@/component/layout/Table/MasterMaintenance/PrefectureIndexTable"
import DefaultSwr from "@/feature/api/DefaultSwr"

export default function Home() {
    const prefectures = DefaultSwr(`http://admin.localhost/api/master_maintenance/prefecture`);
    if (prefectures === undefined) {
        return <DefaultLoading />
    }
    return (
        <div className="l-main">
            <PrefectureIndexSubContent />
            <PrefectureIndexTable />
        </div>
    )
}
