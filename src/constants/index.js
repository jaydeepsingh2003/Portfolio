import {
    javascript,html,css,reactjs,tailwind,nodejs,mongodb,git,threejs,
    hf,bny,holopin,
    clg,school,school1,
    crypto,oop,yml,crud,dwld,onetomany,
    trie,ds,cg,
    port_3d, jsp, notes, react1,
    be,sql, mini, snl,
  } from "../assets";

  const profiles = [
    {
      link: "https://www.linkedin.com/learning/certificates/9fe4371ca542269ee9a6da34aa1822331f1490918461c6ca52e3eaeafd08367d",
      icon: "https://media.wallstreetprep.com/uploads/2018/02/09095752/mic-linkedin.jpg",
    },
    {
      link: "https://www.futurelearn.com/certificates/4i5ehp9",
      icon: "https://logos-world.net/wp-content/uploads/2020/07/Accenture-Logo.png",
    },
    {
      link: "https://drive.google.com/file/d/1HmJgDLuZ0xbavuhbNJ1OdvCUc_HfLlO4/view?usp=drivesdk",
      icon: "https://images.seeklogo.com/logo-png/27/2/cisco-logo-png_seeklogo-273963.png",
    },
    {
      link: "https://drive.google.com/file/d/1-rYaZ88-xEvWeeJF1bRB3GDz-Mf50zfO/view?usp=drivesdk",
      icon: "https://www.infosys.com/content/dam/infosys-web/en/about/springboard/images/infosys-springboard.png",
    },
    {
      link:"https://drive.google.com/file/d/1lX8CC2XaQXE1mJZ41JM1Ul5lXGugG74h/view?usp=drivesdk",
      icon: "https://sbs.ac.in/wp-content/uploads/2024/02/TCS-iON-Logo.png",
    },
    // {
    //   link:"https://www.holopin.io/@shinchancode#badges",
    //   icon: holopin,
    // },
  ];

  const achievements = [
     {
      title: " Qualified in National Level Business Innovation held at Bangalore: Manthon 2025",
    },
    {
      title: "3rd Position : IEEE Paper Presentation at Varur Hubli 2025.",
    },
    {
      title: "Held Leadership position in various clubs and committees in college.",
    },
    {
      title: "Cracked JEE Mains with 90 percentile and Qualified for JEE Advance 2022",
    },
    {
      title: "2nd Rank in College in 3rd Semester (2024).",
    },
    {
      title: "Received adcademic Scholorship from NSWO.",
    },
  ]
  
  const technologies = [
    {
      name: "git",
      icon: git,
    },
    {
      name:"github",
      icon:"https://cdn-icons-png.flaticon.com/256/25/25231.png",
    },

    {
      name:"MySql",
      icon: "https://img.icons8.com/color/480/000000/mysql-logo.png",
    },
    {
      name:"Html",
      icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz4FFqfXWYz3jpz8kWedK5aXq3Ft_wChq0hqZ9V4JFCEHtiCChDSg900syTblIRBjsynI&usqp=CAU",
    },
    {
      name:"CSS",
      icon:"https://raw.githubusercontent.com/github/explore/6c6508f34230f0ac0d49e847a326429eefbfc030/topics/css/css.png",
  },
  {
    name:"javascript",
    icon:"https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png",
  },
  ];

  const list = [
    {
      id: "web",
      title: "Web Dev",
    },
  ];

  export const webProject = [
    {
      name: " Portfolio",
      description:
        "Created an impressive website made using React with 3D graphics and animations to bring their content to life. Responsive webpage is made with user friendly interface",
      tags: [
        {
          name: "TailwindCSS",
          color: "blue-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "green-text-gradient",
        },
        {
          name: "3d_react",
          color: "pink-text-gradient",
        },
        
      ],
      image:"https://designnotes.blog.gov.uk/wp-content/uploads/sites/53/2020/06/Portfolio-Desk.jpg"
      // image: port_3d,
      // source_link: "https://shinchancode.github.io/3d-react-portfolio/",
      // source_code_link: "https://github.com/shinchancode/3d-react-portfolio",
    },
    {
      name: "TCE Events Management System",
      description:
        "Implemented the Events Management Website to Conduct the events. In order to conduct any fest,Hackathon,Startup and events by there respective department should book the venue.",
      tags: [
        {
          name: "HTML/CSS",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "PHP",
          color: "pink-text-gradient",
        },
      ],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSny3zNwQA6-rFEGJDqRHzDPr8Uo91CTtRecA&s",
      // source_link: "https://shinchancode.github.io/React-Portfolio/",
      // source_code_link: "https://github.com/shinchancode/React-Portfolio",
    },
    {
      name: "Hackathon Registration Website",
      description:
        "Designed and developed a fully responsive hackathon registration website so that participants can register for and view the details about hackathon.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image:"https://png.pngtree.com/template/20220419/ourmid/pngtree-hackathon-background-screen-hack-synth-poster-image_1174636.jpg",
      // source_link: "https://rathi-30-days-of-javascript.onrender.com/",
      // source_code_link: "https://github.com/shinchancode/30-Days-of-Javascript",
    },
    {
      name: "Spotify and Amazon Clone",
      description:
        "Real-Time, event based communication in Nodejs and browser-based Chat application. Uses Socket.io for implementation for WebSockets protocol. This application built using Node.js, Express, Socket.io and Render (Hosting)",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        // {
        //   name: "",
        //   color: "pink-text-gradient",
        // },
      ],
      image:"https://www.thesandreckoner.co.uk/wp-content/uploads/2018/08/GAS.png",
    },
  ]
  const experiences = [
     {
      title: "Web Devloper",
      company_name: "Infotact Solutions Pvt Ltd",
      icon: bny,
      iconBg: "#383E56",
      date: "July 2025 - Present",
      // link: "",
      points: [
        "Developing and maintaining responsive web interfaces using HTML, CSS, JavaScript, and Bootstrap.",
        "Collaborating with the design and backend team to build dynamic features and integrate RESTful APIs.",
        "Contributing to building and optimizing pages for maximum speed, performance, and SEO compliance.",
        "Utilizing Git and GitHub for version control and collaborative development in a team environment.",

      ],
      // link: "",
    },
    
    // {
    //   title: "DSA Mentor",
    //   company_name: "GeeksforGeeks (Intern)",
    //   icon: "https://img.icons8.com/color/344/GeeksforGeeks.png",
    //   iconBg: "#E6DEDD",
    //   date: "May 2022 - Apr 2023",
    //   link: "",
    //   points: [
    //     "Teaching Assistant : Teaching Assistant for online batches of Data Structures, Algorithms, and Competitive programming with an average rating of 4.9*.",
    //     "Responsible for reviewing and writing articles based on Data Structures and Algorithms.",
    //   ],
    //   link: "https://drive.google.com/drive/folders/1efpnfKpRTvtujtSgHwRIJdrMFiWrBFHt",
    // },
  ];
  
  const educations = [
    {
      degree: "Bachelor of Engineering",
      branch:
        "Computer Science and Engineering",
      // marks:
      //   "CGPA : 8.9 / 10",
      name: "Tontadarya College of Engineering, Gadag",
      year: "(2022 - 2026)",
      image: clg,
    },
    {
      degree:
        "12th Grade",
      branch : "Science",
      // marks:
      //   "Percentage : 80 %",
      name: "Government Pre University College, Gadag",
      year: "2022",
      image: school1,
    },
    {
      degree:
        "10th Grade",
      branch: "SSLC",
      // marks:
      //   "Percentage : 88.64 %",
      name: "Loyola High School, Gadag",
      year: "2020",
      image: school,
    },
  ];
  
  export { list, profiles, technologies, experiences, educations, achievements };
