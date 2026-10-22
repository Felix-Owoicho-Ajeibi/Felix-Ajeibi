import React from 'react';
import { Globe, Palette, LineChart, Bot, Check } from 'lucide-react';
import { SKILL_GROUPS, SkillGroup } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getGroupIcon = (name: string) => {
    switch (name) {
      case 'Website Design & Development':
        return <Globe className="w-5 h-5 text-[#FF8A00]" />;
      case 'Design & Digital Marketing':
        return <Palette className="w-5 h-5 text-[#FF8A00]" />;
      case 'Financial Market Analysis':
        return <LineChart className="w-5 h-5 text-[#FF8A00]" />;
      case 'AI & Automation':
        return <Bot className="w-5 h-5 text-[#FF8A00]" />;
      default:
        return <Globe className="w-5 h-5 text-[#FF8A00]" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-[#F5F7FA] dark:bg-[#0B1F3A] border-t border-[#0B1F3A]/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#FF8A00]">
            Toolkit & Competencies
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#0B1F3A] dark:text-white">
            Skills & Software
          </h2>
          <p className="text-sm sm:text-base text-[#667085] dark:text-slate-300">
            A battle-tested stack of CMS platforms, technical analysis software, design tools, and modern automation utilities.
          </p>
        </div>

        {/* 4 Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_GROUPS.map((group: SkillGroup) => (
            <div
              key={group.name}
              className="p-6 rounded-2xl border border-[#0B1F3A]/10 dark:border-white/10 bg-white dark:bg-[#102944] space-y-5 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#F5F7FA] dark:bg-[#0B1F3A] border border-[#0B1F3A]/10 dark:border-white/10">
                    {getGroupIcon(group.name)}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-[#0B1F3A] dark:text-white">
                      {group.name}
                    </h3>
                    <p className="text-[11px] text-[#667085] dark:text-slate-400">
                      {group.category}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-[#667085] dark:text-slate-300 leading-relaxed">
                  {group.description}
                </p>

                {/* Skills Chips */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-[#F5F7FA] dark:bg-[#0B1F3A] text-[#0B1F3A] dark:text-slate-200 border border-[#0B1F3A]/10 dark:border-white/10"
                    >
                      <Check className="w-3 h-3 text-[#FF8A00]" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#0B1F3A]/5 dark:border-white/5 text-[11px] text-[#667085] dark:text-slate-400">
                Verified hands-on proficiency
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
