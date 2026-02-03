// Sample sleep data for the research poster

export const sleepStagesData = [
  { time: "10 PM", deep: 0, rem: 0, light: 0, awake: 100 },
  { time: "10:30", deep: 10, rem: 0, light: 60, awake: 30 },
  { time: "11 PM", deep: 45, rem: 5, light: 40, awake: 10 },
  { time: "11:30", deep: 60, rem: 10, light: 25, awake: 5 },
  { time: "12 AM", deep: 50, rem: 20, light: 25, awake: 5 },
  { time: "12:30", deep: 30, rem: 35, light: 30, awake: 5 },
  { time: "1 AM", deep: 15, rem: 50, light: 30, awake: 5 },
  { time: "1:30", deep: 25, rem: 30, light: 40, awake: 5 },
  { time: "2 AM", deep: 55, rem: 10, light: 30, awake: 5 },
  { time: "2:30", deep: 60, rem: 8, light: 27, awake: 5 },
  { time: "3 AM", deep: 40, rem: 25, light: 30, awake: 5 },
  { time: "3:30", deep: 20, rem: 45, light: 30, awake: 5 },
  { time: "4 AM", deep: 10, rem: 55, light: 30, awake: 5 },
  { time: "4:30", deep: 15, rem: 40, light: 40, awake: 5 },
  { time: "5 AM", deep: 8, rem: 50, light: 35, awake: 7 },
  { time: "5:30", deep: 5, rem: 45, light: 40, awake: 10 },
  { time: "6 AM", deep: 3, rem: 35, light: 45, awake: 17 },
  { time: "6:30", deep: 0, rem: 20, light: 50, awake: 30 },
  { time: "7 AM", deep: 0, rem: 5, light: 25, awake: 70 },
];

export const heartRateHRVData = [
  { time: "9 PM", hr: 72, hrv: 45 },
  { time: "9:30", hr: 68, hrv: 48 },
  { time: "10 PM", hr: 65, hrv: 52 },
  { time: "10:30", hr: 58, hrv: 58 },
  { time: "11 PM", hr: 54, hrv: 65 },
  { time: "11:30", hr: 52, hrv: 70 },
  { time: "12 AM", hr: 50, hrv: 75 },
  { time: "12:30", hr: 48, hrv: 78 },
  { time: "1 AM", hr: 52, hrv: 72 },
  { time: "1:30", hr: 55, hrv: 68 },
  { time: "2 AM", hr: 49, hrv: 76 },
  { time: "2:30", hr: 47, hrv: 80 },
  { time: "3 AM", hr: 50, hrv: 74 },
  { time: "3:30", hr: 53, hrv: 70 },
  { time: "4 AM", hr: 55, hrv: 66 },
  { time: "4:30", hr: 52, hrv: 68 },
  { time: "5 AM", hr: 54, hrv: 65 },
  { time: "5:30", hr: 58, hrv: 58 },
  { time: "6 AM", hr: 62, hrv: 52 },
  { time: "6:30", hr: 68, hrv: 48 },
  { time: "7 AM", hr: 75, hrv: 42 },
];

export const featureImportanceData = [
  { feature: "HRV Variability", importance: 0.28, label: "28%" },
  { feature: "Resting Heart Rate", importance: 0.22, label: "22%" },
  { feature: "Body Temperature", importance: 0.18, label: "18%" },
  { feature: "Movement Patterns", importance: 0.15, label: "15%" },
  { feature: "Pre-sleep HR Pattern", importance: 0.12, label: "12%" },
  { feature: "Sleep Regularity", importance: 0.05, label: "5%" },
];

export const sleepQualityScore = {
  score: 82,
  confidence: { lower: 78, upper: 86 },
  rating: "Good" as const,
};
