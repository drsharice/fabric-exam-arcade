import { useState } from 'react'
import { multiQuestions, type MultiQuestion } from '../data/multiQuestions'

function normalizeAnswers(values: string[]) {
  return [...values].sort()
}

function arraysEqual(a: string[], b: string[]) {
  const aSorted = normalizeAnswers(a)
  const bSorted = normalizeAnswers(b)

  return (
    aSorted.length === bSorted.length &&
    aSorted.every((value, index) => value === bSorted[index])
  )
}

export default function MultiSelect() {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [selectedByQuestion, setSelectedByQuestion] = useState<
    Record<string, string[]>
  >({})
  const [checkedByQuestion, setCheckedByQuestion] = useState<
    Record<string, boolean>
  >({})

  const question: MultiQuestion = multiQuestions[currentIndex]
  const selectedAnswers = selectedByQuestion[question.id] || []
  const showResult = checkedByQuestion[question.id] || false

  const isCorrect = arraysEqual(selectedAnswers, question.correctAnswers)

  const toggleOption = (option: string) => {
    if (showResult) return

    setSelectedByQuestion((prev) => {
      const current = prev[question.id] || []
      const exists = current.includes(option)

      return {
        ...prev,
        [question.id]: exists
          ? current.filter((item) => item !== option)
          : [...current, option],
      }
    })
  }

  const handleCheck = () => {
    setCheckedByQuestion((prev) => ({
      ...prev,
      [question.id]: true,
    }))
  }

  const handleReset = () => {
    setSelectedByQuestion((prev) => ({
      ...prev,
      [question.id]: [],
    }))

    setCheckedByQuestion((prev) => ({
      ...prev,
      [question.id]: false,
    }))
  }

  const getQuestionScore = (item: MultiQuestion) => {
    const selected = selectedByQuestion[item.id] || []
    return arraysEqual(selected, item.correctAnswers) ? 1 : 0
  }

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-cyan-500/30 bg-zinc-950 p-8">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.3em] text-cyan-300">
              Multi-Select
            </p>
            <h1 className="mb-3 text-3xl font-bold text-white">
              Multi-Choice Questions
            </h1>
            <p className="text-sm font-semibold text-yellow-300">
              {question.domain}
            </p>
          </div>

          <div className="rounded-xl border border-zinc-700 px-4 py-2 text-sm text-zinc-300">
            Question {currentIndex + 1} of {multiQuestions.length}
          </div>
        </div>

        <p className="text-zinc-300">{question.question}</p>
      </div>

      <div className="rounded-3xl border border-emerald-500/30 bg-zinc-950 p-6">
        <h2 className="mb-4 text-xl font-bold text-emerald-300">
          Question Selector
        </h2>

        <div className="grid gap-3 md:grid-cols-3">
          {multiQuestions.map((item: MultiQuestion, index: number) => {
            const checked = checkedByQuestion[item.id] || false
            const score = getQuestionScore(item)
            const isActive = index === currentIndex

            return (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(index)}
                className={`rounded-2xl border p-4 text-left transition ${
                  isActive
                    ? 'border-cyan-400 bg-cyan-500/10'
                    : 'border-zinc-700 bg-zinc-900 hover:bg-zinc-800'
                }`}
              >
                <p className="text-sm font-semibold text-white">{item.id}</p>
                <p className="mt-1 text-xs text-zinc-400">{item.domain}</p>
                <p className="mt-2 text-xs text-zinc-300">
                  {checked ? `Checked: ${score} / 1` : 'Not checked yet'}
                </p>
              </button>
            )
          })}
        </div>
      </div>

      {question.codeSnippet && (
        <div className="rounded-3xl border border-zinc-700 bg-zinc-950 p-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-300">
            Code Snippet
          </p>
          <pre className="overflow-x-auto rounded-2xl border border-zinc-800 bg-black p-4 text-sm text-zinc-200">
            <code>{question.codeSnippet}</code>
          </pre>
        </div>
      )}

      <div className="rounded-3xl border border-fuchsia-500/30 bg-zinc-950 p-8">
        <h2 className="mb-6 text-2xl font-bold text-fuchsia-300">
          Select All Correct Answers
        </h2>

        <div className="space-y-3">
          {question.options.map((option: string) => {
            const selected = selectedAnswers.includes(option)
            const isActuallyCorrect = question.correctAnswers.includes(option)

            let optionClasses = 'border-zinc-700 hover:bg-zinc-900'

            if (!showResult && selected) {
              optionClasses = 'border-cyan-400 bg-cyan-500/10'
            }

            if (showResult && isActuallyCorrect) {
              optionClasses = 'border-emerald-400 bg-emerald-500/10'
            }

            if (showResult && selected && !isActuallyCorrect) {
              optionClasses = 'border-red-400 bg-red-500/10'
            }

            return (
              <label
                key={option}
                className={`flex cursor-pointer items-start gap-3 rounded-2xl border px-4 py-3 transition ${optionClasses}`}
              >
                <input
                  type="checkbox"
                  checked={selected}
                  onChange={() => toggleOption(option)}
                  disabled={showResult}
                  className="mt-1"
                />
                <span className="text-zinc-200">{option}</span>
              </label>
            )
          })}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            onClick={handleCheck}
            disabled={selectedAnswers.length === 0 || showResult}
            className="rounded-xl bg-cyan-500 px-4 py-2 font-semibold text-black disabled:opacity-40"
          >
            Check Answer
          </button>

          <button
            onClick={handleReset}
            className="rounded-xl border border-zinc-700 px-4 py-2 text-zinc-300 hover:bg-zinc-900"
          >
            Reset
          </button>

          <button
            onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
            disabled={currentIndex === 0}
            className="rounded-xl border border-zinc-700 px-4 py-2 text-zinc-300 hover:bg-zinc-900 disabled:opacity-40"
          >
            ← Previous
          </button>

          <button
            onClick={() =>
              setCurrentIndex((prev) =>
                Math.min(prev + 1, multiQuestions.length - 1),
              )
            }
            disabled={currentIndex === multiQuestions.length - 1}
            className="rounded-xl border border-zinc-700 px-4 py-2 text-zinc-300 hover:bg-zinc-900 disabled:opacity-40"
          >
            Next →
          </button>
        </div>

        {showResult && (
          <div
            className={`mt-6 rounded-2xl border p-4 ${
              isCorrect
                ? 'border-emerald-500/40 bg-emerald-500/10'
                : 'border-red-500/40 bg-red-500/10'
            }`}
          >
            <p className="mb-2 text-lg font-semibold text-white">
              {isCorrect ? 'Correct!' : 'Not quite'}
            </p>
            <p className="text-zinc-300">
              Correct answers:{' '}
              <span className="font-semibold text-cyan-300">
                {question.correctAnswers.join(' | ')}
              </span>
            </p>
            <p className="mt-2 text-zinc-300">{question.explanation}</p>
          </div>
        )}
      </div>
    </div>
  )
}