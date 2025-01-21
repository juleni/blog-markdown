### Cloud Guru - AWS CLF-C02
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
  1. **CodeCommit** - central code repository  
  2. **CodeBuild** - fully managed build service  
  3. **CodeDeploy** - automated deployment service  
  4. **CodePipeline** - automated CI/CD pipeline
 - **CodeArtifact** - it's an artifact repository that lets developers securely store, publish, and share software packages that are needed for your software development process. Examples of packages include Maven, NPM, or Python packages.
 - **Artifact** - used to describe a lot of different things, including documentation, compiled applications, deployable packages, and libraries.
 - **Tight Couplin**g - this is usually a feature of monolithic applications where all the components of an application are interdependent. Coupling describes the dependencies between the components of an application, and with tightly coupled systems ,there are lots of dependencies between the components. Problems can then occur if one part of the system is slower or faster than another. With tightly coupled systems, one failed component can bring the whole system down.
 - **Loose Coupling** - is what we typically see with microservices-based architectures, this is where the components of the application can operate independently. One component doesn't need to wait until another component has finished its work before moving on to the next task. Data and messages are moved between components of the application.
- **Simple Notification Service (SNS)** - service that enables you to easily set up, 
operate, and send notifications (supported are SMS text message or email). Messages sent from an application can be immediately delivered to subscribers, or to other applications. SNS uses a pub-sub model, which means publish and subscribe.
- **Simple Queue Service (SQS)** - is a distributed message queue service. It enables web applications to quickly and reliably queue messages that one component in the application producesfor another component to consume. A queue is a temporary repository for messages that are awaiting processing. Messages wait in the queue until the consumer is ready to process them. No component gets overloaded by too many requests, and the system is not gonna crash if a single component goes offline. This approach is known as decoupling.
- **Standard queues** - are the default queue type, and with standard queues, they guarantee that a message is delivered at least once. Best-effort ordering, which means that messages are generally delivered in the same order as they're sent, occasionally, more than one copy of a message might be delivered or the message might be delivered out of order.
