import TopicCard from "./TopicCard";
import { 
  GitBranch, 
  Container, 
  Network, 
  Cloud, 
  Activity, 
  Workflow, 
  Code2, 
  Settings 
} from "lucide-react";

const Topics = () => {
  const topics = [
    {
      icon: GitBranch,
      title: "Version Control (Git)",
      description: "Master source code management and team collaboration",
      examples: [
        "Branching strategies for feature development",
        "Pull requests and code review workflows",
        "Merge conflict resolution techniques",
        "Git hooks for automated quality checks"
      ],
      workflow: "Git serves as the foundation—every change starts here. Developers commit code, create branches, and merge updates, triggering the entire DevOps pipeline.",
      gradient: true,
      visualization: `graph LR
    A[Working Directory] -->|git add| B[Staging Area]
    B -->|git commit| C[Local Repository]
    C -->|git push| D[Remote Repository]
    D -->|git pull| A
    C -->|git branch| E[Feature Branch]
    E -->|git merge| C`,
      summary: "Git is a distributed version control system that tracks changes in source code during software development. It enables multiple developers to work together on projects, maintaining a complete history of all changes.",
      scenario: "A developer creates a new feature branch, makes changes, commits them locally, pushes to the remote repository, and creates a pull request for team review before merging into the main branch.",
      codeExample: `# Initialize a new Git repository
git init

# Clone an existing repository
git clone https://github.com/username/repo.git

# Create and switch to a new branch
git checkout -b feature/new-feature

# Stage changes
git add .

# Commit changes
git commit -m "Add new feature"

# Push to remote repository
git push origin feature/new-feature

# Merge branch to main
git checkout main
git merge feature/new-feature`
    },
    {
      icon: Container,
      title: "Containerization (Docker)",
      description: "Package applications with all dependencies included",
      examples: [
        "Creating Dockerfiles for consistent builds",
        "Multi-stage builds for optimization",
        "Docker Compose for local development",
        "Registry management and image versioning"
      ],
      workflow: "After code is committed, Docker packages it into containers ensuring 'it works on my machine' becomes 'it works everywhere'.",
      gradient: false,
      visualization: `graph TD
    A[Dockerfile] -->|docker build| B[Docker Image]
    B -->|docker run| C[Container 1]
    B -->|docker run| D[Container 2]
    B -->|docker push| E[Docker Registry]
    E -->|docker pull| F[Production Server]
    F -->|docker run| G[Running Container]`,
      summary: "Docker is a platform that packages applications and their dependencies into lightweight, portable containers. Containers ensure consistency across development, testing, and production environments.",
      scenario: "A Node.js application is packaged into a Docker image with all its dependencies. The image is then run as a container on any system with Docker installed, ensuring consistent behavior regardless of the underlying infrastructure.",
      codeExample: `# Dockerfile example
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]

# Build Docker image
docker build -t myapp:1.0 .

# Run container
docker run -d -p 3000:3000 --name myapp-container myapp:1.0

# View running containers
docker ps

# Stop and remove container
docker stop myapp-container
docker rm myapp-container`
    },
    {
      icon: Network,
      title: "Orchestration (Kubernetes)",
      description: "Deploy and scale containerized applications efficiently",
      examples: [
        "Pod deployment and management",
        "Service discovery and load balancing",
        "Auto-scaling based on demand",
        "Rolling updates with zero downtime"
      ],
      workflow: "Kubernetes takes Docker containers and orchestrates them across clusters, managing scaling, health checks, and self-healing automatically.",
      gradient: true,
      visualization: `graph TD
    A[Kubernetes Cluster] --> B[Master Node]
    A --> C[Worker Node 1]
    A --> D[Worker Node 2]
    B --> E[API Server]
    B --> F[Scheduler]
    B --> G[Controller]
    C --> H[Pod 1]
    C --> I[Pod 2]
    D --> J[Pod 3]
    H --> K[Container]
    I --> L[Container]
    J --> M[Container]`,
      summary: "Kubernetes (K8s) is an open-source container orchestration platform that automates deployment, scaling, and management of containerized applications across clusters of hosts.",
      scenario: "A web application runs in multiple pods across different nodes. Kubernetes automatically distributes traffic, scales pods based on CPU usage, and replaces failed pods to maintain the desired state.",
      codeExample: `# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: webapp-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: webapp
  template:
    metadata:
      labels:
        app: webapp
    spec:
      containers:
      - name: webapp
        image: myapp:1.0
        ports:
        - containerPort: 3000

# Apply deployment
kubectl apply -f deployment.yaml

# Scale deployment
kubectl scale deployment webapp-deployment --replicas=5

# View pods
kubectl get pods`
    },
    {
      icon: Cloud,
      title: "Cloud Platforms",
      description: "Leverage AWS, Azure, or GCP for infrastructure",
      examples: [
        "Compute services (EC2, VMs, Compute Engine)",
        "Managed databases and storage solutions",
        "Networking and CDN configuration",
        "Identity and access management"
      ],
      workflow: "Cloud platforms provide the infrastructure where everything runs—from compute power to databases, enabling global scale and reliability.",
      gradient: false,
      visualization: `graph TB
    A[Users] --> B[Load Balancer]
    B --> C[Web Servers]
    C --> D[Application Servers]
    D --> E[Database]
    D --> F[Cache]
    C --> G[CDN]
    D --> H[Object Storage]
    I[Monitoring] -..-> C
    I -..-> D
    I -..-> E`,
      summary: "Cloud platforms (AWS, Azure, GCP) provide on-demand computing resources including servers, storage, databases, and networking. They enable businesses to scale infrastructure without managing physical hardware.",
      scenario: "An e-commerce application uses AWS EC2 for web servers, RDS for the database, S3 for static assets, and CloudFront as CDN. Auto-scaling adjusts server capacity based on traffic patterns.",
      codeExample: `# AWS CLI - Launch EC2 Instance
aws ec2 run-instances \\
  --image-id ami-0abcdef1234567890 \\
  --instance-type t2.micro \\
  --key-name MyKeyPair \\
  --security-group-ids sg-0123456789abcdef0 \\
  --subnet-id subnet-0123456789abcdef0

# Create S3 Bucket
aws s3 mb s3://my-application-bucket

# Upload file to S3
aws s3 cp ./index.html s3://my-application-bucket/

# List EC2 instances
aws ec2 describe-instances \\
  --query 'Reservations[*].Instances[*].[InstanceId,State.Name,PublicIpAddress]' \\
  --output table`
    },
    {
      icon: Activity,
      title: "Monitoring & Observability",
      description: "Track metrics, logs, and traces in production",
      examples: [
        "Prometheus for metrics collection",
        "Grafana dashboards for visualization",
        "ELK/Loki stack for log aggregation",
        "Distributed tracing with Jaeger"
      ],
      workflow: "Continuous monitoring ensures system health, providing insights into performance bottlenecks and enabling proactive issue resolution.",
      gradient: true,
      visualization: `graph LR
    A[Application] --> B[Metrics Exporter]
    B --> C[Prometheus]
    C --> D[Grafana Dashboard]
    A --> E[Log Files]
    E --> F[Log Aggregator]
    F --> G[Elasticsearch]
    G --> H[Kibana]
    A --> I[Traces]
    I --> J[Jaeger]`,
      summary: "Monitoring and observability tools collect metrics, logs, and traces from applications and infrastructure. They provide real-time insights into system performance, helping detect and diagnose issues quickly.",
      scenario: "Prometheus scrapes metrics from application endpoints, stores time-series data, and triggers alerts when CPU usage exceeds 80%. Grafana displays these metrics in dashboards, while logs are aggregated in Elasticsearch for analysis.",
      codeExample: `# prometheus.yml configuration
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'nodejs-app'
    static_configs:
      - targets: ['localhost:3000']

# Application metrics endpoint (Node.js)
const express = require('express');
const promClient = require('prom-client');
const app = express();

const register = new promClient.Registry();
promClient.collectDefaultMetrics({ register });

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

app.listen(3000);`
    },
    {
      icon: Workflow,
      title: "CI/CD (Jenkins)",
      description: "Automate build, test, and deployment processes",
      examples: [
        "Pipeline as code with Jenkinsfile",
        "Automated testing and quality gates",
        "Integration with Git and Docker",
        "Deployment strategies (Blue-Green, Canary)"
      ],
      workflow: "Jenkins automates the entire delivery pipeline—from code commit to production deployment, ensuring rapid and reliable releases.",
      gradient: false,
      visualization: `graph LR
    A[Code Commit] --> B[Jenkins Triggers]
    B --> C[Build Stage]
    C --> D[Test Stage]
    D --> E[Security Scan]
    E --> F[Build Docker Image]
    F --> G[Deploy to Staging]
    G --> H[Integration Tests]
    H --> I[Deploy to Production]`,
      summary: "Jenkins is an automation server that enables continuous integration and continuous delivery (CI/CD). It automates the building, testing, and deployment of applications whenever code changes are committed.",
      scenario: "When a developer pushes code to GitHub, Jenkins automatically triggers a pipeline that builds the application, runs unit tests, builds a Docker image, and deploys it to a staging environment for further testing.",
      codeExample: `// Jenkinsfile
pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', 
                    url: 'https://github.com/user/repo.git'
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        
        stage('Docker Build') {
            steps {
                sh 'docker build -t myapp:\${BUILD_NUMBER} .'
            }
        }
        
        stage('Deploy') {
            steps {
                sh 'docker push myapp:\${BUILD_NUMBER}'
                sh 'kubectl set image deployment/myapp myapp=myapp:\${BUILD_NUMBER}'
            }
        }
    }
}`
    },
    {
      icon: Code2,
      title: "Infrastructure as Code (Terraform)",
      description: "Define and provision infrastructure declaratively",
      examples: [
        "Resource declaration using HCL",
        "State management and version control",
        "Module reusability across projects",
        "Multi-cloud infrastructure support"
      ],
      workflow: "Terraform provisions cloud infrastructure programmatically, making infrastructure changes reviewable, repeatable, and version-controlled.",
      gradient: true,
      visualization: `graph TD
    A[Terraform Config] --> B[terraform init]
    B --> C[terraform plan]
    C --> D[Review Changes]
    D --> E[terraform apply]
    E --> F[Cloud Provider API]
    F --> G[VPC Created]
    F --> H[Servers Created]
    F --> I[Database Created]
    E --> J[State File]`,
      summary: "Terraform is an Infrastructure as Code (IaC) tool that allows you to define cloud and on-premises resources in human-readable configuration files. It manages the complete lifecycle of infrastructure using a declarative approach.",
      scenario: "A DevOps engineer writes Terraform configuration to provision AWS VPC, EC2 instances, RDS database, and S3 buckets. Running 'terraform apply' creates all resources, and changes are tracked in version control.",
      codeExample: `# main.tf
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "web_server" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
  
  tags = {
    Name = "WebServer"
    Environment = "Production"
  }
}

resource "aws_s3_bucket" "app_bucket" {
  bucket = "my-app-bucket-12345"
}

# Commands
# terraform init
# terraform plan
# terraform apply
# terraform destroy`
    },
    {
      icon: Settings,
      title: "Configuration Management (Ansible)",
      description: "Automate server setup and application deployment",
      examples: [
        "Playbooks for declarative configuration",
        "Idempotent operations for consistency",
        "Agent-less architecture via SSH",
        "Role-based organization of tasks"
      ],
      workflow: "Ansible configures servers and deploys applications, ensuring consistent environments from development to production.",
      gradient: false,
      visualization: `graph TD
    A[Ansible Playbook] --> B[Inventory File]
    A --> C[Ansible Control Node]
    C -->|SSH| D[Server 1]
    C -->|SSH| E[Server 2]
    C -->|SSH| F[Server 3]
    D --> G[Install Packages]
    D --> H[Configure Services]
    E --> G
    E --> H
    F --> G
    F --> H`,
      summary: "Ansible is an automation tool for configuration management, application deployment, and task automation. It uses YAML-based playbooks to describe automation jobs and executes them over SSH without requiring agents.",
      scenario: "An Ansible playbook installs NGINX, configures firewall rules, and deploys a web application across 50 servers simultaneously. All servers reach the same desired state through idempotent operations.",
      codeExample: `# playbook.yml
---
- name: Setup Web Servers
  hosts: webservers
  become: yes
  
  tasks:
    - name: Install NGINX
      apt:
        name: nginx
        state: present
        update_cache: yes
    
    - name: Start NGINX service
      service:
        name: nginx
        state: started
        enabled: yes
    
    - name: Copy application files
      copy:
        src: ./app/
        dest: /var/www/html/
        owner: www-data
        group: www-data
    
    - name: Configure firewall
      ufw:
        rule: allow
        port: 80
        proto: tcp

# inventory.ini
[webservers]
web1.example.com
web2.example.com
web3.example.com

# Run playbook
# ansible-playbook -i inventory.ini playbook.yml`
    }
  ];

  return (
    <section id="topics" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Master DevOps
            <span className="block mt-2 bg-gradient-primary bg-clip-text text-transparent">
              Essential Tools
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the core technologies that power modern software development and deployment
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {topics.map((topic, index) => (
            <div 
              key={index}
              className="animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <TopicCard {...topic} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Topics;
