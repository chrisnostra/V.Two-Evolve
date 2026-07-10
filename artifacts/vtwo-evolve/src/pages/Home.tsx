import React from "react";
import { Link } from "wouter";
import { Menu, X, AlertTriangle, Check, Minus, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Nav() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#070812]/85 backdrop-blur-md border-b border-white/10 shadow-[0px_2px_10px_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex-shrink-0">
          <a href="#" className="text-xl font-bold text-[#f6f7ff]">
            V.Two <span className="text-[#b091ff]">Evolve</span>
          </a>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#why-now" className="text-sm font-medium text-[#9096bb] hover:text-[#b091ff] transition-colors">Why now</a>
          <a href="#the-model" className="text-sm font-medium text-[#9096bb] hover:text-[#b091ff] transition-colors">The model</a>
          <a href="#approach" className="text-sm font-medium text-[#9096bb] hover:text-[#b091ff] transition-colors">Approach</a>
          <a href="#inside" className="text-sm font-medium text-[#9096bb] hover:text-[#b091ff] transition-colors">Inside the work</a>
          <a href="#case-study" className="text-sm font-medium text-[#9096bb] hover:text-[#b091ff] transition-colors">Case study</a>
          <a href="#deliverables" className="text-sm font-medium text-[#9096bb] hover:text-[#b091ff] transition-colors">Deliverables</a>
          <a href="#why-vtwo" className="text-sm font-medium text-[#9096bb] hover:text-[#b091ff] transition-colors">Why V.Two</a>
        </div>

        <div className="hidden md:flex">
          <a
            href="https://www.vtwo.co/get-in-touch/contact" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-white bg-[#9b6bf4] rounded-md hover:bg-[#8250d6] transition-colors shadow-sm"
          >
            Start free
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#f6f7ff] hover:text-[#b091ff]">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0f1122] border-b border-white/10">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            <a href="#why-now" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-[#9096bb] hover:text-[#b091ff]">Why now</a>
            <a href="#the-model" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-[#9096bb] hover:text-[#b091ff]">The model</a>
            <a href="#approach" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-[#9096bb] hover:text-[#b091ff]">Approach</a>
            <a href="#inside" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-[#9096bb] hover:text-[#b091ff]">Inside the work</a>
            <a href="#case-study" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-[#9096bb] hover:text-[#b091ff]">Case study</a>
            <a href="#deliverables" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-[#9096bb] hover:text-[#b091ff]">Deliverables</a>
            <a href="#why-vtwo" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-[#9096bb] hover:text-[#b091ff]">Why V.Two</a>
            <a href="https://www.vtwo.co/get-in-touch/contact" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center justify-center px-5 py-2 text-base font-semibold text-white bg-[#9b6bf4] rounded-md mx-3">
              Start free
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function SectionHeading({ label, title, className = "" }: { label?: string, title: string, className?: string }) {
  return (
    <div className={`mb-12 ${className}`}>
      {label && <span className="inline-block text-sm font-bold tracking-wider uppercase text-[#b091ff] mb-3">{label}</span>}
      <h2 className="text-4xl md:text-5xl font-bold text-[#f6f7ff] tracking-tight leading-tight">{title}</h2>
    </div>
  );
}

function FadeIn({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

// "Keep the front, replace the engine": the strangler-fig migration, visualized.
function EngineDiagram() {
  const mods = [
    { label: "Rebuilt", kind: "modern" },
    { label: "Rebuilt", kind: "modern" },
    { label: "Migrating", kind: "mid" },
    { label: "Legacy", kind: "legacy" },
    { label: "Legacy", kind: "legacy" },
    { label: "Legacy", kind: "legacy" },
  ];
  const x = (i: number) => 30 + i * 140;
  return (
    <svg viewBox="0 0 888 268" className="w-full h-auto" role="img"
      aria-label="Your existing interface stays unchanged while the engine underneath is rebuilt module by module, from legacy to modern, each one proven at parity before the old version is retired.">
      <rect x="30" y="18" width="828" height="54" rx="14" fill="#15172c" stroke="rgba(155,107,244,0.55)" strokeWidth="1.5" />
      <text x="444" y="50" textAnchor="middle" fontSize="17" fontWeight="600" fill="#f6f7ff" fontFamily="DM Sans, sans-serif">Your existing interface stays unchanged</text>
      <line x1="444" y1="72" x2="444" y2="94" stroke="rgba(176,145,255,0.35)" strokeWidth="1.5" />
      <line x1="30" y1="94" x2="858" y2="94" stroke="rgba(176,145,255,0.3)" strokeWidth="1.5" strokeDasharray="4 5" />
      <text x="858" y="88" textAnchor="end" fontSize="11" fill="#b091ff" fontFamily="DM Sans, sans-serif" letterSpacing="0.06em">CLEAN INTERFACE</text>
      <text x="30" y="120" fontSize="11" fontWeight="700" fill="#b091ff" fontFamily="DM Sans, sans-serif" letterSpacing="0.08em">MODERN</text>
      <text x="858" y="120" textAnchor="end" fontSize="11" fontWeight="700" fill="#828aa6" fontFamily="DM Sans, sans-serif" letterSpacing="0.08em">LEGACY</text>
      {mods.map((m, i) => {
        const fill = m.kind === "modern" ? "#9b6bf4" : m.kind === "mid" ? "#15172c" : "#0f1122";
        const stroke = m.kind === "legacy" ? "rgba(255,255,255,0.12)" : "#b091ff";
        const dash = m.kind === "mid" ? "5 4" : undefined;
        const tcol = m.kind === "modern" ? "#ffffff" : m.kind === "mid" ? "#b091ff" : "#828aa6";
        return (
          <g key={i}>
            <rect x={x(i)} y="132" width="128" height="72" rx="12" fill={fill} stroke={stroke} strokeWidth="1.5" strokeDasharray={dash} />
            <text x={x(i) + 64} y="173" textAnchor="middle" fontSize="14" fontWeight="600" fill={tcol} fontFamily="DM Sans, sans-serif">{m.label}</text>
          </g>
        );
      })}
      <text x="444" y="244" textAnchor="middle" fontSize="13.5" fill="#9096bb" fontFamily="DM Sans, sans-serif">Each module is rebuilt and proven at parity against the live system before the legacy version is retired.</text>
    </svg>
  );
}

// The method as a four-stage flow.
function MethodFlow() {
  const stages = [
    { n: "1", name: "Understand", phases: "Phases 1-3" },
    { n: "2", name: "Plan", phases: "Phases 4-5" },
    { n: "3", name: "Transform", phases: "Phases 6-8" },
    { n: "4", name: "Land", phases: "Phases 9-10" },
  ];
  const pw = 190, gap = 46, x0 = 8;
  const px = (i: number) => x0 + i * (pw + gap);
  return (
    <svg viewBox="0 0 914 104" className="w-full h-auto" role="img"
      aria-label="The method runs in four stages: Understand (phases 1 to 3), Plan (phases 4 to 5), Transform (phases 6 to 8), and Land (phases 9 to 10).">
      <defs>
        <marker id="mf-arrow" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#b091ff" />
        </marker>
      </defs>
      {stages.map((s, i) => (
        <g key={i}>
          <rect x={px(i)} y="16" width={pw} height="66" rx="16" fill="#15172c" stroke="rgba(155,107,244,0.55)" strokeWidth="1.5" />
          <circle cx={px(i) + 30} cy="49" r="15" fill="#241a33" />
          <text x={px(i) + 30} y="54" textAnchor="middle" fontSize="15" fontWeight="700" fill="#b091ff" fontFamily="DM Sans, sans-serif">{s.n}</text>
          <text x={px(i) + 56} y="44" fontSize="16" fontWeight="700" fill="#f6f7ff" fontFamily="DM Sans, sans-serif">{s.name}</text>
          <text x={px(i) + 56} y="64" fontSize="12.5" fill="#9096bb" fontFamily="DM Sans, sans-serif">{s.phases}</text>
          {i < stages.length - 1 && (
            <line x1={px(i) + pw + 10} y1="49" x2={px(i) + pw + gap - 12} y2="49" stroke="#b091ff" strokeWidth="1.5" markerEnd="url(#mf-arrow)" />
          )}
        </g>
      ))}
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070812] selection:bg-[#9b6bf4] selection:text-white">
      <Nav />
      
      <main>
        {/* Section 1 - Hero */}
        <section className="relative pt-24 pb-32 overflow-hidden" style={{ background: "linear-gradient(180deg, #0f1122 0%, #070812 100%)" }}>
          <div className="max-w-7xl mx-auto px-6 text-center">
            <FadeIn>
              <div className="inline-flex items-center rounded-full border border-[#9b6bf4]/40 bg-[#9b6bf4]/10 px-5 py-1.5 text-sm font-semibold tracking-wide text-[#b091ff] mb-8">
                Application Modernization
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-[#f6f7ff] tracking-tight leading-[1.02] mb-8">
                Your legacy platforms are a liability. <span className="bg-gradient-to-r from-[#9b6bf4] to-[#f05aae] bg-clip-text text-transparent">V.Two Evolve</span> turns them into an advantage.
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-[#9096bb] mb-12 max-w-3xl mx-auto leading-relaxed">
                V.Two Evolve modernizes business platforms with AI. Faster than a rewrite. Safer than a lift-and-shift. Priced so the risk sits with us, not you.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <a href="https://www.vtwo.co/get-in-touch/contact" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-lg font-bold text-white bg-[#9b6bf4] rounded-md hover:bg-[#8250d6] transition-colors shadow-sm">
                  Start with a free assessment
                </a>
                <a href="#inside" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-lg font-bold text-[#b091ff] bg-transparent border-2 border-[#9b6bf4]/50 rounded-md hover:bg-[#1b1836] transition-colors">
                  See how we work
                </a>
              </div>
            </FadeIn>

          </div>
        </section>

        {/* Section 2 - Why now */}
        <section id="why-now" className="py-24 bg-[#070812]">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <SectionHeading label="Why now" title="The math on legacy platforms has changed" />
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  num: "01",
                  title: "Maintenance is eating your budget",
                  desc: "Every year, more of your budget goes to keeping old platforms alive. The gap compounds."
                },
                {
                  num: "02",
                  title: "Rewrites keep failing",
                  desc: "Traditional rewrites run long and get cancelled, because they depend on humans re-reading millions of lines of code by hand."
                },
                {
                  num: "03",
                  title: "AI changed what's possible",
                  desc: "AI can read, map, and regenerate codebases at speeds no human team can match; firms that apply it with discipline modernize in months, not years."
                }
              ].map((item, i) => (
                <FadeIn key={i} delay={0.1 * i}>
                  <div className="bg-[#0f1122] rounded-xl p-8 h-full border border-white/10 hover:shadow-md transition-shadow">
                    <div className="text-5xl font-extrabold text-[#b091ff] opacity-20 mb-6 font-mono">{item.num}</div>
                    <h3 className="text-xl font-bold text-[#f6f7ff] mb-4">{item.title}</h3>
                    <p className="text-[#9096bb] leading-relaxed">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
            {/* merged in: "Sound familiar?" pain points */}
            <FadeIn>
              <h3 className="text-3xl md:text-4xl font-bold text-[#f6f7ff] tracking-tight leading-tight mt-24 mb-10">If any of this sounds familiar, we should talk.</h3>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Your platform is nearing end-of-life.", desc: "The framework, the runtime, or the on-prem system underneath it is going unsupported, and the clock is ticking." },
                { title: "The business rules live only in the code.", desc: "The people who wrote them are gone. Nobody can say exactly what the system does anymore, only that it can't break." },
                { title: "A rewrite feels too risky to start.", desc: "Going dark for a year and betting the business on one big cutover is not a plan anyone wants to sign." },
                { title: "Every change is slow, and getting slower.", desc: "Shipping anything means touching fragile code, and hiring for the aging stack keeps getting harder." },
              ].map((item, i) => (
                <FadeIn key={item.title} delay={0.1 * (i % 2)}>
                  <div className="bg-[#0f1122] rounded-xl p-8 h-full border border-white/10 shadow-sm flex gap-4">
                    <AlertTriangle className="flex-shrink-0 w-6 h-6 text-[#b091ff] mt-0.5" aria-hidden="true" />
                    <div>
                      <h3 className="text-lg font-bold text-[#f6f7ff] mb-2">{item.title}</h3>
                      <p className="text-[#9096bb] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 - The proprietary model */}
        <section id="the-model" className="py-24 bg-[#070812]">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <SectionHeading label="How we work" title="Not a product. A way of working." />
              <p className="text-xl text-[#9096bb] max-w-3xl mb-16 leading-relaxed">
                Not a tool you license. It is the system, people, and method we bring to every engagement, refined across real client work.
              </p>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FadeIn delay={0.1}>
                <div className="bg-[#0f1122] rounded-lg p-8 shadow-sm border-t-4 border-t-[#9b6bf4] border-l border-r border-b border-white/10 h-full">
                  <h3 className="text-xl font-bold text-[#f6f7ff] mb-4">Skills</h3>
                  <p className="text-[#9096bb] leading-relaxed">Codified reusable AI skills that map dependencies, extract business rules, regenerate logic on a modern stack with tests.</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="bg-[#0f1122] rounded-lg p-8 shadow-sm border-t-4 border-t-[#9b6bf4] border-l border-r border-b border-white/10 h-full">
                  <h3 className="text-xl font-bold text-[#f6f7ff] mb-4">Processes</h3>
                  <p className="text-[#9096bb] leading-relaxed">The <a href="https://www.vtwo.co/services#ai-enablement" target="_blank" rel="noopener noreferrer" className="text-[#b091ff] font-medium underline underline-offset-2 decoration-[#9b6bf4]/40 hover:decoration-[#9b6bf4]">V.Two AI SDLC</a> governs every engagement with defined inputs, outputs, and human review gates.</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="bg-[#0f1122] rounded-lg p-8 shadow-sm border-t-4 border-t-[#9b6bf4] border-l border-r border-b border-white/10 h-full">
                  <h3 className="text-xl font-bold text-[#f6f7ff] mb-4">Methods</h3>
                  <p className="text-[#9096bb] leading-relaxed">Proven patterns for sequencing: what to modernize first, running old and new in parallel, staged cutover with no big-bang weekend.</p>
                </div>
              </FadeIn>
            </div>
            <FadeIn>
              <p className="text-[#9096bb] leading-relaxed mt-10 max-w-3xl">V.Two Evolve is the application-modernization edge of V.Two's <a href="https://www.vtwo.co/services#digital-transformation" target="_blank" rel="noopener noreferrer" className="text-[#b091ff] font-medium underline underline-offset-2 decoration-[#9b6bf4]/40 hover:decoration-[#9b6bf4]">Digital Transformation practice</a>.</p>
            </FadeIn>
          </div>
        </section>

        {/* Section 3b - Legacy to modern (before/after) */}
        <section className="py-24 bg-[#0a0c17] border-y border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <SectionHeading label="The approach" title="Modernize the engine without stopping the car." />
              <p className="text-xl text-[#9096bb] max-w-3xl mb-16 leading-relaxed -mt-6">
                Instead of a risky big-bang rewrite, we grow a modern system around your live one and switch it over a piece at a time. Your users never notice. Your business never stops.
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FadeIn delay={0.1}>
                <div className="bg-[#0f1122] rounded-xl p-8 h-full border border-white/10">
                  <h3 className="text-lg font-bold text-[#f6f7ff] mb-6 flex items-center gap-2">
                    <X className="w-5 h-5 text-[#828aa6]" aria-hidden="true" /> Legacy &amp; on-prem
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Aging framework, nearing end-of-life",
                      "Business logic tangled with the UI",
                      "Locked to on-prem infrastructure",
                      "Slow, risky, expensive to change",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[#9096bb] leading-snug">
                        <Minus className="w-4 h-4 text-[#828aa6] mt-0.5 flex-shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="bg-[#0f1122] rounded-xl p-8 h-full border-2 border-[#9b6bf4]/50 shadow-sm">
                  <h3 className="text-lg font-bold text-[#b091ff] mb-6 flex items-center gap-2">
                    <Check className="w-5 h-5 text-[#b091ff]" aria-hidden="true" /> Modern &amp; cloud
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Current, supported, cloud-native stack",
                      "Clean API, business rules documented",
                      "Scales on demand, deploys in minutes",
                      "Evergreen, and cheaper to run",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[#f6f7ff] leading-snug">
                        <Check className="w-4 h-4 text-[#b091ff] mt-0.5 flex-shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
            <FadeIn>
              <div className="mt-12 bg-[#0f1122] rounded-2xl border border-white/10 shadow-sm p-6 md:p-10">
                <EngineDiagram />
              </div>
            </FadeIn>
            <FadeIn>
              <p className="text-center text-base text-[#b091ff] font-semibold mt-10">
                A working, deployed product at the end of every single phase.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Section 4 - Our approach */}
        <section id="approach" className="py-24 bg-[#070812]">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <SectionHeading label="Our approach" title="Five steps. The first one's free." />
              <p className="text-xl text-[#9096bb] max-w-3xl mb-16 leading-relaxed -mt-6">
                A clear path from "we're not sure what we have" to a modern platform in production.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
              {[
                { n: "1", title: "Analyze", badge: "Free", desc: "We map your system, its dependencies, and where the real risk lives. You get a clear picture of what modernizing takes, at no cost and no commitment." },
                { n: "2", title: "Document", desc: "We recover the business rules buried in your code into clear specifications you own, so the knowledge is no longer trapped in software." },
                { n: "3", title: "Estimate", desc: "A concrete, phased plan: scope, cost, and milestones you can take to the board. No black boxes, no surprises." },
                { n: "4", title: "Move", desc: "We modernize incrementally, the strangler-fig way. Your application keeps running the entire time. No big-bang, no downtime, always a way back." },
                { n: "5", title: "Test", desc: "Every slice is verified against your live system before any old code is retired. Same data, same behavior. Proven, then we move on." },
              ].map((step, i) => (
                <FadeIn key={step.title} delay={0.08 * i}>
                  <div className="bg-[#0f1122] border border-white/10 rounded-xl p-6 h-full hover:border-[#9b6bf4]/50 transition-colors shadow-sm flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-[#1b1836] text-[#b091ff] text-base font-bold">{step.n}</div>
                      <h3 className="text-lg font-bold text-[#f6f7ff]">{step.title}</h3>
                      {step.badge && <span className="ml-auto inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#9b6bf4] text-white">{step.badge}</span>}
                    </div>
                    <p className="text-sm text-[#9096bb] leading-relaxed flex-grow">{step.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Built into every phase */}
            <FadeIn>
              <h3 className="text-xl font-bold text-[#f6f7ff] mb-8">Built into every phase</h3>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Business rule extraction",
                  desc: "AI reads the code and surfaces the rules the business actually runs on, including ones nobody remembers writing. Reviewed and signed off by client experts.",
                },
                {
                  title: "Documentation",
                  desc: "Current-state and future-state documentation generated as we work, not as an afterthought. The client ends up with a documented system either way.",
                },
                {
                  title: "Automated testing",
                  desc: "Behavior-parity test suites generated alongside the code. Old and new outputs compared automatically so parity is proven, not asserted.",
                },
                {
                  title: "Data conversion",
                  desc: "Schema mapping, migration scripts, and reconciliation reports so data arrives complete, validated, and auditable on the new platform.",
                },
              ].map((card, i) => (
                <FadeIn key={card.title} delay={0.1 * i}>
                  <div className="bg-[#0f1122] rounded-lg p-7 shadow-sm border-t-4 border-t-[#9b6bf4] border-l border-r border-b border-white/10 h-full">
                    <h4 className="text-base font-bold text-[#f6f7ff] mb-3">{card.title}</h4>
                    <p className="text-sm text-[#9096bb] leading-relaxed">{card.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4b - Inside the work (proof of craft) */}
        <section id="inside" className="py-24 border-y border-white/10" style={{ background: "linear-gradient(180deg, #070812 0%, #0f1122 100%)" }}>
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <SectionHeading label="Inside the work" title="A look at how we actually do it" />
              <p className="text-xl text-[#9096bb] max-w-3xl mb-16 leading-relaxed -mt-6">
                Most firms show you a deck. Here is a redacted look at the real method and the artifacts a V.Two Evolve engagement produces. This is why the outcomes hold up.
              </p>
            </FadeIn>

            {/* A. The method: four stages, ten phases */}
            <FadeIn>
              <h3 className="text-xl font-bold text-[#f6f7ff] mb-2">The method: four stages, ten phases</h3>
              <p className="text-[#9096bb] mb-8 max-w-3xl leading-relaxed">Every engagement runs the same defined path, each phase with its own inputs, review gate, and deliverable. The application stays live the entire time.</p>
            </FadeIn>
            <FadeIn>
              <div className="mb-10 overflow-x-auto"><div className="min-w-[680px]"><MethodFlow /></div></div>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
              {[
                { stage: "Understand", phases: ["Discovery & assessment", "Architecture analysis", "Dependency & risk"] },
                { stage: "Plan", phases: ["Target architecture", "Roadmap & estimation"] },
                { stage: "Transform", phases: ["Business-rule extraction", "Module rebuild", "Parity validation", "Pre-merge preflight"] },
                { stage: "Land", phases: ["Deployment readiness", "Documentation & handoff"] },
              ].map((col, i) => (
                <FadeIn key={col.stage} delay={0.1 * i}>
                  <div className="bg-[#0f1122] rounded-lg p-6 shadow-sm border-t-4 border-t-[#9b6bf4] border-l border-r border-b border-white/10 h-full">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-mono font-bold text-[#b091ff] opacity-40">{`0${i + 1}`}</span>
                      <h4 className="text-lg font-bold text-[#f6f7ff]">{col.stage}</h4>
                    </div>
                    <ul className="space-y-2">
                      {col.phases.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-[#9096bb] leading-snug">
                          <ChevronRight className="w-4 h-4 text-[#b091ff] mt-0.5 flex-shrink-0" aria-hidden="true" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* C. How we prove it's right: the parity gate */}
            <FadeIn>
              <h3 className="text-xl font-bold text-[#f6f7ff] mb-2">How we prove it is right</h3>
              <p className="text-[#9096bb] mb-8 max-w-3xl leading-relaxed">Nothing legacy is switched off until its modern replacement is proven at parity against your live system. Every increment clears five gates before it ships:</p>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
              {[
                "Parity proven on the live system",
                "Conforms to house patterns",
                "Security clean",
                "No duplicate logic or types",
                "Scope limited to the slice",
              ].map((dim, i) => (
                <FadeIn key={dim} delay={0.08 * i}>
                  <div className="bg-[#0f1122] rounded-lg p-5 border border-white/10 shadow-sm h-full flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#b091ff] flex-shrink-0" aria-hidden="true" />
                    <span className="text-sm font-medium text-[#f6f7ff] leading-snug">{dim}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
            <FadeIn>
              <p className="text-base text-[#b091ff] font-semibold max-w-3xl">
                Passing unit tests is not the bar. Observed behavior against your running system is what lets us retire legacy code without holding our breath.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Section 4c - Business rules deep-dive (for techies) */}
        <section id="business-rules" className="py-24 bg-[#070812]">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <SectionHeading label="For the technical team" title="How we recover your business rules" />
              <p className="text-xl text-[#9096bb] max-w-3xl mb-16 leading-relaxed -mt-6">
                The rules your business runs on are buried in legacy code, undocumented, and often known to no one. Here is the actual pipeline: AI reads the code, we recover each rule into a plain-language spec you own, with a citation to the exact source and a test that proves the rebuild behaves identically.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* 1. Legacy code */}
              <FadeIn delay={0.05}>
                <div className="h-full rounded-xl bg-[#05060d] border border-white/10 overflow-hidden">
                  <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-black/30">
                    <span className="text-xs font-mono text-[#828aa6]">InvoiceService.cs</span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#e0a24a]">Legacy</span>
                  </div>
                  <pre className="px-5 py-5 text-[12.5px] font-mono text-white/85 overflow-x-auto leading-relaxed whitespace-pre">{`public decimal CalculateLineTotal(
    Line line)
{
  var raw = line.Quantity
          * line.UnitPrice;
  // half-up, per line,
  // before the subtotal
  return Math.Round(raw, 2,
    MidpointRounding.AwayFromZero);
}`}</pre>
                </div>
              </FadeIn>

              {/* 2. Extracted rule */}
              <FadeIn delay={0.15}>
                <div className="h-full rounded-xl bg-[#0f1122] border border-[#9b6bf4]/40 overflow-hidden">
                  <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-[#9b6bf4]/10">
                    <span className="text-xs font-mono text-[#b091ff]">business-rules.yaml</span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#b091ff]">Recovered · owned by you</span>
                  </div>
                  <pre className="px-5 py-5 text-[12.5px] font-mono text-white/90 overflow-x-auto leading-relaxed whitespace-pre">{`id: BR-001
title: Line total = quantity
  x unit price, half-up 2dp
type: calculation
description: >
  Rounded to two decimals,
  half-up, per line, before
  the subtotal is summed.
source: InvoiceService.cs:88
confidence: extracted
confirmed_by: Finance Lead`}</pre>
                </div>
              </FadeIn>

              {/* 3. Parity check */}
              <FadeIn delay={0.25}>
                <div className="h-full rounded-xl bg-[#05060d] border border-white/10 overflow-hidden">
                  <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-black/30">
                    <span className="text-xs font-mono text-[#828aa6]">parity-check</span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#4fc49a]">Proven vs live</span>
                  </div>
                  <pre className="px-5 py-5 text-[12.5px] font-mono text-white/85 overflow-x-auto leading-relaxed whitespace-pre">{`acceptance:
  - given:  qty 3 @ 2.005
    expect: total = 6.02
  - given:  qty -1 @ 10.00
    expect: total = -10.00

# every rule replayed
# against the live system
# before any legacy code
# is switched off`}</pre>
                </div>
              </FadeIn>
            </div>

            <FadeIn>
              <p className="text-base text-[#9096bb] max-w-3xl mt-10 leading-relaxed">
                The export format is a machine-checkable schema, so every recovered rule is validated, cited, and signed off by your domain experts before it drives a single line of the rebuild. You end up owning a complete, plain-language specification of a system that used to live only in code.
              </p>
            </FadeIn>

            {/* A harder one: the edge cases naive rewrites miss */}
            <FadeIn>
              <h3 className="text-2xl md:text-3xl font-bold text-[#f6f7ff] tracking-tight mt-24 mb-4">The hard part is the edge cases nobody remembers</h3>
              <p className="text-lg text-[#9096bb] max-w-3xl mb-10 leading-relaxed">
                Extracting the obvious rules is easy. The value is in the rules that are conditional, date-sensitive, or quietly special-cased. The ones that pass a rewrite's unit tests and still get month-end billing wrong. Take tax:
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
              <FadeIn delay={0.05}>
                <div className="h-full rounded-xl bg-[#05060d] border border-white/10 overflow-hidden">
                  <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-black/30">
                    <span className="text-xs font-mono text-[#828aa6]">TaxCalculator.cs</span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#e0a24a]">Legacy</span>
                  </div>
                  <pre className="px-5 py-5 text-[12.5px] font-mono text-white/85 overflow-x-auto leading-relaxed whitespace-pre">{`public decimal ComputeTax(Invoice inv)
{
  var taxable = inv.Lines
    .Where(l => l.IsTaxable)
    .Sum(l => l.Total);

  // rate as of the invoice date,
  // NOT today's rate
  var rate = RateOn(inv.Date);

  return Math.Round(taxable * rate, 2,
    MidpointRounding.AwayFromZero);
}`}</pre>
                </div>
              </FadeIn>
              <FadeIn delay={0.15}>
                <div className="h-full rounded-xl bg-[#0f1122] border border-[#9b6bf4]/40 overflow-hidden">
                  <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-[#9b6bf4]/10">
                    <span className="text-xs font-mono text-[#b091ff]">business-rules.yaml</span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#e0a24a]">Needs domain sign-off</span>
                  </div>
                  <pre className="px-5 py-5 text-[12.5px] font-mono text-white/90 overflow-x-auto leading-relaxed whitespace-pre">{`id: BR-002
title: Tax applies only to taxable
  lines, at the invoice-dated rate
type: calculation
conditions:
  - only lines where isTaxable = true
edge_cases:
  - no taxable lines -> tax = 0.00
    (not null)
  - back-dated invoices use the rate
    in effect on the invoice date,
    not today's rate
source: TaxCalculator.cs:40-77
confidence: inferred
confirmation: pending`}</pre>
                </div>
              </FadeIn>
            </div>
            <FadeIn>
              <p className="text-base text-[#9096bb] max-w-3xl mt-8 leading-relaxed">
                A rewrite that "looks right" would use today's tax rate and return <span className="font-mono text-[#b091ff]">null</span> for an untaxed invoice. Both are wrong, and both are invisible until a client's month-end. Because these rules are <span className="text-[#f6f7ff] font-medium">inferred, not certain</span>, we flag them for your domain owner and prove them with a parity harness that replays real historical invoices, so date-sensitive and edge-case behavior is caught before any cutover.
              </p>
            </FadeIn>

            {/* Beyond calculations: authorization and approval-workflow rules */}
            <FadeIn>
              <h3 className="text-2xl md:text-3xl font-bold text-[#f6f7ff] tracking-tight mt-24 mb-4">Not just math: who can do what, and when</h3>
              <p className="text-lg text-[#9096bb] max-w-3xl mb-8 leading-relaxed">
                The rules that govern authority and approval flows are where the real risk lives, and they are almost never written down. We recover those too.
              </p>
            </FadeIn>
            <FadeIn>
              <div className="flex flex-wrap gap-2 mb-10">
                {["calculation", "validation", "authorization", "workflow", "derivation", "constraint"].map((t) => (
                  <span key={t} className="font-mono text-xs px-3 py-1 rounded-full border border-[#9b6bf4]/30 bg-[#9b6bf4]/10 text-[#b091ff]">{t}</span>
                ))}
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
              <FadeIn delay={0.05}>
                <div className="h-full rounded-xl bg-[#0f1122] border border-[#9b6bf4]/40 overflow-hidden">
                  <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-[#9b6bf4]/10">
                    <span className="text-xs font-mono text-[#b091ff]">authorization rule</span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#b091ff]">Who can do what</span>
                  </div>
                  <pre className="px-5 py-5 text-[12.5px] font-mono text-white/90 overflow-x-auto leading-relaxed whitespace-pre">{`id: BR-003
title: Only the responsible partner or a
  billing manager may write off WIP
type: authorization
conditions:
  - actor.role in
    [ResponsiblePartner, BillingManager]
  - amount <= actor.approvalLimit
edge_cases:
  - locked matters block all write-offs,
    even for partners
  - delegated authority expires with the
    delegation, not the matter
source: BillingAuth.cs:112-149`}</pre>
                </div>
              </FadeIn>
              <FadeIn delay={0.15}>
                <div className="h-full rounded-xl bg-[#0f1122] border border-[#9b6bf4]/40 overflow-hidden">
                  <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-[#9b6bf4]/10">
                    <span className="text-xs font-mono text-[#b091ff]">workflow rule</span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#b091ff]">Approval flow</span>
                  </div>
                  <pre className="px-5 py-5 text-[12.5px] font-mono text-white/90 overflow-x-auto leading-relaxed whitespace-pre">{`id: BR-004
title: A draft bill needs partner approval
  before it can be finalized
type: workflow
states: draft > pending > approved > final
conditions:
  - bills over the matter threshold
    require a second approver
edge_cases:
  - a rejected bill returns to draft,
    not pending; the chain resets
  - approvals are void if the total
    changes after sign-off
source: BillWorkflow.cs:64-120`}</pre>
                </div>
              </FadeIn>
            </div>
            <FadeIn>
              <p className="text-base text-[#9096bb] max-w-3xl mt-8 leading-relaxed">
                These are the rules a rewrite gets subtly wrong: an approval that should have reset, a delegated authority that should have expired, a threshold that quietly moved. Every one is recovered, cited, confirmed, and replayed against real history before it ships.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Section 5 - Case study */}
        <section id="case-study" className="py-24 bg-[#0a0c17] border-y border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <SectionHeading label="Case study" title="Proven in production" />
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <div className="bg-[#0f1122] rounded-xl shadow-sm border border-white/10 p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-[#b091ff] mb-4">The client</h4>
                    <p className="text-[#9096bb] leading-relaxed">
                      An enterprise <span className="text-[#f6f7ff] font-medium">legal practice-management and finance platform</span> used by law firms to run matters, billing, and accounting. A large on-premise system built up over more than a decade.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-[#b091ff] mb-4">The problem</h4>
                    <p className="text-[#9096bb] leading-relaxed">
                      The platform's finance and accounting core was tightly coupled to a vendor CRM runtime that was being retired, and years of billing, posting, and cash-receipt logic lived only in the code, maintained by people who had since moved on. A big-bang rewrite was off the table: firms run their billing on it every day, so it could not go dark for a moment.
                    </p>
                  </div>
                </div>

                <div className="mb-12">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#b091ff] mb-4">What we did</h4>
                  <p className="text-[#9096bb] leading-relaxed mb-4">
                    We ran the V.Two Evolve method end to end, starting with the highest-risk area: the finance and postings layer. We mapped where the business logic actually lived and extracted the billing, posting, and reconciliation rules into a plain-language specification the client now owns. Working module by module, we rebuilt each on a clean SQL data layer, fully decoupled from the retiring CRM runtime, <span className="text-[#f6f7ff] font-medium">behind the existing user interface</span>, so the people using it every day saw no change.
                  </p>
                  <p className="text-[#9096bb] leading-relaxed">
                    Every rebuilt module was proven at parity by an automated harness that replayed real transactions against both the legacy and the modern system, confirming identical results before any legacy code was switched off. Old and new ran in parallel; cutover happened in small, reversible steps.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#b091ff] mb-6">The results</h4>
                  {/* NOTE: qualitative outcomes are true of the engagement. Add real headline
                      numbers here when cleared to share (e.g. velocity, defect rate). */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {[
                      { head: "Zero downtime", sub: "Firms kept billing throughout the migration" },
                      { head: "Rules recovered", sub: "Billing & posting logic documented and client-owned" },
                      { head: "Parity-proven", sub: "Every module verified against live transactions before cutover" },
                    ].map((m) => (
                      <div key={m.head} className="bg-[#1b1836] p-6 rounded-lg border border-[#9b6bf4]/50/20 text-center">
                        <div className="text-2xl font-extrabold text-[#b091ff] mb-2">{m.head}</div>
                        <div className="text-sm text-[#9096bb] leading-snug">{m.sub}</div>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-[#9096bb] italic mt-6">Detailed velocity and quality benchmarks available under NDA.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Why V.Two */}
        <section id="why-vtwo" className="py-24 bg-[#070812]">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <SectionHeading label="Why V.Two" title="Why clients pick us" />
              <p className="text-xl text-[#9096bb] max-w-3xl mb-16 leading-relaxed -mt-6">
                Plenty of firms will quote you a modernization project. Here is why clients pick us.
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "This is the only thing we do",
                  desc: "Application modernization with AI is not a side practice for us. It is the work. V.Two Evolve exists because we have done this on real platforms, refined the method each time, and codified what works.",
                },
                {
                  title: "Fixed bid. Risk removed.",
                  desc: "Free assessment. Fixed-fee pilot. Fixed-fee build. You know every price before you commit, and overruns are our problem, not yours. No firm billing by the hour can say that.",
                },
                {
                  title: "A proven partner",
                  desc: "We have shipped modernization work for real clients on real production systems. Our references speak to delivery, not decks.",
                },
                {
                  title: "References, on request",
                  desc: "We'll connect you directly with clients whose production systems we've modernized. Ask.",
                },
              ].map((card, i) => (
                <FadeIn key={card.title} delay={0.1 * i}>
                  <div className="bg-[#0f1122] rounded-lg p-8 shadow-sm border-t-4 border-t-[#9b6bf4] border-l border-r border-b border-white/10 h-full">
                    <h3 className="text-xl font-bold text-[#f6f7ff] mb-4">{card.title}</h3>
                    <p className="text-[#9096bb] leading-relaxed">{card.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
            <FadeIn>
              <p className="mt-10">
                <a href="https://www.vtwo.co/work" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#b091ff] font-semibold hover:text-[#d7c4ff]">See our work at V.Two <span aria-hidden="true">&rarr;</span></a>
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Section 7b - What the client receives (deliverables) */}
        <section id="deliverables" className="py-24 border-y border-white/10" style={{ background: "linear-gradient(180deg, #070812 0%, #0f1122 100%)" }}>
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <SectionHeading label="Deliverables" title="What you walk away with" />
              <p className="text-xl text-[#9096bb] max-w-3xl mb-16 leading-relaxed -mt-6">
                Not just working software, but a documented, understood platform your team owns. Every engagement produces:
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { d: "Application Assessment Report", p: "Phase 1" },
                { d: "Architecture, data-source & coverage maps", p: "Phase 2" },
                { d: "Dependency & Risk Register", p: "Phase 3" },
                { d: "Target Architecture Blueprint & ADRs", p: "Phase 4" },
                { d: "Phased Conversion Roadmap & Estimate", p: "Phase 5" },
                { d: "Business-Rule Specifications you own", p: "Phases 6 & 10" },
                { d: "Modernized codebase, delivered incrementally", p: "Phases 6-9" },
                { d: "Test suites & Parity Evidence", p: "Phase 7" },
                { d: "Deployment Runbook & Rollback Procedure", p: "Phase 9" },
                { d: "Handoff Package & Knowledge Transfer", p: "Phase 10" },
              ].map((item, i) => (
                <FadeIn key={item.d} delay={0.05 * (i % 3)}>
                  <div className="bg-[#0f1122] rounded-lg p-5 h-full border border-white/10 shadow-sm flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#b091ff] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <div className="text-[#f6f7ff] font-semibold leading-snug">{item.d}</div>
                      <div className="text-xs font-mono text-[#b091ff] mt-1">{item.p}</div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8 - FAQ */}
        <section className="py-24 bg-[#070812]">
          <div className="max-w-3xl mx-auto px-6">
            <FadeIn>
              <SectionHeading title="Frequently asked questions" className="text-center" />
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="border border-white/10 rounded-lg px-6 data-[state=open]:border-[#9b6bf4]/50 data-[state=open]:shadow-sm transition-all">
                  <AccordionTrigger className="text-left text-lg font-bold text-[#f6f7ff] hover:no-underline py-6">
                    What platforms and languages do you work with?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-[#9096bb] pb-6 leading-relaxed">
                    Language-agnostic. We have applied V.Two Evolve across older Java, .NET, and database-centric platforms moving to modern cloud-native architectures.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border border-white/10 rounded-lg px-6 data-[state=open]:border-[#9b6bf4]/50 data-[state=open]:shadow-sm transition-all">
                  <AccordionTrigger className="text-left text-lg font-bold text-[#f6f7ff] hover:no-underline py-6">
                    Is our code used to train AI models?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-[#9096bb] pb-6 leading-relaxed">
                    No. We operate under enterprise agreements with no training on client data. Every engagement includes review gates and access controls.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border border-white/10 rounded-lg px-6 data-[state=open]:border-[#9b6bf4]/50 data-[state=open]:shadow-sm transition-all">
                  <AccordionTrigger className="text-left text-lg font-bold text-[#f6f7ff] hover:no-underline py-6">
                    What if the pilot does not deliver?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-[#9096bb] pb-6 leading-relaxed">
                    Then you found out early, with hard benchmarks, instead of discovering it two years into a rewrite. The pilot is deliberately small and fixed-scope so that is a cheap lesson, not an expensive one.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border border-white/10 rounded-lg px-6 data-[state=open]:border-[#9b6bf4]/50 data-[state=open]:shadow-sm transition-all">
                  <AccordionTrigger className="text-left text-lg font-bold text-[#f6f7ff] hover:no-underline py-6">
                    How is this different from a big consultancy?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-[#9096bb] pb-6 leading-relaxed">
                    Consultancies sell hours, so longer projects pay them more. V.Two sells fixed-fee outcomes, so speed pays V.Two.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </FadeIn>
          </div>
        </section>

        {/* Section 9 - CTA band */}
        <section className="py-24 bg-[#9b6bf4] text-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <FadeIn>
              <h2 className="text-4xl font-extrabold mb-12">Ready to start?</h2>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 mb-16 relative">
                {/* Connecting line for desktop */}
                <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-px bg-[#0f1122]/20 -z-0"></div>
                
                {[
                  { num: "1", title: "Talk to us", desc: "30-minute call" },
                  { num: "2", title: "Free assessment", desc: "Codebase scan and roadmap" },
                  { num: "3", title: "Pilot in weeks", desc: "Fixed-fee, judge us on shipped code" }
                ].map((step, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center relative z-10 w-full md:w-auto">
                    <div className="w-12 h-12 rounded-full bg-[#0f1122] text-[#b091ff] flex items-center justify-center font-bold text-xl mb-4 shadow-lg">
                      {step.num}
                    </div>
                    <div className="bg-[#8250d6] rounded-lg p-4 w-full text-center border border-white/10">
                      <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                      <p className="text-white/80 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a href="https://www.vtwo.co/get-in-touch/contact" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 text-xl font-bold text-[#070812] bg-white rounded-md hover:bg-gray-100 transition-colors shadow-lg">
                Request your free assessment
              </a>
            </FadeIn>
          </div>
        </section>
      </main>

      {/* Section 10 - Footer */}
      <footer className="bg-[#0a0c17] text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="text-2xl font-bold">
              V.Two <span className="text-[#b091ff]">Evolve</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <a href="https://www.vtwo.co/services" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#b091ff] transition-colors font-medium">
                Services
              </a>
              <a href="https://www.vtwo.co/work" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#b091ff] transition-colors font-medium">
                Our work
              </a>
              <a href="https://www.vtwo.co" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#b091ff] transition-colors font-medium">
                www.vtwo.co
              </a>
              <a href="mailto:chris@vtwo.co" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#b091ff] transition-colors font-medium">
                chris@vtwo.co
              </a>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col items-center justify-center text-white/60 text-sm">
            <p>&copy; 2026 V.Two. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
