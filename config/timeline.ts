import { IconType } from "react-icons";
import { IoBusiness, IoSchool, IoTrain } from "react-icons/io5";

export interface CareerTimelineItem {
  title: string;
  subTitle?: string;
  date: string;
  location?: string;
  company?: string;
  icon: IconType;
  technologies?: string[];
  descriptionList?: string[];
}

export const CAREER_TIMELINE: CareerTimelineItem[] = [
  {
    title: "Engineering Manager",
    subTitle: "Leading High-Performing Teams and Driving Technical Excellence",
    date: "2023–Present",
    location: "Helsinki, Finland",
    company: "Supermetrics",
    icon: IoBusiness,
    technologies: ["React", "PHP", "TypeScript", "Node.js", "ClickHouse"],
    descriptionList: [
      "Managed a team of 12 talented developers (frontend, backend, full-stack) building systems using React and PHP.",
      "Lead implementation of usage tracking system collecting 2.1B+ data points annually, enabling customer fair-usage policies.",
      "Led enhancements to user and organization management systems, optimizing both customer-facing platforms and internal tools, enabling highest-paying enterprise deals.",
      "Created an intro survey used by 40% of customers, now a key tool for personalization and company decisions.",
      "Enhanced customer platform’s frontend improving navigation, landing pages and home page for improved customer experience.",
      "Led cross-team Roles & Permissions access control initiative building PHP permissions system and unified React component library for access control.",
      "Conducted 50+ technical interviews resulting in hiring 10+ successful developers hires.",
    ],
  },
  {
    title: "Senior-/Mid Software Engineer",
    subTitle: "Full-Stack Development, Architecture, and Technical Mentorship",
    date: "2019–2023",
    location: "Helsinki, Finland",
    company: "Supermetrics",
    icon: IoBusiness,
    technologies: ["React", "PHP", "TypeScript", "React Query"],
    descriptionList: [
      "Led frontend for license and billing projects, adding $500K+ revenue in the first year.",
      "Built and maintained flagship products (Google Sheets, Excel, Data Studio) using React and PHP.",
      "Improved customer-facing platform’s frontend architecture with domain-driven design and introduced React Query.",
      "Mentored 10+ frontend engineers as chapter lead, organizing advanced TypeScript workshops.",
    ],
  },
  {
    title: "Bachelor of Science in Computer Science",
    subTitle:
      "Foundational Knowledge in Computer Science and Software Development",
    date: "2019–Present",
    location: "Helsinki, Finland",
    company: "University of Helsinki",
    icon: IoSchool,
    technologies: ["Java", "Spring Boot", "Docker", "Kubernetes"],
    descriptionList: [
      "Started stydying in University of Helsinki",
      "Courses include: Data Structures and Algorithms, Docker and Kubernetes, Web Programming in Java and Spring Boot.",
    ],
  },
  {
    title: "Junat Kartalla",
    subTitle: "Building a Popular Open-Source Train Tracking Application",
    date: "2017–Present",
    icon: IoTrain,
    technologies: [
      "React Native",
      "Expo",
      "React",
      "Node.js",
      "ClickHouse",
      "TypeScript",
    ],
    descriptionList: [
      "Created a train tracking app with 500K+ users to unify train tracking API data across Europe, using TypeScript, React, React Native, Expo and Node.js.",
      "Application is accessible on Web, Android, and iOS.",
    ],
  },
  {
    title: "Junior-/Mid Software Engineer",
    subTitle: "Developing Scalable APIs and Optimizing Mobile Applications",
    date: "2017-2018",
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
      "Developed a scalable Java Spring Boot API for affiliate traffic management.",
      "Optimized a Cordova and Angular.js mobile app for better performance.",
      "Created A/B testable landing pages with the Marketing team.",
      "Implemented advanced tracking using Google Tag Manager and Analytics.",
    ],
  },
];
