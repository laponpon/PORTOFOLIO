import React from 'react';

export const TopUtilityBar: React.FC = () => {
  return (
    <header className="w-full border-b border-border-hairline bg-bg-base/85 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-3.5 flex items-center justify-between gap-4 text-xs tracking-wider font-semibold">
        <div className="flex items-center gap-2 min-w-0">
          <span className="text-accent uppercase tracking-widest font-extrabold text-[11px] sm:text-xs whitespace-nowrap">
            INFORMATICS ENGINEERING STUDENT
          </span>
          <span className="text-zinc-600 hidden md:inline" aria-hidden="true">
            /
          </span>
          <span className="text-zinc-400 uppercase tracking-widest font-medium hidden md:inline text-[11px] sm:text-xs whitespace-nowrap">
            ASPIRING TECHNOLOGY ENTHUSIAST
          </span>
        </div>

        <a
          href="#contact"
          className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors shrink-0"
        >
          <span className="uppercase tracking-widest text-[11px] sm:text-xs font-semibold whitespace-nowrap">
            OPEN TO COLLAB &amp; INTERNSHIPS
          </span>
          <span aria-hidden="true" className="text-accent text-sm leading-none">
            ✦
          </span>
        </a>
      </div>
    </header>
  );
};
