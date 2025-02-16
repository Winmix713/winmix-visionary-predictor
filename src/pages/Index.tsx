
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import MatchSelection from "@/components/MatchSelection";
import PredictionResults from "@/components/PredictionResults";

const Index = () => {
  const [showPredictions, setShowPredictions] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A]">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-[#CCFF00]">Mérkőzések kiválasztása</h1>
        </div>

        <MatchSelection />

        {showPredictions && <PredictionResults />}

        <Button
          onClick={() => setShowPredictions(true)}
          className="w-full mt-8 py-3 bg-[#CCFF00] text-black font-bold rounded-md hover:bg-[#CCFF00]/90 transition-colors"
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
