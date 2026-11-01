import React, { useState } from 'react';
import { PageView, ProjectItem } from '../types';
import { SKILLS, PROJECTS } from '../data';
import {
  DownloadIcon,
  ArrowRightIcon,
  SocialGithub,
  SocialLinkedin,
  SocialTwitter,
  MailIcon,
  CheckCircleIcon,
  StarIcon
} from './Icons';

interface PortfolioViewProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenGetStarted: () => void;
  onNavigate: (page: PageView) => void;
}

export const PortfolioView: React.FC<PortfolioViewProps> = ({
  onSelectProject,
  onOpenGetStarted,
  onNavigate
}) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadCV = () => {
    // Generate and trigger download of clean CV summary text file
    const cvText = `Alex Chen — Digital Innovator & Creative Technologist
Non-Tech to Tech Startup Lead
Email: innovator@nontechtotech.dev
Website: https://nontechtotech.dev

SUMMARY
Passionate about transforming non-technical domain ideas into production-ready digital solutions through creativity, accessible web standards, and continuous learning.

CORE SKILLS
- HTML5 (Semantic outline, WCAG 2.1 AA accessibility, microdata)
- CSS3 (Modern Flexbox, CSS Grid, Responsive fluid design, Animations)
- JavaScript (ES6+, DOM APIs, stateful async interfaces)
- Responsive Web Design (Mobile-first, cross-browser compatibility)
- UI/UX Design (User flows, Figma component systems, interactive prototyping)
- Figma (Design systems, auto-layout, wireframes)
- Problem Solving (Simplifying complex business models into intuitive software)

KEY PROJECTS
1. Startup Landing Page — High-conversion interactive SaaS showcase (+184% conversion)
2. Personal Portfolio Website — Award-winning accessible digital identity (99/100 Lighthouse)
3. Interactive JavaScript Application — Dynamic real-time client-side analytics dashboard (<15ms response)

EDUCATION & CREDENTIALS
B.S. in Information Systems & Design
Full-Stack Web Innovation Specialist Certification
`;
    const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Alex_Chen_Digital_Innovator_CV.txt');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  const scrollToContact = () => {
    const el = document.getElementById('portfolio-contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* 1. HERO SECTION */}
      <section className="pt-12 sm:pt-20 lg:pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="portfolio-hero">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Profile Photo & Badges (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative">
              {/* Outer decorative ring */}
              <div className="absolute -inset-3 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 rounded-3xl blur-md opacity-40 animate-pulse-glow" />

              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-3xl overflow-hidden border-2 border-white shadow-2xl bg-[#101B35]">
                <img
                  src="/images/innovator-profile.jpg"
                  alt="Alex Chen, Digital Innovator portrait"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101B35]/70 via-transparent to-transparent pointer-events-none" />

                {/* Floating badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-slate-200 text-left flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-900">Alex Chen</p>
                    <p className="text-[10px] text-blue-600 font-semibold">Lead Product Innovator</p>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          {/* Intro Text (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider">
              <span>Creator & Technologist</span>
            </div>

            <h1 id="portfolio-hero" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#101B35] tracking-tight leading-[1.12] font-['Space_Grotesk',sans-serif]">
              Hello, I’m a <span className="gradient-text">Digital Innovator</span>.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Passionate about transforming ideas into digital solutions through creativity, technology and continuous learning.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              With a background spanning traditional business strategy and modern web software engineering, I specialize in taking vague napkins sketches and turning them into accessible, scalable, and intuitive digital reality.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={handleDownloadCV}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-sm shadow-md hover:shadow-cyan-500/25 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
              >
                <DownloadIcon className="w-4 h-4" />
                <span>Download CV</span>
              </button>

              <button
                onClick={scrollToContact}
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-bold text-sm border border-slate-300 shadow-sm active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Let’s Connect</span>
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>

            {downloadSuccess && (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2 animate-in fade-in duration-200">
                <CheckCircleIcon className="w-4 h-4 text-emerald-600" />
                <span>Alex_Chen_Digital_Innovator_CV.txt downloaded successfully!</span>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 2. SKILLS (Animated cards & progress indicators) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="skills-heading">
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Technical Capabilities
          </span>
          <h2 id="skills-heading" className="text-3xl sm:text-4xl font-extrabold text-[#101B35] tracking-tight font-['Space_Grotesk',sans-serif]">
            Core Competencies & Tooling
          </h2>
          <p className="text-slate-600 text-sm">
            Bridging foundational web technologies with modern design systems and pragmatic problem solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((skill) => (
            <div
              key={skill.name}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-cyan-400/50 transition-all duration-200 space-y-4"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-100">
                    {skill.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1 font-['Space_Grotesk']">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-lg font-extrabold font-mono text-blue-600">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar Indicator */}
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <p className="text-xs text-slate-500 leading-snug">
                {skill.highlight}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FEATURED PROJECTS (3 Cards with Preview, Desc, Tech, Modal CTA) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="projects-heading">
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
            Selected Works
          </span>
          <h2 id="projects-heading" className="text-3xl sm:text-4xl font-extrabold text-[#101B35] tracking-tight font-['Space_Grotesk',sans-serif]">
            Featured Transformation Projects
          </h2>
          <p className="text-slate-600 text-sm">
            Real-world digital applications built from initial non-technical business concepts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:border-blue-400/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Project Image Preview */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                  <img
                    src={proj.imageUrl}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[11px] font-bold bg-slate-900/90 text-cyan-400 border border-slate-700 backdrop-blur-md">
                    {proj.metrics}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <p className="text-xs font-semibold text-cyan-600">
                      {proj.tagline}
                    </p>
                    <h3 className="text-xl font-bold text-slate-900 font-['Space_Grotesk'] group-hover:text-blue-600 transition-colors">
                      {proj.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {proj.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {proj.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-medium border border-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectProject(proj)}
                  className="w-full py-3 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>View Project Details</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PORTFOLIO CONTACT SECTION */}
      <section id="portfolio-contact" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="portfolio-contact-heading">
        <div className="bg-[#101B35] rounded-3xl p-8 sm:p-12 text-white border border-slate-800 shadow-2xl space-y-8 relative overflow-hidden">
          <div className="relative z-10 text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Direct Contact
            </span>
            <h2 id="portfolio-contact-heading" className="text-3xl sm:text-4xl font-extrabold font-['Space_Grotesk']">
              Let’s Connect & Brainstorm
            </h2>
            <p className="text-slate-300 text-sm max-w-lg mx-auto">
              Whether you have an early idea, need technical mentorship, or want to explore digital collaboration, I’d love to hear from you.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="mailto:innovator@nontechtotech.dev"
              className="p-5 rounded-2xl bg-slate-900/90 border border-slate-700 hover:border-cyan-400 flex items-center gap-4 transition-colors group"
            >
              <div className="p-3 rounded-xl bg-blue-600/20 text-cyan-400 group-hover:scale-105 transition-transform">
                <MailIcon className="w-6 h-6" />
              </div>
              <div className="overflow-hidden">
                <p className="text-xs text-slate-400 font-semibold">Direct Email</p>
                <p className="text-sm font-bold text-white group-hover:text-cyan-400 truncate transition-colors">
                  innovator@nontechtotech.dev
                </p>
              </div>
            </a>

            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-700 flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400 font-semibold">Social Channels</p>
                <p className="text-sm font-bold text-white">Find me online</p>
              </div>
              <div className="flex gap-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-cyan-400 transition-colors"
                  aria-label="GitHub"
                >
                  <SocialGithub className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-cyan-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <SocialLinkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-cyan-400 transition-colors"
                  aria-label="Twitter"
                >
                  <SocialTwitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="relative z-10 pt-4 text-center">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-sm shadow-lg hover:shadow-cyan-500/20 active:scale-95 transition-all inline-flex items-center gap-2"
            >
              <span>Send a Detailed Inquiry via Contact Page</span>
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
