
import { Home, BarChart2, Star, History, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const NavItem = ({ icon, label, active, onClick }: NavItemProps) => (
  <button
    onClick={onClick}
    className={cn("nav-item", active && "active")}
  >
    {icon}
    <span className="text-xs mt-1">{label}</span>
  </button>
);

const Navigation = () => {
  return (
    <nav className="flex justify-center md:justify-start space-x-8">
      <NavItem icon={<Home className="w-5 h-5" />} label="Home" active />
      <NavItem icon={<BarChart2 className="w-5 h-5" />} label="Statistics" />
      <NavItem icon={<Star className="w-5 h-5" />} label="Favorites" />
      <NavItem icon={<History className="w-5 h-5" />} label="Recent" />
      <NavItem icon={<Settings className="w-5 h-5" />} label="Settings" />
    </nav>
  );
};

export default Navigation;
