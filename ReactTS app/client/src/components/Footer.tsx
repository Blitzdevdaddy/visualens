import { Button } from "@/components/ui/button";
import { Github, Twitter, Youtube } from "lucide-react";
import logoImage from "@assets/Gemini_Generated_Image_rkdep8rkdep8rkde-removebg-preview_1762647557808.png";

export default function Footer() {
  return (
    <footer className="bg-card/30 border-t">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-1">
              <img
                src={logoImage}
                alt="VisuaLens AI Logo"
                className="w-36 h-36 mt-5 mr-10"
              />
              <span className="font-bold text-xl">VisuaLens AI</span>
            </div>

            <p className="text-sm text-muted-foreground">
              AI-powered visual assistant for Windows
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  className="text-muted-foreground hover-elevate px-2 py-1 rounded-md transition-all"
                  data-testid="link-footer-features"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  className="text-muted-foreground hover-elevate px-2 py-1 rounded-md transition-all"
                  data-testid="link-footer-pricing"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  className="text-muted-foreground hover-elevate px-2 py-1 rounded-md transition-all"
                  data-testid="link-footer-changelog"
                >
                  Changelog
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  className="text-muted-foreground hover-elevate px-2 py-1 rounded-md transition-all"
                  data-testid="link-footer-support"
                >
                  Support
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p
            className="text-sm text-muted-foreground"
            data-testid="text-copyright"
          >
            © 2025 VisuaLens. All rights reserved.
          </p>

          <div className="flex gap-4">
            <Button
              variant="ghost"
              size="icon"
              data-testid="button-social-github"
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              data-testid="button-social-twitter"
            >
              <Twitter className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              data-testid="button-social-youtube"
            >
              <Youtube className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
