import { useState } from 'react'
import { labQuestions, type LabQuestion, type TableData } from '../data/labs'

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

function renderTable(table: TableData, tableIndex: number) {
  return (
    <div key={`${table.title || 'table'}-${tableIndex}`} className="space-y-3">
      {table.title && (
        <p className="text-sm font-semibold text-cyan-300">{table.title}</p>
      )}

      <div className="overflow-x-auto rounded-2xl border border-zinc-800">
        <table className="min-w-full border-collapse text-left text-sm text-zinc-200">
          <thead className="bg-zinc-900">
            <tr>
              {table.headers.map((header) => (
                <th
                  key={header}
                  className="border-b border-zinc-800 px-4 py-3 font-semibold text-white"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, rowIndex) => (
              <tr key={`${tableIndex}-${rowIndex}`} className="bg-black/20">
                {row.map((cell, cellIndex) => (
                  <td
                    key={`${tableIndex}-${rowIndex}-${cellIndex}`}
                    className="whitespace-pre-line border-t border-zinc-800 px-4 py-3"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function Labs() {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [answersByLab, setAnswersByLab] = useState<
    Record<string, Record<string, string>>
  >({})
  const [checkedLabs, setCheckedLabs] = useState<Record<string, boolean>>({})
  const [selectedByLab, setSelectedByLab] = useState<Record<string, string[]>>({})

  const lab: LabQuestion = labQuestions[currentIndex]
  const currentAnswers = answersByLab[lab.id] || {}
  const selectedOptions = selectedByLab[lab.id] || []
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

  const handleToggleOption = (option: string) => {
    if (showResult) return

    setSelectedByLab((prev) => {
      const current = prev[lab.id] || []
      const exists = current.includes(option)

      return {
        ...prev,
        [lab.id]: exists
          ? current.filter((item) => item !== option)
          : [...current, option],
      }
    })
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

    setSelectedByLab((prev) => ({
      ...prev,
      [lab.id]: [],
    }))

    setCheckedLabs((prev) => ({
      ...prev,
      [lab.id]: false,
    }))
  }

  const getLabScore = (labId: string) => {
    const foundLab = labQuestions.find((item: LabQuestion) => item.id === labId)

    if (!foundLab) return 0

    if (foundLab.type === 'table-multi') {
      const selected = selectedByLab[labId] || []
      const correct = foundLab.correctAnswers || []
      return arraysEqual(selected, correct) ? 1 : 0
    }

    const selectedAnswers = answersByLab[labId] || {}

    return foundLab.prompts.filter(
      (prompt) => selectedAnswers[prompt.id] === prompt.correctAnswer,
    ).length
  }

  const allAnswered =
    lab.type === 'table-multi'
      ? (selectedOptions.length > 0)
      : lab.prompts.every((prompt) => currentAnswers[prompt.id])

  const totalCorrect =
    lab.type === 'table-multi'
      ? arraysEqual(selectedOptions, lab.correctAnswers || [])
        ? 1
        : 0
      : lab.prompts.filter(
          (prompt) => currentAnswers[prompt.id] === prompt.correctAnswer,
        ).length

  const totalPossible =
    lab.type === 'table-multi' ? 1 : lab.prompts.length

  const isPerfect = totalCorrect === totalPossible

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
            const total = item.type === 'table-multi' ? 1 : item.prompts.length
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
      ) : lab.type === 'table-multi' ? (
        <div className="rounded-3xl border border-zinc-700 bg-zinc-950 p-6">
          <div className="space-y-6">
            {(lab.tables || []).map((table, index) => renderTable(table, index))}
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

        {lab.type === 'table-multi' ? (
          <div className="space-y-3">
            {(lab.options || []).map((option: string) => {
              const selected = selectedOptions.includes(option)
              const isActuallyCorrect = (lab.correctAnswers || []).includes(option)

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
                    onChange={() => handleToggleOption(option)}
                    disabled={showResult}
                    className="mt-1"
                  />
                  <span className="text-zinc-200">{option}</span>
                </label>
              )
            })}
          </div>
        ) : (
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
        )}

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
              Score: {totalCorrect} / {totalPossible}
            </p>
            <p className="text-zinc-300">{lab.explanation}</p>
          </div>
        )}
      </div>
    </div>
  )
}