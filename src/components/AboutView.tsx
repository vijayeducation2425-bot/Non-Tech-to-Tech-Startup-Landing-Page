import React, { useState, useEffect } from 'react';
import { PageView } from '../types';
import { TEAM_MEMBERS, STATS } from '../data';
import { ArrowRightIcon, CheckCircleIcon, StarIcon } from './Icons';

interface AboutViewProps {
  onNavigate: (page: PageView) => void;
  onOpenGetStarted: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate, onOpenGetStarted }) => {
  // Animated counters state
  const [counts, setCounts] = useState<number[]>(STATS.map(() => 0));

  useEffect(() => {
    const duration = 1800; // ms
    const steps = 40;
    const intervalTime = duration / steps;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      const progress = stepCount / steps;
      setCounts(
        STATS.map((s) => {
          // Ease-out effect
          const easeOut = 1 - Math.pow(1 - progress, 3);
          return Math.min(s.value, Math.round(s.value * easeOut));
        })
      );

      if (stepCount >= steps) {
        clearInterval(timer);
        setCounts(STATS.map((s) => s.value));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* 1. HERO / INTRODUCTION */}
      <section className="pt-12 sm:pt-20 lg:pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="about-hero-heading">
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            About Non-Tech to Tech
          </span>
          <h1 id="about-hero-heading" className="text-4xl sm:text-5xl font-extrabold text-[#101B35] tracking-tight leading-[1.15] font-['Space_Grotesk',sans-serif]">
            Bridging the Chasm Between Human Ideas and Modern Software
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Non-Tech to Tech was founded on a simple conviction: the best solutions to the world’s problems come from domain experts and everyday innovators—not just software engineers.
          </p>
        </div>

        {/* Editorial Team Photograph */}
        <div className="mt-12 sm:mt-16 relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 max-w-5xl mx-auto group">
          <img
            src="/images/about-team.jpg"
            alt="Non-Tech to Tech editorial team collaborating in modern workspace with wireframes and user journeys"
            className="w-full h-[360px] sm:h-[480px] object-cover group-hover:scale-102 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101B35]/90 via-[#101B35]/30 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 text-white flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div className="space-y-1 max-w-xl">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                Innovation Studio // Collaborative Design
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-['Space_Grotesk'] text-white">
                Where Vision Meets Software Engineering
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Our cross-functional teams bring together experienced founders, human-centered UI designers, and systems architects to co-create with you.
              </p>
            </div>

            <button
              onClick={onOpenGetStarted}
              className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg active:scale-95 transition-all flex-shrink-0"
            >
              Join Our Next Cohort
            </button>
          </div>
        </div>
      </section>

      {/* 2. ANIMATED STATISTICS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Company Statistics">
        <div className="bg-[#101B35] rounded-3xl p-8 sm:p-12 border border-slate-800 text-white shadow-xl relative overflow-hidden">
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 relative z-10">
            {STATS.map((stat, i) => (
              <div key={i} className="space-y-2 text-center">
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-['Space_Grotesk']">
                    {counts[i]}
                  </span>
                  <span className="text-3xl sm:text-5xl font-extrabold text-cyan-400 font-['Space_Grotesk']">
                    {stat.suffix}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white font-['Space_Grotesk']">
                  {stat.label}
                </h3>
                <p className="text-xs text-slate-400 leading-snug">
                  {stat.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. VISION & MISSION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="vision-heading">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Vision */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4 hover:border-blue-400 transition-colors">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Our Vision
            </span>
            <h2 id="vision-heading" className="text-2xl sm:text-3xl font-bold text-[#101B35] font-['Space_Grotesk']">
              A World Where Any Idea Can Become Software
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              We envision a future where domain expertise in agriculture, medicine, retail, or the arts can translate effortlessly into customized digital products. Technology should be a transparent enabler, not an exclusive privilege.
            </p>
            <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-cyan-500" />
                <span>Eliminating technological anxiety for traditional businesses</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-cyan-500" />
                <span>Encouraging ethical, human-first digital craftsmanship</span>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4 hover:border-cyan-400 transition-colors">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
              Our Mission
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#101B35] font-['Space_Grotesk']">
              Pragmatic Co-Creation With Radical Clarity
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our mission is to walk beside you from initial ideation to live launch, explaining every architectural decision in clear, simple language. We build maintainable software assets that you own completely.
            </p>
            <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-cyan-500" />
                <span>100% intellectual property and code ownership retained by you</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="w-4 h-4 text-cyan-500" />
                <span>Hands-on education so your internal team can steer your tech</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. DIGITAL TRANSFORMATION APPROACH & PHILOSOPHY */}
      <section className="bg-slate-100/60 py-20 border-y border-slate-200" aria-labelledby="approach-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                Transformation Philosophy
              </span>
              <h2 id="approach-heading" className="text-3xl sm:text-4xl font-extrabold text-[#101B35] tracking-tight font-['Space_Grotesk',sans-serif]">
                “Technology is a Tool. Human Insight is the Soul.”
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Many modern technology initiatives fail because engineers rush to write code before understanding the human reality of the problem. We flip that dynamic on its head.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We believe that code is only successful when it makes someone’s day easier, saves hours of manual work, or delights a customer. By anchoring every technological choice in human empathy, we build systems that endure.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('services')}
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-colors inline-flex items-center gap-2"
                >
                  <span>Explore Our Services</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <h4 className="text-base font-bold text-slate-900 font-['Space_Grotesk']">
                  1. Discovery & Empathy Mapping
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We observe your existing daily operations, document friction points, and identify the highest-leverage digital opportunities.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <h4 className="text-base font-bold text-slate-900 font-['Space_Grotesk']">
                  2. Non-Technical Interactive Prototyping
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  You test and refine the screens and user flows as clickable prototypes before a single line of backend code is committed.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <h4 className="text-base font-bold text-slate-900 font-['Space_Grotesk']">
                  3. Sustainable Software Engineering
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We write modular, type-safe React and TypeScript code that is straightforward to maintain, audit, and scale.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. PROFESSIONAL TEAM SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="team-heading">
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Leadership & Mentors
          </span>
          <h2 id="team-heading" className="text-3xl sm:text-4xl font-extrabold text-[#101B35] tracking-tight font-['Space_Grotesk',sans-serif]">
            Meet the Team Guiding Your Journey
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Seasoned product builders and educators committed to your digital success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src={member.avatarUrl}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101B35]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-[#101B35] font-['Space_Grotesk'] group-hover:text-blue-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-600">
                    {member.role}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed pt-2">
                    {member.bio}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <span className="text-[11px] font-semibold text-slate-500">
                  Focus: {member.specialty}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#101B35] text-white p-8 sm:p-12 text-center border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <h2 className="text-2xl sm:text-4xl font-extrabold font-['Space_Grotesk']">
              Ready to Discuss Your Organization’s Evolution?
            </h2>
            <p className="text-slate-300 text-sm">
              We offer confidential idea reviews and digital readiness audits tailored specifically for non-technical leadership.
            </p>
            <div className="pt-2 flex justify-center gap-4">
              <button
                onClick={onOpenGetStarted}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-sm shadow-md active:scale-95 transition-all"
              >
                Book Discovery Session
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
