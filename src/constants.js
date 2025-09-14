// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import accLogo from './assets/company_logo/accenture_logo.png';
import agcLogo from './assets/company_logo/caravellabs_logo.jpg';

// Education Section Logo's
// Education Section Logo's
import mpbLogo from './assets/education_logo/mp_birla.jpg';
import iemLogo from './assets/education_logo/iem_logo.png';



// Project Section Logo's

import Tomato from './assets/work_logo/Tomato.png'
import pingping from './assets/work_logo/ping_ping.png';
import eduford from './assets/work_logo/eduford.png';
export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
       { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: accLogo,
      role: "Associate Software Engineer",
      company: "Accenture",
      date: "July 2023 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Fullstack Developer Intern",
      company: "Caravel Labs",
      date: "June 2022 - Aug 2022",
      desc: "Developed a full-stack Next.js + TypeScript application in 8 weeks, streamlining operations to raise farmer profits by 30% and cut costs by \$50K per year.",
      skills: [
        "NextJS",
        "Typescript",
        "Material UI",
        "HTML",
        "CSS",
        "SQL",
        "Azure Cosmos DB",
        "Postman",
      
      ],
    },
    
  ];
  
  export const education = [
    {
      id: 0,
      img: iemLogo,
      school: "Institute of Engineering and Management,Kolkata",
      date: "Aug 2019 - July 2023",
      grade: "9.02 CGPA",
      desc: "I completed my Bachelor's of Technology in Electronics and Communication Engineering from IEM, Kolkata, where I developed a strong foundation in both core ECE subjects and key areas of computer science. Alongside my ECE coursework, I actively pursued studies in programming, data structures, algorithms, object-oriented programming, database management systems, web development, and software engineering. My interest in software development led me to participate in various workshops and technical events, which significantly enhanced my practical skills. This blend of electronics and computer science has played a vital role in shaping my technical abilities and professional growth.",
      degree: "B.Tech - ECE",
    },
   
    {
      id: 1,
      img: mpbLogo,
      school: "M.P. Birla Foundation Higher Secondary School,Kolkata",
      date: "2019",
      grade: "83%",
      desc: "I completed my class 12 education from M.P. Birla Foundation Higher Secondary School,Kolkata under the ISC board",
      degree: "12th(ISC) Education",
    },
       {
      id: 2,
      img: mpbLogo,
      school: "M.P. Birla Foundation Higher Secondary School,Kolkata",
      date: "2017",
      grade: "90%",
      desc: "I completed my class 10 education from M.P. Birla Foundation Higher Secondary School,Kolkata under the ICSE board",
      degree: "10th(ICSE) Education",
    },
   
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Ping-Ping - Social Media Web Application",
      description:
       "A Social Media Application implemented using React Js, Tailwind CSS,Clerk,Node JS. It offers users the ability to create posts, connect with others, and view interactive feeds and stories.",
      image: pingping,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API","MongoDB","Clerk","Tailwind CSS","Node JS"],
      github: "https://github.com/niyalimukherjee/pingping",
      webapp: "https://pingping-2gjd.vercel.app/",
    },
    {
      id: 1,
      title: "Eduford-College Website",
      description:
        "A College demo Frontend Website built using HTML,CSS,Javascript.",
      image: eduford,
      tags: [ "HTML", "CSS", "JavaScript"],
      github: "https://github.com/niyalimukherjee/education-web",
      webapp: "https://niyalimukherjee.github.io/education-web/index.html",
    },
       {
      id: 2,
      title: "Tamato- A Food Delivery Website",
      description:
        "A food Delivery Web Application implemented using React JS and Tailwind CSS.It is a web application where users can browse menus, see food items, and likely place orders.",
      image: Tomato,
      tags: [ "React JS","HTML",  "JavaScript", "Tailwind CSS","Redux"],
      github: "https://github.com/niyalimukherjee/Tamato",
      webapp: "https://tamato.netlify.app/",
    },
   
  ];  