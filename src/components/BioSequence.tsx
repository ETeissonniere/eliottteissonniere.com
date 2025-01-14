import { useState, useEffect, useRef } from 'react'

const bioContent = [
    "[INITIALIZING BIO SEQUENCE]",
    "\nUNIT DESIGNATION: Eliott Teissonniere",
    "\nPRIMARY FUNCTIONS: Engineer, Entrepreneur, Blockchain Architect, Robot Whisperer",
    "\nSECONDARY FUNCTIONS:",
    "- Mentor at Berkeley Blockchain Accelerator",
    "- Advisor to various crypto and technology startups",
    "- Co-founder of Governance Research Institute (Est. 2020)",
    "\nNOTABLE ACHIEVEMENTS:",
    "- Co-inventor of multiple pending and granted patents",
    "- Former CTO of BitNation (UNESCO NetExplo prize, 2017)",
    "- Creator of world's first marriage dApp on Ethereum",
    "- CTO and co-founder of Nodle and Click",
    "\nMEDIA APPEARANCES:",
    "- Featured in Decrypt, CoinTelegraph, CoinDesk",
    "- Regular guest on blockchain and tech podcasts",
    "\nCONFERENCE SUBROUTINES EXECUTED:",
    "- Paris Blockchain Week",
    "- Stanford Blockchain Conference",
    "- European Commission",
    "\n[TERMINATING BIO SEQUENCE]",
    "\nWhen not executing primary functions, this unit can be found teaching its smart kettle to achieve sentience through decentralized governance protocols."
]

export default function BioSequence() {
    const [displayedLines, setDisplayedLines] = useState<string[]>([])
    const [completedLines, setCompletedLines] = useState<Set<number>>(new Set())
    const bioRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let currentLine = 0
        const interval = setInterval(() => {
            if (currentLine < bioContent.length) {
                setDisplayedLines(prev => [...prev, bioContent[currentLine]])
                setTimeout(() => {
                    setCompletedLines(prev => new Set([...prev, currentLine]))
                }, 2000)
                currentLine++
                if (bioRef.current) {
                    bioRef.current.scrollTop = bioRef.current.scrollHeight
                }
            } else {
                clearInterval(interval)
            }
        }, 200)

        return () => clearInterval(interval)
    }, [])

    return (
        <div ref={bioRef} className="h-full overflow-y-auto pr-6 scrollbar-thin scrollbar-thumb-green-400/50 hover:scrollbar-thumb-green-400 scrollbar-track-black/20 p-6">
            <div className="space-y-3 text-left">
                {displayedLines.map((line, index) => {
                    const isCompleted = completedLines.has(index);
                    const isList = line?.startsWith('-') ?? false;
                    const isCommand = line?.startsWith('[') ?? false;

                    return (
                        <p
                            key={index}
                            className={`
                                ${isCompleted ? 'hover:text-green-300 transition-colors duration-300' : 'typewriter'} 
                                whitespace-pre-wrap break-words
                                ${isList ? 'pl-6 opacity-90' : 'opacity-100'}
                                ${isCommand ? 'text-green-500 font-bold' : ''}
                            `}
                        >
                            {line}
                        </p>
                    );
                })}
            </div>
        </div>
    )
} 