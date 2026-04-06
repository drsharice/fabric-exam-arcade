import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-cyan-500/30 bg-zinc-950">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-4 w-4 rounded-sm bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.9)]" />
            <span className="text-2xl font-bold text-cyan-400">
              Fabric Exam Arcade
            </span>
          </Link>

          <nav className="flex gap-3 text-sm">
            <Link
              to="/"
              className="rounded-lg border border-zinc-700 px-3 py-2 hover:bg-zinc-800"
            >
              Home
            </Link>
            <Link
              to="/practice"
              className="rounded-lg border border-zinc-700 px-3 py-2 hover:bg-zinc-800"
            >
              Practice
            </Link>
            <Link
              to="/exam"
              className="rounded-lg border border-zinc-700 px-3 py-2 hover:bg-zinc-800"
            >
              Exam
            </Link>
            <Link
        to="/labs"
        className="rounded-lg border border-zinc-700 px-3 py-2 hover:bg-zinc-800"
        >
    Labs
  </Link>
  <Link
    to="/multi-select"
    className="rounded-lg border border-zinc-700 px-3 py-2 hover:bg-zinc-800"
  >
    Multi
  </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">
        <Outlet />
      </main>
    </div>
  )
}