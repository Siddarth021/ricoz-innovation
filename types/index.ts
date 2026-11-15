export type TrackId = 'multi-sport' | 'theater' | 'robotics';

export interface CampTrack {
  id: TrackId;
  title: string;
  subtitle: string;
  tagline: string;
  ageRange: string;
  minAge: number;
  maxAge: number;
  color: string;
  badgeBg: string;
  accentColor: string;
  iconName: string;
  dailyCapacity: number;
  weeklyTuition: number;
  requiredFacilities: string[];
  keyHighlights: string[];
  equipmentKit: string;
  sampleDay: { time: string; activity: string; focus: string }[];
}

export interface FacilityZone {
  id: string;
  name: string;
  type: 'gymnasium' | 'auditorium' | 'stem_lab' | 'turf_field' | 'cafeteria' | 'classroom';
  sqft: number;
  capacity: number;
  features: string[];
}

export interface Campus {
  id: string;
  name: string;
  district: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  imageUrl: string;
  rating: number;
  reviewsCount: number;
  availableWeeks: number[];
  baseWeeklyLeaseRate: number;
  totalSummerCapacity: number;
  activeCampers: number;
  principalContact: string;
  coiVerified: boolean;
  facilities: FacilityZone[];
  supportedTracks: TrackId[];
}

export interface CamperProfile {
  id: string;
  firstName: string;
  lastName: string;
  dob: string;
  age: number;
  allergies: string[];
  medicalNotes: string;
  emergencyContact: {
    name: string;
    phone: string;
    relation: string;
  };
  pickupPin: string;
  authorizedPickups: string[];
}

export interface RegistrationOrder {
  bookingId: string;
  campusId: string;
  trackId: TrackId;
  weekNumbers: number[];
  camper: CamperProfile;
  earlyCare: boolean;
  extendedCare: boolean;
  baseTuition: number;
  materialsFee: number;
  extendedCareFee: number;
  siblingDiscount: number;
  totalAmount: number;
  createdAt: string;
  status: 'confirmed' | 'pending' | 'cancelled';
}

export interface AttendanceRecord {
  id: string;
  camperId: string;
  camperName: string;
  trackId: TrackId;
  campusId: string;
  checkInTime?: string;
  checkOutTime?: string;
  status: 'present' | 'checked_out' | 'absent' | 'late_expected';
  authorizedPickupBy?: string;
  pinVerified: boolean;
  medicalFlag?: string;
}

export interface StaffMember {
  id: string;
  name: string;
  role: 'Lead Director' | 'Head Coach' | 'Theater Director' | 'Robotics Instructor' | 'Junior Counselor';
  assignedTrack: TrackId | 'all';
  campusId: string;
  certifications: string[];
  assignedCampersCount: number;
  maxRatio: number;
}

export interface IncidentReport {
  id: string;
  timestamp: string;
  camperName: string;
  campusId: string;
  severity: 'low' | 'medium' | 'high';
  type: 'minor_scrape' | 'allergy_reaction' | 'equipment_issue' | 'heat_exhaustion' | 'behavioral';
  description: string;
  actionsTaken: string;
  reportedBy: string;
  parentNotified: boolean;
}

export interface InventoryItem {
  id: string;
  sku: string;
  name: string;
  track: TrackId | 'general';
  quantityShipped: number;
  unitCost: number;
  boxIdentifier: string;
  status: 'delivered' | 'in_transit' | 'restocked';
}

export interface CompetitorComparison {
  name: string;
  modelType: string;
  realEstateCost: string;
  weeklyTuition: string;
  tracksOffered: string[];
  technologyOS: string;
  staffRatio: string;
  operationalBottleneck: string;
}
