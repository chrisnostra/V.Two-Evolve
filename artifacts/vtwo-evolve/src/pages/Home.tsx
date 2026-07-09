import React from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
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
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-[0px_2px_10px_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex-shrink-0">
          <a href="#" className="text-xl font-bold text-[#1A1A1A]">
            V.Two <span className="text-[#7030A0]">Evolve</span>
          </a>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#why-now" className="text-sm font-medium text-[#666666] hover:text-[#7030A0] transition-colors">Why now</a>
          <a href="#the-model" className="text-sm font-medium text-[#666666] hover:text-[#7030A0] transition-colors">The model</a>
          <a href="#approach" className="text-sm font-medium text-[#666666] hover:text-[#7030A0] transition-colors">Approach</a>
          <a href="#inside" className="text-sm font-medium text-[#666666] hover:text-[#7030A0] transition-colors">Inside the work</a>
          <a href="#case-study" className="text-sm font-medium text-[#666666] hover:text-[#7030A0] transition-colors">Case study</a>
          <a href="#deliverables" className="text-sm font-medium text-[#666666] hover:text-[#7030A0] transition-colors">Deliverables</a>
          <a href="#why-vtwo" className="text-sm font-medium text-[#666666] hover:text-[#7030A0] transition-colors">Why V.Two</a>
        </div>

        <div className="hidden md:flex">
          <a 
            href="mailto:chris@vtwo.co" 
            className="inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-white bg-[#7030A0] rounded-md hover:bg-[#5a2680] transition-colors shadow-sm"
          >
            Start free
          </a>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#1A1A1A] hover:text-[#7030A0]">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            <a href="#why-now" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-[#666666] hover:text-[#7030A0]">Why now</a>
            <a href="#the-model" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-[#666666] hover:text-[#7030A0]">The model</a>
            <a href="#approach" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-[#666666] hover:text-[#7030A0]">Approach</a>
            <a href="#inside" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-[#666666] hover:text-[#7030A0]">Inside the work</a>
            <a href="#case-study" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-[#666666] hover:text-[#7030A0]">Case study</a>
            <a href="#deliverables" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-[#666666] hover:text-[#7030A0]">Deliverables</a>
            <a href="#why-vtwo" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-[#666666] hover:text-[#7030A0]">Why V.Two</a>
            <a href="mailto:chris@vtwo.co" className="mt-4 inline-flex items-center justify-center px-5 py-2 text-base font-semibold text-white bg-[#7030A0] rounded-md mx-3">
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
      {label && <span className="inline-block text-sm font-bold tracking-wider uppercase text-[#7030A0] mb-3">{label}</span>}
      <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight">{title}</h2>
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

export default function Home() {
  return (
    <div className="min-h-screen bg-white selection:bg-[#7030A0] selection:text-white">
      <Nav />
      
      <main>
        {/* Section 1 - Hero */}
        <section className="relative pt-24 pb-32 overflow-hidden" style={{ background: "linear-gradient(180deg, #F5F0FA 0%, #FFFFFF 100%)" }}>
          <div className="max-w-7xl mx-auto px-6 text-center">
            <FadeIn>
              <div className="inline-flex items-center rounded-full border border-[#7030A0] bg-white px-4 py-1 text-sm font-semibold text-[#7030A0] mb-8">
                Application Modernization
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-5xl md:text-6xl font-extrabold text-[#1A1A1A] tracking-tight leading-tight mb-8">
                Your legacy platforms are a liability. <span className="text-[#7030A0]">V.Two Evolve</span> turns them into an advantage.
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-[#666666] mb-12 max-w-3xl mx-auto leading-relaxed">
                V.Two Evolve modernizes business platforms with AI. Faster than a rewrite. Safer than a lift-and-shift. Priced so the risk sits with us, not you.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <a href="mailto:chris@vtwo.co" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-lg font-bold text-white bg-[#7030A0] rounded-md hover:bg-[#5a2680] transition-colors shadow-sm">
                  Start with a free assessment
                </a>
                <a href="#inside" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-lg font-bold text-[#7030A0] bg-transparent border-2 border-[#7030A0] rounded-md hover:bg-[#F5F0FA] transition-colors">
                  See how we work
                </a>
              </div>
            </FadeIn>

          </div>
        </section>

        {/* Section 2 - Why now */}
        <section id="why-now" className="py-24 bg-white">
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
                  desc: "Traditional rewrites run long and get cancelled — because they depend on humans re-reading millions of lines of code by hand."
                },
                {
                  num: "03",
                  title: "AI changed what's possible",
                  desc: "AI can read, map, and regenerate codebases at speeds no human team can match; firms that apply it with discipline modernize in months, not years."
                }
              ].map((item, i) => (
                <FadeIn key={i} delay={0.1 * i}>
                  <div className="bg-[#FAFAFA] rounded-xl p-8 h-full border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="text-5xl font-extrabold text-[#7030A0] opacity-20 mb-6 font-mono">{item.num}</div>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">{item.title}</h3>
                    <p className="text-[#666666] leading-relaxed">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2b - If any of these is you (pain points) */}
        <section className="py-24 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <SectionHeading label="Sound familiar?" title="If any of this sounds familiar, we should talk." />
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Your platform is nearing end-of-life.", desc: "The framework, the runtime, or the on-prem system underneath it is going unsupported, and the clock is ticking." },
                { title: "The business rules live only in the code.", desc: "The people who wrote them are gone. Nobody can say exactly what the system does anymore, only that it can't break." },
                { title: "A rewrite feels too risky to start.", desc: "Going dark for a year and betting the business on one big cutover is not a plan anyone wants to sign." },
                { title: "Every change is slow, and getting slower.", desc: "Shipping anything means touching fragile code, and hiring for the aging stack keeps getting harder." },
              ].map((item, i) => (
                <FadeIn key={item.title} delay={0.1 * (i % 2)}>
                  <div className="bg-white rounded-xl p-8 h-full border border-gray-100 shadow-sm flex gap-4">
                    <div className="flex-shrink-0 text-2xl leading-none mt-0.5" aria-hidden>⚠️</div>
                    <div>
                      <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">{item.title}</h3>
                      <p className="text-[#666666] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 - The proprietary model */}
        <section id="the-model" className="py-24 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <SectionHeading label="How we work" title="Not a product. A way of working." />
              <p className="text-xl text-[#666666] max-w-3xl mb-16 leading-relaxed">
                Not a tool you license — the system, people, and method we bring to every engagement, refined across real client work.
              </p>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FadeIn delay={0.1}>
                <div className="bg-white rounded-lg p-8 shadow-sm border-t-4 border-t-[#7030A0] border-l border-r border-b border-gray-100 h-full">
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Skills</h3>
                  <p className="text-[#666666] leading-relaxed">Codified reusable AI skills that map dependencies, extract business rules, regenerate logic on a modern stack with tests.</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="bg-white rounded-lg p-8 shadow-sm border-t-4 border-t-[#7030A0] border-l border-r border-b border-gray-100 h-full">
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Processes</h3>
                  <p className="text-[#666666] leading-relaxed">The V.Two AI SDLC governs every engagement with defined inputs, outputs, and human review gates.</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="bg-white rounded-lg p-8 shadow-sm border-t-4 border-t-[#7030A0] border-l border-r border-b border-gray-100 h-full">
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">Methods</h3>
                  <p className="text-[#666666] leading-relaxed">Proven patterns for sequencing: what to modernize first, running old and new in parallel, staged cutover with no big-bang weekend.</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Section 3b - Legacy to modern (before/after) */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <SectionHeading label="The approach" title="Modernize the engine without stopping the car." />
              <p className="text-xl text-[#666666] max-w-3xl mb-16 leading-relaxed -mt-6">
                Instead of a risky big-bang rewrite, we grow a modern system around your live one and switch it over a piece at a time. Your users never notice. Your business never stops.
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FadeIn delay={0.1}>
                <div className="bg-[#FAFAFA] rounded-xl p-8 h-full border border-gray-200">
                  <h3 className="text-lg font-bold text-[#1A1A1A] mb-6 flex items-center gap-2">
                    <span className="text-[#999999]" aria-hidden="true">✕</span> Legacy &amp; on-prem
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Aging framework, nearing end-of-life",
                      "Business logic tangled with the UI",
                      "Locked to on-prem infrastructure",
                      "Slow, risky, expensive to change",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[#666666] leading-snug">
                        <span className="text-[#999999] mt-1 flex-shrink-0" aria-hidden="true">–</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="bg-white rounded-xl p-8 h-full border-2 border-[#7030A0] shadow-sm">
                  <h3 className="text-lg font-bold text-[#7030A0] mb-6 flex items-center gap-2">
                    <span aria-hidden="true">✓</span> Modern &amp; cloud
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Current, supported, cloud-native stack",
                      "Clean API, business rules documented",
                      "Scales on demand, deploys in minutes",
                      "Evergreen, and cheaper to run",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[#1A1A1A] leading-snug">
                        <span className="text-[#7030A0] mt-1 flex-shrink-0" aria-hidden="true">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
            <FadeIn>
              <p className="text-center text-base text-[#7030A0] font-semibold mt-10">
                A working, deployed product at the end of every single phase.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Section 4 - Our approach */}
        <section id="approach" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <SectionHeading label="Our approach" title="Five steps. The first one's free." />
              <p className="text-xl text-[#666666] max-w-3xl mb-16 leading-relaxed -mt-6">
                A clear path from "we're not sure what we have" to a modern platform in production.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
              {[
                { n: "1", title: "Analyze", badge: "Free", desc: "We map your system, its dependencies, and where the real risk lives. You get a clear picture of what modernizing takes — at no cost and no commitment." },
                { n: "2", title: "Document", desc: "We recover the business rules buried in your code into clear specifications you own, so the knowledge is no longer trapped in software." },
                { n: "3", title: "Estimate", desc: "A concrete, phased plan: scope, cost, and milestones you can take to the board. No black boxes, no surprises." },
                { n: "4", title: "Move", desc: "We modernize incrementally, the strangler-fig way. Your application keeps running the entire time. No big-bang, no downtime, always a way back." },
                { n: "5", title: "Test", desc: "Every slice is verified against your live system before any old code is retired. Same data, same behavior — proven, then we move on." },
              ].map((step, i) => (
                <FadeIn key={step.title} delay={0.08 * i}>
                  <div className="bg-white border border-gray-200 rounded-xl p-6 h-full hover:border-[#7030A0] transition-colors shadow-sm flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-[#F5F0FA] text-[#7030A0] text-base font-bold">{step.n}</div>
                      <h3 className="text-lg font-bold text-[#1A1A1A]">{step.title}</h3>
                      {step.badge && <span className="ml-auto inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#7030A0] text-white">{step.badge}</span>}
                    </div>
                    <p className="text-sm text-[#666666] leading-relaxed flex-grow">{step.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Built into every phase */}
            <FadeIn>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-8">Built into every phase</h3>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Business rule extraction",
                  desc: "AI reads the code and surfaces the rules the business actually runs on — including ones nobody remembers writing. Reviewed and signed off by client experts.",
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
                  <div className="bg-white rounded-lg p-7 shadow-sm border-t-4 border-t-[#7030A0] border-l border-r border-b border-gray-100 h-full">
                    <h4 className="text-base font-bold text-[#1A1A1A] mb-3">{card.title}</h4>
                    <p className="text-sm text-[#666666] leading-relaxed">{card.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4b - Inside the work (proof of craft) */}
        <section id="inside" className="py-24 border-y border-gray-100" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F5F0FA 100%)" }}>
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <SectionHeading label="Inside the work" title="A look at how we actually do it" />
              <p className="text-xl text-[#666666] max-w-3xl mb-16 leading-relaxed -mt-6">
                Most firms show you a deck. Here is a redacted look at the real method and the artifacts a V.Two Evolve engagement produces — the reason the outcomes hold up.
              </p>
            </FadeIn>

            {/* A — The method: four stages, ten phases */}
            <FadeIn>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">The method: four stages, ten phases</h3>
              <p className="text-[#666666] mb-8 max-w-3xl leading-relaxed">Every engagement runs the same defined path — each phase with its own inputs, review gate, and deliverable. The application stays live the entire time.</p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
              {[
                { stage: "Understand", phases: ["Discovery & assessment", "Architecture analysis", "Dependency & risk"] },
                { stage: "Plan", phases: ["Target architecture", "Roadmap & estimation"] },
                { stage: "Transform", phases: ["Business-rule extraction", "Module rebuild", "Parity validation", "Pre-merge preflight"] },
                { stage: "Land", phases: ["Deployment readiness", "Documentation & handoff"] },
              ].map((col, i) => (
                <FadeIn key={col.stage} delay={0.1 * i}>
                  <div className="bg-white rounded-lg p-6 shadow-sm border-t-4 border-t-[#7030A0] border-l border-r border-b border-gray-100 h-full">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-mono font-bold text-[#7030A0] opacity-40">{`0${i + 1}`}</span>
                      <h4 className="text-lg font-bold text-[#1A1A1A]">{col.stage}</h4>
                    </div>
                    <ul className="space-y-2">
                      {col.phases.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-[#666666] leading-snug">
                          <span className="text-[#7030A0] mt-0.5 flex-shrink-0" aria-hidden="true">›</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* B — A real deliverable (redacted): business-rule extraction */}
            <FadeIn>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">A real deliverable: recovered business rules</h3>
              <p className="text-[#666666] mb-8 max-w-3xl leading-relaxed">Logic buried in legacy code is extracted into a plain-language spec you own — each rule cites the exact code it came from and ships with a parity check that proves the rebuild behaves identically. A redacted sample:</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="rounded-xl bg-[#1A1A1A] shadow-lg overflow-hidden mb-20 border border-black/20">
                <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-black/30">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f56]" aria-hidden="true"></span>
                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" aria-hidden="true"></span>
                    <span className="w-3 h-3 rounded-full bg-[#27c93f]" aria-hidden="true"></span>
                    <span className="ml-3 text-xs font-mono text-white/60">InvoiceTotals.business-rules.yaml</span>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#7030A0] text-white">Redacted sample</span>
                </div>
                <pre className="px-5 py-5 text-[13px] font-mono text-white/90 overflow-x-auto leading-relaxed whitespace-pre">{`id: BR-001
title: Line total is quantity x unit price, rounded 2dp (half-up)
type: calculation
description: >
  Each line total = quantity x unit price, rounded to two decimals
  half-up. Rounding is per line, before the subtotal is summed.
source_references:
  - file: src/Billing/InvoiceService.cs   lines: 88-104
edge_cases:
  - Negative quantity (credit lines) yields a negative total.
  - Half-up, not banker's rounding:  2.005 -> 2.01
confidence: extracted        confirmation: confirmed by Finance Lead
acceptance:
  - given: quantity=3,  unitPrice=2.005    expect: total = 6.02
  - given: quantity=-1, unitPrice=10.00    expect: total = -10.00`}</pre>
              </div>
            </FadeIn>

            {/* C — How we prove it's right: the parity gate */}
            <FadeIn>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">How we prove it is right</h3>
              <p className="text-[#666666] mb-8 max-w-3xl leading-relaxed">Nothing legacy is switched off until its modern replacement is proven at parity against your live system. Every increment clears five gates before it ships:</p>
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
                  <div className="bg-white rounded-lg p-5 border border-gray-100 shadow-sm h-full flex items-start gap-2">
                    <span className="text-[#7030A0] font-bold flex-shrink-0" aria-hidden="true">✓</span>
                    <span className="text-sm font-medium text-[#1A1A1A] leading-snug">{dim}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
            <FadeIn>
              <p className="text-base text-[#7030A0] font-semibold max-w-3xl">
                Passing unit tests is not the bar. Observed behavior against your running system is — that is what lets us retire legacy code without holding our breath.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Section 5 - Case study */}
        <section id="case-study" className="py-24 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <SectionHeading label="Case study" title="Proven in production" />
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-[#7030A0] mb-4">The client</h4>
                    <p className="text-[#666666] leading-relaxed">
                      An enterprise <span className="text-[#1A1A1A] font-medium">legal practice-management and finance platform</span> used by law firms to run matters, billing, and accounting — a large on-premise system built up over more than a decade.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-[#7030A0] mb-4">The problem</h4>
                    <p className="text-[#666666] leading-relaxed">
                      The platform ran on an aging stack tied to a CRM runtime heading out of support. Critical billing and accounting rules lived only in the code, and the people who wrote them had moved on. A big-bang rewrite was off the table — firms bill on it every day, so it could not go dark.
                    </p>
                  </div>
                </div>

                <div className="mb-12">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#7030A0] mb-4">What we did</h4>
                  <p className="text-[#666666] leading-relaxed mb-4">
                    We ran the V.Two Evolve method end to end. We assessed the system and mapped where the business logic actually lived, then extracted the billing and posting rules into a plain-language specification the client now owns. Working module by module, we rebuilt the logic on a clean, modern data layer <span className="text-[#1A1A1A] font-medium">behind the existing user interface</span> — so the people using it saw no disruption.
                  </p>
                  <p className="text-[#666666] leading-relaxed">
                    Every rebuilt module was proven at parity against the live system with an automated test harness before any legacy code was switched off. Old and new ran in parallel, and cutover happened in small, reversible steps.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#7030A0] mb-6">The results</h4>
                  {/* NOTE: qualitative outcomes are true of the engagement. Add real headline
                      numbers here when cleared to share (e.g. velocity, defect rate). */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {[
                      { head: "Zero downtime", sub: "Platform kept serving firms throughout" },
                      { head: "Rules recovered", sub: "Business logic documented and client-owned" },
                      { head: "Parity-proven", sub: "Validated on the live system before legacy retired" },
                    ].map((m) => (
                      <div key={m.head} className="bg-[#F5F0FA] p-6 rounded-lg border border-[#7030A0]/20 text-center">
                        <div className="text-2xl font-extrabold text-[#7030A0] mb-2">{m.head}</div>
                        <div className="text-sm text-[#666666] leading-snug">{m.sub}</div>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-[#666666] italic mt-6">Detailed velocity and quality benchmarks available under NDA.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Why V.Two */}
        <section id="why-vtwo" className="py-24 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <SectionHeading label="Why V.Two" title="Why clients pick us" />
              <p className="text-xl text-[#666666] max-w-3xl mb-16 leading-relaxed -mt-6">
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
                  <div className="bg-white rounded-lg p-8 shadow-sm border-t-4 border-t-[#7030A0] border-l border-r border-b border-gray-100 h-full">
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">{card.title}</h3>
                    <p className="text-[#666666] leading-relaxed">{card.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7b - What the client receives (deliverables) */}
        <section id="deliverables" className="py-24 border-y border-gray-100" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F5F0FA 100%)" }}>
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <SectionHeading label="Deliverables" title="What you walk away with" />
              <p className="text-xl text-[#666666] max-w-3xl mb-16 leading-relaxed -mt-6">
                Not just working software — a documented, understood platform your team owns. Every engagement produces:
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
                { d: "Modernized codebase, delivered incrementally", p: "Phases 6–9" },
                { d: "Test suites & Parity Evidence", p: "Phase 7" },
                { d: "Deployment Runbook & Rollback Procedure", p: "Phase 9" },
                { d: "Handoff Package & Knowledge Transfer", p: "Phase 10" },
              ].map((item, i) => (
                <FadeIn key={item.d} delay={0.05 * (i % 3)}>
                  <div className="bg-white rounded-lg p-5 h-full border border-gray-100 shadow-sm flex items-start gap-3">
                    <span className="text-[#7030A0] font-bold flex-shrink-0 mt-0.5" aria-hidden="true">✓</span>
                    <div>
                      <div className="text-[#1A1A1A] font-semibold leading-snug">{item.d}</div>
                      <div className="text-xs font-mono text-[#7030A0] mt-1">{item.p}</div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8 - FAQ */}
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <FadeIn>
              <SectionHeading title="Frequently asked questions" className="text-center" />
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6 data-[state=open]:border-[#7030A0] data-[state=open]:shadow-sm transition-all">
                  <AccordionTrigger className="text-left text-lg font-bold text-[#1A1A1A] hover:no-underline py-6">
                    What platforms and languages do you work with?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-[#666666] pb-6 leading-relaxed">
                    Language-agnostic. We have applied V.Two Evolve across older Java, .NET, and database-centric platforms moving to modern cloud-native architectures.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6 data-[state=open]:border-[#7030A0] data-[state=open]:shadow-sm transition-all">
                  <AccordionTrigger className="text-left text-lg font-bold text-[#1A1A1A] hover:no-underline py-6">
                    Is our code used to train AI models?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-[#666666] pb-6 leading-relaxed">
                    No. We operate under enterprise agreements with no training on client data. Every engagement includes review gates and access controls.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6 data-[state=open]:border-[#7030A0] data-[state=open]:shadow-sm transition-all">
                  <AccordionTrigger className="text-left text-lg font-bold text-[#1A1A1A] hover:no-underline py-6">
                    What if the pilot does not deliver?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-[#666666] pb-6 leading-relaxed">
                    Then you found out early — with hard benchmarks — instead of discovering it two years into a rewrite. The pilot is deliberately small and fixed-scope so that is a cheap lesson, not an expensive one.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6 data-[state=open]:border-[#7030A0] data-[state=open]:shadow-sm transition-all">
                  <AccordionTrigger className="text-left text-lg font-bold text-[#1A1A1A] hover:no-underline py-6">
                    How is this different from a big consultancy?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-[#666666] pb-6 leading-relaxed">
                    Consultancies sell hours, so longer projects pay them more. V.Two sells fixed-fee outcomes, so speed pays V.Two.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </FadeIn>
          </div>
        </section>

        {/* Section 9 - CTA band */}
        <section className="py-24 bg-[#7030A0] text-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <FadeIn>
              <h2 className="text-4xl font-extrabold mb-12">Ready to start?</h2>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 mb-16 relative">
                {/* Connecting line for desktop */}
                <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-px bg-white/20 -z-0"></div>
                
                {[
                  { num: "1", title: "Talk to us", desc: "30-minute call" },
                  { num: "2", title: "Free assessment", desc: "Codebase scan and roadmap" },
                  { num: "3", title: "Pilot in weeks", desc: "Fixed-fee, judge us on shipped code" }
                ].map((step, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center relative z-10 w-full md:w-auto">
                    <div className="w-12 h-12 rounded-full bg-white text-[#7030A0] flex items-center justify-center font-bold text-xl mb-4 shadow-lg">
                      {step.num}
                    </div>
                    <div className="bg-[#5a2680] rounded-lg p-4 w-full text-center border border-white/10">
                      <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                      <p className="text-white/80 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a href="mailto:chris@vtwo.co" className="inline-flex items-center justify-center px-8 py-4 text-xl font-bold text-[#7030A0] bg-white rounded-md hover:bg-gray-100 transition-colors shadow-lg">
                Request your free assessment
              </a>
            </FadeIn>
          </div>
        </section>
      </main>

      {/* Section 10 - Footer */}
      <footer className="bg-[#1A1A1A] text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="text-2xl font-bold">
              V.Two <span className="text-[#7030A0]">Evolve</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="https://www.vtwo.co" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#7030A0] transition-colors font-medium">
                www.vtwo.co
              </a>
              <a href="mailto:chris@vtwo.co" className="text-white/80 hover:text-[#7030A0] transition-colors font-medium">
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
