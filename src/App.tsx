/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { PortraitProvider } from './context/PortraitContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { About } from './components/About';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedServicePreload, setSelectedServicePreload] = useState<string>('Web Design & Development');

  const scrollToContact = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServicePreload(serviceName);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
      // Focus on the name input if accessible
      setTimeout(() => {
        const input = document.getElementById('contact-name');
        if (input) input.focus();
      }, 500);
    }
  };

  const scrollToWork = () => {
    const workEl = document.getElementById('work');
    if (workEl) {
      workEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <PortraitProvider>
        <div className="min-h-screen flex flex-col bg-[#F5F7FA] text-[#0B1F3A] dark:bg-[#0B1F3A] dark:text-[#F5F7FA] transition-colors duration-200">
          {/* 1. Navigation Header */}
          <Navbar onHireMeClick={() => scrollToContact()} />

          {/* Main Content Area in exact required sequence */}
          <main className="flex-1">
            {/* 2. Hero Section */}
            <Hero
              onViewWorkClick={scrollToWork}
              onHireMeClick={() => scrollToContact()}
            />

            {/* 3. Selected Work / Portfolio Projects */}
            <SelectedWork
              onDiscussProject={(serviceName) => scrollToContact(serviceName)}
            />

            {/* 4. About Me */}
            <About onHireMeClick={() => scrollToContact()} />

            {/* 5. Services */}
            <Services
              onSelectService={(serviceName) => scrollToContact(serviceName)}
            />

            {/* 6. Skills and Tools */}
            <Skills />

            {/* 7. Work Process */}
            <Process />

            {/* 8. Contact Section */}
            <Contact selectedServicePreload={selectedServicePreload} />
          </main>

          {/* 9. Footer */}
          <Footer />

          {/* 10. Floating WhatsApp Contact Button */}
          <FloatingWhatsApp />
        </div>
      </PortraitProvider>
    </ThemeProvider>
  );
}
