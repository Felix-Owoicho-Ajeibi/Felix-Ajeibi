import React from 'react';
import { WORK_PROCESS, ProcessStep } from '../data/portfolioData';
import { Check } from 'lucide-react';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-white dark:bg-[#0B1F3A]/40 border-t border-[#0B1F3A]/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#FF8A00]">
            Methodology & Standards
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#0B1F3A] dark:text-white">
            How We Work Together
          </h2>
          <p className="text-sm sm:text-base text-[#667085] dark:text-slate-300">
            A structured four-phase delivery framework ensuring absolute clarity, predictable timelines, and no surprises.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {WORK_PROCESS.map((step: ProcessStep, index) => (
            <div
              key={step.number}
              className="relative flex flex-col justify-between p-6 rounded-2xl border border-[#0B1F3A]/10 dark:border-white/10 bg-[#F5F7FA]/70 dark:bg-[#102944]/70 hover:bg-white dark:hover:bg-[#102944] transition-all duration-200"
            >
              <div className="space-y-4">
                {/* Step Number */}
                <div className="flex items-center justify-between">
                  <span className="font-heading font-bold text-3xl sm:text-4xl text-[#FF8A00]">
                    {step.number}
                  </span>
                  <span className="text-xs font-semibold text-[#667085] dark:text-slate-400">
                    Phase {index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-heading font-bold text-[#0B1F3A] dark:text-white">
                  {step.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-[#667085] dark:text-slate-300 leading-relaxed">
                  {step.summary}
                </p>

                {/* Deliverables */}
                <div className="pt-3 border-t border-[#0B1F3A]/10 dark:border-white/10 space-y-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#667085] dark:text-slate-400 block">
                    Key Outputs:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#0B1F3A] dark:text-slate-200">
                    {step.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#FF8A00] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
