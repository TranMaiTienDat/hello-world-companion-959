import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    "React", "TypeScript", "Next.js", "Node.js", 
    "Tailwind CSS", "PostgreSQL", "GraphQL", "AWS"
  ];

  return (
    <section className="py-20 px-6" id="about">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-12">
          <div className="text-center lg:text-left lg:max-w-3xl lg:mx-auto">
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
                Junior front-end developer building responsive interfaces with modern web tools and a
                strong focus on accessibility and performance.
              </p>
              <p>
                I love turning design ideas into clean, maintainable code and spend my free time
                experimenting with side projects, open-source issues, and UI animation techniques.
              </p>
              <p>
                Currently sharpening my skills with React, TypeScript, and serverless workflows while
                looking for collaborative teams where I can learn fast and contribute value.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-center lg:text-left text-foreground">
              Technologies I work with
            </h3>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">12+</div>
              <div className="text-sm text-muted-foreground">Projects Shipped</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">1+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">5</div>
              <div className="text-sm text-muted-foreground">Collaborations Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
