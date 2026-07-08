import {
  Sparkles,
  Building2,
  Brush,
  Hammer,
  Bug,
  Wind,
  Droplets,
  Layers,
  Sun,
  Home,
  type LucideIcon,
} from "lucide-react";

import residentialImg from "@/assets/services/residential.jpg";
import commercialImg from "@/assets/services/commercial.jpg";
import deepImg from "@/assets/services/deep.jpg";
import janitorialImg from "@/assets/services/janitorial.jpg";
import postConstructionImg from "@/assets/services/post-construction.jpg";
import pestImg from "@/assets/services/pest.jpg";
import fumigationImg from "@/assets/services/fumigation.jpg";
import moldImg from "@/assets/services/mold.jpg";
import floorImg from "@/assets/services/floor.jpg";
import facadeImg from "@/assets/services/facade.jpg";

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  short: string;
  description: string;
  benefits: string[];
  process: string[];
  features: string[];
  industries: string[];
  image: string;
};

export const services: Service[] = [
  {
    slug: "residential-cleaning",
    title: "Residential Cleaning",
    icon: Home,
    short: "Spotless homes with eco-safe products that protect your family.",
    description:
      "Comprehensive cleaning programs designed for homes, apartments and luxury residences with attention to every surface.",
    benefits: ["Healthier indoor air", "Allergen reduction", "Time savings", "Eco-safe products"],
    process: ["Walkthrough", "Custom plan", "Professional cleaning", "Quality check"],
    features: ["Vetted staff", "Weekly/monthly plans", "Pet-safe formulas", "Satisfaction guarantee"],
    industries: ["Homes", "Apartments", "Estates"],
  },
  {
    slug: "commercial-cleaning",
    title: "Commercial Cleaning",
    icon: Building2,
    short: "Reliable cleaning programs for offices, retail and corporate spaces.",
    description:
      "Scalable commercial programs that keep your business presentable, productive and compliant.",
    benefits: ["Brand impression", "Healthier staff", "Reduced absences", "Compliance ready"],
    process: ["Site survey", "Scope agreement", "Daily/weekly service", "Performance reports"],
    features: ["After-hours service", "Trained crews", "Insurance covered", "KPI tracking"],
    industries: ["Offices", "Retail", "Banks", "Schools"],
  },
  {
    slug: "deep-cleaning",
    title: "Deep Cleaning",
    icon: Sparkles,
    short: "Restore tired spaces with intensive top-to-bottom deep cleans.",
    description:
      "Detail-driven deep cleaning that reaches every corner, removing buildup conventional cleaning leaves behind.",
    benefits: ["Refresh interiors", "Remove buildup", "Sanitize surfaces", "Boost hygiene"],
    process: ["Inspection", "Pre-treatment", "Deep clean", "Final review"],
    features: ["HEPA vacuuming", "Hospital-grade disinfectants", "Detail rooms", "Move-in ready"],
    industries: ["Homes", "Offices", "Hotels"],
  },
  {
    slug: "janitorial",
    title: "Janitorial Services",
    icon: Brush,
    short: "Daily and recurring janitorial support tailored to your facility.",
    description:
      "Dedicated janitorial teams that keep facilities consistently clean with predictable, audit-ready service.",
    benefits: ["Consistent quality", "Lower turnover", "Audit ready", "Cost predictable"],
    process: ["Needs analysis", "Team assignment", "Daily service", "Monthly review"],
    features: ["On-site supervision", "Restocked supplies", "Logbooks", "Emergency response"],
    industries: ["Hospitals", "Schools", "Government", "Warehouses"],
  },
  {
    slug: "post-construction",
    title: "Post-Construction Cleaning",
    icon: Hammer,
    short: "Hand over a polished, dust-free site ready for occupancy.",
    description:
      "Rough, detail and final-stage post-construction cleans that remove dust, debris and construction residue.",
    benefits: ["Faster handover", "Protect finishes", "Safe occupancy", "Polished look"],
    process: ["Debris removal", "Surface clean", "Detail clean", "Final inspection"],
    features: ["Window detailing", "Floor polish", "Air clearance", "Site safety"],
    industries: ["Construction", "Real estate", "Architects"],
  },
  {
    slug: "pest-control",
    title: "Pest Control",
    icon: Bug,
    short: "Integrated pest management for lasting protection.",
    description:
      "Targeted treatments and ongoing monitoring that eliminate pests and keep them from returning.",
    benefits: ["Lasting protection", "Family safe", "Discreet service", "Guaranteed results"],
    process: ["Inspection", "Treatment plan", "Application", "Follow-up"],
    features: ["IPM approach", "Low-toxicity options", "Same-day service", "Written warranty"],
    industries: ["Homes", "Restaurants", "Hotels", "Warehouses"],
  },
  {
    slug: "fumigation",
    title: "Fumigation",
    icon: Wind,
    short: "Whole-space fumigation that eliminates infestations safely.",
    description:
      "Certified fumigation for severe infestations with strict safety protocols and clearance procedures.",
    benefits: ["Total eradication", "Certified safe", "Quick re-entry", "Documented"],
    process: ["Risk assessment", "Sealing", "Fumigation", "Aeration & clearance"],
    features: ["Licensed technicians", "PPE compliant", "Certificate issued", "24/7 support"],
    industries: ["Warehouses", "Hotels", "Hospitals", "Industrial"],
  },
  {
    slug: "mold-remediation",
    title: "Mold Inspection & Remediation",
    icon: Droplets,
    short: "Detect, contain and remove mold to protect your indoor air.",
    description:
      "Lab-backed inspection, containment, removal and post-remediation verification of mold issues.",
    benefits: ["Healthier air", "Prevent spread", "Lab verified", "Property protected"],
    process: ["Inspection", "Containment", "Remediation", "Clearance test"],
    features: ["HEPA filtration", "Antimicrobial treatment", "Air quality testing", "Reports"],
    industries: ["Homes", "Hospitals", "Hotels", "Offices"],
  },
  {
    slug: "floor-restoration",
    title: "Floor Restoration",
    icon: Layers,
    short: "Revive marble, terrazzo, wood and concrete floors to a like-new finish.",
    description:
      "Professional grinding, polishing, sealing and restoration for premium flooring surfaces.",
    benefits: ["Restore shine", "Extend lifespan", "Slip resistance", "Easy maintenance"],
    process: ["Assessment", "Repair", "Polish", "Seal & protect"],
    features: ["Diamond polishing", "Crystallization", "Sealants", "Maintenance plans"],
    industries: ["Hotels", "Offices", "Retail", "Homes"],
  },
  {
    slug: "facade-cleaning",
    title: "Facade Cleaning",
    icon: Sun,
    short: "High-rise facade and glass cleaning by certified professionals.",
    description:
      "Rope-access and lift-based facade cleaning that restores curb appeal for high-rise buildings.",
    benefits: ["Brand image", "Safer access", "Glass clarity", "Compliance"],
    process: ["Survey", "Method statement", "Cleaning", "Inspection"],
    features: ["Rope access", "Insurance covered", "Eco detergents", "Risk assessed"],
    industries: ["Commercial towers", "Hotels", "Malls", "Offices"],
  },
];
