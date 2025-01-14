import { useState, useEffect } from 'react'

const frames = [
    `
   /\\_/\\
  ('>_<')  *tap*
  /     \\
 /|  |  |\\
(_\\__|__/_)
   \\___/
  `,
    `
   /\\_/\\
  ('^_^')  *tap tap*
  /     \\
 /|  |  |\\
(_\\__|__/_)
   \\___/
  `,
    `
   /\\_/\\
  ('o_o')  *compile*
  /     \\
 /|  |  |\\
(_\\__|__/_)
   \\___/
  `,
    `
   /\\_/\\
  ('~_~')  *debug*
  /     \\
 /|  |  |\\
(_\\__|__/_)
   \\___/
  `,
]

export default function AsciiAnimation() {
    const [frameIndex, setFrameIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setFrameIndex((prevIndex) => (prevIndex + 1) % frames.length)
        }, 500)

        return () => clearInterval(timer)
    }, [])

    return (
        <pre className="text-xs sm:text-sm md:text-base lg:text-lg whitespace-pre font-mono bg-black p-4 rounded-lg shadow-lg border border-green-400 animate-pulse">
            {frames[frameIndex]}
        </pre>
    )
} 