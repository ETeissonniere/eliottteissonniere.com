export default function SocialLinks() {
    const links = [
        { name: 'github', href: 'https://github.com/ETeissonniere' },
        { name: 'twitter', href: 'https://twitter.com/EliottTeiss' },
        { name: 'linkedin', href: 'https://www.linkedin.com/in/eliott-teissonniere' },
        { name: 'robotics', href: 'https://accrobotics.com' }
    ]

    return (
        <div className="flex flex-wrap justify-end gap-x-6 md:gap-x-8 gap-y-3">
            {links.map(link => (
                <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${link.name} (opens in new tab)`}
                    className="text-sm md:text-base text-zinc-500 hover:text-zinc-900 transition-colors font-medium lowercase tracking-wide hover:underline decoration-amber-300 decoration-2 underline-offset-4"
                >
                    {link.name}
                </a>
            ))}
        </div>
    )
} 