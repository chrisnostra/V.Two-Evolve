import React from "react";
import { Link } from "wouter";
import { Menu, X, AlertTriangle, Check, Minus, ChevronRight, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
          <a href="#inside" className="text-sm font-medium text-[#9096bb] hover:text-[#b091ff] transition-colors">Inside the work</a>
          <a href="#discovery" className="text-sm font-medium text-[#9096bb] hover:text-[#b091ff] transition-colors">Discovery output</a>
          <a href="#the-model" className="text-sm font-medium text-[#9096bb] hover:text-[#b091ff] transition-colors">How we work</a>
          <a href="#case-study" className="text-sm font-medium text-[#9096bb] hover:text-[#b091ff] transition-colors">Case study</a>
          <a href="#why-vtwo" className="text-sm font-medium text-[#9096bb] hover:text-[#b091ff] transition-colors">Why V.Two</a>
        </div>

        <div className="hidden md:flex">
          <a
            href="https://www.vtwo.co/get-in-touch/contact" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#9b6bf4] to-[#f05aae] rounded-md hover:opacity-90 transition-opacity shadow-[0_6px_24px_rgba(155,107,244,0.35)]"
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
            <a href="#inside" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-[#9096bb] hover:text-[#b091ff]">Inside the work</a>
            <a href="#discovery" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-[#9096bb] hover:text-[#b091ff]">Discovery output</a>
            <a href="#the-model" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-[#9096bb] hover:text-[#b091ff]">How we work</a>
            <a href="#case-study" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-[#9096bb] hover:text-[#b091ff]">Case study</a>
            <a href="#why-vtwo" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-[#9096bb] hover:text-[#b091ff]">Why V.Two</a>
            <a href="https://www.vtwo.co/get-in-touch/contact" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center justify-center px-5 py-2 text-base font-semibold text-white bg-gradient-to-r from-[#9b6bf4] to-[#f05aae] rounded-md mx-3">
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
      <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#f6f7ff] tracking-tight leading-tight">{title}</h2>
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

// Large screenshot carousel for the merged Discovery Output section.
// Full-width, keyboard-navigable, swipe-friendly, with prev/next + dot indicators.
type CarouselSlide = {
  src: string;
  src2x: string;
  alt: string;
  title: string;
  caption: string;
};

function ScreenshotCarousel({ slides }: { slides: CarouselSlide[] }) {
  const [index, setIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(0);
  const touchStartX = React.useRef<number | null>(null);

  const go = React.useCallback((next: number) => {
    setDirection(next > index ? 1 : -1);
    setIndex(((next % slides.length) + slides.length) % slides.length);
  }, [index, slides.length]);

  const prev = React.useCallback(() => go(index - 1), [go, index]);
  const next = React.useCallback(() => go(index + 1), [go, index]);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) {
      if (dx < 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  const active = slides[index];

  return (
    <div
      className="relative w-full"
      role="region"
      aria-roledescription="carousel"
      aria-label="Discovery output screenshots"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <figure className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/40">
        <div className="relative aspect-[16/10] md:aspect-[16/9] w-full bg-[#05060d] overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.picture
              key={active.src}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <source
                media="(min-width: 768px)"
                srcSet={`${active.src} 1x, ${active.src2x} 2x`}
              />
              <img
                src={active.src}
                alt={active.alt}
                className="w-full h-full object-contain object-center block"
                loading="lazy"
              />
            </motion.picture>
          </AnimatePresence>

          <button
            type="button"
            onClick={prev}
            aria-label="Previous screenshot"
            className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center w-11 h-11 rounded-full bg-black/60 border border-white/15 text-white/90 hover:bg-black/80 hover:border-[#9b6bf4]/60 hover:text-[#b091ff] transition-colors backdrop-blur"
          >
            <ChevronLeft className="w-6 h-6" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next screenshot"
            className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center w-11 h-11 rounded-full bg-black/60 border border-white/15 text-white/90 hover:bg-black/80 hover:border-[#9b6bf4]/60 hover:text-[#b091ff] transition-colors backdrop-blur"
          >
            <ChevronRight className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <figcaption className="px-5 py-4 border-t border-white/10 bg-[#0f1122]/60">
          <div className="text-sm font-bold text-[#b091ff] uppercase tracking-wider mb-1">{active.title}</div>
          <div className="text-sm text-white/70 leading-snug">{active.caption}</div>
        </figcaption>
      </figure>

      <div className="flex items-center justify-center gap-2 mt-6">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            className={`h-2 rounded-full transition-all ${
              i === index
                ? "w-8 bg-[#b091ff]"
                : "w-2 bg-white/25 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// The method as a four-stage flow.
function MethodFlow() {
  const stages = [
    { n: "1", name: "Discovery" },
    { n: "2", name: "Blueprint" },
    { n: "3", name: "Plan" },
    { n: "4", name: "Build" },
  ];
  const pw = 190, gap = 46, x0 = 8;
  const px = (i: number) => x0 + i * (pw + gap);
  return (
    <svg viewBox="0 0 914 104" className="w-full h-auto" role="img"
      aria-label="The method runs in four stages: Discovery, Blueprint, Plan, and Build.">
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
          <text x={px(i) + 56} y="52" fontSize="16" fontWeight="700" fill="#f6f7ff" fontFamily="DM Sans, sans-serif">{s.name}</text>
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
                <a href="https://www.vtwo.co/get-in-touch/contact" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-lg font-bold text-white bg-gradient-to-r from-[#9b6bf4] to-[#f05aae] rounded-md hover:opacity-90 transition-opacity shadow-[0_6px_24px_rgba(155,107,244,0.35)]">
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

        {/* Section 4 - Inside the work (proof of craft) */}
        <section id="inside" className="py-24 border-y border-white/10" style={{ background: "linear-gradient(180deg, #070812 0%, #0f1122 100%)" }}>
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <SectionHeading label="Inside the work" title="A look at how we actually do it" />
              <p className="text-xl text-[#9096bb] max-w-3xl mb-16 leading-relaxed -mt-6">
                Most firms show you a deck. Here is how the method actually runs, and how we prove every increment holds up before it ships.
              </p>
            </FadeIn>

            {/* A. The method: four stages */}
            <FadeIn>
              <h3 className="text-xl font-bold text-[#f6f7ff] mb-2">The method: four stages</h3>
              <p className="text-[#9096bb] mb-8 max-w-3xl leading-relaxed">Every engagement runs the same defined path, each stage with its own inputs, review gate, and deliverables. The application stays live the entire time.</p>
            </FadeIn>
            <FadeIn>
              <div className="mb-10 overflow-x-auto"><div className="min-w-[680px]"><MethodFlow /></div></div>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
              {[
                { stage: "Discovery", items: ["Discovery & assessment", "Architecture analysis", "Dependency & risk"] },
                { stage: "Blueprint", items: ["Target Architecture Blueprint", "Phased Conversion Roadmap"] },
                { stage: "Plan", items: ["Business-rule extraction", "Part-by-part decomposition", "PRDs + implementation plans"] },
                { stage: "Build", items: ["Module rebuild via Claude Code", "Parity validation", "Deployment readiness", "Documentation & handoff"] },
              ].map((col, i) => (
                <FadeIn key={col.stage} delay={0.1 * i}>
                  <div className="bg-[#0f1122] rounded-lg p-6 shadow-sm border-t-4 border-t-[#9b6bf4] border-l border-r border-b border-white/10 h-full">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-mono font-bold text-[#b091ff] opacity-40">{`0${i + 1}`}</span>
                      <h4 className="text-lg font-bold text-[#f6f7ff]">{col.stage}</h4>
                    </div>
                    <ul className="space-y-2">
                      {col.items.map((p) => (
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

        {/* Section 4b - Discovery output (merged: user stories + business rules) */}
        <section id="discovery" className="py-24 bg-[#070812]">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <SectionHeading label="Discovery output" title="What you get from Discovery" />
              <p className="text-xl text-[#9096bb] max-w-3xl mb-12 leading-relaxed -mt-6">
                Two artifacts, one lineage. Every route, job, and workflow in your codebase becomes a user story your team recognizes. Every rule those stories run on is recovered, cited, and anchored back to the story that produces it. Nothing orphaned. Nothing guessed.
              </p>
            </FadeIn>

            <FadeIn>
              <div className="mb-16">
                <ScreenshotCarousel
                  slides={[
                    {
                      src: "/screenshots/user-stories-list.png",
                      src2x: "/screenshots/user-stories-list@2x.png",
                      alt: "User Stories view showing extracted stories grouped by entity: create Class, read Teacher, create Intern, and more, each with route and rule count.",
                      title: "User stories, grouped by domain",
                      caption: "A full set of user stories, grouped by the domain entity they act on, recovered from a real production codebase.",
                    },
                    {
                      src: "/screenshots/user-stories-detail.png",
                      src2x: "/screenshots/user-stories-detail@2x.png",
                      alt: "Single user story detail: route, entity, operation, rule count, and the extracted narrative (As a user, I want X, so that Y).",
                      title: "Every story, in your team's vocabulary",
                      caption: "Expand any domain to see every CRUD story, verb, and short narrative in the same view.",
                    },
                    {
                      src: "/screenshots/business-rules-list.png",
                      src2x: "/screenshots/business-rules-list@2x.png",
                      alt: "Business Rules view: rules grouped by their originating user story, with rule kinds (Validation, Authorization, Business Logic) shown inline.",
                      title: "Business rules, anchored to their stories",
                      caption: "Rules grouped by the story that produces them, with rule-kind pills for validation, authorization, and business logic.",
                    },
                    {
                      src: "/screenshots/business-rules-coverage.png",
                      src2x: "/screenshots/business-rules-coverage@2x.png",
                      alt: "Coverage report: every recovered rule anchored to a user story workflow with zero orphaned rules.",
                      title: "Coverage, end to end",
                      caption: "Every recovered rule points back to the story it belongs to. Zero orphans, full audit trail.",
                    },
                  ]}
                />
              </div>
            </FadeIn>

            <FadeIn>
              <div className="mt-24 mb-12">
                <span className="inline-block text-sm font-bold tracking-wider uppercase text-[#b091ff] mb-3">For the technical team</span>
                <h3 className="text-3xl md:text-4xl font-bold text-[#f6f7ff] tracking-tight leading-tight">How we recover your business rules</h3>
                <p className="text-lg text-[#9096bb] max-w-3xl mt-4 leading-relaxed">
                  The rules your business runs on are buried in legacy code, undocumented, and often known to no one. Here is the actual pipeline: AI reads the code, we recover each rule into a plain-language spec you own, with a citation to the exact source and a test that proves the rebuild behaves identically.
                </p>
              </div>
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

        {/* Section 3 - The proprietary model (AI-native way of working) — moved after Discovery output */}
        <section id="the-model" className="py-24 bg-[#070812]">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <SectionHeading label="How we work" title="Not a product. A way of working." />
              <p className="text-xl text-[#9096bb] max-w-3xl mb-16 leading-relaxed">
                Modernization at this pace was not possible three years ago. Large language models, agent workflows, AST parsing, and semantic search over code have changed what a small, senior team can hold in view at once. Evolve is how we put those capabilities to work, on real production systems, with humans in the loop where it matters.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FadeIn delay={0.1}>
                <div className="bg-[#0f1122] rounded-lg p-8 shadow-sm border-t-4 border-t-[#9b6bf4] border-l border-r border-b border-white/10 h-full">
                  <h3 className="text-xl font-bold text-[#f6f7ff] mb-4">Skills</h3>
                  <p className="text-[#9096bb] leading-relaxed">The human + AI craft. Architects who know how to prompt, review, and steer LLMs against a real codebase — deep familiarity with legacy patterns and a working taste for what to preserve versus rewrite. The AI is the leverage; the judgment is ours.</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="bg-[#0f1122] rounded-lg p-8 shadow-sm border-t-4 border-t-[#9b6bf4] border-l border-r border-b border-white/10 h-full">
                  <h3 className="text-xl font-bold text-[#f6f7ff] mb-4">Context</h3>
                  <p className="text-[#9096bb] leading-relaxed">How we gather what the model needs to be useful. Code, via tree-sitter AST parsing and dependency graphs. History, via git and prior decisions. People, via SME interviews. AI lets a small team hold all of that in view at once — the thing no human team could do by hand.</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="bg-[#0f1122] rounded-lg p-8 shadow-sm border-t-4 border-t-[#9b6bf4] border-l border-r border-b border-white/10 h-full">
                  <h3 className="text-xl font-bold text-[#f6f7ff] mb-4">Methods</h3>
                  <p className="text-[#9096bb] leading-relaxed">The repeatable AI-driven techniques. Rule extraction with two-pass LLM synthesis. Semantic search across the codebase via embeddings. Architect-in-the-loop code generation. Strangler-fig migration paths that let old and new run side by side. Governed end to end by the <a href="https://www.vtwo.co/services#ai-enablement" target="_blank" rel="noopener noreferrer" className="text-[#b091ff] font-medium underline underline-offset-2 decoration-[#9b6bf4]/40 hover:decoration-[#9b6bf4]">V.Two AI SDLC</a>.</p>
                </div>
              </FadeIn>
            </div>
            <FadeIn>
              <p className="text-[#9096bb] leading-relaxed mt-10 max-w-3xl">V.Two Evolve is the application-modernization edge of V.Two's <a href="https://www.vtwo.co/services#digital-transformation" target="_blank" rel="noopener noreferrer" className="text-[#b091ff] font-medium underline underline-offset-2 decoration-[#9b6bf4]/40 hover:decoration-[#9b6bf4]">Digital Transformation practice</a>.</p>
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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#1b1836] text-[#b091ff] border border-[#9b6bf4]/30 mb-8">
                  Illustrative engagement · Details anonymized
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-[#b091ff] mb-4">The client</h4>
                    <p className="text-[#9096bb] leading-relaxed">
                      A <span className="text-[#f6f7ff] font-medium">vertical SaaS provider</span> serving mid-market operators. Their flagship product had been in market for over a decade, generated eight-figure ARR, and was the daily system-of-record for thousands of users across their customer base.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-[#b091ff] mb-4">The problem</h4>
                    <p className="text-[#9096bb] leading-relaxed">
                      The product still shipped features, but the stack underneath had become the bottleneck: an aging application framework, unsupported library versions, a jQuery-era front end, and a monolithic API. New hires took months to ramp, security patches were painful, and a full rewrite had already been quoted at <span className="text-[#f6f7ff] font-medium">24+ months</span> by another firm — and shelved.
                    </p>
                  </div>
                </div>

                <div className="mb-12">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#b091ff] mb-4">What we did</h4>
                  <p className="text-[#9096bb] leading-relaxed mb-4">
                    We ran the V.Two Evolve method end to end. In the assessment, AI mapped the codebase — dependencies, business rules, dead code, and integration surface — and produced a modernization plan the client's engineers signed off on. The pilot rebuilt one production module on the target stack: <span className="text-[#f6f7ff] font-medium">modern TypeScript and React on the front end, a typed API layer, current framework and library versions, containerized deploy</span> — with a parity test suite that ran the new code against real production inputs.
                  </p>
                  <p className="text-[#9096bb] leading-relaxed">
                    From there the full build ran the old and new platforms in parallel, migrating modules in phases behind feature flags. Data conversion, reconciliation reports, and user-facing documentation were generated as we went. No big-bang cutover — customers were moved cohort by cohort, with rollback available at each step.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#b091ff] mb-6">The results</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {[
                      { head: "~65% faster", sub: "Than the rewrite quote they had shelved" },
                      { head: "Zero outages", sub: "Cohort-by-cohort cutover, always reversible" },
                      { head: "100% parity", sub: "Every module proven against live transactions before switch-off" },
                    ].map((m) => (
                      <div key={m.head} className="bg-[#1b1836] p-6 rounded-lg border border-[#9b6bf4]/20 text-center">
                        <div className="text-2xl font-extrabold text-[#b091ff] mb-2">{m.head}</div>
                        <div className="text-sm text-[#9096bb] leading-snug">{m.sub}</div>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-[#9096bb] italic mt-6">
                    Composite illustration drawn from V.Two Evolve engagements. Named client references and detailed benchmarks available on request under NDA.
                  </p>
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
                { d: "Application Assessment Report" },
                { d: "Architecture, data-source & coverage maps" },
                { d: "Dependency & Risk Register" },
                { d: "Target Architecture Blueprint & ADRs" },
                { d: "Phased Conversion Roadmap & Estimate" },
                { d: "Business-Rule Specifications you own" },
                { d: "Modernized codebase, delivered incrementally" },
                { d: "Test suites & Parity Evidence" },
                { d: "Deployment Runbook & Rollback Procedure" },
                { d: "Handoff Package & Knowledge Transfer" },
              ].map((item, i) => (
                <FadeIn key={item.d} delay={0.05 * (i % 3)}>
                  <div className="bg-[#0f1122] rounded-lg p-5 h-full border border-white/10 shadow-sm flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#b091ff] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <div className="text-[#f6f7ff] font-semibold leading-snug">{item.d}</div>
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
              <h2 className="text-5xl md:text-6xl font-extrabold mb-12">Ready to start?</h2>
              
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
