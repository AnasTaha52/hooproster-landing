import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const SUBSTACK_URL = "https://hooproster.substack.com";

const HeroBanner = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden rounded-2xl border border-border"
    >
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(260 20% 4% / 0.95), hsl(260 20% 4% / 0.7), transparent),
            url('https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200&h=400&fit=crop&q=80')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="relative z-10 p-8 md:p-12 min-h-[280px] flex flex-col justify-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
        >
          WELCOME TO HOOPROSTER
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="flex flex-wrap gap-3"
        >
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary px-6 h-11 font-semibold"
          >
            <a href={SUBSTACK_URL} target="_blank" rel="noopener noreferrer">
              Subscribe on Substack
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-foreground/20 bg-foreground/5 hover:bg-foreground/10 px-6 h-11 font-semibold"
          >
            <a href={SUBSTACK_URL} target="_blank" rel="noopener noreferrer">
              View Free Reports
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroBanner;
