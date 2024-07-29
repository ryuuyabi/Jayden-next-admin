'use client'

import MailMagazineIndexSubContent from "@/component/layout/SubContent/MailMagazineIndexSubContent";
import MailMagazineIndexTable from "@/component/layout/Table/MailMagazineIndexTable";

export default function Home(){
    return(
        <div className="l-main">
            <MailMagazineIndexSubContent />
            <MailMagazineIndexTable />
        </div>
    )
}
