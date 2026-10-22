import React, { useState } from 'react';
import { FileText, ArrowUpRight, CheckCircle2, Upload } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { usePortrait } from '../context/PortraitContext';
import { CvModal } from './CvModal';

interface AboutProps {
  onHireMeClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onHireMeClick }) => {
  const [cvOpen, setCvOpen] = useState(false);
  const { portraitUrl, triggerUploadDialog, isCustomPhoto } = usePortrait();

  return (
    <section
      id="about"
      className="py-20 bg-[#F5F7FA] dark:bg-[#0B1F3A] border-t border-[#0B1F3A]/5 dark:border-white/5"
      aria-label="About Felix Owoicho Ajeibi"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Photo on desktop (stacked naturally on mobile) */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-md">
              <div
                className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-[#FF8A00]/20 to-transparent blur-md -z-10"
                aria-hidden="true"
              />
              <div className="rounded-2xl overflow-hidden border border-[#0B1F3A]/10 dark:border-white/10 bg-white dark:bg-[#102944] shadow-md group">
                <div className="relative aspect-[4/5] bg-slate-900 overflow-hidden">
                  <img
                    src={portraitUrl}
                    alt="Felix Owoicho Ajeibi working in web design and market research"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                    width="480"
                    height="600"
                  />

                  {/* Upload button overlay */}
                  <div className="absolute top-3 right-3 z-10">
                    <button
                      type="button"
                      onClick={triggerUploadDialog}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/75 hover:bg-black/90 text-white backdrop-blur-md text-xs font-medium border border-white/20 shadow-md transition-all cursor-pointer hover:border-[#FF8A00]"
                      title="Upload your own photo from device"
                    >
                      <Upload className="w-3.5 h-3.5 text-[#FF8A00]" />
                      <span>{isCustomPhoto ? 'Change Photo' : 'Upload Photo'}</span>
                    </button>
                  </div>
                </div>

                <div className="p-4 bg-white dark:bg-[#102944] border-t border-[#0B1F3A]/10 dark:border-white/10 flex items-center justify-between text-xs text-[#667085] dark:text-slate-300">
                  <span className="font-medium text-[#0B1F3A] dark:text-white">Felix O. Ajeibi</span>
                  <span>Based in Nigeria · Available Worldwide</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-2">
              <div className="text-xs font-semibold tracking-wider uppercase text-[#FF8A00]">
                Background & Philosophy
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#0B1F3A] dark:text-white">
                About Me
              </h2>
            </div>

            {/* Exactly two human, natural paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-[#667085] dark:text-slate-300 leading-relaxed font-normal">
              <p>
                {PERSONAL_INFO.bioParagraph1}
              </p>
              <p>
                {PERSONAL_INFO.bioParagraph2}
              </p>
            </div>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-[#0B1F3A] dark:text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF8A00] shrink-0" />
                <span>6+ Years Production Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF8A00] shrink-0" />
                <span>Client-First Communication</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF8A00] shrink-0" />
                <span>Modern CMS & Custom Code</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF8A00] shrink-0" />
                <span>Transparent Working Timelines</span>
              </div>
            </div>

            {/* Action Buttons: Download/View CV & Hire Me */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setCvOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#0B1F3A] dark:bg-white text-white dark:text-[#0B1F3A] hover:bg-[#102944] dark:hover:bg-slate-100 font-medium text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A00] cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#FF8A00]" />
                <span>Download / View CV</span>
              </button>

              <button
                type="button"
                onClick={onHireMeClick}
                className="inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-lg border border-[#0B1F3A]/20 dark:border-white/20 bg-white/60 dark:bg-[#102944]/60 text-[#0B1F3A] dark:text-white hover:bg-white dark:hover:bg-[#102944] font-medium text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A00] cursor-pointer"
              >
                <span>Initiate Contact</span>
                <ArrowUpRight className="w-4 h-4 text-[#FF8A00]" />
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* CV Modal */}
      <CvModal isOpen={cvOpen} onClose={() => setCvOpen(false)} />
    </section>
  );
};
