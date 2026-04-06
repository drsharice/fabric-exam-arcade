import { useState } from 'react'
import { labQuestions, type LabQuestion } from '../data/labs'

export default function Labs() {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [answersByLab, setAnswersByLab] = useState<
    Record<string, Record<string, string>>
  >({})
  const [checkedLabs, setCheckedLabs] = useState<Record<string, boolean>>({})

  const lab: LabQuestion = labQuestions[currentIndex]
  const currentAnswers = answersByLab[lab.id] || {}
  const showResult = checkedLabs[lab.id] || false

  const handleChange = (promptId: string, value: string) => {
    setAnswersByLab((prev) => ({
      ...prev,
      [lab.id]: {
        ...(prev[lab.id] || {}),
        [promptId]: value,
      },
    }))
  }

  const handleCheck = () => {
    setCheckedLabs((prev) => ({
      ...prev,
      [lab.id]: true,
    }))
  }

  const handleReset = () => {
    setAnswersByLab((prev) => ({
      ...prev,
      [lab.id]: {},
    }))

    setCheckedLabs((prev) => ({
      ...prev,
      [lab.id]: false,
    }))
  }

  const getLabScore = (labId: string) => {
    const selectedAnswers = answersByLab[labId] || {}
    const foundLab = labQuestions.find((item: LabQuestion) => item.id === labId)

    if (!foundLab) return 0

    return foundLab.prompts.filter(
      (prompt) => selectedAnswers[prompt.id] === prompt.correctAnswer,
    ).length
  }

  const allAnswered = lab.prompts.every((prompt) => currentAnswers[prompt.id])

  const totalCorrect = lab.prompts.filter(
    (prompt) => currentAnswers[prompt.id] === prompt.correctAnswer,
  ).length

  const isPerfect = totalCorrect === lab.prompts.length

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-cyan-500/30 bg-zinc-950 p-8">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.3em] text-cyan-300">
              Labs
            </p>

            <h1 className="mb-3 text-3xl font-bold text-white">{lab.title}</h1>

            <p className="mb-3 text-sm font-semibold text-yellow-300">
              {lab.domain}
            </p>
          </div>

          <div className="rounded-xl border border-zinc-700 px-4 py-2 text-sm text-zinc-300">
            Lab {currentIndex + 1} of {labQuestions.length}
          </div>
        </div>

        <p className="text-zinc-300">{lab.question}</p>
      </div>

      <div className="rounded-3xl border border-emerald-500/30 bg-zinc-950 p-6">
        <h2 className="mb-4 text-xl font-bold text-emerald-300">
          Lab Selector
        </h2>

        <div className="grid gap-3 md:grid-cols-3">
          {labQuestions.map((item: LabQuestion, index: number) => {
            const checked = checkedLabs[item.id] || false
            const score = getLabScore(item.id)
            const total = item.prompts.length
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
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-xs text-zinc-400">{item.domain}</p>
                <p className="mt-2 text-xs text-zinc-300">
                  {checked ? `Checked: ${score} / ${total}` : 'Not checked yet'}
                </p>
              </button>
            )
          })}
        </div>
      </div>

      {lab.type === 'code-dropdown' ? (
        <div className="rounded-3xl border border-zinc-700 bg-zinc-950 p-6 font-mono text-sm text-zinc-200">
          <div className="space-y-4 whitespace-pre-wrap">
            <div>{`targetDF`}</div>
            <div>{`  .merge(sourceDF, "sourceDF.Key" = "targetDF.Key")`}</div>

            <div className="my-2">
              <select
                value={currentAnswers['merge1'] || ''}
                onChange={(e) => handleChange('merge1', e.target.value)}
                disabled={showResult}
                className="w-full rounded bg-zinc-800 px-3 py-2 text-white"
              >
                <option value="">Select</option>
                {lab.prompts[0].options.map((opt: string) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>{`  set = {"targetDF.LastModified": "sourceDF.LastModified"}`}</div>

            <div className="my-2">
              <select
                value={currentAnswers['merge2'] || ''}
                onChange={(e) => handleChange('merge2', e.target.value)}
                disabled={showResult}
                className="w-full rounded bg-zinc-800 px-3 py-2 text-white"
              >
                <option value="">Select</option>
                {lab.prompts[1].options.map((opt: string) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>{`  values = {`}</div>
            <div>{`    "targetDF.Key": "sourceDF.Key",`}</div>
            <div>{`    "targetDF.LastModified": "sourceDF.LastModified",`}</div>
            <div>{`    "targetDF.Status": "sourceDF.Status"`}</div>
            <div>{`  }`}</div>

            <div className="my-2">
              <select
                value={currentAnswers['merge3'] || ''}
                onChange={(e) => handleChange('merge3', e.target.value)}
                disabled={showResult}
                className="w-full rounded bg-zinc-800 px-3 py-2 text-white"
              >
                <option value="">Select</option>
                {lab.prompts[2].options.map((opt: string) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>{`  condition="targetDF.LastModified > (current_date() - INTERVAL '7' DAY)",`}</div>
            <div>{`  set = {"targetDF.Status": "'inactive'"}`}</div>
            <div>{`)`}</div>
            <div>{`.execute()`}</div>
          </div>
        </div>
      ) : (
        <div className="rounded-3xl border border-zinc-700 bg-zinc-950 p-6">
          <div className="space-y-4">
            {lab.images.map((image: string, index: number) => (
              <img
                key={image}
                src={image}
                alt={`${lab.title} ${index + 1}`}
                className="w-full rounded-2xl border border-zinc-800"
              />
            ))}
          </div>
        </div>
      )}

      <div className="rounded-3xl border border-fuchsia-500/30 bg-zinc-950 p-8">
        <h2 className="mb-6 text-2xl font-bold text-fuchsia-300">
          Answer Area
        </h2>

        <div className="space-y-6">
          {lab.prompts.map((prompt) => {
            const selected = currentAnswers[prompt.id] || ''
            const isCorrect = selected === prompt.correctAnswer

            return (
              <div key={prompt.id} className="space-y-2">
                <label className="block text-sm font-semibold text-zinc-200">
                  {prompt.label}
                </label>

                <select
                  value={selected}
                  onChange={(e) => handleChange(prompt.id, e.target.value)}
                  disabled={showResult}
                  className={`w-full rounded-xl border bg-zinc-900 px-4 py-3 text-white outline-none ${
                    showResult
                      ? isCorrect
                        ? 'border-emerald-400'
                        : 'border-red-400'
                      : 'border-zinc-700'
                  }`}
                >
                  <option value="">Select an answer</option>
                  {prompt.options.map((option: string) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                {showResult && (
                  <p
                    className={`text-sm font-semibold ${
                      isCorrect ? 'text-emerald-300' : 'text-red-300'
                    }`}
                  >
                    {isCorrect
                      ? 'Correct'
                      : `Correct answer: ${prompt.correctAnswer}`}
                  </p>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            onClick={handleCheck}
            disabled={!allAnswered || showResult}
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
                Math.min(prev + 1, labQuestions.length - 1),
              )
            }
            disabled={currentIndex === labQuestions.length - 1}
            className="rounded-xl border border-zinc-700 px-4 py-2 text-zinc-300 hover:bg-zinc-900 disabled:opacity-40"
          >
            Next →
          </button>
        </div>

        {showResult && (
          <div
            className={`mt-6 rounded-2xl border p-4 ${
              isPerfect
                ? 'border-emerald-500/40 bg-emerald-500/10'
                : 'border-yellow-500/40 bg-yellow-500/10'
            }`}
          >
            <p className="mb-2 text-lg font-semibold text-white">
              Score: {totalCorrect} / {lab.prompts.length}
            </p>
            <p className="text-zinc-300">{lab.explanation}</p>
          </div>
        )}
      </div>
    </div>
  )
}