import { type ReactNode } from 'react'

const Link = ({ href, children }: { href: string; children: ReactNode }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${children} (opens in new tab)`}
        className="text-blue-600 hover:text-blue-700 underline decoration-blue-200 hover:decoration-blue-400 transition-colors font-medium"
    >
        {children}
    </a>
)

const Section = ({ title, children, delay = 0 }: { title: string; children: ReactNode; delay?: number }) => (
    <section
        className="opacity-0 animate-slide-up"
        style={{
            animationDelay: `${delay}ms`,
            animationFillMode: 'forwards'
        }}
    >
        <h2 className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-4 flex items-center gap-2">
            <span className="text-amber-400">→</span> {title}
        </h2>
        <div className="space-y-5 text-zinc-700 text-base md:text-lg leading-relaxed">
            {children}
        </div>
    </section>
)

export default function BioSequence() {
    return (
        <div className="space-y-12 md:space-y-16">
            <Section title="What I Care About" delay={0}>
                <p className="text-lg md:text-xl font-medium text-zinc-900">
                    I evaluate every project by one question: <span className="text-amber-600">Is this net positive for human progress?</span> Does it free us to explore, build, and break through limits—or does it just add noise?
                </p>
                <p>
                    I'm focused on robotics and space exploration because they represent our best bet at accelerating progress. Robotics can automate routine work, freeing humans to tackle higher-impact problems. Space forces us to solve hard engineering challenges that cascade back to Earth.
                </p>
                <p>
                    My background is in distributed systems, zero-trust architectures, and applied cryptography. As CTO and Co-founder of <Link href="https://www.nodle.com">Nodle</Link>, I built the world's largest decentralized IoT network. At <Link href="https://clickapp.com">Click</Link>, I led development of digital trust and content authenticity solutions using secure elements and cryptographic verification.
                </p>
                <p>
                    Previously as CTO of BitNation, my work on distributed governance systems earned the <Link href="https://en.unesco.org/news/unesco-netexplo-forum-2017-10-innovations-are-changing-world">UNESCO NetExplo Prize in 2017</Link>. I hold multiple <Link href="https://patents.google.com/?inventor=Eliott+Teissonniere">patents spanning cryptography, distributed systems, IoT, and nuclear reactor design</Link>.
                </p>
            </Section>

            <Section title="Teaching & Speaking" delay={200}>
                <p>
                    I actively contribute to the technology ecosystem through education and mentorship at the <Link href="https://www.xcelerator.berkeley.edu/x-network">Berkeley Blockchain Accelerator</Link> and <Link href="https://polkadot.academy">Polkadot Academy</Link>, where I teach distributed systems and decentralized architectures.
                </p>
                <p>
                    I've given talks on entrepreneurship at <Link href="https://exetercomputingclub.netlify.app">Exeter School's computing club</Link>, and speak regularly at conferences including Stanford Blockchain Conference and the European Commission. My work has been featured in <Link href="https://decrypt.co/16404/what-will-blockchain-look-like-in-2030-the-experts-speak">Decrypt</Link>, <Link href="https://cointelegraph.com/news/nodle-outgrows-stellar-begins-to-migrate-to-own-blockchain">CoinTelegraph</Link>, <Link href="https://www.forbes.com/councils/eliottteissonniere/">Forbes</Link>, and <Link href="https://www.coindesk.com/iot-app-nodle-moves-from-stellar-blockchain-to-polkadot">CoinDesk</Link>.
                </p>
            </Section>

            <Section title="Interests & Current Thinking" delay={400}>
                <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-6 space-y-4">
                    <div>
                        <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-2">Obsessed with</p>
                        <p className="text-zinc-700">
                            Space infrastructure, autonomous systems, decentralized networks, progress studies, how we choose what to build
                        </p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-zinc-500 uppercase tracking-wide mb-2">Currently reading/exploring</p>
                        <p className="text-zinc-700">
                            Satellite communications protocols, robotic manipulation in low-gravity environments, why some tech movements succeed while others stall
                        </p>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-red-500 uppercase tracking-wide mb-2">Anti-patterns I avoid</p>
                        <p className="text-zinc-700">
                            Projects that exist purely to extract value without creating it, technology that increases complexity without solving real problems, stasis disguised as stability
                        </p>
                    </div>
                </div>
            </Section>
        </div>
    )
} 