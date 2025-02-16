
export const TIMER_DURATION = 300; // 5 minutes in seconds

export const MATCH_SLOTS = 4;

export const TEAMS = [
  {
    id: "mc",
    name: "Manchester City",
    logoUrl: "/lovable-uploads/c043736f-9c1e-4f10-9d16-08c8cc7a5989.png",
    weight: 0.85,
    league: "premier-league"
  },
  {
    id: "ars",
    name: "Arsenal",
    logoUrl: "/lovable-uploads/3f92df3a-8bb3-4988-ba7d-ebceb7fbbb0a.png",
    weight: 0.82,
    league: "premier-league"
  },
  {
    id: "liv",
    name: "Liverpool",
    logoUrl: "/lovable-uploads/c043736f-9c1e-4f10-9d16-08c8cc7a5989.png",
    weight: 0.83,
    league: "premier-league"
  },
  {
    id: "tot",
    name: "Tottenham",
    logoUrl: "/lovable-uploads/3f92df3a-8bb3-4988-ba7d-ebceb7fbbb0a.png",
    weight: 0.78,
    league: "premier-league"
  },
  {
    id: "rm",
    name: "Real Madrid",
    logoUrl: "/lovable-uploads/c043736f-9c1e-4f10-9d16-08c8cc7a5989.png",
    weight: 0.86,
    league: "la-liga"
  },
  {
    id: "fcb",
    name: "Barcelona",
    logoUrl: "/lovable-uploads/3f92df3a-8bb3-4988-ba7d-ebceb7fbbb0a.png",
    weight: 0.84,
    league: "la-liga"
  }
] as const;

export const LEAGUES = [
  {
    id: "premier-league",
    name: "Premier League",
    country: "England"
  },
  {
    id: "la-liga",
    name: "La Liga",
    country: "Spain"
  },
  {
    id: "bundesliga",
    name: "Bundesliga",
    country: "Germany"
  }
] as const;

export const DEFAULT_USER_SETTINGS: UserSettings = {
  darkMode: true,
  language: "hu",
  notificationsEnabled: true
};
