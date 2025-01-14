import { useState, useEffect } from 'react'

const frames = [
    `   /\\_/\\
  ('>_<')
  /     \\
 /|  |  |\\
(_\\__|__/_)
   \\___/`,
    `   /\\_/\\
  ('^_^')
  /     \\
 /|  |  |\\
(_\\__|__/_)
   \\___/`,
    `   /\\_/\\
  ('o_o')
  /     \\
 /|  |  |\\
(_\\__|__/_)
   \\___/`,
    `   /\\_/\\
  ('~_~')
  /     \\
 /|  |  |\\
(_\\__|__/_)
   \\___/`,
]

const messages = ['*tap*', '*tap tap*', '*compile*', '*debug*']

export default function AsciiAnimation() {
    const [frameIndex, setFrameIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setFrameIndex((prevIndex) => (prevIndex + 1) % frames.length)
        }, 500)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className="flex flex-col items-center">
            <pre className="text-xs sm:text-sm whitespace-pre font-mono">
                {frames[frameIndex]}
            </pre>
            <div className="mt-1 text-xs sm:text-sm text-green-400/80">
                {messages[frameIndex]}
            </div>
        </div>
    )
} 