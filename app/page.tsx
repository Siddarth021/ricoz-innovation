'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { ParentPortal } from '@/components/ParentPortal';
import { SchoolPartnerPortal } from '@/components/SchoolPartnerPortal';
import { OperationsDashboard } from '@/components/OperationsDashboard';
import { CurriculumHub } from '@/components/CurriculumHub';
import { EconomicsSimulator } from '@/components/EconomicsSimulator';
import { PRDViewer } from '@/components/PRDViewer';
import { 
  Building2, 
  Users, 
  Trophy, 
  Sparkles, 
  Bot, 
  ShieldCheck, 
  CheckCircle2,
  Lock,
  HeartHandshake
} from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'parent' | 'school' | 'director' | 'curriculum' | 'economics' | 'prd'>('parent');

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-emerald-500 selection:text-white">
      {/* Top Global Navigation Bar */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Quick Context Sub-Header */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 text-xs bg-white p-3 rounded-xl border border-slate-200/80 shadow-sm">
          <div className="flex items-center space-x-2 text-slate-600">
            <span className="font-bold text-slate-900">Campus Arbitrage Model:</span>
            <span>Transforming dark summer school facilities into multi-sport, theater, and robotics day camps</span>
          </div>

          <div className="flex items-center space-x-3 text-slate-500 text-[11px]">
            <span className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1.5 animate-pulse" />
              Active Season Hubs: <strong>Palo Alto, Bellevue, Austin, San Mateo</strong>
            </span>
          </div>
        </div>

        {/* Tab Routing */}
        {activeTab === 'parent' && <ParentPortal />}
        {activeTab === 'school' && <SchoolPartnerPortal />}
        {activeTab === 'director' && <OperationsDashboard />}
        {activeTab === 'curriculum' && <CurriculumHub />}
        {activeTab === 'economics' && <EconomicsSimulator />}
        {activeTab === 'prd' && <PRDViewer />}

      </main>

      {/* Global Product Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-xs text-slate-400">
            <div>
              <div className="flex items-center space-x-2 text-white font-bold text-sm mb-2">
                <span>CampNexus</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/30">
                  Campus Operator OS
                </span>
              </div>
              <p className="leading-relaxed">
                Turnkey operational platform transforming dark summer school campuses into 
                thriving multi-sport, musical theater, and robotics day camps.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold uppercase tracking-wider text-[11px] mb-3">Enrichment Tracks</h4>
              <ul className="space-y-1.5">
                <li className="flex items-center space-x-1.5">
                  <Trophy className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Multi-Sport Athletic Academy (Ages 6–14)</span>
                </li>
                <li className="flex items-center space-x-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                  <span>Creative Arts & Theater Workshop (Ages 6–15)</span>
                </li>
                <li className="flex items-center space-x-1.5">
                  <Bot className="h-3.5 w-3.5 text-blue-400" />
                  <span>Robotics & Applied STEM Labs (Ages 7–15)</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold uppercase tracking-wider text-[11px] mb-3">District Partnerships</h4>
              <ul className="space-y-1.5 text-slate-300">
                <li className="flex items-center space-x-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>$35,000–$75,000 Summer Auxiliary Revenue</span>
                </li>
                <li className="flex items-center space-x-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Dedicated Daily Evening Custodial Staffing</span>
                </li>
                <li className="flex items-center space-x-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Title 1 Student Community Equity Seats</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold uppercase tracking-wider text-[11px] mb-3">Trust & Safety</h4>
              <ul className="space-y-1.5 text-slate-300">
                <li className="flex items-center space-x-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                  <span>$5,000,000 Aggregate Liability COI</span>
                </li>
                <li className="flex items-center space-x-1.5">
                  <Lock className="h-3.5 w-3.5 text-emerald-400" />
                  <span>4-Digit Guardian PIN Child Dismissal</span>
                </li>
                <li className="flex items-center space-x-1.5">
                  <HeartHandshake className="h-3.5 w-3.5 text-emerald-400" />
                  <span>1:8 Staff Supervision Ratios (ACA Standards)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <span>&copy; 2026 CampNexus Platform. All rights reserved.</span>
            <div className="flex space-x-4">
              <span>Parent Portal</span>
              <span>&bull;</span>
              <span>School Partnerships</span>
              <span>&bull;</span>
              <span>Director Command Center</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
