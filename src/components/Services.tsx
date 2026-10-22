import React from 'react';
import { Layout, Share2, TrendingUp, Cpu, ArrowRight, Check } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/portfolioData';

interface ServicesProps {
  onSelectService: (serviceDropdownValue: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: ServiceItem['iconName']) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-6 h-6 text-[#FF8A00]" />;
      case 'Share2':
        return <Share2 className="w-6 h-6 text-[#FF8A00]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-[#FF8A00]" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#FF8A00]" />;
      default:
        return <Layout className="w-6 h-6 text-[#FF8A00]" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-white dark:bg-[#0B1F3A]/60 border-t border-[#0B1F3A]/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#FF8A00]">
            Core Capabilities
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#0B1F3A] dark:text-white">
            Services & Expertise
          </h2>
          <p className="text-sm sm:text-base text-[#667085] dark:text-slate-300">
            Tailored digital services engineered to solve business bottlenecks, elevate brand presence, and deliver structured clarity.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="flex flex-col justify-between p-7 sm:p-8 rounded-2xl border border-[#0B1F3A]/10 dark:border-white/10 bg-[#F5F7FA]/70 dark:bg-[#102944]/70 hover:bg-white dark:hover:bg-[#102944] hover:shadow-lg transition-all duration-200"
            >
              <div className="space-y-6">
                {/* Header with Icon and Editorial Index */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-white dark:bg-[#0B1F3A] border border-[#0B1F3A]/10 dark:border-white/10 shadow-xs">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="font-heading font-bold text-sm text-[#667085] dark:text-slate-400">
                    0{index + 1}
                  </span>
                </div>

                {/* Title and Description */}
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#0B1F3A] dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#667085] dark:text-slate-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-semibold tracking-wider uppercase text-[#667085] dark:text-slate-400 block">
                    What's Included:
                  </span>
                  <ul className="space-y-2">
                    {service.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0B1F3A] dark:text-slate-200">
                        <Check className="w-4 h-4 text-[#FF8A00] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Legal / Educational Disclaimer for Financial Analysis */}
                {service.disclaimer && (
                  <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-800 dark:text-amber-200 leading-normal">
                    <span className="font-semibold">Notice:</span> {service.disclaimer}
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="pt-8 border-t border-[#0B1F3A]/10 dark:border-white/10 mt-6">
                <button
                  type="button"
                  onClick={() => onSelectService(service.serviceDropdownValue)}
                  className="w-full inline-flex items-center justify-between px-5 py-3 rounded-lg bg-white dark:bg-[#0B1F3A] hover:bg-[#FF8A00] hover:text-white dark:hover:bg-[#FF8A00] text-[#0B1F3A] dark:text-white border border-[#0B1F3A]/15 dark:border-white/15 text-sm font-semibold transition-all group cursor-pointer shadow-xs"
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-4 h-4 text-[#FF8A00] group-hover:text-white group-hover:translate-x-1 transition-all" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
