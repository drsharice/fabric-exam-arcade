export type QuestionType = 'single'

export type Domain =
  | 'Ingest and Transform Data'
  | 'Store Data in Fabric'
  | 'Implement and Manage Analytics Solutions'
  | 'Monitor and Optimize Analytics Solutions'
  | 'Govern and Secure Data'

export interface Question {
  id: string
  domain: Domain
  type: QuestionType
  question: string
  options: string[]
  correctAnswer: string
  explanation: string
}