import {
  Talent,
  Performance,
  Staff,
  Employer,
  Employee,
  Attendance,
  Core,
  Payroll,
} from "../assets/hero";
import {
  VectorOne,
  VectorTwo,
  VectorThree,
  VectorFour,
  TalentSourcing,
  coreHr,
  payroll,
} from "../assets/tabs";
import {
  Employees,
  Times,
  Performances,
  Onboardings,
  Recruits,
  Payrolls,
} from "../assets/features";
import { Nolan } from "../assets/testimonials";
import { AvatarThree, Instagram, Slack, Twitter, Idowu} from "../assets/join";
import { AvatarTwo } from "../assets/join";
import Logo from "../components/Logo/Logo";

//sub menu
export const menuData = {
  companyOne: [
    { title: "About Us", url: "/" },
    { title: "Blog", url: "/" },
    { title: "Terms of Service", url: "/terms-of-service" },
  ],
  companyTwo: [
    { title: "Contact Us", url: "/contact" },
    { title: "Support Center", url: "/" },
  ],
  companyThree: [
    { title: "FAQs", url: "/pricing/#faqs" },
    { title: "Privacy", url: "/privacy" },
  ],
  productsOne: [
    {
      title: "Talent Sourcing",
      url: "https://reacthq.dev",
    },
    { title: "Payroll Mgmt", url: "/payroll" },
  ],
  productsTwo: [
    { title: "Core-HR", url: "/" },
    { title: "Performance", url: "/performance" },
  ],
  productsThree: [{ title: "Attendance", url: "/attendance" }],
};

//hero text
export const heroText = {

  header: [
    "Hire,",
    "Manage",
    "&",
    "Pay",
    "Your",
    "Global",
    "Teams",
    "Wherever,",
    "Whenever...",
  ],
  subHeaderOne: [
    "There is no need to use many tools for your people management,",
  ],
  subHeaderTwo: [
    "Take advantage of our all-in-one software to streamline your HR.",
  ],
};

//hero carousel
export const heroCarouselData = [
  {
    text: "#8833ff",
    bg: "#d0b1fc",
    icon: Staff,
    title: "Staff Onboarding",
  },
  {
    text: "#0cbc8b",
    bg: "#cdfef0",
    icon: Employer,
    title: "Exit Management",
  },
  {
    text: "#463aeb",
    bg: "#aeabd8",
    icon: Employee,
    title: "Employee Management",
  },
  {
    text: "#f3723f",
    bg: "#f8c6c6",
    icon: Attendance,
    title: "Attendance Management",
  },
  {
    text: "#0d3a94",
    bg: "#7d8fb3",
    icon: Core,
    title: "Core HR System",
  },
  {
    text: "#0d75bc",
    bg: "#8bb5d2",
    icon: Payroll,
    title: "Payroll Management",
  },
  {
    text: "#f3723f",
    bg: "#eabba8",
    icon: Talent,
    title: "Talent Sourcing",
  },
  {
    text: "#ce9b06",
    bg: "#f8de94",
    icon: Performance,
    title: "Performance Management",
  },
];
//brand
export const brandTitle = "TRUSTED BY GLOBAL COMPANIES WORLDWIDE";

//tabs
export const tabsData = [
  {
    label: "Talent Sourcing",
    content: {
      title: "Talent Sourcing",
      subtitle:
        "We maintain an elite network of pre-vetted African technical talents who are tested, graded and effectively matched with our partners in an integrated talent and project management ecosystem.",
      lists: [
        {
          icon: VectorOne,
          text: "When screening talents, we determine how each prospect will fit into that structure in addition to possessing the appropriate skill set to excel in the job opportunity.",
        },
        {
          icon: VectorTwo,
          text: "We also facilitate exclusive talent management support from start to finish, providing consistent performance management and evaluation for every talent assigned to your company.",
        },
      ],
    },
    img: TalentSourcing,
    link: "https://reacthq.dev"
  },
  {
    label: "CoreHR Software",
    content: {
      title: "CoreHR Software",
      subtitle:
        "Managing people is difficult. Automate your Human Resources Management with our HR Software that your employees will enjoy. Optimize your time as much possible and increase productivity with streamlined processes.",
      lists: [
        {
          icon: VectorThree,
          text: "Onboard new employees online to reduce paper processes and data entry.  Automatically sync your new hires into your employees database.",
        },
        {
          icon: VectorFour,
          text: "Develop a performance evaluation process that works well for your employees and company. Create goals to give employees a clear career development path.",
        },
      ],
    },
    img: coreHr,
    link: "/performance"
    
  },
  {
    label: "Payroll Management",
    content: {
      title: "Payroll Management",
      subtitle:
        "Our cloud-based payroll software enables HR and payroll teams to stay in control of payroll and deliver the right pay on the right day. You can empower your teams to consistently deliver the payroll promise whilst saving time, reducing errors and future-proofing your system with our payroll software.",
      lists: [
        {
          icon: VectorThree,
          text: "Modern and friendly to use, our payroll systems are completely online, which means each time you login, you know you're using the very latest and most up-to-date technology.",
        },
      ],
    },
    img: payroll,
    link: "/payroll"
  },
];

export const features = {
  title: "End-to-End HR Management System Built By Managers for Managers",
  subtitle:
    "RendaHR is an all-in-one HR platform for modern companies who want to centralize all their HR, automate repetitive procedures and empower employees to full potential.",
  feature: [
    {
      header: "Recruitment & Staff Sourcing",
      subHeader:
        "Hire fast and streamline recruitment to create best candidate experience.",
      icon: Recruits,
    },
    {
      header: "Onboarding",
      subHeader: "Speedy Onboarding from anywhere and any device.",
      icon: Onboardings,
    },
    {
      header: "Employee Management",
      subHeader:
        "Forget about spreadsheets, keep  your employee data in one place.",
      icon: Employees,
    },
    {
      header: "Payroll",
      subHeader: "Automate things to pay your staff on time.",
      icon: Payrolls,
    },
    {
      header: "Performance Enablement",
      subHeader: "Modern approach to run performance review for your team.",
      icon: Performances,
    },
    {
      header: "Time Tracking",
      subHeader:
        "Easily clock in-out , track working time, connect with payroll.",
      icon: Times,
    },
  ],
};

//Testimonials
export const testimonials = {
  title: "Everyone on the team loves us. Here’s Why:",
  // subtitle: "Don’t just take our word for it.",
  testimonial: [
    {
      text: "I had to process about 25 or 30 people very quickly, like in a day, and we did not have RendaHR at the time so I was doing that all manually. Using it (RendaHR) helps me automate my work, which is important if you want to scale and bring new employees and just operate better.",
      name: "Gabriel Salem",
      role: "HR Consultant",
      img: Nolan,
    },
    {
      text: "The tool RendaHR has really automated some of our company’s processes. We now spend less time doing manual work. It’s making talent sourcing and distribution very easy for us. Thanks to its scheduling feature, we don’t need staff to work outside of business hours.",
      name: "Peter Anyawun",
      role: "CEO",
      img: AvatarTwo,
    },
    {
      text: "It's really painless for me to go from 1-8 employees. It's not an effort. I dont have to think about it. My onboarding time and hiring time is two minutes for an employee. Thanks to RendaHR.",
      name: "Adenuga Ayodeji",
      role: "Business Strategist",
      img: AvatarThree,
    },
    {
      text: "RendaHR time-off is linked to payroll so I no longer have to chase down PTO requests, saving us substantial money.",
      name: "Idowu Eniola",
      role: "Business Strategist",
      img: Idowu,
    },
  ],
};

//join
export const join = {
  title: "Hire Fast, Onboard Faster & Enhance Staff Experience",
  subtitle:
    "Turbo-charge your people management by tapping into our pool of HR resources ⚡",
  tabOne: {
    header: "Join our community",
    subHeader:
      "You can find sneak peeks, vote on upcoming features, chat, share and learn from our team.",
    icons: [Twitter, Instagram, Slack],
  },
  tabTwo: {
    header: "Not Sure of Where to Begin?",
    subHeader:
      "Meet with our team, ask questions, get clarity, that’s why we are here!",
  },
};

//footer
export const footer = {
  Logo,
  tagline: "The AI-backed tech resourcing platform",
  rights: "Copyright RendaHR. 2023 All rights reserved.",
  menuList: [
    {
      menu: "Product",
      submenu: [
        "Tech Hiring",
        "CoreHR Software",
        "Payroll Management",
        "People Management",
      ],
    },
    {
      menu: "Company",
      submenu: ["About us", "FAQs", "Talk to an expert"],
    },
    {
      menu: "Legal",
      submenu: ["Terms & Conditions", "Privacy"],
    },
  ],
};

