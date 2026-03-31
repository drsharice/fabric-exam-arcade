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
    question:
      'What is best practice for team development in Fabric?',
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
    options: [
      'Watermark strategy',
      'Full reload',
      'Batch processing',
      'CDC',
    ],
    correctAnswer: 'Watermark strategy',
    explanation:
      'Watermarks track new/changed data efficiently.',
  },

  {
    id: 'q005',
    domain: 'Ingest and Transform Data',
    type: 'single',
    question:
      'What should you use to copy data from on-prem SQL Server to Fabric Warehouse?',
    options: [
      'Dataflow Gen1',
      'Data pipeline',
      'KQL query',
      'Notebook',
    ],
    correctAnswer: 'Data pipeline',
    explanation:
      'Pipelines are designed for data movement and orchestration.',
  },

  {
    id: 'q006',
    domain: 'Ingest and Transform Data',
    type: 'single',
    question:
      'What is used to copy data from SQL Server to Fabric Warehouse?',
    options: [
      'Spark job',
      'Data pipeline',
      'Dataflow Gen1',
      'Eventstream',
    ],
    correctAnswer: 'Data pipeline',
    explanation:
      'Pipelines handle ingestion scenarios.',
  },

  {
    id: 'q007',
    domain: 'Monitor and Optimize Analytics Solutions',
    type: 'single',
    question:
      'What does large semantic model storage enable?',
    options: [
      'Smaller models',
      'Handling data beyond 10GB',
      'Automatic refresh',
      'DirectQuery only',
    ],
    correctAnswer: 'Handling data beyond 10GB',
    explanation:
      'It increases scalability of semantic models.',
  },

  {
    id: 'q008',
    domain: 'Ingest and Transform Data',
    type: 'single',
    question:
      'How do you minimize source load while loading only changed data?',
    options: [
      'Triggers',
      'Timestamp',
      'Full load',
      'CDC',
    ],
    correctAnswer: 'CDC',
    explanation:
      'CDC tracks changes efficiently.',
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
    explanation:
      'Wide hash keys impact performance.',
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
    explanation:
      'Eventstreams handle real-time ingestion.',
  },

  {
    id: 'q011',
    domain: 'Implement and Manage Analytics Solutions',
    type: 'single',
    question:
      'How do you attach multiple notebooks to same Spark session?',
    options: [
      'High concurrency',
      'Dynamic allocation',
      'Change runtime',
      'Increase executors',
    ],
    correctAnswer: 'High concurrency',
    explanation:
      'Allows shared Spark sessions.',
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
    explanation:
      'Keeps data continuously available.',
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
    explanation:
      'Adds ACID capabilities to data lakes.',
  },

  {
    id: 'q014',
    domain: 'Govern and Secure Data',
    type: 'single',
    question:
      'Which object is used for Row-Level Security?',
    options: ['Stored Procedure', 'Constraint', 'Schema', 'Function'],
    correctAnswer: 'Function',
    explanation:
      'Functions define RLS logic.',
  },

  {
    id: 'q015',
    domain: 'Implement and Manage Analytics Solutions',
    type: 'single',
    question:
      'How do you deploy an eventhouse across environments?',
    options: ['GitHub Actions', 'Deployment pipeline', 'Azure DevOps'],
    correctAnswer: 'Deployment pipeline',
    explanation:
      'Fabric pipelines handle deployment.',
  },

  {
    id: 'q016',
    domain: 'Implement and Manage Analytics Solutions',
    type: 'single',
    question:
      'Which mirroring types for Databricks and Cosmos DB?',
    options: [
      'Database for both',
      'Metadata for both',
      'Metadata + Database',
      'Open + Database',
    ],
    correctAnswer: 'Open + Database',
    explanation:
      'Different sources require different mirroring.',
  },

  {
    id: 'q017',
    domain: 'Implement and Manage Analytics Solutions',
    type: 'single',
    question:
      'How do you validate warehouse deployment references?',
    options: [
      'Database project',
      'Deployment pipeline',
      'Python script',
      'T-SQL script',
    ],
    correctAnswer: 'Deployment pipeline',
    explanation:
      'Minimal effort validation.',
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
    explanation:
      'Mirroring avoids complex ETL.',
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
    explanation:
      'Both existing and new data are available.',
  },

  {
    id: 'q020',
    domain: 'Ingest and Transform Data',
    type: 'single',
    question:
      'How do you combine lakehouse and warehouse data?',
    options: [
      'ADF',
      'CTAS',
      'Dataflow Gen2',
      'SELECT INTO',
    ],
    correctAnswer: 'CTAS',
    explanation:
      'Efficient table creation from query.',
  },

  {
    id: 'q021',
    domain: 'Ingest and Transform Data',
    type: 'single',
    question:
      'How do you process streaming data without code?',
    options: [
      'Event Hubs',
      'Stream Analytics',
      'Spark',
      'Eventstreams',
    ],
    correctAnswer: 'Eventstreams',
    explanation:
      'Low-code streaming solution.',
  },

  {
    id: 'q022',
    domain: 'Implement and Manage Analytics Solutions',
    type: 'single',
    question:
      'What authentication should Azure DevOps use for Fabric API?',
    options: [
      'Service principal',
      'Username/password',
      'Private endpoint',
      'Workspace identity',
    ],
    correctAnswer: 'Service principal',
    explanation:
      'Best practice for automation.',
  },

  {
    id: 'q023',
    domain: 'Monitor and Optimize Analytics Solutions',
    type: 'single',
    question:
      'Which shortcuts will use cache based on recent access?',
    options: [
      'Stores only',
      'Products only',
      'Stores and Products',
      'All',
      'Trips only',
    ],
    correctAnswer: 'Stores and Products',
    explanation:
      'Recently accessed files are cached.',
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
    question:
      'How do you detect bottlenecks in transformation processes?',
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
    question:
      'How do you connect to Azure SQL without public access?',
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
    question:
      'Which shortcuts use cache?',
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
    question:
      'Which role should manage domains?',
    options: [
      'Workspace Admin',
      'Domain admin',
      'Domain contributor',
      'Fabric admin',
    ],
    correctAnswer: 'Domain admin',
    explanation: 'Least privilege with required permissions.',
  }
]