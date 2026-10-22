import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-[#0B1F3A] border-t border-[#0B1F3A]/10 dark:border-white/10 pt-16 pb-12 text-[#667085] dark:text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#0B1F3A]/10 dark:border-white/10">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5">
              <span className="font-heading font-bold text-xl text-[#0B1F3A] dark:text-white tracking-tight">
                Felix Ajeibi
              </span>
              <span className="w-2 h-2 rounded-full bg-[#FF8A00]" />
            </div>
            <p className="text-xs text-[#667085] dark:text-slate-400">
              Web Design · Brand Growth · Financial Market Analysis · AI Automation
            </p>
          </div>

          {/* Quick links */}
          <nav className="flex flex-wrap items-center gap-6 text-xs font-medium text-[#0B1F3A] dark:text-slate-200">
            <a href="#hero" className="hover:text-[#FF8A00] transition-colors">Home</a>
            <a href="#work" className="hover:text-[#FF8A00] transition-colors">Work</a>
            <a href="#about" className="hover:text-[#FF8A00] transition-colors">About</a>
            <a href="#services" className="hover:text-[#FF8A00] transition-colors">Services</a>
            <a href="#skills" className="hover:text-[#FF8A00] transition-colors">Skills</a>
            <a href="#process" className="hover:text-[#FF8A00] transition-colors">Process</a>
            <a href="#contact" className="hover:text-[#FF8A00] transition-colors">Contact</a>
          </nav>

          {/* Back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="self-start md:self-auto inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[#0B1F3A]/10 dark:border-white/10 hover:border-[#FF8A00] text-[#0B1F3A] dark:text-slate-200 hover:text-[#FF8A00] dark:hover:text-[#FF8A00] transition-colors cursor-pointer"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Regulatory & Educational Disclaimer */}
        <div className="p-4 rounded-xl bg-[#F5F7FA] dark:bg-[#102944]/60 border border-[#0B1F3A]/5 dark:border-white/5 space-y-1 text-[11px] leading-relaxed">
          <p className="font-semibold text-[#0B1F3A] dark:text-slate-300">
            Educational Disclaimer:
          </p>
          <p>
            All financial market studies, chart breakdowns, and price action logs shared across this portfolio and related materials are prepared strictly for educational, research, and informational purposes. They do not constitute financial advice, investment recommendations, or an endorsement of any particular trading decision.
          </p>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p>
            © {new Date().getFullYear()} {PERSONAL_INFO.fullName}. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};
