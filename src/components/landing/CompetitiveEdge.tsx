import { Search, FileText, Zap } from "lucide-react";
import { motion } from "framer-motion";

const advantages = [
  {
    icon: Search,
    title: "Deep Talent Discovery",
    description: "Uncover hidden gems before they hit the mainstream radar. Our scouting network spans from high school to international leagues.",
  },
  {
    icon: FileText,
    title: "Detailed Player Reports",
    description: "Comprehensive breakdowns with advanced metrics, video analysis, and projection models that go beyond surface-level stats.",
  },
  {
    icon: Zap,
    title: "Instant Inbox Delivery",
    description: "Get actionable scouting intel delivered directly to you the moment reports drop. No login required, just open and read.",
  },
];

const CompetitiveEdge = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            The Competitive Edge
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Why scouts, analysts, and basketball enthusiasts choose Hooproster over traditional scouting services.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group dashboard-card p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <advantage.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitiveEdge;
