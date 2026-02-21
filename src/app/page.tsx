import Link from "next/link"
import { COMPONENTS } from "@/data/components"
import { ArrowRight, Code2, Layout, Zap, Search, Bell, Settings, BarChart2, Users, CreditCard, Activity } from "lucide-react"

const REVIEWS = [
  {
    name: "Alice Johnson",
    role: "Senior Software Engineer",
    img: "https://i.pravatar.cc/150?img=12",
    text: "This library has transformed the way I work! It's like having a brilliant assistant who knows exactly what I need before I even ask. The dark mode default is just perfect.",
  },
  {
    name: "Frank Moore",
    role: "Project Manager",
    img: "https://i.pravatar.cc/150?img=11",
    text: "A robust solution that fits perfectly into our workflow. It has enhanced our team's capabilities and allowed us to tackle more complex projects quickly without reinventing the wheel.",
  },
  {
    name: "Quinn Taylor",
    role: "Growth Manager",
    img: "https://i.pravatar.cc/150?img=60",
    text: "It's a game-changer for our business. The visual consistency it provides is invaluable and has driven substantial growth for our conversion rates.",
  },
  {
    name: "Tina Brooks",
    role: "Process Analyst",
    img: "https://i.pravatar.cc/150?img=47",
    text: "It has completely changed the way we build interfaces. The ability to copy and paste code directly into our React apps without hidden dependencies is phenomenal.",
  },
  {
    name: "Ivy Wilson",
    role: "Business Consultant",
    img: "https://i.pravatar.cc/150?img=33",
    text: "A must-have toolkit for any modern professional. It's revolutionized the way we approach fast prototyping and MVP building.",
  },
  {
    name: "Grace Hall",
    role: "Product Designer",
    img: "https://i.pravatar.cc/150?img=32",
    text: "It's incredibly intuitive and beautiful. Even those without extensive Tailwind expertise can leverage its power to improve their workflows with incredible aesthetics out of the box.",
  },
  {
    name: "Leo Carter",
    role: "Technology Strategist",
    img: "https://i.pravatar.cc/150?img=15",
    text: "Transformative UI pieces with real impact. It has streamlined our frontend development and provided clarity in areas that were previously bogged down by CSS bugs.",
  },
  {
    name: "Samuel Barnes",
    role: "Fullstack Developer",
    img: "https://i.pravatar.cc/150?img=53",
    text: "Simply the best copy-paste library I've used. No bloated npm packages, just raw, clean, accessible code. Can't recommend this enough to teams.",
  },
];

const reviewCol1 = [REVIEWS[0], REVIEWS[1], REVIEWS[2]];
const reviewCol2 = [REVIEWS[3], REVIEWS[4], REVIEWS[5]];
const reviewCol3 = [REVIEWS[6], REVIEWS[7], REVIEWS[0]];

const ReviewCard = ({ review }: { review: typeof REVIEWS[0] }) => (
  <div className="flex-none w-full relative p-6 rounded-2xl border border-white/10 bg-[#121212]/80 hover:bg-[#1a1a1a] transition-all duration-300">
    <div className="flex items-center gap-4 mb-4">
      <img src={review.img} alt={review.name} className="w-10 h-10 rounded-full ring-2 ring-white/10 object-cover" />
      <div>
        <h4 className="text-white font-medium text-sm">{review.name}</h4>
        <p className="text-neutral-500 text-xs">{review.role}</p>
      </div>
    </div>
    <p className="text-neutral-300 text-sm leading-relaxed">"{review.text}"</p>
  </div>
);

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] overflow-hidden selection:bg-purple-500/30 flex flex-col">

      {/* Background Gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-transparent blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-gradient-to-tl from-orange-500/20 via-pink-500/20 to-purple-500/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Top Navbar */}
      <nav className="relative z-20 w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <Zap className="w-3 h-3 text-white" />
          </div>
          <span className="text-white text-lg tracking-tight">dev-hub</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
          <Link href="/components/buttons" className="hover:text-white transition-colors">Components</Link>
          <Link href="#" className="hover:text-white transition-colors">Resources</Link>
          <Link href="#" className="hover:text-white transition-colors">Contact</Link>
        </div>

        <div className="flex items-center gap-4 text-sm font-medium">
          <Link href="#" className="text-neutral-400 hover:text-white transition-colors hidden md:block">Login</Link>
          <Link href={`/components/buttons`} className="bg-white text-black px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors active:scale-95 shadow-sm">
            Try for free
          </Link>
        </div>
      </nav>

      {/* Main Hero Content */}
      <div className="relative flex-1 w-full max-w-7xl mx-auto px-6 pt-6 pb-20 md:pt-12 md:pb-32 flex flex-col items-center justify-center gap-16 z-10">

        {/* Top: Typography & CTAs */}
        <div className="flex-1 space-y-8 text-center animate-in fade-in slide-in-from-bottom-8 duration-700 w-full max-w-4xl mx-auto flex flex-col items-center">

          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/10 cursor-pointer">
            <span className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              Scopri la nuova versione di dev-hub <ArrowRight className="w-4 h-4 ml-1 opacity-70" />
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl tracking-tight text-white leading-[1.1]">
            Costruisci <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">migliori</span> UI in pochi minuti.
          </h1>

          <p className="text-xl text-neutral-400 leading-relaxed max-w-2xl text-center">
            Componenti React progettati con cura che puoi copiare e incollare nei tuoi progetti Next.js e Tailwind CSS. Concentrati sul prodotto, non sui div.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href={`/components/buttons`}
              className="inline-flex items-center justify-center rounded-full bg-white text-black font-semibold px-8 py-3.5 text-sm hover:bg-neutral-200 transition-all active:scale-95 shadow-lg shadow-white/20"
            >
              Esplora i Componenti <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-[#121212] hover:bg-[#1a1a1a] text-white font-medium px-8 py-3.5 text-sm transition-all active:scale-95"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Bottom: Mockup / Graphic */}
        <div className="w-full max-w-4xl relative animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300 mt-12 hidden md:block">

          {/* Diagonal Multi-Color Slash / Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-3xl opacity-40 blur-3xl transition-all duration-700 hover:opacity-60"></div>

          {/* Mac Window Mockup */}
          <div className="relative rounded-2xl border border-white/10 bg-[#0a0a0a]/90 backdrop-blur-2xl shadow-2xl overflow-hidden flex flex-col z-10 transition-transform duration-700 hover:-translate-y-2">

            {/* Window Header */}
            <div className="h-12 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2 relative">
              <div className="flex gap-2 absolute left-4">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="h-6 w-48 bg-black/40 rounded-md border border-white/5 flex items-center justify-center text-xs text-neutral-500 font-medium font-mono">
                  dev-hub.app
                </div>
              </div>
            </div>

            {/* Window Body (Fake code/UI) */}
            <div className="flex h-[400px] md:h-[480px] w-full bg-[#050505] text-sm overflow-hidden text-neutral-300">

              {/* Sidebar */}
              <div className="w-48 hidden sm:flex border-r border-white/5 bg-[#0a0a0a] flex-col justify-between py-6 px-4">
                <div className="space-y-6">
                  <div className="font-bold text-white px-2 flex items-center gap-2 mb-8">
                    <div className="w-6 h-6 rounded bg-gradient-to-br from-purple-500 to-pink-500"></div>
                    Dashboard
                  </div>
                  <nav className="space-y-1.5">
                    <div className="flex items-center gap-3 px-2 py-2 rounded-md bg-white/10 text-white font-medium"><Zap className="w-4 h-4" /> Overview</div>
                    <div className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-white/5 hover:text-white transition-colors cursor-pointer"><BarChart2 className="w-4 h-4" /> Analytics</div>
                    <div className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-white/5 hover:text-white transition-colors cursor-pointer"><Users className="w-4 h-4" /> Customers</div>
                    <div className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-white/5 hover:text-white transition-colors cursor-pointer"><CreditCard className="w-4 h-4" /> Billing</div>
                  </nav>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-white/5 hover:text-white transition-colors cursor-pointer"><Settings className="w-4 h-4" /> Settings</div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 flex flex-col bg-[#050505] min-w-0">
                {/* Header */}
                <header className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-[#0a0a0a]">
                  <div className="flex items-center gap-2 text-neutral-500 bg-[#121212] px-3 py-1.5 rounded-md border border-white/5 w-64 ring-1 ring-inset ring-white/5 focus-within:ring-white/20 transition-all">
                    <Search className="w-4 h-4" />
                    <span className="text-xs">Search...</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="relative cursor-pointer">
                      <Bell className="w-4 h-4 text-neutral-400 hover:text-white transition-colors" />
                      <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-red-500 border border-[#0a0a0a]"></span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 border border-white/10 cursor-pointer"></div>
                  </div>
                </header>

                {/* Dashboard Widgets */}
                <div className="p-6 flex-1 overflow-y-auto space-y-6 custom-scrollbar">
                  <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-white text-lg">Overview</h2>
                    <div className="bg-white/5 hover:bg-white/10 text-white text-xs px-3 py-1.5 rounded-md cursor-pointer transition-colors border border-white/10">Download Report</div>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-[#121212] border border-white/5 rounded-xl p-5 flex flex-col gap-3 shadow-sm hover:border-white/10 transition-colors cursor-pointer">
                      <div className="flex items-center justify-between text-neutral-400">
                        <span className="text-xs font-medium uppercase tracking-wider">Total Revenue</span>
                        <Activity className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div className="text-2xl font-bold text-white">$45,231.89</div>
                      <div className="text-xs text-emerald-400/80 font-medium">+20.1% from last month</div>
                    </div>

                    <div className="bg-[#121212] border border-white/5 rounded-xl p-5 flex flex-col gap-3 shadow-sm hover:border-white/10 transition-colors cursor-pointer">
                      <div className="flex items-center justify-between text-neutral-400">
                        <span className="text-xs font-medium uppercase tracking-wider">Subscriptions</span>
                        <Users className="w-4 h-4 text-blue-400" />
                      </div>
                      <div className="text-2xl font-bold text-white">+2,350</div>
                      <div className="text-xs text-emerald-400/80 font-medium">+180.1% from last month</div>
                    </div>

                    <div className="bg-[#121212] border border-white/5 rounded-xl p-5 flex flex-col gap-3 shadow-sm hover:border-white/10 transition-colors cursor-pointer sm:col-span-2 lg:col-span-1">
                      <div className="flex items-center justify-between text-neutral-400">
                        <span className="text-xs font-medium uppercase tracking-wider">Active Now</span>
                        <Zap className="w-4 h-4 text-yellow-400" />
                      </div>
                      <div className="text-2xl font-bold text-white">+573</div>
                      <div className="text-xs text-emerald-400/80 font-medium">+201 since last hour</div>
                    </div>
                  </div>

                  {/* Chart Area */}
                  <div className="bg-[#121212] border border-white/5 rounded-xl p-5 shadow-sm hover:border-white/10 transition-colors flex flex-col gap-4 h-64 lg:h-56 relative overflow-hidden group cursor-pointer">
                    <div className="font-medium text-white">Analytics Overview</div>
                    <div className="flex-1 rounded-lg border border-dashed border-white/10 bg-[#0a0a0a] flex items-center justify-center text-neutral-500 text-sm group-hover:border-white/20 transition-colors relative overflow-hidden">
                      {/* Fake Bar Chart */}
                      <div className="absolute inset-0 flex items-end justify-between px-4 sm:px-8 pb-4 pt-10 gap-2 opacity-50">
                        <div className="w-full bg-blue-500/20 rounded-t-sm h-[30%]"></div>
                        <div className="w-full bg-blue-500/20 rounded-t-sm h-[50%]"></div>
                        <div className="w-full bg-blue-500/30 rounded-t-sm h-[80%]"></div>
                        <div className="w-full bg-purple-500/40 rounded-t-sm h-[60%] border-t border-purple-500/50"></div>
                        <div className="w-full bg-blue-500/30 rounded-t-sm h-[90%]"></div>
                        <div className="w-full bg-blue-500/20 rounded-t-sm h-[70%]"></div>
                        <div className="w-full bg-blue-500/20 rounded-t-sm h-[40%] hidden sm:block"></div>
                        <div className="w-full bg-emerald-500/30 rounded-t-sm h-[100%] border-t border-emerald-500/50 hidden sm:block"></div>
                      </div>
                      <div className="z-10 bg-[#121212]/80 px-3 py-1.5 rounded-md border border-white/5 backdrop-blur-sm pointer-events-none">
                        <BarChart2 className="w-5 h-5 mr-2 inline-block opacity-70" />
                        Interactive Chart
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bento Grid Component Categories */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 py-24 md:py-32">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-6xl tracking-tight text-white mb-6">Tutto per costruire <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">più velocemente</span></h2>
          <p className="text-lg text-neutral-400">Esplora blocchi visivi pronti all'uso divisi per categoria. Costruiti con Tailwind CSS e totalmente personalizzabili.</p>
        </div>

        {/* Faded Grid Container */}
        <div className="relative" style={{ maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' }}>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[220px]">

            {/* Bento Item 1: Cards (Extra Large) */}
            <Link href="/components/buttons" className="md:col-span-4 md:row-span-2 relative p-8 rounded-2xl border border-white/10 bg-[#121212]/80 hover:bg-[#1a1a1a] transition-all duration-300 group overflow-hidden flex flex-col justify-end">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Abstract visual background */}
              <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[85%] h-[60%] border border-white/10 rounded-2xl bg-[#0a0a0a]/80 backdrop-blur shadow-2xl skew-y-6 group-hover:skew-y-3 group-hover:-translate-y-2 transition-all duration-500 flex flex-col gap-3 p-5">
                <div className="flex gap-3 items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 border border-white/5" />
                  <div className="flex flex-col gap-2">
                    <div className="w-24 h-2.5 rounded-full bg-white/20" />
                    <div className="w-16 h-2 rounded-full bg-white/10" />
                  </div>
                </div>
                <div className="w-full h-3 rounded-full bg-white/5 mt-4" />
                <div className="w-5/6 h-3 rounded-full bg-white/5" />
                <div className="w-2/3 h-3 rounded-full bg-white/5" />
              </div>

              <div className="relative z-10 mt-auto pt-48">
                <h3 className="text-3xl text-white mb-3 group-hover:text-purple-400 transition-colors">Card Avazate</h3>
                <p className="text-neutral-400 text-base max-w-[90%] leading-relaxed">Profili, dashboard card, elementi e-commerce. Stili glassmorphism perfetti.</p>
              </div>
            </Link>

            {/* Bento Item 2: Navbars (Tall) */}
            <Link href="/components/navbars" className="md:col-span-2 md:row-span-2 relative p-6 rounded-2xl border border-white/10 bg-[#121212]/80 hover:bg-[#1a1a1a] transition-all duration-300 group overflow-hidden flex flex-col justify-end">
              {/* Visual */}
              <div className="absolute top-20 left-6 w-[120%] h-12 bg-[#0a0a0a] border border-white/10 rounded-xl shadow-xl flex items-center px-4 gap-3 group-hover:-translate-y-1 transition-transform duration-500">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500" />
                <div className="w-16 h-2 rounded-full bg-white/20" />
                <div className="flex gap-1.5 ml-auto">
                  <div className="w-8 h-2 rounded-full bg-white/10" />
                  <div className="w-8 h-2 rounded-full bg-white/10" />
                </div>
              </div>
              <div className="relative z-10 mt-auto">
                <h3 className="text-2xl text-white mb-2 group-hover:text-blue-400 transition-colors">Navbars</h3>
                <p className="text-neutral-400 text-sm">Menu di navigazione e headers strutturati.</p>
              </div>
            </Link>

            {/* Bento Item 3: Bottoni (Wide) */}
            <Link href="/components/buttons" className="md:col-span-3 md:row-span-1 relative p-6 rounded-2xl border border-white/10 bg-[#121212]/80 hover:bg-[#1a1a1a] transition-all duration-300 group overflow-hidden flex flex-col justify-end">
              
              {/* Visual */}
              <div className="absolute top-[40%] left-6 flex gap-4 group-hover:scale-110 group-hover:translate-x-2 transition-transform duration-500">
                <div className="px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex justify-center items-center shadow-lg shadow-pink-500/20">
                  <div className="w-12 h-1.5 bg-white/80 rounded-full"></div>
                </div>
                <div className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 flex justify-center items-center">
                  <div className="w-16 h-1.5 bg-white/40 rounded-full"></div>
                </div>
              </div>
              <div className="relative z-10 mt-auto">
                <h3 className="text-xl text-white mb-2 group-hover:text-pink-400 transition-colors">Buttons</h3>
                <p className="text-neutral-400 text-sm">Animati, gradienti, accessibili.</p>
              </div>
            </Link>

            {/* Bento Item 4: Forms (Square) */}
            <Link href="/components/forms" className="md:col-span-2 md:row-span-1 relative p-6 rounded-2xl border border-white/10 bg-[#121212]/80 hover:bg-[#1a1a1a] transition-all duration-300 group overflow-hidden flex flex-col justify-end">
              
              {/* Visual */}
              <div className="absolute top-8 left-6 right-10 flex flex-col gap-3 group-hover:-translate-y-1 transition-transform duration-500">
                <div className="w-16 h-2 rounded-full bg-white/30" />
                <div className="w-full h-10 rounded-xl bg-[#0a0a0a] border border-white/10 flex items-center px-4">
                  <div className="w-4 h-4 rounded bg-white/10" />
                </div>
              </div>
              <div className="relative z-10 mt-auto">
                <h3 className="text-xl text-white mb-2 group-hover:text-orange-400 transition-colors">Forms</h3>
                <p className="text-neutral-400 text-sm">Input, switch, e toggle.</p>
              </div>
            </Link>

            {/* Bento Item 5: Sidebars (Square) */}
            <Link href="/components/sidebars" className="md:col-span-1 md:row-span-1 relative p-6 rounded-2xl border border-white/10 bg-[#121212]/80 hover:bg-[#1a1a1a] transition-all duration-300 group overflow-hidden flex flex-col justify-end">
              
              {/* Visual */}
              <div className="absolute top-4 left-6 bottom-16 w-16 bg-[#0a0a0a] shadow-xl border border-white/10 rounded-xl flex flex-col gap-3 p-3 group-hover:-translate-x-1 transition-transform duration-500">
                <div className="w-full h-4 rounded-md bg-white/10 mb-2" />
                <div className="w-full h-2 rounded-full bg-white/20" />
                <div className="w-full h-2 rounded-full bg-white/10" />
                <div className="w-4/5 h-2 rounded-full bg-white/10" />
              </div>
              <div className="relative z-10 mt-auto">
                <h3 className="text-xl text-white mb-2 group-hover:text-emerald-400 transition-colors">Sidebars</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 py-24 md:py-32">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-5xl tracking-tight text-white mb-6">Amato dai <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">migliori</span></h2>
          <p className="text-lg text-neutral-400">Scopri cosa dicono gli sviluppatori e i designer che usano i nostri componenti ogni giorno per spedire codice più velocemente.</p>
        </div>

        {/* Top/Bottom Fade Mask for smooth scrolling appearance */}
        <div className="relative h-[600px] overflow-hidden" style={{ maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)' }}>
          <div className="flex justify-center gap-6 h-full">

            {/* Column 1 */}
            <div className="w-full sm:w-[320px] lg:w-[350px] flex-none flex flex-col gap-6 animate-marquee-y hover:[animation-play-state:paused]">
              {[...reviewCol1, ...reviewCol1, ...reviewCol1].map((review, i) => (
                <ReviewCard key={`col1-${i}`} review={review} />
              ))}
            </div>

            {/* Column 2 */}
            <div className="w-full sm:w-[320px] lg:w-[350px] hidden md:flex flex-none flex-col gap-6 animate-marquee-y hover:[animation-play-state:paused]" style={{ animationDelay: '-15s' }}>
              {[...reviewCol2, ...reviewCol2, ...reviewCol2].map((review, i) => (
                <ReviewCard key={`col2-${i}`} review={review} />
              ))}
            </div>

            {/* Column 3 */}
            <div className="w-[350px] hidden lg:flex flex-none flex-col gap-6 animate-marquee-y hover:[animation-play-state:paused]" style={{ animationDelay: '-30s' }}>
              {[...reviewCol3, ...reviewCol3, ...reviewCol3].map((review, i) => (
                <ReviewCard key={`col3-${i}`} review={review} />
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
