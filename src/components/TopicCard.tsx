import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface TopicCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  examples: string[];
  workflow: string;
  gradient?: boolean;
}

const TopicCard = ({ icon: Icon, title, description, examples, workflow, gradient }: TopicCardProps) => {
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
      </CardContent>
    </Card>
  );
};

export default TopicCard;
