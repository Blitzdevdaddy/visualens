import { Button } from "@/components/ui/button";
import { Download, Play } from "lucide-react";
import heroImage from "@assets/generated_images/AI_agent_interface_hero_800fb6fb.png";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToDownload = () => {
    const element = document.getElementById("download");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-snug tracking-wide"
          data-testid="text-hero-title"
          variants={itemVariants}
        >
          AI-Powered Vision
          <br />
          <span className="text-primary">For Windows</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed tracking-wide"
          data-testid="text-hero-subtitle"
          variants={itemVariants}
        >
          Experience the power of VisuaLens on your desktop. Identify objects,
          extract text, translate languages, and automate tasks—all with a
          simple screenshot.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              size="lg"
              className="text-lg px-10 py-6 bg-primary/95 backdrop-blur-md border border-primary-border rounded-3xl shadow-lg flex items-center justify-center gap-2"
              onClick={scrollToDownload}
              data-testid="button-hero-download"
            >
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Download className="h-5 w-5" aria-hidden="true" />
              </motion.div>
              Download for Windows
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              size="lg"
              className="text-lg px-10 py-6 bg-white/10 text-white backdrop-blur-md border border-white/20 rounded-3xl shadow-lg flex items-center justify-center gap-2"
              onClick={() =>
                window.open("https://your-tutorial-link.com", "_blank")
              }
              data-testid="button-hero-tutorial"
            >
              <Play className="h-5 w-5" aria-hidden="true" />
              Tutorial
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
