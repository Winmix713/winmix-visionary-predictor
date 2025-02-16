
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const PredictionResults = () => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6 text-[#CCFF00]">Predikciók eredménye</h2>
      
      <Card className="bg-[#141414]/50 backdrop-blur-md border border-[#CCFF00]/20 p-6 rounded-xl">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-white">Premier League Head-to-Head</h3>
          <button className="text-[#CCFF00] hover:text-[#CCFF00]/80">
            <Star className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <img src="/lovable-uploads/c043736f-9c1e-4f10-9d16-08c8cc7a5989.png" alt="Home Team" className="w-12 h-12 mx-auto mb-2" />
            <div className="text-sm font-medium">Manchester City</div>
            <div className="text-2xl font-bold mt-2">67.4%</div>
            <div className="text-xs text-gray-400">Win Probability</div>
          </div>
          
          <div className="text-center flex flex-col justify-center">
            <div className="text-3xl font-bold text-[#CCFF00]">43</div>
            <div className="text-sm text-gray-400">Matches</div>
          </div>

          <div className="text-center">
            <img src="/lovable-uploads/3f92df3a-8bb3-4988-ba7d-ebceb7fbbb0a.png" alt="Away Team" className="w-12 h-12 mx-auto mb-2" />
            <div className="text-sm font-medium">Arsenal</div>
            <div className="text-2xl font-bold mt-2">23.3%</div>
            <div className="text-xs text-gray-400">Win Probability</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#1A1A1A]/50 p-4 rounded-lg">
            <div className="text-sm text-gray-400">Average Goals</div>
            <div className="text-2xl font-bold text-[#CCFF00]">2.7</div>
          </div>
          <div className="bg-[#1A1A1A]/50 p-4 rounded-lg">
            <div className="text-sm text-gray-400">Both Teams Scored</div>
            <div className="text-2xl font-bold text-[#CCFF00]">44.19%</div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-[#CCFF00]/20">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-400">Prediction Score</div>
            <Badge className="bg-[#CCFF00] text-black">7.89</Badge>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PredictionResults;
