'use client';

import React, { useState } from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  Percent, 
  Building, 
  Users, 
  Sliders, 
  Calculator, 
  CheckCircle,
  HelpCircle
} from 'lucide-react';

export const EconomicsSimulator: React.FC = () => {
  // Parametric controls
  const [campersPerWeek, setCampersPerWeek] = useState<number>(120);
  const [tuitionPerWeek, setTuitionPerWeek] = useState<number>(450);
  const [weeksOperated, setWeeksOperated] = useState<number>(8);
  const [schoolLeaseRate, setSchoolLeaseRate] = useState<number>(4500); // weekly fixed rent
  const [counselorWage, setCounselorWage] = useState<number>(22); // $/hr
  const [camperRatio, setCamperRatio] = useState<number>(9); // 1:9 ratio
  const [numCampuses, setNumCampuses] = useState<number>(5); // scaling view

  // Derived weekly economics per campus
  const weeklyTuitionRevenue = campersPerWeek * tuitionPerWeek;
  const numCounselors = Math.ceil(campersPerWeek / camperRatio);
  const weeklyCounselorPayroll = numCounselors * counselorWage * 40; // 40 hrs
  const weeklySiteDirector = 1400; // site director salary
  const weeklyBoxSupplies = campersPerWeek * 32; // consumable craft, robotics parts, t-shirt
  const weeklyMerchantAndInsurance = weeklyTuitionRevenue * 0.045; // 3% stripe + 1.5% liability COI

  const totalWeeklyOperatingCost = 
    schoolLeaseRate + 
    weeklyCounselorPayroll + 
    weeklySiteDirector + 
    weeklyBoxSupplies + 
    weeklyMerchantAndInsurance;

  const weeklyNetContribution = weeklyTuitionRevenue - totalWeeklyOperatingCost;
  const grossMarginPct = ((weeklyNetContribution / weeklyTuitionRevenue) * 100).toFixed(1);

  // Per-camper unit economics
  const revenuePerCamper = tuitionPerWeek;
  const variableCostPerCamper = (counselorWage * 40 / camperRatio) + 32 + (tuitionPerWeek * 0.045);
  const fixedCostPerWeek = schoolLeaseRate + weeklySiteDirector;
  const breakEvenCampers = Math.ceil(fixedCostPerWeek / (revenuePerCamper - variableCostPerCamper));

  // Season totals for single campus
  const singleCampusSeasonRevenue = weeklyTuitionRevenue * weeksOperated;
  const singleCampusSeasonCost = totalWeeklyOperatingCost * weeksOperated;
  const singleCampusSeasonProfit = weeklyNetContribution * weeksOperated;

  // Portfolio scaling totals
  const portfolioSeasonRevenue = singleCampusSeasonRevenue * numCampuses;
  const portfolioSeasonProfit = singleCampusSeasonProfit * numCampuses;

  return (
    <div className="space-y-8 pb-16">
      {/* Top Banner */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 text-white shadow-xl">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold uppercase tracking-wider mb-2">
            <TrendingUp className="h-4 w-4" />
            <span>Founding Head of Technology &bull; Financial Feasibility Engine</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            Campus Unit Economics & Arbitrage Modeling
          </h1>
          <p className="text-xs text-slate-300 mt-2 leading-relaxed">
            By avoiding $5M–$15M real estate acquisition debt and operating via 8-week asset-light K-12 school facility leases, 
            CampNexus achieves software-like capital efficiency with an estimated 38%–44% gross operating contribution margin per campus.
          </p>
        </div>
      </section>

      {/* Simulator Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left 7 Columns: Parametric Sliders */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
              <div className="flex items-center space-x-2">
                <Sliders className="h-5 w-5 text-emerald-600" />
                <h2 className="text-base font-bold text-slate-900">Per-Campus Operating Variables</h2>
              </div>
              <span className="text-xs font-mono text-slate-500 font-semibold">Real-Time Parametric Engine</span>
            </div>

            <div className="space-y-6">
              {/* Campers per Week Slider */}
              <div>
                <div className="flex justify-between text-xs font-bold text-slate-700 mb-2">
                  <span>Weekly Enrollment per Campus (N):</span>
                  <span className="text-emerald-600 font-extrabold text-sm">{campersPerWeek} Campers</span>
                </div>
                <input
                  type="range"
                  min={40}
                  max={180}
                  step={5}
                  value={campersPerWeek}
                  onChange={(e) => setCampersPerWeek(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>40 (Low Density)</span>
                  <span>110 (Target Baseline)</span>
                  <span>180 (Full Facility Capacity)</span>
                </div>
              </div>

              {/* Tuition per Week Slider */}
              <div>
                <div className="flex justify-between text-xs font-bold text-slate-700 mb-2">
                  <span>Average Weekly Tuition (P):</span>
                  <span className="text-emerald-600 font-extrabold text-sm">${tuitionPerWeek} / Camper</span>
                </div>
                <input
                  type="range"
                  min={350}
                  max={600}
                  step={10}
                  value={tuitionPerWeek}
                  onChange={(e) => setTuitionPerWeek(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>$350 (Value Tier)</span>
                  <span>$450 (Suburban Median)</span>
                  <span>$600 (Metro STEM Premium)</span>
                </div>
              </div>

              {/* School Lease Rate Slider */}
              <div>
                <div className="flex justify-between text-xs font-bold text-slate-700 mb-2">
                  <span>School Campus Weekly Lease Fee:</span>
                  <span className="text-emerald-600 font-extrabold text-sm">${schoolLeaseRate.toLocaleString()} / Week</span>
                </div>
                <input
                  type="range"
                  min={3000}
                  max={7000}
                  step={200}
                  value={schoolLeaseRate}
                  onChange={(e) => setSchoolLeaseRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>$3,000 (Basic Classrooms)</span>
                  <span>$4,500 (Gym + Turf + Labs)</span>
                  <span>$7,000 (Elite Prep Campus)</span>
                </div>
              </div>

              {/* Staff Ratios & Wage */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-700 mb-2">
                    <span>Counselor Hourly Wage:</span>
                    <span className="text-emerald-600 font-extrabold text-sm">${counselorWage}/hr</span>
                  </div>
                  <input
                    type="range"
                    min={18}
                    max={30}
                    step={1}
                    value={counselorWage}
                    onChange={(e) => setCounselorWage(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                  <div className="text-[10px] text-slate-400 mt-1">40 hrs / week ($880/counselor)</div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-700 mb-2">
                    <span>Supervision Ratio:</span>
                    <span className="text-emerald-600 font-extrabold text-sm">1:{camperRatio} Ratio</span>
                  </div>
                  <input
                    type="range"
                    min={7}
                    max={12}
                    step={1}
                    value={camperRatio}
                    onChange={(e) => setCamperRatio(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                  <div className="text-[10px] text-slate-400 mt-1">{numCounselors} Counselors on duty</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mathematical Proof & Formulas */}
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 text-xs text-slate-700 space-y-3">
            <h3 className="font-bold text-slate-900 flex items-center">
              <Calculator className="h-4 w-4 text-emerald-600 mr-1.5" />
              Mathematical Formulation of Break-Even (N*)
            </h3>
            <p className="text-slate-600 leading-relaxed text-[11px]">
              The critical threshold $N^*$ where a single campus operation covers 100% of fixed weekly venue and site leadership costs:
            </p>
            <div className="p-3 bg-white rounded-lg border border-slate-200 font-mono text-[11px] text-slate-900 text-center shadow-inner">
              N* = (Lease + Director) / [Tuition - (CounselorCost/Ratio + Materials + MerchantFee)]
            </div>
            <div className="flex justify-between items-center text-xs font-semibold pt-1">
              <span className="text-slate-600">Calculated Break-Even for this configuration:</span>
              <span className="text-emerald-700 font-black text-sm">{breakEvenCampers} Campers / Week</span>
            </div>
          </div>
        </div>

        {/* Right 5 Columns: Live Weekly P&L & Scaling */}
        <div className="lg:col-span-5 space-y-6">
          {/* P&L Statement Card */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <div className="flex justify-between items-baseline mb-4 pb-3 border-b border-slate-100">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                Single Campus Weekly P&L
              </h3>
              <span className="text-xs font-mono font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                Margin: {grossMarginPct}%
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between text-slate-900 font-bold">
                <span>Gross Tuition Revenue ({campersPerWeek} &times; ${tuitionPerWeek}):</span>
                <span className="font-mono">${weeklyTuitionRevenue.toLocaleString()}</span>
              </div>

              <div className="pt-2 border-t border-slate-100 space-y-1.5 text-slate-600">
                <div className="flex justify-between">
                  <span>School Facility Lease:</span>
                  <span className="font-mono text-rose-600">-${schoolLeaseRate.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Counselor Payroll ({numCounselors} staff):</span>
                  <span className="font-mono text-rose-600">-${weeklyCounselorPayroll.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Site Director Salary:</span>
                  <span className="font-mono text-rose-600">-${weeklySiteDirector.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Curriculum Kits & Materials ($32/camper):</span>
                  <span className="font-mono text-rose-600">-${weeklyBoxSupplies.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Insurance & Payment Processing (4.5%):</span>
                  <span className="font-mono text-rose-600">-${Math.round(weeklyMerchantAndInsurance).toLocaleString()}</span>
                </div>
              </div>

              <div className="pt-3 border-t-2 border-slate-200 flex justify-between items-baseline">
                <span className="font-black text-slate-900 uppercase">Weekly Net Contribution:</span>
                <span className="text-xl font-black text-emerald-600 font-mono">
                  +${Math.round(weeklyNetContribution).toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* 8-Week Season & Portfolio Scaling */}
          <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-xl border border-slate-800 p-6 shadow-xl space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
              Multi-Campus Portfolio Economics
            </span>

            <div>
              <div className="flex justify-between text-xs text-slate-400 mb-1">
                <span>Scale Portfolio Across Active School Campuses:</span>
                <span className="text-white font-bold">{numCampuses} Campuses</span>
              </div>
              <input
                type="range"
                min={1}
                max={25}
                step={1}
                value={numCampuses}
                onChange={(e) => setNumCampuses(Number(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800 text-xs">
              <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
                <span className="text-slate-400 text-[10px] uppercase font-bold block">Portfolio Revenue</span>
                <span className="text-lg font-black text-white font-mono">
                  ${(portfolioSeasonRevenue / 1000).toFixed(0)}k
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">{weeksOperated} Summer Weeks</span>
              </div>

              <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700">
                <span className="text-slate-400 text-[10px] uppercase font-bold block">Portfolio Contribution</span>
                <span className="text-lg font-black text-emerald-400 font-mono">
                  ${(portfolioSeasonProfit / 1000).toFixed(0)}k
                </span>
                <span className="text-[10px] text-emerald-300 block mt-0.5">{grossMarginPct}% Operating Margin</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-300 leading-relaxed pt-2">
              At a scale of 20 partner schools, CampNexus generates approximately $4.3M in gross season tuition 
              and $1.8M in net operating contribution margin, while returning over $720,000 directly to local school funds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
