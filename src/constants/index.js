import project1 from "../assets/rentiva.jpg";
import project2 from "../assets/DigiCourt.jpg";
import project3 from "../assets/portfolio_img.jpg";
import project4 from "../assets/pattern_analyzer.jpg";

export const HERO_CONTENT = `I am an enthusiastic frontend developer with a passion for building engaging and user-friendly web applications. With a strong foundation in HTML, CSS, and JavaScript, and a growing familiarity with frameworks like React, I am eager to continue learning and expanding my skill set. My goal is to create visually appealing and responsive interfaces that enhance user experiences and contribute to successful projects.`;

export const ABOUT_TEXT = `I am a dedicated and versatile frontend developer with a passion for creating efficient and visually engaging web applications. With a foundation in HTML, CSS, and JavaScript, and growing experience in React, I’m excited to keep learning and building skills in web development. My journey started from a curiosity about how websites work, evolving into a focused career where I seek to learn and take on new challenges. I enjoy working with others to solve problems and aim to deliver user-friendly solutions. Outside of coding, I stay active, explore new technologies, and enjoy connecting with the developer community.`;

export const EXPERIENCES = [
  {
    year: "March 2022 - May 2022",
    role: "AI Intern",
    company: "Rinex",
    description: `Performed Exploratory Data Analysis on IPL matches (2008-2019), created models for Sentiment Analysis, and developed an Image Classifier for the Fashion MNIST dataset.`,
    technologies: ["Python",
    "Pandas",
    "Matplotlib",
    "Seaborn",
    "NLTK",
    "TextBlob",
    "TensorFlow",
    "Keras"],
  },
  {
    year: "March 2024 - June 2024",
    role: "AI Research Intern",
    company: "West London University",
    description: `Developed a hybrid AI model to predict student learning outcomes in virtual education games by analyzing click-based interaction data.`,
    technologies: ["Python",
    "Scikit-Learn",
    "TensorFlow/Keras",
    "Pandas",
    "NumPy"],
  },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "Decentralized Property Renting Site",
    image: project1,
    description:
      "Rentiva is a decentralized platform revolutionizing property rentals with secure, transparent, and efficient transactions powered by blockchain technology, providing a seamless alternative to traditional rental processes.",
    technologies: ["React", "Node.js",
    "Smart Contracts",
    "Ethereum",
    ],
  },
  {
    title: "DigiCourt",
    image: project2,
    description:
      "Developed a blockchain-based platform for the legal industry, enhancing document security, transparency, and immutability, while streamlining processes through smart contracts and decentralized storage solutions.",
    technologies: ["React", "Node.js",
    "Smart Contracts",
    "Polygon",
    "Solidity",],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React"],
  },
  {
    title: "Pattern Analyer",
    image: project4,
    description:
      "Developed a hybrid AI model that predicts student learning outcomes in virtual education games by analyzing click-based interaction data. This model integrates multiple machine learning techniques to provide insights into user behavior and improve educational strategies.",
    technologies: ["Python",
    "Machine Learning",
    "Deep Learning",
    "Scikit-Learn",
    "TensorFlow/Keras",
    "Pandas",
    "NumPy"],
  },
];

export const CONTACT = {
  address: "",
  phoneNo: "+91 9924748951",
  email: "spydplayz@gmail.com",
};
