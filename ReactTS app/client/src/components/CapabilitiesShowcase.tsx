import { Card } from "@/components/ui/card";
import { Eye, FileText, Box, Languages, Code } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const capabilities = [
  {
    icon: Eye,
    title: "Visual Search",
    description:
      "Instantly identify objects, landmarks, and products from any image on your screen.",
  },
  {
    icon: FileText,
    title: "Text Extraction",
    description:
      "Extract and copy text from images, PDFs, and screenshots with high accuracy.",
  },
  {
    icon: Box,
    title: "Object Recognition",
    description:
      "Detect and classify objects in real-time with advanced AI models.",
  },
  {
    icon: Languages,
    title: "Translation",
    description: "Translate text from images instantly across 100+ languages.",
  },
  {
    icon: Code,
    title: "Code Detection",
    description:
      "Recognize and extract code snippets from screenshots and videos.",
  },
  {
    icon: FileText,
    title: "Detailed View",
    description:
      "While basic information is good for quick understanding, VisuaLens also provides in-depth information too.",
  },
];

export default function CapabilitiesShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="features" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            data-testid="text-capabilities-title"
          >
            Powerful AI Capabilities
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-capabilities-subtitle"
          >
            Everything you need to unlock the visual intelligence of your
            Windows desktop
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {capabilities.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card
                className="p-6 hover-elevate transition-all cursor-pointer h-full group"
                data-testid={`card-capability-${index}`}
              >
                <motion.div
                  className="w-12 h-12 bg-primary/10 hover:bg-primary rounded-lg flex items-center justify-center mb-4 transition-colors duration-300 group/icon"
                  aria-label={`${title} icon`}
                  whileHover={{
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon
                    className="h-6 w-6 text-primary group-hover/icon:text-primary-foreground transition-colors duration-300"
                    aria-hidden="true"
                  />
                </motion.div>
                <h3
                  className="text-lg font-semibold mb-2"
                  data-testid={`text-capability-title-${index}`}
                >
                  {title}
                </h3>
                <p
                  className="text-sm text-muted-foreground"
                  data-testid={`text-capability-description-${index}`}
                >
                  {description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
