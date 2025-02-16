
import { useState } from "react";
import { Button } from "./ui/button";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 glass border-b border-accent/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          winmix<span className="text-accent">.hu</span>
        </div>
        <div className="flex items-center gap-4">
          {!isLoggedIn ? (
            <Button variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Sign In
            </Button>
          ) : (
            <div className="flex items-center gap-4">
              <span className="text-sm">Welcome back!</span>
              <Button variant="outline" className="border-accent/20 hover:bg-accent/10">
                Sign Out
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
