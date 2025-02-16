
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

interface MatchCardProps {
  homeTeam: string;
  awayTeam: string;
  league: string;
  date: string;
  prediction?: {
    homeScore: number;
    awayScore: number;
    confidence: number;
  };
}

const MatchCard = ({ homeTeam, awayTeam, league, date, prediction }: MatchCardProps) => {
  return (
    <Card className="glass-card p-6 hover-effect">
      <Badge className="mb-4 bg-accent/10 text-accent border-none">
        {league}
      </Badge>
      <div className="flex justify-between items-center gap-4 mb-4">
        <span className="font-semibold">{homeTeam}</span>
        <span className="text-muted-foreground">vs</span>
        <span className="font-semibold">{awayTeam}</span>
      </div>
      <div className="text-sm text-muted-foreground">
        {date}
      </div>
      {prediction && (
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">
              {prediction.homeScore} - {prediction.awayScore}
            </span>
            <Badge variant="outline" className="border-accent/20">
              {prediction.confidence}% confidence
            </Badge>
          </div>
        </div>
      )}
    </Card>
  );
};

export default MatchCard;
