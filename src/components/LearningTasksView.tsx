import React from 'react';
import { LEARNING_TASKS } from '../data';
import { CheckCircleIcon, ArrowRightIcon, CodeBracketIcon } from './Icons';

interface LearningTasksViewProps {
  onOpenTaskModal: (taskType: 'static' | 'portfolio' | 'js') => void;
  onOpenGetStarted: () => void;
}

export const LearningTasksView: React.FC<LearningTasksViewProps> = ({ onOpenTaskModal, onOpenGetStarted }) => {
  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* 1. HERO */}
      <section className="pt-12 sm:pt-20 lg:pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" aria-labelledby="learning-heading">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-3.5 py-1.5 rounded-full border border-purple-200">
            Self-Paced Foundational Curriculum
          </span>
          <h1 id="learning-heading" className="text-4xl sm:text-5xl font-extrabold text-[#101B35] tracking-tight font-['Space_Grotesk',sans-serif]">
            My Learning Journey
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Follow the hands-on progression from foundational HTML & CSS markup through responsive layout design to interactive JavaScript event-driven applications.
          </p>
        </div>
      </section>

      {/* 2. THREE INTERACTIVE TASK CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Interactive Learning Milestones">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {LEARNING_TASKS.map((task) => (
            <div
              key={task.id}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:border-blue-400/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                {/* Task Number & Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center font-extrabold font-['Space_Grotesk'] text-blue-600 text-lg group-hover:scale-110 transition-transform">
                    0{task.number}
                  </div>
                  <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                    Milestone 0{task.number}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-slate-900 font-['Space_Grotesk'] group-hover:text-blue-600 transition-colors">
                    {task.title}
                  </h2>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {task.description}
                  </p>
                </div>

                {/* Objectives */}
                <div className="space-y-3 pt-2 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Core Learning Objectives:
                  </h4>
                  <ul className="space-y-2">
                    {task.objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircleIcon className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="pt-2">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Technologies Applied:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {task.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8 mt-8 border-t border-slate-100">
                <button
                  onClick={() => onOpenTaskModal(task.modalType)}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 text-white font-bold text-xs shadow-md shadow-blue-500/20 hover:shadow-cyan-500/30 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <CodeBracketIcon className="w-4 h-4" />
                  <span>{task.ctaText}</span>
                  <ArrowRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PRACTICAL LEARNING ETHOS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#101B35] rounded-3xl p-8 sm:p-14 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Our Educational Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Space_Grotesk']">
              Learn By Building Real Software, Not Endless Syntax Tutorials
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We guide students and founders through real-world milestones where every lesson culminates in a tangible, working project. From the foundational HTML layout to real-time interactive JavaScript state, you see your progress come alive on screen immediately.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenGetStarted}
                className="px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-lg active:scale-95 transition-all"
              >
                Inquire About 1-on-1 Mentorship
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
