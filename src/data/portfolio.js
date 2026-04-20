// ─── ANKIT YADAV — PORTFOLIO DATA ────────────────────────────────────────────

export const personal = {
  name:      'Ankit Yadav',
  nameShort: 'AY',
  role:      'Full Stack Developer',
  tagline:   'I craft experiences, not just code.',
  bio: [
    "Hey! I'm Ankit Yadav, an MCA student at NIT Trichy with a passion for building fast, scalable, and beautiful web applications. I thrive at the intersection of clean code and great design.",
    "I specialize in full-stack web development — from crafting responsive frontends to building robust backends. I love turning complex problems into elegant, user-friendly solutions.",
    "When I'm not coding, you'll find me grinding DSA, competing in programming contests, or organizing events as the elected Class Representative of MCA 2nd year at NIT Trichy.",
  ],
  stats: [
    { value: '10+',   label: 'Projects Built' },
    { value: '8.45', label: 'CGPA at NIT' },
    { value: 'MCA',  label: 'NIT Trichy' },
    { value: 'CR',   label: 'Class Rep' },
  ],
  email:    'ankhgf4@gmail.com',
  github:   'https://github.com/JIGGL3',
  linkedin: 'https://www.linkedin.com/in/ankit-yadav-39b766316?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
  resume:   '/resume.pdf',
  location: 'NIT Trichy, Tamil Nadu',
  photo:    '/Portfolio/profile.png',
}

export const skills = [
  { category: 'Languages',       items: ['C++', 'C', 'Python', 'Java', 'JavaScript'] },
  { category: 'Frontend',        items: ['React', 'HTML', 'CSS', 'Responsive Design', 'Figma'] },
  { category: 'Backend',         items: ['Node.js', 'REST APIs', 'Authentication', 'WebSockets'] },
  { category: 'Tools & Others',  items: ['Git', 'Visual Studio', 'GitHub', 'Postman'] },
]

export const projects = [
  {
    id: 1, num: '01',
    title: 'BuzzIt',
    subtitle: 'Social Media Web Application',
    description: 'A fully functional social media platform built at NIT Trichy under mentorship of Dr. U. Srinivasulu Reddy. Features user authentication, post creation, real-time updates, and a fully responsive UI — a comprehensive full-stack development experience.',
    tags: ['React', 'Node.js', 'REST API', 'Authentication', 'Real-time'],
    link: '#', github: 'https://github.com/JIGGL3', featured: true, image: null, imageTheme: 'violet',
  },
  {
    id: 2, num: '02',
    title: 'Code Obstructor',
    subtitle: 'Code Protection Tool',
    description: 'A developer tool that obfuscates and protects competitive programming solutions. Helps programmers secure their code logic while sharing snippets — smart transformation algorithms keep code functionally identical but structurally unreadable.',
    tags: ['JavaScript', 'C++', 'Algorithms', 'Developer Tools'],
    link: '#', github: 'https://github.com/JIGGL3', featured: true, image: null, imageTheme: 'amber',
  },
  {
    id: 3, num: '03',
    title: 'Multiplayer Quiz Game',
    subtitle: 'Real-time Math Battle',
    description: 'A real-time multiplayer math quiz game for competitive play. Players join via a generated session link and battle through randomized math questions. Features live leaderboard rankings and real-time score tracking.',
    tags: ['JavaScript', 'WebSockets', 'Real-time', 'Node.js'],
    link: '#', github: 'https://github.com/JIGGL3', featured: false, image: null, imageTheme: 'rose',
  },
  {
    id: 4, num: '04',
    title: 'URL Shortener',
    subtitle: 'Link Management Tool',
    description: 'A clean, fast URL shortener that converts long links into compact shareable URLs. Features click analytics, custom aliases, and a minimal dashboard to track link performance over time.',
    tags: ['Node.js', 'JavaScript', 'REST API', 'Database'],
    link: '#', github: 'https://github.com/JIGGL3', featured: false, image: null, imageTheme: 'teal',
  },
]

export const positions = [
  {
    title: "Class Representative, MCA",
    org: 'NIT Trichy',
    period: 'July 2025 – Present',
    description: 'Elected CR for MCA 2nd year — liaison between students and faculty, coordinating academic activities and fostering a collaborative learning environment.',
    icon: '🎓',
  },
  {
    title: "Volunteer, Version'25",
    org: 'All-India MCA Meet, NIT Trichy',
    period: 'Mar 2025',
    description: "Worked with the ARC (Alumni Relations Cell), connecting with MCA alumni for event invitations, coordinating talks, and supporting fundraising efforts.",
    icon: '🤝',
  },
  {
    title: "Organizer, Orientation Batch'28",
    org: 'NIT Trichy',
    period: 'Aug 2025',
    description: 'Organized the orientation for MCA first-semester batch — introducing curriculum, campus facilities, and extracurricular opportunities to new students.',
    icon: '📋',
  },
]

export const achievements = [
  { icon: '🏃', text: "Represented MCA dept. in 10 km marathon at Sportsfete'24, NIT Trichy" },
  { icon: '🥉', text: "Secured 3rd place in March-Past at Sportsfete'24, NIT Trichy" },
]

export const testimonials = [
  {
    quote: 'Ankit is one of the most dedicated and driven students I have mentored. His grasp of full-stack concepts and ability to ship working software under tight deadlines is exceptional.',
    name: 'Dr. U. Srinivasulu Reddy', role: 'Associate Professor', company: 'NIT Trichy', initials: 'SR', color: 'violet',
  },
  {
    quote: 'As a fellow student and colleague, Ankit consistently brings creative solutions to the table. His code is clean and well-structured, and he is always ready to help the team.',
    name: 'Batch Colleague', role: 'MCA Student', company: 'NIT Trichy', initials: 'BC', color: 'amber',
  },
  {
    quote: 'Ankit served as an outstanding Class Representative — always professional, approachable, and effective in bridging communication between students and faculty.',
    name: 'Faculty Member', role: 'Department Faculty', company: 'NIT Trichy', initials: 'FM', color: 'rose',
  },
]

export const typewriterPhrases = [
  'full-stack apps.',
  'clean UIs.',
  'real-time systems.',
  'scalable backends.',
  'great software.',
]
