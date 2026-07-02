'use client'

import { ArrowRight, Github, Linkedin, Mail, ExternalLink, Code, Zap, Target } from 'lucide-react'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-border/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              KShreee
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-foreground hover:text-primary transition">About</a>
              <a href="#projects" className="text-foreground hover:text-primary transition">Projects</a>
              <a href="#skills" className="text-foreground hover:text-primary transition">Skills</a>
              <a href="#contact" className="text-foreground hover:text-primary transition">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                Welcome to my portfolio
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="bg-gradient-to-r from-primary via-blue-500 to-blue-600 bg-clip-text text-transparent">KShreee</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              A passionate full-stack developer crafting beautiful, functional web experiences. I specialize in modern web technologies and love building projects that solve real problems.
            </p>

            <div className="flex flex-wrap gap-4 pt-8">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-lg hover:shadow-primary/20 transition flex items-center gap-2">
                View My Work
                <ArrowRight size={20} />
              </button>
              <button className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-muted transition">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-mt-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              With a passion for clean code and user-centric design, I've been building web applications that combine functionality with beautiful user interfaces. My journey in tech has equipped me with a diverse skill set spanning frontend and backend technologies.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
            <div className="flex gap-4">
              <Link href="https://github.com" target="_blank" className="p-3 rounded-lg bg-muted hover:bg-primary/10 transition">
                <Github size={24} />
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="p-3 rounded-lg bg-muted hover:bg-primary/10 transition">
                <Linkedin size={24} />
              </Link>
              <Link href="mailto:krishoee@gmail.com" className="p-3 rounded-lg bg-muted hover:bg-primary/10 transition">
                <Mail size={24} />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition">
              <Zap className="text-primary mb-3" size={28} />
              <h3 className="font-bold mb-2">Fast & Efficient</h3>
              <p className="text-sm text-muted-foreground">Optimized code that delivers great performance</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition">
              <Code className="text-primary mb-3" size={28} />
              <h3 className="font-bold mb-2">Clean Code</h3>
              <p className="text-sm text-muted-foreground">Well-structured and maintainable solutions</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition">
              <Target className="text-primary mb-3" size={28} />
              <h3 className="font-bold mb-2">User Focused</h3>
              <p className="text-sm text-muted-foreground">Designs with user experience in mind</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition">
              <Zap className="text-primary mb-3" size={28} />
              <h3 className="font-bold mb-2">Always Learning</h3>
              <p className="text-sm text-muted-foreground">Staying updated with latest technologies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-mt-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <div key={i} className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition overflow-hidden">
              <div className="h-48 mb-4 rounded-lg bg-gradient-to-br from-primary/10 to-blue-600/10 flex items-center justify-center text-muted-foreground">
                Project {i} Preview
              </div>
              <h3 className="text-xl font-bold mb-2">Amazing Project {i}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                A modern web application built with cutting-edge technologies to solve real-world problems with elegant solutions.
              </p>
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">React</span>
                <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">Next.js</span>
                <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary">Tailwind</span>
              </div>
              <div className="flex gap-3">
                <Link href="#" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition">
                  View Project <ExternalLink size={16} />
                </Link>
                <Link href="#" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition">
                  GitHub <ExternalLink size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-mt-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Skills & Technologies</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Frontend</h3>
            <div className="space-y-2">
              {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'].map((skill) => (
                <div key={skill} className="px-4 py-2 rounded-lg bg-muted border border-border/50 text-sm">
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Backend</h3>
            <div className="space-y-2">
              {['Node.js', 'Python', 'SQL', 'MongoDB', 'REST APIs'].map((skill) => (
                <div key={skill} className="px-4 py-2 rounded-lg bg-muted border border-border/50 text-sm">
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Tools & Others</h3>
            <div className="space-y-2">
              {['Git', 'Docker', 'AWS', 'Figma', 'GraphQL'].map((skill) => (
                <div key={skill} className="px-4 py-2 rounded-lg bg-muted border border-border/50 text-sm">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-mt-16">
        <div className="text-center space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let's collaborate and create something amazing together.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="mailto:krishoee@gmail.com"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-lg hover:shadow-primary/20 transition inline-flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Send Me an Email
            </Link>
            <Link 
              href="https://linkedin.com"
              target="_blank"
              className="px-8 py-4 border border-border rounded-lg font-medium hover:bg-muted transition inline-flex items-center justify-center gap-2"
            >
              <Linkedin size={20} />
              Connect on LinkedIn
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground">© 2024 KShreee. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="https://github.com" target="_blank" className="text-muted-foreground hover:text-primary transition">
                GitHub
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="text-muted-foreground hover:text-primary transition">
                LinkedIn
              </Link>
              <Link href="mailto:krishoee@gmail.com" className="text-muted-foreground hover:text-primary transition">
                Email
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
