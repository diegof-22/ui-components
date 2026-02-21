import React from 'react'

export interface ComponentData {
  id: string
  name: string
  description: string
  category: string
  code: string
  installCommand: string
  importInstructions: string
  component: React.ReactNode
}

export const CATEGORIES = [
  "Buttons",
  "Cards",
  "Navbars",
  "Inputs"
]

const ButtonDemo = () => (
  <button className="px-8 py-3 rounded-full bg-gradient-to-b from-zinc-800 to-zinc-900 border border-zinc-700 text-white font-medium hover:from-zinc-700 hover:to-zinc-800 transition-all shadow-lg active:scale-95">
    Action Button
  </button>
)

const CardDemo = () => (
  <div className="group relative w-80 p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 overflow-hidden transition-all hover:border-white/20">
    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
    <div className="w-12 h-12 rounded-full bg-white/10 mb-6 flex items-center justify-center">
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    </div>
    <h3 className="text-xl font-bold mb-3 text-white">Hyper-Fast</h3>
    <p className="text-neutral-400 text-sm leading-relaxed">
      Costruito per la velocità estrema. Nessun runtime inutile, solo performance pure e codice ottimizzato.
    </p>
  </div>
)

const InputDemo = () => (
  <div className="relative w-72 mt-4"> {/* Aggiunto mt-4 per dare spazio alla label che sale */}
    <input
      type="text"
      placeholder="Cerca qualcosa..."
      className="w-full px-5 py-4 bg-[#0a0a0a] border border-white/10 rounded-2xl focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all text-white placeholder-transparent peer"
      id="modern-input"
    />
    <label
      htmlFor="modern-input"
      className="absolute left-5 -top-6 text-xs text-neutral-400 bg-transparent transition-all 
                 peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-4 
                 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-white pointer-events-none"
    >
      Cerca qualcosa...
    </label>
    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1 pointer-events-none">
      <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-white/50 font-mono">⌘</kbd>
      <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-white/50 font-mono">K</kbd>
    </div>
  </div>
)

export const COMPONENTS: ComponentData[] = [
  {
    id: "glow-button",
    name: "Glow Button",
    description: "Un bottone con un effetto di bagliore e animazione al click.",
    category: "Buttons",
    installCommand: "npx ui-hub add glow-button",
    importInstructions: "import { GlowButton } from '@/components/ui/glow-button';\n// Utilizzalo come un normale bottone:\n// <GlowButton>Cliccami</GlowButton>",
    code: `import React from 'react';

export const GlowButton = ({ children, ...props }) => {
  return (
    <button 
      className="px-8 py-3 rounded-full bg-gradient-to-b from-zinc-800 to-zinc-900 border border-zinc-700 text-white font-medium hover:from-zinc-700 hover:to-zinc-800 transition-all shadow-lg active:scale-95"
      {...props}
    >
      {children}
    </button>
  );
};`,
    component: <ButtonDemo />
  },
  {
    id: "glass-card",
    name: "Glassmorphism Card",
    description: "Card con effetto vetro, ideale per design moderni e minimalisti.",
    category: "Cards",
    installCommand: "npx ui-hub add glass-card",
    importInstructions: "import { GlassCard } from '@/components/ui/glass-card';\n\n// Usa la componente all'interno della tua applicazione.",
    code: `import React from 'react';

export const GlassCard = ({ title, description }) => {
  return (
    <div className="group relative w-80 p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 overflow-hidden transition-all hover:border-white/20">
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
      <div className="w-12 h-12 rounded-full bg-white/10 mb-6 flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-neutral-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};`,
    component: <CardDemo />
  },
  {
    id: "floating-label-input",
    name: "Floating Label Input",
    description: "Un campo di input con una label animata che si sposta quando in focus.",
    category: "Inputs",
    installCommand: "npx ui-hub add floating-label-input",
    importInstructions: "import { FloatingLabelInput } from '@/components/ui/floating-label-input';\n\n// <FloatingLabelInput label=\"Email\" />",
    code: `import React from 'react';

export const FloatingLabelInput = ({ label, ...props }) => {
  const id = React.useId();
  return (
    <div className="relative w-72">
      <input 
        type="text" 
        placeholder={label}
        className="w-full px-5 py-4 bg-[#0a0a0a] border border-white/10 rounded-2xl focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all text-white placeholder-transparent peer"
        id={id}
        {...props}
      />
      <label 
        htmlFor={id} 
        className="absolute left-5 -top-2.5 text-xs text-neutral-400 bg-[#000] px-2 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-white"
      >
        {label}
      </label>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1 pointer-events-none">
          <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-white/50 font-mono">⌘</kbd>
          <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-white/50 font-mono">K</kbd>
      </div>
    </div>
  );
};`,
    component: <InputDemo />
  }
];
