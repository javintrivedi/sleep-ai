import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { featureImportanceData } from "@/lib/sleepData";

const FeatureImportanceChart = () => {
  // Generate gradient colors from primary to lighter
  const getBarColor = (index: number) => {
    const opacity = 1 - (index * 0.12);
    return `hsla(210, 60%, 45%, ${opacity})`;
  };

  return (
    <Card className="h-full shadow-md">
      <CardHeader className="py-3 px-4">
        <CardTitle className="text-sm font-serif font-semibold text-foreground">
          Feature Importance Ranking
        </CardTitle>
      </CardHeader>
      <CardContent className="p-2">
        <ResponsiveContainer width="100%" height={160}>
          <BarChart 
            data={featureImportanceData} 
            layout="vertical"
            margin={{ top: 5, right: 35, left: 5, bottom: 5 }}
          >
            <XAxis 
              type="number"
              tick={{ fontSize: 9, fill: "hsl(var(--muted-foreground))" }}
              tickLine={false}
              axisLine={false}
              domain={[0, 0.35]}
              tickFormatter={(v) => `${(v * 100).toFixed(0)}%`}
            />
            <YAxis 
              type="category"
              dataKey="feature"
              tick={{ fontSize: 9, fill: "hsl(var(--foreground))" }}
              tickLine={false}
              axisLine={false}
              width={100}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                fontSize: "11px"
              }}
              formatter={(value: number) => [`${(value * 100).toFixed(1)}%`, "Importance"]}
            />
            <Bar 
              dataKey="importance" 
              radius={[0, 4, 4, 0]}
              label={{ 
                position: "right", 
                fontSize: 9, 
                fill: "hsl(var(--muted-foreground))",
                formatter: (value: number) => `${(value * 100).toFixed(0)}%`
              }}
            >
              {featureImportanceData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={getBarColor(index)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default FeatureImportanceChart;
