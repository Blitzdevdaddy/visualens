import { Card } from "@/components/ui/card";
import { Download, Settings, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    icon: Download,
    number: "01",
    title: "Download",
    description: "Get the installer for Windows 10 or 11 in seconds.",
  },
  {
    icon: Settings,
    number: "02",
    title: "Install",
    description:
      "Install it then add your gemini key and start the program using the default hotkey win + c",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Use",
    description:
      "Take a screenshot or use the hotkey to analyze anything on your screen.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="how-it-works" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            data-testid="text-how-title"
          >
            How It Works
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-how-subtitle"
          >
            Get started with VisuaLens AI in three simple steps
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card
                className="p-8 text-center relative hover-elevate group"
                data-testid={`card-step-${index}`}
              >
                <motion.div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary hover:bg-accent rounded-full flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg"
                  animate={{
                    y: [0, -5, 0],
                  }}
                  whileHover={{
                    scale: 1.2,
                  }}
                  transition={{
                    y: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    },
                    scale: {
                      duration: 0.3,
                    },
                  }}
                >
                  <step.icon className="h-6 w-6 text-primary-foreground" />
                </motion.div>
                <motion.div
                  className="text-6xl font-bold text-muted-foreground/20 mb-4 mt-4"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={
                    isInView
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0.5, opacity: 0 }
                  }
                  transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
                >
                  {step.number}
                </motion.div>
                <h3
                  className="text-2xl font-bold mb-3"
                  data-testid={`text-step-title-${index}`}
                >
                  {step.title}
                </h3>
                <p
                  className="text-muted-foreground"
                  data-testid={`text-step-description-${index}`}
                >
                  {step.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
