import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TopicCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  examples: string[];
  workflow: string;
  gradient?: boolean;
  visualization?: ReactNode;
  summary?: string;
  codeExample?: string;
  scenario?: string;
}

const TopicCard = ({ icon: Icon, title, description, examples, workflow, gradient, visualization, summary, codeExample, scenario }: TopicCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Card className="group hover:shadow-hover transition-all duration-300 border-2 hover:border-primary/50 overflow-hidden">
      <div className={`absolute top-0 left-0 right-0 h-1 ${gradient ? 'bg-gradient-primary' : 'bg-gradient-secondary'}`} />
      
      <CardHeader className="space-y-4">
        <div className={`w-14 h-14 rounded-xl ${gradient ? 'bg-gradient-primary' : 'bg-gradient-secondary'} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="h-7 w-7 text-white" />
        </div>
        
        <div>
          <CardTitle className="text-2xl mb-2">{title}</CardTitle>
          <CardDescription className="text-base">{description}</CardDescription>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div>
          <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
          <ul className="space-y-2">
            {examples.map((example, index) => (
              <li key={index} className="flex items-start gap-2 text-muted-foreground">
                <span className="text-primary mt-1">•</span>
                <span>{example}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="pt-4 border-t border-border">
          <h4 className="font-semibold mb-2 text-foreground">In the Workflow:</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">{workflow}</p>
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="w-full" variant="default">
              View Details & Visualization
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh]">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-3 text-2xl">
                <div className={`w-10 h-10 rounded-lg ${gradient ? 'bg-gradient-primary' : 'bg-gradient-secondary'} flex items-center justify-center`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                {title}
              </DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            
            <ScrollArea className="h-[calc(90vh-120px)] pr-4">
              <div className="space-y-6">
                {summary && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Summary</h3>
                    <p className="text-muted-foreground leading-relaxed">{summary}</p>
                  </div>
                )}

                {scenario && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Basic Scenario</h3>
                    <p className="text-muted-foreground leading-relaxed">{scenario}</p>
                  </div>
                )}

                {visualization && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Workflow Visualization</h3>
                    <div className="bg-muted/30 rounded-lg p-4">
                      {visualization}
                    </div>
                  </div>
                )}

                {codeExample && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Code Example</h3>
                    <pre className="bg-muted rounded-lg p-4 overflow-x-auto">
                      <code className="text-sm">{codeExample}</code>
                    </pre>
                  </div>
                )}
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default TopicCard;
