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
          <a href="#case-study" className="text-sm font-medium text-[#666666] hover:text-[#7030A0] transition-colors">Case study</a>
          <a href="#why-vtwo" className="text-sm font-medium text-[#666666] hover:text-[#7030A0] transition-colors">Why V.Two</a>
          <a href="#pricing" className="text-sm font-medium text-[#666666] hover:text-[#7030A0] transition-colors">Pricing</a>
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
            <a href="#case-study" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-[#666666] hover:text-[#7030A0]">Case study</a>
            <a href="#why-vtwo" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-[#666666] hover:text-[#7030A0]">Why V.Two</a>
            <a href="#pricing" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-[#666666] hover:text-[#7030A0]">Pricing</a>
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
          <div className="max-w-4xl mx-auto px-6 text-center">
            <FadeIn>
              <div className="inline-flex items-center rounded-full border border-[#7030A0] bg-white px-4 py-1 text-sm font-semibold text-[#7030A0] mb-8">
                Application Modernization
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-5xl md:text-6xl font-extrabold text-[#1A1A1A] tracking-tight leading-tight mb-8">
                Your legacy platforms are a liability. <br className="hidden md:block"/> <span className="text-[#7030A0]">V.Two Evolve</span> turns them into an advantage.
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl md:text-2xl text-[#666666] mb-12 max-w-3xl mx-auto leading-relaxed">
                V.Two Evolve is our proprietary set of skills, processes, and methods that modernize business platforms via AI. Faster than a rewrite. Safer than a lift-and-shift. Priced so the risk sits with us, not you.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <a href="mailto:chris@vtwo.co" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-lg font-bold text-white bg-[#7030A0] rounded-md hover:bg-[#5a2680] transition-colors shadow-sm">
                  Start with a free assessment
                </a>
                <a href="#pricing" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-lg font-bold text-[#7030A0] bg-transparent border-2 border-[#7030A0] rounded-md hover:bg-[#F5F0FA] transition-colors">
                  See pricing
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm max-w-4xl mx-auto">
                <div className="p-6 border-b md:border-b-0 md:border-r border-gray-200 text-left">
                  <div className="font-bold text-[#1A1A1A] mb-1">Free</div>
                  <div className="text-sm text-[#666666] leading-relaxed">Assessment. A concrete modernization plan, no cost.</div>
                </div>
                <div className="p-6 border-b md:border-b-0 md:border-r border-gray-200 text-left">
                  <div className="font-bold text-[#1A1A1A] mb-1">$50,000</div>
                  <div className="text-sm text-[#666666] leading-relaxed">Fixed-fee pilot. Working modernized code, not a slide deck.</div>
                </div>
                <div className="p-6 text-left">
                  <div className="font-bold text-[#1A1A1A] mb-1">Fixed-fee</div>
                  <div className="text-sm text-[#666666] leading-relaxed">Build. Scoped from the pilot. No open-ended T&M.</div>
                </div>
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
                  desc: "Every year more spend goes to keeping old platforms alive, the gap compounds."
                },
                {
                  num: "02",
                  title: "Rewrites keep failing",
                  desc: "Traditional rewrites run long and get cancelled, the problem is the method of humans re-reading millions of lines by hand."
                },
                {
                  num: "03",
                  title: "AI moved the goalposts",
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

        {/* Section 3 - The proprietary model */}
        <section id="the-model" className="py-24 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <SectionHeading label="The proprietary model" title="V.Two Evolve: skills, processes, and methods" />
              <p className="text-xl text-[#666666] max-w-3xl mb-16 leading-relaxed">
                It is not a tool you license — it is how V.Two works. A proprietary system built across real client engagements.
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

        {/* Section 4 - Our approach */}
        <section id="approach" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <SectionHeading label="Our approach" title="Assess. Pilot. Build." />
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {/* Assessment */}
              <FadeIn delay={0.1}>
                <div className="bg-white border border-gray-200 rounded-xl p-8 h-full hover:border-[#7030A0] transition-colors shadow-sm flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#F5F0FA] text-[#7030A0] text-lg font-bold">1</div>
                    <h3 className="text-xl font-bold text-[#1A1A1A]">Assessment</h3>
                    <span className="ml-auto inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#7030A0] text-white">Free</span>
                  </div>
                  <ul className="space-y-3 flex-grow">
                    {[
                      "Codebase and architecture scan",
                      "Business rule inventory: what logic lives where",
                      "Risk, dependency, and data landscape map",
                      "Prioritized roadmap",
                      "Pilot scope recommendation",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[#666666] leading-snug">
                        <span className="text-[#7030A0] mt-1 flex-shrink-0">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              {/* Pilot */}
              <FadeIn delay={0.2}>
                <div className="bg-white border border-gray-200 rounded-xl p-8 h-full hover:border-[#7030A0] transition-colors shadow-sm flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#F5F0FA] text-[#7030A0] text-lg font-bold">2</div>
                    <h3 className="text-xl font-bold text-[#1A1A1A]">Pilot</h3>
                    <span className="ml-auto inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#7030A0] text-white whitespace-nowrap">$50,000 fixed</span>
                  </div>
                  <ul className="space-y-3 flex-grow">
                    {[
                      "One production-relevant module modernized",
                      "Business rules extracted and documented",
                      "Automated tests proving behavior parity",
                      "Data conversion approach proven on real data",
                      "Velocity and quality benchmarks",
                      "Fixed-fee proposal for the full build",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[#666666] leading-snug">
                        <span className="text-[#7030A0] mt-1 flex-shrink-0">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              {/* Build */}
              <FadeIn delay={0.3}>
                <div className="bg-white border border-gray-200 rounded-xl p-8 h-full hover:border-[#7030A0] transition-colors shadow-sm flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#F5F0FA] text-[#7030A0] text-lg font-bold">3</div>
                    <h3 className="text-xl font-bold text-[#1A1A1A]">Build</h3>
                    <span className="ml-auto inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#7030A0] text-white">Fixed fee</span>
                  </div>
                  <ul className="space-y-3 flex-grow">
                    {[
                      "Phased delivery with review gates",
                      "Old and new running in parallel",
                      "Full data conversion with reconciliation",
                      "Staged cutover",
                      "Client team trained along the way",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[#666666] leading-snug">
                        <span className="text-[#7030A0] mt-1 flex-shrink-0">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
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

        {/* Section 5 - Case study */}
        <section id="case-study" className="py-24 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <SectionHeading label="Case study" title="Proven in production" />
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <div className="border-2 border-dashed border-[#7030A0] bg-[#F5F0FA] rounded-xl p-12 text-center relative overflow-hidden mb-12">
                <span className="absolute top-4 right-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-white text-[#7030A0] border border-[#7030A0]">
                  Placeholder
                </span>
                <p className="text-xl text-[#7030A0] font-medium">Case study content pending. Check back soon.</p>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12 opacity-50 grayscale pointer-events-none select-none">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-[#7030A0] mb-4">The client</h4>
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-[#7030A0] mb-4">The problem</h4>
                    <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
                
                <div className="mb-12">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#7030A0] mb-4">What we did</h4>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#7030A0] mb-6">The results</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center">
                      <div className="text-3xl font-bold text-[#1A1A1A] mb-2">[XX%]</div>
                      <div className="text-sm text-[#666666] uppercase tracking-wide">Metric</div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center">
                      <div className="text-3xl font-bold text-[#1A1A1A] mb-2">[XX days]</div>
                      <div className="text-sm text-[#666666] uppercase tracking-wide">Metric</div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center">
                      <div className="text-3xl font-bold text-[#1A1A1A] mb-2">[XX%]</div>
                      <div className="text-sm text-[#666666] uppercase tracking-wide">Metric</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Section 6 - What clients say */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <SectionHeading title="What clients say" />
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2].map((i) => (
                <FadeIn key={i} delay={0.1 * i}>
                  <div className="bg-white border border-gray-200 rounded-xl p-8 h-full shadow-sm relative">
                    <div className="text-[#7030A0] text-6xl font-serif absolute top-4 left-6 opacity-20">"</div>
                    <div className="relative z-10 pt-4">
                      <p className="text-xl text-[#1A1A1A] font-medium mb-8 leading-relaxed italic">
                        "[Client testimonial pending — content to be added.]"
                      </p>
                      <div>
                        <div className="font-bold text-[#1A1A1A]">[Client Name]</div>
                        <div className="text-[#666666] text-sm">[Title], [Company]</div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
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
                  title: "We are experts",
                  desc: "Application modernization via AI is not a side practice for us. It is the work. V.Two Evolve exists because we have done this on real platforms, refined the method each time, and codified what works.",
                },
                {
                  title: "Fixed bid. Risk removed.",
                  desc: "Free assessment. $50,000 fixed pilot. Fixed-fee build. You know every price before you commit, and overruns are our problem, not yours. No firm billing by the hour can say that.",
                },
                {
                  title: "A proven partner",
                  desc: "We have shipped modernization work for real clients on real production systems. Our references speak to delivery, not decks.",
                },
                {
                  title: "AI credentials and client references",
                  desc: "Our team builds with AI every day. Ask us for client references. We will connect you directly.",
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

        {/* Section 7 - Pricing */}
        <section id="pricing" className="py-24 bg-[#FAFAFA] border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <SectionHeading label="Pricing" title="Priced so the risk sits with us" />
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Card 1 */}
              <FadeIn delay={0.1}>
                <div className="bg-white rounded-xl border border-gray-200 p-8 h-full flex flex-col shadow-sm">
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">Assessment</h3>
                  <div className="text-3xl font-extrabold text-[#7030A0] mb-6">Free</div>
                  <ul className="space-y-4 mb-8 flex-grow">
                    <li className="flex items-start text-[#666666]">
                      <span className="text-[#7030A0] mr-2 mt-1">•</span>
                      Codebase and architecture scan
                    </li>
                    <li className="flex items-start text-[#666666]">
                      <span className="text-[#7030A0] mr-2 mt-1">•</span>
                      Risk and dependency map
                    </li>
                    <li className="flex items-start text-[#666666]">
                      <span className="text-[#7030A0] mr-2 mt-1">•</span>
                      Prioritized roadmap
                    </li>
                    <li className="flex items-start text-[#666666]">
                      <span className="text-[#7030A0] mr-2 mt-1">•</span>
                      Pilot scope recommendation
                    </li>
                  </ul>
                  <a href="mailto:chris@vtwo.co" className="w-full inline-flex items-center justify-center px-4 py-3 text-base font-bold text-[#7030A0] bg-white border-2 border-[#7030A0] rounded-md hover:bg-[#F5F0FA] transition-colors mt-auto">
                    Request assessment
                  </a>
                </div>
              </FadeIn>

              {/* Card 2 */}
              <FadeIn delay={0.2}>
                <div className="bg-white rounded-xl border-2 border-[#7030A0] p-8 h-full flex flex-col shadow-md relative transform md:-translate-y-4">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#7030A0] text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                    Most popular
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">Pilot</h3>
                  <div className="text-3xl font-extrabold text-[#7030A0] mb-6">$50,000 <span className="text-lg text-[#666666] font-normal">fixed fee</span></div>
                  <ul className="space-y-4 mb-8 flex-grow">
                    <li className="flex items-start text-[#666666]">
                      <span className="text-[#7030A0] mr-2 mt-1">•</span>
                      One production-relevant module modernized
                    </li>
                    <li className="flex items-start text-[#666666]">
                      <span className="text-[#7030A0] mr-2 mt-1">•</span>
                      Automated tests proving behavior parity
                    </li>
                    <li className="flex items-start text-[#666666]">
                      <span className="text-[#7030A0] mr-2 mt-1">•</span>
                      Velocity and quality benchmarks
                    </li>
                    <li className="flex items-start text-[#666666]">
                      <span className="text-[#7030A0] mr-2 mt-1">•</span>
                      Fixed-fee proposal for full build
                    </li>
                  </ul>
                  <a href="mailto:chris@vtwo.co" className="w-full inline-flex items-center justify-center px-4 py-3 text-base font-bold text-white bg-[#7030A0] rounded-md hover:bg-[#5a2680] transition-colors mt-auto shadow-sm">
                    Start the pilot
                  </a>
                </div>
              </FadeIn>

              {/* Card 3 */}
              <FadeIn delay={0.3}>
                <div className="bg-white rounded-xl border border-gray-200 p-8 h-full flex flex-col shadow-sm">
                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">Build</h3>
                  <div className="text-3xl font-extrabold text-[#7030A0] mb-6">Fixed fee</div>
                  <p className="text-sm text-[#666666] mb-6 italic">Scoped and priced from the pilot. Price locked before work starts.</p>
                  <ul className="space-y-4 mb-8 flex-grow">
                    <li className="flex items-start text-[#666666]">
                      <span className="text-[#7030A0] mr-2 mt-1">•</span>
                      Phased delivery with review gates
                    </li>
                    <li className="flex items-start text-[#666666]">
                      <span className="text-[#7030A0] mr-2 mt-1">•</span>
                      Parallel run
                    </li>
                    <li className="flex items-start text-[#666666]">
                      <span className="text-[#7030A0] mr-2 mt-1">•</span>
                      Staged cutover
                    </li>
                    <li className="flex items-start text-[#666666]">
                      <span className="text-[#7030A0] mr-2 mt-1">•</span>
                      Client team training
                    </li>
                  </ul>
                  <a href="mailto:chris@vtwo.co" className="w-full inline-flex items-center justify-center px-4 py-3 text-base font-bold text-[#7030A0] bg-white border-2 border-[#7030A0] rounded-md hover:bg-[#F5F0FA] transition-colors mt-auto">
                    Request a proposal
                  </a>
                </div>
              </FadeIn>
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
                    Then you spent $50,000 to learn that — with benchmarks — instead of discovering it two years into a rewrite.
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
                  { num: "3", title: "Pilot in weeks", desc: "$50,000 fixed, judge us on shipped code" }
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
          <div className="border-t border-white/10 pt-8 flex flex-col items-center justify-center text-white/50 text-sm">
            <p>&copy; 2026 V.Two. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
