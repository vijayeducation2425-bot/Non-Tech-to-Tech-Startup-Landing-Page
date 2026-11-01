import React, { useState, useEffect, useRef } from 'react';
import { PageView } from '../types';
import { SERVICES } from '../data';
import { LogoIcon, ChevronDownIcon, MenuIcon, CloseIcon, ArrowRightIcon, TransformIcon, WebIcon, DesignIcon, ConsultingIcon } from './Icons';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView, subTargetId?: string) => void;
  onOpenGetStarted: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenGetStarted }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);

  // Scroll detection for sticky navbar shadow & blur
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard navigation: Escape key closes menus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsServicesOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const getServiceIcon = (icon: string) => {
    switch (icon) {
      case 'transform':
        return <TransformIcon className="w-5 h-5 text-blue-600" />;
      case 'web':
        return <WebIcon className="w-5 h-5 text-cyan-600" />;
      case 'design':
        return <DesignIcon className="w-5 h-5 text-purple-600" />;
      case 'consulting':
        return <ConsultingIcon className="w-5 h-5 text-indigo-600" />;
      default:
        return <TransformIcon className="w-5 h-5 text-blue-600" />;
    }
  };

  const navItems: { label: string; page: PageView; hasDropdown?: boolean }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About Us', page: 'about' },
    { label: 'Services', page: 'services', hasDropdown: true },
    { label: 'Portfolio', page: 'portfolio' },
    { label: 'Learning Tasks', page: 'learning' },
    { label: 'Contact Us', page: 'contact' },
  ];

  const handleLinkClick = (page: PageView, subTargetId?: string) => {
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
    onNavigate(page, subTargetId);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#101B35]/95 backdrop-blur-md shadow-lg shadow-black/10 border-b border-slate-800'
          : 'bg-[#101B35] border-b border-slate-800/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Wordmark */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 text-left focus:outline-none group rounded-lg p-1"
            aria-label="Non-Tech to Tech Home"
          >
            <div className="relative transition-transform duration-300 group-hover:scale-105">
              <LogoIcon className="w-10 h-10" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5 font-['Space_Grotesk',sans-serif]">
                Non-Tech <span className="text-cyan-400 font-extrabold">to</span> Tech
              </span>
              <span className="text-[10px] tracking-wider uppercase text-slate-400 font-medium">
                Idea to Innovation
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;

              if (item.hasDropdown) {
                return (
                  <div key={item.page} className="relative" ref={servicesDropdownRef}>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      onMouseEnter={() => setIsServicesOpen(true)}
                      className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                        isActive
                          ? 'text-cyan-400 bg-slate-800/70'
                          : 'text-slate-200 hover:text-white hover:bg-slate-800/40'
                      }`}
                      aria-haspopup="true"
                      aria-expanded={isServicesOpen}
                      id="services-dropdown-btn"
                    >
                      <span>{item.label}</span>
                      <ChevronDownIcon
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isServicesOpen ? 'rotate-180 text-cyan-400' : 'text-slate-400'
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {isServicesOpen && (
                      <div
                        onMouseLeave={() => setIsServicesOpen(false)}
                        className="absolute left-0 mt-1 w-80 rounded-2xl bg-[#101B35] border border-slate-700/80 shadow-2xl p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                        role="menu"
                        aria-labelledby="services-dropdown-btn"
                      >
                        <div className="px-3 py-2 border-b border-slate-800 mb-1.5 flex items-center justify-between">
                          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                            Specialized Tracks
                          </span>
                          <button
                            onClick={() => handleLinkClick('services')}
                            className="text-xs text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1"
                          >
                            View All <ArrowRightIcon className="w-3 h-3" />
                          </button>
                        </div>
                        {SERVICES.map((service) => (
                          <button
                            key={service.id}
                            onClick={() => handleLinkClick('services', service.id)}
                            className="w-full flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-800/80 transition-colors text-left group"
                            role="menuitem"
                          >
                            <div className="p-2 rounded-lg bg-slate-800 border border-slate-700 group-hover:border-cyan-500/50 transition-colors">
                              {getServiceIcon(service.iconName)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                {service.title}
                              </p>
                              <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                                {service.tagline}
                              </p>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.page}
                  onClick={() => handleLinkClick(item.page)}
                  className={`relative px-3.5 py-2 text-sm font-semibold rounded-lg transition-all ${
                    isActive
                      ? 'text-cyan-400 bg-slate-800/70'
                      : 'text-slate-200 hover:text-white hover:bg-slate-800/40'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-3.5 right-3.5 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenGetStarted}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-size-200 hover:bg-right transition-all duration-300 text-white text-sm font-bold shadow-md shadow-blue-500/20 hover:shadow-cyan-500/30 active:scale-95 flex items-center gap-2 group cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#101B35] border-b border-slate-800 px-4 pt-2 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top duration-200">
          {navItems.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <div key={item.page} className="space-y-1">
                <button
                  onClick={() => handleLinkClick(item.page)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-blue-600/20 text-cyan-400 border border-cyan-500/30'
                      : 'text-slate-200 hover:bg-slate-800/80 hover:text-white'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400" />}
                </button>

                {/* Mobile Submenu for Services */}
                {item.hasDropdown && (
                  <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-900/40 rounded-xl mb-1">
                    {SERVICES.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => handleLinkClick('services', service.id)}
                        className="w-full flex items-center gap-2.5 py-2 px-3 text-xs font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg text-left"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span>{service.title}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <div className="pt-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenGetStarted();
              }}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-center shadow-lg shadow-blue-500/20 active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Get Started</span>
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
