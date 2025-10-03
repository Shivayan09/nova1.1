import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-primary/60">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl text-primary">
                Alex Chen
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground">
                Full Stack Developer & UI/UX Designer
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              I create beautiful, functional, and user-centered digital experiences. 
              Passionate about clean code and innovative design solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors"
              >
                Get In Touch
                <Mail size={16} />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-xl hover:bg-muted transition-colors"
              >
                View Work
                <ArrowDown size={16} />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com"
                className="p-3 rounded-xl border border-border hover:bg-muted transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                className="p-3 rounded-xl border border-border hover:bg-muted transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-3xl overflow-hidden bg-muted">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1675277714353-376f525d935a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGRldmVsb3BlcnxlbnwxfHx8fDE3NTk0NzkxNzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Alex Chen"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}