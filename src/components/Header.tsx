
import { useState } from "react";
import { Button } from "./ui/button";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-[#CCFF00]/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          winmix<span className="text-[#CCFF00]">.hu</span>
        </div>
        <div className="flex items-center gap-4">
          {!isLoggedIn ? (
            <Button className="bg-[#CCFF00] text-black hover:bg-[#CCFF00]/90">
              Bejelentkezés
            </Button>
          ) : (
            <div className="flex items-center gap-4">
              <span className="text-sm">Üdvözlünk!</span>
              <Button variant="outline" className="border-[#CCFF00]/20 hover:bg-[#CCFF00]/10">
                Kijelentkezés
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
