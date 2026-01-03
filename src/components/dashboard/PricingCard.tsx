import { Check, X, ArrowRight, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const SUBSTACK_URL = "https://hooproster.substack.com";

const features = [
  { text: "Weekly roundup newsletter", free: true, pro: true },
  { text: "Public player previews", free: true, pro: true },
  { text: "Community access", free: true, pro: true },
  { text: "Full player database", free: false, pro: true },
  { text: "Video breakdowns", free: false, pro: true },
  { text: "Exclusive scouting reports", free: false, pro: true },
  { text: "Direct scout access", free: false, pro: true },
];

const PricingCard = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-8 pb-24 lg:pb-8"
    >
      <div className="dashboard-card p-6 md:p-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          {/* Left: Feature comparison */}
          <div className="flex-1">
            <h3 className="text-lg font-bold tracking-wide mb-2">SUBSCRIPTION TIERS</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Start free and upgrade when you're ready for full access.
            </p>

            {/* Feature Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 text-sm font-semibold">Feature</th>
                    <th className="text-center py-3 px-4 text-sm font-semibold w-20">Free</th>
                    <th className="text-center py-3 pl-4 text-sm font-semibold text-primary w-20">Pro</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature) => (
                    <tr key={feature.text} className="border-b border-border/50">
                      <td className="py-3 pr-4 text-sm">{feature.text}</td>
                      <td className="py-3 px-4 text-center">
                        {feature.free ? (
                          <Check className="w-4 h-4 text-primary mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-muted-foreground/50 mx-auto" />
                        )}
                      </td>
                      <td className="py-3 pl-4 text-center">
                        <Check className="w-4 h-4 text-primary mx-auto" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right: CTA Card */}
          <div className="lg:w-80">
            <div className="bg-secondary rounded-xl p-6 border border-primary/30">
              <div className="text-center mb-4">
                <span className="text-3xl font-bold">$12</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-sm text-muted-foreground text-center mb-6">
                Unlock full access to all scouting reports, player database, and exclusive content.
              </p>
              <Button
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12 glow-primary"
              >
                <a href={SUBSTACK_URL} target="_blank" rel="noopener noreferrer">
                  Unlock All Access via Substack
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <div className="flex items-center justify-center gap-2 mt-4 text-xs text-muted-foreground">
                <Lock className="w-3 h-3" />
                <span>Secure payments via Substack</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default PricingCard;
