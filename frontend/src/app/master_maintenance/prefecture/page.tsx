'use client'

import DefaultLoading from "@/components/layout/Loading/DefaultLoading";
import PrefectureIndexSubContent from "@/components/layout/SubContent/MasterMaintenance/PrefectureIndexSubContent"
import PrefectureIndexTable from "@/components/layout/Table/MasterMaintenance/PrefectureIndexTable"
import DefaultSwr from "@/features/api/DefaultSwr"

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
