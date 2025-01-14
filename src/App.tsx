import AsciiAnimation from './components/AsciiAnimation'
import SocialLinks from './components/SocialLinks'
import BioSequence from './components/BioSequence'

export default function App() {
    return (
        <div className="flex flex-col h-screen bg-black text-green-400 font-mono overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,255,0,0.03),transparent_50%)]" />

            <header className="shrink-0 px-12 py-10 relative">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-5xl font-bold mb-6 hover:text-green-300 transition-colors duration-300">
                        Eliott Teissonniere
                    </h1>
                    <SocialLinks />
                </div>
            </header>

            <main className="flex-1 flex flex-col items-center justify-start px-12 py-6 overflow-hidden relative min-h-0">
                <div className="w-full max-w-5xl mx-auto h-full flex flex-col min-h-0">
                    <AsciiAnimation />

                    <section className="mt-12 text-center w-full max-w-3xl mx-auto flex-1 overflow-hidden flex flex-col min-h-0">
                        <h2 className="text-2xl font-semibold mb-8 shrink-0 flex items-center justify-center gap-3">
                            <span className="text-green-500">$</span>
                            <span className="hover:text-green-300 transition-colors duration-300">whoami</span>
                        </h2>
                        <div className="relative flex-1 min-h-0">
                            <div className="absolute top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm -z-10 rounded-lg" />
                            <BioSequence />
                        </div>
                    </section>
                </div>
            </main>

            <footer className="shrink-0 px-12 py-8 text-center text-sm relative border-t border-green-900/30">
                <div className="max-w-5xl mx-auto">
                    <p className="text-green-500/70 hover:text-green-400/90 transition-colors duration-300">
                        © {new Date().getFullYear()} Eliott Teissonniere | Powered by matcha and bad puns
                    </p>
                </div>
            </footer>
        </div>
    )
} 