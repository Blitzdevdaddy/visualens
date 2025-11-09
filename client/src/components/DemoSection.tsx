import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import textExtractionImage from "@assets/generated_images/Text_extraction_feature_demo_e2e66e22.png";
import objectRecognitionImage from "@assets/generated_images/Object_recognition_shopping_demo_1a4905bd.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  "Works with any application on Windows",
  "Processes images using api ",
  "Quick info + detailed info view",
  "Customizable keyboard shortcuts",
  "Saves history ",
];

export default function DemoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-3 grid grid-cols-2 gap-4">
            <motion.div
              className="col-span-2"
              custom={0}
              variants={imageVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <Card className="overflow-hidden" data-testid="card-demo-main">
                <img
                  src={textExtractionImage}
                  alt="Text extraction demo"
                  className="w-full h-full object-cover"
                />
              </Card>
            </motion.div>
            <motion.div
              custom={1}
              variants={imageVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <Card className="overflow-hidden" data-testid="card-demo-1">
                <img
                  src={objectRecognitionImage}
                  alt="Object recognition demo"
                  className="w-full h-full object-cover"
                />
              </Card>
            </motion.div>
          </div>

          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              data-testid="text-demo-title"
            >
              See It In Action
            </h2>
            <p
              className="text-lg text-muted-foreground mb-6"
              data-testid="text-demo-description"
            >
              VisuaLens seamlessly integrates with your Windows workflow,
              providing instant insights from any visual content.
            </p>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  data-testid={`feature-item-${index}`}
                  custom={index}
                  variants={listItemVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
