import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToTopics = () => {
    document.getElementById('topics')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 gradient-hero opacity-10" />
      
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-block">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20">
              Industrial Visit Session
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            From Code to Cloud:
            <span className="block mt-2 bg-gradient-primary bg-clip-text text-transparent">
              DevOps & Deployment
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Master the essential tools and practices that power modern software delivery—from version control to cloud orchestration.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8"
              onClick={scrollToTopics}
            >
              Start Learning
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 border-2"
            >
              View Workflow
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">8</div>
              <div className="text-sm text-muted-foreground">Core Topics</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">100%</div>
              <div className="text-sm text-muted-foreground">Practical</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">30+</div>
              <div className="text-sm text-muted-foreground">Examples</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
