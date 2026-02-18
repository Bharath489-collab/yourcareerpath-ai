import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ClipboardCheck, Map, Rocket, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import CareerCard from "@/components/CareerCard";
import { careers } from "@/data/careers";
import heroBg from "@/assets/hero-bg.jpg";

const steps = [
  { icon: ClipboardCheck, title: "Take Assessment", desc: "Answer questions about your skills and interests" },
  { icon: Sparkles, title: "Get Matched", desc: "Receive AI-powered career recommendations" },
  { icon: Map, title: "Follow Roadmap", desc: "Step-by-step milestones to reach your goal" },
  { icon: Rocket, title: "Launch Career", desc: "Land your dream job with confidence" },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient opacity-85" />
        </div>

        <div className="relative container py-24 md:py-36 text-center">
          <motion.div {...fadeUp} transition={{ duration: 0.7 }}>
            <span className="inline-block text-xs uppercase tracking-widest font-semibold text-accent mb-4 bg-accent/10 px-4 py-1.5 rounded-full">
              Your Future Starts Here
            </span>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground max-w-4xl mx-auto leading-tight">
              Discover Your Perfect{" "}
              <span className="text-gradient">Career Path</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto">
              Take a smart assessment, explore detailed roadmaps, and get actionable steps — from certifications to job opportunities — all in one place.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/assessment">
                <Button size="lg" className="accent-gradient text-accent-foreground font-semibold border-0 px-8 glow-accent">
                  Start Career Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/careers">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold">
                  Explore Careers
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-background">
        <div className="container">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              How It Works
            </h2>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
              Four simple steps to your dream career
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto w-16 h-16 rounded-2xl accent-gradient flex items-center justify-center mb-4">
                  <step.icon className="h-7 w-7 text-accent-foreground" />
                </div>
                <div className="text-xs font-bold text-accent mb-2">Step {i + 1}</div>
                <h3 className="font-heading font-semibold text-foreground text-lg">{step.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Careers */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Explore Top Careers
            </h2>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
              In-demand career paths with detailed roadmaps and salary insights
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {careers.map((career) => (
              <CareerCard key={career.id} {...career} />
            ))}
          </div>

          <motion.div {...fadeUp} className="text-center mt-12">
            <Link to="/careers">
              <Button variant="outline" size="lg" className="font-semibold">
                View All Careers
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 hero-gradient">
        <div className="container text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">
              Ready to Build Your Future?
            </h2>
            <p className="mt-4 text-primary-foreground/70 max-w-lg mx-auto">
              Take a 5-minute assessment and get a personalized career roadmap tailored to your unique skills and goals.
            </p>
            <Link to="/assessment">
              <Button size="lg" className="mt-8 accent-gradient text-accent-foreground font-semibold border-0 px-8 glow-accent">
                Get Started Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
