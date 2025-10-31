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
        I'm an engineering leader and technology entrepreneur focused on blockchain and decentralized systems. As CTO and Co-founder of {' '}
        <Link href="https://www.nodle.com">Nodle</Link>, I'm building the world's largest decentralized IoT network, while also leading {' '}
        <Link href="https://clickapp.com">Click</Link> in developing new solutions for digital trust and content authenticity. Previously, I served as CTO of BitNation, where my team's work in blockchain governance was recognized with the {' '}
        <Link href="https://en.unesco.org/news/netexplo-forum-celebrated-its-10th-edition">UNESCO NetExplo prize in 2017</Link>.
    </>,
    <>
        I'm passionate about growing the blockchain ecosystem through education and mentorship. I actively contribute at the {' '}
        <Link href="https://www.xcelerator.berkeley.edu/x-network">Berkeley Blockchain Accelerator</Link> and lecture at the {' '}
        <Link href="https://polkadot.academy">Polkadot Blockchain Academy</Link>, sharing insights on governance systems and decentralized technologies. Throughout my career, I've developed multiple {' '}
        <Link href="https://patents.google.com/?inventor=Eliott+Teissonniere">patents in blockchain technology</Link>, particularly in IoT and decentralized networks.
    </>,
    <>
        My work has been featured in leading tech publications including {' '}
        <Link href="https://decrypt.co/16404/what-will-blockchain-look-like-in-2030-the-experts-speak">Decrypt</Link>, {' '}
        <Link href="https://cointelegraph.com/news/nodle-outgrows-stellar-begins-to-migrate-to-own-blockchain">CoinTelegraph</Link>, and {' '}
        <Link href="https://www.coindesk.com/iot-app-nodle-moves-from-stellar-blockchain-to-polkadot">CoinDesk</Link>. I regularly speak at major industry events including Paris Blockchain Week, Stanford Blockchain Conference, and the European Commission, and have contributed {' '}
        <Link href="https://www.forbes.com/councils/eliottteissonniere/">thought leadership articles to Forbes</Link> on blockchain technology and AI.
    </>,
    <>
        Beyond blockchain, I'm exploring how robotics can accelerate innovation by automating routine or repetitive tasks, allowing humanity to focus on higher impact work. I believe robotics will be key in unlocking human potential and unlocking a new industrial revolution.
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