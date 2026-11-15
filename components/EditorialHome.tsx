'use client';

import React, { useState } from 'react';
import { 
  Trophy, 
  Sparkles, 
  Bot, 
  MapPin, 
  Calendar, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Users,
  Download,
  Lock,
  Phone
} from 'lucide-react';
import { CAMP_TRACKS, CAMPUS_LOCATIONS } from '@/data/mockData';

interface EditorialHomeProps {
  onNavigate: (tab: 'parent' | 'school' | 'director' | 'curriculum' | 'economics' | 'prd') => void;
  onSelectTrack: (trackId: 'multi-sport' | 'theater' | 'robotics') => void;
}

export const EditorialHome: React.FC<EditorialHomeProps> = ({ onNavigate, onSelectTrack }) => {
  // Quick estimator state (Ultra naive-friendly)
  const [estTrack, setEstTrack] = useState<'multi-sport' | 'theater' | 'robotics'>('robotics');
  const [estWeeks, setEstWeeks] = useState<number>(2);
  const [estCampers, setEstCampers] = useState<number>(1);

  const trackRates = {
    'multi-sport': 425,
    'theater': 460,
    'robotics': 495,
  };

  const basePrice = trackRates[estTrack] * estWeeks;
  const totalPrice = estCampers === 2 ? Math.round(basePrice + basePrice * 0.85) : basePrice;

  return (
    <div className="space-y-16 pb-20 max-w-6xl mx-auto">
      
      {/* 1. Editorial Header (Matching Reference Image) */}
      <section className="text-center pt-8 pb-4 space-y-4">
        <span className="text-[11px] tracking-[0.3em] uppercase text-[#78716C] font-semibold block">
          Services & Summer Offerings
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#1C1917] tracking-tight max-w-3xl mx-auto uppercase leading-tight font-normal">
          Three Exceptional Programs That Nurture Confidence, Talent & Curiosity
        </h1>
        <p className="text-sm text-[#78716C] max-w-xl mx-auto font-sans leading-relaxed">
          Operating high-standard day camps inside vetted K-12 school campuses. 
          Small group ratios (1:8), air-conditioned facilities, and full-day schedules.
        </p>
      </section>

      {/* 2. Hero Architectural Feature Card (Inspired by Reference Image Hero Image) */}
      <section className="relative rounded-sm overflow-hidden border border-[#E7E2DA] shadow-sm bg-[#1C1917] text-white">
        <div className="relative h-72 sm:h-96 w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1600&q=80"
            alt="Oakridge Preparatory Campus"
            className="w-full h-full object-cover filter grayscale contrast-125 opacity-40 hover:opacity-50 transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-transparent to-transparent" />
          
          <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12 text-center max-w-2xl mx-auto">
            <span className="font-serif italic text-sm text-[#E7E2DA] tracking-wide mb-1">
              What Is Our Purpose?
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-white uppercase tracking-wider font-normal">
              Serving Families & Schools with Real Care.
            </h2>
            <p className="text-xs text-[#D6CEBE] mt-2 leading-relaxed">
              We eliminate real-estate waste by transforming dark summer school campuses into 
              enrichment hubs, returning tens of thousands of dollars directly into school funds.
            </p>
            <div className="mt-6 flex justify-center space-x-3">
              <button
                onClick={() => onNavigate('parent')}
                className="px-5 py-2.5 bg-white text-[#1C1917] text-xs uppercase tracking-widest font-semibold hover:bg-[#FAF8F5] transition-colors shadow-sm"
              >
                Find Camps Near You
              </button>
              <button
                onClick={() => onNavigate('school')}
                className="px-5 py-2.5 bg-transparent border border-white text-white text-xs uppercase tracking-widest font-semibold hover:bg-white/10 transition-colors"
              >
                For School Partners
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 3 Parallel Offerings (Directly matching the 3-column layout in the image: BRANDING / COACHING / WEBDESIGN) */}
      <section className="space-y-6">
        <div className="text-center">
          <span className="text-[11px] tracking-[0.25em] uppercase text-[#78716C] font-semibold">
            Choose by Interest or Mix by Week
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#1C1917] mt-1 font-normal uppercase">
            Curated Camp Disciplines
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Multi-Sport */}
          <div className="bg-white border border-[#E7E2DA] p-6 sm:p-8 flex flex-col justify-between text-center hover:border-[#1C1917] transition-all duration-300 shadow-sm">
            <div>
              <div className="w-10 h-10 mx-auto rounded-full bg-[#FAF8F5] border border-[#E7E2DA] flex items-center justify-center mb-3">
                <Trophy className="h-5 w-5 text-[#2D5A27]" />
              </div>
              <h3 className="font-serif text-xl font-bold uppercase tracking-wider text-[#1C1917]">
                MULTI-SPORT
              </h3>
              <div className="text-xs uppercase tracking-widest text-[#78716C] mt-1 font-semibold">
                From $425 / Week
              </div>
              <p className="text-xs text-[#57534E] mt-4 leading-relaxed font-sans">
                Soccer fundamentals, 3v3 basketball spacing, agility obstacle courses, and Friday Olympic Games on regulation school turf fields.
              </p>
              <div className="mt-4 pt-4 border-t border-[#F0EBE1] text-[11px] text-[#78716C] space-y-1">
                <div>Ages 6–14 &bull; 1:8 Ratio</div>
                <div>Collegiate & Certified Coaches</div>
              </div>
            </div>

            <button
              onClick={() => {
                onSelectTrack('multi-sport');
                onNavigate('parent');
              }}
              className="mt-6 w-full py-2.5 text-xs uppercase tracking-widest font-semibold border border-[#1C1917] bg-white text-[#1C1917] hover:bg-[#1C1917] hover:text-white transition-all shadow-sm"
            >
              Explore Athletics
            </button>
          </div>

          {/* Card 2: Musical Theater */}
          <div className="bg-white border border-[#E7E2DA] p-6 sm:p-8 flex flex-col justify-between text-center hover:border-[#1C1917] transition-all duration-300 shadow-sm">
            <div>
              <div className="w-10 h-10 mx-auto rounded-full bg-[#FAF8F5] border border-[#E7E2DA] flex items-center justify-center mb-3">
                <Sparkles className="h-5 w-5 text-[#9A7B4F]" />
              </div>
              <h3 className="font-serif text-xl font-bold uppercase tracking-wider text-[#1C1917]">
                THEATER
              </h3>
              <div className="text-xs uppercase tracking-widest text-[#78716C] mt-1 font-semibold">
                From $460 / Week
              </div>
              <p className="text-xs text-[#57534E] mt-4 leading-relaxed font-sans">
                Voice projection, character motivation, improv comedy, and choreography rehearsed for a Friday family musical showcase gala in the school auditorium.
              </p>
              <div className="mt-4 pt-4 border-t border-[#F0EBE1] text-[11px] text-[#78716C] space-y-1">
                <div>Ages 6–15 &bull; 1:8 Ratio</div>
                <div>Equity & Theater Arts Mentors</div>
              </div>
            </div>

            <button
              onClick={() => {
                onSelectTrack('theater');
                onNavigate('parent');
              }}
              className="mt-6 w-full py-2.5 text-xs uppercase tracking-widest font-semibold border border-[#1C1917] bg-white text-[#1C1917] hover:bg-[#1C1917] hover:text-white transition-all shadow-sm"
            >
              Explore Theater
            </button>
          </div>

          {/* Card 3: Robotics */}
          <div className="bg-white border border-[#E7E2DA] p-6 sm:p-8 flex flex-col justify-between text-center hover:border-[#1C1917] transition-all duration-300 shadow-sm">
            <div>
              <div className="w-10 h-10 mx-auto rounded-full bg-[#FAF8F5] border border-[#E7E2DA] flex items-center justify-center mb-3">
                <Bot className="h-5 w-5 text-[#1C1917]" />
              </div>
              <h3 className="font-serif text-xl font-bold uppercase tracking-wider text-[#1C1917]">
                ROBOTICS
              </h3>
              <div className="text-xs uppercase tracking-widest text-[#78716C] mt-1 font-semibold">
                From $495 / Week
              </div>
              <p className="text-xs text-[#57534E] mt-4 leading-relaxed font-sans">
                1:1 LEGO Spike Prime sets, BBC Micro:bit telemetry, ultrasonic obstacle loops, and Python algorithms in air-conditioned campus computer labs.
              </p>
              <div className="mt-4 pt-4 border-t border-[#F0EBE1] text-[11px] text-[#78716C] space-y-1">
                <div>Ages 7–15 &bull; 1:7 Ratio</div>
                <div>Hardware Kits Provided 1:1</div>
              </div>
            </div>

            <button
              onClick={() => {
                onSelectTrack('robotics');
                onNavigate('parent');
              }}
              className="mt-6 w-full py-2.5 text-xs uppercase tracking-widest font-semibold border border-[#1C1917] bg-white text-[#1C1917] hover:bg-[#1C1917] hover:text-white transition-all shadow-sm"
            >
              Explore Robotics
            </button>
          </div>
        </div>
      </section>

      {/* 4. Naive-User Friendly 3-Step "How It Works" */}
      <section className="bg-white border border-[#E7E2DA] p-8 sm:p-10 rounded-sm shadow-sm space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-[10px] tracking-[0.25em] uppercase text-[#78716C] font-semibold">
            Simple 3-Step Process
          </span>
          <h2 className="font-serif text-2xl text-[#1C1917] uppercase tracking-wide mt-1">
            How CampNexus Works for Busy Parents
          </h2>
          <p className="text-xs text-[#78716C] mt-1.5">
            Designed to save you time and eliminate driving across town for different children.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="p-4 space-y-2">
            <span className="w-8 h-8 mx-auto rounded-full bg-[#1C1917] text-white flex items-center justify-center font-serif text-sm font-bold">1</span>
            <h4 className="font-serif text-base font-bold text-[#1C1917]">Select Local Campus</h4>
            <p className="text-xs text-[#57534E] leading-relaxed">
              Choose from our verified partner school campuses in Palo Alto, Bellevue, Austin, or San Mateo.
            </p>
          </div>

          <div className="p-4 space-y-2">
            <span className="w-8 h-8 mx-auto rounded-full bg-[#1C1917] text-white flex items-center justify-center font-serif text-sm font-bold">2</span>
            <h4 className="font-serif text-base font-bold text-[#1C1917]">Mix-and-Match Tracks</h4>
            <p className="text-xs text-[#57534E] leading-relaxed">
              Enroll for 1 to 8 weeks. Choose sports for Week 1, robotics for Week 2, or enroll siblings in different tracks.
            </p>
          </div>

          <div className="p-4 space-y-2">
            <span className="w-8 h-8 mx-auto rounded-full bg-[#1C1917] text-white flex items-center justify-center font-serif text-sm font-bold">3</span>
            <h4 className="font-serif text-base font-bold text-[#1C1917]">Safe PIN Dismissal</h4>
            <p className="text-xs text-[#57534E] leading-relaxed">
              Receive your Digital Boarding Pass with a 4-digit pickup code. No child is released without verified guardian authorization.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Naive-Friendly Quick Estimator Widget */}
      <section className="bg-[#F5F2EB] border border-[#E7E2DA] p-8 sm:p-10 rounded-sm shadow-sm">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="text-center">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#78716C] font-semibold">
              Instant Price Estimator
            </span>
            <h3 className="font-serif text-2xl text-[#1C1917] uppercase tracking-wide mt-1">
              Transparent Tuition & Sibling Savings
            </h3>
            <p className="text-xs text-[#57534E] mt-1">
              All materials, kits, equipment, and certified instruction included. No hidden registration fees.
            </p>
          </div>

          {/* Controls */}
          <div className="space-y-4 text-xs">
            {/* Track selector */}
            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-[#57534E] block mb-2">
                1. Select Program Track
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['multi-sport', 'theater', 'robotics'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setEstTrack(t)}
                    className={`py-2 px-3 text-xs uppercase tracking-wider font-semibold border transition-all ${
                      estTrack === t
                        ? 'border-[#1C1917] bg-[#1C1917] text-white shadow-sm'
                        : 'border-[#E7E2DA] bg-white text-[#57534E] hover:border-[#1C1917]'
                    }`}
                  >
                    {t.replace('-', ' ')}
                  </button>
                ))}
              </div>
            </div>

            {/* Weeks & Sibling */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#57534E] block mb-2">
                  2. Summer Duration
                </label>
                <div className="grid grid-cols-4 gap-1.5">
                  {[1, 2, 4, 8].map((w) => (
                    <button
                      key={w}
                      onClick={() => setEstWeeks(w)}
                      className={`py-2 text-xs font-semibold border transition-all ${
                        estWeeks === w
                          ? 'border-[#1C1917] bg-[#1C1917] text-white'
                          : 'border-[#E7E2DA] bg-white text-[#57534E]'
                      }`}
                    >
                      {w} Wk{w > 1 ? 's' : ''}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#57534E] block mb-2">
                  3. Enrolling Sibling?
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  <button
                    onClick={() => setEstCampers(1)}
                    className={`py-2 text-xs font-semibold border transition-all ${
                      estCampers === 1
                        ? 'border-[#1C1917] bg-[#1C1917] text-white'
                        : 'border-[#E7E2DA] bg-white text-[#57534E]'
                    }`}
                  >
                    1 Camper
                  </button>
                  <button
                    onClick={() => setEstCampers(2)}
                    className={`py-2 text-xs font-semibold border transition-all ${
                      estCampers === 2
                        ? 'border-[#1C1917] bg-[#1C1917] text-white'
                        : 'border-[#E7E2DA] bg-white text-[#57534E]'
                    }`}
                  >
                    2 Campers (-15%)
                  </button>
                </div>
              </div>
            </div>

            {/* Total Readout */}
            <div className="p-4 bg-white border border-[#E7E2DA] rounded-sm flex items-center justify-between mt-4">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#78716C] block">
                  Total Estimated Tuition:
                </span>
                <span className="text-xs text-[#2D5A27] font-semibold">
                  {estCampers === 2 ? '15% Sibling discount applied to 2nd child' : 'Full-Day 8:30 AM – 3:30 PM Included'}
                </span>
              </div>
              <div className="text-right">
                <span className="font-serif text-2xl font-bold text-[#1C1917]">
                  ${totalPrice.toLocaleString()}
                </span>
                <span className="text-[10px] text-[#A8A29E] block">
                  ${Math.round(totalPrice / estWeeks / estCampers)} / child / wk
                </span>
              </div>
            </div>

            <button
              onClick={() => onNavigate('parent')}
              className="w-full py-3 bg-[#1C1917] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#292524] transition-colors flex items-center justify-center space-x-2"
            >
              <span>Continue to Official Registration</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. Feature Banner for School District Partners (Inspired by "GET IN TOUCH" in reference image) */}
      <section className="relative rounded-sm overflow-hidden border border-[#E7E2DA] bg-[#1C1917] text-white p-8 sm:p-12 text-center">
        <div className="max-w-xl mx-auto space-y-3">
          <span className="font-serif italic text-sm text-[#D6CEBE]">
            School District & Principal Partnerships
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl uppercase tracking-wider font-normal">
            Host a Camp at Your Campus
          </h2>
          <p className="text-xs text-[#E7E2DA] leading-relaxed">
            Generate <strong>$35,000 to $75,000</strong> in auxiliary revenue during summer downtime. 
            We provide a <strong>$5,000,000 liability policy</strong>, daily evening custodial cleaning, 
            and free camp scholarships for district students.
          </p>
          <div className="pt-4 flex justify-center space-x-3">
            <button
              onClick={() => onNavigate('school')}
              className="px-6 py-2.5 bg-white text-[#1C1917] text-xs uppercase tracking-widest font-semibold hover:bg-[#FAF8F5] transition-colors shadow-sm"
            >
              Explore School Partnership
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
