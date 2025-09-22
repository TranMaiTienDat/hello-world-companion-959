import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { GITHUB_URL } from "@/lib/constants";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-surface/50 border-t border-primary/10">
      
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center hover:shadow-glow transition-smooth group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 text-white group-hover:transform group-hover:-translate-y-0.5 transition-transform" />
      </button>

      <div className="container mx-auto px-6 py-16">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold tracking-wide">DAT</span>
              </div>
              <span className="text-2xl font-bold text-foreground">Tran Mai Tien Dat</span>
            </div>
            
            <p className="text-text-secondary max-w-md leading-relaxed">
              Passionate developer creating beautiful, functional web experiences. 
              Always learning, always building, always improving.
            </p>

            <div className="flex items-center space-x-2">
              <Badge variant="outline" className="glass border-primary/20 px-3 py-1">
                <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse" />
                Available for work
              </Badge>
            </div>

            <div className="flex space-x-4">
              <a 
                href={GITHUB_URL} 
                target="_blank"
                rel="noreferrer"
                className="p-3 glass rounded-lg hover:bg-primary/10 transition-smooth hover-glow group"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5 group-hover:text-primary transition-fast" />
              </a>
              <a 
                href="#" 
                className="p-3 glass rounded-lg hover:bg-primary/10 transition-smooth hover-glow group"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5 group-hover:text-primary transition-fast" />
              </a>
              <a 
                href="#" 
                className="p-3 glass rounded-lg hover:bg-primary/10 transition-smooth hover-glow group"
                aria-label="Email Contact"
              >
                <Mail className="w-5 h-5 group-hover:text-primary transition-fast" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Navigation</h3>
            <nav className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection("#about")}
                className="text-left text-text-secondary hover:text-primary transition-fast"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("#projects")}
                className="text-left text-text-secondary hover:text-primary transition-fast"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("#contact")}
                className="text-left text-text-secondary hover:text-primary transition-fast"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Contact CTA */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Let's Connect</h3>
            <p className="text-text-secondary text-sm">
              Ready to start your next project? Let's discuss how we can work together.
            </p>
            <Button 
              className="w-full bg-gradient-primary hover:shadow-glow transition-smooth"
              onClick={() => scrollToSection("#contact")}
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-1 text-text-secondary text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-accent animate-pulse" />
            <span>using React & TypeScript</span>
          </div>
          
          <div className="text-text-secondary text-sm">
            © 2024 Portfolio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
