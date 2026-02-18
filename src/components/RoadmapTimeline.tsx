import { motion } from "framer-motion";
import { GraduationCap, Wrench, Award, Briefcase } from "lucide-react";
import type { Career } from "@/data/careers";

const typeConfig = {
  education: { icon: GraduationCap, color: "bg-blue-500" },
  skill: { icon: Wrench, color: "bg-accent" },
  certification: { icon: Award, color: "bg-emerald-500" },
  job: { icon: Briefcase, color: "bg-violet-500" },
};

export default function RoadmapTimeline({ milestones }: { milestones: Career["milestones"] }) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

      <div className="space-y-8">
        {milestones.map((m, i) => {
          const config = typeConfig[m.type];
          const Icon = config.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-16"
            >
              {/* Node */}
              <div className={`absolute left-3.5 w-5 h-5 rounded-full ${config.color} flex items-center justify-center ring-4 ring-background`}>
                <Icon className="h-3 w-3 text-primary-foreground" />
              </div>

              <div className="bg-card rounded-xl p-5 card-elevated border border-border">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{m.type}</span>
                    <h4 className="font-heading font-semibold text-foreground mt-1">{m.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{m.description}</p>
                  </div>
                  <span className="text-xs font-medium bg-secondary text-secondary-foreground px-3 py-1 rounded-full whitespace-nowrap">
                    {m.duration}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
