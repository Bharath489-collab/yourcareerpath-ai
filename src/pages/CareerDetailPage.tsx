import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp, DollarSign, Building2, ExternalLink, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { careers } from "@/data/careers";
import RoadmapTimeline from "@/components/RoadmapTimeline";

export default function CareerDetailPage() {
  const { id } = useParams();
  const career = careers.find((c) => c.id === id);

  if (!career) {
    return (
      <div className="container py-20 text-center">
        <h1 className="font-heading text-2xl font-bold text-foreground mb-4">Career not found</h1>
        <Link to="/careers"><Button variant="outline">Browse Careers</Button></Link>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="container max-w-4xl">
        <Link to="/careers" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" /> All Careers
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          {/* Header */}
          <div className="mb-10">
            <span className="text-xs uppercase tracking-widest font-semibold text-accent">{career.category}</span>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-2">{career.title}</h1>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl">{career.description}</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            <div className="bg-card border border-border rounded-xl p-5 card-elevated">
              <DollarSign className="h-5 w-5 text-accent mb-2" />
              <p className="text-xs text-muted-foreground">Salary Range</p>
              <p className="font-heading font-bold text-foreground">{career.salaryRange.entry} – {career.salaryRange.senior}</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 card-elevated">
              <TrendingUp className="h-5 w-5 text-accent mb-2" />
              <p className="text-xs text-muted-foreground">Demand Level</p>
              <p className="font-heading font-bold text-foreground">{career.demandLevel}</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 card-elevated">
              <Building2 className="h-5 w-5 text-accent mb-2" />
              <p className="text-xs text-muted-foreground">Growth Outlook</p>
              <p className="font-heading font-bold text-foreground text-sm">{career.growthOutlook}</p>
            </div>
          </div>

          {/* Skills */}
          <section className="mb-12">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Skills Required</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Technical</h3>
                <div className="flex flex-wrap gap-2">
                  {career.skills.technical.map((s) => (
                    <span key={s} className="bg-accent/10 text-accent-foreground text-xs font-medium px-3 py-1.5 rounded-full">{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {career.skills.soft.map((s) => (
                    <span key={s} className="bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1.5 rounded-full">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Roadmap */}
          <section className="mb-12">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Career Roadmap</h2>
            <RoadmapTimeline milestones={career.milestones} />
          </section>

          {/* Responsibilities */}
          <section className="mb-12">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Key Responsibilities</h2>
            <ul className="space-y-3">
              {career.responsibilities.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{r}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Certifications */}
          <section className="mb-12">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Recommended Certifications</h2>
            <div className="grid gap-4">
              {career.certifications.map((cert) => (
                <a
                  key={cert.name}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-card border border-border rounded-xl p-5 card-elevated group"
                >
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground">{cert.provider} · {cert.duration} · {cert.level}</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" />
                </a>
              ))}
            </div>
          </section>

          {/* Top Companies */}
          <section className="mb-12">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Top Companies Hiring</h2>
            <div className="flex flex-wrap gap-3">
              {career.topCompanies.map((company) => (
                <span key={company} className="bg-card border border-border text-foreground text-sm font-medium px-4 py-2 rounded-full">
                  {company}
                </span>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-card border border-border rounded-2xl p-8 text-center card-elevated">
            <h3 className="font-heading text-xl font-bold text-foreground mb-2">Ready to start your {career.title} journey?</h3>
            <p className="text-muted-foreground mb-6">Take our assessment to see if this career matches your profile.</p>
            <Link to="/assessment">
              <Button className="accent-gradient text-accent-foreground font-semibold border-0">
                Start Assessment
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
