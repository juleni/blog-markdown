### Cloud Guru - AWS CLF-C02

##### Chapter 2 - Foundations of Cloud Computing

- **Cloud** - is a real actual place and can be servers located anywhere in the world that are in your data center or someone else's
- **Servers** - are very powerful computers that handle all of your requests
- **AWS** - has thousands of servers across the globe in groups called data centers
          - maximizes use of their servers with virtualization
- **virtual machine (VM)** - server that's divided into small units, using that VM comes with a price
                           - it has its own operating system, memory, storage, networking access, and it's yours to use
- **on-demand usage** - requires no upfront payments or long-term commitments 
- **pay as you go** - pays by the hour or sometimes by the second for what you use

- **Cloud computing** - delivery of computing services over the internet
                      - instead of using your own internal data center or local machine to store data or share applications, you're using AWS's servers in their data centers
- Example services:
  - compute services like EC2,
  - storage services like S3,
  - networking services like VPC,
  - database services like RDS,
  - developer tools like the Code Family,
  - migration services like Migration Hub,
  - machine learning services like Rekognition,
  - auditing services like Trusted Advisor,
  - security services like IAM
  - pricing services like the Pricing Calculator

- **Capital Expenditures (CapEx)** - are upfront purchases towards your fixed assets like equipment, property, computers, and software
- **Operating Expenses (OpEx)** - are funds used to run day-to-day operations 
  - include things like employee salaries, marketing, rent, and research and development

- **Six advantages of cloud computing:**
   1. **Global in Minutes** - deploy applications around the world at a click of a button, launch whole environments in minutes
   2. **No Data Centre Spend** - focus on building applications instead of managing hardware as you do not own the data center being used
   3. **Economies on Scale** - volume discounts are passed on to you, which provides lower pay as you go prices
   4. **Speed and Agility** - provided services allow you to innovate more quickly and deliver your applications faster as well
   5. **Stop Guessing Capacity** - because the cloud is elastic, your capacity is matched exactly to your demand, and finally, you pay for what you use instead of making huge upfront investments by running a data center
   6. **CapEx for Variable Expense**

- _Advantages and Benefits:_
   - **high availabilit**y - systems are designed to operate continuously without failure for a long time. These systems avoid loss of service by reducing or managing failures
   - **elasticity** - you don't have to plan ahead of time how much capacity you need, which is a huge time saver and cost saver. You can provision only what you need and then grow and shrink based on demand.
   - **agility** - all the services you have access to help you to innovate faster, giving you faster speed to market
   - **durability** - is all about long-term data protection. This means your data will remain intact without corruption.

- _Cloud Computing Models:_
   - **Infrastructure as a Service (IaaS)** - building blocks that can be rented and you can choose how to put them together
      - Example: Having a monthly subscription with a hosting company that serves your website
   - **Software as a Service (SaaS)** - is using a complete application on demand that someone offers to users
      - Example: Your personal email that you access through a web browser
   - **Platform as a Service (PaaS)** - is used by developers to help develop software using web-based tools without worrying about the underlying infrastructure
      - Example: Tools provided to build a storefront application that runs on another company's server

- _Cloud Deployment Models:_
   - **Private Cloud** - means that resources like servers and databases are all on premises
      - local network or private cloud is internal data center
      - has none of the cloud advantages we talked about, but it does offer more security of  data as it is not traversing any public space and isn't shared with other organizations with virtualization
   - **Public Cloud** -  AWS, Azure, and GCP
      - you do not have any hardware responsibility as they provide all the hardware that provides the services you use
      - this option has all of the advantages of the cloud, like going global in minutes, no huge investments upfront, etc.
   - **Hybrid Cloud Model** - brings private and public together
      - typically have their sensitive data stored locally and securely connect to the public cloud or AWS using services like VPN and Direct Connect
      - VPNs can create a secure connection into the public cloud for, say, creating new resources in AWS
      - Direct Connect creates a secure connection for data to move from the public cloud to the private cloud without traversing the public internet

- **AWS region** - is a physical location
   - AWS groups their regions by geographic locations and can include several regions within each location
   - regions are fully independent and isolated, meaning that if one region is impacted by, let's say, an earthquake, the others will not be
   - they are resource and service specific, meaning that they are isolated and resources are not automatically replicated across them
   - you would need to replicate any resource in each region
   - consist of multiple availability zones
- **Availability zones (AZ)** - consist of one or more physically separated data centers
   - no specific documentation saying anything as to how many data centers each AZ has
   - one or more discrete data centers with redundant power, networking and connectivity in an AWS region
   - they're all housed separately
   - have their own power sources
   - they're each connected through low latency links
- _AZ characteristics:_
   - **fault tolerant** - meaning that if one AZ goes out of service, the others should not be impacted
   - **high availability**

- **Latenc**y - the amount of time it takes for a website to load, meaning the amount of time between a user's request and the resulting response
   - **Low latency** - is a good thing because it means your users are seeing your website faster

- **Local Zones** - place AWS services like compute, storage, database, and other services closer to end-users
   - allows for any demanding applications that require millisecond latencies
   - are extensions of AWS Regions and provide high bandwidth and secure connections between local workloads and those running in the actual Region

- **Edge Locations** - help to reduce latency (can cut latency down by caching data already viewed)
   - they aren't used to launch resources, but instead will cache content for faster delivery to users
   - are a feature _provided by the CloudFront service_
   - _there are more Edge Locations than Regions and AZs_
   - _uses the AWS backbone network_, and that topic will be covered in the same content delivery and networking section

- **Cloud Adoption Framework** - focuses on using AWS to digitally transform, and accelerate business outcomes
   - _Perspectives and Foundational Capabilities_ - here are 6 of these
      1. Security: focuses on compliance and assurance,
        - Security - governance,
           - security assurance
           - application security
        - Protection - infrastructure
           - data protection 
        - Management - Identity and Access Vulnerability
        - Incident Response
        - Threat Detection
      2. Business: focuses on strategy and outcomes 
        - Management - strategy
           - portfolio
           - innovation 
           - product
           - data monetization
           - data science
           - Business Insight
      3. Platform: focuses on infrastructure and applications
         - Architecture and Engineering - platform, data
         - CI/CD
         - Modern Application Development
         - Provisioning and Orchestration
      4. Operations: focuses on successful workload delivery
         - Management - event 
           - incidents and problem
           - change and release
           - performance and capacity
           - configuration 
           - patch
           - availability and continuity
           - application
         - Observability
      5. Governance: focuses on minimizing transformation-related risks
         - Management - program and project benefits
           - risk
           - cloud financial
           - application portfolio
           - governance
           - curation
      6. People: focuses on creating a bridge between technology and business
         - Transformation - leadership
           - workforce
         - Organization - design
           - alignment
         - Cloud Fluency
         - Change Acceleration
         - Culture Evolution

- _Cloud Adoption Framework_ - has 4 domains
   1. Technology - focuses on using the cloud to migrate and modernize legacy infrastructure applications as well as data and analytics platforms
   2. Process - focuses on digitizing, automating, and optimizing business operations
   3. Organization - focuses on reimagining how the business and teams orchestrate their efforts to create more value, and meet goals
   4. Product - focuses on reimagining your business model by creating new products or services, and revenue models

- _Cloud Transformation Journey Phases_ - has 4 phases
   1. Envision - focuses on demonstrating how to use the cloud to accelerate business outcomes
   2. Align - focuses on identifying capability gaps across the six perspectives we covered
   3. Launch - focuses on delivering our pilot transformations, and demonstrating their value
   4. Scale - focuses on expanding those transformations across our environment and scaling them out to meet our requirements and goals

- _Well-Architected Framework_ - has 6 pillars
   1. Security - (CloudTrail to log all actions) focuses on the protection of data systems and any assets used by your workload
   2. Cost optimization - (S3 Intelligent Tiering to automatically move data) focuses on the ongoing process of maintaining cost in the cloud
   3. Performance efficiency - (Lambda to run code with zero administration) focuses on the ability to use computing resources efficiently to meet requirements
   4. Operational excellence - (CodeCommit for code and template version control) focuses on creating applications that successfully support your workload
   5. Reliability - (Multi-AZ deployment of RDS databases) focuses on architecting a workload to be consistent, and able to recover quickly
   6. Sustainability - (EC2 Auto Scaling to ensure max utilisation) focuses on environmental impacts, like energy efficiency and consumption

- _General Design Principles_ - has 6
   1. Stop guessing your capacity needs (Auto scaling can help with this)
   2. Test systems at production scale (create a complete testing environment to simulate your actual workload)
   3. Consider evolutionary architectures (includes the ability to adopt new offerings as capabilities change)
   4. Automate with architectural experimentation in mind (save time and money while implementing a faster way to create and replicate your workloads)
   5. Drive architectures using data (reiteration about collecting data)
   6. Improve through game days (help to simulate events so that your team can be ready
for the real deal)

- **Management console** - accessible through browser and allows  to access AWS account and resources
   - is user-friendly and makes it easy to search for and find services
   - could be using the console to create, modify or terminate resources
- **Root user** - initially created when you set up your AWS account
   - it is the only user that can completely delete the account and all of the resources within that account
   - imperative to keep this treasured user protected and ensure that it's not being used to log into the AWS account for day-to-day tasks
   - first steps should be to enable multi-factor authentication on your root user and create a new user or group to use for your day-to-day tasks in the IAM 

- **Command Line Interface (CLI)** - allows to access account and resources through a terminal or command window
   - mainly used by developers, engineers and resources because you're using commands that trigger APIs through your terminal
   - gives programmatic access, meaning access to AWS resources through an application or a tool
   - uses a terminal session to access resources programmatically
- **Software development kit (SDK)** - can access resources, using programming languages like Java, Python, C# and more

##### Chapter 3 - Compute Technology and 

- **Outpost** - allows to run cloud services in internal data centre (on-premises)
- **Amazon Lightsail** - not on-premises. Allows to quickly launch all the resources needed for small projects. Quick deployment of simple workloads, scales as they evolve.
- **AWS Batch** - allows to process large workloads into smaller chunks or batches. Used for longer running jobs.
- **AWS Wavelength** - delivers ultra-low latency applications for devices using 5G networking. Reaching applications super fast on mobile network.

##### Chapter 4 - Storage Technology and Services

- **Elastic Compute Cloud (EC2)**
- **Elastic Block Store (EBS)** - Highly available and durable, scalable, snapshot (can take backup and create new volumes)
  - Two types of EBS Volume:
    1. SSD (Solid State Drive) - faster, more expensive, ideal for high IOPS (read/write operations per second)                             
    2. HDD (Hard Disk Drive) - slower, less expensive, ideal for throughput tasks                        
- **Elastic File System (EFS)** - a scalable file storage solution for EC2 and other AWS services designed to be accessed by multiple EC2 instances, fully managed, auto scaling, concurrent access
- **Instance Stores** - temporary storage, high I/O performance, no extra costs (temp storage of cache/buffers)
- **Simple Storage Service (S3)** - (Buckets -> Objects(data files)) - object storage holding data and metadata each object stored in S3 has DATA and KEY (unique within a bucket) and METADATA
- **FSx** - fully managed Windows File System crafted for Windows specific workloads that require native Windows features
- **Elastic Disaster Recovery** - is designed to minimize downtime and data loss offering swift recovery times. Pay only for the servers that are acively replicating to AWS.
- **AWS Storage Gateway** - connects onsite data storage with AWS's cloud services. It ensures that data is securely and efficiently transported to the cloud. Cost-Effective, Secure, Seamless Integration
  - Four types:   
    1. **S3 File Gateway** - keeps data in cloud-native format   
    2. **Volume Gateway** - provides block storage volumes backed by S3, offers two modes: 
      a) Stored volumes (for entire data sets) 
      b) Cached volumes (for frequently accessed data)
    3. **Tape Gateway** - for archiving data as a virtual tapes in AWS, data not used everyday but is important to keep them for long-term retention.   
    4. **FSx File Gateway** - extends on-premises file system to FSx for Windows File Server in the AWS cloud.
- **AWS Backup** - is an automated tool that carefully copies and stores data, designed to manage backups across various AWS services.

##### Chapter 5 - Content Delivery and Networking Technology and Services
- **Content Delivery (CDN)** - Global network of interconnected servers that ensures website's content reaches users quickly
- **Amazon CloudFront** - delivers content such as video, apps or data. It delivers content securely and swiftly to anyone anywhere in the world.
- **AWS Global Accelerator** - is a networking service that sends user traffic through AWS's global network infrastructure, enhancing app's performance and availability. Uses edge locations to find an optimal pathway to the nearest regional endpoint
- **Amazon Virtual Private Cloud (VPC)**  - is private space in AWS cloud. Has complete control over virtual networking env. It includes the arrangement of workstations or subnets, access rules or security groups and connections to the outside world, like internet gateways.
- **Domain Name System (DNS)** - globally distributed service that translates human readable names (like amazon.com) into the numeric IP address.
- **Amazon Route 53** - specific AWS version of DNS
- **Hybrid Models with Networking Services** - this models allow to connect on-prem infrastructure to Amazon VPC.
- **AWS Direct Connect** - provides direct connection from data center to AWS bypassing the public internet
- **AWS VPN** - encrypts data safeguarding as it travels over the internet to AWS
  1. _Site-to-site VPN_ - creates a secure connection between data center or branch office and AWS. It allows network to extend to the AWS Cloud as if it were part of own data center. Ideal for connecting entire networks.
  2. _Client VPN_ - is a managed client-based VPN Service. Allows to securely access to AWS resources or private network from any location. Designed for individual remote access.

##### Chapter 6 - Database Technology and Services
- **Database** - systematic collection of data  
  1. **relational databases (Amazon RDS)** - structured, data are organized into rows and columns, like a table
  2. **in-memory databases (Amazon MemoryDB for Redis, Amazon ElastiCache)** - provide speed, data are stored in the main memory or RAM, can read and write data much faster than traditional DBs     
     - **Amazon ElastiCache** - fully managed in-emory data store and cache service 
     - **Amazon MemoryDB for Redis** - highly scalable and durable in-memory DB
  3. **NoSQL databases (DyanmoDB)** - offers flexibility, key value pairs allow for flexible and intuitive way to store and retrieve data
  4. **graph database (Amazon Neptune)** - handling data with complex relationships and interconnections
- **AWS Database Migration Services (DMS)** - helps migrate DB to AWS quickly and securely
- **AWS Schema Conversion Tool (SCT)** - powerful tool that helps convert the DB schema (blueprint of how the DB is constructed) of the source DB into a format compatible with AWS target DBs
- **Amazon DynamoDB**- fully managed NoSQL database service. It allows to store and retrieve any amount of data and serve any level of request traffic. Automatically scales up and down to adjust for capacity and to maintain performance

##### Chapter 7 - Development, Messaging, and Deployment Technology and Service
- **Continuous Integration (CI)** - is all about integrating or merging small code changes frequently, at least once a day.
- **Continuous deployment (CD)** - is all about automating the build, test and deployment functions, which means that bugs are caught early, while they are still small and easy to fix
- development tools that are available from AWS that help you quickly and easily implement CI/CD processes
  1. **CodeCommit** - the source control service that enables teams to collaborate on code, HTML, pages, scripts, images, and binaries
  2. **CodeBuild** - is the automated build service that compiles source code, runs tests, and produces packages that are ready to deploy, and a package is simply a bundle of software
  3. **CodeDeploy** - automates code deployments, for instance, to EC2 instances, Lambda and on-premises servers as well
  4. **CodePipeline** - manages the workflow, It's the end-to-end solution that handles build, test and deployment of your application every time there's a code change.
- **AWS CloudShell** - which is a browser-based shell with the AWS CLI pre-installed
- **AWS CLI** - is of course a command line tool that is used to manage AWS services
- **Cloud9** - which is a browser-based IDE that lets developers write, run, and debug their code. It comes with lots of popular tools pre-installed, like the AWS CLI and support for the most popular programming languages
 - **CodeArtifact** - it's an artifact repository that lets developers securely store, publish, and share software packages that are needed for your software development process. Examples of packages include Maven, NPM, or Python packages.
 - **Artifact** - used to describe a lot of different things, including documentation, compiled applications, deployable packages, and libraries.
 - **Tight Coupling** - this is usually a feature of monolithic applications where all the components of an application are interdependent. Coupling describes the dependencies between the components of an application, and with tightly coupled systems ,there are lots of dependencies between the components. Problems can then occur if one part of the system is slower or faster than another. With tightly coupled systems, one failed component can bring the whole system down.
 - **Loose Coupling** - is what we typically see with microservices-based architectures, this is where the components of the application can operate independently. One component doesn't need to wait until another component has finished its work before moving on to the next task. Data and messages are moved between components of the application.
- **Simple Notification Service (SNS)** - service that enables you to easily set up, 
operate, and send notifications (supported are SMS text message or email). Messages sent from an application can be immediately delivered to subscribers, or to other applications. SNS uses a pub-sub model, which means publish and subscribe.
- **Simple Queue Service (SQS)** - is a distributed message queue service. It enables web applications to quickly and reliably queue messages that one component in the application producesfor another component to consume. A queue is a temporary repository for messages that are awaiting processing. Messages wait in the queue until the consumer is ready to process them. No component gets overloaded by too many requests, and the system is not gonna crash if a single component goes offline. This approach is known as decoupling.
- **Standard queues** - are the default queue type, and with standard queues, they guarantee that a message is delivered at least once. Best-effort ordering, which means that messages are generally delivered in the same order as they're sent, occasionally, more than one copy of a message might be delivered or the message might be delivered out of order.
- **FIFO queues** - FIFO stands for first-in-first-out ordering, and this means that the order in which messages are sent and received is strictly preserved. Get exactly once processing, which means that duplicates are not introduced. This is a much more predictable option if you need to preserve the order of messages and ensure that there are no duplicates.
- **Short Polling and Long Polling** - are settings that you can configure, which define how frequently the consumers of your messages check or poll the queue
- **Short polling** - returns a response immediately, even if the message queue being polled is empty. And this can result in a lot of empty responses if nothing is in the queue, and you will still pay for these responses, even though they're empty.
- **Long Polling** - this is where each consumer periodically polls the queue. And the queue doesn't return a response until a message arrives or the long poll times out, so you get fewer empty responses, which can save you money. And for that reason, long polling is generally preferable to short polling
- **Simple Email Service (SES)** - it's a cloud-based email service that enables your application to send richly formatted HTML emails. If you want to send basic plain 
text emails, you can do that with SNS.
- **EventBridge** - is a service that allows you to easily configure event-driven systems. You can also use it to define tasks that you need to run on a predefined schedule. Is all about event-driven architecture. Can also be used to handle scheduled events. 
- **Event** - is simply a change in state (can be generated by AWS services like:
  - EC2, 
  - CloudWatch - which is a monitoring service,
  - CloudTrail - which is a service used to track user activity in AWS account       - Rules match events and then route them to the correct target.
  - Targets can be services like EC2, Lambda or SNS. And targets respond to the event by taking some predefined action, like sending an SNS notification to let you know that an event has occurred
- **Step Functions** - are used to manage the logic of a distributed application made up of multiple small components, and it provides a visual interface that lets you visualize the workflow
- **CloudFormation** - is the AWS service that lets you provision, configure and manage AWS infrastructure as code. Resources are defined using a CloudFormation template, and that's the code part (using either YAML or JSON code).
- **Elastic Beanstalk** - provisions the infrastructure needed to run your application in production, including the installation and management of the application stack needed to run application
- **X-Ray** - is a tool that helps developers to analyze and debug distributed applications that are made up of multiple different components. It allows to troubleshoot the root cause of performance issues and errors. Provides a visualization of your application's underlying components.

##### Chapter 8 - Migration and Transfer Technology and Services
- **Snow Family** - are physical devices designed to securely and efficiently transfer large amounts of data to AWS
  - typically use these devices when your network bandwidth can't handle an online migration efficiently, either because the amount of data is so great it would take too long or overload the network,
  - it could be that there simply is no consistent network in the location that you're operating in

  1. **Snowball** - gets installed locally in your data center.
   - transfer your data to the Snowball and then ship the Snowball device to AWS so that the data can be uploaded to AWS storage of your choice
   - Snowball is a great option if you've got at least 10 terabytes of data to migrate
   - it's basically a big box full of discs that you connect to your network and copy the data onto the device before shipping it back to AWS
  2. **Snowball Edge** - is a great device if you've got at least 10 terabytes of data to migrate, but in addition, you also need to perform some processing on the data
  - provides Onboard Compute Resources that allow you to process your data
  - if you've got a complex use case, where you need to migrate a large amount of storage, but you also need compute capability, then pick Snowball Edge over a Snowball
  3. **Snowmobile** - is basically a shipping container full of discs that is towed by a truck, great option if you've got more than 10 petabytes of data to migrate, this option is for really large data sets
  4. **Snowcone** - is a small portable, military grade disc device
   - capacity is either eight terabytes of HDD hard disc or 14 terabytes of SSD Solid State Disc
   - It weighs in at under five pounds, so it fits in a mailbox or in a backpack
   - it's used to migrate data from locations that don't have a proper data center at all, or any reliable networking, for instance, military bases
   - this device is pretty small and it looks like it's about the size of my yoga block
- **Database Migration Service (DMS)** - is used to migrate your database and analytics workloads to AWS
- **Schema Conversion Tool (SCT)** - simply converts from one database schema to another
- **Transfer Family** - you get business to business file transfer using protocols like SFTP, AS2, FTPS, and FTP and files can be transferred into and out of AWS storage like S3 or EFS
- **DataSync** - is designed to let you move large amounts of data over the network. Securely transfer terabytes of data to S3, EFS, or FSX
- **Application Discovery Service** - used to discover your application servers and databases. Gathers data about your existing, on-premises application servers and databases, and the data is collected and sent over an encrypted connection, and it's stored in AWS Migration Hub.
- **Migration Hub** - is another tool used to help you coordinate migrating your systems to AWS, It's used by the Application Discovery Service to store the data that it's gathered. Is essentially a central location to gather application and server inventory information.
- **Application Migration Service (MGN)** - simplifies and accelerates migrating applications to AWS. It automates the process of replicating servers (physical, virtual, or cloud-based) to AWS, so you can avoid doing things manually. Minimizing downtime

##### Chapter 9 - Artificial Intelligence, Machine Learning, and Analytics Technology and Services
- **RedShift** - is a Data Warehousing Service, which is a system that stores large amounts of data used for reporting and analytics
- **RedShift Serverless** - a serverless option of RedShift with no infrastructure to manage
- **Kinesis** - it's a family of services that enables you to collect, process and analyze streaming data in real time
- **Kinesis stream**s - enables you to stream data or video to allow you to build custom applications that process the data in real time. Here are two different options available:
  1. Kinesis Data Streams - deals with data, so it lets you process streaming data
  2. Kinesis Video Streams - which is designed to be used with video data, so it lets you stream video into AWS for storage and processing
-** Kinesis Data Firehose** - captures, transforms and loads data continuously into data stores      
- **Amazon Athena** - Interactive Query service for data stored in S3
  - Standard SQL - allows to query data stored in S3 using standard sql
  - It's Serverless, which means there's nothing to provision, and you pay per query and per terabyte scanned
  - there's no need for complex, extract, transform and load or ETL processes
  - works directly with data stored in S3      
- **AWS Glue** - is a serverless data preparation and integration service for analytics and ML
  - It discovers and catalogs your data and performs ETL, Extract, Transform, and Load
  - data could be stored in S3, DynamoDB, in RDS, Redshift, or it could even be streamed data ingested in real-time using Kinesis      
- **Data Exchang**e - is a service that allows you to securely exchange and use data that's provided by third parties on a subscription basis, and they provide the data in the form of data products available from a searchable catalog
  - data format is anything that can be stored in S3 (some of the most common formats are CSV, Parquet format, or image files)
- **Elastic Map Reduce** - is a big data platform. It's usually petabytes of data that requires large-scale parallel data processing                
- **Elasticsearch** - open-source data analysis technology, allowing you to get real-time insights from your data. Use it to analyze business data, to gain insights and make better business decisions                
- **OpenSearc**h - is a fully-managed Elasticsearch service. The reason it exists is because deploying and administering your own Elasticsearch cluster can be a very time-consuming and complex process                
   - It integrates with data ingestion and visualization tools like:
   - **Logstash** - which is used for data collection and processing,
   - **Kibana** - which is used for search and data visualization, allowing you to create bar charts, line graphs, and scatterplots                
- **Managed Streaming for Apache Kafka (Amazon MSK)** it is a continuous stream of small records or events, generated by thousands of devices, websites, and applications. There's no beginning or end to this kind of data
- **Apache Kafka** - open source technology that is used for building real-time data streaming pipelines. It's able to process streams of events from hundreds of event sources.
- **QuickSight** - is a software as a service model business analytics service. It connects to your AWS data sources, as well as on-premises data, and it allows you to create dashboards to gain business insights
- **SageMake**r - is a fully managed machine learning platform, enabling you to:
  1. Prepare your data  - it can import data from AWS data sources like S3, Athena, Redshift, or Elastic MapReduce, and it can even help you prepare your data by identifying potential errors in the data, finding data quality issues, and identifying bias in your data set.
  2. Build - includes built-in models for common use cases and supports custom models, so you can use your own model that you've created.
  3. Train your model - using optimized infrastructure. So custom hardware and chips that are designed for machine learning. And it can even help with automatic model tuning.
  4. Deploy your model - that could be to optimized EC2 instances, serverless option, or you can deploy to edge devices (like smart cameras and other physical devices that are located on-premises). 
- **Kendra** - is an intelligent search service that uses Natural Language Processing to let you query your data using natural language instead of using a programming language,
   - provides a Customized Search capability, allowing you to search your data or find the answers to customer queries
  - Data sources support includes: S3, FSx, RDS, Aurora, Oracle, or SQL Server, websites and external drives, like Google Drive or Dropbox, SharePoint or GitHub
  - Data types support includes: unstructured and semi-structured data in formats like HTML, XML, PDF, CSV, or Microsoft Office, including Word documents and PowerPoint documents
- **Lex** - is a service that allows you to build conversational interfaces into your applications using natural language models, so essentially chatbots
   - when you're talking to an automated bot online, you are interacting with the Lex service on the backend
   1. Easy Integration - seamlessly integrates with AWS Lambda for executing logic, so for taking actions based on the contents of your conversation
   2. Multi-Platform Compatibility - it works with multiple different platforms like mobile devices, web applications, and chat services like Facebook Messenger
   3. Speech or Text input - it can handle speech or text input, and uses automatic speech recognition to understand human voices
   4. NLU - it uses natural language understanding to understand user intent and deliver a natural experience
- **Polly** - is a service that uses deep learning to generate realistic natural sounding speech from text that you provide
  - can provide the text in a variety of different languages
  - resulting audio can be streamed, saved or downloaded (eg. as an mp3 file)
  - can be used to add natural sounding speech to your applications
  - deep learning - is just a type of artificial intelligence that lets computers learn how to process data in a similar way to the human brain
- **Comprehend** - is a service that uses natural language processing and machine learning to process text
  - is all about reading and understanding your text data
  - allows to discover insights, meaning and connections within your text data
- **Natural language processing (NLP)** - is a way for computers to analyze,understand and derive meaning from language
- **Textract** - extracts information from documents
- **Transcribe** - is a speech-to-text service
- **Translate** - is a language translation service

##### Chapter 10 - Auditing, Monitoring, Logging, and Additional Technology and Services
1. **Metrics** - numerical representations of things like capacity and demand, tracked over time
2. **Logs** - records of what has happened, to make sense of errors or security events
3. **Configurations** - setting and guidelines across all of your cloud resources
- **Well-Architected Framework** - 6 pillars:
  1. security - tracking actions across your resources is integral to security on AWS
  2. cost optimization - By collecting metrics and visualizing them, you can understand utilization and make sure that you're achieving cost optimization
  3. performance efficiency - use metrics to make sure your workloads are meeting your performance standards
  4. operational excellence - By auditing configurations and collecting appropriate logs and metrics contribute to operational excellence
  5. reliability - Being able to observe your uptime and performance is integral to reliability
  6. sustainability - Metrics can also help you more closely track your carbon footprint on AWS
- **CloudWatch** - gives visibility to cloud resources and applications
  - tracks metrics in dashboards
  - stores logs from many different sources
  - triggers events using CloudWatch alarms
- **CloudTrail** - provides accountability for actions taken in your account
  - centralizes activity logs across regions in an S3 bucket
  - tracks only API activity in your AWS account
  - creates a trail of breadcrumbs for any action in your AWS account
- **Tags** - are a key value pair that you can apply to pretty much any cloud resource
- **Systems Manager** - another service that helps you organize your AWS resources into groups
  - you can also group on premises or resources on other cloud platforms for visibility
  - You can take automated actions on resource groups using Systems Manager Run Command
  - you can view aggregated operational data of resource groups
  - there's a feature called Parameter Store (!!!pop up on exam!!!) - which can help you securely store sensitive data like:
    - passwords
    - database strings
    - license keys
- **Health Dashboard** - monitor the health of the services that are relevant to your AWS account
- **Auditing** - is a continuous act of monitoring passive configurations for security and best practices
   - Data Encryption - make sure that your data is encrypted, in transit, and at rest
   - Secure CloudTrail - make sure your CloudTrail logs are secure and can't be tampered with
   - Public Access - to check to see if any of your resources have public access that shouldn't have it
   - Resources Provisioning - make sure that any resources that are provisioned meet a certain set of configuration standards
   - Network Security - make sure there isn't any unnecessary access
   - Protect Credentials - make sure that your credentials are appropriately secure
- **AWS Config** - has sets of predefined recommendations, or create custom rules that it will use to check configurations across AWS account
- **Audit Manager** - another service used for auditing on AWS
   - is a place where you can centralize your audit data from Config and other 
   - can find the root causes of non-compliant resources and build out auditing reports
   - can provide prebuilt auditing frameworks for a bunch of different compliance and best practice frameworks like:
     - HIPAA, 
     - NIST Cybersecurity,
     - AWS Operational Best Practices frameworks
- **Amazon Connect** - is a cloud-based contact center allows you to create a call center in the cloud, and this can be a distributed call center with agents and managers and cases tracked all around the globe
- **Amazon WorkSpaces** - used to provision desktops for dispersed workforces
   - can create or connect a directory of users and give them access to virtual desktops
   - used for provisioning secure desktops for remote employees
- **Amazon AppStream** - it converts applications to Software-as-a-Service, or SaaS, for employees or end users. Is used to host and manage an application in the cloud that can be accessed through a web browser.

##### Chapter 11 - Security, Compliance, and Governance
- **Shared Responsibility Model** - defines the things that you, as the customer of AWS, are responsible for securing in the cloud and the things that AWS is responsible for securing
- What the customer's responsibilities are on AWS?
  - Customer Data - responsibility for:
  - Retention
  - Encryption
  - Backups
  - Access
- What the AWS responsibilities?
  - AWS is responsible for:
  - security of the cloud
  - the hardware and software that make up the cloud where you host your workloads
-  **Principle of Least Privilege** -  this is all about assigning and limiting privileges on AWS, should grant only the permissions needed to complete a task
- **Granular Permissions** - another aspect of the principle of least privilege, on specific resources are defined by a service called Identity and Access Management (IAM)
- **Identity and Access Management (IAM)** - can be applied to users that are logging in to your AWS account, 
  - defines who can enter and what they can do
  - gives permissions to access certain resources and controls the granular permissions that help you adhere to the principle of least privilege
- **Permissions** - are defined by IAM Policies
- **IAM policy** - contains permissions that allow certain entities to take certain actions in AWS
- **Root User** - is the user that creates AWS account, it's the only user that can destroy AWS account, one way you can secure the root user or any user in AWS, is by using multi-factor authentication (MFA)
- **IAM user** - by default, an IAM user doesn't have access to any resources or actions on your AWS account, only by creating an IAM policy and attaching it to that user can they then access the specific resources listed in that IAM policy
- **IAM Role** - can be assumed by any resource on AWS and grant access to other resources
- **IAM Access Analyzer** - identifies and alerts you to resources with external access allowed to them
- **IAM Policy Simulator** - allows you to take a policy that you've recently written or customized and test it yourself before applying it to users, groups, or roles. 
