import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { sleepQualityScore } from "@/lib/sleepData";

const SleepQualityScore = () => {
  const { score, confidence, rating } = sleepQualityScore;
  
  // Calculate angle for the arc (score out of 100 maps to 0-180 degrees)
  const angle = (score / 100) * 180;
  
  // Get rating color
  const getRatingColor = (rating: string) => {
    switch (rating) {
      case "Excellent": return "hsl(var(--chart-excellent))";
      case "Good": return "hsl(var(--chart-good))";
      case "Fair": return "hsl(var(--chart-fair))";
      case "Poor": return "hsl(var(--chart-poor))";
      default: return "hsl(var(--primary))";
    }
  };

  const ratingColor = getRatingColor(rating);

  return (
    <Card className="h-full shadow-md">
      <CardHeader className="py-3 px-4">
        <CardTitle className="text-sm font-serif font-semibold text-foreground">
          Predicted Sleep Quality
        </CardTitle>
      </CardHeader>
      <CardContent className="p-2 flex flex-col items-center justify-center">
        <div className="relative w-32 h-20">
          {/* Background arc */}
          <svg viewBox="0 0 100 55" className="w-full h-full">
            {/* Track */}
            <path
              d="M 5 50 A 45 45 0 0 1 95 50"
              fill="none"
              stroke="hsl(var(--muted))"
              strokeWidth="8"
              strokeLinecap="round"
            />
            {/* Progress arc */}
            <path
              d="M 5 50 A 45 45 0 0 1 95 50"
              fill="none"
              stroke={ratingColor}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${(angle / 180) * 141.37} 141.37`}
            />
            {/* Zone indicators */}
            <text x="8" y="54" fontSize="5" fill="hsl(var(--chart-poor))">Poor</text>
            <text x="30" y="18" fontSize="5" fill="hsl(var(--chart-fair))">Fair</text>
            <text x="55" y="12" fontSize="5" fill="hsl(var(--chart-good))">Good</text>
            <text x="78" y="20" fontSize="5" fill="hsl(var(--chart-excellent))">Exc.</text>
          </svg>
          
          {/* Score display */}
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-1">
            <span className="text-2xl font-bold" style={{ color: ratingColor }}>
              {score}
            </span>
            <span className="text-xs text-muted-foreground">/ 100</span>
          </div>
        </div>
        
        {/* Rating badge */}
        <div 
          className="mt-2 px-3 py-1 rounded-full text-xs font-medium"
          style={{ backgroundColor: `${ratingColor}20`, color: ratingColor }}
        >
          {rating}
        </div>
        
        {/* Confidence interval */}
        <p className="text-xs text-muted-foreground mt-2 text-center">
          95% CI: [{confidence.lower} - {confidence.upper}]
        </p>
      </CardContent>
    </Card>
  );
};

export default SleepQualityScore;
