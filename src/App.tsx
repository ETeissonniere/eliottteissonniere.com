import BioSequence from './components/BioSequence';
import SocialLinks from './components/SocialLinks';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="min-h-screen w-full bg-white">
      {/* Navigation */}
      <nav className="w-full px-6 py-6 md:px-12 md:py-8 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              src="/robot.svg"
              alt="Robot"
              className="w-12 h-12 md:w-16 md:h-16 hover:rotate-12 transition-transform duration-300 cursor-pointer"
            />
            <div className="hidden md:block">
              <p className="text-sm text-zinc-500 font-mono">stasis is the enemy</p>
            </div>
          </div>
          <SocialLinks />
        </div>
      </nav>

      {/* Main content */}
      <main className="px-6 md:px-12 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <header className="mb-16 md:mb-24">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 bg-clip-text text-transparent">
              Eliott Teissonnière
            </h1>
            <p className="text-zinc-600 text-xl md:text-3xl font-light mb-8">
              Engineering Leader & Technology Entrepreneur
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg max-w-3xl">
              <p className="text-zinc-700 text-lg md:text-xl leading-relaxed">
                <span className="font-semibold text-zinc-900">Currently:</span> Working on satellite infrastructure in San Francisco
              </p>
              <p className="text-zinc-700 text-lg md:text-xl leading-relaxed mt-2">
                <span className="font-semibold text-zinc-900">Philosophy:</span> Stasis is the enemy. Signal over noise.
              </p>
            </div>
          </header>

          <div className="grid lg:grid-cols-[1fr_350px] gap-12 lg:gap-20">
            <div>
              <BioSequence />
            </div>

            <Sidebar />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-100 mt-24 py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-zinc-500 text-sm">
            <p>Always interested in working on projects that move the needle on human progress.</p>
            <p className="mt-2">If you're building something ambitious in robotics, space, or distributed systems—reach out.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
