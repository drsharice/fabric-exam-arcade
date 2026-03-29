import { Link } from 'react-router-dom'
import { questions } from '../data/questions'

export default function Home() {
  const totalQuestions = questions.length

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-cyan-500/30 bg-zinc-950 p-8 shadow-[0_0_30px_rgba(34,211,238,0.12)]">
        <p className="mb-2 text-sm uppercase tracking-[0.3em] text-cyan-300">
          Welcome
        </p>

        <h1 className="mb-4 text-4xl font-bold text-white">
          Fabric Exam Arcade
        </h1>

        <p className="max-w-2xl text-zinc-300">
          Practice Microsoft Fabric exam questions in a fun arcade-style app.
          Train by domain, get instant feedback, and build toward full exam
          simulation mode.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            to={`/practice?count=${Math.min(5, totalQuestions)}`}
            className="rounded-2xl border border-fuchsia-400/50 bg-fuchsia-500/10 px-5 py-3 font-semibold text-fuchsia-300 hover:bg-fuchsia-500/20"
          >
            Practice Mode
          </Link>

          <Link
            to="/exam"
            className="rounded-2xl border border-yellow-400/50 bg-yellow-500/10 px-5 py-3 font-semibold text-yellow-300 hover:bg-yellow-500/20"
          >
            Exam Simulator
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-emerald-500/30 bg-zinc-950 p-6">
          <h2 className="mb-4 text-2xl font-semibold text-emerald-300">
            Practice Sets
          </h2>

          <div className="flex flex-wrap gap-3">
            <Link
              to={`/practice?count=${Math.min(5, totalQuestions)}`}
              className="rounded-xl border border-zinc-700 px-4 py-2 text-zinc-200 hover:bg-zinc-900"
            >
              5 Questions
            </Link>

            <Link
              to={`/practice?count=${Math.min(10, totalQuestions)}`}
              className="rounded-xl border border-zinc-700 px-4 py-2 text-zinc-200 hover:bg-zinc-900"
            >
              10 Questions
            </Link>

            <Link
              to={`/practice?count=${totalQuestions}`}
              className="rounded-xl border border-zinc-700 px-4 py-2 text-zinc-200 hover:bg-zinc-900"
            >
              All Questions
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-cyan-500/30 bg-zinc-950 p-6">
          <h2 className="mb-4 text-2xl font-semibold text-cyan-300">
            Current Question Bank
          </h2>

          <p className="text-zinc-300">
            Loaded questions: <span className="font-bold">{totalQuestions}</span>
          </p>

          <p className="mt-3 text-sm text-zinc-400">
            Single-choice questions are active now. More question types can be
            added next.
          </p>
        </div>
      </section>
    </div>
  )
}