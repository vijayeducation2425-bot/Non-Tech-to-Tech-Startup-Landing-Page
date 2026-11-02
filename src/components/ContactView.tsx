import React, { useState } from 'react';
import { ContactFormData, ContactFormErrors } from '../types';
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  SocialGithub,
  SocialLinkedin,
  SocialTwitter,
  CheckCircleIcon,
  ArrowRightIcon
} from './Icons';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validation function
  const validate = (): boolean => {
    const newErrors: ContactFormErrors = {};

    // 1. Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is mandatory.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full Name must contain at least 2 characters.';
    }

    // 2. Email Address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is mandatory.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format (e.g. name@domain.com).';
    }

    // 3. Phone Number
    // Must contain minimum 8 digits and standard phone characters (+, -, spaces, parentheses)
    const digitsOnly = formData.phone.replace(/\D/g, '');
    const phoneRegex = /^[\d\s\-+()]{8,20}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is mandatory.';
    } else if (!phoneRegex.test(formData.phone.trim()) || digitsOnly.length < 8) {
      newErrors.phone = 'Please provide a valid phone number (at least 8 digits).';
    }

    // 4. Message
    if (!formData.message.trim()) {
      newErrors.message = 'Message is mandatory.';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Please provide at least 15 characters describing your project or inquiry.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        message: ''
      });
      setErrors({});
    }, 600);
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-24">
      {/* 1. HERO */}
      <section className="pt-12 sm:pt-20 lg:pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" aria-labelledby="contact-heading">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Get in Touch
          </span>
          <h1 id="contact-heading" className="text-4xl sm:text-5xl font-extrabold text-[#101B35] tracking-tight font-['Space_Grotesk',sans-serif]">
            Let’s Build Something Amazing Together.
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Have an idea you’re ready to bring to life, or questions about how we work? Reach out and we will respond within one business day.
          </p>
        </div>
      </section>

      {/* 2. FORM & CONTACT DETAILS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Contact Details and Inquiry Form">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Contact Info & Designed Map (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#101B35] font-['Space_Grotesk']">
                Contact Information
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Connect directly with our advisory and engineering leaders across email, phone, or in person at our technology hub.
              </p>
            </div>

            {/* Contact Items */}
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-4 shadow-sm hover:border-blue-400 transition-colors">
                <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 flex-shrink-0">
                  <MailIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Email Address
                  </h4>
                  <a
                    href="mailto:tvijays2025@gmail.com"
                    className="text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors mt-0.5 block"
                  >
                    tvijays2025@gmail.com
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-4 shadow-sm hover:border-blue-400 transition-colors">
                <div className="p-2.5 rounded-xl bg-cyan-50 text-cyan-600 flex-shrink-0">
                  <PhoneIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Phone Support
                  </h4>
                  <a
                    href="tel:+919567818249"
                    className="text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors mt-0.5 block"
                  >
                    +91 95678 18249
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-start gap-4 shadow-sm hover:border-blue-400 transition-colors">
                <div className="p-2.5 rounded-xl bg-purple-50 text-purple-600 flex-shrink-0">
                  <MapPinIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Headquarters
                  </h4>
                  <p className="text-sm font-semibold text-slate-900 mt-0.5">
                    Anjarakandy, Kannur, Kerala, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="pt-2 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Follow Our Innovation Updates
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-blue-600 hover:border-blue-400 transition-all shadow-sm"
                  aria-label="GitHub"
                >
                  <SocialGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-blue-600 hover:border-blue-400 transition-all shadow-sm"
                  aria-label="LinkedIn"
                >
                  <SocialLinkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-blue-600 hover:border-blue-400 transition-all shadow-sm"
                  aria-label="Twitter"
                >
                  <SocialTwitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Designed Interactive Map Placeholder Graphic */}
            <div className="rounded-3xl border border-slate-200 bg-slate-900 text-white p-5 space-y-3 shadow-md relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-mono font-bold text-slate-300">
                    Map View // Kannur, Kerala
                  </span>
                </div>
                <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-cyan-400 font-mono">
                  11.8596° N, 75.5015° E
                </span>
              </div>

              {/* Styled Vector Map Grid Graphic */}
              <div className="relative h-44 w-full rounded-2xl bg-gradient-to-br from-slate-950 via-[#101B35] to-slate-900 overflow-hidden border border-slate-800 flex items-center justify-center">
                {/* Grid lines */}
                <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="gridPattern" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#2563EB" strokeWidth="0.8" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#gridPattern)" />
                </svg>

                {/* Animated Map Pin */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-600/30 flex items-center justify-center animate-ping absolute" />
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/50 text-white z-10">
                    <MapPinIcon className="w-5 h-5" />
                  </div>
                  <div className="mt-2 px-3 py-1 rounded-full bg-slate-900/95 border border-cyan-500/40 text-[11px] font-bold text-white shadow-xl">
                    Non-Tech to Tech HQ
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right: Validated Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl relative overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-blue-600 to-cyan-500 absolute top-0 left-0 right-0" />

              <div className="space-y-2 mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Send a Message
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#101B35] font-['Space_Grotesk']">
                  Direct Project Inquiry
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  All fields are mandatory. We guarantee strict confidentiality.
                </p>
              </div>

              {isSubmitted && (
                <div
                  role="alert"
                  className="mb-8 p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-2 animate-in fade-in duration-300"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                    <h4 className="font-bold text-base text-emerald-900 font-['Space_Grotesk']">
                      Thank You! Your Message Was Successfully Sent.
                    </h4>
                  </div>
                  <p className="text-xs text-emerald-700 leading-relaxed pl-8">
                    Our technical and partnership team will review your message and reply via email within 24 hours. The form has been reset for new inquiries.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* 1. Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    aria-required="true"
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? "fullName-error" : undefined}
                    className={`w-full px-4 py-3.5 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.fullName
                        ? 'border-rose-400 focus:ring-rose-400 bg-rose-50/20'
                        : 'border-slate-300 focus:ring-blue-600 focus:border-transparent'
                    }`}
                  />
                  {errors.fullName && (
                    <p id="fullName-error" className="text-xs text-rose-500 mt-1.5 font-semibold flex items-center gap-1">
                      <span>⚠</span> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* 2. Email Address */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`w-full px-4 py-3.5 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? 'border-rose-400 focus:ring-rose-400 bg-rose-50/20'
                        : 'border-slate-300 focus:ring-blue-600 focus:border-transparent'
                    }`}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-xs text-rose-500 mt-1.5 font-semibold flex items-center gap-1">
                      <span>⚠</span> {errors.email}
                    </p>
                  )}
                </div>

                {/* 3. Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    aria-required="true"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    className={`w-full px-4 py-3.5 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.phone
                        ? 'border-rose-400 focus:ring-rose-400 bg-rose-50/20'
                        : 'border-slate-300 focus:ring-blue-600 focus:border-transparent'
                    }`}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="text-xs text-rose-500 mt-1.5 font-semibold flex items-center gap-1">
                      <span>⚠</span> {errors.phone}
                    </p>
                  )}
                </div>

                {/* 4. Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Message & Project Scope <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your business or the non-technical idea you would like to transform into software..."
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`w-full px-4 py-3.5 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 resize-none transition-all ${
                      errors.message
                        ? 'border-rose-400 focus:ring-rose-400 bg-rose-50/20'
                        : 'border-slate-300 focus:ring-blue-600 focus:border-transparent'
                    }`}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-xs text-rose-500 mt-1.5 font-semibold flex items-center gap-1">
                      <span>⚠</span> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 text-white font-bold text-sm shadow-xl shadow-blue-500/20 hover:shadow-cyan-500/30 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span>Sending Your Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <ArrowRightIcon className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-center text-slate-500 mt-3">
                    Protected by client non-disclosure standards. No spam.
                  </p>
                </div>
              </form>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
