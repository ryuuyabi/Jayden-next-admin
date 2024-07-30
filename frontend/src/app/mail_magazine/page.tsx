'use client'

import MailMagazineIndexSubContent from "@/components/layout/SubContent/MailMagazineIndexSubContent";
import MailMagazineIndexTable from "@/components/layout/Table/MailMagazineIndexTable";

export default function Home(){
    return(
        <div className="l-main">
            <MailMagazineIndexSubContent />
            <MailMagazineIndexTable />
        </div>
    )
}
