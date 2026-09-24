import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface DashboardView {
  title: string;
  image: string;
  caption: string;
}

interface Project {
  number: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
  txUrl?: string;
  txId?: string;
  tech: string[];
  workflow?: string[];
  metrics: { label: string; value: string }[];
  dashboards?: DashboardView[];
  contribution?: string[];
}

const projects: Project[] = [
  {
    number: '01',
    title: 'Sales Performance & Product Analysis',
    subtitle: 'POWER BI · DAX · POWER QUERY · DATA MODELING',
    category: 'BUSINESS INTELLIGENCE & REVENUE ANALYTICS',
    description:
      'Interactive multi-page Power BI sales dashboard transforming raw retail transactions into executive business intelligence. Features comprehensive analysis across profitability, order volume, promotional discounts, top/bottom product rankings, and geographic performance.',
    githubUrl:
      'https://github.com/karthikkarthi18012008-star/PowerBI_Data_Analytics_Projects/tree/main/01-Sales-Performance-Analysis',
    tech: ['Power BI Desktop', 'Power Query', 'DAX', 'Data Modeling', 'Data Visualization'],
    workflow: ['Raw Sales Data', 'Power Query Transformation', 'Star Schema Modeling', 'DAX Calculations', 'Interactive Visuals'],
    metrics: [
      { label: 'PAGES', value: 'Overview, Comparison, Top/Bottom, Data' },
      { label: 'METRICS', value: 'Sales, Profit, Orders, Quantity' },
      { label: 'ANALYSIS', value: 'Geographic, Promotion & Discounts' },
    ],
    dashboards: [
      {
        title: 'Sales Overview',
        image: '/projects/sales-overview.png',
        caption: 'High-level KPI executive cards tracking Total Sales, Profit, Orders & Units Sold with monthly trends and regional heatmaps.',
      },
      {
        title: 'Comparison Analysis',
        image: '/projects/sales-comparison.png',
        caption: 'Correlating revenue generation with underlying profit margins and volume to identify margin slippages.',
      },
      {
        title: 'Top & Bottom 5 Products',
        image: '/projects/sales-topbottom.png',
        caption: 'Ranking best and under-performing products by sales, profit, and quantity to guide inventory planning.',
      },
    ],
  },
  {
    number: '02',
    title: 'Housing Market Analysis',
    subtitle: 'GOOGLE BIGQUERY × POWER BI CLOUD ANALYTICS',
    category: 'CLOUD DATA WAREHOUSING & MARKET INTELLIGENCE',
    description:
      'End-to-end cloud business intelligence pipeline demonstrating modern enterprise data flow. Raw housing market records are extracted and queried in Google BigQuery using SQL, structured via Power Query, modeled with custom DAX measures, and visualized across interactive market dashboards.',
    githubUrl:
      'https://github.com/karthikkarthi18012008-star/End-to-End-PowerBI-Google-BigQuery',
    tech: ['Google BigQuery', 'SQL', 'Microsoft Power BI', 'Power Query', 'DAX', 'Data Modeling'],
    workflow: [
      'Housing Dataset',
      'Google BigQuery',
      'SQL Data Exploration',
      'Power BI Connection',
      'Power Query',
      'Data Modeling',
      'DAX Measures',
      'Interactive Dashboards',
    ],
    metrics: [
      { label: 'CLOUD WAREHOUSE', value: 'Google BigQuery SQL' },
      { label: 'DATA MODEL', value: 'Power BI DAX Calculated Engine' },
      { label: 'PERSPECTIVES', value: 'House Type, Sales & Market Trends' },
    ],
    dashboards: [
      {
        title: 'House Market Overview',
        image: '/projects/housing-overview.png',
        caption: 'Comprehensive housing market overview tracking average property prices, total volume, and regional price distributions.',
      },
      {
        title: 'Sales Performance',
        image: '/projects/housing-sales.png',
        caption: 'Time-series analysis of sales velocity, transaction volumes, and year-over-year pricing movements.',
      },
      {
        title: 'House Type Analysis',
        image: '/projects/housing-type.png',
        caption: 'Categorical breakdown comparing unit prices, demand dynamics, and property characteristics across house classifications.',
      },
    ],
  },
  {
    number: '03',
    title: 'UPI Transaction Analysis Dashboard',
    subtitle: 'POWER BI · DIGITAL PAYMENTS EXPLORATION',
    category: 'FINTECH & DIGITAL PAYMENTS ANALYTICS',
    description:
      'Specialized India payments analytics dashboard dissecting millions of UPI transactions. Analyzes monthly transaction velocity, city-level distribution, bank-wise transaction performance, user demographics (age, gender), device distribution, payment modes, and remaining balance patterns.',
    githubUrl:
      'https://github.com/karthikkarthi18012008-star/PowerBI_Data_Analytics_Projects/tree/main/03-UPI-Data-Analysis',
    tech: ['Power BI Desktop', 'Power Query', 'DAX', 'Matrix Visuals', 'Interactive Filtering'],
    workflow: ['UPI Transaction Data', 'ETL & Normalization', 'Matrix Hierarchies', 'Multi-Slicer Filtering', 'Behavioral Visuals'],
    metrics: [
      { label: 'DIMENSIONS', value: 'Bank, City, Device, Merchant' },
      { label: 'CITIES ANALYZED', value: 'Bangalore, Delhi, Mumbai, Hyderabad' },
      { label: 'SLICERS', value: 'Payment Method, Purpose, Age Group' },
    ],
    dashboards: [
      {
        title: 'Monthly Transactions',
        image: '/projects/upi-month.png',
        caption: 'Monthly column breakdown visualizing payment volume peaks and seasonal transaction trends across banks.',
      },
      {
        title: 'City & Monthly Matrix',
        image: '/projects/upi-cities.png',
        caption: 'Multi-level matrix decomposing transaction amounts and remaining account balances across major metropolitan hubs.',
      },
    ],
  },
  {
    number: '04',
    title: 'FarmFresh — AI Farmer Marketplace',
    subtitle: 'AGENTIC COMMERCE · x402 PROTOCOL · ALGORAND TESTNET',
    category: 'HACKATHON // x402 GLOBAL CHALLENGE PREHACK 2026',
    description:
      'Autonomous agent-ready agricultural commerce platform connecting farmers, customers, and AI agents. Autonomous AI agents discover farm produce and initiate pay-per-use purchases via HTTP 402, with USDC settlement verified on Algorand Testnet.',
    githubUrl: 'https://github.com/karthikkarthi18012008-star/FarmFresh',
    liveUrl: 'https://farm-fresh-lime.vercel.app/',
    txUrl: 'https://lora.algokit.io/testnet/transaction/32VMOXZI5EFNLXHK7DEDX2ERORMT2R5YN4EC2GMHVZ43SUOCTVLA',
    txId: '32VMOXZI5EFNLXHK7DEDX2ERORMT2R5YN4EC2GMHVZ43SUOCTVLA',
    tech: [
      'React',
      'Vite',
      'Node.js',
      'Express',
      'Supabase',
      'AI Agent Integration',
      'x402 Protocol',
      'Algorand Testnet',
      'USDC',
      'Pera Wallet',
    ],
    workflow: [
      'Customer',
      'AI Agent',
      'Product Discovery',
      'FarmFresh',
      '402 Payment',
      'Algorand USDC',
      'Order Confirmed',
    ],
    metrics: [
      { label: 'HACKATHON', value: 'x402 Global Challenge PreHack 2026' },
      { label: 'BLOCKCHAIN', value: 'Algorand Testnet + USDC Settlement' },
      { label: 'TX STATUS', value: 'Verified On-Chain Proof' },
    ],
    contribution: [
      'Configured Supabase database schema, tables, and security policies',
      'Developed product catalog and order management backend endpoints',
      'Integrated x402 pay-per-use HTTP headers with GoPlausible facilitator',
      'Implemented Algorand Testnet payment flow with Pera Wallet signing',
    ],
  },
];

export const ProjectsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<{ [key: string]: number }>({
    '01': 0,
    '02': 0,
    '03': 0,
    '04': 0,
  });

  const [modalImage, setModalImage] = useState<{ url: string; title: string; caption: string } | null>(null);

  const handleTabChange = (projNumber: string, index: number) => {
    setActiveTab((prev) => ({ ...prev, [projNumber]: index }));
  };

  return (
    <section
      id="work"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-20 pb-20 px-4 sm:px-8 lg:px-16"
    >
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#D4AF37]/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#8C6D4F]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
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
            02 / FEATURED WORK
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14"
        >
          <div>
            <h2
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                SELECTED WORK.
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                ANALYTICS CASE STUDIES.
              </span>
            </h2>
          </div>

          <p
            className="text-xs sm:text-sm font-light text-[#A8988B] max-w-sm mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Scroll through the stacking case studies. Each project features authentic dashboard assets, cloud query workflows, and real repositories.
          </p>
        </motion.div>

        {/* Cinematic Stacking Deck */}
        <ScrollStack
          itemDistance={28}
          itemScale={0.03}
          itemStackDistance={30}
          stackPosition="12%"
          scaleEndPosition="6%"
          baseScale={0.9}
          useWindowScroll={true}
        >
          {projects.map((project) => {
            const currentTab = activeTab[project.number] || 0;
            const currentDashboard = project.dashboards ? project.dashboards[currentTab] : null;

            return (
              <ScrollStackItem key={project.number}>
                <div className="relative w-full rounded-2xl border border-[#8C6D4F]/50 bg-[#0B0907] p-6 sm:p-9 lg:p-10 shadow-[0_30px_90px_rgba(0,0,0,0.98)] group overflow-hidden transition-colors duration-500 hover:border-[#D4AF37]">
                  
                  {/* Top Gold Border Light Flare */}
                  <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

                  {/* Corner Minimal L-Brackets */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]/60 group-hover:border-[#D4AF37] transition-colors" />

                  {/* Big Background Watermark Number */}
                  <span
                    className="absolute -bottom-8 -right-4 text-9xl sm:text-[11rem] font-bold text-[#EAD8C7]/[0.03] select-none pointer-events-none leading-none"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {project.number}
                  </span>

                  {/* Content Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start relative z-10">
                    
                    {/* LEFT COLUMN: Narrative & Details (6 Cols) */}
                    <div className="lg:col-span-6 flex flex-col justify-between h-full">
                      <div>
                        {/* Meta Tags */}
                        <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                          <span className="text-xs font-mono font-bold text-[#D4AF37]">
                            PROJECT {project.number} //
                          </span>
                          <span className="text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#A8988B] px-2 py-0.5 border border-[#8C6D4F]/30 bg-[#14100D]">
                            {project.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h3
                          className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-white mb-1.5 group-hover:text-[#F7E7C4] transition-colors uppercase leading-[0.95]"
                          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                        >
                          {project.title}
                        </h3>

                        {/* Subtitle */}
                        <p className="text-[10px] font-mono tracking-widest text-[#D4AF37]/90 mb-3 uppercase">
                          {project.subtitle}
                        </p>

                        {/* Description */}
                        <p
                          className="text-xs sm:text-[13px] font-light text-[#BDB0A4] leading-[1.75] tracking-wide mb-4"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {project.description}
                        </p>

                        {/* Workflow Pipeline */}
                        {project.workflow && (
                          <div className="mb-4 p-2.5 border border-[#8C6D4F]/30 bg-[#060504] rounded-sm">
                            <span className="text-[9px] font-mono tracking-[0.2em] text-[#D4AF37] block mb-1.5 uppercase">
                              // ARCHITECTURAL WORKFLOW
                            </span>
                            <div className="flex flex-wrap items-center gap-1.5 text-[9.5px] font-mono text-[#C4B29E]">
                              {project.workflow.map((step, idx) => (
                                <React.Fragment key={step}>
                                  <span className="bg-[#17130F] px-2 py-0.5 border border-[#8C6D4F]/40 text-[#E0D3C5]">
                                    {step}
                                  </span>
                                  {idx < project.workflow!.length - 1 && (
                                    <span className="text-[#D4AF37]">→</span>
                                  )}
                                </React.Fragment>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Tech Stack Pills & Action Buttons */}
                      <div className="pt-3 border-t border-[#8C6D4F]/25">
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-0.5 text-[9px] font-medium tracking-[0.14em] uppercase rounded-sm border border-[#8C6D4F]/40 bg-[#14100D] text-[#E8D7C5] group-hover:border-[#D4AF37]/50 transition-all duration-300"
                              style={{ fontFamily: "'Montserrat', sans-serif" }}
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* Action Links */}
                        <div className="flex flex-wrap items-center gap-2.5">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-1.5 px-4 py-2.5 border border-[#8C6D4F] bg-[#16120E] hover:border-[#D4AF37] hover:bg-[#D4AF37] text-[#EAD8C7] hover:text-black text-[10px] font-medium tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.12)]"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                          >
                            <span>VIEW ON GITHUB</span>
                            <span className="text-xs">↗</span>
                          </a>

                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-1.5 px-4 py-2.5 border border-[#D4AF37]/60 bg-[#1F1912] hover:bg-[#D4AF37] text-[#F3DBB3] hover:text-black text-[10px] font-medium tracking-[0.2em] uppercase transition-all duration-300"
                              style={{ fontFamily: "'Montserrat', sans-serif" }}
                            >
                              <span>LAUNCH APPLICATION</span>
                              <span className="text-xs">↗</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* RIGHT COLUMN: Interactive Visual Showcase & Metrics (6 Cols) */}
                    <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
                      
                      {/* Dashboard Visual Area with Tab Navigation */}
                      {project.dashboards && project.dashboards.length > 0 && currentDashboard && (
                        <div className="relative rounded-sm border border-[#8C6D4F]/40 bg-[#050403] p-2.5 overflow-hidden group/visual">
                          
                          {/* Dashboard Tab Selector Header */}
                          <div className="flex flex-wrap items-center justify-between gap-1.5 pb-2 mb-2 border-b border-[#8C6D4F]/25">
                            <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F]">
                              // REPORT VIEW
                            </span>
                            <div className="flex items-center gap-1">
                              {project.dashboards.map((dash, idx) => (
                                <button
                                  key={dash.title}
                                  onClick={() => handleTabChange(project.number, idx)}
                                  className={`px-2 py-0.5 text-[9px] font-mono tracking-wider uppercase transition-all duration-200 border ${
                                    currentTab === idx
                                      ? 'border-[#D4AF37] bg-[#D4AF37]/20 text-[#FFF5EB] font-bold shadow-[0_0_8px_rgba(212,175,55,0.3)]'
                                      : 'border-[#8C6D4F]/30 bg-[#120F0C] text-[#A8988B] hover:text-white'
                                  }`}
                                >
                                  {dash.title}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Image Canvas with Click-to-Zoom */}
                          <div 
                            onClick={() => setModalImage({ url: currentDashboard.image, title: `${project.title} — ${currentDashboard.title}`, caption: currentDashboard.caption })}
                            className="relative overflow-hidden w-full aspect-[16/9.5] bg-black/80 rounded-sm cursor-zoom-in group/img border border-[#8C6D4F]/20"
                          >
                            <img
                              src={currentDashboard.image}
                              alt={`${project.title} - ${currentDashboard.title}`}
                              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/img:scale-105"
                            />
                            
                            {/* Hover overlay hint */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <span className="px-3 py-1 border border-[#D4AF37] bg-black/80 text-[9.5px] font-mono tracking-widest text-[#D4AF37] uppercase">
                                CLICK TO ENLARGE DASHBOARD ⤢
                              </span>
                            </div>

                            {/* Corner brackets */}
                            <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-[#D4AF37]/60" />
                            <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-[#D4AF37]/60" />
                            <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-[#D4AF37]/60" />
                            <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-[#D4AF37]/60" />
                          </div>

                          {/* Caption */}
                          <div className="pt-2 px-1 text-[10.5px] font-mono text-[#A8988B] leading-relaxed">
                            <span className="text-[#D4AF37] mr-1">▸</span>
                            {currentDashboard.caption}
                          </div>
                        </div>
                      )}

                      {/* For FarmFresh without screenshot: Architecture & Contribution Panel */}
                      {!project.dashboards && (
                        <div className="space-y-3">
                          {/* Scope & Contribution Box */}
                          {project.contribution && (
                            <div className="p-3 border border-[#8C6D4F]/30 bg-[#080705] rounded-sm">
                              <span className="text-[9px] font-mono tracking-[0.2em] text-[#D4AF37] block mb-1.5 uppercase font-bold">
                                // KARTHIK'S CONTRIBUTION (AUTHENTIC SCOPE)
                              </span>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10.5px] text-[#BDB0A4] font-light">
                                {project.contribution.map((item) => (
                                  <div key={item} className="flex items-start space-x-1.5">
                                    <span className="text-[#D4AF37] text-xs leading-none mt-0.5">▪</span>
                                    <span>{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* On-Chain Proof for FarmFresh */}
                          {project.txId && (
                            <div className="p-3 border border-[#D4AF37]/40 bg-[#120F09] rounded-sm">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-[9px] font-mono tracking-[0.2em] text-[#D4AF37] uppercase font-bold">
                                  // ON-CHAIN ALGORAND TRANSACTION PROOF
                                </span>
                                <span className="text-[8.5px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-700/50">
                                  CONFIRMED
                                </span>
                              </div>
                              <p className="text-[10px] font-mono text-[#D5CBC0] break-all mb-1">
                                TX: {project.txId}
                              </p>
                              <a
                                href={project.txUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[9.5px] font-mono tracking-wider text-[#D4AF37] hover:underline inline-flex items-center gap-1"
                              >
                                VERIFY ON ALGORAND EXPLORER (LORA) ↗
                              </a>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Architecture Metrics Box */}
                      <div className="space-y-2">
                        <span className="text-[9px] font-mono tracking-[0.25em] uppercase text-[#8C6D4F] block">
                          // PROJECT METRICS &amp; SCOPE
                        </span>
                        {project.metrics.map((m) => (
                          <div
                            key={m.label}
                            className="p-2.5 rounded-sm border border-[#8C6D4F]/25 bg-[#070604] flex items-center justify-between"
                          >
                            <span className="text-[9px] font-mono text-[#A8988B] uppercase">
                              {m.label}
                            </span>
                            <span className="text-[10px] font-mono font-medium text-[#F7E7C4] text-right">
                              {m.value}
                            </span>
                          </div>
                        ))}
                      </div>

                    </div>

                  </div>
                </div>
              </ScrollStackItem>
            );
          })}
        </ScrollStack>

      </div>

      {/* ================= FULL-SCREEN DASHBOARD MODAL ================= */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalImage(null)}
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full bg-[#0E0C0A] border border-[#D4AF37]/60 p-4 sm:p-6 rounded shadow-[0_0_60px_rgba(212,175,55,0.2)]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#8C6D4F]/40">
                <div>
                  <h4 
                    className="text-2xl sm:text-3xl text-white font-normal uppercase leading-tight"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {modalImage.title}
                  </h4>
                  <p className="text-xs font-mono text-[#A8988B]">
                    {modalImage.caption}
                  </p>
                </div>
                <button
                  onClick={() => setModalImage(null)}
                  className="px-3 py-1 border border-[#D4AF37] text-xs font-mono text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-colors"
                >
                  ESC / CLOSE [×]
                </button>
              </div>

              {/* Full Image */}
              <div className="relative overflow-hidden w-full max-h-[75vh] flex items-center justify-center bg-black/60 rounded">
                <img
                  src={modalImage.url}
                  alt={modalImage.title}
                  className="max-h-[75vh] w-auto max-w-full object-contain"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;