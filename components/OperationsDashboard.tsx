'use client';

import React, { useState } from 'react';
import { 
  INITIAL_ATTENDANCE, 
  STAFF_ROSTER, 
  INCIDENT_LOGS, 
  CAMP_TRACKS 
} from '@/data/mockData';
import { AttendanceRecord, IncidentReport, TrackId } from '@/types';
import { 
  Users, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  Lock, 
  Search, 
  FileText, 
  PlusCircle, 
  HeartPulse, 
  UserCheck, 
  Phone
} from 'lucide-react';

export const OperationsDashboard: React.FC = () => {
  const [attendance, setAttendance] = useState<AttendanceRecord[]>(INITIAL_ATTENDANCE);
  const [incidents, setIncidents] = useState<IncidentReport[]>(INCIDENT_LOGS);
  const [selectedTrackFilter, setSelectedTrackFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // PIN release modal state
  const [activeCamperForCheckout, setActiveCamperForCheckout] = useState<AttendanceRecord | null>(null);
  const [enteredPin, setEnteredPin] = useState<string>('');
  const [pinError, setPinError] = useState<string>('');
  const [pickupGuardianName, setPickupGuardianName] = useState<string>('');

  // Incident log modal state
  const [showIncidentModal, setShowIncidentModal] = useState<boolean>(false);
  const [newCamperName, setNewCamperName] = useState<string>('Liam Martinez');
  const [newSeverity, setNewSeverity] = useState<'low' | 'medium' | 'high'>('low');
  const [newType, setNewType] = useState<IncidentReport['type']>('minor_scrape');
  const [newDesc, setNewDesc] = useState<string>('');
  const [newAction, setNewAction] = useState<string>('');

  // Calculated metrics
  const totalCampers = attendance.length;
  const presentCount = attendance.filter((a) => a.status === 'present').length;
  const checkedOutCount = attendance.filter((a) => a.status === 'checked_out').length;
  const medicalFlagsCount = attendance.filter((a) => !!a.medicalFlag).length;

  // Filtered attendance list
  const filteredAttendance = attendance.filter((record) => {
    const matchesTrack = selectedTrackFilter === 'all' || record.trackId === selectedTrackFilter;
    const matchesSearch = record.camperName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTrack && matchesSearch;
  });

  // Handle Check-In
  const handleCheckIn = (id: string) => {
    const timeNow = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    setAttendance((prev) =>
      prev.map((rec) =>
        rec.id === id
          ? { ...rec, status: 'present', checkInTime: timeNow, pinVerified: true }
          : rec
      )
    );
  };

  // Open Checkout Modal
  const openCheckoutDialog = (camper: AttendanceRecord) => {
    setActiveCamperForCheckout(camper);
    setEnteredPin('');
    setPinError('');
    setPickupGuardianName('');
  };

  // Submit Checkout with PIN Verification
  const handleVerifyCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeCamperForCheckout) return;

    // Simulate PIN check (Accept '4829' or any 4 digit code for testing)
    if (enteredPin.length === 4) {
      const timeNow = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
      setAttendance((prev) =>
        prev.map((rec) =>
          rec.id === activeCamperForCheckout.id
            ? {
                ...rec,
                status: 'checked_out',
                checkOutTime: timeNow,
                authorizedPickupBy: pickupGuardianName || 'Authorized Parent',
                pinVerified: true,
              }
            : rec
        )
      );
      setActiveCamperForCheckout(null);
    } else {
      setPinError('Invalid 4-digit security PIN. Please verify parent registration pass.');
    }
  };

  // Submit Incident Log
  const handleCreateIncident = (e: React.FormEvent) => {
    e.preventDefault();
    const newInc: IncidentReport = {
      id: `inc-${Date.now().toString().slice(-4)}`,
      timestamp: 'Just now',
      camperName: newCamperName,
      campusId: 'campus-oakridge',
      severity: newSeverity,
      type: newType,
      description: newDesc || 'Routine playground scrape. First aid applied.',
      actionsTaken: newAction || 'Cleaned and bandaged. Monitored.',
      reportedBy: 'Site Director Sarah Henderson',
      parentNotified: true,
    };
    setIncidents([newInc, ...incidents]);
    setShowIncidentModal(false);
    setNewDesc('');
    setNewAction('');
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Top Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold uppercase tracking-wider mb-2">
            <ShieldCheck className="h-4 w-4" />
            <span>Site Director Daily Operations &bull; Live Telemetry</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            Oakridge Campus Command Center
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            4200 Valley Green Blvd, Palo Alto, CA &bull; Week 3 of 8 &bull; Operating Multi-Sport, Theater, Robotics
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => setShowIncidentModal(true)}
            className="px-3.5 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold flex items-center space-x-1.5 shadow-md shadow-rose-900/30 transition-all"
          >
            <PlusCircle className="h-4 w-4" />
            <span>Log Safety Incident</span>
          </button>
        </div>
      </div>

      {/* Real-time KPI Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase">On Campus Today</span>
            <Users className="h-5 w-5 text-emerald-600" />
          </div>
          <div className="mt-2 text-2xl font-black text-slate-900">
            {presentCount} <span className="text-xs text-slate-400 font-normal">/ {totalCampers} Campers</span>
          </div>
          <div className="mt-2 w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-emerald-600 h-full rounded-full transition-all duration-500"
              style={{ width: `${(presentCount / totalCampers) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase">PIN Dismissals</span>
            <Lock className="h-5 w-5 text-indigo-600" />
          </div>
          <div className="mt-2 text-2xl font-black text-slate-900">
            {checkedOutCount} <span className="text-xs text-slate-400 font-normal">Released</span>
          </div>
          <p className="text-[11px] text-slate-500 mt-2">100% 4-digit PIN validated</p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase">Medical / Allergy Flags</span>
            <HeartPulse className="h-5 w-5 text-rose-500" />
          </div>
          <div className="mt-2 text-2xl font-black text-rose-600">
            {medicalFlagsCount}
          </div>
          <p className="text-[11px] text-slate-500 mt-2">EpiPens & Inhalers with Director</p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase">Staff Ratio Compliance</span>
            <ShieldCheck className="h-5 w-5 text-emerald-600" />
          </div>
          <div className="mt-2 text-2xl font-black text-emerald-600">
            1:8.2
          </div>
          <p className="text-[11px] text-emerald-700 font-medium mt-2">ACA & State Compliant (&lt; 1:10)</p>
        </div>
      </div>

      {/* Counselor-to-Camper Live Ratio Guard */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base font-bold text-slate-900">Counselor Supervision Ratios by Track</h3>
            <p className="text-xs text-slate-500">Real-time capacity guardrails to prevent ratio breaches</p>
          </div>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            Ratios Compliant
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/30">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-xs text-slate-900">Multi-Sport Academy</span>
              <span className="text-xs font-mono font-bold text-emerald-700">Ratio: 1:9 (Max 1:10)</span>
            </div>
            <div className="text-xs text-slate-600 space-y-1">
              <div>Campers: <strong className="text-slate-900">54</strong> | Staff On Field: <strong className="text-slate-900">6 Counselors</strong></div>
              <div>Lead: Coach Marcus Vance (US Soccer C)</div>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/30">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-xs text-slate-900">Musical Theater Workshop</span>
              <span className="text-xs font-mono font-bold text-amber-700">Ratio: 1:8.4 (Max 1:10)</span>
            </div>
            <div className="text-xs text-slate-600 space-y-1">
              <div>Campers: <strong className="text-slate-900">42</strong> | Staff in Auditorium: <strong className="text-slate-900">5 Counselors</strong></div>
              <div>Lead: Elena Rostova, BFA (AEA)</div>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/30">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-xs text-slate-900">Robotics & STEM Labs</span>
              <span className="text-xs font-mono font-bold text-blue-700">Ratio: 1:7.6 (Max 1:8)</span>
            </div>
            <div className="text-xs text-slate-600 space-y-1">
              <div>Campers: <strong className="text-slate-900">38</strong> | Staff in Computer Lab: <strong className="text-slate-900">5 Counselors</strong></div>
              <div>Lead: David K. O’Connor (LEGO Certified)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Operations Split: Attendance Table & Incident Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left 8 Cols: Camper Roster with PIN verification */}
        <div className="lg:col-span-8 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-base font-bold text-slate-900">Live Camper Roster & Check-In / PIN Release</h2>
              <p className="text-xs text-slate-500">Requires verified 4-digit PIN for afternoon guardian dismissal</p>
            </div>

            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="h-3.5 w-3.5 absolute left-3 top-2.5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search camper..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8 pr-3 py-1.5 text-xs border border-slate-300 rounded-lg"
                />
              </div>

              <select
                value={selectedTrackFilter}
                onChange={(e) => setSelectedTrackFilter(e.target.value)}
                className="text-xs py-1.5 px-2 border border-slate-300 rounded-lg text-slate-700"
              >
                <option value="all">All Tracks</option>
                <option value="multi-sport">Multi-Sport</option>
                <option value="theater">Theater</option>
                <option value="robotics">Robotics</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider text-[10px] border-b border-slate-100">
                <tr>
                  <th className="py-3 px-4">Camper</th>
                  <th className="py-3 px-3">Track</th>
                  <th className="py-3 px-3">Status</th>
                  <th className="py-3 px-3">Check-In</th>
                  <th className="py-3 px-3">Medical / Safety Alert</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {filteredAttendance.map((camper) => (
                  <tr key={camper.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-900">
                      {camper.camperName}
                    </td>
                    <td className="py-3 px-3">
                      <span className="capitalize px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-700">
                        {camper.trackId.replace('-', ' ')}
                      </span>
                    </td>
                    <td className="py-3 px-3">
                      {camper.status === 'present' && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                          Present
                        </span>
                      )}
                      {camper.status === 'checked_out' && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-200 text-slate-700">
                          Released (PIN OK)
                        </span>
                      )}
                      {camper.status === 'late_expected' && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800">
                          Late Arrival
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-3 font-mono text-[11px] text-slate-500">
                      {camper.checkInTime || '--:--'}
                    </td>
                    <td className="py-3 px-3">
                      {camper.medicalFlag ? (
                        <span className="inline-flex items-center text-rose-600 font-semibold bg-rose-50 px-2 py-0.5 rounded text-[10px] border border-rose-200">
                          <HeartPulse className="h-3 w-3 mr-1" />
                          {camper.medicalFlag}
                        </span>
                      ) : (
                        <span className="text-slate-400 text-[10px]">None</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-right space-x-1">
                      {camper.status !== 'present' && camper.status !== 'checked_out' && (
                        <button
                          onClick={() => handleCheckIn(camper.id)}
                          className="py-1 px-2.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px]"
                        >
                          Check In
                        </button>
                      )}
                      {camper.status === 'present' && (
                        <button
                          onClick={() => openCheckoutDialog(camper)}
                          className="py-1 px-2.5 rounded bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-[11px] flex items-center inline-flex space-x-1"
                        >
                          <Lock className="h-3 w-3" />
                          <span>Release PIN</span>
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right 4 Cols: Live Incident Feed & Safety Notifications */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-slate-900 flex items-center">
                <AlertTriangle className="h-4 w-4 text-amber-500 mr-1.5" />
                Live Incident & Safety Feed
              </h3>
              <span className="text-[10px] text-slate-400">Auto-sent to Parents</span>
            </div>

            <div className="space-y-3">
              {incidents.map((inc) => (
                <div key={inc.id} className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900">{inc.camperName}</span>
                    <span className={`text-[9px] uppercase font-bold px-1.5 py-0.2 rounded ${
                      inc.severity === 'high' ? 'bg-rose-100 text-rose-700' : 'bg-slate-200 text-slate-700'
                    }`}>
                      {inc.severity}
                    </span>
                  </div>
                  <p className="text-slate-600 text-[11px]">{inc.description}</p>
                  <div className="text-[10px] text-slate-500 flex justify-between pt-1 border-t border-slate-100">
                    <span>{inc.timestamp} &bull; {inc.reportedBy}</span>
                    {inc.parentNotified && <span className="text-emerald-600 font-semibold">SMS Sent</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* PIN Verification Modal */}
      {activeCamperForCheckout && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 animate-scale-in">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-lg bg-indigo-100 text-indigo-700">
                  <Lock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Security PIN Dismissal</h3>
                  <p className="text-xs text-slate-500">Camper: {activeCamperForCheckout.camperName}</p>
                </div>
              </div>
              <button
                onClick={() => setActiveCamperForCheckout(null)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold"
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleVerifyCheckout} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Enter 4-Digit Pickup PIN Provided by Guardian
                </label>
                <input
                  type="password"
                  maxLength={4}
                  required
                  autoFocus
                  placeholder="&bull; &bull; &bull; &bull;"
                  value={enteredPin}
                  onChange={(e) => setEnteredPin(e.target.value)}
                  className="w-full text-center text-2xl font-mono tracking-widest font-black py-2 border-2 border-indigo-200 rounded-xl focus:border-indigo-600 focus:ring-indigo-600"
                />
                <p className="text-[11px] text-slate-500 text-center mt-1">
                  Registered Guardian PIN: <span className="font-mono font-bold text-indigo-700">4829</span>
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Guardian Name Present</label>
                <input
                  type="text"
                  placeholder="e.g. Maria Martinez (Mother)"
                  value={pickupGuardianName}
                  onChange={(e) => setPickupGuardianName(e.target.value)}
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg"
                />
              </div>

              {pinError && (
                <div className="text-xs text-rose-600 font-semibold bg-rose-50 p-2 rounded border border-rose-200">
                  {pinError}
                </div>
              )}

              <div className="flex space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveCamperForCheckout(null)}
                  className="flex-1 py-2 rounded-lg border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md shadow-indigo-800/30"
                >
                  Verify & Release Camper
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Log Incident Modal */}
      {showIncidentModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 animate-scale-in">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-bold text-slate-900 text-sm flex items-center">
                <AlertTriangle className="h-4 w-4 text-rose-500 mr-2" />
                Log Incident or Medical Observation
              </h3>
              <button
                onClick={() => setShowIncidentModal(false)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold"
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleCreateIncident} className="mt-4 space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Camper</label>
                <select
                  value={newCamperName}
                  onChange={(e) => setNewCamperName(e.target.value)}
                  className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-xs"
                >
                  {attendance.map((c) => (
                    <option key={c.id} value={c.camperName}>
                      {c.camperName} ({c.trackId})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Severity</label>
                  <select
                    value={newSeverity}
                    onChange={(e) => setNewSeverity(e.target.value as any)}
                    className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-xs"
                  >
                    <option value="low">Low (First Aid)</option>
                    <option value="medium">Medium (Director Notified)</option>
                    <option value="high">High (Urgent Care)</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Incident Type</label>
                  <select
                    value={newType}
                    onChange={(e) => setNewType(e.target.value as any)}
                    className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-xs"
                  >
                    <option value="minor_scrape">Minor Scrape / Bruise</option>
                    <option value="allergy_reaction">Allergy / Medical</option>
                    <option value="heat_exhaustion">Heat & Hydration</option>
                    <option value="equipment_issue">Equipment Defect</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Observation Description</label>
                <textarea
                  rows={2}
                  required
                  placeholder="Describe what occurred, location on campus, and camper response..."
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-xs"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">First Aid / Actions Taken</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Applied ice pack for 10 minutes, resting in air-conditioned director lounge."
                  value={newAction}
                  onChange={(e) => setNewAction(e.target.value)}
                  className="w-full px-3 py-1.5 border border-slate-300 rounded-lg text-xs"
                />
              </div>

              <div className="flex space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowIncidentModal(false)}
                  className="flex-1 py-2 rounded-lg border border-slate-300 text-slate-700 text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold"
                >
                  Record & Notify Parent
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
