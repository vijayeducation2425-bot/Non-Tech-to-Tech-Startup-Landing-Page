import React from 'react';
import { PageView } from '../types';
import { SERVICES } from '../data';
import { LogoIcon, SocialGithub, SocialLinkedin, SocialTwitter } from './Icons';

interface FooterProps {
  onNavigate: (page: PageView, subTargetId?: string) => void;
  onOpenGetStarted: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenGetStarted }) => {
  return (
    <footer className="bg-[#101B35] text-slate-300 border-t border-slate-800 relative overflow-hidden" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-800">
          
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <LogoIcon className="w-10 h-10" />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white font-['Space_Grotesk',sans-serif]">
                  Non-Tech <span className="text-cyan-400">to</span> Tech
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  Transform Your Ideas into Digital Innovation
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              We empower beginners, traditional business owners, and non-technical founders to transform ordinary ideas into extraordinary digital reality—without the jargon or gatekeeping.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800 transition-all active:scale-95"
                aria-label="GitHub Repository"
              >
                <SocialGithub className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800 transition-all active:scale-95"
                aria-label="LinkedIn Profile"
              >
                <SocialLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800 transition-all active:scale-95"
                aria-label="Twitter Profile"
              >
                <SocialTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('learning')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Learning Tasks
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Services Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Specialized Tracks
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onNavigate('services', s.id)}
                    className="hover:text-cyan-400 transition-colors text-left line-clamp-1"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={onOpenGetStarted}
                  className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors flex items-center gap-1.5 pt-1"
                >
                  Launch an Idea &rarr;
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter / Final Branding Card (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Status & Access
            </h3>
            <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open for Client Intake</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Currently onboarding cohort founders and enterprise transformation pilots.
              </p>
              <button
                onClick={onOpenGetStarted}
                className="w-full py-2 px-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-center transition-colors"
              >
                Inquire Today
              </button>
            </div>
          </div>

        </div>

        {/* Branding Message & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="font-semibold text-slate-200 tracking-wide text-center md:text-left">
            “Think Beyond Technology. Transform Ideas Into Innovation.”
          </p>
          <p className="text-center md:text-right">
            &copy; 2026 Non-Tech to Tech. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
