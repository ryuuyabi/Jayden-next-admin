'use client'

import Link from "next/link"

export default function Home() {
    return (
        <div className="l-main">
            <div className="l-master_maintenance">
                <div><Link className="l-master_maintenance__items" href='/prefecture'>都道府県</Link></div>
                <div><Link className="l-master_maintenance__items" href='/master_maintenance/district'>地区町村</Link></div>
            </div>
        </div>
    )
}
