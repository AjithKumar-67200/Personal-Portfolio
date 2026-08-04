export type SocialLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type NavItem = {
  label: string;
  href: string;
};

export type SkillItem = {
  category: string;
  name: string;
};

export type ExperienceRole = {
  period: string;
  title: string;
  company: string;
  mode?: string;
  summary: string;
  tags: string[];
};

export type FeaturedProject = {
  name: string;
  tag: string;
  summary: string;
  tech: string[];
  href: string;
  results: string[];
};

export type EducationItem = {
  title: string;
  place: string;
  period: string;
};

export const siteConfig = {
  name: "Ajith Kumar S",
  siteName: "AjithKumar",
  brandPrimary: "AJITH",
  brandSecondary: "KUMAR",
  title: "Java Full Stack Developer",
  roles: [
    "Java Full Stack Developer",
    "Microservices Architect",
    "Backend Engineer",
    "REST API Specialist",
  ],
  email: "ajith67200@gmail.com",
  phone: "+91 7338773239",
  phoneHref: "tel:+917338773239",
  emailHref:
    "mailto:ajith67200@gmail.com?subject=Portfolio%20Inquiry%20-%20Ajith%20Kumar%20S&body=Hi%20Ajith%2C%0A%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20",
  resumePath: "/resume/Ajith_Kumar_S_Resume.pdf",
  resumeFileName: "Ajith_Kumar_S_Resume.pdf",
  profileImage: "/images/profile.png",
  description:
    "Java Full Stack Developer building scalable microservices, RESTful APIs, and full-stack applications for high-throughput production systems.",
  footerBlurb:
    "Java Full Stack Developer focused on creating scalable microservices and high-impact production systems.",
} as const;

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/aboutme" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

export const footerNavItems: NavItem[] = [
  { label: "Home", href: "/#inicio" },
  { label: "Projects", href: "/#proyectos" },
  { label: "About", href: "/aboutme" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/AjithKumar-67200",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ajith-kumar-66946a21a",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:ajith67200@gmail.com",
  },
];

export const aboutContent = {
  eyebrow: "Who I Am",
  title: "About",
  ghost: "Me",
  subtitle:
    "Java Full Stack Developer passionate about building real production systems.",
  paragraphs: [
    "Java Full Stack Developer with 2+ years of experience designing and delivering scalable microservices, RESTful APIs, and full-stack applications using Java, Spring Boot, React.js, and Laravel.",
    "Proven expertise in backend development, distributed systems, MySQL database design, Hibernate/JPA, Redis caching, and query optimization for high-throughput production systems. Experienced in system design, Spring Security, JWT authentication, CI/CD pipelines, and Agile delivery — leveraging AI-assisted tools to accelerate productivity and elevate code quality.",
  ],
} as const;

export const skills: SkillItem[] = [
  { category: "Languages", name: "Java" },
  { category: "Languages", name: "JavaScript" },
  { category: "Languages", name: "SQL" },
  { category: "Backend", name: "Spring Boot" },
  { category: "Backend", name: "Spring Security" },
  { category: "Backend", name: "Hibernate/JPA" },
  { category: "Backend", name: "Laravel" },
  { category: "Frontend", name: "HTML" },
  { category: "Frontend", name: "CSS" },
  { category: "Frontend", name: "React.js" },
  { category: "Data", name: "MySQL" },
  { category: "Data", name: "MongoDB" },
  { category: "Data", name: "Redis" },
  { category: "Architecture", name: "Microservices" },
  { category: "Architecture", name: "REST APIs" },
  { category: "Architecture", name: "JWT" },
  { category: "Tools", name: "Git" },
  { category: "Tools", name: "Maven" },
  { category: "Tools", name: "Postman" },
  { category: "Tools", name: "Swagger" },
  { category: "AI-Assisted", name: "Cursor" },
  { category: "AI-Assisted", name: "Claude" },
];

export const experienceRoles: ExperienceRole[] = [
  {
    period: "APR 2024 — PRESENT",
    title: "Java Full Stack Developer",
    company: "Voyage Software Technologies · Chennai",
    mode: "On-site",
    summary:
      "Engineering scalable RESTful APIs and full-stack features for logistics platforms ShipCRM and SoluShip — microservices, real-time tracking, Redis caching, JWT/RBAC, carrier integrations, and query optimization for high-throughput production systems handling 5,000+ daily transactions.",
    tags: skills.map((skill) => skill.name),
  },
];

export const featuredProjects: FeaturedProject[] = [
  {
    name: "ShipCRM",
    tag: "Enterprise / Logistics",
    summary:
      "Microservices logistics CRM with real-time tracking, Redis caching, RBAC, EDI invoicing, and automated report generation.",
    tech: ["Spring Boot", "React.js", "Flutter", "Redis"],
    href: "https://shipcrm.org/",
    results: [
      "Real-time shipment tracking for field operations",
      "Hardened access control across microservices",
      "Faster feature delivery with AI-assisted tools",
    ],
  },
  {
    name: "SoluShip",
    tag: "Automation / Shipping",
    summary:
      "Distributed shipping platform integrating 10+ carrier APIs for tracking, label generation, and rate comparison at scale.",
    tech: ["Java", "Laravel", "MySQL", "JWT"],
    href: "https://soluship.com/",
    results: [
      "5,000+ daily transactions across 10+ carrier systems",
      "50+ production REST APIs",
      "35% performance improvement from query and ORM tuning",
    ],
  },
];

export const educationItems: EducationItem[] = [
  {
    title: "Bachelor of Engineering — Mechanical",
    place: "Jaya Engineering College, Chennai",
    period: "2017 — 2021",
  },
  {
    title: "Java Full Stack Development",
    place: "Q Spiders, Chennai",
    period: "2023",
  },
];

export const contactContent = {
  eyebrow: "Contact",
  title: "Stay",
  ghost: "Connected",
  supporting:
    "Open to full-time roles and impactful projects. Reach out for collaborations, opportunities, or a quick conversation.",
  whyTitle: "Why reach out?",
  whyItems: [
    "Full-time Java full stack opportunities",
    "Microservices and API engineering work",
    "Impactful production systems",
  ],
} as const;
