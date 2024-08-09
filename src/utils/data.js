export const SKILLS = [
    {
      title: "Frontend",
      icon: "./programming.png",
      skills: [
        { skill: "React", percentage: "1 year" },
        { skill: "Angular", percentage: "1 year" },
        { skill: "HTML", percentage: "3 years +" },
        { skill: "CSS", percentage: "3 years +" },
      ],
    },
    {
      title: "Backend / Programming",
      icon: "./front-end.png",
      skills: [
        { skill: "Python", percentage: "3 years +" },
        { skill: "C#", percentage: "2 years" },
        { skill: "SQL", percentage: "2 years" },
        { skill: "Java", percentage: "1 year" },
        { skill: "C", percentage: "1 year" },
        { skill: "JavaScript", percentage: "1 year" },
      ],
    },
    {
      title: "Tools",
      icon: "./tools.jpg",
      skills: [
        { skill: "Git & GitHub", percentage: "2 years" },
        { skill: "Microsoft Azure", percentage: "1 year" },
        { skill: "Visual Studio", percentage: "3 years" },
        { skill: "Excel", percentage: "3 years" },
        { skill: "Linux", percentage: "3 years" },
      ],
    },
  ];
  

  export const WORK_EXPERIENCE = [
    {
      title: "Junior Software Developer",
      date: "September 2022 – April 2023",
      responsibilities: [
        "Developed and debugged the backend for a C# ASP.NET core web application",
        "Built API endpoints via Azure Cloud Services using Python and C#",
        "Wrote programs to transfer electronic monitoring data from Excel to a Microsoft Azure SQL Database",
        "Participated in team meetings and collaborated with senior software developers to design and maintain web applications from scratch"
      ],
    },
  ];
  
  export const PROJECTS = [
    {
      title: "Video Summarizer Using AI",
      language: "Python",
      description: ["Given a YouTube link, or a video on the local device the program generates a summary of the video",
        "Used the Whisper AI model to transcribe audio to text",
        "Implemented API calls to the Groq AI model for generating text summaries from transcriptions", 
        "Implemented recursive file searches and handling for audio files",
        "Utilized Python's os and shutil libraries for directory management, file creation, and clean-up operations",
      ],
    },
    {
      title: "Flight Tracker",
      language: "Python",
      description: ["Real-time flight tracking application for visualizing aircraft positions on an interactive map"
        ,"Utilized REST API to fetch real-time flight data from OpenSky Network"
        ,"Managed and transformed data using pandas and numpy for plotting"
        ,"Performed coordinate conversions from map geographical coordinates (WGS84) to Web Mercator."
      ],
    },
    {
      title: "Email APP",
      language: "Java",
      description: ["Developed a Java based application to automate the generation of company email addresses for new employees", 
        "Designed a random password generator with customizable length",
      "Used object-oriented principles by creating distinct classes and methods"],
    },
  ];