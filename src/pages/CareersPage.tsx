import { motion } from "framer-motion";
import CareerCard from "@/components/CareerCard";
import { careers, categories } from "@/data/careers";
import { useState } from "react";

export default function CareersPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const filtered = activeCategory ? careers.filter((c) => c.category === activeCategory) : careers;

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

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((career) => (
            <CareerCard key={career.id} {...career} />
          ))}
        </div>
      </div>
    </div>
  );
}
