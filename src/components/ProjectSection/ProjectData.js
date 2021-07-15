export const projects = [
  {
    imageUrl: require("./ProjectImages/BoatsLandingPage.PNG").default,
    videoUrl: require("../../videos/projects/LandingPage.mp4").default,
    title: "Old Portfolio",
    description: {
      About: "The is a landing page for a boat rental company",
      Why: " I created this project to practise my skills with react route and smooth scroll and they are repeatedly used components in modern day applications.",
      How: "The site was purely from ReactJS, most of the components in the application are created with styled components, and all linked with react scroll or react route. ",
    },
    Software: ["React", "React Hooks", "React Route", "React Scroll"],
    access: [
      {
        title: "Website",
        Link: "https://boatrentlandingpage.herokuapp.com/",
      },
      {
        title: "GitHub",
        Link: "https://github.com/Tebogo11/LandingPage",
      },
    ],
  },
  {
    imageUrl: require("./ProjectImages/OldPortfolio.PNG").default,
    videoUrl: require("../../videos/projects/OldPortfolio.mp4").default,
    title: "Old Portfolio",
    description: {
      About:
        "This is my old portfolio, and it is a great representation of my growth",
      Why: "I built this just after learning ReactJS and wanted to practice my React skills and improve them with a personal project ",
      How: "This is built purely from ReactJS",
    },
    Software: ["React", "React Hooks"],
    access: [
      {
        title: "Website",
        Link: "https://tebogodubeportfolio.herokuapp.com/",
      },
      {
        title: "GitHub",
        Link: "https://github.com/Tebogo11/MyPortfolio",
      },
    ],
  },
  {
    imageUrl: require("./ProjectImages/FaceDetector.PNG").default,
    videoUrl: require("../../videos/projects/FaceDectotor.mp4").default,
    title: "Face Detector",
    description: {
      About:
        "This is a website that allows users to enter images with faces, which then allows a machine learning API to detect the face in the image.",
      Why: "I built this website to practise the skill of creating a full stack site.With a Frontend, Backend and Database. Well also practicing the skill of utilising a third party API.",
      How: "The frontend was built using ReactJS, and combined with the Clarifai API which detects a face within an image. It has an authentication ability, so it's connected to a REST server created by NodeJS, which sends requests to a postgres database and back to the Frontend. All three components are hosted on Heroku.",
    },
    Software: ["React", "React Hooks", "Redux", "NodeJS", "Postgres"],
    access: [
      {
        title: "Website",
        Link: "https://smartbrainf.herokuapp.com/",
      },
      {
        title: "GitHub",
        Link: "https://github.com/Tebogo11/SmartBrain/tree/master",
      },
    ],
  },
  {
    imageUrl: require("./ProjectImages/GuessANumber.jpeg").default,
    videoUrl: require("../../videos/projects/GuessNum.MP4").default,
    title: "Guess A Number Game",
    description: {
      About:
        "This is a game that allows the user to select a number, while the application uses a randomizer library to guess a number between the highest last guess and lowest last guess until it gets the right number.",
      Why: "This was a basic mobile application to build, and a great introduction to React basics. It was also a good introduction to React Hooks and React Navigations.",
      How: " The Application was built from Expo, a React Native framework that makes developing with React Native easier. This application uses all the React and React Native Basics to bring the game to life.",
    },
    Software: ["React Native", "React Hooks"],
    access: [
      {
        title: "GitHub",
        Link: "https://github.com/Tebogo11/GuessANumberApp",
      },
    ],
  },
  {
    imageUrl: require("./ProjectImages/ShopApp.jpeg").default,
    videoUrl: require("../../videos/projects/ShoppingApp.MP4").default,
    title: "Shopping App",
    description: {
      About:
        "A standard E-commerce Shopping App with a cart, authentication and the feature for users to add their own products to the store.",
      Why: "This was a full stack mobile application, I built it to practise e-commerce elements,such as shopping carts. It was also a good playground for practising Redux and React Hooks. The application is also leaked to a database, and greatly uses the fetch function. ",
      How: "The Application was built from Expo, a React Native framework. It uses Redux to keep memory of products, users and orders in state. And all data is retrieved from A Firebase database, with the user authentication handled by Firebase.  ",
    },
    Software: [
      "React Native",
      "React Hooks",
      "React Navigations",
      "Redux",
      "Firebase",
    ],
    access: [
      {
        title: "GitHub",
        Link: "https://github.com/Tebogo11/The_Shop_App",
      },
    ],
  },
  {
    imageUrl: require("./ProjectImages/SolentMedical.png").default,
    videoUrl: require("../../videos/projects/solentMedcial.mp4").default,
    title: "Hospital Managament Web Application",
    description: {
      About:
        "This is a web application built to be used in hospitals. It allows Doctors and staff to edit patient medical records and put appointments on the system. It allows patients to view and make appointments, and also check their medical records. Any user can use the system to search for disease information such as Acromegaly.",
      Why: "I built these to practise, building a full stack PHP site, using all CRUD functions to create a useful real world website, with multiple functionalities ",
      How: "This is built from HTM/ PHP and MySQL. It has two versions, one that is built for clients and another built for staff. And these can be accessed based on access level",
    },
    Software: ["HTML/CSS", "PHP", "MySQL"],
    access: [
      {
        title: "GitHub",
        Link: "https://github.com/Tebogo11/SolentMedicalAssignment",
      },
      {
        title: "Website",
        Link: "https://solentmedical.herokuapp.com/System/SMS/Views/index.php",
      },
    ],
  },
  {
    imageUrl: require("./ProjectImages/PlaceToStay.jpeg").default,
    videoUrl: require("../../videos/projects/PlaceToStay.mp4").default,
    title: "Place To Stay",
    description: {
      About:
        "This is a hotel mobile application built for android, that allows users to save and share hotels, motals and airbnbs that other users to know their location.",
      Why: "I built this application because I wanted to practice building a native Android application using my Java skills",
      How: "I built this application in android studio, using java",
    },
    Software: ["Java", "Android Studios"],
    access: [
      {
        title: "GitHub",
        Link: "https://github.com/Tebogo11/MAD_Asignment---Tebogo-Dube",
      },
    ],
  },
];
