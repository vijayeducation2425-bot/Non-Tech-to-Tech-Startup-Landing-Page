import React, { useState, useEffect } from 'react';
import { PageView } from '../types';
import { SERVICES } from '../data';
import {
  TransformIcon,
  WebIcon,
  DesignIcon,
  ConsultingIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  RocketIcon
} from './Icons';

interface ServicesViewProps {
  initialServiceId?: string;
  onOpenGetStarted: () => void;
  onNavigate: (page: PageView) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ initialServiceId, onOpenGetStarted, onNavigate }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    initialServiceId || SERVICES[0].id
  );

  useEffect(() => {
    if (initialServiceId) {
      setSelectedServiceId(initialServiceId);
      // Scroll to the detail section smoothly
      const el = document.getElementById('service-detail-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [initialServiceId]);

  const activeService = SERVICES.find(s => s.id === selectedServiceId) || SERVICES[0];

  const getServiceIcon = (iconName: string, className = "w-7 h-7") => {
    switch (iconName) {
      case 'transform':
        return <TransformIcon className={`${className} text-blue-600`} />;
      case 'web':
        return <WebIcon className={`${className} text-cyan-600`} />;
      case 'design':
        return <DesignIcon className={`${className} text-purple-600`} />;
      case 'consulting':
        return <ConsultingIcon className={`${className} text-indigo-600`} />;
      default:
        return <TransformIcon className={`${className} text-blue-600`} />;
    }
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* 1. HERO */}
      <section className="pt-12 sm:pt-20 lg:pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" aria-labelledby="services-hero">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 px-3.5 py-1.5 rounded-full border border-cyan-200">
            Specialized Transformation Services
          </span>
          <h1 id="services-hero" className="text-4xl sm:text-5xl font-extrabold text-[#101B35] tracking-tight font-['Space_Grotesk',sans-serif]">
            Everything You Need to Go from Concept to Code
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Whether you want to modernize an existing brick-and-mortar business or build a ground-up SaaS product, our specialized services are tailored for non-technical leaders.
          </p>
        </div>

        {/* Quick Service Selection Tabs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
          {SERVICES.map((s) => {
            const isSelected = s.id === selectedServiceId;
            return (
              <button
                key={s.id}
                onClick={() => setSelectedServiceId(s.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
                aria-pressed={isSelected}
              >
                {getServiceIcon(s.iconName, 'w-4 h-4')}
                <span>{s.title}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 2. ACTIVE SERVICE DEEP DIVE */}
      <section id="service-detail-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          {/* Header strip */}
          <div className="h-3 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600" />

          <div className="p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left overview */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                  {getServiceIcon(activeService.iconName, 'w-8 h-8')}
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Detailed Specification
                  </span>
                  <h2 className="text-3xl font-bold text-[#101B35] font-['Space_Grotesk']">
                    {activeService.title}
                  </h2>
                </div>
              </div>

              <p className="text-base text-cyan-700 font-semibold">
                {activeService.tagline}
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {activeService.description}
              </p>

              {/* Deliverables tags */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Concrete Deliverables You Will Receive:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeService.deliverables.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200 flex items-center gap-1.5"
                    >
                      <CheckCircleIcon className="w-3.5 h-3.5 text-cyan-600" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenGetStarted}
                  className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 active:scale-95 transition-all flex items-center gap-2"
                >
                  <span>Inquire for {activeService.title}</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-colors"
                >
                  Schedule Technical Call
                </button>
              </div>
            </div>

            {/* Right features checklist card */}
            <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-5">
              <h3 className="text-base font-bold text-slate-900 font-['Space_Grotesk']">
                What’s Included in This Track:
              </h3>
              <div className="space-y-3">
                {activeService.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700">
                    <CheckCircleIcon className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                    <span className="font-medium leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-cyan-900/10 border border-cyan-500/30 text-xs text-cyan-900 space-y-1">
                <p className="font-bold">Guaranteed Outcome:</p>
                <p className="text-slate-600 leading-relaxed">
                  Clean documentation, complete intellectual property assignment, and continuous training so you remain in full control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ALL 4 SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101B35] font-['Space_Grotesk']">
            Compare Our Service Offerings
          </h2>
          <p className="text-slate-600 text-sm">
            Choose individual tracks or assemble a comprehensive digital transformation program.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((s) => (
            <div
              key={s.id}
              className={`p-8 rounded-3xl border transition-all duration-200 flex flex-col justify-between ${
                s.id === selectedServiceId
                  ? 'bg-blue-50/40 border-blue-400 shadow-md ring-2 ring-blue-500/20'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
                    {getServiceIcon(s.iconName)}
                  </div>
                  <button
                    onClick={() => {
                      setSelectedServiceId(s.id);
                      const el = document.getElementById('service-detail-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-xs font-bold text-blue-600 hover:underline"
                  >
                    View Details &uarr;
                  </button>
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-['Space_Grotesk']">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {s.description}
                </p>
                <div className="pt-2 space-y-1.5">
                  {s.features.slice(0, 2).map((f, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">
                  {s.deliverables.length} Deliverables Included
                </span>
                <button
                  onClick={onOpenGetStarted}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold transition-colors"
                >
                  Start Track
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
