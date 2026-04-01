import type { Question } from '../types/question'

export const questions: Question[] = [
  {
    id: 'q001',
    domain: 'Ingest and Transform Data',
    type: 'single',
    question:
      'Your organization uses Microsoft Fabric to manage real-time data ingestion from various IoT devices through Azure Event Hubs. You need to remove unnecessary columns before storing in Delta Lake. What should you do?',
    options: [
      'Store data in a staging area first',
      'Use batch processing',
      'Use a Spark job',
      'Use the event processor to remove unnecessary columns',
    ],
    correctAnswer: 'Use the event processor to remove unnecessary columns',
    explanation:
      'Event processing is the best place to filter data in real-time ingestion scenarios.',
  },

  {
    id: 'q002',
    domain: 'Store Data in Fabric',
    type: 'single',
    question:
      'You have semi-structured data readable by T-SQL, KQL, and Spark, but only written by Spark. Where should it be stored?',
    options: ['Lakehouse', 'Eventhouse', 'Datamart', 'Warehouse'],
    correctAnswer: 'Lakehouse',
    explanation:
      'Lakehouse supports Spark writes and multiple query engines.',
  },

  {
    id: 'q003',
    domain: 'Implement and Manage Analytics Solutions',
    type: 'single',
    question: 'What is best practice for team development in Fabric?',
    options: [
      'Develop directly in production',
      'Use isolated development environments',
      'Share a single notebook',
      'Allow concurrent editing in production',
    ],
    correctAnswer: 'Use isolated development environments',
    explanation:
      'Isolation prevents conflicts and improves collaboration.',
  },

  {
    id: 'q004',
    domain: 'Ingest and Transform Data',
    type: 'single',
    question:
      'How should you ensure incremental updates in a Fabric lakehouse?',
    options: ['Watermark strategy', 'Full reload', 'Batch processing', 'CDC'],
    correctAnswer: 'Watermark strategy',
    explanation: 'Watermarks track new/changed data efficiently.',
  },

  {
    id: 'q005',
    domain: 'Ingest and Transform Data',
    type: 'single',
    question:
      'What should you use to copy data from on-prem SQL Server to Fabric Warehouse?',
    options: ['Dataflow Gen1', 'Data pipeline', 'KQL query', 'Notebook'],
    correctAnswer: 'Data pipeline',
    explanation:
      'Pipelines are designed for data movement and orchestration.',
  },

  {
    id: 'q006',
    domain: 'Ingest and Transform Data',
    type: 'single',
    question: 'What is used to copy data from SQL Server to Fabric Warehouse?',
    options: ['Spark job', 'Data pipeline', 'Dataflow Gen1', 'Eventstream'],
    correctAnswer: 'Data pipeline',
    explanation: 'Pipelines handle ingestion scenarios.',
  },

  {
    id: 'q007',
    domain: 'Monitor and Optimize Analytics Solutions',
    type: 'single',
    question: 'What does large semantic model storage enable?',
    options: [
      'Smaller models',
      'Handling data beyond 10GB',
      'Automatic refresh',
      'DirectQuery only',
    ],
    correctAnswer: 'Handling data beyond 10GB',
    explanation: 'It increases scalability of semantic models.',
  },

  {
    id: 'q008',
    domain: 'Ingest and Transform Data',
    type: 'single',
    question:
      'How do you minimize source load while loading only changed data?',
    options: ['Triggers', 'Timestamp', 'Full load', 'CDC'],
    correctAnswer: 'CDC',
    explanation: 'CDC tracks changes efficiently.',
  },

  {
    id: 'q009',
    domain: 'Monitor and Optimize Analytics Solutions',
    type: 'single',
    question:
      'How do you improve performance in a large warehouse with hash keys?',
    options: [
      'Change to SHA256',
      'Increase capacity',
      'Enable V-Order',
      'Use smaller surrogate keys',
    ],
    correctAnswer: 'Use smaller surrogate keys',
    explanation: 'Wide hash keys impact performance.',
  },

  {
    id: 'q010',
    domain: 'Ingest and Transform Data',
    type: 'single',
    question: 'What is an eventstream?',
    options: [
      'Real-time ingestion pipeline',
      'Batch processor',
      'Storage format',
      'Deployment tool',
    ],
    correctAnswer: 'Real-time ingestion pipeline',
    explanation: 'Eventstreams handle real-time ingestion.',
  },

  {
    id: 'q011',
    domain: 'Implement and Manage Analytics Solutions',
    type: 'single',
    question: 'How do you attach multiple notebooks to same Spark session?',
    options: [
      'High concurrency',
      'Dynamic allocation',
      'Change runtime',
      'Increase executors',
    ],
    correctAnswer: 'High concurrency',
    explanation: 'Allows shared Spark sessions.',
  },

  {
    id: 'q012',
    domain: 'Implement and Manage Analytics Solutions',
    type: 'single',
    question:
      'How do you ensure mirrored SQL data remains available during downtime?',
    options: [
      'Reconfigure',
      'Data Factory',
      'Manual replication',
      'Automatic mirroring',
    ],
    correctAnswer: 'Automatic mirroring',
    explanation: 'Keeps data continuously available.',
  },

  {
    id: 'q013',
    domain: 'Store Data in Fabric',
    type: 'single',
    question: 'What is Delta Lake?',
    options: [
      'Power BI engine',
      'Open-source storage layer',
      'Warehouse feature',
      'Backup format',
    ],
    correctAnswer: 'Open-source storage layer',
    explanation: 'Adds ACID capabilities to data lakes.',
  },

  {
    id: 'q014',
    domain: 'Govern and Secure Data',
    type: 'single',
    question: 'Which object is used for Row-Level Security?',
    options: ['Stored Procedure', 'Constraint', 'Schema', 'Function'],
    correctAnswer: 'Function',
    explanation: 'Functions define RLS logic.',
  },

  {
    id: 'q015',
    domain: 'Implement and Manage Analytics Solutions',
    type: 'single',
    question: 'How do you deploy an eventhouse across environments?',
    options: ['GitHub Actions', 'Deployment pipeline', 'Azure DevOps'],
    correctAnswer: 'Deployment pipeline',
    explanation: 'Fabric pipelines handle deployment.',
  },

  {
    id: 'q016',
    domain: 'Implement and Manage Analytics Solutions',
    type: 'single',
    question: 'Which mirroring types for Databricks and Cosmos DB?',
    options: [
      'Database for both',
      'Metadata for both',
      'Metadata + Database',
      'Open + Database',
    ],
    correctAnswer: 'Open + Database',
    explanation: 'Different sources require different mirroring.',
  },

  {
    id: 'q017',
    domain: 'Implement and Manage Analytics Solutions',
    type: 'single',
    question: 'How do you validate warehouse deployment references?',
    options: [
      'Database project',
      'Deployment pipeline',
      'Python script',
      'T-SQL script',
    ],
    correctAnswer: 'Deployment pipeline',
    explanation: 'Minimal effort validation.',
  },

  {
    id: 'q018',
    domain: 'Implement and Manage Analytics Solutions',
    type: 'single',
    question:
      'How do you replicate Azure SQL data into OneLake in near real-time?',
    options: [
      'Dataflow',
      'Periodic import',
      'Database mirroring',
      'Data Factory',
    ],
    correctAnswer: 'Database mirroring',
    explanation: 'Mirroring avoids complex ETL.',
  },

  {
    id: 'q019',
    domain: 'Store Data in Fabric',
    type: 'single',
    question:
      'What happens when enabling OneLake availability for eventhouse?',
    options: [
      'Only new databases',
      'Only existing data',
      'No data',
      'All data (new + existing)',
      'Only new data',
    ],
    correctAnswer: 'All data (new + existing)',
    explanation: 'Both existing and new data are available.',
  },

  {
    id: 'q020',
    domain: 'Ingest and Transform Data',
    type: 'single',
    question: 'How do you combine lakehouse and warehouse data?',
    options: ['ADF', 'CTAS', 'Dataflow Gen2', 'SELECT INTO'],
    correctAnswer: 'CTAS',
    explanation: 'Efficient table creation from query.',
  },

  {
    id: 'q021',
    domain: 'Ingest and Transform Data',
    type: 'single',
    question: 'How do you process streaming data without code?',
    options: ['Event Hubs', 'Stream Analytics', 'Spark', 'Eventstreams'],
    correctAnswer: 'Eventstreams',
    explanation: 'Low-code streaming solution.',
  },

  {
    id: 'q022',
    domain: 'Implement and Manage Analytics Solutions',
    type: 'single',
    question: 'What authentication should Azure DevOps use for Fabric API?',
    options: [
      'Service principal',
      'Username/password',
      'Private endpoint',
      'Workspace identity',
    ],
    correctAnswer: 'Service principal',
    explanation: 'Best practice for automation.',
  },

  {
    id: 'q023',
    domain: 'Monitor and Optimize Analytics Solutions',
    type: 'single',
    question: 'Which shortcuts will use cache based on recent access?',
    options: [
      'Stores only',
      'Products only',
      'Stores and Products',
      'All',
      'Trips only',
    ],
    correctAnswer: 'Stores and Products',
    explanation: 'Recently accessed files are cached.',
  },

  {
    id: 'q024',
    domain: 'Monitor and Optimize Analytics Solutions',
    type: 'single',
    question:
      'Your organization uses Microsoft Fabric for data analytics workflows. There are delays in processing due to inefficient monitoring. What should you do?',
    options: [
      'Configure alerts in Real-Time hub',
      'Create a Power BI dashboard',
      'Store data events',
      'Use Azure Monitor',
    ],
    correctAnswer: 'Use Azure Monitor',
    explanation: 'Azure Monitor provides centralized monitoring.',
  },

  {
    id: 'q025',
    domain: 'Monitor and Optimize Analytics Solutions',
    type: 'single',
    question: 'How do you detect bottlenecks in transformation processes?',
    options: [
      'Configure alerts',
      'Enable detailed logging',
      'Auto scaling',
      'Basic monitoring',
    ],
    correctAnswer: 'Enable detailed logging',
    explanation: 'Logging reveals bottlenecks.',
  },

  {
    id: 'q026',
    domain: 'Implement and Manage Analytics Solutions',
    type: 'single',
    question: 'How do you connect to Azure SQL without public access?',
    options: [
      'Gateway',
      'Managed private endpoint',
      'Integration runtime',
      'Data gateway',
    ],
    correctAnswer: 'Managed private endpoint',
    explanation: 'Private endpoint enables secure access.',
  },

  {
    id: 'q027',
    domain: 'Monitor and Optimize Analytics Solutions',
    type: 'single',
    question: 'Which shortcuts use cache?',
    options: [
      'Trips and Stores',
      'Products and Stores',
      'Stores only',
      'Products only',
      'All',
    ],
    correctAnswer: 'Products and Stores',
    explanation: 'Smaller files are cached.',
  },

  {
    id: 'q028',
    domain: 'Govern and Secure Data',
    type: 'single',
    question: 'Which role should manage domains?',
    options: [
      'Workspace Admin',
      'Domain admin',
      'Domain contributor',
      'Fabric admin',
    ],
    correctAnswer: 'Domain admin',
    explanation: 'Least privilege with required permissions.',
  },

  {
    id: 'q029',
    domain: 'Govern and Secure Data',
    type: 'single',
    question:
      'You have a Fabric workspace named Workspace1 that contains a warehouse named DW1 and a data pipeline named Pipeline1. You plan to add a user named User3 to Workspace1. You need to ensure that User3 can view all the items in Workspace1 and update the tables in DW1. The solution must follow the principle of least privilege. You already assigned the appropriate object-level permissions to DW1. Which workspace role should you assign to User3?',
    options: ['Admin', 'Member', 'Viewer', 'Contributor'],
    correctAnswer: 'Contributor',
    explanation:
      'Contributor allows a user to view workspace items and work with content without giving broader administrative privileges.',
  },

  {
    id: 'q030',
    domain: 'Govern and Secure Data',
    type: 'single',
    question:
      'You have a Fabric capacity that contains a workspace named Workspace1. Workspace1 contains a lakehouse named Lakehouse1, a data pipeline, a notebook, and several Power BI reports. A user named User1 wants to use SQL to analyze the data in Lakehouse1. You need to provide User1 with read access to the table data in Lakehouse1, prevent User1 from using Apache Spark to query the underlying files, and prevent User1 from accessing other items in Workspace1. What should you do?',
    options: [
      'Share Lakehouse1 with User1 directly and select Read all SQL endpoint data.',
      'Assign User1 the Viewer role for Workspace1. Share Lakehouse1 with User1 and select Read all SQL endpoint data.',
      'Share Lakehouse1 with User1 directly and select Build reports on the default semantic model.',
      'Assign User1 the Member role for Workspace1. Share Lakehouse1 with User1 and select Read all SQL endpoint data.',
    ],
    correctAnswer:
      'Share Lakehouse1 with User1 directly and select Read all SQL endpoint data.',
    explanation:
      'Direct sharing with SQL endpoint read access gives SQL read capability without opening up the whole workspace or Spark access.',
  },

  {
    id: 'q031',
    domain: 'Implement and Manage Analytics Solutions',
    type: 'single',
    question:
      'You have a Fabric workspace named Workspace1 that contains a data pipeline named Pipeline1 and a lakehouse named Lakehouse1. You have a deployment pipeline named deployPipeline1 that deploys Workspace1 to Workspace2. You restructure Workspace1 by adding a folder named Folder1 and moving Pipeline1 to Folder1. You use deployPipeline1 to deploy Workspace1 to Workspace2. What occurs to Workspace2?',
    options: [
      'Folder1 is created, Pipeline1 moves to Folder1, and Lakehouse1 is deployed.',
      'Only Pipeline1 and Lakehouse1 are deployed.',
      'Folder1 is created, and Pipeline1 and Lakehouse1 move to Folder1.',
      'Only Folder1 is created and Pipeline1 moves to Folder1.',
    ],
    correctAnswer: 'Only Pipeline1 and Lakehouse1 are deployed.',
    explanation:
      'Deployment pipelines deploy supported items, but folder organization itself is not deployed as a promoted artifact structure.',
  },

  {
    id: 'q032',
    domain: 'Monitor and Optimize Analytics Solutions',
    type: 'single',
    question:
      'You have a Fabric workspace that contains a lakehouse and a notebook named Notebook1. Notebook1 reads data into a DataFrame from a table named Table1 and applies transformation logic. The data from the DataFrame is then written to a new Delta table named Table2 by using a merge operation. You need to consolidate the underlying Parquet files in Table1. Which command should you run?',
    options: ['VACUUM', 'BROADCAST', 'OPTIMIZE', 'CACHE'],
    correctAnswer: 'OPTIMIZE',
    explanation:
      'OPTIMIZE compacts small files and consolidates the underlying Parquet files for Delta tables.',
  },

  {
    id: 'q033',
    domain: 'Monitor and Optimize Analytics Solutions',
    type: 'single',
    question:
      'You have five Fabric workspaces. You are monitoring the execution of items by using Monitoring hub. You need to identify in which workspace a specific item runs. Which column should you view in Monitoring hub?',
    options: [
      'Start time',
      'Capacity',
      'Activity name',
      'Submitter',
      'Item type',
      'Job type',
      'Location',
    ],
    correctAnswer: 'Location',
    explanation:
      'The Location column identifies the workspace context where the item ran.',
  },

  {
    id: 'q034',
    domain: 'Monitor and Optimize Analytics Solutions',
    type: 'single',
    question:
      'You have a Fabric workspace that contains a warehouse named DW1. DW1 is loaded by using a notebook named Notebook1. You need to identify which version of Delta was used when Notebook1 was executed. What should you use?',
    options: [
      'Real-Time hub',
      'OneLake data hub',
      'the Admin monitoring workspace',
      'Fabric Monitor',
      'the Microsoft Fabric Capacity Metrics app',
    ],
    correctAnswer: 'Fabric Monitor',
    explanation:
      'Fabric Monitor provides execution-level monitoring details for notebook runs and related runtime information.',
  },

  {
    id: 'q035',
    domain: 'Monitor and Optimize Analytics Solutions',
    type: 'single',
    question:
      'You have a Fabric workspace that contains a semantic model named Model1. You need to dynamically execute and monitor the refresh progress of Model1. What should you use?',
    options: [
      'dynamic management views in SQL Server Management Studio (SSMS)',
      'Monitoring hub',
      'dynamic management views in Azure Data Studio',
      'a semantic link in a notebook',
    ],
    correctAnswer:
      'dynamic management views in SQL Server Management Studio (SSMS)',
    explanation:
      'DMVs can be used to inspect and monitor semantic model refresh activity dynamically.',
  },

  {
    id: 'q036',
    domain: 'Implement and Manage Analytics Solutions',
    type: 'single',
    question:
      'Case study: Litware uses a Fabric workspace with high concurrency enabled. The company needs to ensure that processes for the bronze and silver layers run in isolation. How should you configure the Apache Spark settings?',
    options: [
      'Disable high concurrency.',
      'Create a custom pool.',
      'Modify the number of executors.',
      'Set the default environment.',
    ],
    correctAnswer: 'Disable high concurrency.',
    explanation:
      'High concurrency is designed for session sharing. Disabling it supports isolated execution between workloads.',
  },

  {
    id: 'q037',
    domain: 'Implement and Manage Analytics Solutions',
    type: 'single',
    question:
      'You have an Azure Key Vault named KeyVault1 that contains secrets. You have a Fabric workspace named Workspace1 that contains a notebook named Notebook1. You plan to add functionality to Notebook1 that will use the Fabric API to monitor semantic model refreshes. You need to retrieve the registered application ID and secret from KeyVault1 to generate the authentication token. Solution: Use notebookutils.credentials.getSecret and specify the key vault URL and key vault secret. Does this meet the goal?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
    explanation:
      'getSecret is used to retrieve secrets from Azure Key Vault for use in notebooks.',
  },

  {
    id: 'q038',
    domain: 'Implement and Manage Analytics Solutions',
    type: 'single',
    question:
      'You have an Azure Key Vault named KeyVault1 that contains secrets. You have a Fabric workspace named Workspace1 that contains a notebook named Notebook1. You plan to add functionality to Notebook1 that will use the Fabric API to monitor semantic model refreshes. You need to retrieve the registered application ID and secret from KeyVault1 to generate the authentication token. Solution: Use notebookutils.credentials.putSecret and specify the key vault URL and key vault secret. Does this meet the goal?',
    options: ['Yes', 'No'],
    correctAnswer: 'No',
    explanation:
      'putSecret writes a secret rather than retrieving one. The requirement is to retrieve existing secrets.',
  },

  {
    id: 'q039',
    domain: 'Implement and Manage Analytics Solutions',
    type: 'single',
    question:
      'You have an Azure Key Vault named KeyVault1 that contains secrets. You have a Fabric workspace named Workspace1 that contains a notebook named Notebook1. You plan to add functionality to Notebook1 that will use the Fabric API to monitor semantic model refreshes. You need to retrieve the registered application ID and secret from KeyVault1 to generate the authentication token. Solution: Use notebookutils.credentials.getSecret and specify the key vault URL and the name of a linked service. Does this meet the goal?',
    options: ['Yes', 'No'],
    correctAnswer: 'No',
    explanation:
      'This scenario asks for the key vault URL and secret retrieval pattern; using a linked service name is a different access pattern than the stated solution.',
  },

  {
    id: 'q040',
    domain: 'Govern and Secure Data',
    type: 'single',
    question:
      'You have a Fabric workspace named Workspace1 that contains a Power BI report named Report1, a Power BI dashboard named Dashboard1, a semantic model named Model1, and a lakehouse named Lakehouse1. Which items can you endorse in Fabric?',
    options: [
      'Lakehouse1, Model1, and Dashboard1 only',
      'Lakehouse1, Model1, Report1, and Dashboard1',
      'Report1 and Dashboard1 only',
      'Model1, Report1, and Dashboard1 only',
      'Lakehouse1, Model1, and Report1 only',
    ],
    correctAnswer: 'Lakehouse1, Model1, and Dashboard1 only',
    explanation:
      'Endorsement applies to supported Fabric and Power BI items such as lakehouses, semantic models, and dashboards.',
  },

  {
    id: 'q041',
    domain: 'Implement and Manage Analytics Solutions',
    type: 'single',
    question:
      'You have a Fabric workspace named Workspace1. Your company acquires GitHub licenses. You need to configure source control for Workspace1 to use GitHub. The solution must follow the principle of least privilege. Which permissions do you require to ensure that you can commit code to GitHub?',
    options: [
      'Actions (Read and write) and Contents (Read and write)',
      'Actions (Read and write) only',
      'Contents (Read and write) only',
      'Contents (Read) and Commit statuses (Read and write)',
    ],
    correctAnswer: 'Contents (Read and write) only',
    explanation:
      'To commit code to a GitHub repository, contents read/write is the least-privilege permission needed.',
  },

  {
    id: 'q042',
    domain: 'Implement and Manage Analytics Solutions',
    type: 'single',
    question:
      'You have a Fabric workspace named Workspace1. You plan to configure Git integration for Workspace1 by using an Azure DevOps Git repository. An Azure DevOps admin creates the required artifacts to support the integration of Workspace1. Which details do you require to perform the integration?',
    options: [
      'the organization, project, Git repository, and branch',
      'the personal access token (PAT) for Git authentication and the Git repository URL',
      'the project, Git repository, branch, and Git folder',
      'the Git repository URL and the Git folder',
    ],
    correctAnswer: 'the organization, project, Git repository, and branch',
    explanation:
      'Those are the core Azure DevOps Git details required to connect a Fabric workspace to the repository branch.',
  },
]