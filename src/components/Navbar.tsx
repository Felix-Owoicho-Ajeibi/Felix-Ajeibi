import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onHireMeClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onHireMeClick }) => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'work', 'about', 'services', 'skills', 'process', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-[#F5F7FA]/90 dark:bg-[#0B1F3A]/90 backdrop-blur-md shadow-xs border-b border-[#0B1F3A]/10 dark:border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Mark */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="group flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A00] rounded-sm py-1"
          aria-label="Felix Ajeibi - Back to top"
        >
          <span className="font-heading font-bold text-xl sm:text-2xl text-[#0B1F3A] dark:text-white tracking-tight">
            Felix Ajeibi
          </span>
          <span className="inline-block w-2 h-2 rounded-full bg-[#FF8A00] transition-transform duration-200 group-hover:scale-125" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative py-1 text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A00] rounded-sm ${
                  isActive
                    ? 'text-[#0B1F3A] dark:text-white font-semibold'
                    : 'text-[#667085] hover:text-[#0B1F3A] dark:text-slate-300 dark:hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF8A00] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA & Controls */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            className="p-2.5 rounded-lg border border-[#0B1F3A]/15 dark:border-white/15 bg-white/80 dark:bg-[#102944]/80 text-[#0B1F3A] dark:text-white hover:bg-slate-100 dark:hover:bg-[#102944] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A00] transition-colors cursor-pointer"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <Moon className="w-4 h-4 text-[#0B1F3A]" aria-hidden="true" />
            ) : (
              <Sun className="w-4 h-4 text-[#FF8A00]" aria-hidden="true" />
            )}
          </button>

          {/* Desktop "Hire Me" Button */}
          <button
            type="button"
            onClick={onHireMeClick}
            className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#FF8A00] hover:bg-[#E67A00] text-white font-medium text-sm shadow-xs hover:shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FF8A00] cursor-pointer"
          >
            <span>Hire Me</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-lg border border-[#0B1F3A]/15 dark:border-white/15 bg-white/80 dark:bg-[#102944]/80 text-[#0B1F3A] dark:text-white hover:bg-slate-100 dark:hover:bg-[#102944] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A00] transition-colors cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-[#0B1F3A] dark:text-white" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5 text-[#0B1F3A] dark:text-white" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-x-0 top-20 bottom-0 bg-[#F5F7FA]/98 dark:bg-[#0B1F3A]/98 backdrop-blur-xl border-t border-[#0B1F3A]/10 dark:border-white/10 p-6 flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200"
        >
          <div className="space-y-2">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#667085] dark:text-slate-400 mb-3 px-3">
              Navigation
            </div>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#FF8A00]/10 text-[#FF8A00] font-semibold'
                      : 'text-[#0B1F3A] dark:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-[#102944]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00]" />}
                </a>
              );
            })}
          </div>

          <div className="pt-6 border-t border-[#0B1F3A]/10 dark:border-white/10 space-y-4">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onHireMeClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#FF8A00] hover:bg-[#E67A00] text-white font-medium text-base shadow-xs"
            >
              <span>Hire Me</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </button>

            <div className="text-xs text-center text-[#667085] dark:text-slate-400">
              {PERSONAL_INFO.email}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
