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
    explanation: 'Watermarks track new or changed data efficiently.',
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

  {
    id: 'q043',
    domain: 'Implement and Manage Analytics Solutions',
    type: 'single',
    question:
      'You have a Fabric workspace that contains a lakehouse named Lakehouse1. You plan to create a data pipeline named Pipeline1 to ingest data into Lakehouse1. You will use a parameter named param1 to pass an external value into Pipeline1. The param1 parameter has a data type of int. You need to ensure that the pipeline expression returns param1 as an int value. How should you specify the parameter value?',
    options: [
      '"@pipeline().parameters.param1"',
      '"@{pipeline().parameters.param1}"',
      '"@{pipeline().parameters.[param1]}"',
      '"@@{pipeline().parameters.param1}"',
    ],
    correctAnswer: '"@pipeline().parameters.param1"',
    explanation:
      'Using the direct pipeline parameter expression returns the parameter value in its native type.',
  },

  {
    id: 'q044',
    domain: 'Implement and Manage Analytics Solutions',
    type: 'single',
    question:
      'You have a Fabric workspace named Workspace1 that contains a lakehouse named Lakehouse1. Workspace1 contains a Dataflow Gen2 dataflow that copies data from an on-premises SQL Server database to Lakehouse1, a notebook that transforms files and loads the data to Lakehouse1, and a data pipeline that loads a CSV file to Lakehouse1. You need to develop an orchestration solution in Fabric that will load each item one after the other. The solution must be scheduled to run every 15 minutes. Which type of item should you use?',
    options: ['notebook', 'warehouse', 'Dataflow Gen2 dataflow', 'data pipeline'],
    correctAnswer: 'data pipeline',
    explanation:
      'A data pipeline is the Fabric orchestration item used to schedule and sequence other activities.',
  },

  {
    id: 'q045',
    domain: 'Govern and Secure Data',
    type: 'single',
    question:
      'You have a Fabric warehouse named DW1. DW1 contains a table that stores sales data and is used by multiple sales representatives. You plan to implement row-level security (RLS). You need to ensure that the sales representatives can see only their respective data. Which warehouse object do you require to implement RLS?',
    options: ['SECURITY POLICY', 'TABLE', 'TRIGGER', 'STORED PROCEDURE'],
    correctAnswer: 'SECURITY POLICY',
    explanation:
      'A security policy is required to enforce row-level security in the warehouse.',
  },

  {
    id: 'q046',
    domain: 'Implement and Manage Analytics Solutions',
    type: 'single',
    question:
      'You have a Fabric workspace named Workspace1 that contains a warehouse named Warehouse1. You plan to deploy Warehouse1 to a new workspace named Workspace2. As part of the deployment process, you need to verify whether Warehouse1 contains invalid references. The solution must minimize development effort and provide detailed information about the invalid references. What should you use?',
    options: ['a dbt project', 'a deployment pipeline', 'a Python script', 'a database project'],
    correctAnswer: 'a database project',
    explanation:
      'A database project can validate references and provide detailed diagnostics with less custom scripting.',
  },

  {
    id: 'q047',
    domain: 'Ingest and Transform Data',
    type: 'single',
    question:
      'You have a Fabric workspace that contains an eventstream named Eventstream1. Eventstream1 processes data from a thermal sensor by using event stream processing, and then stores the data in a lakehouse. You need to modify Eventstream1 to include the standard deviation of the temperature. Which transform operator should you include in the Eventstream1 logic?',
    options: ['Expand', 'Group by', 'Union', 'Aggregate'],
    correctAnswer: 'Aggregate',
    explanation:
      'Standard deviation is an aggregate calculation, so the Aggregate operator is required.',
  },

  {
    id: 'q048',
    domain: 'Ingest and Transform Data',
    type: 'single',
    question:
      'You have an Azure event hub. Each event contains fields including Neighbourhood. You need to ingest the events, retain only events that have a Neighbourhood value of Chelsea, and then store the retained events in a Fabric lakehouse. What should you use?',
    options: ['a KQL queryset', 'an eventstream', 'a streaming dataset', 'Apache Spark Structured Streaming'],
    correctAnswer: 'an eventstream',
    explanation:
      'An eventstream can ingest, filter, and route streaming events into a lakehouse.',
  },

  {
    id: 'q049',
    domain: 'Ingest and Transform Data',
    type: 'single',
    question:
      'You have a Fabric workspace that contains a lakehouse named Lakehouse1. In an external data source, you have data files that are 500 GB each. A new file is added every day. You need to ingest the data into Lakehouse1 without applying any transformations. The solution must trigger when a new file is added and provide the highest throughput. Which type of item should you use to ingest the data?',
    options: ['Eventstream', 'Dataflow Gen2', 'Streaming dataset', 'Data pipeline'],
    correctAnswer: 'Data pipeline',
    explanation:
      'A data pipeline is the right fit for event-driven file ingestion into a lakehouse at high throughput without transformations.',
  },

  {
    id: 'q050',
    domain: 'Ingest and Transform Data',
    type: 'single',
    question:
      'You are developing a data pipeline named Pipeline1. You need to add a Copy data activity that will copy data from a Snowflake data source to a Fabric warehouse. What should you configure?',
    options: ['Degree of copy parallelism', 'Fault tolerance', 'Enable staging', 'Enable logging'],
    correctAnswer: 'Enable staging',
    explanation:
      'Staging is commonly required to optimize copy activity when loading into a Fabric warehouse from external sources like Snowflake.',
  },

  {
    id: 'q051',
    domain: 'Ingest and Transform Data',
    type: 'single',
    question:
      'You are implementing a medallion architecture in a Fabric lakehouse. You plan to create a dimension table that contains ID, CustomerCode, CustomerName, CustomerAddress, CustomerLocation, ValidFrom, and ValidTo. You need to ensure that the table supports the analysis of historical sales data by customer location at the time of each sale. Which type of slowly changing dimension (SCD) should you use?',
    options: ['Type 2', 'Type 0', 'Type 1', 'Type 3'],
    correctAnswer: 'Type 2',
    explanation:
      'Type 2 preserves historical attribute changes over time using validity ranges.',
  },

  {
    id: 'q052',
    domain: 'Ingest and Transform Data',
    type: 'single',
    question:
      'You have a Fabric workspace that contains an eventstream named EventStream1. EventStream1 outputs events to a table named Table1 in a lakehouse. The streaming data is sourced from motorway sensors and represents the speed of cars. You need to add a transformation to EventStream1 to average the car speeds. The speeds must be grouped by non-overlapping and contiguous time intervals of one minute, and each event must belong to exactly one window. Which windowing function should you use?',
    options: ['sliding', 'hopping', 'tumbling', 'session'],
    correctAnswer: 'tumbling',
    explanation:
      'Tumbling windows are fixed, contiguous, and non-overlapping.',
  },

  {
    id: 'q053',
    domain: 'Ingest and Transform Data',
    type: 'single',
    question:
      'You have an Azure SQL database named DB1. In a Fabric workspace, you deploy an eventstream named EventStreamDB1 to stream record changes from DB1 into a lakehouse. You discover that events are not being propagated to EventStreamDB1. You need to ensure that the events are propagated to EventStreamDB1. What should you do?',
    options: [
      'Create a read-only replica of DB1.',
      'Create an Azure Stream Analytics job.',
      'Enable Extended Events for DB1.',
      'Enable change data capture (CDC) for DB1.',
    ],
    correctAnswer: 'Enable change data capture (CDC) for DB1.',
    explanation:
      'CDC is required to capture and propagate record changes from Azure SQL.',
  },

  {
    id: 'q054',
    domain: 'Implement and Manage Analytics Solutions',
    type: 'single',
    question:
      'You have a Microsoft Power Apps app named App1 that has data stored in Microsoft Dataverse. You need to access the App1 data by using Fabric. What should you use?',
    options: ['a data pipeline', 'mirroring', 'Dataflow Gen2', 'a shortcut'],
    correctAnswer: 'mirroring',
    explanation:
      'Fabric supports Dataverse access scenarios through mirroring.',
  },

  {
    id: 'q055',
    domain: 'Monitor and Optimize Analytics Solutions',
    type: 'single',
    question:
      'You have a Fabric workspace that contains a warehouse named Warehouse1. Data is loaded daily into Warehouse1 by using data pipelines and stored procedures. You discover that the daily data load takes longer than expected. You need to monitor Warehouse1 to identify the names of users that are actively running queries. Which view should you use?',
    options: [
      'sys.dm_exec_connections',
      'sys.dm_exec_requests',
      'queryinsights.long_running_queries',
      'queryinsights.frequently_run_queries',
      'sys.dm_exec_sessions',
    ],
    correctAnswer: 'sys.dm_exec_sessions',
    explanation:
      'sys.dm_exec_sessions is used to inspect active sessions and identify the users connected to the warehouse.',
  },

  {
    id: 'q056',
    domain: 'Monitor and Optimize Analytics Solutions',
    type: 'single',
    question:
      'You have a Fabric workspace that contains an eventstream named EventStream1. EventStream1 outputs events to a table in a lakehouse. You need to remove files that are older than seven days and are no longer in use. Which command should you run?',
    options: ['VACUUM', 'COMPUTE', 'OPTIMIZE', 'CLONE'],
    correctAnswer: 'VACUUM',
    explanation:
      'VACUUM removes files that are no longer referenced and are older than the retention threshold.',
  },

  {
    id: 'q057',
    domain: 'Monitor and Optimize Analytics Solutions',
    type: 'single',
    question:
      'You have a Fabric warehouse named DW1 that loads data by using a data pipeline named Pipeline1. Pipeline1 uses a Copy data activity with a dynamic SQL source. Pipeline1 is scheduled to run every 15 minutes. You discover that Pipeline1 keeps failing. You need to identify which SQL query was executed when the pipeline failed. What should you do?',
    options: [
      'From Monitoring hub, select the latest failed run of Pipeline1, and then view the output JSON.',
      'From Monitoring hub, select the latest failed run of Pipeline1, and then view the input JSON.',
      'From Real-time hub, select Fabric events, and then review the details of Microsoft.Fabric.ItemReadFailed.',
      'From Real-time hub, select Fabric events, and then review the details of Microsoft.Fabric.ItemUpdateFailed.',
    ],
    correctAnswer:
      'From Monitoring hub, select the latest failed run of Pipeline1, and then view the input JSON.',
    explanation:
      'The input JSON contains the resolved request details, including the dynamic SQL used for the failed run.',
  },

  {
    id: 'q058',
    domain: 'Monitor and Optimize Analytics Solutions',
    type: 'single',
    question:
      'You have a Fabric workspace that contains a write-intensive warehouse named DW1. DW1 stores staging tables that are used to load a dimensional model. The tables are often read once, dropped, and then recreated to process new data. You need to minimize the load time of DW1. What should you do?',
    options: ['Enable V-Order.', 'Create statistics.', 'Drop statistics.', 'Disable V-Order.'],
    correctAnswer: 'Disable V-Order.',
    explanation:
      'For write-heavy staging workloads with short-lived tables, disabling V-Order can reduce load overhead.',
  },
]