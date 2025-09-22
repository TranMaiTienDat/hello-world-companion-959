import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/components/ui/use-toast";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Instagram, Loader2 } from "lucide-react";
import { useState } from "react";
import { GITHUB_URL, INSTAGRAM_URL } from "@/lib/constants";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill in your name, email, and message before sending.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const subject = `New message from ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
      const mailtoLink = `mailto:tiendat8877@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      const mailWindow = window.open(mailtoLink, "_blank");

      if (!mailWindow) {
        window.location.href = mailtoLink;
      }

      toast({
        title: "Email draft ready",
        description: "Check your email client to review and send the message.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Unable to open email client",
        description: "Please try again or email me directly at tiendat8877@gmail.com.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 px-6" id="contact">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 glass border-primary/20">
            Get In Touch
          </Badge>
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Let's work 
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              together
            </span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. 
            Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <Card className="glass border-primary/10">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="glass border-primary/20 focus:border-primary/50"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="glass border-primary/20 focus:border-primary/50"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="glass border-primary/20 focus:border-primary/50 resize-none"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:shadow-glow transition-smooth"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5 mr-2" />
                  )}
                  {isSubmitting ? "Preparing..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            
            {/* Contact Methods */}
            <div className="space-y-6">
              <Card className="glass border-primary/10 hover:border-primary/20 transition-smooth">
                <CardContent className="flex items-center p-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-text-secondary">tiendat8877@gmail.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass border-primary/10 hover:border-primary/20 transition-smooth">
                <CardContent className="flex items-center p-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-text-secondary">+061 435311789</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass border-primary/10 hover:border-primary/20 transition-smooth">
                <CardContent className="flex items-center p-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Location</h3>
                    <p className="text-text-secondary">Melbourne</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Links */}
            <Card className="glass border-primary/10">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">Connect with me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <a 
                    href={GITHUB_URL} 
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 p-4 glass rounded-lg hover:bg-primary/10 transition-smooth group text-center"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-6 h-6 mx-auto mb-2 group-hover:text-primary transition-fast" />
                    <span className="text-sm text-text-secondary">GitHub</span>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex-1 p-4 glass rounded-lg hover:bg-primary/10 transition-smooth group text-center"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-6 h-6 mx-auto mb-2 group-hover:text-primary transition-fast" />
                    <span className="text-sm text-text-secondary">LinkedIn</span>
                  </a>
                  
                  <a 
                    href={INSTAGRAM_URL} 
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 p-4 glass rounded-lg hover:bg-primary/10 transition-smooth group text-center"
                    aria-label="Instagram Profile"
                  >
                    <Instagram className="w-6 h-6 mx-auto mb-2 group-hover:text-primary transition-fast" />
                    <span className="text-sm text-text-secondary">Instagram</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="glass border-primary/10 bg-gradient-hero">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse mr-2" />
                  <span className="text-sm font-medium text-foreground">Available for new projects</span>
                </div>
                <p className="text-text-secondary text-sm">
                  I'm currently accepting new freelance and contract opportunities. 
                  Let's create something amazing together!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
