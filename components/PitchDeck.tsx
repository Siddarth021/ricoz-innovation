'use client';

import React, { useState } from 'react';
import { 
  Download, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  TrendingUp, 
  ShieldCheck, 
  Building2, 
  Users, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  ExternalLink,
  Briefcase,
  Layers,
  Sparkles,
  Trophy,
  Bot,
  DollarSign
} from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  category: string;
  subtitle: string;
}

const SLIDES: Slide[] = [
  { id: 1, title: 'Executive Title & Vision', category: 'Executive', subtitle: 'Unlocking Underutilized K-12 School Campuses for Summer Day Camps' },
  { id: 2, title: 'Problem & Market Inefficiency', category: 'Macro Problem', subtitle: 'Structural Friction in Summer Real Estate & Working Parent Childcare' },
  { id: 3, title: 'The CampNexus Solution', category: 'Value Proposition', subtitle: 'Turnkey Pop-Up Operator: Zero Fixed Capex, Community Rooted' },
  { id: 4, title: 'Market Opportunity & TAM/SAM/SOM', category: 'Market Sizing', subtitle: 'A $4.2B Non-Discretionary Childcare & Enrichment Market' },
  { id: 5, title: 'Multi-Track Curriculum Architecture', category: 'Curriculum & Pedagogy', subtitle: 'Standardized, Reproducible 5-Day Rotational Framework' },
  { id: 6, title: 'Dual-Sided Software Platform', category: 'Technology', subtitle: 'Next.js 14 Architecture Connecting Parents, Schools & Directors' },
  { id: 7, title: 'Operations, Logistics & Trust', category: 'Operations & Safety', subtitle: 'Institutional Safety, Rapid 48-Hr Mobilization & Risk Mitigation' },
  { id: 8, title: 'Unit Economics: Campus P&L', category: 'Financials', subtitle: 'High Margin, Predictable Costs & Rapid Capital Payback' },
  { id: 9, title: 'Competitive Landscape & Moats', category: 'Strategy', subtitle: 'Why CampNexus Wins Against Incumbents and Specialty Camps' },
  { id: 10, title: 'Go-To-Market & Growth Flywheel', category: 'Distribution', subtitle: 'Dual-Channel Pipeline: Institutional B2B & Hyper-Local B2C' },
  { id: 11, title: '3-Year Financial Model & Scaling', category: 'Projections', subtitle: 'Scaling from 4 to 45 Campuses with Accelerating Operating Leverage' },
  { id: 12, title: 'Team Workstreams & Roadmap', category: 'Execution', subtitle: 'Operational Roles & Immediate Assignments for Incoming Teammates' },
];

export const PitchDeck: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const nextSlide = () => {
    if (currentSlide < 12) setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 1) setCurrentSlide(currentSlide - 1);
  };

  const slide = SLIDES[currentSlide - 1];

  return (
    <div className={`space-y-6 ${isFullscreen ? 'fixed inset-0 z-50 bg-[#FAF8F5] p-6 overflow-y-auto' : ''}`}>
      
      {/* Top Controls Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#E7E2DA]">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200">
              12-Page Business Pitch Deck
            </span>
            <span className="text-xs text-[#78716C]">| Summer 2026 Strategic Plan</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917] mt-1">
            CampNexus Strategic Presentation Deck
          </h1>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-3">
          <a
            href="/CampNexus_12_Page_Business_Deck.pdf"
            download
            className="inline-flex items-center space-x-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm transition-all"
          >
            <Download className="h-4 w-4" />
            <span>Download 12-Page Deck (PDF)</span>
          </a>

          <a
            href="/CampNexus_PRD_Technical_Report.pdf"
            download
            className="inline-flex items-center space-x-1.5 px-3 py-2 text-xs font-semibold rounded-sm bg-white hover:bg-[#F4EFEA] text-[#1C1917] border border-[#E7E2DA] transition-all"
          >
            <Download className="h-3.5 w-3.5 text-[#57534E]" />
            <span>Technical Report (PDF)</span>
          </a>

          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-2 border border-[#E7E2DA] bg-white rounded-sm hover:bg-[#F4EFEA] text-[#57534E]"
            title={isFullscreen ? 'Exit Full Screen' : 'Full Screen'}
          >
            {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Slide Carousel Navigator Bar */}
      <div className="flex items-center justify-between bg-white border border-[#E7E2DA] p-2.5 rounded-sm shadow-xs">
        <div className="flex items-center space-x-2">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 1}
            className="p-1.5 rounded-sm border border-[#E7E2DA] bg-[#FAF8F5] disabled:opacity-30 hover:bg-stone-100 transition-colors"
          >
            <ChevronLeft className="h-4 w-4 text-[#1C1917]" />
          </button>
          <span className="font-serif font-bold text-sm text-[#1C1917]">
            Slide {currentSlide} of 12
          </span>
          <button
            onClick={nextSlide}
            disabled={currentSlide === 12}
            className="p-1.5 rounded-sm border border-[#E7E2DA] bg-[#FAF8F5] disabled:opacity-30 hover:bg-stone-100 transition-colors"
          >
            <ChevronRight className="h-4 w-4 text-[#1C1917]" />
          </button>
        </div>

        {/* Thumbnail Selector Tabs */}
        <div className="hidden lg:flex items-center space-x-1 overflow-x-auto">
          {SLIDES.map((s) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(s.id)}
              className={`px-2 py-1 text-[11px] font-semibold rounded-xs transition-all ${
                currentSlide === s.id
                  ? 'bg-emerald-600 text-white shadow-2xs'
                  : 'bg-stone-50 hover:bg-stone-100 text-stone-600'
              }`}
            >
              {s.id}
            </button>
          ))}
        </div>

        <div className="text-xs text-[#78716C] font-medium hidden sm:block">
          {slide.category}
        </div>
      </div>

      {/* Main Slide Stage (16:9 Aspect Ratio Container) */}
      <div className="bg-white border-2 border-[#E7E2DA] rounded-sm shadow-md p-6 sm:p-10 min-h-[540px] flex flex-col justify-between">
        
        {/* Slide Header */}
        <div className="border-b border-[#F0EBE3] pb-4">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="font-bold tracking-widest text-emerald-800 uppercase">
              CAMPNEXUS &bull; {slide.category.toUpperCase()}
            </span>
            <span className="text-stone-400 font-mono">
              SLIDE {currentSlide.toString().padStart(2, '0')} / 12
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A]">
            {slide.title}
          </h2>
          <p className="text-xs sm:text-sm text-emerald-800 font-medium mt-0.5">
            {slide.subtitle}
          </p>
        </div>

        {/* Dynamic Slide Content Body */}
        <div className="py-6 flex-1 flex flex-col justify-center">

          {/* SLIDE 1: Executive Title & Vision */}
          {currentSlide === 1 && (
            <div className="space-y-6 text-center">
              <div className="max-w-2xl mx-auto space-y-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 uppercase tracking-widest">
                  Topic 86: Pop-Up Summer Camp Operator
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                  Unlocking Underutilized K-12 Campuses
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Renting dark school campuses during summer months to operate premium Multi-Sport, 
                  Theater, and Robotics day camps. An asset-light model generating auxiliary revenue for schools 
                  and essential childcare for working families.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-4">
                <div className="p-4 rounded-sm bg-emerald-50 border border-emerald-200">
                  <div className="font-serif text-3xl font-bold text-emerald-700">$4.2B</div>
                  <div className="text-xs font-bold text-slate-900 mt-1">US Day Camp TAM</div>
                  <div className="text-[11px] text-slate-500">14M K-8 campers/yr</div>
                </div>
                <div className="p-4 rounded-sm bg-blue-50 border border-blue-200">
                  <div className="font-serif text-3xl font-bold text-blue-700">$0</div>
                  <div className="text-xs font-bold text-slate-900 mt-1">Real Estate Capex</div>
                  <div className="text-[11px] text-slate-500">100% asset-light lease</div>
                </div>
                <div className="p-4 rounded-sm bg-amber-50 border border-amber-200">
                  <div className="font-serif text-3xl font-bold text-amber-700">39.3%</div>
                  <div className="text-xs font-bold text-slate-900 mt-1">Campus EBITDA</div>
                  <div className="text-[11px] text-slate-500">$173.8k net per campus</div>
                </div>
                <div className="p-4 rounded-sm bg-slate-50 border border-slate-200">
                  <div className="font-serif text-3xl font-bold text-slate-900">41</div>
                  <div className="text-xs font-bold text-slate-900 mt-1">Break-Even Volume</div>
                  <div className="text-[11px] text-slate-500">Campers/wk (34% cap)</div>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 2: Problem & Inefficiency */}
          {currentSlide === 2 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-sm border border-red-200 bg-red-50/40">
                <span className="text-[10px] font-bold uppercase tracking-wider text-red-700">Inefficiency 1</span>
                <h4 className="font-serif text-lg font-bold text-slate-900 mt-1 mb-2">100,000+ Dark Campuses</h4>
                <ul className="text-xs text-slate-700 space-y-2 list-disc pl-4">
                  <li>K-12 schools operate 180 days/year; buildings sit idle for 10–12 weeks.</li>
                  <li>Districts carry ongoing HVAC, security, and maintenance overhead with $0 income.</li>
                  <li>Community gymnasiums, stages, and STEM labs remain locked behind chain-link fences.</li>
                </ul>
              </div>

              <div className="p-5 rounded-sm border border-amber-200 bg-amber-50/40">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700">Inefficiency 2</span>
                <h4 className="font-serif text-lg font-bold text-slate-900 mt-1 mb-2">70-Day Childcare Void</h4>
                <ul className="text-xs text-slate-700 space-y-2 list-disc pl-4">
                  <li>68% of families have dual-working parents needing reliable 8:30 AM – 3:30 PM care.</li>
                  <li>Market is fractured: babysitting networks vs $1,200/wk elite sleepaway camps.</li>
                  <li><strong>The Sibling Dilemma:</strong> Parents face 2–3 separate morning drop-offs for different kids.</li>
                </ul>
              </div>

              <div className="p-5 rounded-sm border border-blue-200 bg-blue-50/40">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700">Inefficiency 3</span>
                <h4 className="font-serif text-lg font-bold text-slate-900 mt-1 mb-2">Severe "Summer Slide"</h4>
                <ul className="text-xs text-slate-700 space-y-2 list-disc pl-4">
                  <li>Children lose an average of 2.6 months of math and reading skills each summer.</li>
                  <li>Screen time surges 250% over long idle vacation months.</li>
                  <li>Sports camps neglect STEM; specialty tech camps lack outdoor athletic activity.</li>
                </ul>
              </div>
            </div>
          )}

          {/* SLIDE 3: The Solution */}
          {currentSlide === 3 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="p-4 rounded-sm bg-emerald-50 border border-emerald-200">
                  <h4 className="font-serif text-base font-bold text-emerald-950 flex items-center space-x-2">
                    <Building2 className="h-5 w-5 text-emerald-700" />
                    <span>Asset-Light Master Campus Leaseback</span>
                  </h4>
                  <p className="text-xs text-emerald-900 mt-1 leading-relaxed">
                    We lease school gyms, auditoriums, and fields. Districts earn $35k–$75k auxiliary revenue 
                    with $5,000,000 indemnification and zero operational friction.
                  </p>
                </div>

                <div className="p-4 rounded-sm bg-blue-50 border border-blue-200">
                  <h4 className="font-serif text-base font-bold text-blue-950 flex items-center space-x-2">
                    <Layers className="h-5 w-5 text-blue-700" />
                    <span>Proprietary "Camp-in-a-Box" Logistics</span>
                  </h4>
                  <p className="text-xs text-blue-900 mt-1 leading-relaxed">
                    Serialized heavy-duty Pelican cargo crates pre-packed with sports gear, theatrical lighting, 
                    and robotics kits. Complete campus deployment in under 48 hours.
                  </p>
                </div>

                <div className="p-4 rounded-sm bg-amber-50 border border-amber-200">
                  <h4 className="font-serif text-base font-bold text-amber-950 flex items-center space-x-2">
                    <Users className="h-5 w-5 text-amber-700" />
                    <span>Tri-Track Neighborhood Synergy</span>
                  </h4>
                  <p className="text-xs text-amber-900 mt-1 leading-relaxed">
                    One single morning drop-off for the entire family. Multi-Sport, Theater, and Robotics 
                    all running concurrently under one familiar campus roof.
                  </p>
                </div>
              </div>

              <div className="bg-[#FAF8F5] p-6 rounded-sm border border-[#E7E2DA] space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                  The Parent Value Equation
                </span>
                <h4 className="font-serif text-xl font-bold text-slate-900">
                  Neighborhood Convenience Meets Elite Instruction
                </h4>
                <ul className="text-xs text-slate-700 space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>15% Automatic Sibling Discount:</strong> Meaningful savings for multi-child families.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>1:8 Counselor-to-Camper Ratio:</strong> Surpasses state regulations and ACA standards.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>8:30 AM – 3:30 PM + Extended Care:</strong> Aligned with working corporate hours.</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* SLIDE 4: Market Sizing */}
          {currentSlide === 4 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="p-4 bg-emerald-50 border-l-4 border-emerald-600 rounded-sm">
                  <div className="text-xs uppercase font-bold text-emerald-800">Total Addressable Market (TAM)</div>
                  <div className="font-serif text-2xl font-bold text-slate-900">$4.20 Billion</div>
                  <p className="text-xs text-slate-600 mt-1">14M US K-8 students enrolled in summer day camps annually.</p>
                </div>

                <div className="p-4 bg-blue-50 border-l-4 border-blue-600 rounded-sm">
                  <div className="text-xs uppercase font-bold text-blue-800">Serviceable Addressable Market (SAM)</div>
                  <div className="font-serif text-2xl font-bold text-slate-900">$1.12 Billion</div>
                  <p className="text-xs text-slate-600 mt-1">Top 50 metropolitan suburban districts with median income &gt;$120k.</p>
                </div>

                <div className="p-4 bg-amber-50 border-l-4 border-amber-600 rounded-sm">
                  <div className="text-xs uppercase font-bold text-amber-800">Serviceable Obtainable Market (SOM)</div>
                  <div className="font-serif text-2xl font-bold text-slate-900">$48.0 Million (5-Year Target)</div>
                  <p className="text-xs text-slate-600 mt-1">100 partner campuses across 4 core metropolitan regions at 80% capacity.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-sm border border-[#E7E2DA] space-y-3">
                <h4 className="font-serif text-lg font-bold text-slate-900">Demographic Demand Drivers</h4>
                <div className="space-y-2.5 text-xs text-slate-700">
                  <div className="p-3 bg-stone-50 rounded-sm">
                    <strong>68% Dual-Income Households:</strong> Summer camp is non-discretionary care essential for parental employment.
                  </div>
                  <div className="p-3 bg-stone-50 rounded-sm">
                    <strong>12-Minute Commute Rule:</strong> 76% of parent camp selections are based strictly on proximity to home or morning commute.
                  </div>
                  <div className="p-3 bg-stone-50 rounded-sm">
                    <strong>District Revenue Urgency:</strong> Public school districts need alternative auxiliary funding as COVID relief grants expire.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 5: Curriculum Architecture */}
          {currentSlide === 5 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-sm border-2 border-emerald-300 bg-emerald-50/50 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-200 text-emerald-800">Athletics</span>
                    <span className="font-serif font-bold text-emerald-900">$425/wk</span>
                  </div>
                  <h4 className="font-serif text-lg font-bold text-emerald-950">Multi-Sport Academy</h4>
                  <p className="text-xs text-emerald-900 mt-1 font-medium">Ages 6–14 &bull; 1:8 Coach Ratio</p>
                  <ul className="text-xs text-emerald-950 mt-3 space-y-1.5 list-disc pl-4">
                    <li>USSF soccer dribbling & passing drills</li>
                    <li>3v3 basketball spacing & ball screens</li>
                    <li>Flag football routes & team agility</li>
                    <li>Friday Campus Mini-Olympics Tournament</li>
                  </ul>
                </div>
                <div className="mt-4 pt-3 border-t border-emerald-200 text-[11px] text-emerald-800 font-semibold">
                  Facility: Gymnasium & Athletic Fields
                </div>
              </div>

              <div className="p-5 rounded-sm border-2 border-amber-300 bg-amber-50/50 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-amber-200 text-amber-800">Creative Arts</span>
                    <span className="font-serif font-bold text-amber-900">$460/wk</span>
                  </div>
                  <h4 className="font-serif text-lg font-bold text-amber-950">Musical Theater Workshop</h4>
                  <p className="text-xs text-amber-900 mt-1 font-medium">Ages 7–14 &bull; 1:8 Director Ratio</p>
                  <ul className="text-xs text-amber-950 mt-3 space-y-1.5 list-disc pl-4">
                    <li>Vocal projection, diction & breath control</li>
                    <li>Improv comedy games & stage presence</li>
                    <li>Choreography & scene blocking</li>
                    <li>Friday Live 45-min Musical Showcase</li>
                  </ul>
                </div>
                <div className="mt-4 pt-3 border-t border-amber-200 text-[11px] text-amber-800 font-semibold">
                  Facility: Auditorium & Stage
                </div>
              </div>

              <div className="p-5 rounded-sm border-2 border-blue-300 bg-blue-50/50 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-blue-200 text-blue-800">Applied STEM</span>
                    <span className="font-serif font-bold text-blue-900">$495/wk</span>
                  </div>
                  <h4 className="font-serif text-lg font-bold text-blue-950">Robotics & Coding Lab</h4>
                  <p className="text-xs text-blue-900 mt-1 font-medium">Ages 8–14 &bull; 1:8 Lead Ratio</p>
                  <ul className="text-xs text-blue-950 mt-3 space-y-1.5 list-disc pl-4">
                    <li>LEGO Spike Prime mechanical gear trains</li>
                    <li>Micro:bit ultrasonic obstacle rovers</li>
                    <li>Block-to-Python sensor coding</li>
                    <li>Friday Autonomous Robot Sumo Arena</li>
                  </ul>
                </div>
                <div className="mt-4 pt-3 border-t border-blue-200 text-[11px] text-blue-800 font-semibold">
                  Facility: STEM Science Labs & Classrooms
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 6: Dual-Sided Platform Technology */}
          {currentSlide === 6 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-sm border border-[#E7E2DA] bg-[#FAF8F5]">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs mb-3">1</div>
                <h4 className="font-serif text-base font-bold text-slate-900">Parent Discovery & Booking</h4>
                <ul className="text-xs text-slate-600 mt-3 space-y-2 list-disc pl-4">
                  <li>Real-time multi-campus seat availability across 8 summer weeks</li>
                  <li>Automated 15% sibling discount checkout engine</li>
                  <li>COPPA-compliant medical & allergy intake waivers</li>
                  <li>Instant mobile pass with rolling 4-digit pickup PIN</li>
                </ul>
              </div>

              <div className="p-5 rounded-sm border border-[#E7E2DA] bg-[#FAF8F5]">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xs mb-3">2</div>
                <h4 className="font-serif text-base font-bold text-slate-900">School Partner Hub</h4>
                <ul className="text-xs text-slate-600 mt-3 space-y-2 list-disc pl-4">
                  <li>Dynamic auxiliary revenue simulator ($35k–$75k)</li>
                  <li>Facility calendar reservation (gym, theater, fields)</li>
                  <li>Digital Master Lease generator with $5M COI terms</li>
                  <li>Real-time district royalty payment reconciliation</li>
                </ul>
              </div>

              <div className="p-5 rounded-sm border border-[#E7E2DA] bg-[#FAF8F5]">
                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs mb-3">3</div>
                <h4 className="font-serif text-base font-bold text-slate-900">Operations Command Center</h4>
                <ul className="text-xs text-slate-600 mt-3 space-y-2 list-disc pl-4">
                  <li>Live digital muster sheet with 4-digit PIN verification</li>
                  <li>Real-time ACA counselor ratio compliance guardrails (1:8)</li>
                  <li>Instant high-visibility allergy & EpiPen alerts</li>
                  <li>Digital incident logging and parent dispatch</li>
                </ul>
              </div>
            </div>
          )}

          {/* SLIDE 7: Operations & Logistics */}
          {currentSlide === 7 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="p-4 bg-emerald-50 rounded-sm border border-emerald-200">
                  <h4 className="font-serif text-sm font-bold text-emerald-950">48-Hour Rapid Staging Logistics</h4>
                  <p className="text-xs text-emerald-900 mt-1">
                    Pre-packed flight crates arrive Friday 4:00 PM; rooms are transformed by Sunday afternoon. 
                    Restorative custodial turnaround completed every Friday evening with EPA-certified disinfectants.
                  </p>
                </div>

                <div className="p-4 bg-blue-50 rounded-sm border border-blue-200">
                  <h4 className="font-serif text-sm font-bold text-blue-950">100% Background-Checked Staff</h4>
                  <p className="text-xs text-blue-900 mt-1">
                    All directors and counselors pass FBI LiveScan criminal checks, Megan's Law screening, 
                    and mandatory CPR/AED certification prior to campus placement.
                  </p>
                </div>

                <div className="p-4 bg-amber-50 rounded-sm border border-amber-200">
                  <h4 className="font-serif text-sm font-bold text-amber-950">Two-Factor Camper Dismissal</h4>
                  <p className="text-xs text-amber-900 mt-1">
                    Campers are released exclusively upon scanning the authorized parent pass and verifying the 
                    4-digit security PIN against guardian government identification.
                  </p>
                </div>
              </div>

              <div className="bg-[#FAF8F5] p-6 rounded-sm border border-[#E7E2DA] space-y-3">
                <h4 className="font-serif text-lg font-bold text-slate-900">Operational Safety Metrics</h4>
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="p-3 bg-white border border-stone-200 rounded-sm">
                    <div className="font-serif text-2xl font-bold text-emerald-700">1 : 8</div>
                    <div className="text-[11px] text-slate-600 font-medium">Supervision Ratio</div>
                  </div>
                  <div className="p-3 bg-white border border-stone-200 rounded-sm">
                    <div className="font-serif text-2xl font-bold text-emerald-700">$5M</div>
                    <div className="text-[11px] text-slate-600 font-medium">COI Aggregate</div>
                  </div>
                  <div className="p-3 bg-white border border-stone-200 rounded-sm">
                    <div className="font-serif text-2xl font-bold text-emerald-700">48h</div>
                    <div className="text-[11px] text-slate-600 font-medium">Setup Time</div>
                  </div>
                  <div className="p-3 bg-white border border-stone-200 rounded-sm">
                    <div className="font-serif text-2xl font-bold text-emerald-700">0%</div>
                    <div className="text-[11px] text-slate-600 font-medium">Campus Wear-and-Tear</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 8: Unit Economics */}
          {currentSlide === 8 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border border-stone-200 bg-white">
                  <thead className="bg-stone-100 font-serif font-bold text-stone-800">
                    <tr>
                      <th className="p-2 border-b">Single Campus P&L (8-Week Season)</th>
                      <th className="p-2 border-b text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-slate-700">
                    <tr className="font-bold bg-emerald-50/50">
                      <td className="p-2">Gross Tuition Revenue (960 camper-wks @ $460)</td>
                      <td className="p-2 text-right text-emerald-800">$441,600</td>
                    </tr>
                    <tr>
                      <td className="p-2 pl-4">School District Facility Lease (15%)</td>
                      <td className="p-2 text-right">($66,240)</td>
                    </tr>
                    <tr>
                      <td className="p-2 pl-4">Camp Staff Payroll (1 Director + 15 Counselors)</td>
                      <td className="p-2 text-right">($118,200)</td>
                    </tr>
                    <tr>
                      <td className="p-2 pl-4">Curriculum Kits & Depreciation ($30/camper-wk)</td>
                      <td className="p-2 text-right">($28,800)</td>
                    </tr>
                    <tr>
                      <td className="p-2 pl-4">Insurance ($5M COI), Merchant Fees, Snacks</td>
                      <td className="p-2 text-right">($30,600)</td>
                    </tr>
                    <tr>
                      <td className="p-2 pl-4">Local Field Marketing & PTA Sponsorships</td>
                      <td className="p-2 text-right">($24,000)</td>
                    </tr>
                    <tr className="font-bold bg-emerald-100 text-emerald-950">
                      <td className="p-2">Campus EBITDA Contribution</td>
                      <td className="p-2 text-right text-emerald-900">$173,760 (39.3%)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-emerald-50 rounded-sm border border-emerald-200">
                  <div className="text-xs uppercase font-bold text-emerald-800">Break-Even Analysis</div>
                  <div className="font-serif text-3xl font-bold text-emerald-950 mt-1">
                    41 Campers / Week
                  </div>
                  <p className="text-xs text-emerald-900 mt-1">
                    Achieved at just <strong>34.2%</strong> of 120-camper capacity. 
                    Every additional registration above 41 campers yields a <strong>68% incremental EBITDA margin</strong>.
                  </p>
                </div>

                <div className="p-4 bg-blue-50 rounded-sm border border-blue-200">
                  <div className="text-xs uppercase font-bold text-blue-800">Negative Working Capital Advantage</div>
                  <p className="text-xs text-blue-900 mt-1">
                    Parents pay full tuition between February and May, generating 100% upfront cash float 
                    to cover summer payroll and kit procurement without requiring revolving credit debt.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 9: Competitive Landscape */}
          {currentSlide === 9 && (
            <div className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border border-stone-200 bg-white">
                  <thead className="bg-stone-100 font-serif font-bold text-stone-800">
                    <tr>
                      <th className="p-2.5 border-b">Feature</th>
                      <th className="p-2.5 border-b">Camp Galileo</th>
                      <th className="p-2.5 border-b">Steve & Kate's</th>
                      <th className="p-2.5 border-b">KidzToPros</th>
                      <th className="p-2.5 border-b bg-emerald-100 text-emerald-950 font-bold">CampNexus (Us)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-slate-700">
                    <tr>
                      <td className="p-2.5 font-semibold">Curriculum</td>
                      <td className="p-2.5">Maker / Design</td>
                      <td className="p-2.5">Unstructured Choice</td>
                      <td className="p-2.5">Fragmented STEM/Sports</td>
                      <td className="p-2.5 bg-emerald-50 font-bold text-emerald-900">Sports, Theater & STEM</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-semibold">Weekly Rate</td>
                      <td className="p-2.5">$550–$650</td>
                      <td className="p-2.5">$575–$625</td>
                      <td className="p-2.5">$450–$525</td>
                      <td className="p-2.5 bg-emerald-50 font-bold text-emerald-900">$425–$495 (Value Leader)</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-semibold">Real Estate</td>
                      <td className="p-2.5">Leased private sites</td>
                      <td className="p-2.5">Rented schools</td>
                      <td className="p-2.5">After-school provider</td>
                      <td className="p-2.5 bg-emerald-50 font-bold text-emerald-900">Master District Leaseback</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-semibold">Sibling Friction</td>
                      <td className="p-2.5">High (single track)</td>
                      <td className="p-2.5">Medium</td>
                      <td className="p-2.5">High (multi-campus)</td>
                      <td className="p-2.5 bg-emerald-50 font-bold text-emerald-900">Zero (All 3 in 1 Site)</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-semibold">Staff Ratio</td>
                      <td className="p-2.5">1:10</td>
                      <td className="p-2.5">1:12</td>
                      <td className="p-2.5">1:12</td>
                      <td className="p-2.5 bg-emerald-50 font-bold text-emerald-900">1:8 Guaranteed Safety</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-semibold">School Revenue</td>
                      <td className="p-2.5">Nominal flat fee</td>
                      <td className="p-2.5">Standard facility fee</td>
                      <td className="p-2.5">After-school split</td>
                      <td className="p-2.5 bg-emerald-50 font-bold text-emerald-900">15% Gross Auxiliary Share</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-sm">
                  <strong>Moat 1: Zero Fixed Real Estate Drag:</strong> Competitors with permanent physical leases bleed cash during the school year. CampNexus incurs $0 facility costs from September through May.
                </div>
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-sm">
                  <strong>Moat 2: School District Exclusivity:</strong> Once a district signs a multi-year master lease and receives $50k+ in auxiliary revenue, administrative switching barriers prevent competition.
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 10: Go-To-Market & Growth Flywheel */}
          {currentSlide === 10 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="p-4 bg-stone-50 border-l-4 border-slate-900 rounded-sm">
                  <h4 className="font-serif text-sm font-bold text-slate-900">B2B School Acquisition (Oct–Feb)</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Direct outreach to public school superintendents, facility directors, and school boards. 
                    Offering guaranteed auxiliary revenue, $5M indemnification, and free district student scholarships.
                  </p>
                </div>

                <div className="p-4 bg-emerald-50 border-l-4 border-emerald-600 rounded-sm">
                  <h4 className="font-serif text-sm font-bold text-emerald-950">B2C Parent Generation (Feb–May)</h4>
                  <p className="text-xs text-emerald-900 mt-1">
                    Official district digital distribution via Peachjar to enrolled student families, 
                    direct PTA sponsorships with 5% fundraising rebates, and automatic 15% sibling discounts.
                  </p>
                </div>

                <div className="p-4 bg-amber-50 border-l-4 border-amber-600 rounded-sm">
                  <h4 className="font-serif text-sm font-bold text-amber-950">CAC Compression Trajectory</h4>
                  <p className="text-xs text-amber-900 mt-1">
                    Year 1 CAC: <strong>$85/camper</strong> &rarr; Year 2 CAC: <strong>$42/camper</strong> &rarr; Year 3 CAC: <strong>$22/camper</strong> as organic neighborhood word-of-mouth takes over.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-emerald-50 rounded-sm border-2 border-emerald-300 text-center space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">The CampNexus Growth Loop</span>
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 bg-white border border-emerald-200 rounded-sm font-bold text-slate-900">
                    1. District Multi-Year Master Lease Signed
                  </div>
                  <div className="text-stone-400 font-bold">&darr;</div>
                  <div className="p-2.5 bg-white border border-emerald-200 rounded-sm font-bold text-slate-900">
                    2. Official Flyer Distributed to 2,000+ Enrolled District Families
                  </div>
                  <div className="text-stone-400 font-bold">&darr;</div>
                  <div className="p-2.5 bg-white border border-emerald-200 rounded-sm font-bold text-slate-900">
                    3. High Camper Density &amp; 15% Sibling Referral Multipliers
                  </div>
                  <div className="text-stone-400 font-bold">&darr;</div>
                  <div className="p-2.5 bg-white border border-emerald-200 rounded-sm font-bold text-slate-900">
                    4. $50k+ Royalties Paid &rarr; 92% Annual District Contract Renewal
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 11: 3-Year Financial Model */}
          {currentSlide === 11 && (
            <div className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border border-stone-200 bg-white">
                  <thead className="bg-stone-100 font-serif font-bold text-stone-800">
                    <tr>
                      <th className="p-2.5 border-b">Consolidated Financial Metric</th>
                      <th className="p-2.5 border-b text-right">Year 1 (4 Campuses)</th>
                      <th className="p-2.5 border-b text-right">Year 2 (16 Campuses)</th>
                      <th className="p-2.5 border-b text-right font-bold text-emerald-900">Year 3 (45 Campuses)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-slate-700">
                    <tr>
                      <td className="p-2 font-semibold">Total Camper-Weeks</td>
                      <td className="p-2 text-right">3,840</td>
                      <td className="p-2 text-right">15,360</td>
                      <td className="p-2 text-right font-bold text-emerald-800">43,200</td>
                    </tr>
                    <tr className="bg-stone-50 font-bold">
                      <td className="p-2">Gross Tuition Revenue ($460 avg)</td>
                      <td className="p-2 text-right">$1,766,400</td>
                      <td className="p-2 text-right">$7,065,600</td>
                      <td className="p-2 text-right text-emerald-900 font-bold">$19,872,000</td>
                    </tr>
                    <tr>
                      <td className="p-2 pl-4">School District Facility Royalties (15%)</td>
                      <td className="p-2 text-right">($264,960)</td>
                      <td className="p-2 text-right">($1,059,840)</td>
                      <td className="p-2 text-right">($2,980,800)</td>
                    </tr>
                    <tr>
                      <td className="p-2 pl-4">Campus Staff Payroll & Extended Care</td>
                      <td className="p-2 text-right">($472,800)</td>
                      <td className="p-2 text-right">($1,891,200)</td>
                      <td className="p-2 text-right">($5,319,000)</td>
                    </tr>
                    <tr>
                      <td className="p-2 pl-4">Curriculum Kits & Depreciation</td>
                      <td className="p-2 text-right">($115,200)</td>
                      <td className="p-2 text-right">($460,800)</td>
                      <td className="p-2 text-right">($1,296,000)</td>
                    </tr>
                    <tr>
                      <td className="p-2 pl-4">Insurance, Processing & Local Marketing</td>
                      <td className="p-2 text-right">($218,400)</td>
                      <td className="p-2 text-right">($873,600)</td>
                      <td className="p-2 text-right">($2,457,000)</td>
                    </tr>
                    <tr className="bg-emerald-100 font-bold text-emerald-950">
                      <td className="p-2">Campus Contribution Margin (EBITDA)</td>
                      <td className="p-2 text-right">$695,040 (39.3%)</td>
                      <td className="p-2 text-right">$2,780,160 (39.4%)</td>
                      <td className="p-2 text-right">$7,819,200 (39.4%)</td>
                    </tr>
                    <tr>
                      <td className="p-2 pl-4">Central HQ Overhead (Logistics, Eng, Legal)</td>
                      <td className="p-2 text-right">($320,000)</td>
                      <td className="p-2 text-right">($750,000)</td>
                      <td className="p-2 text-right">($1,800,000)</td>
                    </tr>
                    <tr className="bg-slate-900 font-bold text-white">
                      <td className="p-2">Consolidated Net Operating Income</td>
                      <td className="p-2 text-right">$375,040 (21.2%)</td>
                      <td className="p-2 text-right">$2,030,160 (28.7%)</td>
                      <td className="p-2 text-right text-emerald-400">$6,019,200 (30.3%)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-3 bg-stone-50 border border-stone-200 rounded-sm text-xs text-slate-700 flex justify-between items-center">
                <span><strong>Target Expansion Markets:</strong> San Francisco Bay Area, Seattle Metro, Austin/Dallas, and Southern California.</span>
                <span className="font-bold text-emerald-800">Seed Requirement: $1.2M</span>
              </div>
            </div>
          )}

          {/* SLIDE 12: Team Workstreams & Roadmap */}
          {currentSlide === 12 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="p-4 bg-white border border-stone-200 rounded-sm">
                  <div className="flex items-center space-x-2 text-xs font-bold text-emerald-800 uppercase">
                    <Briefcase className="h-4 w-4" />
                    <span>Workstream 1: Platform & Technology Engineering</span>
                  </div>
                  <ul className="text-xs text-slate-700 mt-2 space-y-1 list-disc pl-4">
                    <li>Mobile boarding pass QR scanner for campus directors</li>
                    <li>Automated SMS parent pickup notification gateway</li>
                    <li>Stripe multi-account escrow splits for school district payouts</li>
                  </ul>
                </div>

                <div className="p-4 bg-white border border-stone-200 rounded-sm">
                  <div className="flex items-center space-x-2 text-xs font-bold text-blue-800 uppercase">
                    <Building2 className="h-4 w-4" />
                    <span>Workstream 2: District Partnerships & Real Estate</span>
                  </div>
                  <ul className="text-xs text-slate-700 mt-2 space-y-1 list-disc pl-4">
                    <li>Pipeline outreach to 40 target public school superintendents</li>
                    <li>Standardized master lease contracts & $5M COI distributions</li>
                    <li>Custodial scope-of-work agreements with school plant managers</li>
                  </ul>
                </div>

                <div className="p-4 bg-white border border-stone-200 rounded-sm">
                  <div className="flex items-center space-x-2 text-xs font-bold text-amber-800 uppercase">
                    <Users className="h-4 w-4" />
                    <span>Workstream 3: Operations & Staff Recruitment</span>
                  </div>
                  <ul className="text-xs text-slate-700 mt-2 space-y-1 list-disc pl-4">
                    <li>Collegiate coaching & educator recruitment (60 staff members)</li>
                    <li>FBI LiveScan criminal background check verification flow</li>
                    <li>Camp-in-a-Box serialized crate assembly & kit logistics</li>
                  </ul>
                </div>
              </div>

              <div className="bg-emerald-50 p-6 rounded-sm border-2 border-emerald-300 space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-900 block">
                  Teammate Onboarding & Essential Links
                </span>
                
                <div className="space-y-2.5 text-xs">
                  <a
                    href="https://ricoz-innovation.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-2.5 bg-white border border-emerald-200 rounded-sm font-semibold text-slate-900 hover:border-emerald-500 transition-colors"
                  >
                    <span>1. Live Deployed Web Application</span>
                    <ExternalLink className="h-4 w-4 text-emerald-700" />
                  </a>

                  <a
                    href="https://github.com/Siddarth021/ricoz-innovation.git"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-2.5 bg-white border border-emerald-200 rounded-sm font-semibold text-slate-900 hover:border-emerald-500 transition-colors"
                  >
                    <span>2. GitHub Source Code Repository</span>
                    <ExternalLink className="h-4 w-4 text-emerald-700" />
                  </a>

                  <a
                    href="/CampNexus_12_Page_Business_Deck.pdf"
                    download
                    className="flex items-center justify-between p-2.5 bg-white border border-emerald-200 rounded-sm font-semibold text-slate-900 hover:border-emerald-500 transition-colors"
                  >
                    <span>3. Download 12-Page Pitch Deck (PDF)</span>
                    <Download className="h-4 w-4 text-emerald-700" />
                  </a>

                  <a
                    href="/CampNexus_PRD_Technical_Report.pdf"
                    download
                    className="flex items-center justify-between p-2.5 bg-white border border-emerald-200 rounded-sm font-semibold text-slate-900 hover:border-emerald-500 transition-colors"
                  >
                    <span>4. Download 8-Page PRD Report (PDF)</span>
                    <Download className="h-4 w-4 text-emerald-700" />
                  </a>
                </div>

                <div className="pt-2 text-[11px] text-emerald-950 font-medium">
                  <strong>Immediate Action:</strong> Clone the repository, review the 12-page deck and PRD, and claim assigned issues in Workstreams 1–3.
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Slide Footer */}
        <div className="border-t border-[#F0EBE3] pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#78716C]">
          <div>
            CampNexus &bull; Topic 86: Pop-Up Summer Camp Operator &bull; Confidential Business Deck
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 1}
              className="text-xs font-semibold hover:text-[#1C1917] disabled:opacity-30"
            >
              &larr; Previous Slide
            </button>
            <span className="text-stone-300">|</span>
            <button
              onClick={nextSlide}
              disabled={currentSlide === 12}
              className="text-xs font-semibold hover:text-[#1C1917] disabled:opacity-30"
            >
              Next Slide &rarr;
            </button>
          </div>
        </div>

      </div>

      {/* Teammate Sharing & Deployment Links Summary Card */}
      <div className="bg-white border border-[#E7E2DA] p-6 rounded-sm shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-serif text-lg font-bold text-slate-900">
              Teammate Onboarding & Project Links
            </h3>
            <p className="text-xs text-slate-600 mt-0.5">
              Copy these links to share with incoming teammates assigned to Topic 86.
            </p>
          </div>
          <span className="px-2.5 py-1 rounded bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
            All Deliverables Ready
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          <div className="p-3 bg-[#FAF8F5] border border-stone-200 rounded-sm">
            <div className="text-[10px] font-bold uppercase text-stone-500">Live Application</div>
            <a 
              href="https://ricoz-innovation.vercel.app" 
              target="_blank" 
              rel="noreferrer"
              className="font-semibold text-emerald-700 hover:underline block truncate mt-1"
            >
              ricoz-innovation.vercel.app
            </a>
          </div>

          <div className="p-3 bg-[#FAF8F5] border border-stone-200 rounded-sm">
            <div className="text-[10px] font-bold uppercase text-stone-500">GitHub Repository</div>
            <a 
              href="https://github.com/Siddarth021/ricoz-innovation.git" 
              target="_blank" 
              rel="noreferrer"
              className="font-semibold text-emerald-700 hover:underline block truncate mt-1"
            >
              github.com/Siddarth021/ricoz-innovation
            </a>
          </div>

          <div className="p-3 bg-[#FAF8F5] border border-stone-200 rounded-sm">
            <div className="text-[10px] font-bold uppercase text-stone-500">12-Page Business Deck</div>
            <a 
              href="/CampNexus_12_Page_Business_Deck.pdf" 
              download
              className="font-semibold text-emerald-700 hover:underline block truncate mt-1"
            >
              CampNexus_12_Page_Business_Deck.pdf
            </a>
          </div>

          <div className="p-3 bg-[#FAF8F5] border border-stone-200 rounded-sm">
            <div className="text-[10px] font-bold uppercase text-stone-500">8-Page Technical Report</div>
            <a 
              href="/CampNexus_PRD_Technical_Report.pdf" 
              download
              className="font-semibold text-emerald-700 hover:underline block truncate mt-1"
            >
              CampNexus_PRD_Technical_Report.pdf
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

