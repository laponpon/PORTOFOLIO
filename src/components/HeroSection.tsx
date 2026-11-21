import React, { useState } from 'react';
import { HERO_PORTRAIT_URL, HERO_STATS } from '../data/portfolioData';

export const HeroSection: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  const handleStatClick = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      className="relative pt-6 pb-20 md:pb-28 overflow-hidden"
      aria-label="Introduction"
    >
      {/* Ambient crimson light behind focal portrait */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none crimson-ambient opacity-80"
      />

      {/* Giant Decorative Wordmark "PORTFOLIO" */}
      <div
        aria-hidden="true"
        className="absolute top-2 left-0 right-0 w-full flex justify-center pointer-events-none select-none z-0 overflow-hidden"
      >
        <span className="font-display hero-wordmark-text text-[21vw] leading-none tracking-[-0.04em] text-center whitespace-nowrap opacity-90 uppercase">
          PORTFOLIO
        </span>
      </div>

      {/* Hero Grid Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-10 sm:pt-16 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* LEFT COLUMN: Intro, Name, Bio, Badge */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-5 order-2 lg:order-1 pt-4 lg:pt-0">
            <div>
              <span className="font-hand text-4xl sm:text-5xl text-accent-bright font-bold inline-block -rotate-3 hover:rotate-0 transition-transform duration-300">
                Hello, I&apos;m
              </span>
            </div>

            <div>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] tracking-tight text-white leading-[0.88] uppercase drop-shadow-xl">
                NAUFAL
                <br />
                <span className="text-zinc-100 hover:text-accent transition-colors duration-300">
                  NADHIF
                </span>
                <br />
                ARKAAN
              </h1>
            </div>

            <div className="pt-1">
              <p className="text-accent font-bold tracking-wider text-xs sm:text-sm uppercase flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="w-2 h-2 rounded-full bg-accent inline-block shrink-0"
                />
                <span>ITPLN STUDENT · WEB &amp; GAME DEV ENTHUSIAST</span>
              </p>
            </div>

            <p className="text-text-muted text-sm sm:text-base leading-relaxed max-w-lg font-normal">
              I&apos;m an Informatics Engineering student at{' '}
              <strong className="text-zinc-200 font-semibold">
                Institut Teknologi PLN
              </strong>{' '}
              with a strong interest in technology, computers, and programming. I
              enjoy exploring how technology works and building meaningful
              solutions in web and game development.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-bg-card hairline-border text-xs text-zinc-300 tracking-wide font-medium shadow-md">
                <svg
                  className="w-3.5 h-3.5 text-accent shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    clipRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    fillRule="evenodd"
                  />
                </svg>
                <span>INSTITUT TEKNOLOGI PLN · JAKARTA, ID</span>
              </div>
            </div>
          </div>

          {/* CENTER COLUMN: Portrait Visual & Floating Callout */}
          <div className="lg:col-span-4 flex justify-center items-center relative order-1 lg:order-2 py-4">
            <div className="relative w-72 sm:w-80 md:w-96 aspect-[3/4] max-h-[580px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(200,29,37,0.35)] bg-gradient-to-b from-bg-card via-zinc-900 to-black group">
              <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-transparent to-accent/15 z-10 pointer-events-none" />

              <div className="w-full h-full relative flex items-center justify-center bg-gradient-to-b from-zinc-800/80 to-zinc-950">
                {!imageError ? (
                  <img
                    src={HERO_PORTRAIT_URL}
                    alt="Naufal Nadhif Arkaan"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-bg-crimson-dark/50 via-zinc-900 to-bg-base">
                    <span className="font-display text-6xl text-accent/90 tracking-wider">
                      NNA
                    </span>
                    <span className="mt-2 text-xs uppercase tracking-widest text-zinc-400">
                      Naufal Nadhif Arkaan
                    </span>
                  </div>
                )}
              </div>

              {/* Floating Callout Badge */}
              <div className="absolute bottom-5 right-4 z-20 max-w-[215px] bg-bg-card/95 hairline-border-crimson backdrop-blur-md px-3.5 py-2.5 rounded-2xl shadow-2xl transform group-hover:scale-[1.03] transition-transform duration-300">
                <div className="flex items-start gap-2">
                  <span aria-hidden="true" className="text-white text-xs mt-0.5">
                    ✦
                  </span>
                  <p className="text-[11px] leading-snug text-zinc-300 font-medium">
                    Exploring code, web &amp; game worlds.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Stat Rows */}
          <div className="lg:col-span-3 flex flex-row lg:flex-col justify-around lg:justify-center gap-6 lg:gap-10 order-3 pt-4 lg:pt-0 border-t lg:border-t-0 border-border-hairline">
            {HERO_STATS.map((stat) => (
              <button
                key={stat.value}
                type="button"
                onClick={() => handleStatClick(stat.targetId)}
                className="group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg p-1 -m-1 transition-colors"
              >
                <div className="font-display text-4xl sm:text-5xl md:text-6xl text-accent tracking-tight leading-none group-hover:text-accent-bright transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-text-muted mt-1.5 font-semibold group-hover:text-zinc-300 transition-colors">
                  {stat.label}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
