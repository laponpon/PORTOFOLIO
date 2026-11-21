/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, useRef, useState } from 'react';
import { BentoSection } from './components/BentoSection';
import { ContactFooterSection } from './components/ContactFooterSection';
import { CopyToast } from './components/CopyToast';
import { HeroSection } from './components/HeroSection';
import { OrganizationalExperienceSection } from './components/OrganizationalExperienceSection';
import { ProjectModal } from './components/ProjectModal';
import { SelectedProjectsSection } from './components/SelectedProjectsSection';
import { TopUtilityBar } from './components/TopUtilityBar';
import { CONTACT_INFO, ProjectItem } from './data/portfolioData';

export default function App() {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [toastState, setToastState] = useState<{
    visible: boolean;
    message: string;
  }>({ visible: false, message: 'Copied to clipboard!' });
  const toastTimerRef = useRef<number | null>(null);

  const showToast = useCallback((message: string) => {
    setToastState({ visible: true, message });
    if (toastTimerRef.current !== null) {
      window.clearTimeout(toastTimerRef.current);
    }
    toastTimerRef.current = window.setTimeout(() => {
      setToastState((prev) => ({ ...prev, visible: false }));
    }, 2600);
  }, []);

  const handleCopyEmail = useCallback(async () => {
    const email = CONTACT_INFO.email;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } else {
        throw new Error('Clipboard API unavailable');
      }
      showToast('Email copied!');
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = email;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        showToast('Email copied!');
      } catch {
        showToast(email);
      } finally {
        document.body.removeChild(textArea);
      }
    }
  }, [showToast]);

  return (
    <div className="bg-bg-base text-text-main min-h-screen relative antialiased">
      <CopyToast visible={toastState.visible} message={toastState.message} />

      <TopUtilityBar />

      <main>
        <HeroSection />
        <SelectedProjectsSection onSelectProject={setActiveProject} />
        <BentoSection />
        <OrganizationalExperienceSection />
        <ContactFooterSection onCopyEmail={handleCopyEmail} />
      </main>

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
}
