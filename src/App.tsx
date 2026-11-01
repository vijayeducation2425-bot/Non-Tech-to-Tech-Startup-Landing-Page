import React, { useState, useEffect } from 'react';
import { PageView, ProjectItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { AboutView } from './components/AboutView';
import { ServicesView } from './components/ServicesView';
import { PortfolioView } from './components/PortfolioView';
import { LearningTasksView } from './components/LearningTasksView';
import { ContactView } from './components/ContactView';
import { GetStartedModal } from './components/GetStartedModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { TaskPreviewModal } from './components/TaskPreviewModal';

export const App: React.FC = () => {
  // Navigation state synced with hash
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  // Modals state
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeTaskModal, setActiveTaskModal] = useState<'static' | 'portfolio' | 'js' | null>(null);

  // Listen to browser hash changes
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'about', 'services', 'portfolio', 'learning', 'contact'].includes(hash)) {
        setCurrentPage(hash as PageView);
      } else {
        setCurrentPage('home');
      }
    };

    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  const handleNavigate = (page: PageView, subTargetId?: string) => {
    setCurrentPage(page);
    window.location.hash = page;
    if (subTargetId) {
      setSelectedServiceId(subTargetId);
    }
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#1E293B]">
      {/* Sticky Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenGetStarted={() => setIsGetStartedOpen(true)}
      />

      {/* Main View Container */}
      <main className="flex-1" id="main-content">
        {currentPage === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenGetStarted={() => setIsGetStartedOpen(true)}
          />
        )}

        {currentPage === 'about' && (
          <AboutView
            onNavigate={handleNavigate}
            onOpenGetStarted={() => setIsGetStartedOpen(true)}
          />
        )}

        {currentPage === 'services' && (
          <ServicesView
            initialServiceId={selectedServiceId}
            onNavigate={handleNavigate}
            onOpenGetStarted={() => setIsGetStartedOpen(true)}
          />
        )}

        {currentPage === 'portfolio' && (
          <PortfolioView
            onSelectProject={(project) => setSelectedProject(project)}
            onOpenGetStarted={() => setIsGetStartedOpen(true)}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'learning' && (
          <LearningTasksView
            onOpenTaskModal={(type) => setActiveTaskModal(type)}
            onOpenGetStarted={() => setIsGetStartedOpen(true)}
          />
        )}

        {currentPage === 'contact' && (
          <ContactView />
        )}
      </main>

      {/* Global Persistent Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenGetStarted={() => setIsGetStartedOpen(true)}
      />

      {/* "Get Started" Modal Dialog */}
      <GetStartedModal
        isOpen={isGetStartedOpen}
        onClose={() => setIsGetStartedOpen(false)}
      />

      {/* Project Deep-Dive Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenGetStarted={() => {
          setSelectedProject(null);
          setIsGetStartedOpen(true);
        }}
      />

      {/* Learning Task Interactive Sandbox Modal */}
      <TaskPreviewModal
        isOpen={activeTaskModal !== null}
        onClose={() => setActiveTaskModal(null)}
        taskType={activeTaskModal || 'static'}
      />
    </div>
  );
};

export default App;
