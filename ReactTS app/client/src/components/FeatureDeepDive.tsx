import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import textExtractionImage from "@assets/generated_images/Text_extraction_feature_demo_e2e66e22.png";
import objectRecognitionImage from "@assets/generated_images/Object_recognition_shopping_demo_1a4905bd.png";
import taskAutomationImage from "@assets/generated_images/Task_automation_interface_c444553a.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    title: "Advanced Text Recognition",
    description:
      "Extract text from any image with industry-leading accuracy. Perfect for digitizing documents, copying text from videos, or translating signs in real-time.",
    image: textExtractionImage,
    points: [
      "99.8% accuracy with printed text",
      "Support for handwriting recognition",
      "Preserves formatting and layout",
      "Multi-language OCR support",
    ],
  },
  {
    title: "Smart Object Detection",
    description:
      "Identify thousands of objects, products, and landmarks instantly. VisuaLens uses state-of-the-art computer vision to understand what's in your images.",
    image: objectRecognitionImage,
    points: [
      "Recognizes 10,000+ object categories",
      "Landmark and location identification",
      "Brand and logo detection",
    ],
  },
];

function FeatureSection({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isReversed = index % 2 === 1;

  const imageVariants = {
    hidden: { opacity: 0, x: isReversed ? 50 : -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: isReversed ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const pointVariants = {
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
    <div
      ref={ref}
      className={`grid md:grid-cols-2 gap-12 items-center ${
        isReversed ? "md:flex-row-reverse" : ""
      }`}
      data-testid={`feature-section-${index}`}
    >
      <motion.div
        className={isReversed ? "md:order-2" : ""}
        variants={imageVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Card className="overflow-hidden">
          <img
            src={feature.image}
            alt={feature.title}
            className="w-full h-full object-cover"
          />
        </Card>
      </motion.div>

      <motion.div
        className={isReversed ? "md:order-1" : ""}
        variants={contentVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <h3
          className="text-3xl md:text-4xl font-bold mb-4"
          data-testid={`text-feature-title-${index}`}
        >
          {feature.title}
        </h3>
        <p
          className="text-lg text-muted-foreground mb-6"
          data-testid={`text-feature-description-${index}`}
        >
          {feature.description}
        </p>
        <div className="space-y-3">
          {feature.points.map((point, pointIndex) => (
            <motion.div
              key={pointIndex}
              className="flex items-start gap-3"
              data-testid={`feature-point-${index}-${pointIndex}`}
              custom={pointIndex}
              variants={pointVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="h-3 w-3 text-primary" />
              </div>
              <span className="text-sm">{point}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function FeatureDeepDive() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-24">
          {features.map((feature, index) => (
            <FeatureSection key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
