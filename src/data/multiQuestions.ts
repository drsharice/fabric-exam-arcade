export interface MultiQuestion {
  id: string
  type: 'multi'
  domain: string
  question: string
  options: string[]
  correctAnswers: string[]
  explanation: string
  codeSnippet?: string
}

export const multiQuestions: MultiQuestion[] = [
  {
    id: 'mq001',
    type: 'multi',
    domain: 'Govern and Secure Data',
    question:
      'You have a Fabric workspace named Workspace1 that contains a lakehouse named Lakehouse1. Lakehouse1 contains the following tables: Orders, Customer, and Employee. The Employee table contains Personally Identifiable Information (PII). A data engineer is building a workflow that requires writing data to the Customer table, however, the user does NOT have the elevated permissions required to view the contents of the Employee table. You need to ensure that the data engineer can write data to the Customer table without reading data from the Employee table. Which three actions should you perform?',
    options: [
      'Share Lakehouse1 with the data engineer.',
      'Assign the data engineer the Contributor role for Workspace2.',
      'Assign the data engineer the Viewer role for Workspace2.',
      'Assign the data engineer the Contributor role for Workspace1.',
      'Migrate the Employee table from Lakehouse1 to Lakehouse2.',
      'Create a new workspace named Workspace2 that contains a new lakehouse named Lakehouse2.',
      'Assign the data engineer the Viewer role for Workspace1.',
    ],
    correctAnswers: [
      'Assign the data engineer the Contributor role for Workspace1.',
      'Migrate the Employee table from Lakehouse1 to Lakehouse2.',
      'Create a new workspace named Workspace2 that contains a new lakehouse named Lakehouse2.',
    ],
    explanation:
      'This solution separates the sensitive Employee table while preserving the engineer’s ability to write to the required Customer table.',
  },
  {
    id: 'mq002',
    type: 'multi',
    domain: 'Implement and Manage Analytics Solutions',
    question:
      'You have a Fabric workspace that contains a lakehouse and a semantic model named Model1. You use a notebook named Notebook1 to ingest and transform data from an external data source. You need to execute Notebook1 as part of a data pipeline named Pipeline1. The process must meet the following requirements: run daily at 07:00 AM UTC, attempt to retry Notebook1 twice if the notebook fails, and after Notebook1 executes successfully, refresh Model1. Which three actions should you perform?',
    options: [
      'Place the Semantic model refresh activity after the Notebook activity and link the activities by using the On success condition.',
      'From the Schedule settings of Pipeline1, set the time zone to UTC.',
      'Set the Retry setting of the Notebook activity to 2.',
      'From the Schedule settings of Notebook1, set the time zone to UTC.',
      'Set the Retry setting of the Semantic model refresh activity to 2.',
      'Place the Semantic model refresh activity after the Notebook activity and link the activities by using an On completion condition.',
    ],
    correctAnswers: [
      'Place the Semantic model refresh activity after the Notebook activity and link the activities by using the On success condition.',
      'From the Schedule settings of Pipeline1, set the time zone to UTC.',
      'Set the Retry setting of the Notebook activity to 2.',
    ],
    explanation:
      'The pipeline controls the schedule, the notebook activity should retry twice, and the semantic model refresh should run only after the notebook succeeds.',
  },
  {
    id: 'mq003',
    type: 'multi',
    domain: 'Implement and Manage Analytics Solutions',
    question:
      'You are building a Fabric notebook named MasterNotebook1 in a workspace. You need to ensure that the notebooks are executed in the following sequence: 1. Notebook_03, 2. Notebook_01, 3. Notebook_02. Which two actions should you perform?',
    codeSnippet: `DAG = {
  "activities": [
    {
      "name": "execute_notebook_1",
      "path": "notebook_01",
      "timeoutPerCellInSeconds": 600,
      "args": {
        "input_value": "999"
      },
      "retry": 1,
      "retryIntervalInSeconds": 30
    },
    {
      "name": "execute_notebook_2",
      "path": "notebook_02",
      "timeoutPerCellInSeconds": 400,
      "args": {
        "input_value": "888"
      },
      "retry": 1,
      "retryIntervalInSeconds": 30
    },
    {
      "name": "execute_notebook_3",
      "path": "notebook_03",
      "timeoutPerCellInSeconds": 600,
      "args": {
        "input_value": "777"
      },
      "retry": 1,
      "retryIntervalInSeconds": 30
    },
    {
      "name": "execute_notebook_3",
      "path": "notebook_03",
      "timeoutPerCellInSeconds": 600,
      "args": {
        "input_value": "777"
      },
      "retry": 1,
      "retryIntervalInSeconds": 30
    }
  ],
  "timeoutInSeconds": 43200,
  "concurrency": 0
}

mssparkutils.notebook.runMultiple(DAG, {"displayDAGViaGraphviz": True})`,
    options: [
      'Move the declaration of Notebook_02 to the bottom of the Directed Acyclic Graph (DAG) definition.',
      'Add dependencies to the execution of Notebook_03.',
      'Split the Directed Acyclic Graph (DAG) definition into three separate definitions.',
      'Add dependencies to the execution of Notebook_02.',
      'Change the concurrency to 3.',
      'Move the declaration of Notebook_03 to the top of the Directed Acyclic Graph (DAG) definition.',
    ],
    correctAnswers: [
      'Add dependencies to the execution of Notebook_02.',
      'Move the declaration of Notebook_03 to the top of the Directed Acyclic Graph (DAG) definition.',
    ],
    explanation:
      'This question includes a code snippet instead of an image. The required answer pair follows the intended notebook execution order shown in your source material.',
  },
]