// src/components/ExperienceSection.tsx
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

interface RouteStop {
  id: string;
  year: string;
  title: string;
  organization: string;
  badge?: string;
  description: string;
  certificateImg?: string;
  certificatePdf?: string;
  credentialUrl?: string;
}

const journey: RouteStop[] = [
  {
    id: '01',
    year: 'SEP 2026',
    title: 'COMPLETE DATA ANALYST BOOTCAMP',
    organization: 'UDEMY CERTIFICATION // KRISH NAIK & KRISHAI TECHNOLOGIES',
    badge: 'VERIFIED CREDENTIAL (89 HOURS)',
    description:
      'Rigorous 89-hour industry bootcamp: complex SQL querying, exploratory analysis with Python (Pandas/NumPy), interactive Power BI dashboards, Power Query data transformation, star-schema data modeling, and DAX calculated measures. Certificate No: UC-298bd9fa-183b-46c7-8c8d-5e5b574c64c4.',
    certificateImg: '/certificates/data-analytics-cert.jpg',
    certificatePdf: '/certificates/data-analytics-cert.pdf',
    credentialUrl: 'https://ude.my/UC-298bd9fa-183b-46c7-8c8d-5e5b574c64c4',
  },
  {
    id: '02',
    year: 'AUG 2026',
    title: 'x402 GLOBAL CHALLENGE PREHACK',
    organization: 'KROWDKRAFT | ALGORAND BHARAT',
    badge: 'HACKATHON CERTIFICATE',
    description:
      'Participated in Bengaluru hackathon exploring agentic commerce: architected FarmFresh Supabase database tables, developed backend product and order endpoints, integrated HTTP 402 payment headers, and tested Algorand Testnet USDC settlement with Pera Wallet.',
    certificateImg: '/certificates/x402-hackathon-cert.jpeg',
  },
  {
    id: '03',
    year: '2025 - 2029',
    title: 'B.TECH — ARTIFICIAL INTELLIGENCE & MACHINE LEARNING',
    organization: 'REVA UNIVERSITY, BENGALURU',
    badge: 'CURRENT DEGREE PROGRAM',
    description:
      'Pursuing B.Tech curriculum building foundational mathematical, computational, and statistical rigor, while actively specializing in Business Intelligence, Cloud Data Warehousing (BigQuery), and Data Analytics.',
  },
  {
    id: '04',
    year: 'FOUNDATIONS',
    title: 'DEVELOPMENT TOWARD DATA ANALYTICS',
    organization: 'SELF-DIRECTED PORTFOLIO & REPOSITORIES',
    badge: 'PRACTICAL EXPERIENCE',
    description:
      'Engineered multi-source analytics projects connecting cloud repositories to Power BI, formulating advanced DAX calculations, modeling star schemas, and publishing reproducible analytics repositories on GitHub.',
  },
];

export const ExperienceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCert, setActiveCert] = useState<{ title: string; image: string; pdf?: string; url?: string } | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 90%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="journey"
      ref={containerRef}
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-12 pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Subtle Studio Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#D4AF37]/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-7"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            04 / JOURNEY &amp; CREDENTIALS
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              EDUCATION &amp;
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              MILESTONES.
            </span>
          </h2>
        </motion.div>

        {/* Minimalist Route Map */}
        <div className="relative w-full">
          
          {/* Background Track */}
          <div className="absolute left-[19px] md:left-[140px] top-4 bottom-8 w-[1px] bg-[#8C6D4F]/20" />
          
          {/* Animated Gold Track */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[19px] md:left-[140px] top-4 w-[2px] bg-gradient-to-b from-[#D4AF37] via-[#C99E5D] to-[#8C6D4F]/10 shadow-[0_0_10px_#D4AF37] origin-top"
          />

          <div className="space-y-12">
            {journey.map((stop, idx) => (
              <motion.div
                key={stop.id}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: idx * 0.08 }}
                className="relative flex flex-col md:flex-row items-start group"
              >
                {/* Desktop Year (Left side of track) */}
                <div className="hidden md:block w-[140px] shrink-0 pr-8 pt-0.5 text-right">
                  <span className="text-[10px] font-mono tracking-[0.2em] text-[#8C6D4F] group-hover:text-[#D4AF37] transition-colors">
                    {stop.year}
                  </span>
                </div>

                {/* Route Node */}
                <div className="absolute left-[19px] md:left-[140px] top-1.5 -translate-x-1/2 flex items-center justify-center">
                  <div className="absolute w-6 h-6 rounded-full border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/40 group-hover:scale-150 transition-all duration-700 ease-out" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#120F0C] border border-[#8C6D4F] group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] group-hover:shadow-[0_0_12px_#D4AF37] transition-colors duration-300" />
                </div>

                {/* Content (Right side of track) */}
                <div className="ml-14 md:ml-12 pl-2 flex-grow">
                  {/* Mobile Year */}
                  <div className="md:hidden mb-1.5">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-[#D4AF37]">
                      {stop.year}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3
                      className="text-2xl sm:text-3xl tracking-wide text-white group-hover:text-[#F7E7C4] transition-colors leading-none"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {stop.title}
                    </h3>
                    {stop.badge && (
                      <span className="text-[9px] font-mono tracking-wider uppercase px-2 py-0.5 border border-[#8C6D4F]/40 text-[#D4AF37] bg-[#120F0C]">
                        {stop.badge}
                      </span>
                    )}
                  </div>
                  
                  <span 
                    className="block text-[10.5px] font-medium tracking-[0.2em] uppercase text-[#8C6D4F] mb-2"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {stop.organization}
                  </span>
                  
                  <p 
                    className="text-xs sm:text-[13px] font-light text-[#A8988B] leading-[1.7] max-w-xl group-hover:text-[#D5CBC0] transition-colors mb-3"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {stop.description}
                  </p>

                  {/* Certificate Action Button if available */}
                  {stop.certificateImg && (
                    <div className="flex items-center gap-3 pt-1">
                      <button
                        onClick={() =>
                          setActiveCert({
                            title: stop.title,
                            image: stop.certificateImg!,
                            pdf: stop.certificatePdf,
                            url: stop.credentialUrl,
                          })
                        }
                        className="inline-flex items-center space-x-1.5 text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 border border-[#D4AF37]/50 bg-[#16120E] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all rounded-sm shadow-[0_0_12px_rgba(212,175,55,0.15)]"
                      >
                        <span>VIEW CERTIFICATE</span>
                        <span>↗</span>
                      </button>

                      {stop.credentialUrl && (
                        <a
                          href={stop.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] font-mono uppercase text-[#A8988B] hover:text-[#D4AF37] underline tracking-wider"
                        >
                          VERIFY ON UDEMY ↗
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* ================= CERTIFICATE MODAL ================= */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCert(null)}
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#0E0C0A] border border-[#D4AF37]/60 p-4 sm:p-6 rounded shadow-[0_0_60px_rgba(212,175,55,0.25)]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#8C6D4F]/40">
                <div>
                  <h4
                    className="text-2xl sm:text-3xl text-white font-normal uppercase"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {activeCert.title}
                  </h4>
                  <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider">
                    // OFFICIAL VERIFIED CREDENTIAL
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  {activeCert.pdf && (
                    <a
                      href={activeCert.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 border border-[#8C6D4F] text-xs font-mono text-[#E8D7C5] hover:border-[#D4AF37] transition-colors"
                    >
                      PDF ↓
                    </a>
                  )}
                  <button
                    onClick={() => setActiveCert(null)}
                    className="px-3 py-1 border border-[#D4AF37] text-xs font-mono text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-colors"
                  >
                    ESC [×]
                  </button>
                </div>
              </div>

              {/* Certificate Image Canvas */}
              <div className="relative overflow-hidden w-full max-h-[72vh] flex items-center justify-center bg-black/60 rounded">
                <img
                  src={activeCert.image}
                  alt={activeCert.title}
                  className="max-h-[72vh] w-auto max-w-full object-contain shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ExperienceSection;