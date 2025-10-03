export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-primary mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn more about my background, experience, and what drives me as a developer
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl text-primary">My Journey</h3>
              <p className="text-muted-foreground">
                With over 5 years of experience in web development, I've had the privilege 
                of working with startups and established companies to bring their digital 
                visions to life. My passion lies in creating seamless user experiences 
                through thoughtful design and clean, efficient code.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl text-primary">What I Do</h3>
              <p className="text-muted-foreground">
                I specialize in full-stack development with a focus on modern technologies 
                like React, TypeScript, and Node.js. When I'm not coding, you'll find me 
                exploring new design trends, contributing to open-source projects, or 
                mentoring aspiring developers.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-6 rounded-xl bg-muted/50">
                <div className="text-2xl text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-muted/50">
                <div className="text-2xl text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="text-xl text-primary mb-6">Values & Approach</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <div>
                    <h4 className="text-primary mb-1">User-Centered Design</h4>
                    <p className="text-sm text-muted-foreground">
                      Every decision is made with the end user in mind
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <div>
                    <h4 className="text-primary mb-1">Clean Code</h4>
                    <p className="text-sm text-muted-foreground">
                      Maintainable, scalable, and well-documented solutions
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <div>
                    <h4 className="text-primary mb-1">Continuous Learning</h4>
                    <p className="text-sm text-muted-foreground">
                      Staying current with industry trends and best practices
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}