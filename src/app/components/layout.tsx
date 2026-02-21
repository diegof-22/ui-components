import Link from "next/link"
import { Zap, Github } from "lucide-react"
import { ComponentsSidebar } from "@/components/layout/components-sidebar"

export default function ComponentsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-[#0a0a0a] flex flex-col selection:bg-purple-500/30">
            {/* Minimal Top Navigation */}
            <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
                        <div className="w-6 h-6 rounded bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                            <Zap className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-white font-bold text-lg tracking-tight">dev-hub</span>
                    </Link>
                    <nav className="flex items-center gap-4">
                        <Link href="/" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
                            Home
                        </Link>
                        <a href="https://github.com" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                    </nav>
                </div>
            </header>

            {/* Main Content Area */}
            <div className="flex-1 flex overflow-hidden">
                <ComponentsSidebar />
                <main className="flex-1 overflow-y-auto no-scrollbar relative w-full">
                    {children}
                </main>
            </div>
        </div>
    )
}
