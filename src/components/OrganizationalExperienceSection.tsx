import React from 'react';

export const OrganizationalExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-16 md:py-20 border-t border-border-hairline relative"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="bg-gradient-to-r from-bg-card via-zinc-900 to-bg-card hairline-border rounded-3xl p-8 sm:p-10 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 border border-accent/40 text-accent text-xs font-bold uppercase tracking-wider">
                ORGANIZATIONAL &amp; SOCIAL LEADERSHIP
              </div>
              <h3 className="font-display text-3xl sm:text-4xl text-white tracking-wide uppercase leading-[1.05]">
                CORE COMMITTEE MEMBER · PALANG MERAH REMAJA (PMR)
              </h3>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed">
                Active core committee member in the Youth Red Cross
                organization. Spearheaded UKS (School Health Unit) daily
                operational logistics, medical supply chain management, and
                organized emergency first aid readiness drills. Fostered deep
                teamwork, empathetic leadership, public communication, and calm
                crisis response under pressure.
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col justify-center items-start md:items-end border-t md:border-t-0 md:border-l border-border-hairline pt-6 md:pt-0 md:pl-8 space-y-4">
              <div className="text-left md:text-right">
                <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono block mb-1">
                  ORGANIZATION
                </span>
                <span className="text-white font-semibold text-lg">
                  Youth Red Cross (PMR)
                </span>
              </div>
              <div className="text-left md:text-right">
                <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono block mb-1">
                  KEY ASSETS
                </span>
                <span className="text-accent font-semibold text-sm">
                  Crisis Handling · Team Coordination
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
