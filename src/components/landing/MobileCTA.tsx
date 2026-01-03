import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const SUBSTACK_URL = "https://hooproster.substack.com";

const MobileCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-xl border-t border-border md:hidden z-40">
      <Button
        asChild
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-primary h-12 font-semibold"
      >
        <a href={SUBSTACK_URL} target="_blank" rel="noopener noreferrer">
          Subscribe Now
          <ArrowRight className="ml-2 w-4 h-4" />
        </a>
      </Button>
    </div>
  );
};

export default MobileCTA;
