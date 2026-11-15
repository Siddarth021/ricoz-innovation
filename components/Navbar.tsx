'use client';

import React from 'react';
import { 
  Building2, 
  Users, 
  ShieldCheck, 
  BookOpen, 
  TrendingUp, 
  FileText, 
  Download, 
  Sparkles,
  Layers
} from 'lucide-react';

interface NavbarProps {
  activeTab: 'parent' | 'school' | 'director' | 'curriculum' | 'economics' | 'prd';
  setActiveTab: (tab: 'parent' | 'school' | 'director' | 'curriculum' | 'economics' | 'prd') => void;
  onOpenLatex: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenLatex }) => {
  const tabs = [
    { id: 'parent', label: 'Parent Discovery & Booking', icon: Users, badge: 'Ages 6-15' },
    { id: 'school', label: 'School Partner Portal', icon: Building2, badge: '$40k+ Rev' },
    { id: 'director', label: 'Daily Ops Command Center', icon: ShieldCheck, badge: 'Live Ratios' },
    { id: 'curriculum', label: 'Curricula & Logistics', icon: BookOpen, badge: '3 Tracks' },
    { id: 'economics', label: 'Unit Economics Model', icon: TrendingUp, badge: 'P&L Engine' },
    { id: 'prd', label: 'Executive PRD & Teardown', icon: FileText, badge: 'Technical' },
  ] as const;

  return (
    <header className="sticky top-0 z-50 bg-slate-900 border-b border-slate-800 text-white shadow-xl backdrop-blur-md bg-opacity-95">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Identity */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('parent')}>
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <Layers className="h-5 w-5 text-slate-950 font-bold" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-lg tracking-tight text-white">CampNexus</span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Ricoz Innovation
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                Pop-Up Summer Camp Operating System &bull; K-12 Campus Arbitrage
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <a 
              href="/CampNexus_PRD_Technical_Report.pdf" 
              download
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-md shadow-emerald-900/30"
              title="Download LaTeX-Compiled Formal Technical Report"
            >
              <Download className="h-3.5 w-3.5" />
              <span className="hidden md:inline">Download Report (PDF)</span>
              <span className="md:hidden">PDF</span>
            </a>

            <button
              onClick={onOpenLatex}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all"
              title="View & Copy Overleaf LaTeX Code"
            >
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              <span className="hidden sm:inline">Overleaf LaTeX</span>
              <span className="sm:hidden">LaTeX</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 overflow-x-auto py-2 no-scrollbar border-t border-slate-800/80">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-900/40 font-semibold'
                    : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span
                    className={`text-[9px] px-1.5 py-0.5 rounded font-semibold ${
                      isActive
                        ? 'bg-emerald-700/80 text-emerald-100'
                        : 'bg-slate-800 text-slate-400 border border-slate-700'
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
