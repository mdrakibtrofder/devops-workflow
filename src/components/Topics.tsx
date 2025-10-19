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
      gradient: true
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
      gradient: false
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
      gradient: true
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
      gradient: false
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
      gradient: true
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
      gradient: false
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
      gradient: true
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
      gradient: false
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
