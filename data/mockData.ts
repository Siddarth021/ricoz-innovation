import { CampTrack, Campus, StaffMember, AttendanceRecord, IncidentReport, InventoryItem, CompetitorComparison } from '@/types';

export const CAMP_TRACKS: CampTrack[] = [
  {
    id: 'multi-sport',
    title: 'Multi-Sport Athletic Academy',
    subtitle: 'Soccer, Basketball, Agility Ladders, Flag Football & Olympic Day',
    tagline: 'Building athletic confidence, tactical IQ, and sportsmanship on campus fields.',
    ageRange: 'Ages 6–14',
    minAge: 6,
    maxAge: 14,
    color: 'from-emerald-500 to-teal-700',
    badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    accentColor: '#10b981',
    iconName: 'Trophy',
    dailyCapacity: 60,
    weeklyTuition: 425,
    requiredFacilities: ['Air-Conditioned Indoor Gymnasium', 'Regulation Turf Soccer Field', 'Shaded Hydration Stations'],
    keyHighlights: [
      'Daily multi-sport rotation: Soccer drills, 3v3 basketball, agility obstacle courses, and flag rugby',
      'Sportsmanship & resilience curriculum based on positive youth coaching methodologies',
      'Friday Campus Olympic Games with medals, team relays, and family spectator access',
      'Certified athletic trainers and collegiate athlete counselors with 1:8 supervision ratios'
    ],
    equipmentKit: 'Kit Box MS-40: 24 match balls, 60 agility cones, pop-up goals, pinnies, digital stopwatches, first aid kit',
    sampleDay: [
      { time: '08:30 - 09:00', activity: 'Morning Check-In & Free Play Warmup', focus: 'Agility drills & dynamic stretching' },
      { time: '09:00 - 10:30', activity: 'Sport Station 1: Soccer Tactical Clinic', focus: 'First-touch ball mastery & small-sided scrimmages' },
      { time: '10:30 - 11:00', activity: 'Nutritional Snack Break & Hydration', focus: 'Cooling zone under shade canopy' },
      { time: '11:00 - 12:30', activity: 'Sport Station 2: Basketball Fundamentals', focus: 'Triple-threat stance, pass-and-cut, shooting form' },
      { time: '12:30 - 01:30', activity: 'Cafeteria Lunch & Chalk Talk', focus: 'Video review & sportsmanship leadership circle' },
      { time: '01:30 - 02:45', activity: 'Team Relays & Capture the Flag', focus: 'Cardiovascular endurance & cooperative strategy' },
      { time: '02:45 - 03:30', activity: 'Daily All-Star Ceremony & Dismissal', focus: 'Recognition of effort, integrity, and peer support' }
    ]
  },
  {
    id: 'theater',
    title: 'Creative Arts & Musical Theater Workshop',
    subtitle: 'Stage Acting, Vocal Projection, Improv Comedy & Friday Showcase Gala',
    tagline: 'Transforming school auditoriums into premier youth Broadway stages.',
    ageRange: 'Ages 6–15',
    minAge: 6,
    maxAge: 15,
    color: 'from-amber-500 to-rose-600',
    badgeBg: 'bg-amber-50 text-amber-800 border-amber-200',
    accentColor: '#f59e0b',
    iconName: 'Sparkles',
    dailyCapacity: 45,
    weeklyTuition: 460,
    requiredFacilities: ['School Auditorium with Stage & Lighting', 'Drama / Music Classroom', 'Dressing / Prop Storage Room'],
    keyHighlights: [
      'Full stage production rehearsed in 5 days with an original musical theater script',
      'Daily improv comedy, vocal warmups, stage combat basics, and expressive movement',
      'Costume craft and mini set-design workshop guided by theater arts graduates',
      'Friday 2:30 PM Grand Family Gala Showcase in the campus theater with professional stage lighting'
    ],
    equipmentKit: 'Kit Box TH-20: 8 wireless head-mics, portable PA stage monitors, script binders, prop chest, stage gaffer tape',
    sampleDay: [
      { time: '08:30 - 09:00', activity: 'Cast Call & Vocal Warmups', focus: 'Diaphragmatic breathing, tongue-twisters, projection' },
      { time: '09:00 - 10:30', activity: 'Scene Study & Script Rehearsal', focus: 'Character motivation, blocking, and line memorization' },
      { time: '10:30 - 11:00', activity: 'Cast Break & Greenroom Refreshments', focus: 'Social bonding & vocal rest' },
      { time: '11:00 - 12:30', activity: 'Musical Theater Choreography', focus: 'Ensemble dance routine & stage positioning' },
      { time: '12:30 - 01:30', activity: 'Lunch & Theater History Trivia', focus: 'Broadway clips analysis in auditorium' },
      { time: '01:30 - 02:45', activity: 'Set Painting & Prop Fabrication', focus: 'Creative hands-on craft with safe non-toxic paints' },
      { time: '02:45 - 03:30', activity: 'Full Act Run-Through & Notes', focus: 'Cue transitions & curtain call preparation' }
    ]
  },
  {
    id: 'robotics',
    title: 'Robotics, AI & Applied STEM Labs',
    subtitle: 'LEGO Spike Prime, Micro:bit Sensors, Autonomous Rovers & Python Logic',
    tagline: 'Leveraging campus computer science labs for hands-on physical computing.',
    ageRange: 'Ages 7–15',
    minAge: 7,
    maxAge: 15,
    color: 'from-blue-600 to-indigo-800',
    badgeBg: 'bg-blue-50 text-blue-800 border-blue-200',
    accentColor: '#3b82f6',
    iconName: 'Bot',
    dailyCapacity: 40,
    weeklyTuition: 495,
    requiredFacilities: ['Computer Lab with High-Speed Wi-Fi', 'Makerspace / Science Lab with Tables', 'Indoor Flight / Arena Testing Zone'],
    keyHighlights: [
      '1:1 hardware access with LEGO Spike Prime robotics kits and BBC Micro:bit microcontrollers',
      'Autonomous navigation algorithms: ultrasonic obstacle avoidance, line-following, and claw grippers',
      'Introduction to Python algorithmic logic and game prototyping',
      'Friday Robotics Grand Prix Tournament and interactive camper portfolio exhibition'
    ],
    equipmentKit: 'Kit Box RB-15: 20 LEGO Spike Prime sets, 20 Chromebooks/tablets, competition arena mats, sensor modules, spare servos',
    sampleDay: [
      { time: '08:30 - 09:00', activity: 'Lab Boot & Daily Engineering Brief', focus: 'Architecture overview of daily mechanical challenge' },
      { time: '09:00 - 10:30', activity: 'Chassis Engineering & Gear Trains', focus: 'Torque vs speed, structural rigidity, motor mounting' },
      { time: '10:30 - 11:00', activity: 'Outdoor Brain Break & Snack', focus: 'Physical recharge away from screens' },
      { time: '11:00 - 12:30', activity: 'Firmware Coding & Sensor Integration', focus: 'PID line tracking logic and ultrasonic distance loops' },
      { time: '12:30 - 01:30', activity: 'Cafeteria Lunch & Tech Tech-Talk', focus: 'Autonomous vehicles & Boston Dynamics robotics review' },
      { time: '01:30 - 02:45', activity: 'Arena Trials & Debugging Sprint', focus: 'Iterative testing on the competition arena mat' },
      { time: '02:45 - 03:30', activity: 'Time Trial Leaderboard & Showcase', focus: 'Telemetry logging & code push to camper cloud repo' }
    ]
  }
];

export const CAMPUS_LOCATIONS: Campus[] = [
  {
    id: 'campus-oakridge',
    name: 'Oakridge Prep Academy',
    district: 'Silicon Valley Unified School District',
    address: '4200 Valley Green Blvd',
    city: 'Palo Alto',
    state: 'CA',
    zipCode: '94306',
    imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
    rating: 4.9,
    reviewsCount: 142,
    availableWeeks: [1, 2, 3, 4, 5, 6, 7, 8],
    baseWeeklyLeaseRate: 4800,
    totalSummerCapacity: 145,
    activeCampers: 138,
    principalContact: 'Dr. Rebecca Vance (COO, Oakridge Prep)',
    coiVerified: true,
    supportedTracks: ['multi-sport', 'theater', 'robotics'],
    facilities: [
      { id: 'f-1', name: 'Main Air-Cooled Gymnasium', type: 'gymnasium', sqft: 11000, capacity: 200, features: ['Hardwood courts', 'Retractable bleachers', 'Scoreboard'] },
      { id: 'f-2', name: 'Performing Arts Theater', type: 'auditorium', sqft: 7500, capacity: 350, features: ['Fly loft stage', 'ETC lighting console', 'Wireless mic array'] },
      { id: 'f-3', name: 'Turing Computer Lab & Makerspace', type: 'stem_lab', sqft: 2200, capacity: 36, features: ['32 iMac workstations', 'Gigabit fiber', '3D printer bank'] },
      { id: 'f-4', name: 'Regulation FIFA Turf Field', type: 'turf_field', sqft: 65000, capacity: 150, features: ['Pro-turf', 'Shaded dugouts', 'Perimeter safety netting'] }
    ]
  },
  {
    id: 'campus-westlake',
    name: 'Westlake STEM Charter Campus',
    district: 'Lakeview County Public Schools',
    address: '1850 Lakeshore Parkway',
    city: 'Bellevue',
    state: 'WA',
    zipCode: '98004',
    imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
    rating: 4.85,
    reviewsCount: 98,
    availableWeeks: [1, 2, 3, 4, 5, 6, 7],
    baseWeeklyLeaseRate: 4400,
    totalSummerCapacity: 130,
    activeCampers: 122,
    principalContact: 'Marcus Thorne (Director of Facilities)',
    coiVerified: true,
    supportedTracks: ['multi-sport', 'theater', 'robotics'],
    facilities: [
      { id: 'f-5', name: 'Science & Robotics Wing (Rooms 102-104)', type: 'stem_lab', sqft: 3200, capacity: 45, features: ['Modular lab benches', 'High-current power drops', 'Safety eye-wash'] },
      { id: 'f-6', name: 'Blackbox Drama Studio', type: 'auditorium', sqft: 3000, capacity: 120, features: ['Acoustic wall paneling', 'LED stage spots', 'Costume wardrobe'] },
      { id: 'f-7', name: 'Multi-Purpose Athletic Arena', type: 'gymnasium', sqft: 8500, capacity: 160, features: ['Dual volleyball/basketball courts', 'Locker rooms'] }
    ]
  },
  {
    id: 'campus-stjude',
    name: 'St. Jude Heritage Academy',
    district: 'Independent Diocesan School Board',
    address: '910 Saint Jude Way',
    city: 'Austin',
    state: 'TX',
    zipCode: '78704',
    imageUrl: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',
    rating: 4.92,
    reviewsCount: 116,
    availableWeeks: [2, 3, 4, 5, 6, 7, 8],
    baseWeeklyLeaseRate: 4200,
    totalSummerCapacity: 140,
    activeCampers: 135,
    principalContact: 'Sister Teresa Maria (Principal)',
    coiVerified: true,
    supportedTracks: ['multi-sport', 'theater', 'robotics'],
    facilities: [
      { id: 'f-8', name: 'Gothic Memorial Auditorium', type: 'auditorium', sqft: 6000, capacity: 300, features: ['Proscenium arch', 'Yamaha sound board', 'Backstage greenrooms'] },
      { id: 'f-9', name: 'Oak Tree Shaded Athletic Field', type: 'turf_field', sqft: 48000, capacity: 120, features: ['Natural grass pitch', 'Covered pavilions', 'Misting stations'] },
      { id: 'f-10', name: 'Engineering Discovery Center', type: 'stem_lab', sqft: 2000, capacity: 32, features: ['Dual 75" interactive smartboards', 'Robotics test arena'] }
    ]
  },
  {
    id: 'campus-bayside',
    name: 'Bayside Coastal High School',
    district: 'Peninsula Unified District',
    address: '330 Marina Boulevard',
    city: 'San Mateo',
    state: 'CA',
    zipCode: '94401',
    imageUrl: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=1200&q=80',
    rating: 4.78,
    reviewsCount: 84,
    availableWeeks: [1, 2, 3, 4, 5, 6],
    baseWeeklyLeaseRate: 5100,
    totalSummerCapacity: 160,
    activeCampers: 148,
    principalContact: 'Gregory Chen (Chief Business Officer)',
    coiVerified: true,
    supportedTracks: ['multi-sport', 'theater', 'robotics'],
    facilities: [
      { id: 'f-11', name: 'Fieldhouse & Indoor Track', type: 'gymnasium', sqft: 14000, capacity: 250, features: ['4-lane 200m track', '3 full basketball courts'] },
      { id: 'f-12', name: 'Center for Media & Dramatic Arts', type: 'auditorium', sqft: 8000, capacity: 420, features: ['Dolby 5.1 surround sound', 'Motorized scenery rigging'] },
      { id: 'f-13', name: 'Innovation Hub 200', type: 'stem_lab', sqft: 2500, capacity: 40, features: ['40 Chromebook docks', 'Soldering fume extractors', 'Rapid prototype table'] }
    ]
  }
];

export const INITIAL_ATTENDANCE: AttendanceRecord[] = [
  {
    id: 'att-1',
    camperId: 'c-101',
    camperName: 'Liam Martinez',
    trackId: 'robotics',
    campusId: 'campus-oakridge',
    checkInTime: '08:24 AM',
    status: 'present',
    pinVerified: true,
    medicalFlag: 'Asthma Inhaler in backpack'
  },
  {
    id: 'att-2',
    camperId: 'c-102',
    camperName: 'Sophia Jenkins',
    trackId: 'theater',
    campusId: 'campus-oakridge',
    checkInTime: '08:31 AM',
    status: 'present',
    pinVerified: true
  },
  {
    id: 'att-3',
    camperId: 'c-103',
    camperName: 'Aarav Patel',
    trackId: 'multi-sport',
    campusId: 'campus-oakridge',
    checkInTime: '08:15 AM',
    status: 'present',
    pinVerified: true,
    medicalFlag: 'Severe Peanut Allergy (EpiPen with Director)'
  },
  {
    id: 'att-4',
    camperId: 'c-104',
    camperName: 'Maya Lin',
    trackId: 'robotics',
    campusId: 'campus-oakridge',
    checkInTime: '08:42 AM',
    status: 'present',
    pinVerified: true
  },
  {
    id: 'att-5',
    camperId: 'c-105',
    camperName: 'Noah Washington',
    trackId: 'multi-sport',
    campusId: 'campus-oakridge',
    status: 'late_expected',
    pinVerified: false
  },
  {
    id: 'att-6',
    camperId: 'c-106',
    camperName: 'Emma Watson-Cho',
    trackId: 'theater',
    campusId: 'campus-oakridge',
    checkInTime: '08:28 AM',
    status: 'present',
    pinVerified: true
  },
  {
    id: 'att-7',
    camperId: 'c-107',
    camperName: 'Ethan Brooks',
    trackId: 'multi-sport',
    campusId: 'campus-oakridge',
    checkInTime: '08:35 AM',
    status: 'present',
    pinVerified: true
  },
  {
    id: 'att-8',
    camperId: 'c-108',
    camperName: 'Zoe Kravitz-Miller',
    trackId: 'robotics',
    campusId: 'campus-oakridge',
    checkInTime: '08:18 AM',
    status: 'present',
    pinVerified: true
  }
];

export const STAFF_ROSTER: StaffMember[] = [
  {
    id: 'st-1',
    name: 'Sarah Henderson, M.Ed.',
    role: 'Lead Director',
    assignedTrack: 'all',
    campusId: 'campus-oakridge',
    certifications: ['State Administrator Credential', 'Pediatric CPR/AED', 'EpiPen Admin Certified'],
    assignedCampersCount: 138,
    maxRatio: 150
  },
  {
    id: 'st-2',
    name: 'Coach Marcus Vance',
    role: 'Head Coach',
    assignedTrack: 'multi-sport',
    campusId: 'campus-oakridge',
    certifications: ['US Soccer National C License', 'NFHS Concussion Protocol', 'Youth Strength & Conditioning'],
    assignedCampersCount: 54,
    maxRatio: 60
  },
  {
    id: 'st-3',
    name: 'Elena Rostova, BFA',
    role: 'Theater Director',
    assignedTrack: 'theater',
    campusId: 'campus-oakridge',
    certifications: ['Actors Equity Assoc.', 'Stage Combat Safety Certified', 'First Aid / CPR'],
    assignedCampersCount: 42,
    maxRatio: 45
  },
  {
    id: 'st-4',
    name: 'David K. O’Connor, B.S. CS',
    role: 'Robotics Instructor',
    assignedTrack: 'robotics',
    campusId: 'campus-oakridge',
    certifications: ['LEGO Education Certified Master Trainer', 'Python Institute PCAP', 'Youth STEM Mentor'],
    assignedCampersCount: 38,
    maxRatio: 40
  },
  {
    id: 'st-5',
    name: 'Jordan Bell (Collegiate Athlete)',
    role: 'Junior Counselor',
    assignedTrack: 'multi-sport',
    campusId: 'campus-oakridge',
    certifications: ['NCAA Athlete', 'Red Cross First Aid'],
    assignedCampersCount: 18,
    maxRatio: 20
  }
];

export const INCIDENT_LOGS: IncidentReport[] = [
  {
    id: 'inc-901',
    timestamp: 'Today, 10:45 AM',
    camperName: 'Aarav Patel',
    campusId: 'campus-oakridge',
    severity: 'low',
    type: 'minor_scrape',
    description: 'Scraped right knee sliding into second base on the turf field during kickball. No deep laceration.',
    actionsTaken: 'Washed with saline, applied antiseptic ointment and sterile adhesive bandage. Camper resumed play happily.',
    reportedBy: 'Coach Marcus Vance',
    parentNotified: true
  },
  {
    id: 'inc-902',
    timestamp: 'Yesterday, 02:15 PM',
    camperName: 'Maya Lin',
    campusId: 'campus-oakridge',
    severity: 'low',
    type: 'equipment_issue',
    description: 'Micro:bit battery pack clip cracked during rover chassis assembly.',
    actionsTaken: 'Replaced immediately from backup spare parts inventory bin RB-15. Original tagged for repair.',
    reportedBy: 'David K. O’Connor',
    parentNotified: false
  }
];

export const INVENTORY_BOXES: InventoryItem[] = [
  { id: 'inv-1', sku: 'KIT-MS40-A', name: 'Multi-Sport Championship Box (Balls, Cones, Pinnies, Whistles)', track: 'multi-sport', quantityShipped: 4, unitCost: 380, boxIdentifier: 'MS-BOX-01', status: 'delivered' },
  { id: 'inv-2', sku: 'KIT-MS40-B', name: 'Pop-Up Regulation Goals & Boundary Flags', track: 'multi-sport', quantityShipped: 6, unitCost: 190, boxIdentifier: 'MS-BOX-02', status: 'delivered' },
  { id: 'inv-3', sku: 'KIT-TH20-A', name: 'Wireless Stage Microphones & UHF Receiver Array', track: 'theater', quantityShipped: 2, unitCost: 1250, boxIdentifier: 'TH-BOX-01', status: 'delivered' },
  { id: 'inv-4', sku: 'KIT-TH20-B', name: 'Broadway Costume Wardrobe & Stage Makeup Trunk', track: 'theater', quantityShipped: 3, unitCost: 450, boxIdentifier: 'TH-BOX-02', status: 'delivered' },
  { id: 'inv-5', sku: 'KIT-RB15-A', name: 'LEGO Spike Prime Core Education Sets (20 Units)', track: 'robotics', quantityShipped: 20, unitCost: 399, boxIdentifier: 'RB-BOX-01', status: 'delivered' },
  { id: 'inv-6', sku: 'KIT-RB15-B', name: 'BBC Micro:bit v2 Sensor Packs & Servo Expansion Shields', track: 'robotics', quantityShipped: 30, unitCost: 45, boxIdentifier: 'RB-BOX-02', status: 'delivered' },
  { id: 'inv-7', sku: 'KIT-MED-01', name: 'Campus Safety & Rapid Trauma First Aid Station', track: 'general', quantityShipped: 2, unitCost: 220, boxIdentifier: 'GEN-MED-01', status: 'delivered' }
];

export const COMPETITOR_BENCHMARK: CompetitorComparison[] = [
  {
    name: 'Camp Galileo (Galileo Learning)',
    modelType: 'Pop-up day camp on school campuses',
    realEstateCost: '$4,000–$6,500 / week / school',
    weeklyTuition: '$540–$620 / week',
    tracksOffered: ['STEAM & Design Thinking projects'],
    technologyOS: 'Legacy custom CMS + Salesforce',
    staffRatio: '1:8 ratio (certified teachers)',
    operationalBottleneck: 'Single design curriculum; high teacher payroll overhead; limited sports and performing arts breadth'
  },
  {
    name: 'Steve & Kate’s Camp (Bright Horizons)',
    modelType: 'Free-choice open format on private schools',
    realEstateCost: '$5,000–$7,500 / week',
    weeklyTuition: '$525 / week (or $115/day pass)',
    tracksOffered: ['Free-choice maker, baking, music, arcade'],
    technologyOS: 'Custom flexible pass check-in web app',
    staffRatio: '1:9 ratio',
    operationalBottleneck: 'Unstructured daily schedule leads to parent churn when older kids seek rigorous coaching in sports or robotics'
  },
  {
    name: 'KidzToPros',
    modelType: 'Contracted district school enrichment',
    realEstateCost: 'Revenue share (15–25% to district)',
    weeklyTuition: '$395–$475 / week',
    tracksOffered: ['STEM, Sports, Digital Arts'],
    technologyOS: 'Fragmented SaaS portals + manual spreadsheets',
    staffRatio: '1:10 to 1:12 ratio',
    operationalBottleneck: 'Rapid multi-state scaling led to severe staff turnover, equipment kit shortages, and inconsistent site director execution'
  },
  {
    name: 'iD Tech Camps',
    modelType: 'University campus / school lab rentals',
    realEstateCost: '$8,000–$14,000 / week (heavy university tech lease)',
    weeklyTuition: '$999–$1,499 / week',
    tracksOffered: ['Pure coding, Minecraft, AI robotics'],
    technologyOS: 'Standard enterprise registration portal',
    staffRatio: '1:8 ratio',
    operationalBottleneck: 'Extreme luxury price ceiling locks out middle-income families; zero athletic or performing arts balance'
  },
  {
    name: 'CampNexus (Our Operating System)',
    modelType: 'Turnkey K-12 campus pop-up multi-track operator',
    realEstateCost: '$4,200–$4,800 / week (fixed + custodial rebate)',
    weeklyTuition: '$425–$495 / week (accessible premium)',
    tracksOffered: ['Multi-Sport Academy', 'Musical Theater', 'Robotics & STEM Labs'],
    technologyOS: 'Full-stack CampNexus OS (Guardian PIN, Live Ratio Guard, Asset Tracking)',
    staffRatio: '1:8 juniors (6-9), 1:10 seniors (10-15)',
    operationalBottleneck: 'Solved: Pre-staged Camp-in-a-Box logistics, automated ratio safety alerts, and standardized campus lease contract engine'
  }
];
