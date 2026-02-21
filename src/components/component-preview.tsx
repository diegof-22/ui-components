"use client"

import React, { useState } from 'react'
import { ComponentData } from '@/data/components'
import { Check, Clipboard, TerminalSquare, Maximize2, Monitor, Code } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

export function ComponentPreview({ data }: { data: ComponentData }) {
    const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview')
    const [copiedCode, setCopiedCode] = useState(false)
    const [copiedInstall, setCopiedInstall] = useState(false)

    const copyToClipboard = async (text: string, setter: (val: boolean) => void) => {
        await navigator.clipboard.writeText(text)
        setter(true)
        setTimeout(() => setter(false), 2000)
    }

    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-2">
                <h1 className="text-4xl tracking-tight lg:text-5xl text-white">
                    {data.name}
                </h1>
                <p className="text-lg text-neutral-400">
                    {data.description}
                </p>
            </div>

            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex bg-[#121212] p-1 rounded-xl border border-white/10">
                        <button
                            onClick={() => setActiveTab('preview')}
                            className={`flex items-center gap-2 px-4 py-1.5 text-sm font-medium rounded-lg transition-all ${activeTab === 'preview' ? 'bg-[#222] text-white shadow-xl ring-1 ring-white/10' : 'text-neutral-500 hover:text-white'}`}
                        >
                            <Monitor className="w-4 h-4" />
                            Preview
                        </button>
                        <button
                            onClick={() => setActiveTab('code')}
                            className={`flex items-center gap-2 px-4 py-1.5 text-sm font-medium rounded-lg transition-all ${activeTab === 'code' ? 'bg-[#222] text-white shadow-xl ring-1 ring-white/10' : 'text-neutral-500 hover:text-white'}`}
                        >
                            <Code className="w-4 h-4" />
                            Code
                        </button>
                    </div>
                    {activeTab === 'code' && (
                        <button
                            onClick={() => copyToClipboard(data.code, setCopiedCode)}
                            className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-xl border border-white/10 bg-[#121212] hover:bg-[#222] text-white transition-all"
                        >
                            {copiedCode ? <Check className="w-4 h-4 text-green-500" /> : <Clipboard className="w-4 h-4" />}
                            {copiedCode ? "Copiato" : "Copia Codice"}
                        </button>
                    )}
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#000] overflow-hidden relative">
                    {activeTab === 'preview' ? (
                        <div className="min-h-[400px] relative flex items-center justify-center p-8 overflow-hidden">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>
                            <div className="relative z-10 w-full flex justify-center items-center">
                                {data.component}
                            </div>
                        </div>
                    ) : (
                        <div className="relative text-sm">
                            <SyntaxHighlighter
                                language="tsx"
                                style={vscDarkPlus}
                                customStyle={{
                                    margin: 0,
                                    padding: '1.5rem',
                                    background: '#0a0a0a',
                                    borderRadius: '0',
                                }}
                            >
                                {data.code}
                            </SyntaxHighlighter>
                        </div>
                    )}
                </div>
            </div>

            <div className="space-y-6 pt-12 border-t border-white/10 mt-12">
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold tracking-tight text-white">Integrazione Plugin</h2>
                    <p className="text-neutral-400">Esegui questo comando per installare il componente direttamente nel tuo progetto.</p>
                </div>

                <div className="relative mt-4">
                    <div className="flex items-center p-4 bg-[#0a0a0a] rounded-xl border border-white/10 font-mono text-sm group">
                        <TerminalSquare className="w-5 h-5 mr-3 text-neutral-500" />
                        <span className="text-green-400 font-medium">{data.installCommand}</span>
                        <button
                            onClick={() => copyToClipboard(data.installCommand, setCopiedInstall)}
                            className="ml-auto p-2 bg-[#121212] border border-white/10 rounded-md hover:bg-[#222] text-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                            title="Copia Comando"
                        >
                            {copiedInstall ? <Check className="w-4 h-4 text-green-500" /> : <Clipboard className="w-4 h-4" />}
                        </button>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white">Istruzioni di importazione</h3>
                    <div className="rounded-xl border border-white/10 overflow-hidden text-sm">
                        <SyntaxHighlighter
                            language="tsx"
                            style={vscDarkPlus}
                            customStyle={{
                                margin: 0,
                                padding: '1.5rem',
                                background: '#0a0a0a',
                            }}
                        >
                            {data.importInstructions}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </div>
        </div>
    )
}
