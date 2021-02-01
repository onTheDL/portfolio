import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Daniel',
  subtitle: "I'm the Unknown Developer",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'about.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'DAS Development',
    info: 'Software Freelance Website',
    info2: '(Still a work in progress)',
    url: 'https://das-next-js.vercel.app/',
    repo: 'https://github.com/onTheDL/das-nextJS', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'DAS Project Manager',
    info: 'Client-side app designed to track of freelance projects',
    info2: '(Still a work in progress)',
    url: 'https://das-pm-jsootxd8r.vercel.app/',
    repo: 'https://github.com/onTheDL/das-pm', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'GitHub Battle',
    info: '',
    info2: '',
    url: 'https://frosty-williams-207395.netlify.app/',
    repo: 'https://github.com/onTheDL/github-battle-v1', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: "Dreamer's Cove Resort",
    info: '',
    info2: '',
    url: 'https://inspiring-albattani-986be0.netlify.app/',
    repo: 'https://github.com/onTheDL/dc-resort', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Email Me',
  email: 'daniel.laserna@protonmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
