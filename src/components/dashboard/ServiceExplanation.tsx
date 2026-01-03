import { FileText, TrendingUp, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: FileText,
    title: "Detailed Player Reports",
    description: "Comprehensive breakdowns of skills, tendencies, and projection models for prospects at every level.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Analysis",
    description: "Advanced metrics that go beyond the box score to reveal true player value and potential.",
  },
  {
    icon: Users,
    title: "Draft Coverage",
    description: "Full coverage of upcoming drafts with rankings, comparisons, and expert insights.",
  },
  {
    icon: Zap,
    title: "Instant Updates",
    description: "Real-time scouting intel delivered to your inbox the moment reports are ready.",
  },
];

const ServiceExplanation = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-8"
    >
      <div className="dashboard-card p-6 md:p-8">
        <h3 className="text-lg font-bold tracking-wide mb-2">ABOUT HOOPROSTER</h3>
        <p className="text-muted-foreground text-sm mb-8 max-w-2xl">
          Professional basketball scouting for the modern era. We deliver in-depth player evaluations, 
          game breakdowns, and data-driven insights directly to your inbox.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ServiceExplanation;
