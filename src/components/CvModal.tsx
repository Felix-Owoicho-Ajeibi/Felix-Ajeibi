import React, { useEffect } from 'react';
import { X, Printer, Mail, Phone, MapPin, Briefcase, GraduationCap, CheckCircle } from 'lucide-react';
import { CV_DATA, PERSONAL_INFO } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs animate-in fade-in duration-150 print:p-0 print:bg-white"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl my-8 bg-white dark:bg-[#102944] rounded-2xl border border-[#0B1F3A]/10 dark:border-white/10 shadow-2xl overflow-hidden print:border-none print:shadow-none print:text-black print:bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Controls Bar (hidden during print) */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#0B1F3A]/10 dark:border-white/10 bg-[#F5F7FA] dark:bg-[#0B1F3A]/80 print:hidden">
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-sm text-[#0B1F3A] dark:text-white">
              Curriculum Vitae Preview
            </span>
            <span className="text-xs text-[#667085] dark:text-slate-400">· Verified Profile</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FF8A00] hover:bg-[#E67A00] text-white text-xs font-medium transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#667085] hover:text-[#0B1F3A] dark:text-slate-300 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close CV preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Document Body */}
        <div className="p-6 sm:p-10 space-y-8 max-h-[80vh] overflow-y-auto print:max-h-none print:overflow-visible">
          {/* Header */}
          <div className="border-b border-[#0B1F3A]/10 dark:border-white/10 pb-6 space-y-2">
            <h1 id="cv-title" className="text-3xl font-heading font-bold text-[#0B1F3A] dark:text-white">
              {CV_DATA.name}
            </h1>
            <p className="text-sm font-medium text-[#FF8A00]">
              {CV_DATA.title}
            </p>
            <div className="pt-2 flex flex-wrap gap-y-1 gap-x-4 text-xs text-[#667085] dark:text-slate-300">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-[#FF8A00]" />
                {CV_DATA.contact.email}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[#FF8A00]" />
                {CV_DATA.contact.phone}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#FF8A00]" />
                {CV_DATA.contact.location}
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-semibold tracking-wider uppercase text-[#FF8A00]">
              Professional Summary
            </h2>
            <p className="text-sm text-[#0B1F3A] dark:text-slate-200 leading-relaxed">
              {CV_DATA.summary}
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#FF8A00]" />
              <h2 className="text-xs font-semibold tracking-wider uppercase text-[#0B1F3A] dark:text-white">
                Professional Experience
              </h2>
            </div>

            <div className="space-y-6">
              {CV_DATA.experience.map((exp, idx) => (
                <div key={idx} className="space-y-2 pl-4 border-l-2 border-[#FF8A00]/40">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="font-heading font-bold text-base text-[#0B1F3A] dark:text-white">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-medium text-[#FF8A00]">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-[#667085] dark:text-slate-400">
                    {exp.organization}
                  </p>
                  <ul className="space-y-1.5 pt-1 text-xs text-[#0B1F3A] dark:text-slate-300">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <span className="text-[#FF8A00] mt-0.5">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Core Competencies */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#FF8A00]" />
              <h2 className="text-xs font-semibold tracking-wider uppercase text-[#0B1F3A] dark:text-white">
                Core Competencies & Tools
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#0B1F3A] dark:text-slate-300">
              {CV_DATA.coreCompetencies.map((comp, cIdx) => (
                <div key={cIdx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00]" />
                  <span>{comp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2 pt-2 border-t border-[#0B1F3A]/10 dark:border-white/10">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#FF8A00]" />
              <h2 className="text-xs font-semibold tracking-wider uppercase text-[#0B1F3A] dark:text-white">
                Education & Credentials
              </h2>
            </div>
            {CV_DATA.education.map((edu, eIdx) => (
              <div key={eIdx} className="text-xs text-[#667085] dark:text-slate-300 space-y-0.5">
                <p className="font-semibold text-[#0B1F3A] dark:text-white">{edu.degree}</p>
                <p>{edu.institution} · {edu.focus}</p>
              </div>
            ))}
          </div>

          {/* Direct Contact Footer */}
          <div className="pt-4 border-t border-[#0B1F3A]/10 dark:border-white/10 text-center text-xs text-[#667085] dark:text-slate-400">
            Available for direct contract engagements and remote employment globally · WhatsApp: {PERSONAL_INFO.phoneDisplay}
          </div>
        </div>
      </div>
    </div>
  );
};
