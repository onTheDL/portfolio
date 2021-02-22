import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Daniel Laserna | Frontend Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my professional software portfolio website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Daniel',
  subtitle: 'And the web is my playground.',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'about.jpg',
  paragraphOne: "I'm a frontend developer, and I love what I do.",
  paragraphTwo:
    "I enjoy the process of learning and finding ways to transform ideas into realized products. Having completed Codecademy's Web Developer Career Path, as well as Udacity’s React Nanodegree Program, I’ve trained myself to build responsive, scalable, and practical software solutions. Consequently, I hope to use those same skills to turn your great ideas into great products.",
  paragraphThree:
    'Current Stack:  Javascript, ReactJS, NextJS, GatsbyJS, NodeJS, Firebase, Material UI, styled-components, HTML, CSS, Git, and VSCode',
  resume: 'https://my.indeed.com/p/daniell-gb342sz',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'das-hero.png',
    title: 'DAS Development',
    info: 'Software Freelance Website',
    info2: '',
    url: 'https://das-next-js.vercel.app/',
    repo: 'https://github.com/onTheDL/das-nextJS', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'das-pm.png',
    title: 'DAS Project Manager',
    info: 'Client-side app designed to keep track of freelance projects.',
    info2: '',
    url: 'https://das-pm-jsootxd8r.vercel.app/',
    repo: 'https://github.com/onTheDL/das-pm', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'github-battle.png',
    title: 'GitHub Battle',
    info:
      'A client-side React app that shows the top GitHub profiles ranked according to various computer languages. Users can also battle two GitHub users to see which has the better profile.',
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
    title: 'Mazing Around',
    info: 'A simple maze game.',
    info2:
      'Built with MatterJS for the 2D physics, and Canvas, vanilla JS, and HTML for the randomized layout',
    url: 'https://hardcore-darwin-6563fe.netlify.app/',
    repo: 'https://github.com/onTheDL/a-zing', // if no repo, the button will not show up
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
