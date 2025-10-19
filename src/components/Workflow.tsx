import { ArrowRight } from "lucide-react";

const Workflow = () => {
  const steps = [
    { name: "Git", color: "bg-gradient-primary" },
    { name: "Jenkins", color: "bg-gradient-secondary" },
    { name: "Docker", color: "bg-gradient-primary" },
    { name: "Kubernetes", color: "bg-gradient-secondary" },
    { name: "Cloud", color: "bg-gradient-primary" },
    { name: "Monitor", color: "bg-gradient-secondary" },
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            The DevOps
            <span className="block mt-2 bg-gradient-primary bg-clip-text text-transparent">
              Pipeline Flow
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how all the tools work together in a modern delivery pipeline
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Desktop Flow */}
          <div className="hidden md:flex items-center justify-center gap-4 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="flex flex-col items-center gap-2">
                  <div className={`${step.color} text-white px-6 py-3 rounded-xl font-semibold shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105`}>
                    {step.name}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="mx-2 text-primary h-6 w-6" />
                )}
              </div>
            ))}
          </div>

          {/* Mobile Flow */}
          <div className="md:hidden flex flex-col items-center gap-4 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className={`${step.color} text-white px-8 py-4 rounded-xl font-semibold shadow-card w-48 text-center`}>
                  {step.name}
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="my-2 text-primary h-6 w-6 rotate-90" />
                )}
              </div>
            ))}
          </div>

          {/* Workflow Explanation */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-xl border-2 border-border shadow-card">
              <h3 className="text-xl font-bold mb-3 text-primary">Development</h3>
              <p className="text-muted-foreground">
                Code is written, committed to Git, and automatically triggers the CI/CD pipeline through Jenkins.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border-2 border-border shadow-card">
              <h3 className="text-xl font-bold mb-3 text-secondary">Build & Deploy</h3>
              <p className="text-muted-foreground">
                Docker packages the app, Kubernetes orchestrates deployment, and Terraform/Ansible configure infrastructure.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl border-2 border-border shadow-card">
              <h3 className="text-xl font-bold mb-3 text-primary">Production</h3>
              <p className="text-muted-foreground">
                App runs on cloud platforms with continuous monitoring, ensuring reliability and performance at scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
