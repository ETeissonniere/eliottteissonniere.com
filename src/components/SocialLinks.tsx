export default function SocialLinks() {
    const links = [
        { name: 'Github', href: 'https://github.com/ETeissonniere' },
        { name: 'Twitter', href: 'https://twitter.com/EliottTeiss' },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/eliott-teissonniere' },
        { name: 'Robotics', href: 'https://accrobotics.com' }
    ]

    return (
        <div className="flex flex-wrap justify-end gap-x-8 gap-y-4">
            {links.map(link => (
                <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link text-base md:text-lg text-zinc-600 hover:text-zinc-900"
                >
                    {link.name}
                </a>
            ))}
        </div>
    )
} 