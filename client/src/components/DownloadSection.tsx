import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function DownloadSection() {
  const { toast } = useToast();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/downloads/VisionAI-Setup.exe';
    link.download = 'VisionAI-Setup.exe';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Download Started",
      description: "VisionAI-Setup.exe is downloading...",
    });
  };

  return (
    <section
      id="download"
      className="py-20 bg-gradient-to-b from-card/30 to-background"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Card className="p-8 md:p-12 text-center">
            <motion.div
              className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            >
              <Download className="h-8 w-8 text-primary" />
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4"
              data-testid="text-download-title"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Ready to Experience AI-Powered Vision?
            </motion.h2>
            
            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
              data-testid="text-download-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Join thousands of Windows users who are already unlocking the power
              of visual AI
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="group/download"
              >
                <Button
                  size="lg"
                  className="text-lg px-12 py-6 mb-8 w-full bg-primary hover:bg-accent transition-all duration-300 shadow-md hover:shadow-xl"
                  onClick={handleDownload}
                  data-testid="button-download-main"
                >
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    <Download className="h-5 w-5 mr-2" />
                  </motion.div>
                  Download for Windows
                  <span className="ml-2 text-sm opacity-80">(24.5 MB)</span>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="border-t pt-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <h3 className="font-semibold mb-3 flex items-center justify-center gap-2">
                <AlertCircle className="h-4 w-4" />
                System Requirements
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div data-testid="text-requirement-os">Windows 10 or 11</div>
                <div data-testid="text-requirement-ram">4GB RAM minimum</div>
              </div>
            </motion.div>

          </Card>
        </motion.div>
      </div>
    </section>
  );
}
