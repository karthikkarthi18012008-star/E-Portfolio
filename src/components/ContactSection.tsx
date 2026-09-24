// src/components/ContactSection.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = 'karthikkarthi18012008@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/karthik-t-932564369';
  const githubUrl = 'https://github.com/karthikkarthi18012008-star';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-20 pb-16 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[42rem] h-[42rem] bg-[#D4AF37]/5 rounded-full blur-[190px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Eyebrow Header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex items-center space-x-4 mb-5"
              >
                <span
                  className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  05 / CONTACT &amp; CONNECT
                </span>
                <div className="w-16 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h2
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] tracking-tight uppercase leading-[0.85] select-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                    LET&apos;S BUILD
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                    SOMETHING
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#DFBE8A] via-[#9B7640] to-[#342410]">
                    WITH DATA.
                  </span>
                </h2>
              </motion.div>

              <p
                className="text-xs sm:text-[13.5px] font-light text-[#A8988B] leading-relaxed max-w-md mb-8"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Actively seeking <span className="text-[#F3DBB3] font-medium">Data Analytics Internships</span> and Business Intelligence opportunities. Available for collaboration in Bengaluru, Karnataka, India or remote.
              </p>

              {/* Quick Contact Badge Links */}
              <div className="space-y-3 mb-8">
                {/* Email Box */}
                <div className="p-3.5 border border-[#8C6D4F]/40 bg-[#0E0C09] rounded-sm flex items-center justify-between">
                  <div className="overflow-hidden mr-2">
                    <span className="text-[9px] font-mono text-[#D4AF37] block uppercase">// DIRECT EMAIL</span>
                    <a 
                      href={`mailto:${emailAddress}`}
                      className="text-xs font-mono text-[#E8D7C5] hover:text-[#D4AF37] transition-colors truncate block"
                    >
                      {emailAddress}
                    </a>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="shrink-0 px-3 py-1 text-[10px] font-mono uppercase border border-[#8C6D4F]/50 bg-[#16120E] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all"
                  >
                    {copiedEmail ? 'COPIED ✓' : 'COPY'}
                  </button>
                </div>

                {/* Social Connects */}
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-[#8C6D4F]/40 bg-[#0E0C09] hover:border-[#D4AF37] text-left transition-colors group"
                  >
                    <span className="text-[9px] font-mono text-[#8C6D4F] group-hover:text-[#D4AF37] block uppercase">// NETWORK</span>
                    <span className="text-xs font-medium text-[#E8D7C5] group-hover:text-white flex items-center justify-between">
                      LINKEDIN <span className="text-[10px] text-[#D4AF37]">↗</span>
                    </span>
                  </a>

                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-[#8C6D4F]/40 bg-[#0E0C09] hover:border-[#D4AF37] text-left transition-colors group"
                  >
                    <span className="text-[9px] font-mono text-[#8C6D4F] group-hover:text-[#D4AF37] block uppercase">// CODE REPOSITORIES</span>
                    <span className="text-xs font-medium text-[#E8D7C5] group-hover:text-white flex items-center justify-between">
                      GITHUB <span className="text-[10px] text-[#D4AF37]">↗</span>
                    </span>
                  </a>
                </div>
              </div>

              {/* Location Badge */}
              <div className="flex items-center space-x-2 text-xs font-mono text-[#A8988B]">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                <span>BENGALURU, KARNATAKA, INDIA</span>
              </div>
            </div>
          </div>

          {/* Right Column: Monolith Terminal Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative w-full rounded-sm border border-[#8C6D4F]/40 bg-[#0A0806] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            {/* Top Gold Horizon Edge */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />
            
            {/* Precision Corner Crosshairs */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/60" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#D4AF37]/60" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#D4AF37]/60" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/60" />

            {sent ? (
              <div className="py-16 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[#D4AF37] text-[#D4AF37] text-base mb-2">
                  ✓
                </div>
                <h3 className="text-3xl text-white font-normal uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  TRANSMISSION RECEIVED
                </h3>
                <p className="text-xs text-[#A8988B] font-light max-w-sm mx-auto" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Thank you for reaching out. Karthik T will review your message promptly. You can also connect directly via LinkedIn or email.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => { setSent(false); setFormData({ name: '', email: '', message: '' }); }}
                    className="px-5 py-2.5 border border-[#8C6D4F]/50 text-xs font-mono uppercase text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-colors"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">
                      // SENDER NAME
                    </span>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 px-4 py-3 outline-none rounded-sm transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>

                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">
                      // EMAIL ADDRESS
                    </span>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email"
                      className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 px-4 py-3 outline-none rounded-sm transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>
                </div>

                <div>
                  <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">
                    // MESSAGE / INQUIRY DETAILS
                  </span>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your analytics internship inquiry, project discussion, or collaboration..."
                    className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 p-4 outline-none rounded-sm transition-colors resize-none"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 border border-[#8C6D4F]/50 bg-[#14100D] hover:border-[#D4AF37] hover:bg-[#D4AF37] text-[#E8DFD8] hover:text-black text-xs font-medium tracking-[0.25em] uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  EXECUTE DISPATCH ↗
                </button>

              </form>
            )}
          </motion.div>

        </div>

        {/* System Footer Line */}
        <div className="pt-16 mt-16 border-t border-[#8C6D4F]/15 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
          <div className="flex items-center space-x-3">
            <span className="text-[10px] font-mono tracking-widest text-[#8C6D4F] uppercase">
              KARTHIK T // DATA ANALYTICS PORTFOLIO
            </span>
            <span className="text-[#8C6D4F]/40">•</span>
            <span className="text-[10px] font-mono text-[#D4AF37]">
              REVA UNIVERSITY 2029
            </span>
          </div>
          <span className="text-[10px] font-mono text-[#8C6D4F]">
            © {new Date().getFullYear()} • CRAFTED WITH DATA PRECISION &amp; CINEMATIC MOTION
          </span>
        </div>

      </div>
    </footer>
  );
};

export default ContactSection;