"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { COMPONENTS, CATEGORIES } from "@/data/components"

export function ComponentsSidebar() {
    const pathname = usePathname()

    return (
        <aside className="w-56 flex-none hidden md:block border-r border-white/5 bg-[#0a0a0a] overflow-y-auto no-scrollbar py-8 pl-4 pr-4">
            <div className="space-y-2">
                {CATEGORIES.map(category => {
                    const categoryComponents = COMPONENTS.filter(c => c.category === category)
                    if (categoryComponents.length === 0) return null

                    const categoryPath = `/components/${category.toLowerCase()}`
                    const isCategoryActive = pathname === categoryPath || categoryComponents.some(c => pathname === `/components/${c.id}`)

                    return (
                        <div key={category} className="space-y-2">
                            <Link
                                href={categoryPath}
                                className={`block text-xs font-semibold uppercase tracking-widest px-3 py-2 rounded-lg transition-all ${isCategoryActive
                                    ? 'text-white bg-white/10'
                                    : 'text-neutral-500 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {category}
                            </Link>
                        </div>
                    )
                })}
            </div>
        </aside>
    )
}
