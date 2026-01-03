import { Home, Database, Eye, Newspaper, Settings, HelpCircle, ChevronRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SUBSTACK_URL = "https://hooproster.substack.com";

const navItems = [
  { icon: Home, label: "Homepage", active: true },
  { icon: Database, label: "Player Database", active: false },
  { icon: Eye, label: "Watchlist", active: false },
  { icon: Newspaper, label: "News", active: false },
];

const bottomItems = [
  { icon: Settings, label: "Settings" },
  { icon: HelpCircle, label: "Support" },
];

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-card border border-border lg:hidden"
        aria-label="Open menu"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-sidebar border-r border-sidebar-border z-50 flex flex-col transition-transform duration-300 lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button for mobile */}
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-sidebar-accent lg:hidden"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Logo */}
        <div className="p-6 pb-8">
          <a href={SUBSTACK_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-wide text-primary">HOOPROSTER</span>
          </a>
        </div>

        {/* Main Navigation */}
        <nav className="flex-1 px-4">
          <p className="text-xs font-medium text-muted-foreground mb-3 px-3">MAIN</p>
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={SUBSTACK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                    item.active
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-sidebar-accent"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium text-sm">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom Navigation */}
        <div className="px-4 pb-4">
          <ul className="space-y-1">
            {bottomItems.map((item) => (
              <li key={item.label}>
                <a
                  href={SUBSTACK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-sidebar-accent transition-all"
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium text-sm">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* User Section */}
        <div className="p-4 border-t border-sidebar-border">
          <a
            href={SUBSTACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-sidebar-accent transition-all"
          >
            <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-primary font-semibold text-sm">U</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">Guest User</p>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </a>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-card border-t border-border lg:hidden">
        <div className="flex items-center justify-around py-2">
          {navItems.slice(0, 4).map((item) => (
            <a
              key={item.label}
              href={SUBSTACK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg ${
                item.active ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
