import { useMemo, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { questions } from '../data/questions'

type ReviewItem = {
  id: string
  domain: string
  question: string
  options: string[]
  selectedAnswer: string
  correctAnswer: string
  explanation: string
  isCorrect: boolean
}

export default function Practice() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const requestedCount = Number(searchParams.get('count')) || questions.length
  const questionCount = Math.min(requestedCount, questions.length)

  const practiceQuestions = useMemo(() => {
    return [...questions]
      .sort(() => Math.random() - 0.5)
      .slice(0, questionCount)
  }, [questionCount])

  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [correctByDomain, setCorrectByDomain] = useState<Record<string, number>>(
    {},
  )
  const [reviewItems, setReviewItems] = useState<ReviewItem[]>([])

  const domainTotals = useMemo(() => {
    return practiceQuestions.reduce<Record<string, number>>((acc, question) => {
      acc[question.domain] = (acc[question.domain] || 0) + 1
      return acc
    }, {})
  }, [practiceQuestions])

  const getPerformanceColor = (percent: number) => {
    if (percent >= 80) {
      return {
        bar: 'bg-emerald-400',
        text: 'text-emerald-300',
        border: 'border-emerald-500/30',
        bg: 'bg-emerald-500/10',
        label: 'Strong',
      }
    }

    if (percent >= 60) {
      return {
        bar: 'bg-yellow-400',
        text: 'text-yellow-300',
        border: 'border-yellow-500/30',
        bg: 'bg-yellow-500/10',
        label: 'Developing',
      }
    }

    return {
      bar: 'bg-red-400',
      text: 'text-red-300',
      border: 'border-red-500/30',
      bg: 'bg-red-500/10',
      label: 'Needs Review',
    }
  }

  const getOptionClasses = (option: string) => {
    if (!showResult) {
      return selectedAnswer === option
        ? 'border-cyan-400 bg-cyan-500/10'
        : 'border-zinc-700 hover:bg-zinc-900'
    }

    if (option === question.correctAnswer) {
      return 'border-emerald-400 bg-emerald-500/10'
    }

    if (option === selectedAnswer && option !== question.correctAnswer) {
      return 'border-red-400 bg-red-500/10'
    }

    return 'border-zinc-700 opacity-80'
  }

  const isFinished = currentIndex >= practiceQuestions.length

  if (isFinished) {
    const overallPercent = Math.round((score / practiceQuestions.length) * 100)

    return (
      <div className="space-y-6">
        <div className="rounded-3xl border border-emerald-500/30 bg-zinc-950 p-8 text-center">
          <h1 className="mb-4 text-3xl font-bold text-emerald-300">
            Practice Complete 🎉
          </h1>

          <p className="text-xl text-white">
            Score: {score} / {practiceQuestions.length}
          </p>

          <p className="mt-2 text-lg font-semibold text-cyan-300">
            Percentage: {overallPercent}%
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              className="rounded-xl border border-zinc-700 px-4 py-2 text-zinc-300 hover:bg-zinc-900"
            >
              Back Home
            </Link>

            <button
              onClick={() =>
                navigate('/results', {
                  state: {
                    score,
                    total: practiceQuestions.length,
                    overallPercent,
                    domainTotals,
                    correctByDomain,
                    reviewItems,
                  },
                })
              }
              className="rounded-xl bg-cyan-500 px-4 py-2 font-semibold text-black hover:brightness-110"
            >
              Review Answers
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-cyan-500/30 bg-zinc-950 p-8">
          <h2 className="mb-6 text-2xl font-bold text-cyan-300">
            Domain Breakdown
          </h2>

          <div className="grid gap-4">
            {Object.entries(domainTotals).map(([domain, total]) => {
              const correct = correctByDomain[domain] || 0
              const percent = Math.round((correct / total) * 100)
              const performance = getPerformanceColor(percent)

              return (
                <div
                  key={domain}
                  className={`rounded-2xl border ${performance.border} ${performance.bg} p-5`}
                >
                  <div className="mb-2 flex items-center justify-between gap-4">
                    <h3 className="text-lg font-semibold text-white">{domain}</h3>
                    <span className={`text-sm font-semibold ${performance.text}`}>
                      {correct} / {total} correct ({percent}%)
                    </span>
                  </div>

                  <div className="mb-2 h-3 w-full overflow-hidden rounded-full bg-zinc-800">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${performance.bar}`}
                      style={{ width: `${percent}%` }}
                    />
                  </div>

                  <p className={`text-sm font-semibold ${performance.text}`}>
                    {performance.label}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  const question = practiceQuestions[currentIndex]
  const isCorrect = selectedAnswer === question.correctAnswer
  const progressPercent = ((currentIndex + 1) / practiceQuestions.length) * 100

  const handleCheck = () => {
    if (!selectedAnswer) return

    setShowResult(true)

    if (!answers[question.id]) {
      setAnswers((prev) => ({
        ...prev,
        [question.id]: selectedAnswer,
      }))

      setReviewItems((prev) => [
        ...prev,
        {
          id: question.id,
          domain: question.domain,
          question: question.question,
          options: question.options,
          selectedAnswer,
          correctAnswer: question.correctAnswer,
          explanation: question.explanation,
          isCorrect,
        },
      ])

      if (isCorrect) {
        setScore((prev) => prev + 1)
        setCorrectByDomain((prev) => ({
          ...prev,
          [question.domain]: (prev[question.domain] || 0) + 1,
        }))
      }
    }
  }

  const handleNext = () => {
    setSelectedAnswer('')
    setShowResult(false)
    setCurrentIndex((prev) => prev + 1)
  }

  return (
    <div className="rounded-3xl border border-fuchsia-500/30 bg-zinc-950 p-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-fuchsia-300">
            Practice Mode
          </p>
          <p className="text-sm text-zinc-400">
            Question {currentIndex + 1} of {practiceQuestions.length}
          </p>
        </div>

        <Link
          to="/"
          className="rounded-xl border border-zinc-700 px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-900"
        >
          Back Home
        </Link>
      </div>

      <div className="mb-6 h-3 w-full overflow-hidden rounded-full bg-zinc-800">
        <div
          className="h-full rounded-full bg-cyan-400 transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <h1 className="mb-2 text-2xl font-bold">{question.question}</h1>
      <p className="mb-6 text-sm text-yellow-300">{question.domain}</p>

      <div className="space-y-3">
        {question.options.map((option) => (
          <label
            key={option}
            className={`flex cursor-pointer items-start gap-3 rounded-2xl border px-4 py-3 transition ${getOptionClasses(
              option,
            )}`}
          >
            <input
              type="radio"
              name={question.id}
              value={option}
              checked={selectedAnswer === option}
              onChange={(e) => setSelectedAnswer(e.target.value)}
              disabled={showResult}
              className="mt-1"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>

      <div className="mt-6 flex gap-3">
        <button
          onClick={handleCheck}
          disabled={!selectedAnswer || showResult}
          className="rounded-xl bg-cyan-500 px-4 py-2 font-semibold text-black disabled:opacity-40"
        >
          Check Answer
        </button>

        {showResult && (
          <button
            onClick={handleNext}
            className="rounded-xl border border-zinc-700 px-4 py-2 text-zinc-300 hover:bg-zinc-900"
          >
            Next Question →
          </button>
        )}
      </div>

      {showResult && (
        <div
          className={`mt-6 rounded-2xl border p-4 ${
            isCorrect
              ? 'border-emerald-500/40 bg-emerald-500/10'
              : 'border-red-500/40 bg-red-500/10'
          }`}
        >
          <p className="mb-2 text-lg font-semibold">
            {isCorrect ? 'Correct!' : 'Not quite'}
          </p>
          <p>
            Correct answer:{' '}
            <span className="font-bold">{question.correctAnswer}</span>
          </p>
          <p className="mt-2 text-zinc-300">{question.explanation}</p>
        </div>
      )}
    </div>
  )
}