import { Github, Twitter, Linkedin, BotIcon as Robot } from 'lucide-react'

export default function SocialLinks() {
    return (
        <div className="flex space-x-4">
            <a href="https://github.com/ETeissonniere" className="hover:text-white transition-colors">
                <Github size={24} />
                <span className="sr-only">GitHub</span>
            </a>
            <a href="https://twitter.com/EliottTeiss" className="hover:text-white transition-colors">
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
            </a>
            <a href="https://www.linkedin.com/in/eliott-teissonniere/" className="hover:text-white transition-colors">
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://accrobotics.com" className="hover:text-white transition-colors">
                <Robot size={24} />
                <span className="sr-only">Accrobotics</span>
            </a>
        </div>
    )
} 