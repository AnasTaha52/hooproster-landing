import { Helmet } from "react-helmet-async";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import HeroBanner from "@/components/dashboard/HeroBanner";
import ScoutingReports from "@/components/dashboard/ScoutingReports";
import ServiceExplanation from "@/components/dashboard/ServiceExplanation";
import PricingCard from "@/components/dashboard/PricingCard";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Hooproster - Professional Basketball Scouting Reports</title>
        <meta
          name="description"
          content="In-depth player evaluations, game breakdowns, and data-driven basketball insights delivered directly to your inbox. Professional scouting for the modern game."
        />
        <meta
          name="keywords"
          content="basketball scouting, player reports, NBA draft, basketball analytics, player evaluation"
        />
        <link rel="canonical" href="https://hooproster.substack.com" />
      </Helmet>

      <DashboardLayout>
        <HeroBanner />
        <ScoutingReports />
        <ServiceExplanation />
        <PricingCard />
      </DashboardLayout>
    </>
  );
};

export default Index;
