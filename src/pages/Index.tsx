import PosterHeader from "@/components/poster/PosterHeader";
import SleepStagesChart from "@/components/poster/SleepStagesChart";
import HeartRateHRVChart from "@/components/poster/HeartRateHRVChart";
import SleepQualityScore from "@/components/poster/SleepQualityScore";
import FeatureImportanceChart from "@/components/poster/FeatureImportanceChart";
import MethodologyPanel from "@/components/poster/MethodologyPanel";

const Index = () => {
  return (
    <div className="min-h-screen h-screen bg-background p-4 overflow-hidden">
      <div className="max-w-7xl mx-auto h-full flex flex-col">
        {/* Header */}
        <PosterHeader />
        
        {/* Main Content Grid */}
        <div className="flex-1 grid grid-cols-12 gap-4 min-h-0">
          {/* Left Column - Sleep Stages & HR/HRV */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-4">
            <div className="flex-1">
              <SleepStagesChart />
            </div>
            <div className="flex-1">
              <HeartRateHRVChart />
            </div>
          </div>
          
          {/* Center Column - Quality Score & Methodology */}
          <div className="col-span-12 lg:col-span-3 flex flex-col gap-4">
            <div className="flex-1">
              <SleepQualityScore />
            </div>
            <div className="flex-1">
              <MethodologyPanel />
            </div>
          </div>
          
          {/* Right Column - Feature Importance */}
          <div className="col-span-12 lg:col-span-4 flex flex-col">
            <FeatureImportanceChart />
          </div>
        </div>
        
        {/* Footer */}
        <footer className="py-2 text-center">
          <p className="text-xs text-muted-foreground">
            Sleep Quality Prediction Research • Data Science & Machine Learning Application
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
