import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X, Download } from "lucide-react";
import { motion } from "framer-motion";
import logoImage from "@assets/Gemini_Generated_Image_rkdep8rkdep8rkde-removebg-preview_1762647557808.png";

export default function Navigation() {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle("dark", newIsDark);
    localStorage.setItem("theme", newIsDark ? "dark" : "light");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-1">
            <img
              src={logoImage}
              alt="VisuaLens AI Logo"
              className="w-36 h-36 mt-5 mr-100"
            />
            <span className="font-bold text-xl">VisuaLens AI</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <motion.button
              onClick={() => scrollToSection("features")}
              className="text-sm font-medium text-foreground hover:text-primary hover-elevate px-3 py-2 rounded-md transition-all"
              data-testid="link-features"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Features
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("how-it-works")}
              className="text-sm font-medium text-foreground hover:text-primary hover-elevate px-3 py-2 rounded-md transition-all"
              data-testid="link-how-it-works"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              How It Works
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("download")}
              className="text-sm font-medium text-foreground hover:text-primary hover-elevate px-3 py-2 rounded-md transition-all"
              data-testid="link-download"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Download
            </motion.button>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button
              onClick={() => scrollToSection("download")}
              data-testid="button-download-nav"
            >
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              data-testid="button-theme-toggle-mobile"
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden py-4 border-t"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-2">
              <motion.button
                onClick={() => scrollToSection("features")}
                className="text-sm font-medium text-foreground hover:text-primary hover-elevate px-3 py-2 rounded-md text-left transition-all"
                data-testid="link-features-mobile"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Features
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("how-it-works")}
                className="text-sm font-medium text-foreground hover:text-primary hover-elevate px-3 py-2 rounded-md text-left transition-all"
                data-testid="link-how-it-works-mobile"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                How It Works
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("download")}
                className="text-sm font-medium text-foreground hover:text-primary hover-elevate px-3 py-2 rounded-md text-left transition-all"
                data-testid="link-download-mobile"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Download
              </motion.button>
              <Button
                onClick={() => scrollToSection("download")}
                className="w-full mt-2"
                data-testid="button-download-mobile"
              >
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
