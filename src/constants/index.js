import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  mit,
  vidura,
  nextjs,
  python,
  java,
  spring,
  php,
  redis,
  postgre,
  c,
  aws,
  student 
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "GPA",
    text: "3.80",
  },
  {
    title: "No. of Projects",
    text: "4+",
  },
  {
    title: "Research Interest",
    text: "NLP",
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "C++",
    icon: c,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "SpringBoot",
    icon: spring,
  },
  {
    name: "NodeJS",
    icon: nodejs,
  },
  {
    name: "PostgreSQL",
    icon: postgre,
  },
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "BSc. (Hons) in Computer Science",
    company_name: "University of Colombo School of Computing",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2021 - Present",
    points: [
      "A dedicated computer science student maintaining a CGPA of 3.80.",
      "Currently conducting an undergraduate research related to Natural Language Processing.",
    ],
  },
  {
    title: "FullStack Developer - Intern",
    company_name: "MillenniumIT ESP",
    icon: mit,
    iconBg: "#383E56",
    date: "November 2023 - May 2024",
    points: [
      "Developing an Electronic Medical Record System using in house frameworks based of Java and JavaScript and other related technologies.",
      "Took a fullstack role collaborating with cross-functional teams including designers, product managers, and other developers.",
      "Key responsibilties included project setup, authentication & authorization functionalities related to the project.",
    ],
  },
  {
    title: "Mathematics Teacher - English Medium",
    company_name: "Belvoir College International",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2019 - Jan 2021",
    points: [
      "Taught mathematics in English medium for grade 7 and 8 students.",
      "Developed teaching and communication skills related to English."
    ],
  },
  {
    title: "GCE Advanced Level",
    company_name: "Nalanda College Colombo",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Aug 2017 - Aug 2019",
    points: [
      "A - Combined Mathematics",
      "A - Physics",
      "B - Chemistry",
      "Z Score - 1.8"
    ],
  },
  {
    title: "GCE Ordinary Level",
    company_name: "Vidura College Colombo",
    icon: vidura,
    iconBg: "#E6DEDD",
    date: "Jan 2006 - Dec 2016",
    points: [
      "9 A's",
      "Extra Curricular Activities - Scouting, Cricket, Orchestra"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I had the pleasure of working with Oshada during his internship as a software engineer under my guidance, and I can confidently say he is one of the most promising young professionals I've had the opportunity to mentor.",
    name: "Mr. Sachith Ariyathilaka",
    designation: "Associate Tech Lead",
    company: "MillenniumIT ESP",
    image: "https://media.licdn.com/dms/image/v2/C5603AQFGQqONNwRpAA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1662283271858?e=2147483647&v=beta&t=3ZLlmXc209TQ98sSGJVTgAMop67_N2D-8r5jFf7OVcM",
  }
];

const projects = [
  {
    name: "Ayati - EMRS System",
    description:
      "This solution addresses challenges such as manual data handling, the lack of a proper database, difficulties accessing patient records, setting treatment goals, and managing clinic operations for the Ayati Foundation, Sri Lanka’s first National Centre for Children with Disabilities.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://www.linkedin.com/posts/millennium-it-esp_ayatifoundation-millenniumitesp-childrenwithdisabilities-activity-7282712820268343296-TeOl?utm_source=share&utm_medium=member_desktop",
  },
  {
    name: "PayRoll Manager",
    description:
      "A web based application to manage, organize, and automate employee payment processes in an organization including employee data analytics.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "SpringBoot",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "blue-text-gradient",
      },
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/orgs/PayRollManager/repositories",
  },
  {
    name: "CopSco",
    description:
      "A web based application that allows day to day drivers to upload evidences of traffic violations that they witness and earn rewards.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
      {
        name: "AWS",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/StudentCare-group6/CopSco.git",
  },
  {
    name: "StudentCare",
    description:
      "A web and mobile based application that provides solutions for common issues faced by university students which comprises of a counselling portal with video conferencing features and a mobile app which allows student to track academic progress",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      }
    ],
    image: student,
    source_code_link: "https://github.com/O-sura/Project_StudentCare.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
