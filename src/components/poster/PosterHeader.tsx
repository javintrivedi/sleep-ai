import { Activity, Brain } from "lucide-react";

const PosterHeader = () => {
  return (
    <header className="text-center py-4 px-6">
      <div className="flex items-center justify-center gap-3 mb-2">
        <Activity className="w-8 h-8 text-primary" />
        <Brain className="w-8 h-8 text-accent" />
      </div>
      <h1 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight mb-1">
        Predicting Sleep Quality from Biometric Sensors
      </h1>
      <p className="text-sm md:text-base text-muted-foreground italic">
        How AI learns your body's sleep patterns before you even close your eyes
      </p>
    </header>
  );
};

export default PosterHeader;
