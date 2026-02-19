import { motion } from "framer-motion";
import CareerCard from "@/components/CareerCard";
import { careers, categories, locations } from "@/data/careers";
import { useState } from "react";
import { MapPin } from "lucide-react";

export default function CareersPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeLocation, setActiveLocation] = useState<string | null>(null);

  const filtered = careers.filter((c) => {
    if (activeCategory && c.category !== activeCategory) return false;
    if (activeLocation && !c.locations.includes(activeLocation)) return false;
    return true;
  });

  return (
    <div className="py-20">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Explore Career Paths
          </h1>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Browse in-demand careers with detailed roadmaps, salary data, and certification recommendations.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              !activeCategory ? "accent-gradient text-accent-foreground" : "bg-secondary text-secondary-foreground hover:bg-muted"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat ? "accent-gradient text-accent-foreground" : "bg-secondary text-secondary-foreground hover:bg-muted"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Location Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <div className="flex items-center gap-1 text-muted-foreground mr-1">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">Location:</span>
          </div>
          <button
            onClick={() => setActiveLocation(null)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              !activeLocation ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-muted"
            }`}
          >
            All
          </button>
          {locations.map((loc) => (
            <button
              key={loc}
              onClick={() => setActiveLocation(loc)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                activeLocation === loc ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-muted"
              }`}
            >
              {loc}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((career) => (
            <CareerCard key={career.id} {...career} />
          ))}
        </div>
      </div>
    </div>
  );
}
