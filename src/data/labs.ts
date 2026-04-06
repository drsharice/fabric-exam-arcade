export type LabQuestionType = 'dropdown' | 'code-dropdown'

export interface DropdownPrompt {
  id: string
  label: string
  options: string[]
  correctAnswer: string
}

export interface LabQuestion {
  id: string
  type: LabQuestionType
  domain: string
  title: string
  question: string
  images: string[]
  prompts: DropdownPrompt[]
  explanation: string
}

export const labQuestions: LabQuestion[] = [
  {
    id: 'lab001',
    type: 'dropdown',
    domain: 'Design and Implement Data Models',
    title: 'Star Schema Design',
    question:
      'You have a Fabric warehouse named DW1 that contains four staging tables named ProductCategory, ProductSubcategory, Product, and SalesOrder. ProductCategory, ProductSubcategory, and Product are used often in analytical queries. You need to implement a star schema for DW1. The solution must minimize development effort.',
    images: [`${import.meta.env.BASE_URL}images/labs/star-schema-hotspot.png`],
    prompts: [
      {
        id: 'prompt1',
        label: 'ProductCategory, ProductSubcategory, and Product must be:',
        options: [
          'Added to the model as individual tables',
          'Denormalized by being added to the SalesOrder table',
          'Denormalized into a single product dimension table',
        ],
        correctAnswer: 'Denormalized into a single product dimension table',
      },
      {
        id: 'prompt2',
        label: 'The joining key must be:',
        options: [
          'The product name and the date',
          'The unique system generated identifier',
          'The product category name',
        ],
        correctAnswer: 'The product name and the date',
      },
    ],
    explanation: 'This lab question uses the answer shown in your screenshot.',
  },
  {
    id: 'lab002',
    type: 'dropdown',
    domain: 'Ingest and Transform Data',
    title: 'Choose the Right Tool for Each Team',
    question:
      'Your company has three newly created data engineering teams named Team1, Team2, and Team3 that plan to use Fabric. Team1 consists of members who currently use Microsoft Power BI and wants a low-code approach. Team2 has a background in Python programming and wants to use PySpark code to transform data. Team3 currently uses Azure Data Factory and wants to move data between source and sink environments by using the least amount of effort. What should you recommend for each team?',
    images: [`${import.meta.env.BASE_URL}images/labs/team-tools-hotspot.png`],
    prompts: [
      {
        id: 'team1',
        label: 'Team1:',
        options: ['Data pipelines', 'Notebooks', 'Dataflow Gen2 dataflow'],
        correctAnswer: 'Dataflow Gen2 dataflow',
      },
      {
        id: 'team2',
        label: 'Team2:',
        options: ['Data pipelines', 'Notebooks', 'Dataflow Gen2 dataflow'],
        correctAnswer: 'Notebooks',
      },
      {
        id: 'team3',
        label: 'Team3:',
        options: ['Data pipelines', 'Notebooks', 'Dataflow Gen2 dataflow'],
        correctAnswer: 'Data pipelines',
      },
    ],
    explanation:
      'This mapping follows the tool choices shown in your screenshot.',
  },
  {
    id: 'lab003',
    type: 'dropdown',
    domain: 'Ingest and Transform Data',
    title: 'Choose the Right Item for Each Dataset',
    question:
      'You plan to process three datasets by using Fabric. Dataset1 will be added to Fabric and will have a unique primary key between the source and the destination. The unique primary key will be an integer and will start from 1 and have an increment of 1. Dataset2 contains semi-structured data that uses bulk data transfer. The dataset must be handled in one process between the source and the destination. The data transformation process will include the use of custom visuals to understand and work with the dataset in development mode. Dataset3 is in a lakehouse. The data will be bulk loaded. The data transformation process will include row-based windowing functions during the loading process. You need to identify which type of item to use for the datasets. The solution must minimize development effort and use built-in functionality, when possible.',
    images: [`${import.meta.env.BASE_URL}images/labs/dataset-item-selection.png`],
    prompts: [
      {
        id: 'dataset1',
        label: 'Dataset1:',
        options: ['Dataflow Gen2 dataflow', 'A notebook', 'A T-SQL statement'],
        correctAnswer: 'A T-SQL statement',
      },
      {
        id: 'dataset2',
        label: 'Dataset2:',
        options: ['Dataflow Gen2 dataflow', 'A notebook', 'A T-SQL statement'],
        correctAnswer: 'A notebook',
      },
      {
        id: 'dataset3',
        label: 'Dataset3:',
        options: ['Dataflow Gen2 dataflow', 'A KQL queryset', 'A T-SQL statement'],
        correctAnswer: 'Dataflow Gen2 dataflow',
      },
    ],
    explanation:
      'This lab uses the answers shown in your screenshot for Dataset1, Dataset2, and Dataset3.',
  },
  {
    id: 'lab004',
    type: 'code-dropdown',
    domain: 'Ingest and Transform Data',
    title: 'Complete the Incremental Merge Statement',
    question:
      'Complete the merge statement by selecting the correct options for each step of the incremental load logic.',
    images: [],
    prompts: [
      {
        id: 'merge1',
        label: 'Step 1',
        options: [
          '.whenMatchedInsert(',
          '.whenMatchedUpdate(',
          '.whenNotMatchedBySourceInsert(',
          '.whenNotMatchedBySourceUpdate(',
          '.whenNotMatchedInsert(',
          '.whenNotMatchedUpdate(',
        ],
        correctAnswer: '.whenMatchedUpdate(',
      },
      {
        id: 'merge2',
        label: 'Step 2',
        options: [
          '.whenMatchedInsert(',
          '.whenMatchedUpdate(',
          '.whenNotMatchedBySourceInsert(',
          '.whenNotMatchedBySourceUpdate(',
          '.whenNotMatchedInsert(',
          '.whenNotMatchedUpdate(',
        ],
        correctAnswer: '.whenNotMatchedInsert(',
      },
      {
        id: 'merge3',
        label: 'Step 3',
        options: [
          '.whenMatchedInsert(',
          '.whenMatchedUpdate(',
          '.whenNotMatchedBySourceInsert(',
          '.whenNotMatchedBySourceUpdate(',
          '.whenNotMatchedInsert(',
          '.whenNotMatchedUpdate(',
        ],
        correctAnswer: '.whenNotMatchedBySourceUpdate(',
      },
    ],
    explanation:
      'This merge pattern updates matched rows, inserts new rows, and updates stale target-only rows.',
  },
]