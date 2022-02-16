module.exports = {
  siteTitle: 'Amod Kumar | Developer',
  siteDescription:
    'Amod Kumar is a Developer at , who loves learning new things and helping tech beginners.',
  siteKeywords:
    'Amod Kumar, Amod, Kumar, Amodkumar, Developer,Home automation, sentiment analizer, web developer, javascript, udupi, MIT,',
  siteUrl: 'https://h0p316.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Amod Kumar',
  location: 'Udupi, India',
  email: 'amodkumarxda@gmail.com',
  github: 'https://github.com/h0p316/',
  twitterHandle: '@amodkumar',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/h0p316/',
    },
    {
      name: 'Linkedin',
      url: 'http://www.linkedin.com/in/amod-kumar-90602b229/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/saiyan16',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/saiyan_16',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/megamin30425114',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
