import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import DashboardHeader from "./DashboardHeader";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="lg:pl-64">
        <DashboardHeader />
        <main className="p-4 md:p-6 pb-24 lg:pb-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
