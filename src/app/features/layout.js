'use client'
import "./features.css"
import { Filters } from "@/components/Filter"
import RequiresAuth from "@/components/RequireAuth"

export default function PageLayout({ children }) {

    return (
        <RequiresAuth>
            <div className="layout-1">
                <aside className="filter">
                    <Filters />
                </aside>

                <div className="page-content">
                    {children}
                </div>
            </div>
        </RequiresAuth>
    )
}
