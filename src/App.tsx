import { motion, useScroll, useSpring } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Database, 
  Layout, 
  Server, 
  ChevronRight, 
  Phone, 
  MapPin,
  Braces,
  Sparkles,
  Terminal,
  Cpu
} from 'lucide-react';
import { useState, useEffect, ReactNode } from 'react';

// Types
interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  type: 'Professional' | 'College Project';
}

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeTab, setActiveTab] = useState('Home');

  const projects: Project[] = [
    {
      title: "Technical Fest Website",
      description: "Developed a comprehensive fest website for event registrations with integrated payment gateways using Vanilla JS and PHP. Handled high-traffic concurrency during peak hours.",
      tech: ["Vanilla JS", "PHP", "MySQL", "Payment Gateway"],
      type: "College Project"
    },
    {
      title: "Online Quiz Portal",
      description: "A robust platform for conducting real-time technical quizzes with a user-friendly interface and automated scoring system for college fests.",
      tech: ["Vanilla JS", "HTML", "CSS", "PHP"],
      type: "College Project"
    },
    {
      title: "Content Management System",
      description: "Contributed to Uworld's full-stack CMS development, building scalable Angular components and robust ASP.NET APIs with optimized SQL logic. Faced significant challenges in managing complex configuration-driven UI rules across diverse content types. Resolved this by architecting a generic component framework that reduced code duplication by 40% and significantly improved frontend rendering performance.",
      tech: ["Angular", "ASP.NET", "MS SQL Server", "Stored Procedures"],
      type: "Professional"
    },
    {
      title: "Total Agility",
      description: "Engineered scalable backend services and RESTful endpoints for the Total Agility platform. Integrated frontend components with Ext JS and Angular. Navigated complex integration hurdles between legacy Ext JS modules and modern Angular features while maintaining strict system stability. Optimized critical database stored procedures, resulting in a 30% reduction in API response times for data-heavy operations.",
      tech: [".NET C#", "ASP.NET", "MS SQL Server", "Ext JS", "Angular"],
      type: "Professional"
    }
  ];

  const experiences: Experience[] = [
    {
      company: "Tungsten Automation",
      role: "Software Engineer",
      period: "May 2024 - Present",
      description: [
        "Architected backend services for the Total Agility platform using .NET and C#.",
        "Engineered RESTful endpoints and optimized complex SQL queries for high-performance data retrieval.",
        "Developed dynamic UI components with Angular and gained specialized experience with Ext JS framework."
      ]
    },
    {
      company: "Uworld",
      role: "Software Engineer 2",
      period: "Jan 2024 - May 2024",
      description: [
        "Advanced full-stack development using Angular and ASP.NET Core.",
        "Created shared components with configuration-driven validations and dynamic UI rules.",
        "Implemented secure API endpoints and managed database schema optimizations."
      ]
    },
    {
      company: "Uworld",
      role: "Software Engineer 1 & Associate",
      period: "Feb 2022 - Dec 2023",
      description: [
        "Developed core API features and performance-tuned backend services.",
        "Crafted efficient stored procedures and functions in SQL Server for complex data operations.",
        "Collaborated on frontend UI enhancements and cross-platform component stability."
      ]
    },
    {
      company: "Uworld",
      role: "Trainee Software Engineer",
      period: "Aug 2021 - Jan 2022",
      description: [
        "Gained intensive hands-on experience in full-stack web development ecosystems.",
        "Assisted in building UI features with Angular and backend logic with ASP.NET.",
        "Supported database maintenance and troubleshooting within MS SQL Server environments."
      ]
    }
  ];

  const skills = {
    frontend: ["Angular", "React", "TypeScript", "Ext JS", "Vanilla JS", "Tailwind CSS"],
    backend: [".NET (C#)", "ASP.NET Core", "Agentic AI development", "LINQ", "EntityFramework"],
    database: ["MS SQL Server", "SQL Optimization", "Stored Procedures", "Functions"],
    tools: ["Git", "Azure DevOps", "VS Code", "Visual Studio"]
  };

  return (
    <div className="min-h-screen bg-bg text-text-main custom-grid">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-accent z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 p-6 pointer-events-none">
        <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto border-b border-border-subtle pb-6 backdrop-blur-sm">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-serif pl-[10px]"
          >
            Koparaju Siva Krishna<br /><span className="text-[10px] uppercase tracking-[0.2em] text-accent font-sans font-bold">Full Stack Developer</span>
          </motion.h1>
          <div className="hidden md:flex gap-8">
            {['Home', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const el = document.getElementById(item.toLowerCase());
                  el?.scrollIntoView({ behavior: 'smooth' });
                  setActiveTab(item);
                }}
                className={`text-[11px] uppercase tracking-widest transition-colors hover:text-accent font-bold ${
                  activeTab === item ? 'text-accent' : 'text-text-dim'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <a
            href="mailto:sivakrishnakoparaju@gmail.com"
            className="btn-secondary"
          >
            Hire Me
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-48 pb-20 px-6 border-b border-border-subtle">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-accent text-accent rounded-full text-[10px] font-bold tracking-widest uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Available for Freelance
            </div>
            <h2 className="text-6xl md:text-8xl font-serif leading-[1.1] mb-8">
              Modern <br />
              <span className="italic italic-serif text-accent">Engineering</span>
            </h2>
            <p className="text-base text-text-dim mb-12 max-w-lg leading-relaxed font-light">
              Software Developer with 4 years of expertise in designing and maintaining full-stack ecosystems. 
              Specializing in .NET architecture, Angular orchestration, and SQL performance.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <a 
                href="#projects" 
                className="btn-primary"
              >
                View Selected Works
              </a>
              <div className="flex items-center gap-4">
                <a href="https://www.linkedin.com/in/koparajusivakrishna/" target="_blank" className="p-3 text-text-dim hover:text-accent transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:sivakrishnakoparaju@gmail.com" className="p-3 text-text-dim hover:text-accent transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="hidden lg:block relative"
          >
            <div className="aspect-[4/5] bg-surface border border-border-subtle p-12 relative luxury-card">
              <div className="absolute top-8 right-8 text-[10px] font-mono text-accent opacity-50 uppercase tracking-widest">v.01 / 2026</div>
              <div className="h-full flex flex-col justify-end">
                <h3 className="text-4xl font-serif mb-4 leading-tight">Software Engineering <br /> Specialist</h3>
                <div className="w-12 h-0.5 bg-accent mb-8" />
                <p className="text-xs text-text-dim uppercase tracking-[0.3em] font-bold">Koparaju Siva Krishna</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 border-b border-border-subtle bg-surface/50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-20">
            <h2 className="section-header">Professional History</h2>
          </div>

          <div className="relative">
            {/* Vertical Progress Line - Positioned with a gap from content */}
            <div className="absolute left-[-2px] md:left-[160px] top-0 bottom-0 w-[1px] bg-border-subtle hidden md:block" />
            <motion.div 
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ originY: 0 }}
              className="absolute left-[-2px] md:left-[160px] top-0 bottom-0 w-[1.5px] bg-accent z-10 hidden md:block"
            />

            <div className="space-y-16">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="grid md:grid-cols-[200px_1fr] gap-8 relative"
                >
                  <div className="text-[11px] uppercase tracking-widest text-text-dim pt-1.5 font-bold bg-bg md:bg-transparent z-20">
                    {exp.period}
                  </div>
                  <div className="relative">
                    {/* Horizontal Indicator Line - Synchronized with top-to-bottom vertical line */}
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: 24 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + (idx * 0.35), duration: 0.4 }}
                      className="absolute left-[-72.5px] top-[17px] h-[1.5px] bg-accent z-30 hidden md:block shadow-[0_0_8px_rgba(212,175,55,0.3)]"
                    />

                    {/* Intersection Dot */}
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + (idx * 0.35), duration: 0.3 }}
                      className="absolute left-[-52.5px] top-[14px] w-2 h-2 rounded-full bg-accent border border-bg z-30 hidden md:block shadow-[0_0_10px_rgba(212,175,55,0.4)]"
                    />
                    
                    <h3 className="text-2xl font-serif mb-2">{exp.role}</h3>
                    <p className="text-accent text-sm font-bold uppercase tracking-widest mb-6">{exp.company}</p>
                    <ul className="space-y-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex gap-4 text-text-dim text-sm leading-relaxed">
                          <span className="text-accent mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Skills Radar */}
      <section id="skills" className="py-24 px-6 border-b border-border-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="section-header">Core Competencies</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard title="Frontend Architecture" icon={<Layout className="text-accent" />} items={skills.frontend} />
            <SkillCard title="Backend Ecosystem" icon={<Server className="text-accent" />} items={skills.backend} />
            <SkillCard title="Data Optimization" icon={<Database className="text-accent" />} items={skills.database} />
            <SkillCard title="Workflow & Tools" icon={<Code2 className="text-accent" />} items={skills.tools} />
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="section-header">Selected Works</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group luxury-card p-10 hover:border-accent/40 transition-all"
              >
                <div className="flex justify-between items-start mb-8">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 border border-border-subtle text-text-dim">
                    {project.type}
                  </span>
                  <ExternalLink size={16} className="text-text-dim group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-2xl font-serif mb-4">{project.title}</h3>
                <p className="text-text-dim text-sm mb-10 leading-relaxed font-light">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-mono text-accent/70 uppercase">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 border-t border-border-subtle bg-surface/30">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl font-serif mb-8 leading-tight">Get In <br /><span className="italic text-accent">Touch</span></h2>
              <p className="text-text-dim mb-12 leading-relaxed text-sm font-light">
                Available for freelance engagements and strategic engineering roles. 
                Let's discuss how we can build something exceptional.
              </p>
              
              <div className="space-y-10">
                <ContactInfo icon={<Mail size={18} className="text-accent" />} label="Email" value="sivakrishnakoparaju@gmail.com" link="mailto:sivakrishnakoparaju@gmail.com" />
                <ContactInfo icon={<Phone size={18} className="text-accent" />} label="Phone" value="+91 9100838642" link="tel:+919100838642" />
                <ContactInfo icon={<MapPin size={18} className="text-accent" />} label="Location" value="Unguturu, AP, India" />
              </div>
            </div>

            <div className="p-10 bg-surface border border-border-subtle">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="border-b border-border-subtle pb-2">
                  <label className="block text-[10px] font-bold text-accent uppercase tracking-widest mb-3">01 // Name</label>
                  <input type="text" placeholder="Your Name" className="w-full bg-transparent text-sm focus:outline-none placeholder:text-text-dim/30" />
                </div>
                <div className="border-b border-border-subtle pb-2">
                  <label className="block text-[10px] font-bold text-accent uppercase tracking-widest mb-3">02 // Email</label>
                  <input type="email" placeholder="email@address.com" className="w-full bg-transparent text-sm focus:outline-none placeholder:text-text-dim/30" />
                </div>
                <div className="border-b border-border-subtle pb-2">
                  <label className="block text-[10px] font-bold text-accent uppercase tracking-widest mb-3">03 // Message</label>
                  <textarea rows={3} placeholder="Tell me about your project..." className="w-full bg-transparent text-sm focus:outline-none placeholder:text-text-dim/30 resize-none" />
                </div>
                <button className="btn-primary w-full">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-border-subtle px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-10">
          <div>
            <h4 className="text-2xl font-serif mb-2">Koparaju Siva Krishna<span className="text-accent">.</span></h4>
            <p className="text-[10px] text-text-dim uppercase tracking-widest">© 2026 Portfolio v.01 / Built with Precision</p>
          </div>
          <div className="flex gap-6">
            <SocialIcon icon={<Linkedin size={18} />} link="https://www.linkedin.com/in/koparajusivakrishna/" />
            <SocialIcon icon={<Github size={18} />} link="#" />
            <SocialIcon icon={<Mail size={18} />} link="mailto:sivakrishnakoparaju@gmail.com" />
          </div>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ title, icon, items }: { title: string, icon: ReactNode, items: string[] }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-8 bg-surface border border-border-subtle flex flex-col items-center text-center"
    >
      <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
        {icon}
      </div>
      <h3 className="text-base font-serif mb-6 italic">{title}</h3>
      <div className="flex flex-wrap gap-2 justify-center">
        {items.map((skill) => (
          <span key={skill} className="px-3 py-1 bg-white/5 text-text-dim rounded-sm text-[10px] font-bold uppercase tracking-wider border border-white/5">
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function ContactInfo({ icon, label, value, link }: { icon: ReactNode, label: string, value: string, link?: string }) {
  const content = (
    <div className="flex items-center gap-6 group">
      <div className="w-10 h-10 border border-border-subtle flex items-center justify-center group-hover:border-accent/50 transition-colors">
        {icon}
      </div>
      <div>
        <p className="text-[9px] font-bold text-text-dim uppercase tracking-[0.2em] mb-1">{label}</p>
        <p className="text-text-main text-sm">{value}</p>
      </div>
    </div>
  );
  
  return link ? <a href={link} className="block">{content}</a> : <div className="block">{content}</div>;
}

function SocialIcon({ icon, link }: { icon: ReactNode, link: string }) {
  return (
    <a 
      href={link} 
      target="_blank"
      className="text-text-dim hover:text-accent transition-all"
    >
      {icon}
    </a>
  );
}
