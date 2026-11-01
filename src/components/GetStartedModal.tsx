import React, { useState, useEffect, useRef } from 'react';
import { CloseIcon, CheckCircleIcon, ArrowRightIcon } from './Icons';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GetStartedModal: React.FC<GetStartedModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('Digital Transformation');
  const [description, setDescription] = useState('');
  
  const [errors, setErrors] = useState<{ name?: string; email?: string; description?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Focus trap & Escape listener
  useEffect(() => {
    if (!isOpen) return;

    // Focus first input when opened
    const timer = setTimeout(() => {
      firstInputRef.current?.focus();
    }, 100);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: { name?: string; email?: string; description?: string } = {};
    if (!name.trim()) {
      newErrors.name = 'Please provide your name';
    }
    if (!email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!description.trim()) {
      newErrors.description = 'Please describe your idea or business challenge';
    } else if (description.trim().length < 10) {
      newErrors.description = 'Description must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate instantaneous client-side processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleResetAndClose = () => {
    setName('');
    setEmail('');
    setDescription('');
    setProjectType('Digital Transformation');
    setErrors({});
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
        onClick={handleResetAndClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div
        ref={modalRef}
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 animate-in zoom-in-95 fade-in duration-200 my-8"
      >
        {/* Header accent */}
        <div className="h-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600" />

        <div className="p-6 sm:p-8">
          {/* Close button */}
          <button
            onClick={handleResetAndClose}
            className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus:ring-2 focus:ring-blue-600"
            aria-label="Close dialog"
          >
            <CloseIcon className="w-5 h-5" />
          </button>

          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                <CheckCircleIcon className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-['Space_Grotesk',sans-serif]">
                Idea Received!
              </h3>
              <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                Thank you, <span className="font-semibold text-slate-900">{name}</span>. Our digital product strategists will review your idea for <span className="font-semibold text-blue-600">{projectType}</span> and get back to you at <span className="font-semibold text-slate-900">{email}</span> within 24 hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors"
                >
                  Close & Explore
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="space-y-1 pr-8 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Begin Your Transformation
                </span>
                <h3 id="modal-title" className="text-2xl font-bold text-[#101B35] tracking-tight font-['Space_Grotesk',sans-serif]">
                  Let’s Turn Your Idea Into Reality
                </h3>
                <p className="text-sm text-slate-600">
                  Tell us about your non-technical concept. We will design the path forward.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    ref={firstInputRef}
                    id="modal-name"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="e.g. Sarah Jenkins"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 ${
                      errors.name ? 'border-rose-400 focus:ring-rose-400 bg-rose-50/30' : 'border-slate-300 focus:ring-blue-600 focus:border-transparent'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-rose-500 mt-1 font-medium">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="modal-email" className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="sarah@example.com"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 ${
                      errors.email ? 'border-rose-400 focus:ring-rose-400 bg-rose-50/30' : 'border-slate-300 focus:ring-blue-600 focus:border-transparent'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-rose-500 mt-1 font-medium">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="modal-type" className="block text-xs font-semibold text-slate-700 mb-1">
                    Primary Area of Focus
                  </label>
                  <select
                    id="modal-type"
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="Digital Transformation">Digital Transformation for Existing Business</option>
                    <option value="Website Development">Custom Website or SaaS Development</option>
                    <option value="UI/UX Design">UI/UX Design & Clickable Prototype</option>
                    <option value="Technology Consulting">Technology Consulting & Roadmap</option>
                    <option value="Other Startup Idea">Brand New Non-Tech Startup Concept</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="modal-description" className="block text-xs font-semibold text-slate-700 mb-1">
                    Describe Your Idea or Goal *
                  </label>
                  <textarea
                    id="modal-description"
                    rows={3}
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                      if (errors.description) setErrors({ ...errors, description: undefined });
                    }}
                    placeholder="Briefly describe what you want to build or what non-technical workflow you want to transform..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 resize-none ${
                      errors.description ? 'border-rose-400 focus:ring-rose-400 bg-rose-50/30' : 'border-slate-300 focus:ring-blue-600 focus:border-transparent'
                    }`}
                  />
                  {errors.description && <p className="text-xs text-rose-500 mt-1 font-medium">{errors.description}</p>}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 text-white font-bold text-sm shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/35 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Submitting Your Idea...</span>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <ArrowRightIcon className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-center text-slate-500 mt-2">
                    🔒 No spam, ever. 100% confidential non-disclosure guaranteed.
                  </p>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
