import AsciiAnimation from './components/AsciiAnimation'
import SocialLinks from './components/SocialLinks'
import BioSequence from './components/BioSequence'

export default function App() {
    return (
        <div className="min-h-screen flex flex-col bg-black text-green-400 font-mono p-4 md:p-8 lg:p-12">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,255,0,0.03),transparent_50%)]" />

            {/* Terminal Window Container */}
            <div className="relative flex-1 flex flex-col rounded-lg border border-green-500/30 bg-black/90 backdrop-blur-sm shadow-[0_0_15px_rgba(0,255,0,0.1)] min-h-0">
                {/* Terminal Title Bar */}
                <div className="shrink-0 px-4 py-2 border-b border-green-500/30 flex items-center gap-2">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/70 border border-red-500/30" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/70 border border-yellow-500/30" />
                        <div className="w-3 h-3 rounded-full bg-green-500/70 border border-green-500/30" />
                    </div>
                    <div className="flex-1 text-center text-sm text-green-400/70">terminal@eliott-teissonniere:~</div>
                </div>

                {/* ASCII Animation - Fixed in top right */}
                <div className="absolute top-14 right-8 w-40 opacity-90 hidden md:block border border-green-500/20 rounded-lg p-2 bg-black/40 hover:border-green-500/40 transition-colors duration-300">
                    <AsciiAnimation />
                </div>

                {/* Main Content Area - Scrollable */}
                <div className="flex-1 flex flex-col min-h-0">
                    <header className="shrink-0 px-8 pt-12 pb-8">
                        <div className="max-w-5xl mx-auto">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 hover:text-green-300 transition-colors duration-300 tracking-tight">
                                Eliott Teissonniere
                            </h1>
                            <SocialLinks />
                        </div>
                    </header>

                    <main className="flex-1 px-8 pb-8 min-h-0">
                        <div className="h-full max-w-5xl mx-auto flex flex-col">
                            <section className="flex-1 flex flex-col min-h-0">
                                <h2 className="text-xl md:text-2xl font-semibold mb-8 shrink-0 flex items-center justify-center gap-3">
                                    <span className="text-green-500">$</span>
                                    <span className="hover:text-green-300 transition-colors duration-300 group-hover:animate-pulse">whoami</span>
                                </h2>
                                <div className="flex-1 min-h-0 rounded-lg border border-green-500/20 bg-black/40 group mb-8">
                                    <div className="absolute top-0 left-0 w-full h-full backdrop-blur-sm -z-10 rounded-lg" />
                                    <BioSequence />
                                </div>
                            </section>
                        </div>
                    </main>
                </div>
            </div>

            {/* Copyright outside terminal */}
            <div className="shrink-0 text-center text-sm py-6 text-green-500/50 hover:text-green-400/70 transition-colors duration-300">
                © {new Date().getFullYear()} Eliott Teissonniere | Powered by matcha and bad puns
            </div>
        </div>
    )
} 