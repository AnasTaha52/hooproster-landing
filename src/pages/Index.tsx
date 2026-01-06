import { Helmet } from "react-helmet-async";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import CompetitiveEdge from "@/components/landing/CompetitiveEdge";
import ContentPreview from "@/components/landing/ContentPreview";
import Pricing from "@/components/landing/Pricing";
import Newsletter from "@/components/landing/Newsletter";
import Footer from "@/components/landing/Footer";
import MobileCTA from "@/components/landing/MobileCTA";
import useSiteContent from "@/hooks/useSiteContent";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, X } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const { error } = useSiteContent();
  const [dismissedError, setDismissedError] = useState(false);

  return (
    <>
      <Helmet>
        <title>Hooproster - Elite Basketball Scouting Delivered to Your Inbox</title>
        <meta
          name="description"
          content="Professional basketball scouting reports, player evaluations, and data-driven insights delivered directly to your inbox via Substack."
        />
        <meta
          name="keywords"
          content="basketball scouting, player reports, NBA draft, basketball analytics, player evaluation, prospect rankings"
        />
        <link rel="canonical" href="https://hooproster.substack.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {error && !dismissedError && (
          <Alert className="fixed top-20 left-1/2 -translate-x-1/2 max-w-2xl z-50 mx-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="flex items-center justify-between gap-4">
              <span className="text-sm">{error}</span>
              <button
                onClick={() => setDismissedError(true)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </AlertDescription>
          </Alert>
        )}
        <Header />
        <main className="pb-20 md:pb-0">
          <Hero />
          <CompetitiveEdge />
          <ContentPreview />
          <Pricing />
          <Newsletter />
        </main>
        <Footer />
        <MobileCTA />
      </div>
    </>
  );
};

export default Index;
