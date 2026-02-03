import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, ReferenceLine } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { heartRateHRVData } from "@/lib/sleepData";

const HeartRateHRVChart = () => {
  return (
    <Card className="h-full shadow-md">
      <CardHeader className="py-3 px-4">
        <CardTitle className="text-sm font-serif font-semibold text-foreground">
          Heart Rate & HRV Patterns
        </CardTitle>
      </CardHeader>
      <CardContent className="p-2">
        <ResponsiveContainer width="100%" height={160}>
          <LineChart data={heartRateHRVData} margin={{ top: 5, right: 10, left: -15, bottom: 5 }}>
            <XAxis 
              dataKey="time" 
              tick={{ fontSize: 9, fill: "hsl(var(--muted-foreground))" }}
              tickLine={false}
              axisLine={{ stroke: "hsl(var(--border))" }}
              interval={3}
            />
            <YAxis 
              yAxisId="hr"
              orientation="left"
              tick={{ fontSize: 9, fill: "hsl(var(--chart-hr))" }}
              tickLine={false}
              axisLine={false}
              domain={[40, 80]}
              tickFormatter={(v) => `${v}`}
            />
            <YAxis 
              yAxisId="hrv"
              orientation="right"
              tick={{ fontSize: 9, fill: "hsl(var(--chart-hrv))" }}
              tickLine={false}
              axisLine={false}
              domain={[30, 90]}
              tickFormatter={(v) => `${v}`}
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
              iconType="line"
              iconSize={16}
            />
            <ReferenceLine 
              x="10 PM" 
              yAxisId="hr"
              stroke="hsl(var(--border))" 
              strokeDasharray="3 3"
              label={{ 
                value: "Sleep Onset", 
                position: "top", 
                fontSize: 8,
                fill: "hsl(var(--muted-foreground))"
              }}
            />
            <Line 
              yAxisId="hr"
              type="monotone" 
              dataKey="hr" 
              stroke="hsl(var(--chart-hr))" 
              strokeWidth={2}
              dot={false}
              name="Heart Rate (bpm)"
            />
            <Line 
              yAxisId="hrv"
              type="monotone" 
              dataKey="hrv" 
              stroke="hsl(var(--chart-hrv))" 
              strokeWidth={2}
              dot={false}
              name="HRV (ms)"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default HeartRateHRVChart;
