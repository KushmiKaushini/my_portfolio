export const defaultConfig = {
  site: {
    title: 'Kaushini K. Ekanayake — Android Developer',
    description: 'Offline-first mobile applications and AI-enabled experiences.',
    socialLinks: [
      { id: 'github', name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/KushmiKaushini' },
      { id: 'linkedin', name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/k-kaushini-k-ekanayake-1b86b9254' },
      { id: 'facebook', name: 'Facebook', icon: 'fab fa-facebook', url: 'https://facebook.com' },
      { id: 'instagram', name: 'Instagram', icon: 'fab fa-instagram', url: 'https://instagram.com' }
    ]
  },
  hero: {
    name: 'Kaushini K. Ekanayake',
    subtitleOptions: [
      'Android Developer',
      'UI/UX Enthusiast',
      'Mobile App Builder',
      'Problem Solver'
    ],
    description: 'Building offline-first mobile applications with seamless user experiences.',
    ctas: [
      { id: 'projects', label: 'View Projects', target: 'projects', type: 'primary' },
      { id: 'contact', label: 'Contact Me', target: 'contact', type: 'secondary' }
    ],
    avatarEmoji: '👩‍💻',
    imageUrl: 'https://via.placeholder.com/300?text=Kushmi+Kaushini',
    order: 1
  },
  about: {
    introParagraphs: [
      "Hi! I'm Kaushini K. Ekanayake — a motivated and fast-learning Mobile Application Developer Intern based in Matara, Sri Lanka.",
      "I'm currently pursuing a BSc (Hons) in Information Technology at Horizon Campus (Expected 2027), specializing in Mobile App Development and AI Applications.",
      "I have hands-on experience in Android development, Flutter, and offline-first application design, having built multiple mobile projects including an AI-powered offline education platform (RAG architecture), a voice-to-task LLM assistant, and a real-time logistics route optimizer using React Native and Google Maps API."
    ],
    highlights: [
      { id: 'mobile', icon: 'fas fa-mobile-alt', text: 'Mobile Application Developer Intern with hands-on Android & Flutter experience' },
      { id: 'offline', icon: 'fas fa-wifi', text: 'Specializes in offline-first application design using SQLite, SharedPreferences & RAG architecture' },
      { id: 'ai', icon: 'fas fa-brain', text: 'Built AI-integrated mobile solutions including LLM-powered voice assistants and RAG-enabled education apps' },
      { id: 'api', icon: 'fas fa-code', text: 'Proficient in RESTful API integration, Google Maps API, and Google Gemini API' },
      { id: 'web', icon: 'fas fa-globe', text: 'Full-stack web experience: HTML/CSS, JavaScript, PHP, MySQL, and React.js' },
      { id: 'data', icon: 'fas fa-chart-line', text: 'Data science skills in Python: ML models, NLP, and predictive analytics with Scikit-learn' },
      { id: 'opensource', icon: 'fab fa-github', text: 'Active open-source contributor with 50+ commits across mobile, AI, and full-stack repositories' },
      { id: 'team', icon: 'fas fa-users', text: 'Effective team player with strong documentation, system design, and communication skills' }
    ],
    contactLinks: [
      { id: 'email', icon: 'fas fa-envelope', label: 'kushmi1428@gmail.com', href: 'mailto:kushmi1428@gmail.com' },
      { id: 'github', icon: 'fab fa-github', label: 'github.com/KushmiKaushini', href: 'https://github.com/KushmiKaushini' },
      { id: 'linkedin', icon: 'fab fa-linkedin', label: 'LinkedIn Profile', href: 'https://linkedin.com/in/k-kaushini-k-ekanayake-1b86b9254' },
      { id: 'phone', icon: 'fas fa-phone', label: '+94 78 841 3056', href: 'tel:+94788413056' },
      { id: 'location', icon: 'fas fa-map-marker-alt', label: 'Matara, Sri Lanka', href: null }
    ]
  },
  skills: {
    categories: [
      {
        id: 'programming',
        title: 'Programming Languages',
        icon: 'fas fa-code',
        order: 1,
        skills: [
          { id: 'js', name: 'JavaScript', level: 'Strong' },
          { id: 'html-css', name: 'HTML5 & CSS3', level: 'Strong' },
          { id: 'python', name: 'Python', level: 'Intermediate' },
          { id: 'csharp', name: 'C#', level: 'Intermediate' },
          { id: 'sql', name: 'SQL', level: 'Intermediate' },
          { id: 'php', name: 'PHP', level: 'Intermediate' },
          { id: 'dart', name: 'Dart', level: 'Intermediate' },
          { id: 'java', name: 'Java', level: 'Intermediate' },
          { id: 'typescript', name: 'TypeScript', level: 'Beginner' },
          { id: 'cpp', name: 'C++', level: 'Beginner' }
        ]
      },
      {
        id: 'mobile',
        title: 'Mobile Development',
        icon: 'fas fa-mobile-alt',
        order: 2,
        skills: [
          { id: 'flutter', name: 'Flutter', level: 'Intermediate' },
          { id: 'react-native', name: 'React Native', level: 'Intermediate' },
          { id: 'android-studio', name: 'Android Studio', level: 'Intermediate' },
          { id: 'android-sdk', name: 'Android SDK / Java', level: 'Intermediate' },
          { id: 'sqlite', name: 'SQLite', level: 'Strong' },
          { id: 'sharedpreferences', name: 'SharedPreferences', level: 'Intermediate' },
          { id: 'riverpod', name: 'Riverpod (State Mgmt)', level: 'Intermediate' },
          { id: 'workmanager', name: 'WorkManager', level: 'Beginner' },
          { id: 'offline-first', name: 'Offline-First Design', level: 'Strong' }
        ]
      },
      {
        id: 'ai',
        title: 'AI & Machine Learning',
        icon: 'fas fa-brain',
        order: 3,
        skills: [
          { id: 'gemini', name: 'Google Gemini API (LLM)', level: 'Intermediate' },
          { id: 'rag', name: 'RAG Architecture', level: 'Intermediate' },
          { id: 'sentence-transformers', name: 'Sentence-Transformers', level: 'Intermediate' },
          { id: 'bert', name: 'Local BERT (ONNX/TFLite)', level: 'Beginner' },
          { id: 'yolov8', name: 'YOLOv8 (Computer Vision)', level: 'Intermediate' },
          { id: 'nlp', name: 'NLP / Text Classification', level: 'Intermediate' },
          { id: 'scikit', name: 'Scikit-learn', level: 'Intermediate' },
          { id: 'pandas', name: 'Pandas / NumPy', level: 'Intermediate' },
          { id: 'speech', name: 'Speech-to-Text Integration', level: 'Intermediate' },
          { id: 'fake-news', name: 'Fake News Detection (NLP)', level: 'Intermediate' }
        ]
      },
      {
        id: 'frontend',
        title: 'Frontend Development',
        icon: 'fas fa-palette',
        order: 4,
        skills: [
          { id: 'react', name: 'React.js', level: 'Intermediate' },
          { id: 'tailwind', name: 'Tailwind CSS', level: 'Intermediate' },
          { id: 'framer', name: 'Framer Motion', level: 'Beginner' },
          { id: 'responsive', name: 'Responsive Web Design', level: 'Strong' },
          { id: 'flex-grid', name: 'CSS Flexbox & Grid', level: 'Strong' },
          { id: 'dom', name: 'DOM Manipulation', level: 'Strong' },
          { id: 'dark-mode', name: 'Dark Mode UI Design', level: 'Intermediate' },
          { id: 'figma', name: 'Figma (Prototyping)', level: 'Intermediate' }
        ]
      },
      {
        id: 'backend',
        title: 'Backend & Databases',
        icon: 'fas fa-database',
        order: 5,
        skills: [
          { id: 'mysql', name: 'MySQL', level: 'Strong' },
          { id: 'fastapi', name: 'FastAPI (Python)', level: 'Intermediate' },
          { id: 'php-backend', name: 'PHP', level: 'Intermediate' },
          { id: 'xampp', name: 'XAMPP / Apache', level: 'Intermediate' },
          { id: 'postgis', name: 'PostGIS', level: 'Beginner' },
          { id: 'sql-server', name: 'SQL Server', level: 'Intermediate' },
          { id: 'crud', name: 'CRUD Operations', level: 'Strong' },
          { id: 'sessions', name: 'Session Handling', level: 'Intermediate' },
          { id: 'rest', name: 'REST API Integration', level: 'Intermediate' }
        ]
      },
      {
        id: 'engineering',
        title: 'Software Engineering',
        icon: 'fas fa-sitemap',
        order: 6,
        skills: [
          { id: 'requirements', name: 'Requirements Gathering', level: 'Intermediate' },
          { id: 'erd-dfd', name: 'ERD & DFD Diagrams', level: 'Intermediate' },
          { id: 'role-based', name: 'Role-Based Systems', level: 'Intermediate' },
          { id: 'oop', name: 'OOP Principles', level: 'Intermediate' },
          { id: 'modular', name: 'Modular Architecture', level: 'Intermediate' },
          { id: 'agent-design', name: 'AI Agent System Design', level: 'Beginner' },
          { id: 'multi-agent', name: 'Multi-Agent Architecture', level: 'Beginner' }
        ]
      },
      {
        id: 'tools',
        title: 'Tools & Platforms',
        icon: 'fas fa-tools',
        order: 7,
        skills: [
          { id: 'git', name: 'Git & GitHub', level: 'Strong' },
          { id: 'vscode', name: 'VS Code', level: 'Strong' },
          { id: 'android-studio-tools', name: 'Android Studio', level: 'Intermediate' },
          { id: 'visual-studio', name: 'Visual Studio', level: 'Intermediate' },
          { id: 'jupyter', name: 'Jupyter Notebook', level: 'Intermediate' },
          { id: 'streamlit', name: 'Streamlit', level: 'Intermediate' },
          { id: 'actions', name: 'GitHub Actions (CI/CD)', level: 'Beginner' },
          { id: 'maps', name: 'Google Maps API', level: 'Intermediate' }
        ]
      }
    ]
  },
  projects: {
    categories: ['All', 'Mobile & AI', 'Web & Frontend', 'Data Science & Backend', 'Specialized'],
    items: [
      {
        id: 'smartLogistics',
        category: 'Mobile & AI',
        icon: 'fas fa-route',
        title: 'AI Smart Logistics Assistant',
        subtitle: 'Cross-Platform Mobile App',
        platform: 'React Native (iOS & Android)',
        tools: 'React Native, TypeScript, Google Maps API, REST API, Git',
        description: 'A premium real-time route optimization platform for logistics operations in Colombo, Sri Lanka.',
        order: 1
      },
      {
        id: 'aiMentor',
        category: 'Mobile & AI',
        icon: 'fas fa-microphone-alt',
        title: 'AI Personal Mentor',
        subtitle: 'Voice-to-Task Academic Assistant',
        platform: 'Flutter (Android)',
        tools: 'Flutter, Dart, Google Gemini API (LLM), SQLite, Speech-to-Text, SharedPreferences',
        description: 'A voice-powered academic productivity assistant that converts natural language conversations into structured study schedules.',
        order: 2
      },
      {
        id: 'offlineAiEdu',
        category: 'Mobile & AI',
        icon: 'fas fa-brain',
        title: 'Offline AI Education App',
        subtitle: 'RAG-Enabled Learning Platform',
        platform: 'Flutter (Android)',
        tools: 'Flutter, RAG Architecture, Google Gemini API, ObjectBox/SQLite, Sentence-Transformers, Local BERT (ONNX/TFLite), Riverpod',
        description: 'An offline-first AI-powered education platform for Sri Lankan students with semantic search and AI assistance.',
        order: 3
      },
      {
        id: 'milestonePro',
        category: 'Mobile & AI',
        icon: 'fas fa-tasks',
        title: 'MilestonePro',
        subtitle: 'Productivity & Milestone Tracker',
        platform: 'Flutter (Android)',
        tools: 'Flutter, Dart, SharedPreferences, WorkManager, Material Design',
        description: 'A minimalist productivity tracker with local persistence, task reminders, and background scheduling.',
        order: 4
      },
      {
        id: 'whaleLink',
        category: 'Mobile & AI',
        icon: 'fas fa-water',
        title: 'WhaleLink',
        subtitle: 'Final Year Project – Marine AI Platform',
        platform: 'Python / FastAPI Backend',
        tools: 'Python, FastAPI, YOLOv8, PostGIS, Satellite Imagery Processing',
        description: 'An AI-powered marine intelligence platform focused on satellite imagery analysis and object detection.',
        order: 5
      },
      {
        id: 'offlineeduapp',
        category: 'Mobile & AI',
        icon: 'fas fa-graduation-cap',
        title: 'OfflineEduApp',
        subtitle: 'Android Education App',
        duration: '2025 – Present',
        role: 'Lead Android Developer',
        platform: 'Android (Java, SQLite)',
        tools: 'Java, SQLite, Android Studio',
        description: 'A role-based educational app designed for offline usage with Student and Teacher dashboards.',
        order: 6
      },
      {
        id: 'plasticWaste',
        category: 'Mobile & AI',
        icon: 'fas fa-recycle',
        title: 'Plastic Waste App',
        subtitle: 'SDG 14 Initiative',
        platform: 'Android (Front-End Only)',
        tools: 'Android Studio',
        description: 'Designed clean UI screens with eco-friendly advice and a plastic usage tracker.',
        order: 7
      },
      {
        id: 'climateEducation',
        category: 'Mobile & AI',
        icon: 'fas fa-cloud-sun',
        title: 'Climate Education App',
        subtitle: 'SDG 13 Initiative',
        platform: 'Android (Front-End Only)',
        tools: 'Android Studio, XML',
        description: 'Offline learning app for school children (Grades 1–13) with grade-based content navigation.',
        order: 8
      },
      {
        id: 'portfolio',
        category: 'Web & Frontend',
        icon: 'fas fa-laptop-code',
        title: 'My Portfolio',
        subtitle: 'React Developer Portfolio',
        tools: 'React.js, Tailwind CSS, Framer Motion, GitHub Actions',
        description: 'A modern developer portfolio showcasing projects, skills, animations, and responsive UI.',
        order: 9
      },
      {
        id: 'saasLanding',
        category: 'Web & Frontend',
        icon: 'fas fa-globe',
        title: 'SaaS Landing Page',
        subtitle: 'Responsive Frontend UI',
        tools: 'HTML5, CSS3, JavaScript, CSS Flexbox & Grid',
        description: 'A responsive SaaS landing page with polished modern UI and interactive features.',
        order: 10
      },
      {
        id: 'weatherApp',
        category: 'Web & Frontend',
        icon: 'fas fa-cloud-sun-rain',
        title: 'Weather App Frontend',
        subtitle: 'API-Driven Weather UI',
        tools: 'HTML5, CSS3, JavaScript, Weather API',
        description: 'A clean weather application frontend displaying weather information using external APIs.',
        order: 11
      },
      {
        id: 'quickNotes',
        category: 'Web & Frontend',
        icon: 'fas fa-sticky-note',
        title: 'Quick Lecture Notes',
        subtitle: 'Web Note-Taking App',
        tools: 'HTML5, CSS3, JavaScript, LocalStorage API',
        description: 'A lightweight note-taking web app with auto-save and sidebar organization.',
        order: 12
      },
      {
        id: 'giftHevan',
        category: 'Web & Frontend',
        icon: 'fas fa-gift',
        title: 'GiftHevan',
        subtitle: 'Online Gift Shop',
        details: 'Team Size: 7',
        tools: 'HTML, CSS, JavaScript, PHP, MySQL, XAMPP',
        role: 'Front-End Developer & Database Integrator',
        description: 'Designed core pages, created database tables, integrated MySQL backend using PHP for dynamic content.',
        order: 13
      },
      {
        id: 'libraryManagement',
        category: 'Web & Frontend',
        icon: 'fas fa-book',
        title: 'Library Management',
        subtitle: 'Horizon Campus',
        tools: 'PHP, MySQL, DFD/ER Diagram tools',
        role: 'System Designer & Developer',
        description: 'Conducted requirements gathering, documented functional requirements, and built a prototype for loan transactions.',
        order: 14
      },
      {
        id: 'housePrice',
        category: 'Data Science & Backend',
        icon: 'fas fa-chart-line',
        title: 'House Price Prediction',
        subtitle: 'ML Regression Model',
        tools: 'Python, Pandas, Scikit-learn, NumPy',
        description: 'A predictive ML model for estimating house prices using historical datasets and regression techniques.',
        order: 15
      },
      {
        id: 'streamlitML',
        category: 'Data Science & Backend',
        icon: 'fas fa-chart-bar',
        title: 'Streamlit ML App',
        subtitle: 'Interactive ML Dashboard',
        tools: 'Python, Streamlit, Pandas, Scikit-learn',
        description: 'An interactive ML dashboard for experimenting with models and visualizing predictive outputs.',
        order: 16
      },
      {
        id: 'fakeNews',
        category: 'Data Science & Backend',
        icon: 'fas fa-newspaper',
        title: 'Fake News Detection',
        subtitle: 'NLP Text Classification',
        tools: 'Python, Jupyter Notebook, NLTK/SpaCy, Scikit-learn',
        description: 'A text classification system that identifies fake and genuine news articles using NLP.',
        order: 17
      },
      {
        id: 'universityMgmt',
        category: 'Data Science & Backend',
        icon: 'fas fa-university',
        title: 'University Management System',
        subtitle: 'GUI-Based Desktop App',
        tools: 'C#, .NET Framework, SQL Server, Windows Forms',
        description: 'A management platform for student and administrative operations using OOP and database design.',
        order: 18
      },
      {
        id: 'bikePlanner',
        category: 'Specialized',
        icon: 'fas fa-bicycle',
        title: 'Safe Bike Ride Planner',
        subtitle: 'Safety-Focused Route System',
        tools: 'Batch Scripting, Weather API, Location Data Processing',
        description: 'A safety-focused planner that evaluates weather and air quality to recommend safe cycling routes.',
        order: 19
      },
      {
        id: 'calculator',
        category: 'Specialized',
        icon: 'fas fa-calculator',
        title: 'Basic Calculator',
        subtitle: 'Event-Driven JavaScript App',
        tools: 'HTML5, CSS3, JavaScript',
        description: 'A responsive calculator app demonstrating clean event-driven JavaScript UI and functionality.',
        order: 20
      }
    ]
  },
  education: {
    timelineEntries: [
      {
        id: 'degree',
        order: 1,
        title: 'BSc (Hons) in Information Technology',
        subtitle: 'Horizon Campus, Malabe, Sri Lanka',
        date: '2022 – Present',
        expectedGraduation: '2027',
        stream: 'Mobile Application Development, Software Engineering, Web Technologies, AI Applications',
        focusPoints: [
          'Mobile App Development',
          'Software Engineering',
          'Web Technologies',
          'Database Systems',
          'UI/UX Design'
        ]
      },
      {
        id: 'alevel',
        order: 2,
        title: 'G.C.E. Advanced Level',
        subtitle: 'St. Thomas Girls\' High School, Matara',
        date: '2020',
        stream: 'Arts with ICT',
        focusPoints: []
      }
    ],
    certifications: [
      { id: 'ml', title: 'Machine Learning Fundamentals', issuer: 'Kaggle' },
      { id: 'webdev', title: 'Full-Stack Web Development', issuer: 'Udemy' },
      { id: 'python', title: 'Python Programming', issuer: 'Udemy' },
      { id: 'android', title: 'Android Basics', issuer: 'Udemy' },
      { id: 'software', title: 'Software Development', issuer: 'DpEducation' }
    ],
    achievements: [
      { id: 'github-contrib', icon: 'fab fa-github', text: 'Active GitHub Contributor: 50+ commits across mobile, AI, and full-stack repositories' },
      { id: 'environment', icon: 'fas fa-globe', text: 'Environmental technology project aligned with UN SDG 14 – Life Below Water (WhaleLink)' },
      { id: 'opensource', icon: 'fas fa-users', text: 'Open-source contributor: documentation, code reviews, and collaborative repo management' }
    ]
  },
  strengths: {
    items: [
      { id: 'mobile-dev', icon: 'fas fa-mobile-alt', title: 'Mobile Development', description: 'Strong understanding of role-based systems and mobile databases' },
      { id: 'collaboration', icon: 'fas fa-code-branch', title: 'Collaboration', description: 'Practical experience with version control and collaboration tools' },
      { id: 'system-design', icon: 'fas fa-sitemap', title: 'System Design', description: 'Effective at transforming requirements into functional designs' },
      { id: 'ui-ux', icon: 'fas fa-paint-brush', title: 'UI/UX', description: 'Capable of building responsive UIs for web and mobile apps' },
      { id: 'clean-code', icon: 'fas fa-code', title: 'Clean Code', description: 'Delivered clean, documented code in team and solo projects' }
    ]
  },
  contact: {
    email: 'kushmi1428@gmail.com',
    phone: '+94 78 841 3056',
    socials: [
      { id: 'github', icon: 'fab fa-github', label: 'GitHub', href: 'https://github.com/KushmiKaushini' },
      { id: 'linkedin', icon: 'fab fa-linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/k-kaushini-k-ekanayake-1b86b9254' }
    ],
    messagePlaceholder: 'Your Message',
    order: 1
  },
  footer: {
    copyright: '2025 Kushmi Kaushini. All Rights Reserved.',
    socialLinks: [
      { id: 'github', icon: 'fab fa-github', url: 'https://github.com/KushmiKaushini' },
      { id: 'linkedin', icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/k-kaushini-k-ekanayake-1b86b9254' },
      { id: 'facebook', icon: 'fab fa-facebook', url: 'https://facebook.com' },
      { id: 'instagram', icon: 'fab fa-instagram', url: 'https://instagram.com' }
    ]
  },
  theme: {
    accentColor: '#4e54c8',
    backgroundColor: '#f8f9fa',
    surfaceColor: '#ffffff',
    headingFont: 'Poppins, sans-serif',
    bodyFont: 'Poppins, sans-serif'
  },
  admin: {
    triggerKeyword: 'sudo',
    loginPrompt: 'Type sudo on the page to open admin',
    defaultUsername: 'admin',
    defaultPassword: 'admin123'
  }
}
