import BioSequence from './components/BioSequence'
import SocialLinks from './components/SocialLinks'

function App() {
    return (
        <div className="min-h-screen w-full">
            {/* Navigation */}
            <nav className="w-full px-6 py-8 md:px-12 md:py-12">
                <div className="max-w-6xl mx-auto">
                    <SocialLinks />
                </div>
            </nav>

            {/* Main content */}
            <main className="px-6 md:px-12 py-12 md:py-24">
                <div className="max-w-6xl mx-auto">
                    <header className="mb-20 md:mb-32">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
                            Eliott Teissonnière
                        </h1>
                        <p className="text-zinc-500 text-lg md:text-2xl font-light tracking-wide">
                            Engineering Leader & Technology Entrepreneur
                        </p>
                    </header>

                    <div className="grid md:grid-cols-[5fr_2fr] gap-16 md:gap-24">
                        <div>
                            <BioSequence />
                        </div>

                        <div className="md:border-l md:border-zinc-200/70 md:pl-12">
                            <div className="sticky top-12">
                                <h2 className="text-sm uppercase tracking-wider text-zinc-400 font-medium mb-8">Highlights</h2>
                                <ul className="space-y-4 text-[15px]">
                                    <li className="text-zinc-600">CTO & Co-founder @ Nodle and Click</li>
                                    <li className="text-zinc-600">Former CTO @ BitNation</li>
                                    <li className="text-zinc-600">UNESCO NetExplo Prize (2017)</li>
                                    <li className="text-zinc-600">Berkeley Blockchain Mentor</li>
                                    <li className="text-zinc-600">Polkadot Academy Lecturer</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default App 