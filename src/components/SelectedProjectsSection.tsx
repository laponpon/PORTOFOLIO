import React from 'react';
import { PROJECTS, ProjectItem } from '../data/portfolioData';

interface SelectedProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

const getStatusBadgeClasses = (tone: ProjectItem['statusTone']) => {
  switch (tone) {
    case 'crimson':
      return 'text-accent border-white/10';
    case 'emerald':
      return 'text-emerald-400 border-white/10';
    default:
      return 'text-zinc-300 border-white/10';
  }
};

export const SelectedProjectsSection: React.FC<SelectedProjectsSectionProps> = ({
  onSelectProject,
}) => {
  return (
    <section
      id="projects"
      className="py-16 md:py-24 border-t border-border-hairline relative"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-5 border-b border-border-hairline gap-4">
          <div className="space-y-2">
            <h2 className="font-display text-3xl sm:text-4xl text-white tracking-wider uppercase leading-none">
              SELECTED PROJECTS
            </h2>
            <p className="text-text-muted text-xs uppercase tracking-widest">
              PRACTICAL EXPLORATIONS &amp; CREATIVE BUILDS
            </p>
          </div>

          <div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-zinc-400 hover:text-accent transition-colors whitespace-nowrap"
            >
              <span>EXPLORATIONS &amp; ROADMAP</span>
              <span className="text-base leading-none" aria-hidden="true">
                ⟶
              </span>
            </a>
          </div>
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {PROJECTS.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => onSelectProject(project)}
              className="group bg-bg-card hairline-border rounded-2xl overflow-hidden hover:border-accent/60 transition-all duration-300 flex flex-col text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {/* 16:10 Frame Preview */}
              <div className="w-full aspect-[16/10] bg-zinc-900 relative overflow-hidden flex items-center justify-center p-5 border-b border-border-hairline">
                {project.id === 'personal-web' && (
                  <div className="w-full h-full rounded-lg bg-zinc-950 border border-zinc-800 p-4 flex flex-col justify-between group-hover:scale-[1.03] transition-transform duration-300">
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                      <div className="flex gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-500/80" />
                        <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                        <span className="w-2 h-2 rounded-full bg-green-500/80" />
                      </div>
                      <span className="text-[10px] font-mono text-zinc-500">
                        {project.previewHeaderRight}
                      </span>
                    </div>
                    <div className="space-y-1.5 my-auto">
                      <div className="h-2 w-3/4 bg-accent/40 rounded" />
                      <div className="h-2 w-1/2 bg-zinc-700 rounded" />
                      <div className="h-2 w-5/6 bg-zinc-800 rounded" />
                    </div>
                    <div className="flex justify-between items-center text-[10px] text-zinc-500 font-mono">
                      <span>{project.previewFooterLeft}</span>
                      <span className="text-accent">
                        {project.previewFooterRight}
                      </span>
                    </div>
                  </div>
                )}

                {project.id === 'game-dev' && (
                  <div className="w-full h-full rounded-lg bg-zinc-950 border border-zinc-800 p-4 flex flex-col justify-between group-hover:scale-[1.03] transition-transform duration-300">
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                      <span className="text-[10px] font-mono text-accent">
                        {project.previewHeaderLeft}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-500">
                        {project.previewHeaderRight}
                      </span>
                    </div>
                    <div className="flex items-center justify-center gap-3 py-2">
                      <div className="w-10 h-10 border border-accent/50 bg-accent/10 rounded flex items-center justify-center text-accent text-lg font-mono">
                        ▲
                      </div>
                      <div className="w-10 h-10 border border-zinc-700 bg-zinc-800/40 rounded flex items-center justify-center text-zinc-400 text-lg font-mono">
                        ●
                      </div>
                      <div className="w-10 h-10 border border-zinc-700 bg-zinc-800/40 rounded flex items-center justify-center text-zinc-400 text-lg font-mono">
                        ■
                      </div>
                    </div>
                    <div className="text-[10px] text-zinc-500 font-mono text-center">
                      {project.previewFooterLeft}
                    </div>
                  </div>
                )}

                {project.id === 'informatics-lab' && (
                  <div className="w-full h-full rounded-lg bg-zinc-950 border border-zinc-800 p-4 flex flex-col justify-between group-hover:scale-[1.03] transition-transform duration-300">
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                      <span className="text-[10px] font-mono text-zinc-400">
                        {project.previewHeaderLeft}
                      </span>
                      <span className="text-[10px] font-mono text-accent">
                        {project.previewHeaderRight}
                      </span>
                    </div>
                    <div className="space-y-2 py-1">
                      <div className="flex items-center justify-between text-[11px] font-mono">
                        <span className="text-zinc-500">Sorting &amp; Search</span>
                        <span className="text-zinc-300">Binary Tree</span>
                      </div>
                      <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-accent h-full w-2/3" />
                      </div>
                    </div>
                    <div className="text-[10px] text-zinc-500 font-mono">
                      {project.previewFooterLeft}
                    </div>
                  </div>
                )}

                <div
                  className={`absolute top-3 right-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-semibold uppercase tracking-wider border whitespace-nowrap ${getStatusBadgeClasses(
                    project.statusTone
                  )}`}
                >
                  {project.status}
                </div>
              </div>

              {/* Card Meta Details */}
              <div className="w-full p-6 flex items-start justify-between gap-4 flex-1">
                <div className="space-y-2 min-w-0">
                  <span className="font-display text-2xl text-accent leading-none block">
                    {project.index}
                  </span>
                  <h3 className="font-display text-xl text-white tracking-wide leading-[1.1] group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-text-muted leading-relaxed">
                    {project.category}
                  </p>
                </div>
                <div
                  className="pt-1 text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-all text-xl shrink-0"
                  aria-hidden="true"
                >
                  ⟶
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
