import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import avatarImage from "@/assets/avatar.jpg";

const About = () => {
  const skills = [
    "React", "TypeScript", "Next.js", "Node.js", 
    "Tailwind CSS", "PostgreSQL", "GraphQL", "AWS"
  ];

  return (
    <section className="py-20 px-6" id="about">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl rotate-3 blur-sm opacity-30" />
              <Card className="relative overflow-hidden rounded-2xl border-0 shadow-lg">
                <img 
                  src={avatarImage} 
                  alt="Professional headshot"
                  className="w-full h-full object-cover"
                />
              </Card>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div>
              <Badge variant="outline" className="mb-4 glass border-primary/20">
                About Me
              </Badge>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Passionate about creating 
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  digital solutions
                </span>
              </h2>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  With over 5 years of experience in web development, I specialize in building 
                  modern, scalable applications that deliver exceptional user experiences.
                </p>
                <p>
                  I'm passionate about clean code, performance optimization, and staying up-to-date 
                  with the latest technologies. When I'm not coding, you'll find me contributing 
                  to open source projects or exploring new frameworks.
                </p>
                <p>
                  Currently focused on React ecosystem, serverless architectures, and creating 
                  accessible web applications that make a difference.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Technologies I work with
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="px-4 py-2 text-sm font-medium glass border-primary/10 hover:border-primary/30 transition-smooth"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">20+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;