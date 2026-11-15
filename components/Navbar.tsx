'use client';

import React from 'react';
import { 
  Building2, 
  Users, 
  ShieldCheck, 
  BookOpen, 
  TrendingUp, 
  FileText, 
  Layers,
  PhoneCall,
  Download,
  Calendar,
  Presentation
} from 'lucide-react';

interface NavbarProps {
  activeTab: 'home' | 'parent' | 'school' | 'director' | 'curriculum' | 'economics' | 'prd' | 'deck';
  setActiveTab: (tab: 'home' | 'parent' | 'school' | 'director' | 'curriculum' | 'economics' | 'prd' | 'deck') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 border-b border-[#E7E2DA] text-[#1C1917] shadow-sm backdrop-blur-md">
      {/* Top Utility Bar */}
      <div className="bg-[#064E3B] text-emerald-100 text-[11px] py-1.5 px-4 text-center tracking-widest uppercase font-semibold">
        <span>Summer 2026 Campus Registration Open &bull; 15% Sibling Discount Automatically Applied</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left: Brand Identity */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="h-10 w-10 rounded-sm bg-emerald-600 flex items-center justify-center text-white font-serif font-bold text-lg shadow-sm">
              C
            </div>
            <div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#1C1917] block leading-none">
                CAMPNEXUS
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-emerald-700 font-bold block mt-1">
                K-12 Campus Operator
              </span>
            </div>
          </div>

          {/* Center Navigation Links (Clean & Editorial) */}
          <nav className="hidden md:flex items-center space-x-5 text-xs uppercase tracking-widest font-medium text-[#57534E]">
            <button
              onClick={() => setActiveTab('home')}
              className={`transition-colors py-2 border-b-2 ${
                activeTab === 'home'
                  ? 'border-[#1C1917] text-[#1C1917] font-bold'
                  : 'border-transparent hover:text-[#1C1917]'
              }`}
            >
              Overview
            </button>

            <button
              onClick={() => setActiveTab('deck')}
              className={`transition-colors py-2 border-b-2 flex items-center space-x-1 ${
                activeTab === 'deck'
                  ? 'border-emerald-600 text-emerald-800 font-bold'
                  : 'border-transparent text-emerald-700 hover:text-emerald-900 font-semibold'
              }`}
            >
              <Presentation className="h-3.5 w-3.5" />
              <span>12-Page Deck</span>
            </button>

            <button
              onClick={() => setActiveTab('parent')}
              className={`transition-colors py-2 border-b-2 ${
                activeTab === 'parent'
                  ? 'border-[#1C1917] text-[#1C1917] font-bold'
                  : 'border-transparent hover:text-[#1C1917]'
              }`}
            >
              Camp Booking
            </button>

            <button
              onClick={() => setActiveTab('school')}
              className={`transition-colors py-2 border-b-2 ${
                activeTab === 'school'
                  ? 'border-[#1C1917] text-[#1C1917] font-bold'
                  : 'border-transparent hover:text-[#1C1917]'
              }`}
            >
              For Schools
            </button>

            <button
              onClick={() => setActiveTab('curriculum')}
              className={`transition-colors py-2 border-b-2 ${
                activeTab === 'curriculum'
                  ? 'border-[#1C1917] text-[#1C1917] font-bold'
                  : 'border-transparent hover:text-[#1C1917]'
              }`}
            >
              Curricula
            </button>

            <button
              onClick={() => setActiveTab('director')}
              className={`transition-colors py-2 border-b-2 ${
                activeTab === 'director'
                  ? 'border-[#1C1917] text-[#1C1917] font-bold'
                  : 'border-transparent hover:text-[#1C1917]'
              }`}
            >
              Live Ops
            </button>

            <button
              onClick={() => setActiveTab('prd')}
              className={`transition-colors py-2 border-b-2 ${
                activeTab === 'prd'
                  ? 'border-[#1C1917] text-[#1C1917] font-bold'
                  : 'border-transparent hover:text-[#1C1917]'
              }`}
            >
              Specifications
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-2.5">
            <a
              href="/CampNexus_12_Page_Business_Deck.pdf"
              download
              className="hidden lg:inline-flex items-center space-x-1.5 px-3 py-2 text-xs font-bold rounded-sm bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 transition-all shadow-2xs"
              title="Download 12-Page Business Pitch Deck (PDF)"
            >
              <Download className="h-3.5 w-3.5 text-emerald-700" />
              <span>12-Page Deck (PDF)</span>
            </a>

            <a
              href="/CampNexus_PRD_Technical_Report.pdf"
              download
              className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-2 text-xs font-semibold rounded-sm bg-white hover:bg-[#F4EFEA] text-[#1C1917] border border-[#E7E2DA] transition-all shadow-sm"
              title="Download Technical Report (PDF)"
            >
              <Download className="h-3.5 w-3.5 text-[#57534E]" />
              <span>Report (PDF)</span>
            </a>

            <button
              onClick={() => setActiveTab('parent')}
              className="px-4 py-2 text-xs uppercase tracking-widest font-semibold rounded-sm bg-[#1C1917] hover:bg-[#292524] text-white transition-all shadow-sm flex items-center space-x-1.5"
            >
              <Calendar className="h-3.5 w-3.5" />
              <span>Enroll Now</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Bar */}
        <div className="flex md:hidden space-x-2 overflow-x-auto py-2.5 no-scrollbar border-t border-[#E7E2DA]">
          {(['home', 'deck', 'parent', 'school', 'curriculum', 'director', 'prd'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 rounded-sm text-xs whitespace-nowrap uppercase tracking-wider font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-[#1C1917] text-white'
                  : 'bg-white text-[#57534E] border border-[#E7E2DA]'
              }`}
            >
              {tab === 'home' ? 'Overview' : tab === 'deck' ? '12-Page Deck' : tab === 'parent' ? 'Booking' : tab === 'school' ? 'Schools' : tab === 'director' ? 'Ops' : tab}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};
