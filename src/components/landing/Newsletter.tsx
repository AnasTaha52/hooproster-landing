import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const SUBSTACK_URL = "https://hooproster.substack.com";

const Newsletter = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="dashboard-card p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />

          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-primary" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              Join 500+ Scouts & Analysts
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Get professional scouting reports delivered to your inbox. Start with our free weekly roundup.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary px-8 h-12 font-semibold"
            >
              <a href={SUBSTACK_URL} target="_blank" rel="noopener noreferrer">
                Subscribe on Substack
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>

            <p className="text-xs text-muted-foreground mt-4">
              Free to subscribe. Upgrade anytime.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
