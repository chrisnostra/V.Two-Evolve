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
import { StartNowDialog } from "@/components/StartNowDialog";

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
          <a href="#why-vtwo" className="text-sm font-medium text-[#9096bb] hover:text-[#b091ff] transition-colors">Why V.Two</a>
        </div>

        <div className="hidden md:flex">
          <StartNowDialog
            trigger={
              <button
                className="inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#9b6bf4] to-[#f05aae] rounded-md hover:opacity-90 transition-opacity shadow-[0_6px_24px_rgba(155,107,244,0.35)] cursor-pointer"
              >
                Start free
              </button>
            }
          />
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
            <a href="#why-vtwo" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-[#9096bb] hover:text-[#b091ff]">Why V.Two</a>
            <StartNowDialog
              trigger={
                <button
                  className="mt-4 inline-flex items-center justify-center px-5 py-2 text-base font-semibold text-white bg-gradient-to-r from-[#9b6bf4] to-[#f05aae] rounded-md mx-3 cursor-pointer"
                >
                  Start free
                </button>
              }
            />
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

// "Keep the front, replace the engine": incremental modernization, visualized.
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
      aria-label="Your existing interface stays unchanged while the engine underneath is rebuilt module by module, from legacy to modern. Each increment is verified against the extracted user stories and business rules, and validated on the running system, before the legacy version is retired.">
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
      <text x="444" y="244" textAnchor="middle" fontSize="13.5" fill="#9096bb" fontFamily="DM Sans, sans-serif">Each module is verified against the extracted user stories and business rules, and validated on the running system, before the legacy version is retired.</text>
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

// The method as a three-stage flow.
function MethodFlow() {
  const stages = [
    { n: "1", name: "Discovery" },
    { n: "2", name: "Blueprint" },
    { n: "3", name: "Build" },
  ];
  const pw = 240, gap = 56, x0 = 12;
  const px = (i: number) => x0 + i * (pw + gap);
  return (
    <svg viewBox="0 0 864 104" className="w-full h-auto" role="img"
      aria-label="The method runs in three stages: Discovery, Blueprint, and Build.">
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
                  desc: "AI can read, map, and help regenerate codebases at speeds no human team can match; firms that apply it with discipline modernize in months, not years."
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

            {/* A. The method: three stages */}
            <FadeIn>
              <h3 className="text-xl font-bold text-[#f6f7ff] mb-2">The method: three stages</h3>
              <p className="text-[#9096bb] mb-8 max-w-3xl leading-relaxed">Every engagement runs the same defined path, each stage with its own inputs, review gate, and deliverables. The application stays live the entire time.</p>
            </FadeIn>
            <FadeIn>
              <div className="mb-10 overflow-x-auto"><div className="min-w-[680px]"><MethodFlow /></div></div>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
              {[
                { stage: "Discovery", items: ["Discovery & assessment", "Architecture analysis", "Dependency & risk", "Business-rule extraction"] },
                { stage: "Blueprint", items: ["Target Architecture Blueprint", "Phased Conversion Roadmap", "Part-by-part decomposition", "PRDs + implementation plans"] },
                { stage: "Build", items: ["Module rebuild via Claude Code", "Verification against stories & rules", "Deployment readiness", "Documentation & handoff"] },
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

            {/* C. How we verify each increment */}
            <FadeIn>
              <h3 className="text-xl font-bold text-[#f6f7ff] mb-2">How we verify each increment</h3>
              <p className="text-[#9096bb] mb-8 max-w-3xl leading-relaxed">Nothing legacy is switched off until its modern replacement is verified against the extracted user stories and business rules, and validated on the running system. Every increment clears five gates before it ships:</p>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
              {[
                "Behavior verified against the extracted stories & rules",
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
                Passing unit tests is not the bar. Verifying each increment against the documented stories and rules, and validating it on the running system, is what lets us retire legacy code without holding our breath.
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
                  The rules your business runs on are buried in legacy code, undocumented, and often known to no one. Here is the actual pipeline: AI reads the code, we recover each rule into a plain-language spec you own, with a citation to the exact source, so the modern rebuild can be validated against the original behavior.
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* 1. Legacy code */}
              <FadeIn delay={0.05}>
                <div className="h-full rounded-xl bg-[#05060d] border border-white/10 overflow-hidden">
                  <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-black/30">
                    <span className="text-xs font-mono text-[#828aa6]">server/src/routes/classes.ts</span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#e0a24a]">Source</span>
                  </div>
                  <pre className="px-5 py-5 text-[12.5px] font-mono text-white/85 overflow-x-auto leading-relaxed whitespace-pre">{`router.post('/classes', async (req, res) => {
  const { classroomNumber, teacherId } = req.body;

  // strip anything that isn't
  // alphanumeric before persisting
  const clean = classroomNumber
    .replace(/[^a-zA-Z0-9]/g, '');

  const cls = await db.class.create({
    data: { classroomNumber: clean, teacherId },
  });
  res.json(cls);
});`}</pre>
                </div>
              </FadeIn>

              {/* 2. Extracted rule */}
              <FadeIn delay={0.15}>
                <div className="h-full rounded-xl bg-[#0f1122] border border-[#9b6bf4]/40 overflow-hidden">
                  <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-[#9b6bf4]/10">
                    <span className="text-xs font-mono text-[#b091ff]">business-rules.yaml</span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#b091ff]">Recovered · owned by you</span>
                  </div>
                  <pre className="px-5 py-5 text-[12.5px] font-mono text-white/90 overflow-x-auto leading-relaxed whitespace-pre">{`rule_id: BR-Class-Create-SanitizeClassroomNumber
rule_kind: validation
trigger: When a class is created
condition: classroomNumber contains
  non-alphanumeric characters
action: Strip non-alphanumeric
  characters before persisting
rationale: Classroom numbers must be
  sortable and comparable across records
sources:
  - file: server/src/routes/classes.ts
    start_line: 42
    end_line: 58
confidence: 0.92
provenance: original
parent_story_id: US-Class-Create`}</pre>
                </div>
              </FadeIn>

              {/* 3. Coverage check */}
              <FadeIn delay={0.25}>
                <div className="h-full rounded-xl bg-[#05060d] border border-white/10 overflow-hidden">
                  <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-black/30">
                    <span className="text-xs font-mono text-[#828aa6]">coverage-check</span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#4fc49a]">Anchored to stories</span>
                  </div>
                  <pre className="px-5 py-5 text-[12.5px] font-mono text-white/85 overflow-x-auto leading-relaxed whitespace-pre">{`# coverage-check
total_stories: 83
total_rules: 412
orphan_rules: 0
stories_without_rules: 0

# Every rule anchored to a story.
# Every story has explicit rules.
# Nothing lost between extraction
# and specification.`}</pre>
                </div>
              </FadeIn>
            </div>

            <FadeIn>
              <p className="text-base text-[#9096bb] max-w-3xl mt-10 leading-relaxed">
                The export format is a machine-checkable schema, so every recovered rule is validated, cited, and reviewed and curated by your domain experts before it drives a single line of the rebuild. You end up owning a complete, plain-language specification of a system that used to live only in code.
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
                    <span className="text-xs font-mono text-[#828aa6]">server/src/lib/tax.ts</span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#e0a24a]">Source</span>
                  </div>
                  <pre className="px-5 py-5 text-[12.5px] font-mono text-white/85 overflow-x-auto leading-relaxed whitespace-pre">{`export function computeTax(invoice) {
  const taxable = invoice.lines
    .filter(l => l.isTaxable)
    .reduce((sum, l) => sum + l.total, 0);

  // rate as of the invoice date,
  // NOT today's rate
  const rate = rateOn(invoice.date);

  return round2(taxable * rate);
}`}</pre>
                </div>
              </FadeIn>
              <FadeIn delay={0.15}>
                <div className="h-full rounded-xl bg-[#0f1122] border border-[#9b6bf4]/40 overflow-hidden">
                  <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-[#9b6bf4]/10">
                    <span className="text-xs font-mono text-[#b091ff]">business-rules.yaml</span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#e0a24a]">Needs domain sign-off</span>
                  </div>
                  <pre className="px-5 py-5 text-[12.5px] font-mono text-white/90 overflow-x-auto leading-relaxed whitespace-pre">{`rule_id: BR-Invoice-Tax-DateScopedRate
rule_kind: business_logic
trigger: When an invoice is finalized
condition: invoice contains lines where
  isTaxable = true
action: Sum taxable-line totals and
  multiply by the rate in effect on the
  invoice date; return 0.00 (not null)
  when no lines are taxable
rationale: Back-dated invoices must use
  the historical rate, not today's rate
sources:
  - file: server/src/lib/tax.ts
    start_line: 40
    end_line: 77
confidence: 0.71
provenance: inferred
parent_story_id: US-Invoice-Finalize`}</pre>
                </div>
              </FadeIn>
            </div>
            <FadeIn>
              <p className="text-base text-[#9096bb] max-w-3xl mt-8 leading-relaxed">
                A rewrite that "looks right" would use today's tax rate and return <span className="font-mono text-[#b091ff]">null</span> for an untaxed invoice. Both are wrong, and both are invisible until a client's month-end. Because these rules are <span className="text-[#f6f7ff] font-medium">inferred, not certain</span>, we flag them for the domain owner to confirm before the rebuild starts.
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
                {["validation", "authorization", "business_logic", "data_integrity", "workflow", "other"].map((t) => (
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
                  <pre className="px-5 py-5 text-[12.5px] font-mono text-white/90 overflow-x-auto leading-relaxed whitespace-pre">{`rule_id: BR-Billing-WriteOffWip-AuthorizedRoles
rule_kind: authorization
trigger: When a user attempts to write
  off WIP on a matter
condition: actor.role in
  [ResponsiblePartner, BillingManager]
  AND amount <= actor.approvalLimit
  AND matter.status != 'locked'
action: Allow the write-off; otherwise
  reject with a permission error
rationale: Locked matters block all
  write-offs, and delegated authority
  expires with the delegation, not the
  matter
sources:
  - file: server/src/routes/billing.ts
    start_line: 112
    end_line: 149
confidence: 0.68
provenance: inferred
parent_story_id: US-Billing-WriteOffWip`}</pre>
                </div>
              </FadeIn>
              <FadeIn delay={0.15}>
                <div className="h-full rounded-xl bg-[#0f1122] border border-[#9b6bf4]/40 overflow-hidden">
                  <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-[#9b6bf4]/10">
                    <span className="text-xs font-mono text-[#b091ff]">workflow rule</span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#b091ff]">Approval flow</span>
                  </div>
                  <pre className="px-5 py-5 text-[12.5px] font-mono text-white/90 overflow-x-auto leading-relaxed whitespace-pre">{`rule_id: BR-Bill-Finalize-PartnerApprovalChain
rule_kind: workflow
trigger: When a draft bill is submitted
  for finalization
condition: bill.state transitions across
  draft → pending → approved → final;
  bills over matter.threshold require a
  second approver
action: Advance the bill through the
  approval chain; a rejected bill returns
  to draft (not pending) and the chain
  resets; approvals are voided if the
  total changes after sign-off
rationale: Approval authority is scoped
  to the amount at time of sign-off
sources:
  - file: server/src/lib/bill-workflow.ts
    start_line: 64
    end_line: 120
confidence: 0.74
provenance: inferred
parent_story_id: US-Bill-Finalize`}</pre>
                </div>
              </FadeIn>
            </div>
            <FadeIn>
              <p className="text-base text-[#9096bb] max-w-3xl mt-8 leading-relaxed">
                These are the rules a rewrite gets subtly wrong: an approval that should have reset, a delegated authority that should have expired, a threshold that quietly moved. Every one is recovered, cited, and reviewed against the running system before the rebuild ships.
              </p>
            </FadeIn>

          </div>
        </section>

        {/* Section 3 - The proprietary model (AI-native way of working) — moved after Discovery output */}
        <section id="the-model" className="py-24 bg-[#070812]">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <SectionHeading label="How we work" title="Not a product. A way of working." />
              <p className="text-xl text-[#f6f7ff] max-w-3xl mb-6 leading-relaxed font-medium">
                Evolve is two things: a Discovery product that reads your codebase, and a delivery method for the modern rebuild.
              </p>
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
                  <p className="text-[#9096bb] leading-relaxed">How we gather what the model needs to be useful. Code, via tree-sitter AST parsing and dependency graphs. Prior architectural decisions, via the ADR log. People, via SME interviews. AI lets a small team hold all of that in view at once — the thing no human team could do by hand.</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="bg-[#0f1122] rounded-lg p-8 shadow-sm border-t-4 border-t-[#9b6bf4] border-l border-r border-b border-white/10 h-full">
                  <h3 className="text-xl font-bold text-[#f6f7ff] mb-4">Methods</h3>
                  <p className="text-[#9096bb] leading-relaxed">The repeatable AI-driven techniques. Rule extraction with two-pass LLM synthesis. Semantic search across the codebase via embeddings. Architect-in-the-loop code generation. Incremental cutover paths that let old and new run side by side. Governed end to end by the <a href="https://www.vtwo.co/services#ai-enablement" target="_blank" rel="noopener noreferrer" className="text-[#b091ff] font-medium underline underline-offset-2 decoration-[#9b6bf4]/40 hover:decoration-[#9b6bf4]">V.Two AI SDLC</a>.</p>
                </div>
              </FadeIn>
            </div>
            <FadeIn>
              <p className="text-[#9096bb] leading-relaxed mt-10 max-w-3xl">V.Two Evolve is the application-modernization edge of V.Two's <a href="https://www.vtwo.co/services#digital-transformation" target="_blank" rel="noopener noreferrer" className="text-[#b091ff] font-medium underline underline-offset-2 decoration-[#9b6bf4]/40 hover:decoration-[#9b6bf4]">Digital Transformation practice</a>.</p>
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
                  desc: "Client references available on request.",
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
                { d: "Acceptance Criteria & Rule Evidence" },
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
                    Today, V.Two Evolve supports JavaScript, TypeScript, and PHP (Laravel). The method itself is language-agnostic — additional stacks (Java, .NET, COBOL) are added per engagement.
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

              <StartNowDialog
                trigger={
                  <button
                    className="inline-flex items-center justify-center px-8 py-4 text-xl font-bold text-[#070812] bg-white rounded-md hover:bg-gray-100 transition-colors shadow-lg cursor-pointer"
                  >
                    Request your free assessment
                  </button>
                }
              />
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
