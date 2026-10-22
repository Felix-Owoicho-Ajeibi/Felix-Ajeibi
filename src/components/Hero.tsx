import React from 'react';
import { ArrowDown, ArrowUpRight, CheckCircle2, Upload, RotateCcw, Check, Sparkles, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { usePortrait } from '../context/PortraitContext';

interface HeroProps {
  onViewWorkClick: () => void;
  onHireMeClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewWorkClick, onHireMeClick }) => {
  const {
    portraitUrl,
    isCustomPhoto,
    triggerUploadDialog,
    resetToDefault,
    notification,
    clearNotification,
  } = usePortrait();

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
      aria-label="Introduction and overview"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upload Success / Notification Toast */}
        {notification && (
          <div
            role="alert"
            className="mb-6 p-4 rounded-xl bg-white dark:bg-[#102944] border border-[#FF8A00]/30 shadow-lg flex items-center justify-between gap-3 animate-in fade-in slide-in-from-top-2 duration-200"
          >
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0B1F3A] dark:text-white font-medium">
              <span className="p-1 rounded-full bg-[#FF8A00]/20 text-[#FF8A00]">
                <Check className="w-4 h-4" />
              </span>
              <span>{notification}</span>
            </div>
            <button
              type="button"
              onClick={clearNotification}
              className="p-1 rounded-md text-[#667085] hover:text-[#0B1F3A] dark:hover:text-white cursor-pointer"
              aria-label="Dismiss message"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Messaging & Direct Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Availability Indicator */}
            <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#667085] dark:text-slate-300">
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>{PERSONAL_INFO.availability}</span>
            </div>

            {/* Exact Required Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-heading font-bold text-[#0B1F3A] dark:text-white leading-[1.12] tracking-tight">
              I design websites, grow brands, and read the markets.
            </h1>

            {/* Natural, Human Introduction with 6+ years experience */}
            <p className="text-base sm:text-lg text-[#667085] dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              {PERSONAL_INFO.intro}
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onViewWorkClick}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#FF8A00] hover:bg-[#E67A00] text-white font-medium text-base shadow-xs hover:shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FF8A00] cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onHireMeClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-[#0B1F3A]/20 dark:border-white/20 bg-white/70 dark:bg-[#102944]/70 hover:bg-white dark:hover:bg-[#102944] text-[#0B1F3A] dark:text-white font-medium text-base transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A00] cursor-pointer"
              >
                <span>Hire Me</span>
                <ArrowUpRight className="w-4 h-4 text-[#FF8A00]" aria-hidden="true" />
              </button>
            </div>

            {/* Quick trust cues */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-[#667085] dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF8A00]" aria-hidden="true" />
                <span>6+ Years Experience</span>
              </div>
              <span aria-hidden="true" className="opacity-40">·</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF8A00]" aria-hidden="true" />
                <span>WordPress & Shopify Specialist</span>
              </div>
              <span aria-hidden="true" className="opacity-40">·</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#FF8A00]" aria-hidden="true" />
                <span>Price Action Research</span>
              </div>
            </div>

          </div>

          {/* Right Column: Professional Portrait Frame with Upload Action */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Subtle accent halo */}
              <div
                className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#0B1F3A]/20 to-[#FF8A00]/25 dark:from-[#FF8A00]/20 dark:to-transparent blur-md -z-10"
                aria-hidden="true"
              />

              {/* Photo Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-[#0B1F3A]/10 dark:border-white/10 bg-white dark:bg-[#102944] shadow-lg group">
                
                {/* Image */}
                <div className="relative aspect-[4/5] bg-slate-900 overflow-hidden">
                  <img
                    src={portraitUrl}
                    alt="Felix Owoicho Ajeibi - Multidisciplinary Web Designer and Market Analyst"
                    width="480"
                    height="600"
                    className="w-full h-full object-cover object-top transition-transform duration-300"
                    fetchPriority="high"
                  />

                  {/* Top Floating Upload Button / Status Badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
                    <button
                      type="button"
                      onClick={triggerUploadDialog}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/75 hover:bg-black/90 text-white backdrop-blur-md text-xs font-medium border border-white/20 shadow-md transition-all cursor-pointer hover:border-[#FF8A00]"
                      title="Upload your own photo from device"
                    >
                      <Upload className="w-3.5 h-3.5 text-[#FF8A00]" />
                      <span>{isCustomPhoto ? 'Change Photo' : 'Upload My Photo'}</span>
                    </button>

                    {isCustomPhoto && (
                      <button
                        type="button"
                        onClick={resetToDefault}
                        className="p-1.5 rounded-lg bg-black/75 hover:bg-black/90 text-slate-300 hover:text-white backdrop-blur-md border border-white/20 transition-all cursor-pointer"
                        title="Reset to default photo"
                        aria-label="Reset photo"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {/* Indicator if custom photo is loaded */}
                  {isCustomPhoto && (
                    <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-[#0B1F3A]/85 backdrop-blur-sm border border-emerald-500/30 text-emerald-400 text-[11px] font-medium flex items-center gap-1.5">
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span>Custom Photo Active</span>
                    </div>
                  )}
                </div>

                {/* Subtitle Card */}
                <div className="p-4 sm:p-5 bg-white/95 dark:bg-[#102944]/95 border-t border-[#0B1F3A]/10 dark:border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="font-heading font-bold text-base sm:text-lg text-[#0B1F3A] dark:text-white">
                        {PERSONAL_INFO.fullName}
                      </h2>
                      <p className="text-xs sm:text-sm text-[#667085] dark:text-slate-300">
                        Web Designer · Digital Strategist · Market Analyst
                      </p>
                    </div>
                    <span className="text-xs font-medium text-[#FF8A00] bg-[#FF8A00]/10 px-2.5 py-1 rounded-sm">
                      Nigeria / Remote
                    </span>
                  </div>

                  {/* Secondary Quick Upload Trigger Prompt */}
                  <div className="mt-3 pt-3 border-t border-[#0B1F3A]/10 dark:border-white/10 flex items-center justify-between text-xs text-[#667085] dark:text-slate-400">
                    <span>Have your own photo?</span>
                    <button
                      type="button"
                      onClick={triggerUploadDialog}
                      className="font-medium text-[#FF8A00] hover:text-[#E67A00] flex items-center gap-1 cursor-pointer"
                    >
                      <Upload className="w-3 h-3" />
                      <span>Click to upload file</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
