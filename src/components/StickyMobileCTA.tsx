import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const SUBSTACK_URL = "https://hooproster.substack.com";

const StickyMobileCTA = () => {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, duration: 0.3 }}
      className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/90 backdrop-blur-xl border-t border-border md:hidden"
    >
      <Button
        asChild
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 font-semibold glow-primary group"
      >
        <a href={SUBSTACK_URL} target="_blank" rel="noopener noreferrer">
          Subscribe Now
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </Button>
    </motion.div>
  );
};

export default StickyMobileCTA;
