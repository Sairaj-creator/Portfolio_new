export const projects = [
  {
    id: 'SCAN_01',
    title: 'Sahaay AI',
    date: 'Jul 2026',
    summary: 'AI-powered assistive React web app delivering real-time scene descriptions and offline currency detection for visually impaired users.',
    metric: 'sub-2s vision responses',
    tags: ['React', 'Node.js', 'SQLite', 'ONNX Runtime Web', 'TensorFlow.js', 'AI APIs'],
    links: [
      { label: 'Live', href: 'https://sahaay-ai-7aio.onrender.com' },
      { label: 'GitHub', href: 'https://github.com/Sairaj-creator/Sahaay_AI' },
    ],
    bullets: [
      'Architected real-time scene descriptions via vision models with sub-2-second response times.',
      'Integrated ONNX Runtime Web and TensorFlow.js for sub-100ms offline currency detection.',
      'Built a secure Node.js proxy for Gemini/Llama APIs with 30 requests/min rate limiting.',
      'Persisted 128-dimensional facial embeddings in SQLite across continuous Render deployments.',
    ],
    caseStudy: {
      problem: 'Visually impaired users need to understand their surroundings and identify currency without relying on someone else, and most existing tools require constant internet access.',
      constraint: 'Cloud vision APIs are too slow for live guidance, and running full vision models entirely offline on modest hardware risks unusable latency or battery drain.',
      decision: 'Split the workload: cloud vision models handle rich scene description where a couple seconds is acceptable, while a lightweight on-device model handles the higher-frequency currency detection task.',
      result: 'Sub-2-second scene descriptions alongside sub-100ms offline currency recognition, backed by a rate-limited proxy that keeps the app usable and cost-controlled under real traffic.',
    },
  },
  {
    id: 'SCAN_02',
    title: 'ZenCode',
    date: 'Dec 2025',
    summary: 'TypeScript VS Code extension that monitors cognitive load and nudges developers into healthier debugging patterns.',
    metric: '90+ marketplace users',
    tags: ['TypeScript', 'VS Code API', 'Chart.js', 'Developer Tools', 'Wellness'],
    links: [
      { label: 'Marketplace', href: 'https://marketplace.visualstudio.com/items?itemName=sairajdev.zencode' },
      { label: 'GitHub', href: 'https://github.com/Sairaj-creator/zencode' },
    ],
    bullets: [
      'Deployed a productivity extension to the VS Code Marketplace, currently used by 90+ developers.',
      'Engineered a stress-detection algorithm using keystroke dynamics, file switching, and backspace spikes.',
      'Integrated a theme-aware Chart.js dashboard and an Auto Zen Mode through the VS Code API.',
    ],
  },
  {
    id: 'SCAN_03',
    title: 'Real-time Stress Monitoring System',
    date: 'Jan 2026',
    summary: 'Computer-vision monitoring tool that maps facial geometry into a live stress index across seven emotional states.',
    metric: '1st place, project expo',
    tags: ['Python', 'Flask', 'OpenCV', 'Random Forest', 'MediaPipe Face Mesh', 'Computer Vision'],
    links: [
      { label: 'GitHub', href: 'https://github.com/sathvik-dvdg/Real-time-StressMonitoring-System' },
      { label: 'Showcase', href: 'https://www.linkedin.com/posts/sairaj-borkar_machinelearning-artificialintelligence-computervision-ugcPost-7435015030347264000-76UQ/' },
    ],
    bullets: [
      'Processed live video feeds at 30+ FPS with Python, Flask, and OpenCV.',
      'Trained a Random Forest classifier on 3,500+ images to categorize seven emotional states.',
      'Used MediaPipe Face Mesh to map six physiological markers to a real-time stress index.',
    ],
  },
];

export const skillGroups = [
  { label: 'Languages', icon: 'i-code', items: ['Java', 'Python', 'TypeScript', 'SQL', 'C', 'HTML5', 'CSS3'] },
  { label: 'Frameworks', icon: 'i-layers', items: ['React JS', 'Angular JS', 'React Native', 'Node.js', 'Express.js', 'GraphQL', 'FastAPI', 'Flask'] },
  { label: 'Data & Tools', icon: 'i-db', items: ['PostgreSQL', 'Firebase', 'AWS Basic', 'Git', 'GitHub', 'Linux', 'Jenkins'] },
  { label: 'Concepts', icon: 'i-brain', items: ['DSA', 'OOP', 'CI/CD', 'Agile Methodology', 'Prompt Engineering', 'AI-Assisted Development'] },
];

export const hackathons = [
  { title: 'The Bengaluru AI Hackathon', result: 'Top 5 Finalist', detail: 'National-level inter-college AI hackathon organized by Sapthagiri NPS University, May 2026.', stat: 'Top 5' },
  { title: 'KVG Sulia Hackathon', result: 'Top 50 Finalist', detail: 'Shortlisted among 1,000+ registered participants for rapid problem-solving and prototyping.', stat: '1,000+', link: 'https://www.linkedin.com/posts/sairaj-borkar_hackwise2-byteloggers-kvgcehackathon-ugcPost-7478516754605080576-R2dU/' },
];

export const recognition = [
  { icon: 'i-brief', title: 'Core Contributor — Orbit', detail: 'Contributed to UI design and frontend architecture of a live production app.', href: 'https://www.joinorbit.org/', cta: 'Live app' },
  { icon: 'i-trophy', title: 'Mini Project Expo', detail: 'Won 1st place at Canara Engineering College in 2025 for the real-time stress monitoring system.', cta: '1st place' },
  { icon: 'i-sparkle', title: 'AI/CV Project Showcase', detail: 'Shared the machine learning and computer vision build publicly on LinkedIn.', href: 'https://www.linkedin.com/posts/sairaj-borkar_machinelearning-artificialintelligence-computervision-ugcPost-7435015030347264000-76UQ/', cta: 'Post' },
];

export const certifications = [
  {
    title: 'Java Programming', issuer: 'NPTEL & GeeksforGeeks',
    detail: 'Elite Certification with an 84% NPTEL score, plus foundational Java coursework via GFG.',
    links: [
      { label: 'NPTEL', href: 'https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs110/Course/NPTEL25CS110S36280043210805086.pdf' },
      { label: 'GFG', href: 'https://media.geeksforgeeks.org/courses/certificates/091c3b58f2da05cf1b16f917e9cf5b6d.pdf' },
    ],
  },
  {
    title: 'SQL Intermediate', issuer: 'HackerRank',
    detail: 'Verified proficiency in complex relational database queries.',
    links: [{ label: 'Certificate', href: 'https://www.hackerrank.com/certificates/iframe/adfa8865f29c' }],
  },
  {
    title: 'Full Stack Web Development', issuer: 'Udemy',
    detail: 'Comprehensive bootcamp covering React, Node.js, and SQL database design.',
    links: [],
  },
];

export const contactLinks = [
  { label: 'Email', value: 'sairajborkar31@gmail.com', href: 'mailto:sairajborkar31@gmail.com', icon: 'i-mail' },
  { label: 'Phone', value: '+91 88616 71363', href: 'tel:+918861671363', icon: 'i-phone' },
  { label: 'GitHub', value: 'github.com/Sairaj-creator', href: 'https://github.com/Sairaj-creator', icon: 'i-github' },
  { label: 'LinkedIn', value: 'in/sairaj-borkar', href: 'https://www.linkedin.com/in/sairaj-borkar/', icon: 'i-linkedin' },
];
