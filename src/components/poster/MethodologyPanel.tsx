import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Cpu, Users } from "lucide-react";

const MethodologyPanel = () => {
  return (
    <Card className="h-full shadow-md">
      <CardHeader className="py-3 px-4">
        <CardTitle className="text-sm font-serif font-semibold text-foreground">
          Methodology
        </CardTitle>
      </CardHeader>
      <CardContent className="p-3 pt-0">
        <div className="space-y-3">
          {/* Data Collection */}
          <div className="flex gap-2">
            <Database className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-semibold text-foreground">Data Collection</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Continuous biometric monitoring via wearable sensors (PPG, accelerometer, skin temperature)
              </p>
            </div>
          </div>
          
          {/* ML Approach */}
          <div className="flex gap-2">
            <Cpu className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-semibold text-foreground">ML Approach</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Ensemble model combining Random Forest & LSTM neural networks with 87% prediction accuracy
              </p>
            </div>
          </div>
          
          {/* Sample Size */}
          <div className="flex gap-2">
            <Users className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-semibold text-foreground">Dataset</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                n = 2,847 participants, 45,000+ sleep sessions, validated against PSG gold standard
              </p>
            </div>
          </div>
        </div>
        
        {/* Key Insight */}
        <div className="mt-3 p-2 bg-secondary/50 rounded-lg">
          <p className="text-xs text-foreground italic">
            <strong>Key Insight:</strong> Pre-sleep HRV patterns (30 min before bed) show strongest predictive power for subsequent sleep quality.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MethodologyPanel;
