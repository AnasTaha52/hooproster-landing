import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

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

      <main className="min-h-screen bg-background pb-20 md:pb-0">
        <Navbar />
        <Hero />
        <Features />
        <Pricing />
        <Newsletter />
        <Footer />
        <StickyMobileCTA />
      </main>
    </>
  );
};

export default Index;
