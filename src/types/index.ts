
export interface Team {
  id: string;
  name: string;
  logoUrl: string;
  weight?: number;
  league: string;
}

export interface Match {
  homeTeam: Team | null;
  awayTeam: Team | null;
}

export interface HeadToHeadStats {
  homeWins: number;
  draws: number;
  awayWins: number;
}

export interface AverageGoals {
  averageHomeGoals: number;
  averageAwayGoals: number;
  averageTotalGoals: number;
}

export interface TeamAnalysis {
  matchesCount: number;
  headToHeadStats: HeadToHeadStats;
  averageGoals: AverageGoals;
  bothTeamsScoredPercentage: number;
  homeFormIndex: number;
  awayFormIndex: number;
  predictionScore?: number;
}

export interface Prediction {
  match: Match;
  teamAnalysis: TeamAnalysis;
}

export interface UserSettings {
  darkMode: boolean;
  language: 'hu' | 'en';
  notificationsEnabled: boolean;
}

export interface User {
  email: string;
  username: string;
}
