import { nanoid } from 'nanoid';

const desc =
  'Tool life tracking web app that allows engineers to track and compare the capability of machining end mills on on each component within each medical device product line in order to reduce net machining costs. Developed frontend using React JS hooks, state management, and react routes to immediately update components and display tooling data as it is logged. Structured backend server in Node JS to interface with MongoDB product database to store/retrieve user logged data from the front-end post/get requests.Designed MongoDB document schema with multi-nested subdocuments to allow for the storage and retrieval of tool life data for each product line and its respective subcomponents.';

// HEAD DATA
export const headData = {
  title: 'Bobby Kiaie', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Software/Manufacturing Engineer', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello there! My name is',
  name: 'Bobby Kiaie',
  subtitle: 'I am a Software/Manufacturing Engineer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'tool.jpg',
    title: 'Tool Life Tracker',
    info: desc,
    info2: '',
    url: 'https://bobbykiaie.github.io/tool-life',
    repo: 'https://github.com/bobbykiaie/tool-life', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
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
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
