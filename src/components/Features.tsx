import { Search, FileText, Zap, BarChart3, Users, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const features = [
  {
    icon: Search,
    title: "Deep Talent Discovery",
    description: "Uncover hidden gems and rising stars before they hit the mainstream radar with our comprehensive scouting network.",
  },
  {
    icon: FileText,
    title: "Detailed Player Reports",
    description: "Get complete breakdowns of skills, tendencies, and potential with our proprietary evaluation methodology.",
  },
  {
    icon: Zap,
    title: "Instant Inbox Delivery",
    description: "Fresh scouting intel delivered straight to your inbox the moment it's ready. Never miss a beat.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Analysis",
    description: "Advanced metrics and statistical models that go beyond the box score to reveal true player value.",
  },
  {
    icon: Users,
    title: "Draft Coverage",
    description: "Comprehensive coverage of draft prospects with rankings, comparisons, and projection models.",
  },
  {
    icon: Shield,
    title: "Exclusive Access",
    description: "Pro subscribers get direct access to our scouts for Q&A and custom player analysis requests.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
            The Scouting Edge
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to stay ahead of the game with professional-grade basketball intelligence.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300 h-full group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
