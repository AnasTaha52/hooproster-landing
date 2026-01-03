import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const SUBSTACK_URL = "https://hooproster.substack.com";

const Newsletter = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
            <Mail className="w-8 h-8 text-primary" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Join the Scouting Network
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Subscribe to get free weekly insights and be the first to know when new scouting reports drop.
          </p>

          {/* Substack Embed Placeholder */}
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
            <div className="max-w-md mx-auto">
              <p className="text-sm text-muted-foreground mb-6">
                Get professional scouting content delivered to your inbox
              </p>
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 glow-primary transition-all px-8 h-12 font-semibold group"
              >
                <a href={SUBSTACK_URL} target="_blank" rel="noopener noreferrer">
                  Subscribe on Substack
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <p className="text-xs text-muted-foreground mt-4">
                Free subscribers get weekly roundups. Upgrade anytime for full access.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
