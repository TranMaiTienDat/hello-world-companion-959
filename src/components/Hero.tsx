import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-pulse opacity-60" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-accent rounded-full animate-pulse opacity-40 animation-delay-300" />
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-primary rounded-full animate-pulse opacity-30 animation-delay-700" />
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-accent rounded-full animate-pulse opacity-50 animation-delay-500" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Status Badge */}
          <Badge variant="outline" className="mb-6 glass px-4 py-2 text-sm border-primary/20">
            <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse" />
            Available for work
          </Badge>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="block text-foreground">Front-end</span>
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Developer
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed">
            I craft beautiful digital experiences with modern web technologies. 
            Specialized in React, TypeScript, and creating pixel-perfect user interfaces.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-smooth px-8 py-4 text-lg font-medium"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="glass border-primary/20 hover:bg-primary/10 transition-smooth px-8 py-4 text-lg font-medium"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            <a 
              href="#" 
              className="p-3 glass rounded-full hover:bg-primary/10 transition-smooth hover-glow group"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6 group-hover:text-primary transition-fast" />
            </a>
            <a 
              href="#" 
              className="p-3 glass rounded-full hover:bg-primary/10 transition-smooth hover-glow group"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6 group-hover:text-primary transition-fast" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;