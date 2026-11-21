import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
}) => {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-bg-card hairline-border max-w-lg w-full rounded-2xl p-6 sm:p-8 shadow-2xl relative"
      >
        <button
          type="button"
          aria-label="Close modal"
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-accent transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="space-y-4">
          <div className="flex items-center justify-between pr-10">
            <span className="font-display text-accent text-3xl leading-none">
              {project.index}
            </span>
            <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-accent/20 text-accent border border-accent/30 whitespace-nowrap">
              {project.status}
            </span>
          </div>

          <h3
            id="project-modal-title"
            className="font-display text-2xl text-white tracking-wide uppercase leading-tight"
          >
            {project.title}
          </h3>

          <p className="text-xs uppercase tracking-wider text-accent font-semibold">
            {project.category}
          </p>

          <p className="text-sm text-text-muted leading-relaxed">
            {project.description}
          </p>

          <div className="p-3.5 rounded-xl bg-zinc-950/70 border border-border-hairline">
            <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 block mb-1">
              ARCHITECTURE &amp; FOCUS
            </span>
            <p className="text-xs text-zinc-300 leading-relaxed">
              {project.architectureNote}
            </p>
          </div>

          <div className="pt-3 border-t border-border-hairline">
            <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 block mb-2">
              CORE HIGHLIGHTS
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.highlights.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full bg-accent hover:bg-accent-bright text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap"
            >
              Close Overview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
