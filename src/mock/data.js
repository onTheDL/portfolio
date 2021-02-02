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
  resume: '',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'das-hero.png',
    title: 'DAS Development',
    info: 'Software Freelance Website',
    info2: '(Logo will be updated)',
    url: 'https://das-next-js.vercel.app/',
    repo: 'https://github.com/onTheDL/das-nextJS', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'das-pm.png',
    title: 'DAS Project Manager',
    info: 'Client-side app designed to keep track of freelance projects.',
    info2: '(Logo will be updated)',
    url: 'https://das-pm-jsootxd8r.vercel.app/',
    repo: 'https://github.com/onTheDL/das-pm', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'github-battle.png',
    title: 'GitHub Battle',
    info:
      'A client-side React app that shows the top GitHub profiles sorted according to the following computer languages:  Javascript, Ruby, Java, CSS, Python, and the four combined. Users are also given the ability to relive their high school angst by judging two GitHub users based on their popularity.',
    info2: '',
    url: 'https://frosty-williams-207395.netlify.app/',
    repo: 'https://github.com/onTheDL/github-battle-v1', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'dc-resort.png',
    title: "Dreamer's Cove Resort",
    info: 'A luxury resort website showcasing the use of styled-components',
    info2: '',
    url: 'https://inspiring-albattani-986be0.netlify.app/',
    repo: 'https://github.com/onTheDL/dc-resort', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'maze.png',
    title: 'An Amazing Maze',
    info: 'A non-monetizable project forged into existence by boredom.',
    info2: 'MatterJS for the 2D physics, and Canvas, vanilla JS, and html for the layout',
    url: 'https://hardcore-darwin-6563fe.netlify.app/',
    repo: 'https://github.com/onTheDL/dc-resort', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "Would you like to work with me? That's great!",
  btn: "Let's Talk",
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
      url: 'https://www.linkedin.com/in/daniel-laserna-6396831b9/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/onTheDL',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
