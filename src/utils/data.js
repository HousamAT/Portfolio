// Skills data array
export const SKILLS = [
  {
    title: "Frontend", // Skill category title
    icon: "./programming.png", // Icon for the frontend skills
    skills: [ // Array of specific skills under the frontend category
      { skill: "React", percentage: "1 year" }, // Skill with name and experience duration
      { skill: "Angular", percentage: "1 year" },
      { skill: "HTML", percentage: "3 years +" },
      { skill: "CSS", percentage: "3 years +" },
    ],
  },
  {
    title: "Backend / Programming", // Skill category title for backend programming
    icon: "./front-end.png", // Icon for the backend skills
    skills: [ // Array of specific skills under the backend category
      { skill: "Python", percentage: "3 years +" },
      { skill: "C#", percentage: "2 years" },
      { skill: "SQL", percentage: "2 years" },
      { skill: "Java", percentage: "1 year" },
      { skill: "C", percentage: "1 year" },
      { skill: "JavaScript", percentage: "1 year" },
    ],
  },
  {
    title: "Tools", // Skill category title for tools
    icon: "./tools.jpg", // Icon for the tools
    skills: [ // Array of specific tools with experience duration
      { skill: "Git & GitHub", percentage: "2 years" },
      { skill: "Microsoft Azure", percentage: "1 year" },
      { skill: "Visual Studio", percentage: "3 years" },
      { skill: "Excel", percentage: "3 years" },
      { skill: "Linux", percentage: "3 years" },
    ],
  },
];

// Work experience data array
export const WORK_EXPERIENCE = [
  {
    title: "Junior Software Developer", // Job title
    date: "September 2022 – April 2023", // Duration of employment
    responsibilities: [ // List of job responsibilities
      "Developed and debugged the backend for a C# ASP.NET core web application",
      "Built API endpoints via Azure Cloud Services using Python and C#",
      "Wrote programs to transfer electronic monitoring data from Excel to a Microsoft Azure SQL Database",
      "Participated in team meetings and collaborated with senior software developers to design and maintain web applications from scratch"
    ],
  },
];

// Projects data array
export const PROJECTS = [
  {
    title: "Expense Tracker Web Application", // Project title
    language: "Python (Flask), JavaScript, MongoDB", // Technologies used
    description: [ // List of project features and functionalities
      "Developed a full-stack expense tracking application using Flask for the backend and React for the frontend",
      "Utilized MongoDB Atlas for database management",
      "Integrated React Router for smooth navigation across the app's components, including login, sign-up, and dashboard",
      "Implemented user authentication, transaction management, and real-time expense tracking features",
    ],
  },
  {
    title: "Video Summarizer Using AI", // Project title
    language: "Python", // Technologies used
    description: [ // List of project features and functionalities
      "Given a YouTube link, or a video on the local device the program generates a summary of the video",
      "Used the Whisper AI model to transcribe audio to text",
      "Implemented API calls to the Groq AI model for generating text summaries from transcriptions",
      "Implemented recursive file searches and handling for audio files",
      "Utilized Python's os and shutil libraries for directory management, file creation, and clean-up operations",
    ],
  },
  {
    title: "Survey Generator Application", // Project title
    language: "Java", // Technologies used
    description: [ // List of project features and functionalities
      "Developed a Java-based console application to create, save, and take surveys with various question types",
      "Created core classes, applying encapsulation to manage survey data and ensure proper access control",
      "Implemented getter and setter methods to manage and protect data access",
    ],
  },
];
