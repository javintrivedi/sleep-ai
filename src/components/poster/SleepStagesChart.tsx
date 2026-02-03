import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { sleepStagesData } from "@/lib/sleepData";

const SleepStagesChart = () => {
  return (
    <Card className="h-full shadow-md">
      <CardHeader className="py-3 px-4">
        <CardTitle className="text-sm font-serif font-semibold text-foreground">
          Sleep Architecture
        </CardTitle>
      </CardHeader>
      <CardContent className="p-2">
        <ResponsiveContainer width="100%" height={160}>
          <AreaChart data={sleepStagesData} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
            <XAxis 
              dataKey="time" 
              tick={{ fontSize: 9, fill: "hsl(var(--muted-foreground))" }}
              tickLine={false}
              axisLine={{ stroke: "hsl(var(--border))" }}
              interval={2}
            />
            <YAxis 
              tick={{ fontSize: 9, fill: "hsl(var(--muted-foreground))" }}
              tickLine={false}
              axisLine={false}
              domain={[0, 100]}
              hide
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                fontSize: "11px"
              }}
              labelStyle={{ fontWeight: "bold", color: "hsl(var(--foreground))" }}
            />
            <Legend 
              wrapperStyle={{ fontSize: "10px", paddingTop: "8px" }}
              iconType="circle"
              iconSize={8}
            />
            <Area 
              type="monotone" 
              dataKey="deep" 
              stackId="1" 
              stroke="hsl(var(--chart-deep))" 
              fill="hsl(var(--chart-deep))" 
              name="Deep"
            />
            <Area 
              type="monotone" 
              dataKey="rem" 
              stackId="1" 
              stroke="hsl(var(--chart-rem))" 
              fill="hsl(var(--chart-rem))" 
              name="REM"
            />
            <Area 
              type="monotone" 
              dataKey="light" 
              stackId="1" 
              stroke="hsl(var(--chart-light))" 
              fill="hsl(var(--chart-light))" 
              name="Light"
            />
            <Area 
              type="monotone" 
              dataKey="awake" 
              stackId="1" 
              stroke="hsl(var(--chart-awake))" 
              fill="hsl(var(--chart-awake))" 
              name="Awake"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default SleepStagesChart;
