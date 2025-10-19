import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card mt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4 bg-gradient-primary bg-clip-text text-transparent">
              DevOps Learning
            </h3>
            <p className="text-muted-foreground">
              Comprehensive guide for university students exploring modern DevOps practices and tools.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Topics Covered</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Version Control & CI/CD</li>
              <li>Containers & Orchestration</li>
              <li>Cloud & Infrastructure</li>
              <li>Monitoring & Automation</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="https://git-scm.com/doc" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Git Documentation
                </a>
              </li>
              <li>
                <a href="https://docs.docker.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Docker Docs
                </a>
              </li>
              <li>
                <a href="https://kubernetes.io/docs/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Kubernetes Docs
                </a>
              </li>
              <li>
                <a href="https://www.jenkins.io/doc/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Jenkins Documentation
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 DevOps Learning Platform. Educational resource for industrial visits.
          </p>
          
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
