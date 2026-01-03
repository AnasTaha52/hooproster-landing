import { Search, Bell, Shuffle, User } from "lucide-react";
import { Input } from "@/components/ui/input";

const SUBSTACK_URL = "https://hooproster.substack.com";

const DashboardHeader = () => {
  return (
    <header className="sticky top-0 z-30 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-between h-16 px-6">
        {/* Page Title - Desktop */}
        <h1 className="text-xl font-semibold hidden lg:block">Homepage</h1>
        
        {/* Spacer for mobile */}
        <div className="lg:hidden w-10" />

        {/* Search Bar */}
        <div className="flex-1 max-w-xl mx-4 lg:mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search players, teams, and leagues"
              className="w-full pl-10 bg-secondary border-border focus:border-primary h-10"
            />
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-2">
          <button className="p-2.5 rounded-lg bg-secondary hover:bg-muted transition-colors">
            <Shuffle className="w-4 h-4" />
          </button>
          <button className="p-2.5 rounded-lg bg-secondary hover:bg-muted transition-colors relative">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full" />
          </button>
          <a
            href={SUBSTACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-secondary border-2 border-primary/50 flex items-center justify-center hover:border-primary transition-colors"
          >
            <User className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
