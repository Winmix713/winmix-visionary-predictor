
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import { MatchSelector } from "@/components/MatchSelector";
import PredictionResults from "@/components/PredictionResults";
import { type Match } from "@/types";
import { useTimer } from "@/hooks/useTimer";

const Index = () => {
  const [showPredictions, setShowPredictions] = useState(false);
  const [selectedMatches, setSelectedMatches] = useState<Match[]>([]);
  const { timeLeft, formatTime } = useTimer();

  const handleMatchSelect = (matches: Match[]) => {
    setSelectedMatches(matches);
  };

  const handleRunPredictions = () => {
    if (selectedMatches.some(match => match.homeTeam && match.awayTeam)) {
      setShowPredictions(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A]">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-[#CCFF00]">Mérkőzések kiválasztása</h1>
          <div className="text-sm text-gray-400">
            Hátralévő idő: {formatTime()}
          </div>
        </div>

        <MatchSelector onMatchSelect={handleMatchSelect} />

        {showPredictions && <PredictionResults />}

        <Button
          onClick={handleRunPredictions}
          className="w-full mt-8 py-3 bg-[#CCFF00] text-black font-bold rounded-md hover:bg-[#CCFF00]/90 transition-colors disabled:bg-gray-600 disabled:text-gray-400"
          disabled={!selectedMatches.some(match => match.homeTeam && match.awayTeam)}
          size="lg"
        >
          Predikciók futtatása
        </Button>
      </main>

      <footer className="glass border-t border-[#CCFF00]/20 py-6">
        <div className="container mx-auto px-4">
          <Navigation />
        </div>
      </footer>
    </div>
  );
};

export default Index;
