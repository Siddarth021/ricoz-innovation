'use client';

import React, { useState } from 'react';
import { 
  CAMP_TRACKS, 
  CAMPUS_LOCATIONS 
} from '@/data/mockData';
import { TrackId, RegistrationOrder } from '@/types';
import { 
  Trophy, 
  Sparkles, 
  Bot, 
  MapPin, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  QrCode, 
  UserPlus, 
  Lock,
  Printer
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ParentPortal: React.FC = () => {
  // Selection states
  const [selectedCampusId, setSelectedCampusId] = useState<string>(CAMPUS_LOCATIONS[0].id);
  const [selectedTrackId, setSelectedTrackId] = useState<TrackId>('robotics');
  const [selectedWeeks, setSelectedWeeks] = useState<number[]>([1, 2]);
  const [earlyCare, setEarlyCare] = useState<boolean>(true);
  const [extendedCare, setExtendedCare] = useState<boolean>(false);
  const [isSecondCamper, setIsSecondCamper] = useState<boolean>(false);

  // Camper Form state
  const [firstName, setFirstName] = useState<string>('Liam');
  const [lastName, setLastName] = useState<string>('Martinez');
  const [dob, setDob] = useState<string>('2015-06-12');
  const [allergies, setAllergies] = useState<string>('Mild asthma (carries inhaler)');
  const [emergencyName, setEmergencyName] = useState<string>('Maria Martinez');
  const [emergencyPhone, setEmergencyPhone] = useState<string>('(650) 492-8172');
  const [emergencyRelation, setEmergencyRelation] = useState<string>('Mother');
  const [pickupPin, setPickupPin] = useState<string>('4829');
  const [authorizedPickups, setAuthorizedPickups] = useState<string>('Maria Martinez, Carlos Martinez');

  // Checkout modal & confirmed order
  const [isCheckingOut, setIsCheckingOut] = useState<boolean>(false);
  const [confirmedBooking, setConfirmedBooking] = useState<RegistrationOrder | null>(null);

  // Active campus & track helpers
  const activeCampus = CAMPUS_LOCATIONS.find((c) => c.id === selectedCampusId) || CAMPUS_LOCATIONS[0];
  const activeTrack = CAMP_TRACKS.find((t) => t.id === selectedTrackId) || CAMP_TRACKS[0];

  // Pricing calculations
  const numWeeks = selectedWeeks.length || 1;
  const baseTuition = activeTrack.weeklyTuition * numWeeks;
  const materialsFee = selectedTrackId === 'robotics' ? 45 * numWeeks : selectedTrackId === 'theater' ? 35 * numWeeks : 25 * numWeeks;
  const earlyCareTotal = earlyCare ? 45 * numWeeks : 0;
  const extendedCareTotal = extendedCare ? 55 * numWeeks : 0;
  const subtotal = baseTuition + materialsFee + earlyCareTotal + extendedCareTotal;
  const siblingDiscount = isSecondCamper ? Math.round(subtotal * 0.15) : 0;
  const grandTotal = subtotal - siblingDiscount;

  const toggleWeek = (weekNum: number) => {
    if (selectedWeeks.includes(weekNum)) {
      if (selectedWeeks.length > 1) {
        setSelectedWeeks(selectedWeeks.filter((w) => w !== weekNum));
      }
    } else {
      setSelectedWeeks([...selectedWeeks, weekNum].sort());
    }
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCheckingOut(true);

    setTimeout(() => {
      const newBooking: RegistrationOrder = {
        bookingId: `CN-${Math.floor(100000 + Math.random() * 900000)}`,
        campusId: activeCampus.id,
        trackId: activeTrack.id,
        weekNumbers: selectedWeeks,
        camper: {
          id: `c-${Date.now().toString().slice(-4)}`,
          firstName,
          lastName,
          dob,
          age: 10,
          allergies: allergies ? [allergies] : [],
          medicalNotes: 'Certified fully vaccinated. Authorized for physical activities.',
          emergencyContact: {
            name: emergencyName,
            phone: emergencyPhone,
            relation: emergencyRelation,
          },
          pickupPin,
          authorizedPickups: authorizedPickups.split(',').map((s) => s.trim()),
        },
        earlyCare,
        extendedCare,
        baseTuition,
        materialsFee,
        extendedCareFee: earlyCareTotal + extendedCareTotal,
        siblingDiscount,
        totalAmount: grandTotal,
        createdAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        status: 'confirmed',
      };

      setConfirmedBooking(newBooking);
      setIsCheckingOut(false);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {}
    }, 1200);
  };

  return (
    <div className="space-y-10 pb-16">
      {/* Hero Welcome Banner */}
      <section className="relative rounded-sm overflow-hidden bg-[#1C1917] border border-[#292524] p-8 sm:p-10 text-white shadow-sm">
        <div className="relative z-10 max-w-3xl space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm bg-white/10 text-[#E7E2DA] border border-white/20 text-xs font-semibold uppercase tracking-wider mb-2">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
            <span>Vetted K-12 Campuses &bull; 100% Certified Staff</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-serif tracking-tight text-white leading-tight font-normal uppercase">
            Official Summer 2026 Camper Enrollment
          </h1>
          <p className="text-xs sm:text-sm text-[#D6CEBE] leading-relaxed">
            Reserve your child’s seat for Multi-Sport, Theater, or Robotics day camps. 
            Small group supervision, full air conditioning, and convenient neighborhood drop-off.
          </p>
          <div className="pt-3 flex flex-wrap gap-3 text-xs text-[#A8A29E]">
            <span className="flex items-center space-x-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
              <span>1:8 Staff-to-Camper Ratio</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
              <span>4-Digit Security PIN Release</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
              <span>15% Sibling Discount</span>
            </span>
          </div>
        </div>
      </section>

      {/* Booking Wizard Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left 8 Columns: Configuration & Forms */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Step 1: Select Partner Campus */}
          <section className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-bold">1</span>
                <h2 className="text-lg font-bold text-slate-900">Choose Host School Campus</h2>
              </div>
              <span className="text-xs text-slate-500 font-medium">All venues fully insured & inspected</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CAMPUS_LOCATIONS.map((campus) => {
                const isSelected = campus.id === selectedCampusId;
                return (
                  <div
                    key={campus.id}
                    onClick={() => setSelectedCampusId(campus.id)}
                    className={`cursor-pointer rounded-xl border-2 transition-all p-4 relative ${
                      isSelected
                        ? 'border-emerald-600 bg-emerald-50/40 shadow-sm ring-1 ring-emerald-600'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute top-3 right-3 bg-emerald-600 text-white rounded-full p-0.5">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                    )}
                    <h3 className="font-bold text-slate-900 text-sm">{campus.name}</h3>
                    <p className="text-xs text-slate-500 mt-0.5 flex items-center">
                      <MapPin className="h-3 w-3 mr-1 text-slate-400" />
                      {campus.city}, {campus.state} ({campus.district})
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {campus.facilities.map((fac) => (
                        <span key={fac.id} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium">
                          {fac.name.split(' ')[0]} {fac.type.replace('_', ' ')}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Step 2: Select Track */}
          <section className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-bold">2</span>
                <h2 className="text-lg font-bold text-slate-900">Select Specialty Track</h2>
              </div>
              <span className="text-xs text-slate-500 font-medium">Led by certified subject specialists</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {CAMP_TRACKS.map((track) => {
                const isSelected = track.id === selectedTrackId;
                return (
                  <div
                    key={track.id}
                    onClick={() => setSelectedTrackId(track.id)}
                    className={`cursor-pointer rounded-xl border-2 p-4 transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'border-emerald-600 bg-emerald-50/50 shadow-sm ring-1 ring-emerald-600'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${track.badgeBg}`}>
                          {track.ageRange}
                        </span>
                        {track.id === 'multi-sport' && <Trophy className="h-5 w-5 text-emerald-600" />}
                        {track.id === 'theater' && <Sparkles className="h-5 w-5 text-amber-500" />}
                        {track.id === 'robotics' && <Bot className="h-5 w-5 text-blue-600" />}
                      </div>
                      <h3 className="font-bold text-slate-900 text-sm mt-3">{track.title}</h3>
                      <p className="text-xs text-slate-600 mt-1 line-clamp-2">{track.tagline}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-slate-400">Weekly Tuition</span>
                      <span className="font-extrabold text-slate-900 text-base">${track.weeklyTuition}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selected Track Deep Highlights */}
            <div className="mt-5 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
              <h4 className="font-bold text-slate-900 uppercase tracking-wide text-[11px] mb-2">
                What’s Included in the {activeTrack.title}:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600">
                {activeTrack.keyHighlights.map((hl, idx) => (
                  <li key={idx} className="flex items-start space-x-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Step 3: Select Weeks & Extended Care */}
          <section className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-bold">3</span>
                <h2 className="text-lg font-bold text-slate-900">Select Summer Weeks & Daily Hours</h2>
              </div>
              <span className="text-xs text-slate-500 font-medium">Monday–Friday 8:30 AM – 3:30 PM</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((w) => {
                const isSelected = selectedWeeks.includes(w);
                const dates = [
                  'Jun 16-20', 'Jun 23-27', 'Jun 30-Jul 4', 'Jul 7-11',
                  'Jul 14-18', 'Jul 21-25', 'Jul 28-Aug 1', 'Aug 4-8'
                ][w - 1];

                return (
                  <button
                    key={w}
                    type="button"
                    onClick={() => toggleWeek(w)}
                    className={`py-3 px-3 rounded-lg border text-center transition-all ${
                      isSelected
                        ? 'border-emerald-600 bg-emerald-600 text-white font-bold shadow-sm'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-xs">Week {w}</div>
                    <div className={`text-[10px] mt-0.5 ${isSelected ? 'text-emerald-100' : 'text-slate-400'}`}>
                      {dates}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Extended care add-ons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-100">
              <label className="flex items-center space-x-3 p-3 rounded-lg border border-slate-200 bg-slate-50/50 cursor-pointer hover:bg-slate-50">
                <input
                  type="checkbox"
                  checked={earlyCare}
                  onChange={(e) => setEarlyCare(e.target.checked)}
                  className="rounded text-emerald-600 focus:ring-emerald-500 h-4 w-4"
                />
                <div>
                  <div className="text-xs font-bold text-slate-900">Early Drop-Off (07:30 AM)</div>
                  <div className="text-[11px] text-slate-500">+$45/week &bull; Supervised morning gym/reading</div>
                </div>
              </label>

              <label className="flex items-center space-x-3 p-3 rounded-lg border border-slate-200 bg-slate-50/50 cursor-pointer hover:bg-slate-50">
                <input
                  type="checkbox"
                  checked={extendedCare}
                  onChange={(e) => setExtendedCare(e.target.checked)}
                  className="rounded text-emerald-600 focus:ring-emerald-500 h-4 w-4"
                />
                <div>
                  <div className="text-xs font-bold text-slate-900">Extended Pick-Up (Until 06:00 PM)</div>
                  <div className="text-[11px] text-slate-500">+$55/week &bull; Free play & board games</div>
                </div>
              </label>
            </div>
          </section>

          {/* Step 4: Camper & Safety Intake Form */}
          <section className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-bold">4</span>
                <h2 className="text-lg font-bold text-slate-900">Camper Information & Safety Protocols</h2>
              </div>
              <span className="text-xs text-emerald-600 font-semibold flex items-center">
                <Lock className="h-3.5 w-3.5 mr-1" /> COPPA Compliant
              </span>
            </div>

            <form onSubmit={handleCheckout} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Camper First Name</label>
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Camper Last Name</label>
                  <input
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Date of Birth</label>
                  <input
                    type="date"
                    required
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Allergies, Dietary Restrictions & Medical Alerts
                </label>
                <input
                  type="text"
                  placeholder="e.g. Severe peanut allergy (EpiPen), lactose intolerant, asthma"
                  value={allergies}
                  onChange={(e) => setAllergies(e.target.value)}
                  className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                />
                <p className="text-[11px] text-slate-500 mt-1">
                  Flagged automatically in our Director Command Center during lunch and physical rotations.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Primary Emergency Contact</label>
                  <input
                    type="text"
                    required
                    value={emergencyName}
                    onChange={(e) => setEmergencyName(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={emergencyPhone}
                    onChange={(e) => setEmergencyPhone(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Relationship</label>
                  <input
                    type="text"
                    required
                    value={emergencyRelation}
                    onChange={(e) => setEmergencyRelation(e.target.value)}
                    className="w-full text-xs px-3 py-2 border border-slate-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <label className="block text-xs font-bold text-slate-900 mb-1 flex items-center">
                    <Lock className="h-3.5 w-3.5 text-emerald-600 mr-1" />
                    4-Digit Child Release PIN
                  </label>
                  <input
                    type="text"
                    maxLength={4}
                    required
                    value={pickupPin}
                    onChange={(e) => setPickupPin(e.target.value)}
                    className="w-28 text-center text-base tracking-widest font-mono font-bold px-3 py-1.5 border border-slate-300 rounded-lg bg-white"
                  />
                  <p className="text-[10px] text-slate-500 mt-1">
                    Guardians must recite this PIN to counselors before any child is released.
                  </p>
                </div>

                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <label className="block text-xs font-bold text-slate-900 mb-1">
                    Authorized Pickup Persons
                  </label>
                  <input
                    type="text"
                    required
                    value={authorizedPickups}
                    onChange={(e) => setAuthorizedPickups(e.target.value)}
                    className="w-full text-xs px-3 py-1.5 border border-slate-300 rounded-lg bg-white"
                    placeholder="Comma-separated names"
                  />
                  <p className="text-[10px] text-slate-500 mt-1">
                    Photo ID verified against this roster at afternoon gate dismissal.
                  </p>
                </div>
              </div>

              {/* Sibling discount toggle */}
              <div className="pt-2">
                <label className="flex items-center space-x-2 text-xs text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isSecondCamper}
                    onChange={(e) => setIsSecondCamper(e.target.checked)}
                    className="rounded text-emerald-600 focus:ring-emerald-500 h-4 w-4"
                  />
                  <span className="font-semibold text-slate-900">
                    Apply Sibling Discount (Enrolling 2nd or 3rd child - 15% discount applied)
                  </span>
                </label>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isCheckingOut}
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-700/20 transition-all flex items-center justify-center space-x-2"
                >
                  {isCheckingOut ? (
                    <span>Securing Campus Seat & Reserving Equipment...</span>
                  ) : (
                    <>
                      <span>Complete Registration &bull; ${grandTotal}</span>
                      <CheckCircle2 className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </section>
        </div>

        {/* Right 4 Columns: Summary Card & Instant Confirmation */}
        <div className="lg:col-span-4 space-y-6">
          {/* Order Summary Sticky Card */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm sticky top-24">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">
              Enrollment Summary
            </h3>

            <div className="space-y-3 text-xs pb-4 border-b border-slate-100">
              <div className="flex justify-between items-start">
                <span className="text-slate-500">Host Campus:</span>
                <span className="font-bold text-slate-900 text-right">{activeCampus.name}</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-slate-500">Track:</span>
                <span className="font-bold text-slate-900 text-right">{activeTrack.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Weeks Enrolled:</span>
                <span className="font-bold text-slate-900">
                  {selectedWeeks.map((w) => `W${w}`).join(', ')} ({numWeeks} wk{numWeeks > 1 ? 's' : ''})
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Camper:</span>
                <span className="font-bold text-slate-900">{firstName} {lastName}</span>
              </div>
            </div>

            {/* Financial Line Items */}
            <div className="space-y-2 py-4 border-b border-slate-100 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Tuition (${activeTrack.weeklyTuition} &times; {numWeeks} wk):</span>
                <span>${baseTuition}</span>
              </div>
              <div className="flex justify-between">
                <span>Curriculum & Hardware Kits:</span>
                <span>${materialsFee}</span>
              </div>
              {earlyCare && (
                <div className="flex justify-between text-slate-700">
                  <span>Early Drop-Off (07:30 AM):</span>
                  <span>+${earlyCareTotal}</span>
                </div>
              )}
              {extendedCare && (
                <div className="flex justify-between text-slate-700">
                  <span>Extended Day Care:</span>
                  <span>+${extendedCareTotal}</span>
                </div>
              )}
              {isSecondCamper && (
                <div className="flex justify-between text-emerald-600 font-semibold">
                  <span>Sibling Discount (15%):</span>
                  <span>-${siblingDiscount}</span>
                </div>
              )}
            </div>

            <div className="pt-4 flex justify-between items-baseline">
              <span className="text-xs font-bold text-slate-900 uppercase">Total Due:</span>
              <span className="text-2xl font-black text-slate-900">${grandTotal}</span>
            </div>

            <div className="mt-4 p-3 rounded-lg bg-emerald-50 border border-emerald-100 text-[11px] text-emerald-800 flex items-start space-x-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>Full refund guarantee up to 14 days before camp start date. Camp-in-a-Box materials included.</span>
            </div>
          </div>

          {/* If Booking Confirmed: Digital Access Pass */}
          {confirmedBooking && (
            <div className="bg-gradient-to-b from-slate-900 to-indigo-950 text-white rounded-xl border border-indigo-900 p-6 shadow-xl animate-fade-in">
              <div className="flex items-center justify-between border-b border-indigo-800/80 pb-3 mb-4">
                <div>
                  <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">Confirmed Admission</span>
                  <h4 className="text-sm font-bold text-white">Digital Camper Pass</h4>
                </div>
                <span className="text-xs font-mono bg-indigo-900/60 px-2 py-1 rounded text-indigo-200 border border-indigo-700">
                  {confirmedBooking.bookingId}
                </span>
              </div>

              <div className="text-center py-4 bg-white rounded-lg text-slate-900 shadow-inner mb-4">
                <QrCode className="h-28 w-28 mx-auto text-slate-900 mb-2" />
                <div className="text-xs font-mono font-bold tracking-wider text-slate-600">
                  PASS: {confirmedBooking.bookingId}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  Scan at School Main Entrance Gate
                </div>
              </div>

              <div className="space-y-2 text-xs text-indigo-200">
                <div className="flex justify-between">
                  <span className="text-indigo-300">Camper:</span>
                  <span className="font-bold text-white">{confirmedBooking.camper.firstName} {confirmedBooking.camper.lastName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-indigo-300">Campus:</span>
                  <span className="font-bold text-white">{activeCampus.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-indigo-300">Track:</span>
                  <span className="font-bold text-white">{activeTrack.title}</span>
                </div>
                <div className="flex justify-between bg-indigo-900/50 p-2 rounded border border-indigo-800">
                  <span className="text-amber-300 font-bold">Dismissal Security PIN:</span>
                  <span className="font-mono font-black text-amber-300 text-sm tracking-widest">{confirmedBooking.camper.pickupPin}</span>
                </div>
              </div>

              <button
                onClick={() => window.print()}
                className="mt-4 w-full py-2 px-3 rounded-lg bg-indigo-800 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center justify-center space-x-1.5 transition-all"
              >
                <Printer className="h-3.5 w-3.5" />
                <span>Print Camper Boarding Pass</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
