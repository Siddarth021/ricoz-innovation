'use client';

import React, { useState } from 'react';
import { 
  CAMP_TRACKS, 
  INVENTORY_BOXES 
} from '@/data/mockData';
import { TrackId } from '@/types';
import { 
  BookOpen, 
  Package, 
  Trophy, 
  Sparkles, 
  Bot, 
  Clock, 
  CheckCircle2, 
  Truck, 
  Calendar, 
  ShieldAlert,
  ChevronRight,
  Layers
} from 'lucide-react';

export const CurriculumHub: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<TrackId>('multi-sport');
  const [activeTab, setActiveTab] = useState<'syllabus' | 'logistics'>('syllabus');

  const currentTrackData = CAMP_TRACKS.find((t) => t.id === selectedTrack);

  // Day-by-day detailed breakdown
  const weeklyLessonPlans: Record<TrackId, { day: string; title: string; morning: string; afternoon: string; outcome: string }[]> = {
    'multi-sport': [
      {
        day: 'Monday',
        title: 'Foundations & Ball Mastery',
        morning: 'Dynamic soccer dribbling lanes, 1v1 shielding, and first-touch passing grids on the turf field.',
        afternoon: 'Basketball stationary ball-handling, crossover rhythm, and pivot mechanics in the gymnasium.',
        outcome: 'Core motor skills assessment and baseline sportsmanship team contracts.'
      },
      {
        day: 'Tuesday',
        title: 'Spatial Awareness & Tactical Spacing',
        morning: 'Soccer 3v3 small-sided games emphasizing give-and-go runs and defensive positioning.',
        afternoon: 'Basketball pick-and-roll basics, chest/bounce pass timing, and defensive slide conditioning.',
        outcome: 'Understanding passing triangles and cooperative team spacing.'
      },
      {
        day: 'Wednesday',
        title: 'Agility, Speed & Cross-Discipline Athletics',
        morning: 'Track & Field sprint mechanics, hurdles form, and shuttle relay speed testing.',
        afternoon: 'Ultimate frisbee forehand/backhand mechanics and non-contact flag rugby scrimmages.',
        outcome: 'Enhanced lateral agility, anaerobic endurance, and hand-eye coordination.'
      },
      {
        day: 'Thursday',
        title: 'Tournament Strategy & Leadership Formations',
        morning: 'Full-sided soccer match tactics, set-piece positioning, and goalkeeper penalty clinic.',
        afternoon: 'Full-court basketball tournament pool play with camper referee leadership rotations.',
        outcome: 'Game strategy execution, emotional regulation under pressure, and peer encouragement.'
      },
      {
        day: 'Friday',
        title: 'Grand Campus Olympic Games',
        morning: 'Multi-sport decathlon obstacle course, 4x100m team relays, and tug-of-war showcase.',
        afternoon: 'All-camp championship finals, medal ceremony with parents, and sportsmanship awards.',
        outcome: 'Celebration of athletic growth, resilience, and personal achievement.'
      }
    ],
    'theater': [
      {
        day: 'Monday',
        title: 'Auditions, Voice Projection & Ensemble Bonding',
        morning: 'Diaphragmatic breathing, tongue-twisters, stage presence games, and cold script readings.',
        afternoon: 'Character assignment, table reading of original 5-day musical production, script annotation.',
        outcome: 'Overcoming stage fright and building an inclusive ensemble culture.'
      },
      {
        day: 'Tuesday',
        title: 'Scene Blocking & Physical Comedy',
        morning: 'Stage geography (upstage, downstage, stage left/right), spatial blocking, and sightline awareness.',
        afternoon: 'Improvisation exercises ("Yes, And..." methodology) and slapstick comedic timing.',
        outcome: 'Physical confidence and expressive spatial movement.'
      },
      {
        day: 'Wednesday',
        title: 'Musical Choreography & Vocal Harmonies',
        morning: 'Ensemble song vocal coaching, pitch matching, and lyrical phrasing in the school auditorium.',
        afternoon: 'Dance choreography synchronization, step-touch routines, and musical cue transitions.',
        outcome: 'Cardio-vocal coordination and multi-part harmonic singing.'
      },
      {
        day: 'Thursday',
        title: 'Technical Rehearsals, Costumes & Stage Lighting',
        morning: 'Microphone technique with wireless head-mics, stage monitor feedback prevention, lighting cues.',
        afternoon: 'Costume fittings, prop handling protocols, and full dress rehearsal on the auditorium stage.',
        outcome: 'Mastery of backstage discipline, cue responsiveness, and technical stagecraft.'
      },
      {
        day: 'Friday',
        title: 'Grand Showcase Gala & Family Premiere',
        morning: 'Final cue polish, sound check, and green room calming exercises.',
        afternoon: '2:30 PM Grand Family Performance in the 350-seat auditorium with live stage lighting and ovation.',
        outcome: 'Performance under stage lights, public speaking confidence, and artistic pride.'
      }
    ],
    'robotics': [
      {
        day: 'Monday',
        title: 'Chassis Mechanics & Gear Ratios',
        morning: 'LEGO Spike Prime brick anatomy, structural triangulation, differential drive gear trains.',
        afternoon: 'Building 2-wheel drive rover base with caster wheels, motor torque vs RPM experiments.',
        outcome: 'Understanding torque multipliers, friction coefficients, and mechanical rigidity.'
      },
      {
        day: 'Tuesday',
        title: 'Ultrasonic Telemetry & Feedback Loops',
        morning: 'Wiring ultrasonic distance sensors and infrared color detectors to the intelligent hub.',
        afternoon: 'Programming conditional logic: obstacle avoidance loop, emergency braking, and wall following.',
        outcome: 'Mastery of sensor polling, while-loops, and automated decision branching.'
      },
      {
        day: 'Wednesday',
        title: 'Python Scripting & Micro:bit Telemetry',
        morning: 'Transitioning from block code to Python syntax: variables, functions, and accelerometer inputs.',
        afternoon: 'Micro:bit wireless mesh radio: broadcasting joystick signals to remote control rovers.',
        outcome: 'Text-based code comprehension, packet broadcasting, and radio telemetry.'
      },
      {
        day: 'Thursday',
        title: 'Autonomous Maze Navigation & Gripper Arms',
        morning: 'Engineering rack-and-pinion motorized claw grippers for object retrieval.',
        afternoon: 'Blind maze challenge: rovers must navigate a 12-turn campus arena without human intervention.',
        outcome: 'Iterative engineering debugging, algorithm optimization, and sensor calibration.'
      },
      {
        day: 'Friday',
        title: 'Robotics Grand Prix & Maker Expo',
        morning: 'Qualifying speed time trials and autonomous robot tug-of-war rounds.',
        afternoon: 'Grand Prix arena championship in the STEM lab with family spectators and digital code diplomas.',
        outcome: 'Engineering problem solving, project presentation skills, and computational thinking.'
      }
    ]
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Top Banner */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 text-white shadow-xl">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold uppercase tracking-wider mb-2">
            <BookOpen className="h-4 w-4" />
            <span>Turnkey Educational Blueprints & Equipment Supply Chain</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            Curriculum Roadmaps & Camp-in-a-Box Logistics
          </h1>
          <p className="text-xs text-slate-300 mt-2 leading-relaxed">
            Every camp track operates from a standardized 5-day curriculum with rigorous pedagogical outcomes. 
            All specialized gear is pre-packaged into serialized "Camp-in-a-Box" trunks and dispatched directly to 
            leased school venues 72 hours before session opening.
          </p>
        </div>

        {/* View Switcher */}
        <div className="flex space-x-2 mt-6 border-t border-slate-800 pt-4">
          <button
            onClick={() => setActiveTab('syllabus')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center space-x-2 ${
              activeTab === 'syllabus'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-900/40'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <BookOpen className="h-4 w-4" />
            <span>5-Day Track Syllabi</span>
          </button>

          <button
            onClick={() => setActiveTab('logistics')}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center space-x-2 ${
              activeTab === 'logistics'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-900/40'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Package className="h-4 w-4" />
            <span>Camp-in-a-Box Equipment Registry</span>
          </button>
        </div>
      </section>

      {/* Tab 1: 5-Day Track Syllabi */}
      {activeTab === 'syllabus' && (
        <div className="space-y-6">
          {/* Track selector buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {CAMP_TRACKS.map((track) => {
              const isSelected = track.id === selectedTrack;
              return (
                <button
                  key={track.id}
                  onClick={() => setSelectedTrack(track.id)}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    isSelected
                      ? 'border-emerald-600 bg-white shadow-md ring-1 ring-emerald-600'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-slate-900 text-sm">{track.title}</span>
                    {track.id === 'multi-sport' && <Trophy className="h-4 w-4 text-emerald-600" />}
                    {track.id === 'theater' && <Sparkles className="h-4 w-4 text-amber-500" />}
                    {track.id === 'robotics' && <Bot className="h-4 w-4 text-blue-600" />}
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-1">{track.subtitle}</p>
                </button>
              );
            })}
          </div>

          {/* Detailed 5-Day Plan Table */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
              <div>
                <h2 className="text-base font-bold text-slate-900">
                  {currentTrackData?.title} &mdash; 5-Day Progression
                </h2>
                <p className="text-xs text-slate-500">
                  Venue: {currentTrackData?.requiredFacilities.join(', ')}
                </p>
              </div>
              <span className="text-xs font-mono bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-bold">
                {currentTrackData?.ageRange}
              </span>
            </div>

            <div className="space-y-4">
              {weeklyLessonPlans[selectedTrack].map((plan, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="px-2.5 py-0.5 rounded bg-emerald-600 text-white font-bold text-xs">
                        {plan.day}
                      </span>
                      <h3 className="font-bold text-slate-900 text-sm">{plan.title}</h3>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Outcome: {plan.outcome}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-600 mt-3 pt-3 border-t border-slate-200/80">
                    <div>
                      <strong className="text-slate-900 block mb-0.5">Morning Session (09:00 - 12:00):</strong>
                      <p>{plan.morning}</p>
                    </div>
                    <div>
                      <strong className="text-slate-900 block mb-0.5">Afternoon Session (01:00 - 03:00):</strong>
                      <p>{plan.afternoon}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Camp-in-a-Box Logistics Registry */}
      {activeTab === 'logistics' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-base font-bold text-slate-900">
                  Serialized Camp-in-a-Box Dispatch Tracking
                </h2>
                <p className="text-xs text-slate-500">
                  Pre-configured hardware, safety stations, and curriculum trunks shipped directly to campus partners
                </p>
              </div>
              <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full">
                7 / 7 Trunks Delivered
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider text-[10px] border-b border-slate-100">
                  <tr>
                    <th className="py-3 px-4">Box Identifier</th>
                    <th className="py-3 px-3">Kit Title & Contents</th>
                    <th className="py-3 px-3">Track</th>
                    <th className="py-3 px-3">Units</th>
                    <th className="py-3 px-3">Asset Value</th>
                    <th className="py-3 px-4 text-right">Dispatch Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {INVENTORY_BOXES.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-mono font-bold text-slate-900">
                        {item.boxIdentifier}
                      </td>
                      <td className="py-3 px-3">
                        <div className="font-bold text-slate-900">{item.name}</div>
                        <div className="text-[10px] font-mono text-slate-400">SKU: {item.sku}</div>
                      </td>
                      <td className="py-3 px-3 capitalize">
                        <span className="px-2 py-0.5 rounded bg-slate-100 font-medium text-[10px]">
                          {item.track.replace('-', ' ')}
                        </span>
                      </td>
                      <td className="py-3 px-3 font-semibold">
                        {item.quantityShipped} Kits
                      </td>
                      <td className="py-3 px-3 font-mono">
                        ${(item.unitCost * item.quantityShipped).toLocaleString()}
                      </td>
                      <td className="py-3 px-4 text-right">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                          <CheckCircle2 className="h-3 w-3 mr-1" /> Delivered
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
