import { motion } from "framer-motion";
import { ExternalLink, Clock, Star, Filter } from "lucide-react";
import { careers } from "@/data/careers";
import { useState } from "react";

// Aggregate all certifications from careers
const allCerts = careers.flatMap((c) =>
  c.certifications.map((cert) => ({ ...cert, careerField: c.category, careerId: c.id }))
);

// Dedupe by name
const uniqueCerts = allCerts.filter((cert, i, arr) => arr.findIndex((c) => c.name === cert.name) === i);

const fields = [...new Set(allCerts.map((c) => c.careerField))];
const levels = ["Beginner", "Intermediate", "Associate", "Professional"];

export default function CertificationsPage() {
  const [fieldFilter, setFieldFilter] = useState<string | null>(null);
  const [levelFilter, setLevelFilter] = useState<string | null>(null);

  const filtered = uniqueCerts.filter((c) => {
    if (fieldFilter && c.careerField !== fieldFilter) return false;
    if (levelFilter && c.level !== levelFilter) return false;
    return true;
  });

  return (
    <div className="py-20">
      <div className="container max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Certification & Learning Hub
          </h1>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Curated certifications from trusted providers to boost your career credentials.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-10">
          <div>
            <p className="text-xs font-semibold text-muted-foreground mb-2 flex items-center gap-1">
              <Filter className="h-3 w-3" /> Field
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFieldFilter(null)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${!fieldFilter ? "accent-gradient text-accent-foreground" : "bg-secondary text-secondary-foreground"}`}
              >
                All
              </button>
              {fields.map((f) => (
                <button
                  key={f}
                  onClick={() => setFieldFilter(f)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${fieldFilter === f ? "accent-gradient text-accent-foreground" : "bg-secondary text-secondary-foreground"}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-muted-foreground mb-2">Level</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setLevelFilter(null)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${!levelFilter ? "accent-gradient text-accent-foreground" : "bg-secondary text-secondary-foreground"}`}
              >
                All
              </button>
              {levels.map((l) => (
                <button
                  key={l}
                  onClick={() => setLevelFilter(l)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${levelFilter === l ? "accent-gradient text-accent-foreground" : "bg-secondary text-secondary-foreground"}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Cert list */}
        <div className="space-y-4">
          {filtered.map((cert, i) => (
            <motion.a
              key={cert.name + cert.careerField}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center justify-between bg-card border border-border rounded-xl p-5 card-elevated group"
            >
              <div className="flex-1">
                <h3 className="font-heading font-semibold text-foreground group-hover:text-accent transition-colors">{cert.name}</h3>
                <div className="flex flex-wrap gap-3 mt-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Star className="h-3 w-3" />{cert.provider}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{cert.duration}</span>
                  <span className="bg-secondary px-2 py-0.5 rounded-full text-secondary-foreground">{cert.level}</span>
                  <span className="bg-accent/10 px-2 py-0.5 rounded-full text-accent-foreground">{cert.careerField}</span>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0 ml-4" />
            </motion.a>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">No certifications match your filters.</p>
        )}
      </div>
    </div>
  );
}
