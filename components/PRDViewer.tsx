'use client';

import React from 'react';
import { COMPETITOR_BENCHMARK } from '@/data/mockData';
import { 
  FileText, 
  Download, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  TrendingUp, 
  Users, 
  Cpu, 
  ExternalLink,
  Code2
} from 'lucide-react';

interface PRDViewerProps {
  onOpenLatex: () => void;
}

export const PRDViewer: React.FC<PRDViewerProps> = ({ onOpenLatex }) => {
  return (
    <div className="space-y-10 pb-20 max-w-5xl mx-auto">
      {/* PRD Header */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-8 sm:p-10 text-white shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold uppercase tracking-wider mb-2">
              <FileText className="h-4 w-4" />
              <span>Technical Product Requirements Document (PRD) &bull; Project 86</span>
            </div>
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              CampNexus: Pop-Up Summer Camp Operating System
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Rents Underutilized School Campuses During Summer Months to Run Multi-Sport, Theater, and Robotics Day Camps
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <a
              href="/CampNexus_PRD_Technical_Report.pdf"
              download
              className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md shadow-emerald-900/30 flex items-center space-x-1.5 transition-all"
            >
              <Download className="h-4 w-4" />
              <span>Download Formal PDF</span>
            </a>
            <button
              onClick={onOpenLatex}
              className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs font-semibold flex items-center space-x-1.5"
            >
              <Code2 className="h-4 w-4 text-amber-400" />
              <span>View LaTeX Source</span>
            </button>
          </div>
        </div>

        {/* Metadata Table */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-300">
          <div>
            <span className="text-slate-500 block uppercase font-bold text-[10px]">Author</span>
            <span className="font-semibold text-white">Gundeti Siddarth</span>
            <span className="block text-[11px] text-slate-400">Head of Technology / Founding Tech Lead</span>
          </div>
          <div>
            <span className="text-slate-500 block uppercase font-bold text-[10px]">Target Venture</span>
            <span className="font-semibold text-white">Ricoz Innovation</span>
            <span className="block text-[11px] text-slate-400">Internship Project Selection</span>
          </div>
          <div>
            <span className="text-slate-500 block uppercase font-bold text-[10px]">Date of Publication</span>
            <span className="font-semibold text-white">November 15, 2026</span>
            <span className="block text-[11px] text-slate-400">Version 1.0 (Production Blueprint)</span>
          </div>
          <div>
            <span className="text-slate-500 block uppercase font-bold text-[10px]">Architecture Stack</span>
            <span className="font-semibold text-white">Next.js 14 &bull; TypeScript</span>
            <span className="block text-[11px] text-slate-400">Tailwind CSS &bull; App Router</span>
          </div>
        </div>
      </section>

      {/* Section 1: Executive Summary & Strategic Rationale */}
      <section className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm space-y-4">
        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
          1. Executive Summary & Strategic Rationale
        </h2>
        <p className="text-xs text-slate-700 leading-relaxed">
          K-12 schools represent one of the most glaring physical capital paradoxes in modern civil infrastructure. 
          A typical suburban public or private school campus—encompassing 8 to 25 acres, air-conditioned gymnasiums, 
          350+ seat auditoriums, regulation athletic fields, and state-of-the-art computer labs—costs between 
          <strong> $15 million and $45 million</strong> to construct and millions annually to maintain. Yet, for 
          <strong> 10 consecutive weeks each summer</strong> (June through August), these campuses sit 
          <strong> dark and completely underutilized</strong>, generating zero operational revenue while ongoing facility 
          costs continue to accrue.
        </p>
        <p className="text-xs text-slate-700 leading-relaxed">
          Simultaneously, working parents face an acute summer childcare and enrichment crunch. Existing traditional 
          summer camps suffer from three critical deficiencies: (1) high real estate acquisition debt that forces tuition 
          above $800–$1,200/week (e.g., dedicated camp campuses or elite university programs), (2) single-dimension 
          curricula (only coding or only sports) that fail to satisfy families with diverse child interests, or 
          (3) operational chaos and safety breaches due to reliance on manual spreadsheets and fragmented communication.
        </p>
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900">
          <strong>The CampNexus Solution:</strong> A turnkey, asset-light operating system that leases underutilized 
          K-12 school campuses for 8 summer weeks, transforming them into multi-track enrichment centers covering 
          <strong> (1) Multi-Sport Athletic Academy</strong>, <strong>(2) Creative Arts & Musical Theater</strong>, and 
          <strong> (3) Robotics, AI & Applied STEM Labs</strong>. CampNexus provides schools with 
          <strong> $35,000–$75,000</strong> in guaranteed auxiliary revenue, offers parents premium neighborhood day camps 
          at <strong>$425–$495/week</strong>, and maintains institutional safety standards via an end-to-end digital 
          operating system (automated guardian PIN release, real-time counselor ratio monitors, and serialized Camp-in-a-Box logistics).
        </div>
      </section>

      {/* Section 2: Competitor Benchmarking Matrix */}
      <section className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm space-y-4">
        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
          2. Competitor Benchmarking & Product Teardown
        </h2>
        <p className="text-xs text-slate-700 leading-relaxed">
          To design a category-defining product, we conducted an empirical market teardown of the four leading operators 
          in the seasonal enrichment and school facility rental space:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-slate-200 rounded-lg overflow-hidden">
            <thead className="bg-slate-900 text-white uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3 px-3">Provider</th>
                <th className="py-3 px-3">Business Model</th>
                <th className="py-3 px-3">Weekly Tuition</th>
                <th className="py-3 px-3">Curriculum Focus</th>
                <th className="py-3 px-3">Staffing Ratio</th>
                <th className="py-3 px-3">Key Vulnerability / Gap</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              {COMPETITOR_BENCHMARK.map((comp, idx) => (
                <tr key={idx} className={comp.name.includes('CampNexus') ? 'bg-emerald-50/70 font-semibold' : 'hover:bg-slate-50'}>
                  <td className="py-3 px-3 font-bold text-slate-900">
                    {comp.name}
                  </td>
                  <td className="py-3 px-3 text-[11px]">{comp.modelType}</td>
                  <td className="py-3 px-3 font-mono text-[11px]">{comp.weeklyTuition}</td>
                  <td className="py-3 px-3 text-[11px]">{comp.tracksOffered.join(', ')}</td>
                  <td className="py-3 px-3 text-[11px]">{comp.staffRatio}</td>
                  <td className="py-3 px-3 text-[11px] text-slate-600">{comp.operationalBottleneck}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3: Target Personas */}
      <section className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm space-y-4">
        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
          3. Target Personas & Core User Journeys
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
            <div className="flex items-center space-x-2 text-indigo-700 font-bold">
              <Users className="h-4 w-4" />
              <span>Persona A: Suburban Working Parent</span>
            </div>
            <p className="text-slate-600 text-[11px]">
              <strong>Name:</strong> Maria (Mother of two, ages 8 & 11)
            </p>
            <p className="text-slate-600 text-[11px]">
              <strong>Pain Point:</strong> Needs reliable, safe full-day care (8:30 AM–5:30 PM) close to home. 
              Tired of driving to 3 different locations when one kid wants soccer and the other wants robotics.
            </p>
            <p className="text-slate-600 text-[11px]">
              <strong>Goal:</strong> Single-checkout multi-week booking with sibling discounts and certified safety protocols.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
            <div className="flex items-center space-x-2 text-emerald-700 font-bold">
              <ShieldCheck className="h-4 w-4" />
              <span>Persona B: School Chief Business Official</span>
            </div>
            <p className="text-slate-600 text-[11px]">
              <strong>Name:</strong> Dr. Arthur Vance (District CBO)
            </p>
            <p className="text-slate-600 text-[11px]">
              <strong>Pain Point:</strong> School board demands new non-tax auxiliary revenue, but fear of facility damage, 
              insurance liability, and janitorial mess prevents them from renting to third parties.
            </p>
            <p className="text-slate-600 text-[11px]">
              <strong>Goal:</strong> Hands-off master lease, $5M COI coverage, dedicated custodial funding, and community scholarships.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
            <div className="flex items-center space-x-2 text-amber-700 font-bold">
              <Cpu className="h-4 w-4" />
              <span>Persona C: On-Site Camp Director</span>
            </div>
            <p className="text-slate-600 text-[11px]">
              <strong>Name:</strong> Sarah Henderson, M.Ed. (Site Director)
            </p>
            <p className="text-slate-600 text-[11px]">
              <strong>Pain Point:</strong> Managing 140 energetic campers, 15 seasonal staff, medical allergies, and chaotic 
              afternoon parent pickups using paper clipboards.
            </p>
            <p className="text-slate-600 text-[11px]">
              <strong>Goal:</strong> Live digital roster, 4-digit pickup PIN release, and automatic ratio breach warnings.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: System Architecture & Technical Specifications */}
      <section className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm space-y-4">
        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
          4. Technical Architecture & System Specifications
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 flex items-center">
              <Layers className="h-4 w-4 text-emerald-600 mr-1.5" /> Frontend & Platform Stack
            </h3>
            <ul className="space-y-1 text-slate-600 text-[11px]">
              <li>&bull; <strong>Framework:</strong> Next.js 14 App Router (React Server Components + Client interactivity)</li>
              <li>&bull; <strong>Language:</strong> TypeScript (Strict type safety across domain models)</li>
              <li>&bull; <strong>Design System:</strong> Tailwind CSS with custom branding tokens and print media styles</li>
              <li>&bull; <strong>Iconography:</strong> Lucide React for consistent semantic visual hierarchy</li>
              <li>&bull; <strong>Deployment:</strong> Vercel edge deployment with global CDN asset optimization</li>
            </ul>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 flex items-center">
              <ShieldCheck className="h-4 w-4 text-emerald-600 mr-1.5" /> Security, Privacy & Compliance
            </h3>
            <ul className="space-y-1 text-slate-600 text-[11px]">
              <li>&bull; <strong>COPPA Compliance:</strong> Under-13 camper records isolated with parental consent gate</li>
              <li>&bull; <strong>Medical Data Isolation:</strong> Allergies and emergency contacts restricted to authorized staff</li>
              <li>&bull; <strong>Guardian Handshake:</strong> Cryptographically validated 4-digit PIN for child release</li>
              <li>&bull; <strong>Audit Logging:</strong> Timestamped check-in/check-out events with counselor ID tags</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 5: Unit Economics & Feasibility Formulation */}
      <section className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm space-y-4">
        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
          5. Unit Economics & Break-Even Mathematical Formulation
        </h2>
        <p className="text-xs text-slate-700 leading-relaxed">
          The financial feasibility of the pop-up camp model rests on positive contribution margins at modest capacity utilization:
        </p>

        <div className="bg-slate-900 text-white p-5 rounded-xl font-mono text-xs space-y-2">
          <div className="text-emerald-400 font-bold"># CAMPUS CONTRIBUTION MARGIN FORMULATION</div>
          <div>Weekly Tuition Revenue: R = N * P_tuition</div>
          <div>Weekly Operating Cost: C_total = C_lease + C_payroll + C_director + C_materials + (0.045 * R)</div>
          <div>Break-Even Enrollment: N* = (C_lease + C_director) / [P_tuition - (w_counselor * 40 / Ratio + c_materials + 0.045 * P_tuition)]</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-2">
          <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 text-center">
            <span className="text-slate-500 block text-[10px] uppercase font-bold">Break-Even Enrollment</span>
            <span className="text-xl font-black text-slate-900">41 Campers</span>
            <span className="block text-[10px] text-slate-400">~28% Campus Capacity</span>
          </div>
          <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 text-center">
            <span className="text-slate-500 block text-[10px] uppercase font-bold">Target Weekly Profit</span>
            <span className="text-xl font-black text-emerald-600">+$22,860</span>
            <span className="block text-[10px] text-slate-400">At 120 Campers / Campus</span>
          </div>
          <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 text-center">
            <span className="text-slate-500 block text-[10px] uppercase font-bold">Gross Margin Target</span>
            <span className="text-xl font-black text-indigo-600">42.4%</span>
            <span className="block text-[10px] text-slate-400">Net Operating Contribution</span>
          </div>
        </div>
      </section>

      {/* Section 6: Rollout Roadmap */}
      <section className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm space-y-4">
        <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
          6. Phased Implementation Roadmap
        </h2>
        <div className="space-y-3 text-xs">
          <div className="flex items-start space-x-3 p-3 rounded-lg border border-slate-100 bg-slate-50">
            <span className="px-2 py-0.5 rounded bg-emerald-600 text-white font-bold text-[10px]">Phase 1 (Q1-Q2)</span>
            <div>
              <strong className="text-slate-900 block">Single-Cluster Pilot Launch (4 School Campuses)</strong>
              <span className="text-slate-600">
                Execute facility master leases in prime suburban school districts; launch parent registration portal; build 
                Camp-in-a-Box supply chains for Multi-Sport, Theater, and Robotics.
              </span>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-3 rounded-lg border border-slate-100 bg-slate-50">
            <span className="px-2 py-0.5 rounded bg-indigo-600 text-white font-bold text-[10px]">Phase 2 (Q3-Q4)</span>
            <div>
              <strong className="text-slate-900 block">Regional Multi-Site Scaling (20 School Campuses)</strong>
              <span className="text-slate-600">
                Expand to 20 campuses across 3 major metropolitan areas; integrate automated counselor scheduling and 
                state licensing compliance tracking; launch mobile parent check-in app.
              </span>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-3 rounded-lg border border-slate-100 bg-slate-50">
            <span className="px-2 py-0.5 rounded bg-slate-800 text-white font-bold text-[10px]">Phase 3 (Year 2)</span>
            <div>
              <strong className="text-slate-900 block">Enterprise District White-Label Platform</strong>
              <span className="text-slate-600">
                License CampNexus operating software directly to school districts wishing to run internal municipal camps 
                during summer breaks under a SaaS revenue share model.
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
