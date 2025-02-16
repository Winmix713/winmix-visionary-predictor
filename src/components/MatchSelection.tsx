
import { Select } from "@/components/ui/select";
import { Card } from "@/components/ui/card";

const MatchSelection = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {[1, 2, 3, 4].map((index) => (
        <Card key={index} className="bg-[#141414]/50 backdrop-blur-md border border-[#CCFF00]/20 p-4 rounded-xl">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/lovable-uploads/c043736f-9c1e-4f10-9d16-08c8cc7a5989.png" alt="Team Logo" className="w-6 h-6" />
              <select className="w-full bg-[#1A1A1A] border border-[#CCFF00]/20 rounded-md p-2 text-white">
                <option>Válassz hazai csapatot</option>
                <option>Manchester City</option>
                <option>Liverpool</option>
                <option>Arsenal</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <img src="/lovable-uploads/3f92df3a-8bb3-4988-ba7d-ebceb7fbbb0a.png" alt="Team Logo" className="w-6 h-6" />
              <select className="w-full bg-[#1A1A1A] border border-[#CCFF00]/20 rounded-md p-2 text-white">
                <option>Válassz vendég csapatot</option>
                <option>Tottenham</option>
                <option>Chelsea</option>
                <option>Manchester United</option>
              </select>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default MatchSelection;
