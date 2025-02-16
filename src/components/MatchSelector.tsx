
import { useState } from 'react';
import { Card } from './ui/card';
import { type Match, type Team } from '@/types';
import { TEAMS, MATCH_SLOTS } from '@/constants';

interface MatchSelectorProps {
  onMatchSelect: (matches: Match[]) => void;
}

export function MatchSelector({ onMatchSelect }: MatchSelectorProps) {
  const [selectedMatches, setSelectedMatches] = useState<Match[]>(
    Array(MATCH_SLOTS).fill(null).map(() => ({ homeTeam: null, awayTeam: null }))
  );
  const [searchTerm, setSearchTerm] = useState('');
  const [leagueFilter, setLeagueFilter] = useState('');

  const filteredTeams = TEAMS.filter(team =>
    team.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (leagueFilter === '' || team.league === leagueFilter)
  );

  const handleTeamSelect = (index: number, position: 'homeTeam' | 'awayTeam', teamId: string) => {
    const team = TEAMS.find(t => t.id === teamId);
    const newMatches = [...selectedMatches];
    newMatches[index] = {
      ...newMatches[index],
      [position]: team || null
    };
    setSelectedMatches(newMatches);
    onMatchSelect(newMatches);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Keresés..."
          className="w-full p-2 bg-[#141414] border border-[#CCFF00]/20 rounded-md text-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="p-2 bg-[#141414] border border-[#CCFF00]/20 rounded-md text-white"
          value={leagueFilter}
          onChange={(e) => setLeagueFilter(e.target.value)}
        >
          <option value="">Minden liga</option>
          <option value="premier-league">Premier League</option>
          <option value="la-liga">La Liga</option>
          <option value="bundesliga">Bundesliga</option>
        </select>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {selectedMatches.map((match, index) => (
          <Card key={index} className="glass-card">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <select
                  className="w-full p-2 bg-[#141414] border border-[#CCFF00]/20 rounded-md text-white"
                  value={match.homeTeam?.id || ''}
                  onChange={(e) => handleTeamSelect(index, 'homeTeam', e.target.value)}
                >
                  <option value="">Válassz hazai csapatot</option>
                  {filteredTeams.map(team => (
                    <option key={team.id} value={team.id}>{team.name}</option>
                  ))}
                </select>
                {match.homeTeam && (
                  <img
                    src={match.homeTeam.logoUrl}
                    alt={match.homeTeam.name}
                    className="w-8 h-8"
                  />
                )}
              </div>

              <div className="flex items-center gap-2">
                <select
                  className="w-full p-2 bg-[#141414] border border-[#CCFF00]/20 rounded-md text-white"
                  value={match.awayTeam?.id || ''}
                  onChange={(e) => handleTeamSelect(index, 'awayTeam', e.target.value)}
                >
                  <option value="">Válassz vendég csapatot</option>
                  {filteredTeams.map(team => (
                    <option key={team.id} value={team.id}>{team.name}</option>
                  ))}
                </select>
                {match.awayTeam && (
                  <img
                    src={match.awayTeam.logoUrl}
                    alt={match.awayTeam.name}
                    className="w-8 h-8"
                  />
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
