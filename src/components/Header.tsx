
import { useState } from "react";
import { Button } from "./ui/button";
import { User, LogOut, Menu } from "lucide-react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-[#CCFF00]/10 shadow-lg">
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="text-xl font-bold tracking-tight">
            win<span className="text-[#CCFF00]">mix</span>
            <span className="text-[#CCFF00]/80 text-sm ml-0.5">.hu</span>
          </div>
        </div>

        {/* Auth Section */}
        <div className="flex items-center gap-4">
          {!isLoggedIn ? (
            <Button 
              className="bg-[#CCFF00] text-black font-medium hover:bg-[#CCFF00]/90 transition-all duration-300"
            >
              <User className="w-4 h-4 mr-2" />
              Bejelentkezés
            </Button>
          ) : (
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">Üdvözlünk!</span>
              <Button 
                variant="outline" 
                className="border-[#CCFF00]/20 hover:bg-[#CCFF00]/10 transition-all duration-300"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Kijelentkezés
              </Button>
            </div>
          )}

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon"
            className="lg:hidden hover:bg-white/5"
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
