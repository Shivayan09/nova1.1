import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-xl text-primary">
              Alex Chen
            </div>
            <p className="text-muted-foreground">
              Full Stack Developer & UI/UX Designer passionate about creating 
              beautiful and functional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-primary">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#projects" className="block text-muted-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#skills" className="block text-muted-foreground hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-primary">Connect</h3>
            <div className="flex gap-3">
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
              <a
                href="mailto:alex.chen@example.com"
                className="p-3 rounded-xl border border-border hover:bg-muted transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © 2024 Alex Chen. All rights reserved.
            </div>
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              Made with <Heart size={16} className="text-red-500" /> using React & Tailwind CSS
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}