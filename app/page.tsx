'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { EditorialHome } from '@/components/EditorialHome';
import { ParentPortal } from '@/components/ParentPortal';
import { SchoolPartnerPortal } from '@/components/SchoolPartnerPortal';
import { OperationsDashboard } from '@/components/OperationsDashboard';
import { CurriculumHub } from '@/components/CurriculumHub';
import { EconomicsSimulator } from '@/components/EconomicsSimulator';
import { PRDViewer } from '@/components/PRDViewer';
import { 
  Trophy, 
  Sparkles, 
  Bot, 
  ShieldCheck, 
  CheckCircle2,
  Lock,
  HeartHandshake
} from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'home' | 'parent' | 'school' | 'director' | 'curriculum' | 'economics' | 'prd'>('home');
  const [preSelectedTrack, setPreSelectedTrack] = useState<'multi-sport' | 'theater' | 'robotics'>('robotics');

  const handleSelectTrack = (trackId: 'multi-sport' | 'theater' | 'robotics') => {
    setPreSelectedTrack(trackId);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1C1917] selection:bg-[#1C1917] selection:text-white">
      {/* Top Editorial Navbar */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        
        {/* Tab Routing */}
        {activeTab === 'home' && (
          <EditorialHome 
            onNavigate={(tab) => setActiveTab(tab)} 
            onSelectTrack={handleSelectTrack} 
          />
        )}
        
        {activeTab === 'parent' && <ParentPortal />}
        {activeTab === 'school' && <SchoolPartnerPortal />}
        {activeTab === 'director' && <OperationsDashboard />}
        {activeTab === 'curriculum' && <CurriculumHub />}
        {activeTab === 'economics' && <EconomicsSimulator />}
        {activeTab === 'prd' && <PRDViewer />}

      </main>

      {/* Editorial Footer */}
      <footer className="bg-[#1C1917] text-[#FAF8F5] mt-20 border-t border-[#292524]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 text-xs text-[#A8A29E]">
            <div className="space-y-3">
              <span className="font-serif text-xl font-bold tracking-tight text-white block">
                CAMPNEXUS
              </span>
              <p className="leading-relaxed font-sans text-xs text-[#D6CEBE]">
                Turnkey operational platform transforming underutilized school campuses into 
                thriving multi-sport, musical theater, and robotics day camps.
              </p>
            </div>

            <div>
              <h4 className="text-white font-serif uppercase tracking-widest text-[11px] mb-3">Enrichment Tracks</h4>
              <ul className="space-y-2 text-[#D6CEBE]">
                <li className="flex items-center space-x-1.5">
                  <Trophy className="h-3.5 w-3.5 text-[#2D5A27]" />
                  <span>Multi-Sport Athletic Academy (Ages 6–14)</span>
                </li>
                <li className="flex items-center space-x-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-[#9A7B4F]" />
                  <span>Creative Arts & Theater Workshop (Ages 6–15)</span>
                </li>
                <li className="flex items-center space-x-1.5">
                  <Bot className="h-3.5 w-3.5 text-white" />
                  <span>Robotics & Applied STEM Labs (Ages 7–15)</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-serif uppercase tracking-widest text-[11px] mb-3">District Benefits</h4>
              <ul className="space-y-2 text-[#D6CEBE]">
                <li className="flex items-center space-x-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#2D5A27]" />
                  <span>$35,000–$75,000 Summer Auxiliary Revenue</span>
                </li>
                <li className="flex items-center space-x-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#2D5A27]" />
                  <span>Dedicated Evening Custodial Staffing</span>
                </li>
                <li className="flex items-center space-x-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#2D5A27]" />
                  <span>Title 1 Community Student Scholarships</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-serif uppercase tracking-widest text-[11px] mb-3">Safety & Governance</h4>
              <ul className="space-y-2 text-[#D6CEBE]">
                <li className="flex items-center space-x-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#2D5A27]" />
                  <span>$5,000,000 Aggregate Liability COI</span>
                </li>
                <li className="flex items-center space-x-1.5">
                  <Lock className="h-3.5 w-3.5 text-[#2D5A27]" />
                  <span>4-Digit Guardian PIN Dismissal</span>
                </li>
                <li className="flex items-center space-x-1.5">
                  <HeartHandshake className="h-3.5 w-3.5 text-[#2D5A27]" />
                  <span>1:8 Staff Supervision Ratios (ACA)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-[#292524] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#78716C]">
            <span>&copy; 2026 CampNexus Platform. All rights reserved.</span>
            <div className="flex space-x-6 text-[#A8A29E]">
              <button onClick={() => setActiveTab('parent')} className="hover:text-white transition-colors">Parent Booking</button>
              <button onClick={() => setActiveTab('school')} className="hover:text-white transition-colors">School Partnerships</button>
              <button onClick={() => setActiveTab('director')} className="hover:text-white transition-colors">Director Dashboard</button>
              <button onClick={() => setActiveTab('prd')} className="hover:text-white transition-colors">Technical PRD</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
