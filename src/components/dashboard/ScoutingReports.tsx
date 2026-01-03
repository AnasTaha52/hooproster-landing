import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

const SUBSTACK_URL = "https://hooproster.substack.com";

const reports = [
  {
    day: "Monday",
    date: "2025-01-03 9:00 AM (EST)",
    title: "NBA Draft 2026",
    tier: "PRO",
    highlights: [
      { label: "Cooper Flagg", value: "Duke" },
      { label: "Ace Bailey", value: "Rutgers" },
    ],
  },
  {
    day: "Friday",
    date: "2024-12-27 10:30 AM (EST)",
    title: "G-League Prospects",
    tier: "PRO",
    highlights: [
      { label: "Top Sleepers", value: "12" },
      { label: "Rising Stars", value: "8" },
    ],
  },
  {
    day: "Wednesday",
    date: "2024-12-25 8:00 AM (EST)",
    title: "International Watch",
    tier: "FREE",
    highlights: [
      { label: "Europe", value: "15" },
      { label: "Australia", value: "6" },
    ],
  },
  {
    day: "Sunday",
    date: "2024-12-22 11:00 AM (EST)",
    title: "Weekly Roundup",
    tier: "FREE",
    highlights: [
      { label: "Updates", value: "24" },
      { label: "Rankings", value: "Top 50" },
    ],
  },
];

const ScoutingReports = () => {
  const [page, setPage] = useState(1);
  const totalPages = 2;

  return (
    <section className="mt-8">
      <h3 className="text-lg font-bold tracking-wide mb-6">LATEST REPORTS</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {reports.map((report, index) => (
          <motion.div
            key={report.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="dashboard-card p-4 hover:border-primary/50 transition-all"
          >
            {/* Header */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-bold">{report.day}</h4>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    report.tier === "PRO"
                      ? "bg-primary/20 text-primary"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {report.tier}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">{report.date}</p>
            </div>

            {/* Highlights */}
            <div className="space-y-2 mb-4">
              {report.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between py-2 border-b border-border last:border-0"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-3 bg-muted rounded-sm" />
                    <span className="text-sm">{highlight.label}</span>
                  </div>
                  <span className="text-sm font-semibold">{highlight.value}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              asChild
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-9"
            >
              <a href={SUBSTACK_URL} target="_blank" rel="noopener noreferrer">
                View Full Report
              </a>
            </Button>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-end gap-3 mt-6">
        <span className="text-sm text-muted-foreground">
          {page} of {totalPages}
        </span>
        <div className="flex gap-1">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="p-2 rounded-lg border border-border hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="p-2 rounded-lg border border-border hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ScoutingReports;
