import React, { useState } from 'react';
import { 
  Cloud, 
  Server, 
  Shield, 
  Code, 
  CheckCircle, 
  Clock, 
  User, 
  FileText,
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Box,
  Lock,
  Zap,
  Target,
  Award,
  BookOpen,
  ExternalLink,
  Eye
} from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTask, setSelectedTask] = useState(null);

  const tasks = [
    {
      id: 1,
      title: "Basic EC2 Instance Launch",
      description: "Successfully downloaded, installed, and configured Terraform to launch a basic EC2 instance on AWS. Completed full infrastructure deployment cycle including initialization, planning, and application.",
      status: "completed",
      icon: <Server className="w-6 h-6" />,
      technologies: ["Terraform", "AWS EC2", "Infrastructure as Code"],
      completedDate: "Completed",
      details: "Comprehensive implementation including Terraform installation, AWS provider configuration, EC2 resource definition, and successful deployment with state management.",
      screenshots: [
        {
          src: "/task1/Screenshot 2025-07-10 121521.png",
          title: "AWS EC2 Instance Successfully Running",
          description: "EC2 instance 'EC2_Without_...' showing as 'Running' status in AWS Console with all health checks passed (2/2 checks passed). Instance deployed in us-east-1b availability zone with public IP address assigned."
        },
        {
          src: "/task1/Screenshot 2025-07-10 122708.png",
          title: "Terraform Initialization and Planning",
          description: "Terraform successfully initialized with AWS provider plugins. Shows 'terraform init' completion, followed by 'terraform plan' execution displaying the planned infrastructure changes including EC2 instance resource creation."
        },
        {
          src: "/task1/Screenshot 2025-07-10 122805.png",
          title: "Terraform Plan Execution Details",
          description: "Detailed Terraform execution plan showing all AWS instance attributes to be created, including AMI, instance type (t2.micro), availability zone, security groups, and network configuration. Plan shows '1 to add, 0 to change, 0 to destroy'."
        },
        {
          src: "/task1/Screenshot 2025-07-10 122822.png",
          title: "Terraform Apply Completion",
          description: "Successful completion of 'terraform apply' command showing infrastructure creation process. Instance creation completed with confirmation message 'Apply complete! Resources: 1 added, 0 changed, 0 destroyed.'"
        }
      ]
    },
    {
      id: 2,
      title: "Secure Ubuntu EC2 Instance",
      description: "Successfully deployed a secure Ubuntu EC2 instance with comprehensive security configurations including SSH and HTTPS access, utilizing AWS default VPC and latest official Ubuntu AMI with proper security group rules.",
      status: "completed",
      icon: <Shield className="w-6 h-6" />,
      technologies: ["Terraform", "AWS EC2", "Ubuntu", "Security Groups", "VPC"],
      completedDate: "Completed",
      details: "Advanced security implementation featuring custom security groups, inbound/outbound rules configuration, VPC subnet management, and comprehensive network access controls for SSH (port 22) and HTTPS (port 443).",
      screenshots: [
        {
          src: "/task2/Screenshot 2025-07-10 121442.png",
          title: "AWS VPC Subnets Configuration",
          description: "VPC dashboard showing 6 available subnets across different availability zones (us-east-1). All subnets are in 'Available' state with proper CIDR block allocation (172.31.x.x/20) and IPv4 addressing configured for secure network segmentation."
        },
        {
          src: "/task2/Screenshot 2025-07-10 121521.png",
          title: "Secure Ubuntu EC2 Instance Running",
          description: "EC2 instance successfully deployed and running with 'Running' status. Instance shows healthy state with 2/2 status checks passed, deployed in us-east-1b availability zone with public IP (98.81.204.45) and proper DNS resolution configured."
        },
        {
          src: "/task2/Screenshot 2025-07-10 121544.png",
          title: "Instance Details and Configuration",
          description: "Comprehensive instance details showing Ubuntu t2.micro instance with complete network configuration including VPC ID, subnet ID, security groups, and both public/private IP addresses. Instance ARN and all networking parameters properly configured."
        },
        {
          src: "/task2/Screenshot 2025-07-10 121552.png",
          title: "Security Groups and Access Rules",
          description: "Security configuration tab displaying inbound rules for SSH (port 22) and HTTPS (port 443) access, and outbound rules allowing all traffic. Security groups properly configured with source IP restrictions and protocol specifications for secure access control."
        }
      ]
    },
    {
      id: 3,
      title: "AWS Multi-Service Infrastructure Deployment",
      description: "Comprehensive cloud infrastructure deployment across 11 AWS services including EC2, VPC, Lambda, S3, EBS, RDS, Athena, CloudWatch, CloudTrail, CloudFormation, and CDK. Complete end-to-end infrastructure provisioning with Vercel showcase deployment.",
      status: "completed",
      icon: <Cloud className="w-6 h-6" />,
      technologies: ["Terraform", "AWS Console", "AWS CDK", "CloudFormation", "Python", "TypeScript", "Vercel"],
      completedDate: "Completed",
      details: "Advanced multi-service AWS infrastructure deployment covering compute, storage, networking, database, monitoring, and serverless services. Includes infrastructure as code implementations using Terraform, CloudFormation, and CDK with comprehensive monitoring and security configurations.",
      services: [
        {
          name: "Amazon EC2",
          task: "Launch a t2.micro instance with Amazon Linux 2",
          status: "completed",
          icon: <Server className="w-5 h-5" />
        },
        {
          name: "Amazon VPC",
          task: "Create a custom VPC with 1 public subnet and Internet Gateway",
          status: "completed",
          icon: <Shield className="w-5 h-5" />
        },
        {
          name: "AWS Lambda",
          task: "Create a simple Lambda function (Hello World in Python)",
          status: "completed",
          icon: <Zap className="w-5 h-5" />
        },
        {
          name: "Amazon S3",
          task: "Create a private bucket with versioning enabled",
          status: "completed",
          icon: <Box className="w-5 h-5" />
        },
        {
          name: "Amazon EBS",
          task: "Attach a 10GB EBS volume to your EC2 instance",
          status: "completed",
          icon: <Server className="w-5 h-5" />
        },
        {
          name: "Amazon RDS",
          task: "Launch a db.t2.micro RDS instance (MySQL)",
          status: "completed",
          icon: <Server className="w-5 h-5" />
        },
        {
          name: "Amazon Athena",
          task: "Create a database and table from sample S3 data",
          status: "completed",
          icon: <FileText className="w-5 h-5" />
        },
        {
          name: "Amazon CloudWatch",
          task: "Create an alarm for EC2 CPU utilization > 70%",
          status: "completed",
          icon: <Target className="w-5 h-5" />
        },
        {
          name: "AWS CloudTrail",
          task: "Enable CloudTrail to monitor API activity",
          status: "completed",
          icon: <Eye className="w-5 h-5" />
        },
        {
          name: "AWS CloudFormation",
          task: "Deploy a basic template to create an EC2 instance",
          status: "completed",
          icon: <Code className="w-5 h-5" />
        },
        {
          name: "AWS CDK",
          task: "Use CDK to provision an S3 bucket (TypeScript/Python)",
          status: "completed",
          icon: <BookOpen className="w-5 h-5" />
        }
      ],
      screenshots: [
        {
          src: "/task3/EC2.png",
          title: "EC2 Instance - Amazon Linux 2 Deployment",
          description: "Successfully launched t2.micro EC2 instance running Amazon Linux 2 with proper security groups and network configuration. Instance shows healthy status with all system checks passed and proper IAM role configuration."
        },
        {
          src: "/task3/VPC.png",
          title: "Custom VPC with Public Subnet",
          description: "Created custom VPC with CIDR block 10.0.0.0/16, public subnet configuration, and Internet Gateway attachment. Route tables properly configured for internet access with proper subnet associations."
        },
        {
          src: "/task3/LAMBDA.png",
          title: "AWS Lambda - Hello World Function",
          description: "Python-based Lambda function successfully deployed with proper IAM roles and execution permissions. Function code shows simple Hello World implementation with proper return structure and CloudWatch logging enabled."
        },
        {
          src: "/task3/S3.png",
          title: "S3 Private Bucket with Versioning",
          description: "Private S3 bucket created with versioning enabled, proper access policies, and encryption at rest. Bucket shows versioning status as 'Enabled' with proper configuration for data protection and compliance."
        },
        {
          src: "/task3/VOLUME.png",
          title: "EBS Volume Attachment",
          description: "10GB EBS volume successfully attached to EC2 instance with proper mounting and file system configuration. Volume shows as 'in-use' status with gp2 volume type and optimal performance settings for the workload."
        },
        {
          src: "/task3/RDS.png",
          title: "RDS MySQL Database Instance",
          description: "db.t2.micro MySQL RDS instance deployed with proper configuration, automated backups enabled, and security group rules for database access. Instance shows 'Available' status with endpoint ready for connections."
        },
        {
          src: "/task3/ATHENA.png",
          title: "Amazon Athena Database and Table",
          description: "Amazon Athena database and table created from sample S3 data with proper schema definition. Query editor shows successful table creation with data types and column definitions properly configured."
        },
        {
          src: "/task3/CLOUDWATCH.png",
          title: "CloudWatch CPU Utilization Alarm",
          description: "CloudWatch alarm configured for EC2 CPU utilization threshold > 70% with proper metric configuration. Alarm shows 'OK' state with threshold settings and monitoring period properly configured for alerting."
        },
        {
          src: "/task3/CLOUDTRAIL.png",
          title: "AWS CloudTrail API Monitoring",
          description: "AWS CloudTrail enabled for comprehensive API activity monitoring with S3 bucket logging. Trail shows 'Logging' status with management events captured and proper data event configuration for security monitoring."
        },
        {
          src: "/task3/CLOUDFORMATION.png",
          title: "CloudFormation EC2 Template Deployment",
          description: "CloudFormation template successfully deployed creating EC2 instance with associated resources. Stack shows 'CREATE_COMPLETE' status with all resources properly provisioned and no drift detected."
        },
        {
          src: "/task3/S3 BUCKET.png",
          title: "AWS CDK S3 Bucket Provisioning",
          description: "AWS CDK application written in TypeScript successfully deployed S3 bucket with infrastructure as code. CDK synthesis and deployment completed with CloudFormation stack creation and proper resource tagging."
        },
        {
          src: "/task3/ALL COMMANDS.png",
          title: "Command Line Execution Screenshots",
          description: "Terminal interface showing comprehensive command execution including 'terraform init', 'terraform plan', 'terraform apply', AWS CLI commands, and CDK deployment commands used throughout the infrastructure provisioning process."
        }
      ]
    },
    {
      id: 4,
      title: "S3 Static Website - ByteWave Solutions",
      description: "Successfully deployed a static website for ByteWave Solutions startup using Terraform and AWS S3. Implemented comprehensive S3 bucket configuration with static website hosting, public access controls, bucket policies, and automated deployment pipeline.",
      status: "completed",
      icon: <Box className="w-6 h-6" />,
      technologies: ["Terraform", "AWS S3", "Static Website Hosting", "Bucket Policies", "HTML/CSS", "AWS CLI"],
      completedDate: "Completed",
      details: "Advanced S3 static website implementation featuring custom bucket naming with initials, static website hosting configuration, public access block settings, bucket policy management for public read access, and automated file upload with Terraform output for website endpoint URL.",
      screenshots: [
        {
          src: "/task4/1.png",
          title: "S3 Bucket Creation - bytewave-website-rk",
          description: "Successfully created S3 bucket named 'bytewave-website-rk' using Terraform with proper naming convention including initials. Bucket shows as created with all default settings and ready for static website hosting configuration."
        },
        {
          src: "/task4/2.png",
          title: "Static Website Hosting Configuration",
          description: "S3 bucket configured for static website hosting with index.html as the main file. Properties tab shows static website hosting enabled with the endpoint URL generated and accessible for public viewing."
        },
        {
          src: "/task4/3.png",
          title: "Public Access Block Configuration",
          description: "AWS S3 bucket public access block settings configured using aws_s3_bucket_public_access_block resource. All public access settings properly managed to ensure controlled access while allowing website hosting functionality."
        },
        {
          src: "/task4/4.png",
          title: "Bucket Policy for Public Read Access",
          description: "Bucket policy attached to allow public read access specifically to index.html file. Policy JSON configuration shows proper permissions for GetObject action with Principal set to '*' for public access to website content."
        },
        {
          src: "/task4/5.png",
          title: "Index.html File Upload",
          description: "Sample index.html file successfully uploaded to S3 bucket using AWS Console. File shows as uploaded with proper content-type settings and public read permissions applied through the bucket policy configuration."
        },
        {
          src: "/task4/6.png",
          title: "Terraform Output - Website Endpoint URL",
          description: "Terraform output successfully displaying the static website endpoint URL. Output shows the complete S3 website URL that can be accessed publicly to view the ByteWave Solutions website hosted on AWS S3."
        },
        {
          src: "/task4/7.png",
          title: "Live Website - ByteWave Solutions",
          description: "ByteWave Solutions static website successfully accessible through the S3 endpoint URL. Website displays properly with HTML content, styling, and all static assets loading correctly from the S3 bucket."
        },
        {
          src: "/task4/8.png",
          title: "Terraform Command Execution",
          description: "Terminal showing complete Terraform workflow execution: 'terraform init' for initialization, 'terraform plan' showing resource changes, and 'terraform apply' with successful deployment confirmation. All S3 resources created successfully."
        }
      ]
    }
  ];

  const features = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Infrastructure as Code",
      description: "Define and manage infrastructure using declarative configuration files"
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-600" />,
      title: "Multi-Cloud Support",
      description: "Deploy across AWS, Azure, Google Cloud, and hundreds of other providers"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "Execution Plans",
      description: "Preview changes before applying them to avoid costly mistakes"
    },
    {
      icon: <Target className="w-8 h-8 text-green-600" />,
      title: "Resource Graph",
      description: "Build a graph of resources and parallelize creation and modification"
    },
    {
      icon: <Lock className="w-8 h-8 text-red-600" />,
      title: "State Management",
      description: "Keep track of real-world resource state and configuration"
    },
    {
      icon: <Box className="w-8 h-8 text-indigo-600" />,
      title: "Modular Design",
      description: "Create reusable modules for common infrastructure patterns"
    }
  ];

  const handleViewDetails = (taskId) => {
    setSelectedTask(taskId);
    // This will change the URL to show different task details
    window.history.pushState({}, '', `/task-${taskId}-details`);
  };

  const handleCloseDetails = () => {
    setSelectedTask(null);
    window.history.pushState({}, '', '/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Cloud className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Terraform Portfolio</h1>
                <p className="text-sm text-blue-300">Infrastructure as Code</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'overview'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('tasks')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'tasks'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                Tasks
              </button>
              <button
                onClick={() => setActiveTab('about')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'about'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                About
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 rounded-full text-blue-300 text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            Infrastructure as Code Specialist
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Terraform
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Infrastructure Portfolio
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Showcasing expertise in Infrastructure as Code using Terraform to build, change, and version infrastructure safely and efficiently across multiple cloud providers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setActiveTab('tasks')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
            >
              View Tasks
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-colors backdrop-blur-sm"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {activeTab === 'overview' && (
          <div className="space-y-16">
            {/* Features Grid */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Terraform?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors"
                  >
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Quick Stats */}
            <section className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Project Progress</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">4</div>
                  <div className="text-gray-300">Tasks Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">0</div>
                  <div className="text-gray-300">Tasks Pending</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">4</div>
                  <div className="text-gray-300">Total Tasks</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
                  <div className="text-gray-300">Progress</div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'tasks' && (
          selectedTask ? (
            // Detailed Task View
            <div className="space-y-8">
              <div className="flex items-center justify-between mb-8">
                <button
                  onClick={handleCloseDetails}
                  className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <ArrowRight className="w-5 h-5 mr-2 rotate-180" />
                  Back to All Tasks
                </button>
                <div className="text-sm text-gray-400">
                  URL: /task-{selectedTask}-details
                </div>
              </div>
              
              {(() => {
                const task = tasks.find(t => t.id === selectedTask);
                if (!task) return null;
                
                return (
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`p-3 rounded-lg ${
                        task.status === 'completed' ? 'bg-green-600' : 'bg-gray-600'
                      }`}>
                        {task.status === 'completed' ? (
                          <CheckCircle className="w-8 h-8 text-white" />
                        ) : (
                          <Clock className="w-8 h-8 text-white" />
                        )}
                      </div>
                      <div>
                        <h1 className="text-3xl font-bold text-white">Task {task.id}: {task.title}</h1>
                        <p className="text-blue-300">{task.completedDate}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                      <div className="lg:col-span-2">
                        <h3 className="text-xl font-semibold text-white mb-4">Description</h3>
                        <p className="text-gray-300 mb-6">{task.description}</p>
                        
                        <h3 className="text-xl font-semibold text-white mb-4">Implementation Details</h3>
                        <p className="text-gray-300">{task.details}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Technologies</h3>
                        <div className="space-y-2">
                          {task.technologies.map((tech, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                              <span className="text-gray-300">{tech}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {task.services && (
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-white mb-6">AWS Services Implemented</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {task.services.map((service, index) => (
                            <div key={index} className="bg-black/30 rounded-lg p-4 border border-white/10">
                              <div className="flex items-center space-x-3 mb-3">
                                <div className="text-blue-400">
                                  {service.icon}
                                </div>
                                <h4 className="text-white font-medium text-sm">{service.name}</h4>
                                <div className={`px-2 py-1 rounded-full text-xs ${
                                  service.status === 'completed' 
                                    ? 'bg-green-600/20 text-green-300' 
                                    : 'bg-gray-600/20 text-gray-300'
                                }`}>
                                  ✓
                                </div>
                              </div>
                              <p className="text-xs text-gray-400">{service.task}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {task.screenshots && (
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-6">Implementation Screenshots</h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          {task.screenshots.map((screenshot, index) => (
                            <div key={index} className="bg-black/30 rounded-lg p-4 border border-white/10">
                              <img
                                src={screenshot.src}
                                alt={screenshot.title}
                                className="w-full h-64 object-cover rounded-lg mb-4 border border-white/20"
                              />
                              <h4 className="text-lg font-medium text-white mb-2">{screenshot.title}</h4>
                              <p className="text-sm text-gray-400">{screenshot.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })()}
            </div>
          ) : (
            // Tasks Overview
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Terraform Tasks</h2>
              <p className="text-gray-300">Infrastructure as Code implementation tasks and achievements</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border transition-all hover:transform hover:scale-105 ${
                    task.status === 'completed'
                      ? 'border-green-400/50 bg-green-400/10'
                      : 'border-white/20 hover:border-blue-400/50'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${
                        task.status === 'completed' ? 'bg-green-600' : 'bg-gray-600'
                      }`}>
                        {task.status === 'completed' ? (
                          <CheckCircle className="w-6 h-6 text-white" />
                        ) : (
                          task.icon
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">Task {task.id}</h3>
                        <p className={`text-sm ${
                          task.status === 'completed' ? 'text-green-300' : 'text-gray-400'
                        }`}>
                          {task.completedDate}
                        </p>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      task.status === 'completed'
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-600 text-gray-300'
                    }`}>
                      {task.status === 'completed' ? 'Completed' : 'Pending'}
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-medium text-white mb-2">{task.title}</h4>
                  <p className="text-gray-300 mb-4">{task.description}</p>
                  
                  <div className="mb-4">
                    <h5 className="text-sm font-medium text-gray-400 mb-2">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {task.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-400 mb-4">{task.details}</p>
                  
                  <div className="mt-6 flex justify-between items-center">
                    <div className="text-xs text-gray-500">
                      {task.screenshots ? `${task.screenshots.length} implementation screenshots` : 'Documentation pending'}
                    </div>
                    <button
                      onClick={() => handleViewDetails(task.id)}
                      className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Details</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          )
        )}

        {activeTab === 'about' && (
          <div className="space-y-16">
            {/* Personal Info */}
            <section className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="flex items-center justify-center mb-8">
                <div className="bg-blue-600 p-4 rounded-full">
                  <User className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Ranjan Kumar</h2>
                <p className="text-blue-300 text-lg mb-2">Registration No: 12223573</p>
                <p className="text-gray-300 mb-6">Infrastructure as Code Engineer</p>
                <div className="flex justify-center space-x-6">
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Mail className="w-5 h-5" />
                    <span>Contact Available</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <FileText className="w-5 h-5" />
                    <span>Portfolio Ready</span>
                  </div>
                </div>
              </div>
            </section>

            {/* About Terraform */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-8 text-center">About Terraform</h2>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 text-lg mb-6">
                    Terraform is a powerful Infrastructure as Code (IaC) tool developed by HashiCorp that allows you to define and provision infrastructure using a declarative configuration language. It enables teams to manage infrastructure safely and efficiently across multiple cloud providers.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                    <BookOpen className="w-6 h-6 mr-2" />
                    Key Concepts
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-black/20 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-white mb-3">Providers</h4>
                      <p className="text-gray-300">Plugins that allow Terraform to interact with cloud providers, SaaS providers, and other APIs.</p>
                    </div>
                    <div className="bg-black/20 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-white mb-3">Resources</h4>
                      <p className="text-gray-300">Infrastructure objects like virtual machines, networks, and storage that you want to manage.</p>
                    </div>
                    <div className="bg-black/20 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-white mb-3">State</h4>
                      <p className="text-gray-300">A snapshot of your infrastructure at a given point in time, used to track changes.</p>
                    </div>
                    <div className="bg-black/20 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-white mb-3">Modules</h4>
                      <p className="text-gray-300">Reusable packages of Terraform configurations that can be shared and versioned.</p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold text-white mb-4">Benefits of Using Terraform</h3>
                  <ul className="text-gray-300 space-y-2 mb-6">
                    <li>• <strong>Multi-Cloud Support:</strong> Deploy across AWS, Azure, Google Cloud, and 100+ providers</li>
                    <li>• <strong>Immutable Infrastructure:</strong> Create new resources instead of modifying existing ones</li>
                    <li>• <strong>Execution Plans:</strong> Preview changes before applying them</li>
                    <li>• <strong>Resource Graph:</strong> Build dependency graphs and parallelize operations</li>
                    <li>• <strong>Version Control:</strong> Track changes and collaborate with teams</li>
                    <li>• <strong>State Management:</strong> Keep track of real-world resource state</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-white mb-4">Common Use Cases</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-blue-600/20 p-4 rounded-lg text-center">
                      <Cloud className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                      <p className="text-white font-medium">Cloud Infrastructure</p>
                    </div>
                    <div className="bg-green-600/20 p-4 rounded-lg text-center">
                      <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
                      <p className="text-white font-medium">Security & Compliance</p>
                    </div>
                    <div className="bg-purple-600/20 p-4 rounded-lg text-center">
                      <Box className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                      <p className="text-white font-medium">Multi-Tier Applications</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-sm border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 Ranjan Kumar - Registration No: 12223573
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Terraform Infrastructure as Code Portfolio
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;