import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Code, BarChart3, Palette, Shield, Rocket, Cloud } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code, BarChart3, Palette, Shield, Rocket, Cloud,
};

interface Props {
  id: string;
  title: string;
  shortDescription: string;
  icon: string;
  category: string;
  demandLevel: string;
  salaryRange: { entry: string; mid: string; senior: string };
}

export default function CareerCard({ id, title, shortDescription, icon, category, demandLevel, salaryRange }: Props) {
  const Icon = iconMap[icon] || Code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Link to={`/careers/${id}`} className="block group">
        <div className="bg-card rounded-2xl p-6 border border-border card-elevated h-full flex flex-col">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl accent-gradient flex items-center justify-center">
              <Icon className="h-6 w-6 text-accent-foreground" />
            </div>
            <span className="text-xs font-semibold text-muted-foreground bg-secondary px-3 py-1 rounded-full">{category}</span>
          </div>

          <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">{title}</h3>
          <p className="text-sm text-muted-foreground mb-4 flex-1">{shortDescription}</p>

          <div className="flex items-center justify-between border-t border-border pt-4 mt-auto">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <TrendingUp className="h-3.5 w-3.5 text-accent" />
              <span>{demandLevel} Demand</span>
            </div>
            <span className="text-xs font-semibold text-foreground">{salaryRange.mid}</span>
          </div>

          <div className="flex items-center gap-1 text-sm font-semibold text-accent mt-3 group-hover:gap-2 transition-all">
            View Roadmap <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
