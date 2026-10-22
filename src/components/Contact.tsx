import React, { useState, useEffect } from 'react';
import { Mail, MessageCircle, Phone, Send, CheckCircle2, AlertCircle, Copy, Check, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  selectedServicePreload?: string;
}

export const Contact: React.FC<ContactProps> = ({ selectedServicePreload }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Web Design & Development');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState(''); // Anti-spam trap

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submissionSummary, setSubmissionSummary] = useState<{
    name: string;
    email: string;
    service: string;
    message: string;
    time: string;
  } | null>(null);

  // Update selected service if preloaded from a Service card CTA
  useEffect(() => {
    if (selectedServicePreload) {
      setService(selectedServicePreload);
    }
  }, [selectedServicePreload]);

  const serviceOptions = [
    'Web Design & Development',
    'Social Media Management',
    'Financial Market Analysis',
    'AI Automation',
    'Remote Job Opportunity',
    'Other',
  ];

  const validate = () => {
    const errs: { [key: string]: string } = {};

    if (!name.trim()) {
      errs.name = 'Please provide your name or business name.';
    }

    if (!email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = 'Please enter a valid email address (e.g., name@domain.com).';
    }

    if (!service) {
      errs.service = 'Please select a service or enquiry type.';
    }

    if (!message.trim()) {
      errs.message = 'Please provide a short description of your project or requirements.';
    } else if (message.trim().length < 10) {
      errs.message = 'Please share at least 10 characters so Felix can understand your project.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot detection
    if (honeypot) {
      console.warn('Bot detected via honeypot.');
      return;
    }

    if (!validate()) {
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    const formEndpoint = (import.meta as any).env?.VITE_FORMSPREE_ENDPOINT;

    try {
      if (formEndpoint) {
        // Send to remote form service if configured
        const response = await fetch(formEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
            service,
            message: message.trim(),
          }),
        });

        if (!response.ok) {
          throw new Error('Form service returned an error. Please try alternative contact below.');
        }
      } else {
        // Simulated latency for smooth UX when running locally or static deployment
        await new Promise((resolve) => setTimeout(resolve, 600));
      }

      setSubmissionSummary({
        name: name.trim(),
        email: email.trim(),
        service,
        message: message.trim(),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      });

      setStatus('success');
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(
        err?.message ||
          'Unable to deliver directly at this moment. Please use the WhatsApp or direct email buttons below.'
      );
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  // Pre-formatted WhatsApp link with current form message
  const generateFormWhatsAppUrl = () => {
    const text = `Hello Felix, my name is ${name || 'a visitor'}. I am interested in ${service}.\n\nMessage: ${message || 'I would like to discuss a project with you.'}`;
    return `https://wa.me/${PERSONAL_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
  };

  // Pre-formatted mailto link
  const generateMailtoUrl = () => {
    const subject = `Project Inquiry: ${service} - ${name || 'Client'}`;
    const body = `Hi Felix,\n\nName: ${name}\nEmail: ${email}\nService Needed: ${service}\n\nProject Overview:\n${message}\n\nBest regards,\n${name}`;
    return `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-20 bg-[#F5F7FA] dark:bg-[#0B1F3A] border-t border-[#0B1F3A]/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#FF8A00]">
            Get In Touch
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#0B1F3A] dark:text-white">
            Have a project in mind? Let's talk.
          </h2>
          <p className="text-sm sm:text-base text-[#667085] dark:text-slate-300">
            Whether you need a high-converting website, consistent brand management, market research breakdown, or an automated workflow—send a message below or connect directly.
          </p>
        </div>

        {/* 2-Column Contact Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white dark:bg-[#102944] p-6 sm:p-8 rounded-2xl border border-[#0B1F3A]/10 dark:border-white/10 shadow-xs">
            {status === 'success' && submissionSummary ? (
              <div className="space-y-6 animate-in fade-in">
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-200 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-sm font-semibold">Your inquiry has been compiled!</p>
                    <p className="text-xs text-emerald-700 dark:text-emerald-300">
                      Thank you, <span className="font-semibold">{submissionSummary.name}</span>. For the fastest response, you can forward this inquiry directly to Felix on WhatsApp or launch your mail client.
                    </p>
                  </div>
                </div>

                {/* Prepared Message Summary */}
                <div className="p-4 rounded-xl bg-[#F5F7FA] dark:bg-[#0B1F3A] border border-[#0B1F3A]/10 dark:border-white/10 space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between border-b border-[#0B1F3A]/10 dark:border-white/10 pb-2">
                    <span className="text-[#667085] dark:text-slate-400">Selected Service:</span>
                    <span className="font-semibold text-[#0B1F3A] dark:text-white">{submissionSummary.service}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#0B1F3A]/10 dark:border-white/10 pb-2">
                    <span className="text-[#667085] dark:text-slate-400">Sender Email:</span>
                    <span className="font-semibold text-[#0B1F3A] dark:text-white">{submissionSummary.email}</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-[#667085] dark:text-slate-400 block mb-1">Message:</span>
                    <p className="text-[#0B1F3A] dark:text-slate-200 italic bg-white dark:bg-[#102944] p-3 rounded-lg border border-[#0B1F3A]/5 dark:border-white/5">
                      "{submissionSummary.message}"
                    </p>
                  </div>
                </div>

                {/* Instant Hand-off Actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={generateFormWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-medium text-sm transition-colors shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp Now</span>
                  </a>

                  <a
                    href={generateMailtoUrl()}
                    className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg border border-[#0B1F3A]/20 dark:border-white/20 bg-white dark:bg-[#0B1F3A] hover:bg-slate-100 dark:hover:bg-[#102944] text-[#0B1F3A] dark:text-white font-medium text-sm transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#FF8A00]" />
                    <span>Open in Email App</span>
                  </a>
                </div>

                <div className="pt-2 text-center">
                  <button
                    type="button"
                    onClick={() => {
                      setStatus('idle');
                      setName('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="text-xs text-[#667085] hover:text-[#FF8A00] underline cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Honeypot field (hidden from humans, traps automated scrapers) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="hp_field">Do not fill this</label>
                  <input
                    type="text"
                    id="hp_field"
                    name="_gotcha"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Name Field */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#0B1F3A] dark:text-slate-200"
                  >
                    Your Name or Company <span className="text-[#FF8A00]">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
                    }}
                    placeholder="e.g., Alexandra Miller or Acme Corp"
                    className={`w-full px-4 py-3 rounded-xl bg-[#F5F7FA] dark:bg-[#0B1F3A] border text-sm text-[#0B1F3A] dark:text-white placeholder-[#667085]/60 dark:placeholder-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A00] transition-colors ${
                      errors.name
                        ? 'border-red-500'
                        : 'border-[#0B1F3A]/10 dark:border-white/10'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#0B1F3A] dark:text-slate-200"
                  >
                    Email Address <span className="text-[#FF8A00]">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
                    }}
                    placeholder="e.g., alexandra@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-[#F5F7FA] dark:bg-[#0B1F3A] border text-sm text-[#0B1F3A] dark:text-white placeholder-[#667085]/60 dark:placeholder-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A00] transition-colors ${
                      errors.email
                        ? 'border-red-500'
                        : 'border-[#0B1F3A]/10 dark:border-white/10'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Service Needed Dropdown */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-service"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#0B1F3A] dark:text-slate-200"
                  >
                    Service Needed <span className="text-[#FF8A00]">*</span>
                  </label>
                  <select
                    id="contact-service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F7FA] dark:bg-[#0B1F3A] border border-[#0B1F3A]/10 dark:border-white/10 text-sm text-[#0B1F3A] dark:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A00] transition-colors cursor-pointer"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-white dark:bg-[#0B1F3A] text-[#0B1F3A] dark:text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#0B1F3A] dark:text-slate-200"
                  >
                    Message / Project Details <span className="text-[#FF8A00]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) setErrors((prev) => ({ ...prev, message: '' }));
                    }}
                    placeholder="Tell Felix about your website scope, timeline, market analysis goals, or automation ideas..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#F5F7FA] dark:bg-[#0B1F3A] border text-sm text-[#0B1F3A] dark:text-white placeholder-[#667085]/60 dark:placeholder-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A00] transition-colors resize-y ${
                      errors.message
                        ? 'border-red-500'
                        : 'border-[#0B1F3A]/10 dark:border-white/10'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Error Banner if submit fails */}
                {status === 'error' && (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-xs text-red-600 dark:text-red-400 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#FF8A00] hover:bg-[#E67A00] disabled:opacity-60 text-white font-medium text-base shadow-xs hover:shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8A00] cursor-pointer"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Processing Inquiry...</span>
                    </span>
                  ) : (
                    <>
                      <span>Send Project Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Channels & Verified Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Card */}
            <div className="p-6 rounded-2xl border border-[#0B1F3A]/10 dark:border-white/10 bg-white dark:bg-[#102944] space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#25D366]/10 text-[#25D366]">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-[#0B1F3A] dark:text-white">
                    Direct WhatsApp
                  </h3>
                  <p className="text-xs text-[#667085] dark:text-slate-400">
                    Fastest response for project chats
                  </p>
                </div>
              </div>

              <p className="text-xs text-[#667085] dark:text-slate-300 leading-relaxed">
                Connect directly with Felix to ask questions, review availability, or share a brief.
              </p>

              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-medium text-xs transition-colors"
              >
                <span>Chat: {PERSONAL_INFO.phoneDisplay}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Email Channel */}
            <div className="p-6 rounded-2xl border border-[#0B1F3A]/10 dark:border-white/10 bg-white dark:bg-[#102944] space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#FF8A00]/10 text-[#FF8A00]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-[#0B1F3A] dark:text-white">
                    Official Email
                  </h3>
                  <p className="text-xs text-[#667085] dark:text-slate-400">
                    For formal proposals & briefs
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-[#F5F7FA] dark:bg-[#0B1F3A] border border-[#0B1F3A]/5 dark:border-white/5">
                <span className="text-xs font-mono text-[#0B1F3A] dark:text-white truncate max-w-[220px]">
                  {PERSONAL_INFO.email}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-md hover:bg-slate-200 dark:hover:bg-white/10 text-[#667085] dark:text-slate-300 transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Project%20Inquiry%20via%20Portfolio`}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#FF8A00] hover:text-[#E67A00] transition-colors"
              >
                <span>Compose email in your client</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Verified Professional Profiles */}
            <div className="p-6 rounded-2xl border border-[#0B1F3A]/10 dark:border-white/10 bg-white dark:bg-[#102944] space-y-3">
              <h3 className="text-xs font-semibold tracking-wider uppercase text-[#667085] dark:text-slate-400">
                Verified Profiles
              </h3>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {PERSONAL_INFO.socials.map((soc) => (
                  <a
                    key={soc.name}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg border border-[#0B1F3A]/10 dark:border-white/10 bg-[#F5F7FA] dark:bg-[#0B1F3A] hover:border-[#FF8A00] text-[#0B1F3A] dark:text-white transition-colors flex items-center justify-between"
                  >
                    <span className="font-medium">{soc.name}</span>
                    <span className="text-[11px] text-[#667085] dark:text-slate-400">Visit</span>
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
