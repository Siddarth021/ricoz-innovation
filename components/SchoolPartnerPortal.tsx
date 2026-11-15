'use client';

import React, { useState } from 'react';
import { 
  Building2, 
  DollarSign, 
  ShieldCheck, 
  CheckCircle, 
  FileText, 
  Sliders, 
  Award, 
  Sparkles,
  Download,
  AlertTriangle
} from 'lucide-react';

export const SchoolPartnerPortal: React.FC = () => {
  // Facility leasing calculator parameters
  const [numWeeks, setNumWeeks] = useState<number>(8);
  const [numClassrooms, setNumClassrooms] = useState<number>(3);
  const [includeGym, setIncludeGym] = useState<boolean>(true);
  const [includeTurfField, setIncludeTurfField] = useState<boolean>(true);
  const [includeAuditorium, setIncludeAuditorium] = useState<boolean>(true);
  const [districtType, setDistrictType] = useState<'public' | 'charter' | 'private'>('public');

  // Lease proposal generator state
  const [schoolName, setSchoolName] = useState<string>('Lincoln Heights Preparatory');
  const [schoolDistrict, setSchoolDistrict] = useState<string>('Metro Unified School District');
  const [contactName, setContactName] = useState<string>('Dr. Arthur Vance (Chief Business Official)');
  const [contactEmail, setContactEmail] = useState<string>('avance@lincolnhigh.edu');
  const [isAgreementGenerated, setIsAgreementGenerated] = useState<boolean>(false);

  // Financial model calculations for school
  const baseRatePerClassroom = 350; // per week
  const gymRate = includeGym ? 1600 : 0; // per week
  const turfRate = includeTurfField ? 1400 : 0; // per week
  const auditoriumRate = includeAuditorium ? 1200 : 0; // per week
  const weeklyClassroomRent = numClassrooms * baseRatePerClassroom;

  const weeklyGrossLease = weeklyClassroomRent + gymRate + turfRate + auditoriumRate;
  const custodialStipend = numWeeks * 850; // extra custodial wage paid directly to school janitors
  const totalSummerPayout = (weeklyGrossLease * numWeeks) + custodialStipend;
  const donatedScholarships = Math.floor(numWeeks * 2.5); // Free spots for low-income district students

  return (
    <div className="space-y-10 pb-16">
      {/* School Partner Hero */}
      <section className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 p-8 sm:p-10 text-white shadow-xl">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold uppercase tracking-wider mb-4">
            <Building2 className="h-4 w-4" />
            <span>K-12 Facility Monetization &bull; Zero Operational Overhead</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Turn Dark Summer Campuses into $35,000–$75,000 in Auxiliary Revenue.
          </h1>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            School campuses sit empty for 70 consecutive summer days while HVAC, maintenance, and facility overhead costs continue. 
            CampNexus operates as a turnkey master tenant: we provide all insurance ($5M policy), background-checked staff, 
            daily custodial staffing, and high-quality STEM, theater, and sports camps for your student families.
          </p>
        </div>
      </section>

      {/* Calculator & Partner Value Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left 7 Columns: Interactive Revenue Estimator */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
              <div className="flex items-center space-x-2">
                <Sliders className="h-5 w-5 text-emerald-600" />
                <h2 className="text-lg font-bold text-slate-900">Summer Facility Revenue Calculator</h2>
              </div>
              <span className="text-xs text-slate-500 font-medium">Updated 2026 District Payout Rates</span>
            </div>

            <div className="space-y-6">
              {/* Duration Slider */}
              <div>
                <div className="flex justify-between text-xs font-bold text-slate-700 mb-2">
                  <span>Camp Weeks Leased During Summer Downtime:</span>
                  <span className="text-emerald-600 font-extrabold text-sm">{numWeeks} Weeks</span>
                </div>
                <input
                  type="range"
                  min={4}
                  max={10}
                  value={numWeeks}
                  onChange={(e) => setNumWeeks(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>4 Weeks (July only)</span>
                  <span>7 Weeks</span>
                  <span>10 Weeks (Full Break)</span>
                </div>
              </div>

              {/* Classrooms Slider */}
              <div>
                <div className="flex justify-between text-xs font-bold text-slate-700 mb-2">
                  <span>Air-Conditioned Classrooms / STEM Labs:</span>
                  <span className="text-emerald-600 font-extrabold text-sm">{numClassrooms} Rooms</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={6}
                  value={numClassrooms}
                  onChange={(e) => setNumClassrooms(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>1 Lab ($350/wk)</span>
                  <span>3 Labs</span>
                  <span>6 Labs ($2,100/wk)</span>
                </div>
              </div>

              {/* Special Facilities Toggles */}
              <div className="space-y-3 pt-2">
                <label className="text-xs font-bold text-slate-700 block">Select Specialized Facilities Available:</label>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div
                    onClick={() => setIncludeGym(!includeGym)}
                    className={`cursor-pointer p-3 rounded-lg border text-left transition-all ${
                      includeGym
                        ? 'border-emerald-600 bg-emerald-50/50 text-slate-900 ring-1 ring-emerald-600'
                        : 'border-slate-200 bg-white text-slate-500'
                    }`}
                  >
                    <div className="text-xs font-bold">Indoor Gymnasium</div>
                    <div className="text-[10px] text-slate-500 mt-1">+$1,600 / week</div>
                  </div>

                  <div
                    onClick={() => setIncludeTurfField(!includeTurfField)}
                    className={`cursor-pointer p-3 rounded-lg border text-left transition-all ${
                      includeTurfField
                        ? 'border-emerald-600 bg-emerald-50/50 text-slate-900 ring-1 ring-emerald-600'
                        : 'border-slate-200 bg-white text-slate-500'
                    }`}
                  >
                    <div className="text-xs font-bold">Turf Soccer Field</div>
                    <div className="text-[10px] text-slate-500 mt-1">+$1,400 / week</div>
                  </div>

                  <div
                    onClick={() => setIncludeAuditorium(!includeAuditorium)}
                    className={`cursor-pointer p-3 rounded-lg border text-left transition-all ${
                      includeAuditorium
                        ? 'border-emerald-600 bg-emerald-50/50 text-slate-900 ring-1 ring-emerald-600'
                        : 'border-slate-200 bg-white text-slate-500'
                    }`}
                  >
                    <div className="text-xs font-bold">Auditorium / Stage</div>
                    <div className="text-[10px] text-slate-500 mt-1">+$1,200 / week</div>
                  </div>
                </div>
              </div>

              {/* District Type */}
              <div className="pt-2">
                <label className="text-xs font-bold text-slate-700 block mb-2">School Governance Model:</label>
                <div className="grid grid-cols-3 gap-2">
                  {(['public', 'charter', 'private'] as const).map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setDistrictType(t)}
                      className={`py-2 px-3 rounded-lg text-xs capitalize font-medium border ${
                        districtType === t
                          ? 'border-emerald-600 bg-emerald-600 text-white font-bold'
                          : 'border-slate-200 bg-white text-slate-600'
                      }`}
                    >
                      {t} School
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* District Safeguards & Zero-Burden Guarantee */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center">
              <ShieldCheck className="h-5 w-5 text-emerald-600 mr-2" />
              The CampNexus Campus Protection Protocol
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                <span className="font-bold text-slate-900 block mb-1">$5,000,000 Liability Coverage</span>
                <p className="text-slate-600">
                  Comprehensive general liability policy with the School District named as Primary Additional Insured. Zero municipal liability exposure.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                <span className="font-bold text-slate-900 block mb-1">Dedicated Custodial Crews</span>
                <p className="text-slate-600">
                  We fund dedicated custodial shifts each evening. Classrooms, restrooms, and athletic facilities are sanitized daily and returned immaculate.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                <span className="font-bold text-slate-900 block mb-1">FBI / DOJ Background Checks</span>
                <p className="text-slate-600">
                  100% of camp directors, coaches, and instructors undergo 7-year fingerprint criminal background checks and mandatory mandated reporter certification.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                <span className="font-bold text-slate-900 block mb-1">Community Equity Scholarships</span>
                <p className="text-slate-600">
                  We allocate free camp seats to your district’s Title 1 / McKinney-Vento students so neighborhood children directly benefit.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right 5 Columns: Revenue Summary & Proposal Agreement Generator */}
        <div className="lg:col-span-5 space-y-6">
          {/* Revenue Calculation Card */}
          <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-xl border border-slate-800 p-6 shadow-lg">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
              Estimated Summer Earnings
            </span>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="text-3xl sm:text-4xl font-black text-white">
                ${totalSummerPayout.toLocaleString()}
              </span>
              <span className="text-xs text-slate-400">Net to School Fund</span>
            </div>

            <div className="mt-6 space-y-2.5 pt-4 border-t border-slate-800 text-xs">
              <div className="flex justify-between text-slate-300">
                <span>Direct Space Rental ({numWeeks} wks):</span>
                <span className="font-mono text-white">${(weeklyGrossLease * numWeeks).toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Dedicated Custodial Wage Stipend:</span>
                <span className="font-mono text-white">${custodialStipend.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-emerald-400 font-semibold pt-1 border-t border-slate-800/80">
                <span>Donated Camper Scholarships:</span>
                <span>{donatedScholarships} Full Seats (${(donatedScholarships * 450).toLocaleString()} Value)</span>
              </div>
            </div>

            <div className="mt-6 p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs flex items-center space-x-2">
              <Award className="h-4 w-4 flex-shrink-0" />
              <span>Funds can be earmarked directly for school robotics labs, athletics, or teacher bonuses.</span>
            </div>
          </div>

          {/* Master Lease Agreement Generator */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center space-x-2 mb-4">
              <FileText className="h-5 w-5 text-emerald-600" />
              <h3 className="text-sm font-bold text-slate-900">Generate Master Facility Agreement</h3>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">School / Campus Name</label>
                <input
                  type="text"
                  value={schoolName}
                  onChange={(e) => setSchoolName(e.target.value)}
                  className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-xs"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">School District / Governing Entity</label>
                <input
                  type="text"
                  value={schoolDistrict}
                  onChange={(e) => setSchoolDistrict(e.target.value)}
                  className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-xs"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">Authorized Signatory & Title</label>
                <input
                  type="text"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-xs"
                />
              </div>

              <button
                onClick={() => setIsAgreementGenerated(true)}
                className="w-full mt-3 py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-emerald-700/20 transition-all flex items-center justify-center space-x-2"
              >
                <FileText className="h-4 w-4" />
                <span>Compile Official Master Lease Proposal</span>
              </button>
            </div>

            {isAgreementGenerated && (
              <div className="mt-4 p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs animate-fade-in space-y-2">
                <div className="flex items-center justify-between text-emerald-700 font-bold">
                  <span className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-1" /> Document Ready for Execution
                  </span>
                  <span className="font-mono text-[10px]">DOC-ID: MLA-2026-{numWeeks}W</span>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  Agreement between <strong className="text-slate-900">{schoolName}</strong> ({schoolDistrict}) 
                  and <strong className="text-slate-900">CampNexus LLC</strong> for {numWeeks} weeks of summer facility usage. 
                  Total guaranteed disbursement: <strong className="text-slate-900">${totalSummerPayout.toLocaleString()}</strong>.
                </p>
                <div className="pt-2 flex space-x-2">
                  <button
                    onClick={() => window.print()}
                    className="flex-1 py-1.5 px-2 rounded bg-slate-800 text-white hover:bg-slate-700 text-[11px] font-semibold flex items-center justify-center space-x-1"
                  >
                    <Download className="h-3 w-3" />
                    <span>Print Lease PDF</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
