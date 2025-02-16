
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import MatchCard from "@/components/MatchCard";

const Index = () => {
  const sampleMatches = [
    {
      homeTeam: "Arsenal",
      awayTeam: "Chelsea",
      league: "Premier League",
      date: "2024-03-20 20:00",
      prediction: {
        homeScore: 2,
        awayScore: 1,
        confidence: 75,
      },
    },
    {
      homeTeam: "Barcelona",
      awayTeam: "Real Madrid",
      league: "La Liga",
      date: "2024-03-21 21:00",
      prediction: {
        homeScore: 2,
        awayScore: 2,
        confidence: 65,
      },
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-2">Match Predictions</h1>
          <p className="text-muted-foreground">Select matches to get AI-powered predictions</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-8">
          {sampleMatches.map((match, index) => (
            <MatchCard key={index} {...match} />
          ))}
        </div>

        <Button
          className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
          size="lg"
        >
          Run Predictions
        </Button>
      </main>

      <footer className="glass border-t border-accent/20 py-6">
        <div className="container mx-auto px-4">
          <Navigation />
        </div>
      </footer>
    </div>
  );
};

export default Index;
