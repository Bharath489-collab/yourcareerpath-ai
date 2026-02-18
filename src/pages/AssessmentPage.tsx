import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { assessmentQuestions, careers } from "@/data/careers";

export default function AssessmentPage() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();

  const q = assessmentQuestions[currentQ];
  const progress = ((currentQ + (answers.length > currentQ ? 1 : 0)) / assessmentQuestions.length) * 100;

  const selectOption = (optIndex: number) => {
    const next = [...answers];
    next[currentQ] = optIndex;
    setAnswers(next);

    if (currentQ < assessmentQuestions.length - 1) {
      setTimeout(() => setCurrentQ(currentQ + 1), 300);
    } else {
      setCompleted(true);
    }
  };

  const getResults = () => {
    const scores: Record<string, number> = {};
    answers.forEach((optIndex, qIndex) => {
      const selected = assessmentQuestions[qIndex].options[optIndex];
      selected.careers.forEach((cId) => {
        scores[cId] = (scores[cId] || 0) + 1;
      });
    });
    return Object.entries(scores)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([id]) => careers.find((c) => c.id === id)!)
      .filter(Boolean);
  };

  if (completed) {
    const results = getResults();
    return (
      <div className="min-h-[80vh] flex items-center py-20">
        <div className="container max-w-2xl">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
            <div className="mx-auto w-16 h-16 rounded-full accent-gradient flex items-center justify-center mb-6">
              <CheckCircle2 className="h-8 w-8 text-accent-foreground" />
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
              Your Top Career Matches
            </h1>
            <p className="text-muted-foreground mb-10">Based on your skills, interests, and preferences</p>

            <div className="space-y-4">
              {results.map((career, i) => (
                <motion.div
                  key={career.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-card border border-border rounded-2xl p-6 card-elevated cursor-pointer text-left"
                  onClick={() => navigate(`/careers/${career.id}`)}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-accent">#{i + 1} Match</span>
                      <h3 className="font-heading text-xl font-bold text-foreground">{career.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{career.shortDescription}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-accent" />
                  </div>
                </motion.div>
              ))}
            </div>

            <Button onClick={() => { setCompleted(false); setCurrentQ(0); setAnswers([]); }} variant="outline" className="mt-8">
              Retake Assessment
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] flex items-center py-20">
      <div className="container max-w-2xl">
        {/* Progress bar */}
        <div className="mb-10">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Question {currentQ + 1} of {assessmentQuestions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-2 rounded-full bg-secondary overflow-hidden">
            <motion.div
              className="h-full rounded-full accent-gradient"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQ}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
              {q.question}
            </h2>

            <div className="space-y-3">
              {q.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => selectOption(i)}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    answers[currentQ] === i
                      ? "border-accent bg-accent/10"
                      : "border-border bg-card hover:border-accent/50"
                  }`}
                >
                  <span className="text-sm font-medium text-foreground">{opt.text}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {currentQ > 0 && (
          <Button variant="ghost" className="mt-6" onClick={() => setCurrentQ(currentQ - 1)}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Previous
          </Button>
        )}
      </div>
    </div>
  );
}
