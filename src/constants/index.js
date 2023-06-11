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
  tailwind,
  nodejs,
  git,
  figma,
  threejs,
  pslib,
  vut,
  logiscool,
  nextjs,
  progressr,
  portfolio,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Frontend Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Designer',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'nextjs',
    icon: nextjs,
  },
];

const experiences = [
  {
    title: 'High school',
    company_name: 'SPŠSE a VOŠ Liberec',
    icon: pslib,
    iconBg: '#383E56',
    date: 'September 2016 - June 2021',
    points: [
      'First intrtoduction to programming',
      'Mostly working with C# Asp.net core, implementing backend aplications and APIs',
      'Introduction to frontend development with HTML, CSS, JS and React',
      'Graduation thesis: "Reservation web application" in React and C# Asp.net core',
    ],
  },
  {
    title: 'University',
    company_name: 'VUT FIT Brno',
    icon: vut,
    iconBg: '#E6DEDD',
    date: 'Sep 2021 - Present',
    points: [
      'Currently studying at VUT FIT Brno in the field of Information Technology',
      'Worked on various projects mostly not related to web development',
      'Compiler(C) - implementation of a compiler for a custom language',
      'Interpreter(Python) - implementation of an interpreter for a custom language',
      'Parser(PHP) - implementation of a parser for a custom language',
      'Progressr(SvelteKit, TS, TailwindCSS, Firebase) - web application for tracking progress in various fields (currently in development)',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'Shopify',
    icon: nextjs,
    iconBg: '#383E56',
    date: '2022 - Present',
    points: [
      'Developing and maintaining web applications using Next.js and other related technologies.',
      'Creating web presentations for clients',
    ],
  },
  {
    title: 'Python Lecturer',
    company_name: 'Logiscool',
    icon: logiscool,
    iconBg: '#E6DEDD',
    date: 'Jan 2022 - Present',
    points: [
      'Teaching kids the basics of programming in Python a Data Science',
      'Mostly working with kids aged 10-16 in online classes',
      'Teaching how to think logically and solve problems',
    ],
  },
];

const projects = [
  {
    name: 'Progressr',
    description:
      'Web application for tracking progress in various fields. Users can create their own progress trackers and share them with others.',
    tags: [
      {
        name: 'SvelteKit',
        color: 'blue-text-gradient',
      },
      {
        name: 'Firebase',
        color: 'green-text-gradient',
      },
      {
        name: 'TailwindCSS',
        color: 'pink-text-gradient',
      },
    ],
    image: progressr,
    source_code_link: 'https://github.com/polimich/FIT-VUT-ITU',
  },
  {
    name: 'Portfolio',
    description:
      'My personal portfolio website. It is a single page application built with React and TailwindCSS a ThreeJS',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'ThreeJS',
        color: 'green-text-gradient',
      },
      {
        name: 'TailwindCSS',
        color: 'pink-text-gradient',
      },
    ],
    image: portfolio,
    source_code_link: 'https://github.com/',
  },
];

export { services, technologies, experiences, projects };
