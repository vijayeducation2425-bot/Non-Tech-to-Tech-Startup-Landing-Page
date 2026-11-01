import React from 'react';
import { ProjectItem } from '../types';
import { CloseIcon, CheckCircleIcon, ArrowRightIcon } from './Icons';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenGetStarted: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose, onOpenGetStarted }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 animate-in zoom-in-95 duration-200 my-6 max-h-[92vh] flex flex-col">
        {/* Project Image Banner */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900 flex-shrink-0">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900/60 backdrop-blur-md text-white hover:bg-slate-900 transition-colors"
            aria-label="Close project modal"
          >
            <CloseIcon className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
              {project.metrics}
            </span>
            <h3 id="project-modal-title" className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] text-white">
              {project.title}
            </h3>
            <p className="text-sm text-slate-300 font-medium">
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Content Details */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6 text-slate-700">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
              Project Overview & Architecture
            </h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
              Technologies & Standards Applied
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-2">
            <h5 className="text-xs font-bold uppercase tracking-wider text-blue-700">
              Transformation Takeaway
            </h5>
            <p className="text-xs text-blue-900 leading-relaxed">
              This build demonstrates how clear structural planning transforms complex domain rules into an intuitive, high-performance web experience that drives measurable business outcomes.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
          >
            Back to Projects
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenGetStarted();
            }}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-xs shadow-md shadow-blue-500/20 active:scale-95 transition-all flex items-center gap-1.5"
          >
            <span>Start a Similar Project</span>
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
