export type LabQuestionType = 'dropdown' | 'code-dropdown' | 'table-multi'

export interface DropdownPrompt {
  id: string
  label: string
  options: string[]
  correctAnswer: string
}

export interface TableData {
  title?: string
  headers: string[]
  rows: string[][]
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
  codeSnippet?: string
  tables?: TableData[]
  options?: string[]
  correctAnswers?: string[]
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
        options: [
          'Dataflow Gen2 dataflow',
          'A KQL queryset',
          'A T-SQL statement',
        ],
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
  {
    id: 'lab005',
    type: 'table-multi',
    domain: 'Design and Implement Data Models',
    title: 'Choose Columns for DimProduct',
    question:
      'You have a Fabric workspace that contains a lakehouse named Lakehouse1. Data is ingested into Lakehouse1 as one flat table. You plan to load the data into a dimensional model and implement a star schema. From the original flat table, you create two tables named FactSales and DimProduct. You will track changes in DimProduct. Which three columns should you include in the DimProduct table?',
    images: [],
    prompts: [],
    tables: [
      {
        headers: ['Name', 'Description'],
        rows: [
          ['TransactionID', 'Contains a unique ID for each transaction'],
          ['Date', 'Contains the date of a transaction'],
          ['ProductID', 'Contains a unique ID for each product'],
          [
            'ProductColor',
            'Contains a descriptive attribute that describes the color of each product',
          ],
          ['ProductName', 'Contains a unique name for each product'],
          ['SalesAmount', 'Contains the sales amount of a transaction'],
        ],
      },
    ],
    options: [
      'Date',
      'ProductName',
      'ProductColor',
      'TransactionID',
      'SalesAmount',
      'ProductID',
    ],
    correctAnswers: ['ProductName', 'ProductColor', 'ProductID'],
    explanation:
      'DimProduct should contain the product key and descriptive product attributes, not transaction-level facts.',
  },
  {
    id: 'lab006',
    type: 'table-multi',
    domain: 'Monitor and Optimize Analytics Solutions',
    title: 'Identify Cached Shortcuts',
    question:
      'You have a Google Cloud Storage (GCS) container named storage1 that contains files shown in the table below. You have a Fabric workspace named Workspace1 that has the cache for shortcuts enabled. Workspace1 contains a lakehouse named Lakehouse1. Lakehouse1 has the shortcuts shown in the second table. You need to read data from all the shortcuts. Which shortcuts will retrieve data from the cache?',
    images: [],
    prompts: [],
    tables: [
      {
        title: 'Files in storage1',
        headers: ['Name', 'Size'],
        rows: [
          ['ProductFile.parquet', '8 MB'],
          ['StoreFile.json', '500 MB'],
          ['TripsFile.csv', '99 MB'],
        ],
      },
      {
        title: 'Shortcuts in Lakehouse1',
        headers: ['Name', 'Source', 'Last accessed'],
        rows: [
          ['Products', 'ProductFile', '12 hours ago'],
          ['Stores', 'StoreFile', '4 hours ago'],
          ['Trips', 'TripsFile', '48 hours ago'],
        ],
      },
    ],
    options: [
      'Stores only',
      'Products only',
      'Stores and Products only',
      'Products, Stores, and Trips',
      'Trips only',
      'Products and Trips only',
    ],
    correctAnswers: ['Products, Stores, and Trips'],
    explanation:
      'This lab uses the answer shown in your screenshot for the shortcut cache scenario.',
  },
  {
    id: 'lab007',
    type: 'table-multi',
    domain: 'Implement and Manage Analytics Solutions',
    title: 'Overwrite Paired Deployment Pipeline Items',
    question:
      'You have two Fabric workspaces named Workspace1 and Workspace2. You have a Fabric deployment pipeline named deployPipeline1 that deploys items from Workspace1 to Workspace2. DeployPipeline1 contains all the items in Workspace1. You recently modified the items in Workspace1. Items in Workspace1 that have the same name as items in Workspace2 are currently paired. You need to ensure that the items in Workspace1 overwrite the corresponding items in Workspace2. The solution must minimize effort. What should you do?',
    images: [],
    prompts: [],
    tables: [
      {
        headers: ['Workspace', 'Items'],
        rows: [
          [
            'Workspace1',
            'Model1\nNotebook1\nReport1\nLakehouse1\nPipeline1',
          ],
          [
            'Workspace2',
            'Model1\nNotebook2\nReport1\nLakehouse2',
          ],
        ],
      },
    ],
    options: [
      'Delete all the items in Workspace2, and then run deployPipeline1.',
      'Rename each item in Workspace2 to have the same name as the items in Workspace1.',
      'Back up the items in Workspace2, and then run deployPipeline1.',
      'Run deployPipeline1 without modifying the items in Workspace2.',
    ],
    correctAnswers: [
      'Run deployPipeline1 without modifying the items in Workspace2.',
    ],
    explanation:
      'Because the same-name items are already paired, you can run the deployment pipeline and let the Workspace1 items overwrite the paired items in Workspace2.',
  },
]