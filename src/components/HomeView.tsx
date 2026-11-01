import React, { useState } from 'react';
import { PageView } from '../types';
import { SERVICES, FAQS } from '../data';
import {
  ArrowRightIcon,
  ChevronDownIcon,
  CheckCircleIcon,
  TransformIcon,
  WebIcon,
  DesignIcon,
  ConsultingIcon,
  RocketIcon,
  LightbulbIcon,
  StarIcon
} from './Icons';

interface HomeViewProps {
  onNavigate: (page: PageView, subTargetId?: string) => void;
  onOpenGetStarted: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenGetStarted }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'transform':
        return <TransformIcon className="w-7 h-7 text-blue-600" />;
      case 'web':
        return <WebIcon className="w-7 h-7 text-cyan-600" />;
      case 'design':
        return <DesignIcon className="w-7 h-7 text-purple-600" />;
      case 'consulting':
        return <ConsultingIcon className="w-7 h-7 text-indigo-600" />;
      default:
        return <TransformIcon className="w-7 h-7 text-blue-600" />;
    }
  };

  const steps = [
    {
      step: '01',
      title: 'Identify Your Idea',
      description: 'We sit down with you to unpack your domain expertise, dissect the core opportunity, and distill your vision into clear product outcomes without intimidating technical jargon.',
      icon: '💡'
    },
    {
      step: '02',
      title: 'Plan Your Digital Solution',
      description: 'We engineer a pragmatic architecture blueprint, define the leanest viable scope (MVP), and select battle-tested web technologies that align with your budget.',
      icon: '📐'
    },
    {
      step: '03',
      title: 'Design and Develop',
      description: 'Our team crafts accessible, intuitive UI/UX prototypes followed by clean, performant React and TypeScript code that turns wireframes into an interactive digital application.',
      icon: '⚡'
    },
    {
      step: '04',
      title: 'Launch and Grow',
      description: 'We orchestrate secure cloud deployment, run end-to-end responsiveness checks, onboard your team with hands-on walkthroughs, and set you up for continuous digital growth.',
      icon: '🚀'
    }
  ];

  const pillars = [
    {
      title: 'Innovation with Purpose',
      desc: 'We never build technology for the sake of complexity. Every feature, database table, and interface element directly serves your business purpose.'
    },
    {
      title: 'Radical Simplicity',
      desc: 'No confusing acronyms or buzzwords. We translate cloud architecture, front-end workflows, and APIs into plain, intuitive English you understand.'
    },
    {
      title: 'Accessible by Design',
      desc: 'Built to modern WCAG standards so that your digital products are intuitive, lightning-fast, and accessible to users of all backgrounds and abilities.'
    },
    {
      title: 'Practical Learning',
      desc: 'We do not hold you hostage to technical dependency. We teach you how your digital systems work, empowering you with confidence for the long run.'
    }
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 lg:pt-24 overflow-hidden" aria-labelledby="hero-heading">
        {/* Ambient background glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-cyan-400/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                <span>Ideas Without Limits</span>
              </div>

              {/* Main Heading */}
              <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#101B35] tracking-tight leading-[1.12] font-['Space_Grotesk',sans-serif]">
                From Non-Tech Ideas to{' '}
                <span className="gradient-text">Tech Innovations</span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Your ideas deserve a digital future. Discover how technology, creativity and innovation can transform ordinary concepts into extraordinary digital solutions.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={onOpenGetStarted}
                  className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 text-white font-bold text-base shadow-xl shadow-blue-500/25 hover:shadow-cyan-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span>Start Your Project</span>
                  <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => onNavigate('about')}
                  className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white hover:bg-slate-50 text-[#101B35] font-bold text-base border border-slate-300 shadow-sm hover:border-slate-400 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Explore Our Journey</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1.5">
                    <img className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" alt="Founder avatar" />
                    <img className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" alt="Founder avatar" />
                    <img className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=80&q=80" alt="Founder avatar" />
                  </div>
                  <div className="flex flex-col text-left">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="w-3.5 h-3.5 text-amber-400" />
                      ))}
                    </div>
                    <span className="font-bold text-slate-900">50+ ideas launched</span>
                  </div>
                </div>

                <div className="h-6 w-px bg-slate-200 hidden sm:block" />

                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="font-semibold text-slate-800">98% Founder Satisfaction</span>
                </div>
              </div>
            </div>

            {/* Right Visual (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Visual Frame */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-800 bg-[#101B35] group">
                  <img
                    src="/images/hero-visual.jpg"
                    alt="Digital Innovation visualization showing idea blueprint transforming into high-tech digital product"
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101B35]/80 via-transparent to-transparent pointer-events-none" />

                  {/* Floating badge 1: Top Right */}
                  <div className="absolute top-4 right-4 bg-[#101B35]/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-cyan-500/40 shadow-lg text-left animate-float">
                    <p className="text-[10px] text-cyan-400 font-mono uppercase tracking-wider">Concept → Code</p>
                    <p className="text-xs font-bold text-white">Full-Stack Digital MVP</p>
                  </div>

                  {/* Floating badge 2: Bottom Left */}
                  <div className="absolute bottom-4 left-4 bg-[#101B35]/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-blue-500/40 shadow-lg text-left">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                      <p className="text-xs font-bold text-white">50+ Ideas Launched</p>
                    </div>
                    <p className="text-[10px] text-slate-300 mt-0.5">Zero technical debt architecture</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. OUR MISSION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="mission-heading">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#101B35] to-[#1E293B] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-slate-700/60">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <span>Our Mission</span>
            </div>

            <h2 id="mission-heading" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug font-['Space_Grotesk',sans-serif]">
              Democratizing Technology for Every Creative Thinker
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              For too long, the technology world has been guarded by impenetrable jargon, convoluted acronyms, and overwhelming technical barriers. We believe that domain experts, small business operators, and imaginative beginners possess the best product ideas.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Our mission is to dismantle those barriers. We provide the mentorship, engineering craftsmanship, and architectural clarity needed to transform raw concepts into scalable, user-centric software that real people love to use.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-800">
              <div className="space-y-1">
                <span className="text-2xl font-extrabold text-cyan-400 font-['Space_Grotesk']">Zero</span>
                <p className="text-xs text-slate-300 font-medium">Technical jargon or gatekeeping</p>
              </div>
              <div className="space-y-1">
                <span className="text-2xl font-extrabold text-blue-400 font-['Space_Grotesk']">100%</span>
                <p className="text-xs text-slate-300 font-medium">Clarity and transparent collaboration</p>
              </div>
              <div className="space-y-1">
                <span className="text-2xl font-extrabold text-purple-400 font-['Space_Grotesk']">Rapid</span>
                <p className="text-xs text-slate-300 font-medium">Validation to functional production code</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE OFFER (4 Reusable Service Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="services-heading">
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            What We Offer
          </span>
          <h2 id="services-heading" className="text-3xl sm:text-4xl font-extrabold text-[#101B35] tracking-tight font-['Space_Grotesk',sans-serif]">
            Tailored Pathways to Digital Excellence
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Four targeted services engineered to take your ideas from the whiteboard to functional software reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-105 group-hover:bg-blue-600/10 transition-transform">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                    Track // {service.id}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-[#101B35] font-['Space_Grotesk'] group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-600">
                    {service.tagline}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed pt-1">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-2.5 pt-2 border-t border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Key Deliverables:
                  </span>
                  <div className="grid grid-cols-1 gap-2">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircleIcon className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('services', service.id)}
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 transition-colors"
                >
                  <span>Explore Track Details</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={onOpenGetStarted}
                  className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-blue-600 transition-colors"
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. HOW IT WORKS (4 Steps) */}
      <section className="bg-slate-100/60 py-20 border-y border-slate-200" aria-labelledby="process-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-100/80 px-3 py-1 rounded-full border border-cyan-200">
              The Journey
            </span>
            <h2 id="process-heading" className="text-3xl sm:text-4xl font-extrabold text-[#101B35] tracking-tight font-['Space_Grotesk',sans-serif]">
              How It Works
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A transparent, proven 4-stage framework that turns your concept into an active, revenue-generating digital product.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st) => (
              <div
                key={st.step}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-extrabold text-blue-600 font-['Space_Grotesk']">
                      {st.step}
                    </span>
                    <span className="text-2xl p-2 rounded-xl bg-slate-50 border border-slate-100">
                      {st.icon}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-['Space_Grotesk']">
                    {st.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {st.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100">
                  <span className="text-[11px] font-semibold text-cyan-600">
                    Stage {st.step} Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US (4 Pillars) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="why-heading">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
              Why Choose Us
            </span>
            <h2 id="why-heading" className="text-3xl sm:text-4xl font-extrabold text-[#101B35] tracking-tight font-['Space_Grotesk',sans-serif]">
              Built Specifically for Non-Technical Visionaries
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Most software agencies throw developer buzzwords at you and invoice by the hour. We act as your dedicated digital partners, communicating with absolute transparency and focusing exclusively on outcomes.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenGetStarted}
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-colors"
              >
                Work With Us
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((pil, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 hover:border-cyan-400/50 transition-colors"
              >
                <div className="w-9 h-9 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 font-bold text-xs">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-slate-900 font-['Space_Grotesk']">
                  {pil.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pil.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ (Accessible Accordion with 5 items) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="faq-heading">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
            Frequently Asked Questions
          </span>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-extrabold text-[#101B35] tracking-tight font-['Space_Grotesk',sans-serif]">
            Got Questions? We’ve Got Answers.
          </h2>
          <p className="text-slate-600 text-sm">
            Everything you need to know about embarking on your digital transformation journey.
          </p>
        </div>

        <div className="space-y-4" role="region" aria-label="Accordion Questions">
          {FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all duration-200 shadow-sm hover:border-slate-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-btn-${index}`}
                >
                  <span className="font-bold text-base text-[#101B35] font-['Space_Grotesk']">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180 bg-blue-50 text-blue-600' : ''
                    }`}
                  >
                    <ChevronDownIcon className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-btn-${index}`}
                    className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-150"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. HOME CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-blue-700 via-cyan-700 to-indigo-800 text-white p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-white/20">
              Ready When You Are
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-['Space_Grotesk',sans-serif]">
              Have an Idea? Let’s Turn It Into Technology!
            </h2>

            <p className="text-slate-100 text-sm sm:text-base leading-relaxed">
              Don’t let your non-technical background hold you back. Schedule a free, no-obligation idea discovery session with our team today.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenGetStarted}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-blue-900 font-extrabold text-sm shadow-xl hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                Start Your Project Today
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-900/40 hover:bg-blue-900/60 text-white font-bold text-sm border border-white/20 transition-colors"
              >
                Contact Our Team
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
