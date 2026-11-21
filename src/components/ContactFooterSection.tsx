import React, { useState } from 'react';
import { CONTACT_INFO } from '../data/portfolioData';

interface ContactFooterSectionProps {
  onCopyEmail: () => void;
}

const LAPTOP_SCREENS = [
  {
    header: 'NAUFAL_DEV_OS v2.4',
    status: '● LIVE',
    title: 'NAUFAL NADHIF',
    subtitle: 'ITPLN INFORMATICS',
    footerLeft: 'READY_FOR_CHALLENGES',
    footerRight: '2026',
  },
  {
    header: 'STACK_OVERVIEW',
    status: '● ACTIVE',
    title: 'WEB & GAME DEV',
    subtitle: 'HTML · CSS · JS · C++',
    footerLeft: 'OPEN_TO_COLLAB',
    footerRight: 'JAKARTA',
  },
];

export const ContactFooterSection: React.FC<ContactFooterSectionProps> = ({
  onCopyEmail,
}) => {
  const [screenIndex, setScreenIndex] = useState(0);
  const activeScreen = LAPTOP_SCREENS[screenIndex];

  return (
    <section
      id="contact"
      className="py-16 md:py-24 border-t border-border-hairline bg-black relative"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT: Pitch & CTA Buttons */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-[0.95]">
                LET&apos;S WORK
                <br />
                <span className="text-accent">TOGETHER</span>{' '}
                <span className="text-accent text-3xl align-top" aria-hidden="true">
                  ✦
                </span>
              </h2>
            </div>

            <p className="text-text-muted text-sm sm:text-base leading-relaxed">
              I&apos;m constantly open for new student projects, web
              collaborations, and technology internships. Let&apos;s create
              something modern, impactful, and technically refined.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-accent hover:bg-accent-bright text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-lg shadow-accent/30 whitespace-nowrap"
              >
                <span>CONNECT ON INSTAGRAM</span>
                <span aria-hidden="true">⟶</span>
              </a>

              <button
                type="button"
                onClick={onCopyEmail}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-bg-card hairline-border hover:border-accent text-zinc-200 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap"
              >
                <span>COPY EMAIL</span>
              </button>
            </div>
          </div>

          {/* MIDDLE: Detailed Contact Info */}
          <div className="lg:col-span-3 space-y-5 border-t lg:border-t-0 lg:border-l border-border-hairline pt-8 lg:pt-0 lg:pl-8">
            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-widest text-zinc-500 font-mono block">
                DIRECT INQUIRY
              </span>
              <button
                type="button"
                onClick={onCopyEmail}
                className="text-white hover:text-accent font-medium text-sm cursor-pointer transition-colors text-left"
              >
                {CONTACT_INFO.email}
              </button>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-widest text-zinc-500 font-mono block">
                SOCIAL
              </span>
              <p>
                <a
                  href={CONTACT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent font-medium text-sm transition-colors"
                >
                  {CONTACT_INFO.instagramHandle}
                </a>
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-widest text-zinc-500 font-mono block">
                CAMPUS
              </span>
              <p className="text-zinc-300 text-sm">{CONTACT_INFO.campus}</p>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-widest text-zinc-500 font-mono block">
                LOCATION
              </span>
              <p className="text-zinc-300 text-sm flex items-center gap-2">
                <span>{CONTACT_INFO.location}</span>
                <span
                  aria-hidden="true"
                  className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"
                />
              </p>
            </div>
          </div>

          {/* RIGHT: Sleek Laptop & Coffee Mug Setup Mockup */}
          <div className="lg:col-span-4 flex items-center justify-center">
            <button
              type="button"
              onClick={() =>
                setScreenIndex((prev) => (prev + 1) % LAPTOP_SCREENS.length)
              }
              title="Toggle workspace preview"
              className="relative w-full max-w-sm group select-none text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-2xl p-2"
            >
              {/* Laptop Visual */}
              <div className="relative mx-auto w-64 sm:w-72 bg-zinc-900 border border-zinc-700 rounded-t-xl pt-2 px-2 shadow-2xl shadow-accent/15 transform group-hover:-rotate-1 transition-transform duration-300">
                <div className="w-full aspect-[16/10] bg-black rounded overflow-hidden relative border border-zinc-800 flex flex-col justify-between p-3 bg-gradient-to-br from-zinc-950 via-bg-crimson-dark/40 to-black">
                  <div className="flex items-center justify-between text-[8px] font-mono text-zinc-500 border-b border-white/5 pb-1">
                    <span>{activeScreen.header}</span>
                    <span className="text-accent">{activeScreen.status}</span>
                  </div>
                  <div className="space-y-1 text-center my-auto">
                    <span className="text-accent font-display text-xl tracking-wider block">
                      {activeScreen.title}
                    </span>
                    <span className="text-[9px] uppercase tracking-widest text-zinc-400 block">
                      {activeScreen.subtitle}
                    </span>
                  </div>
                  <div className="text-[8px] font-mono text-zinc-600 flex justify-between">
                    <span>{activeScreen.footerLeft}</span>
                    <span>{activeScreen.footerRight}</span>
                  </div>
                </div>

                {/* Laptop Base / Hinge */}
                <div className="h-3 bg-zinc-800 rounded-b-md -mx-2 mt-1 border-t border-zinc-600 shadow-md flex justify-center items-center">
                  <div className="w-12 h-1 bg-zinc-700 rounded-full" />
                </div>
              </div>

              {/* Coffee Mug */}
              <div className="absolute bottom-0 right-2 sm:right-4 w-10 h-11 bg-zinc-900 border border-zinc-700 rounded-b-xl rounded-t-sm shadow-xl flex items-center justify-center">
                <span className="text-[8px] font-bold text-accent">NNA</span>
                <div className="absolute -right-2 top-2 w-2.5 h-6 border-2 border-zinc-700 rounded-r-md" />
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Copyright Hairline Bar */}
        <footer className="mt-20 pt-8 border-t border-border-hairline flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © 2026{' '}
            <span className="text-zinc-300 font-medium">
              Naufal Nadhif Arkaan
            </span>
            . All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span>Informatics Engineering · Institut Teknologi PLN</span>
            <span className="text-accent" aria-hidden="true">
              ✦
            </span>
          </div>
        </footer>
      </div>
    </section>
  );
};
