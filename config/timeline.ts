import { IconType } from "react-icons";
import { IoBusiness, IoSchool, IoTrain, IoTrophy } from "react-icons/io5";

export interface CareerTimelineItem {
  title: string;
  subTitle?: string;
  date?: string;
  location?: string;
  company?: string;
  icon: IconType;
  technologies?: string[];
  descriptionList?: string[];
}

export const CAREER_TIMELINE: CareerTimelineItem[] = [
  {
    title: "Lead Software Engineer",
    subTitle: "Data Warehouse/Storage team",
    date: "Jul 2025 – Present",
    location: "Helsinki, Finland",
    company: "Supermetrics",
    icon: IoBusiness,
    technologies: ["React", "TypeScript", "Node.js"],
    descriptionList: [
      "Building foundational Storage 2.0, owning front-end development",
      "Mentoring engineers at different levels to full technical ownership",
    ],
  },
  {
    title: "Engineering Manager",
    subTitle: "Various teams",
    date: "2023 – 2025",
    location: "Helsinki, Finland",
    company: "Supermetrics",
    icon: IoBusiness,
    technologies: ["React", "PHP", "TypeScript", "Node.js", "ClickHouse"],
    descriptionList: [
      "Youngest Engineering Manager; led team of 6 developers across the stack",
      "Owned IAM and user management for 20,000 weekly active users",
      "Architected ClickHouse usage tracking processing 2.1B data points/year",
      "Designed onboarding flow capturing 8,000 user surveys (40%), driving org-wide personalization",
      "Built scalable Hub information architecture enabling cross-team rapid feature expansion",
      "Spearheaded migration from RBAC to granular Permission-Based system across teams",
      "Conducted 50+ technical interviews, hired 10+ developers",
    ],
  },
  {
    title: "Senior- / Mid Software Engineer",
    subTitle: "Various teams",
    date: "2019 – 2023",
    location: "Helsinki, Finland",
    company: "Supermetrics",
    icon: IoBusiness,
    technologies: ["React", "PHP", "TypeScript", "React Query"],
    descriptionList: [
      "Led license and billing frontend, generated $500K+ in first-year revenue",
      "Built flagship products (Google Sheets, Excel, Data Studio) with React and PHP",
      "Redesigned frontend architecture with domain-driven design, introduced React Query",
      "Mentored 10+ engineers as chapter lead, led advanced TypeScript workshops",
    ],
  },
  {
    title: "Junat Kartalla",
    subTitle: "Train tracking app unifying European API data",
    date: "2017 – Present",
    icon: IoTrain,
    technologies: ["TypeScript", "React", "React Native", "Expo", "Node.js"],
    descriptionList: [
      "Train tracking app unifying European APIs, ~500K yearly unique users",
      "Available on Web, Android, and iOS",
    ],
  },
  {
    title: "Junior- / Mid Software Engineer",
    subTitle: "Affiliate traffic management and mobile optimization",
    date: "2017 – 2019",
    location: "Helsinki, Finland",
    company: "OPR-Finance",
    icon: IoBusiness,
    technologies: [
      "Java",
      "Spring Boot",
      "Angular.js",
      "Cordova",
      "Google Tag Manager",
      "Google Analytics",
    ],
    descriptionList: [
      "Built scalable Java Spring Boot API for affiliate traffic management",
      "Optimized Cordova / Angular.js mobile app performance",
      "Created A/B testable landing pages with Marketing",
      "Implemented advanced GTM and Analytics tracking",
    ],
  },

  {
    title: "Awards",
    icon: IoTrophy,
    descriptionList: [
      "Won Supermetrics 2025 hackathon (100+ participants)",
      "Best Developer of the Month for checkout flow frontend work",
      "Most hiring code reviews in a quarter at Supermetrics",
    ],
  },
];
