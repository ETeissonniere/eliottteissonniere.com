export default function Sidebar() {
    return (
        <aside className="space-y-8">
            {/* Highlights */}
            <div className="bg-gradient-to-br from-zinc-50 to-zinc-100 border border-zinc-200 rounded-xl p-6 shadow-sm">
                <h2 className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-6 flex items-center gap-2">
                    <span className="text-amber-400">★</span> Highlights
                </h2>
                <ul className="space-y-4">
                    <li className="text-sm text-zinc-700 pl-4 border-l-2 border-amber-300 hover:border-amber-500 transition-colors">
                        Former CTO & Co-founder @ Nodle and Click
                    </li>
                    <li className="text-sm text-zinc-700 pl-4 border-l-2 border-amber-300 hover:border-amber-500 transition-colors">
                        UNESCO NetExplo Prize (2017)
                    </li>
                    <li className="text-sm text-zinc-700 pl-4 border-l-2 border-amber-300 hover:border-amber-500 transition-colors">
                        Patents in cryptography, distributed systems, IoT, and nuclear reactor design
                    </li>
                    <li className="text-sm text-zinc-700 pl-4 border-l-2 border-amber-300 hover:border-amber-500 transition-colors">
                        Focused on robotics, automation, and space exploration
                    </li>
                    <li className="text-sm text-zinc-700 pl-4 border-l-2 border-amber-300 hover:border-amber-500 transition-colors">
                        Built decentralized IoT network and digital trust infrastructure
                    </li>
                </ul>
            </div>

            {/* Blog Preview - Coming Soon */}
            <div className="border-2 border-dashed border-zinc-300 rounded-xl p-6 text-center">
                <p className="text-zinc-400 text-sm font-mono mb-2">// coming soon</p>
                <h3 className="text-zinc-600 font-semibold mb-1">Writing & Notes</h3>
                <p className="text-xs text-zinc-500">
                    Thoughts on progress, space, and building things that matter
                </p>
            </div>

            {/* Quick Contact */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h2 className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-4">
                    Get In Touch
                </h2>
                <p className="text-sm text-zinc-700 leading-relaxed">
                    Working on something ambitious? Let's talk.
                </p>
                <div className="mt-4 space-y-2">
                    <a
                        href="mailto:contact@eliottteissonniere.com"
                        className="block text-sm text-blue-600 hover:text-blue-700 font-medium underline decoration-blue-200 hover:decoration-blue-400 transition-colors"
                    >
                        contact@eliottteissonniere.com
                    </a>
                </div>
            </div>
        </aside>
    );
}
