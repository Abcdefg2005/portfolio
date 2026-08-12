export const personalInfo = {
  name: "Kevin M. Logatiman",
  tagline: "3rd Year BSIT Student & Aspiring Full-Stack Developer",
  bio: [
    "I'm Kevin, a 3rd year Bachelor of Science in Information Technology student at Negros Oriental State University — Bayawan-Santa Catalina Campus (NORSU-BSC). I'm passionate about building clean, functional web applications and constantly leveling up my skills.",
    "When I'm not studying or coding, I enjoy exploring new technologies, working on personal projects, and finding creative ways to solve real-world problems through software."
  ],
  avatar: "/KEV.jpg",
  // Add your PDF to public/ (e.g. public/Kevin-Logatiman-Resume.pdf) and update this path
  resume: "#",
  location: "Bayawan City, Negros Oriental, PH",
  phone: "+63 (XXX) XXX-XXXX",
  social: {
    github: "https://github.com/Abcdefg2005",
    linkedin: "https://linkedin.com/in/kevin-logatiman",
    twitter: "https://twitter.com",
    email: "kevinlogatiman4@gmail.com"
  }
}

export const timelineData = [
  {
    year: "2025",
    title: "3rd Year BSIT @ NORSU-BSC",
    description: "Currently in my 3rd year, deepening my knowledge in web development, databases, and software engineering. Actively building projects to apply classroom concepts in real-world scenarios."
  },
  {
    year: "2024",
    title: "2nd Year BSIT @ NORSU-BSC",
    description: "Completed core IT subjects including data structures, object-oriented programming, and web development fundamentals. Started building personal projects using HTML, CSS, and JavaScript."
  },
  {
    year: "2023",
    title: "1st Year BSIT @ NORSU-BSC",
    description: "Began my journey in Information Technology at Negros Oriental State University — Bayawan-Santa Catalina Campus. Learned programming fundamentals and computer science basics."
  },
  {
    year: "2022",
    title: "Senior High School Graduate",
    description: "Completed Senior High School and developed an early interest in computers and technology, which led me to pursue a degree in Information Technology."
  }
]

export const skillsData = [
  { name: "React", level: 80, category: "frontend", icon: "⚛️" },
  { name: "JavaScript", level: 85, category: "frontend", icon: "📜" },
  { name: "HTML/CSS", level: 90, category: "frontend", icon: "🎨" },
  { name: "Tailwind CSS", level: 75, category: "frontend", icon: "💨" },
  { name: "Node.js", level: 70, category: "backend", icon: "🟢" },
  { name: "Python", level: 72, category: "backend", icon: "🐍" },
  { name: "MySQL", level: 75, category: "backend", icon: "🐬" },
  { name: "PHP", level: 68, category: "backend", icon: "🐘" },
  { name: "UI/UX Design", level: 65, category: "design", icon: "✨" },
  { name: "Git & GitHub", level: 80, category: "tools", icon: "🔀" },
  { name: "VS Code", level: 90, category: "tools", icon: "💻" },
  { name: "Vite", level: 75, category: "tools", icon: "⚡" }
]

export const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio website built with React and Vite, featuring smooth animations, particle background, and a fully responsive design.",
    tech: ["React", "Vite", "Framer Motion", "CSS"],
    color: "#6C63FF",
    github: "https://github.com/Abcdefg2005/portfolio",
    live: "#"
  },
  {
    id: 2,
    title: "Student Information System",
    description: "A web-based student information system for managing student records, grades, and enrollment built as a school project.",
    tech: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
    color: "#00C853",
    github: "https://github.com/Abcdefg2005",
    live: "#"
  },
  {
    id: 3,
    title: "Task Manager App",
    description: "A simple and clean task management app with CRUD operations, local storage persistence, and a responsive UI.",
    tech: ["React", "JavaScript", "CSS", "LocalStorage"],
    color: "#FF6D00",
    github: "https://github.com/Abcdefg2005",
    live: "#"
  },
  {
    id: 4,
    title: "Weather App",
    description: "A weather forecast application that fetches real-time data from OpenWeatherMap API and displays current conditions and 5-day forecast.",
    tech: ["JavaScript", "REST API", "HTML/CSS"],
    color: "#2979FF",
    github: "https://github.com/Abcdefg2005",
    live: "#"
  },
  {
    id: 5,
    title: "E-Commerce UI",
    description: "A front-end e-commerce product listing page with filtering, cart functionality, and a clean modern design.",
    tech: ["React", "CSS", "JavaScript"],
    color: "#D500F9",
    github: "https://github.com/Abcdefg2005",
    live: "#"
  },
  {
    id: 6,
    title: "Quiz App",
    description: "An interactive quiz application with multiple categories, score tracking, and a timer built for a school project.",
    tech: ["JavaScript", "HTML", "CSS"],
    color: "#00BCD4",
    github: "https://github.com/Abcdefg2005",
    live: "#"
  }
]

export const filterCategories = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "design", label: "Design" },
  { id: "tools", label: "Tools" }
]

export const testimonialsData = [
  {
    id: 1,
    name: "Secret Lang",
    role: "IT Instructor",
    institution: "NORSU-BSC",
    quote:
      "Kevin is one of the most dedicated students I've had the pleasure of teaching. His ability to quickly grasp complex programming concepts and apply them creatively in projects is truly impressive.",
    avatar: "👩‍🏫",
    rating: 5,
  },
  {
    id: 2,
    name: "Secret Lang",
    role: "Classmate & Peer",
    institution: "NORSU-BSC BSIT",
    quote:
      "Working on group projects with Kevin is always a great experience. He brings creative solutions to the table and writes clean, well-structured code. A dependable team player.",
    avatar: "👨‍💻",
    rating: 5,
  },
  {
    id: 3,
    name: "Secret Lang",
    role: "Project Partner",
    institution: "NORSU-BSC BSIT",
    quote:
      "Kevin designed the UI for our capstone project and it blew everyone away. He has a great eye for design and knows how to make interfaces feel intuitive and polished.",
    avatar: "👩‍💻",
    rating: 5,
  },
];

export const blogData = [
  {
    id: 1,
    title: "How I Built My First React App from Scratch",
    excerpt: "A step-by-step walkthrough of building a task manager application with React hooks, local storage, and a clean component architecture for beginners.",
    tags: ["React", "JavaScript", "Beginner"],
    readTime: "8 min read",
    date: "July 2025",
    link: "#",
    emoji: "⚛️"
  },
  {
    id: 2,
    title: "CSS Glassmorphism: A Practical Guide",
    excerpt: "Explore the glassmorphism UI trend — from backdrop-filter and rgba backgrounds to performance tips that keep animations buttery smooth.",
    tags: ["CSS", "UI/UX", "Design"],
    readTime: "6 min read",
    date: "June 2025",
    link: "#",
    emoji: "🪟"
  },
  {
    id: 3,
    title: "Git & GitHub for IT Students: Essential Workflow",
    excerpt: "Everything you need to know about Git branching, pull requests, and collaborating on code as a student — without the confusing jargon.",
    tags: ["Git", "GitHub", "Tools"],
    readTime: "5 min read",
    date: "May 2025",
    link: "#",
    emoji: "🔀"
  }
]


