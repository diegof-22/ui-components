import Link from 'next/link'
import { COMPONENTS, CATEGORIES } from '@/data/components'
import { ComponentPreview } from '@/components/component-preview'
import { notFound } from 'next/navigation'
import { ArrowRight } from 'lucide-react'

export async function generateStaticParams() {
    const componentPaths = COMPONENTS.map((component) => ({
        slug: component.id,
    }))
    const categoryPaths = CATEGORIES.map((category) => ({
        slug: category.toLowerCase(),
    }))

    return [...componentPaths, ...categoryPaths]
}

export default async function ComponentPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params
    const slug = resolvedParams.slug

    // Check if it's an individual component
    const component = COMPONENTS.find((c) => c.id === slug)
    if (component) {
        return (
            <div className="max-w-7xl w-full mx-auto px-4 md:px-8 py-8 md:py-12">
                <ComponentPreview data={component} />
            </div>
        )
    }

    // Check if it's a category
    const categoryName = CATEGORIES.find(c => c.toLowerCase() === slug)
    if (categoryName) {
        const categoryComponents = COMPONENTS.filter(c => c.category === categoryName)

        return (
            <div className="max-w-7xl w-full mx-auto px-4 md:px-8 py-8 md:py-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="mb-12">
                    <h1 className="text-4xl tracking-tight lg:text-5xl text-white mb-4">
                        {categoryName}
                    </h1>
                    <p className="text-lg text-neutral-400">
                        Esplora tutti i componenti della categoria {categoryName}.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {categoryComponents.map(comp => (
                        <Link
                            key={comp.id}
                            href={`/components/${comp.id}`}
                            className="group relative p-6 rounded-2xl border border-white/10 bg-[#121212]/50 hover:bg-[#1a1a1a] transition-all duration-300 flex flex-col gap-4"
                        >
                            <h3 className="text-xl text-white group-hover:text-purple-400 transition-colors">
                                {comp.name}
                            </h3>
                            <p className="text-sm text-neutral-400 line-clamp-2 mb-4">
                                {comp.description}
                            </p>
                            <div className="mt-auto flex items-center text-sm font-medium text-white group-hover:text-purple-400">
                                Visualizza componente <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        )
    }

    notFound()
}
