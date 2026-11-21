import React, { useState } from 'react';
import { SKILLS, WORK_PROCESS_STEPS } from '../data/portfolioData';

export const BentoSection: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  return (
    <section
      id="education-skills"
      className="py-16 md:py-24 border-t border-border-hairline bg-bg-elevated/40"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* COLUMN 1: Education & Skills */}
          <div className="lg:col-span-4 bg-bg-card hairline-border rounded-3xl p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-2xl text-white tracking-wide uppercase leading-none">
                  EDUCATION &amp; SKILLS
                </h3>
                <span className="text-xs font-sans text-accent tracking-widest uppercase font-bold">
                  PROFILE
                </span>
              </div>

              {/* Education Block */}
              <div className="mb-8">
                <span className="text-[11px] font-bold text-accent uppercase tracking-widest block mb-2">
                  EDUCATION
                </span>
                <div className="space-y-1.5">
                  <div className="flex items-baseline justify-between gap-2">
                    <h4 className="text-white font-semibold text-base">
                      Undergraduate Student
                    </h4>
                    <span className="text-xs font-mono text-zinc-400 bg-zinc-800/80 px-2 py-0.5 rounded whitespace-nowrap">
                      CURRENT
                    </span>
                  </div>
                  <p className="text-zinc-300 text-sm font-medium">
                    Informatics Engineering (Teknik Informatika)
                  </p>
                  <p className="text-zinc-400 text-xs">
                    Institut Teknologi PLN (ITPLN) · Jakarta
                  </p>
                </div>
              </div>

              {/* Skills Block */}
              <div>
                <span className="text-[11px] font-bold text-accent uppercase tracking-widest block mb-3">
                  SKILLS &amp; CAPABILITIES
                </span>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.map((skill) => {
                    const isSelected = selectedSkill === skill;
                    return (
                      <button
                        key={skill}
                        type="button"
                        onClick={() =>
                          setSelectedSkill(isSelected ? null : skill)
                        }
                        className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-accent/15 border-accent text-white'
                            : 'bg-zinc-900 border-zinc-800 text-zinc-200 hover:border-accent hover:text-white'
                        }`}
                      >
                        {skill}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-border-hairline flex items-center justify-between text-xs text-zinc-400">
              <span>
                {selectedSkill
                  ? `Focused capability: ${selectedSkill}`
                  : 'Passionate about continuous learning'}
              </span>
              <span className="text-accent font-bold" aria-hidden="true">
                ✦
              </span>
            </div>
          </div>

          {/* COLUMN 2: Work Process (5-Step Timeline) */}
          <div className="lg:col-span-4 bg-bg-card hairline-border rounded-3xl p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-2xl text-white tracking-wide uppercase leading-none">
                  WORK PROCESS
                </h3>
                <span className="text-xs font-mono text-zinc-500 uppercase whitespace-nowrap">
                  5 PHASES
                </span>
              </div>

              <div className="space-y-4 relative">
                <div
                  aria-hidden="true"
                  className="absolute left-4 top-3 bottom-3 w-[2px] bg-zinc-800 z-0"
                />

                {WORK_PROCESS_STEPS.map((step) => (
                  <div
                    key={step.number}
                    className="flex items-start gap-4 relative z-10"
                  >
                    <div className="w-8 h-8 rounded-full bg-zinc-900 border border-accent/60 text-accent font-display text-sm flex items-center justify-center shrink-0 shadow-lg tabular-nums">
                      {step.number}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-accent uppercase tracking-wider">
                        {step.title}
                      </h4>
                      <p className="text-zinc-300 text-xs leading-relaxed mt-0.5">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-border-hairline text-right">
              <span className="text-[11px] text-zinc-500 uppercase tracking-widest font-mono">
                METHODOLOGY · STRUCTURED CREATIVITY
              </span>
            </div>
          </div>

          {/* COLUMN 3: Crimson Card with Quote & Handwritten Signature */}
          <div className="lg:col-span-4 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-bg-crimson-dark via-bg-card to-bg-base border border-accent/40 shadow-[0_15px_40px_rgba(200,29,37,0.22)]">
            <div
              aria-hidden="true"
              className="absolute -top-6 -left-3 text-accent/20 font-serif text-[140px] leading-none select-none pointer-events-none"
            >
              “
            </div>

            <div className="relative z-10 mt-6">
              <p className="text-xl sm:text-2xl text-white font-medium leading-relaxed italic tracking-wide">
                “Good technology is not just how it runs, but how it solves real
                human problems and helps people grow together.”
              </p>
            </div>

            <div className="relative z-10 mt-10 pt-6 border-t border-white/10">
              <div className="flex items-end justify-between">
                <div className="font-hand text-5xl text-accent-bright font-bold tracking-wider -rotate-2 select-none">
                  Naufal
                </div>
                <div className="text-right">
                  <span
                    aria-hidden="true"
                    className="text-accent text-lg inline-block"
                  >
                    ✦
                  </span>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5">
                <p className="text-[11px] uppercase tracking-widest text-zinc-300 font-semibold">
                  LET&apos;S BUILD SOMETHING MEANINGFUL TOGETHER.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
