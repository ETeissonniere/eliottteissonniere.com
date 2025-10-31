import { type ReactNode } from 'react'

const Link = ({ href, children }: { href: string; children: ReactNode }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${children} (opens in new tab)`}
        className="text-sky-600 hover:text-sky-800 underline decoration-sky-200/50 hover:decoration-sky-600/30 transition-colors"
    >
        {children}
    </a>
)

const bioContent = [
    <>
        I'm an engineering leader and technology entrepreneur focused on robotics and space exploration. I'm passionate about how robotics can accelerate human progress by automating routine work, freeing us to focus on higher-impact innovation. I believe autonomous systems will be key in unlocking human potential and driving a new industrial revolution—both on Earth and beyond.
    </>,
    <>
        I bring deep expertise in distributed systems, zero-trust architectures, and applied cryptography. As CTO and Co-founder of {' '}
        <Link href="https://www.nodle.com">Nodle</Link>, I built the world's largest decentralized IoT network. At {' '}
        <Link href="https://clickapp.com">Click</Link>, I led development of digital trust and content authenticity solutions using secure elements and cryptographic verification. Previously, as CTO of BitNation, my work on distributed governance systems earned the {' '}
        <Link href="https://en.unesco.org/news/netexplo-forum-celebrated-its-10th-edition">UNESCO NetExplo Prize in 2017</Link>. I hold multiple {' '}
        <Link href="https://patents.google.com/?inventor=Eliott+Teissonniere">patents in distributed systems and IoT technologies</Link>.
    </>,
    <>
        I actively contribute to the technology ecosystem through education and mentorship at the {' '}
        <Link href="https://www.xcelerator.berkeley.edu/x-network">Berkeley Blockchain Accelerator</Link> and {' '}
        <Link href="https://polkadot.academy">Polkadot Academy</Link>, where I teach distributed systems and decentralized architectures. My work has been featured in {' '}
        <Link href="https://decrypt.co/16404/what-will-blockchain-look-like-in-2030-the-experts-speak">Decrypt</Link>, {' '}
        <Link href="https://cointelegraph.com/news/nodle-outgrows-stellar-begins-to-migrate-to-own-blockchain">CoinTelegraph</Link>, {' '}
        <Link href="https://www.forbes.com/councils/eliottteissonniere/">Forbes</Link>, and {' '}
        <Link href="https://www.coindesk.com/iot-app-nodle-moves-from-stellar-blockchain-to-polkadot">CoinDesk</Link>, and I speak regularly at conferences including Stanford Blockchain Conference and the European Commission.
    </>
]

export default function BioSequence() {
    return (
        <div className="space-y-10">
            {bioContent.map((paragraph, index) => (
                <p
                    key={index}
                    className="text-zinc-600 text-base md:text-lg leading-relaxed opacity-0 animate-slide-up"
                    style={{
                        animationDelay: `${index * 150}ms`,
                        animationFillMode: 'forwards'
                    }}
                >
                    {paragraph}
                </p>
            ))}
        </div>
    )
} 