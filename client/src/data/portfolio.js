export const portfolio = {
  name: 'Suraj Mane',
  role: 'Full Stack Developer',
  location: 'Navi Mumbai, Maharashtra',
  phone: '+91 9321674857',
  email: 'surajmane4857@gmail.com',
  availability: 'Open to exciting full-stack opportunities',
  summary:
    'Full Stack Developer with a Bachelor’s in Computer Engineering and hands-on experience building production-ready web applications. I enjoy turning business requirements into clean, scalable and user-friendly products.',
  skills: {
    languages: ['Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL'],
    frameworks: ['React', 'React Native', 'Node.js', 'Express.js', 'MongoDB'],
    concepts: ['OOP', 'Linear DSA', 'CRUD Operations', 'REST APIs', 'Git', 'GitHub', 'Responsive Design', 'PWA'],
    tools: ['VS Code', 'Postman', 'Vercel', 'Railway', 'MongoDB Atlas']
  },
  experience: [
    {
      period: 'May 2026 — Aug 2026',
      role: 'Software Developer Intern',
      company: 'MentorChamp EdTech Pvt. Ltd.',
      bullets: [
        'Developed a full-stack Lead Tracking & Analytics System using React, Node.js, Express, TypeScript, MongoDB and REST APIs.',
        'Implemented automated Google Sheets–MongoDB synchronization and phone-based lead matching to track complete lead journeys, conversions and drop-offs.',
        'Built dashboards for lead-source analytics, conversion funnels, revenue, trial leads, drop-off reasons and date-based performance analysis.',
        'Implemented PWA lead imports, duplicate prevention, payment-data integration and scheduled/manual synchronization.',
        'Deployed the application to production using Vercel for the frontend and Railway for the backend.'
      ]
    },
    {
      period: 'Feb 2024 — Jul 2024',
      role: 'Database Designer Intern',
      company: 'Reva Technology',
      bullets: [
        'Performed CRUD operations on relational databases to support application functionality.',
        'Conducted database testing and validation, identifying and resolving query performance issues.'
      ]
    },
    {
      period: 'Jan 2025 — Feb 2025',
      role: 'React.js Intern',
      company: 'CodeTech IT Solutions',
      bullets: [
        'Developed a news application using React.js and NewsAPI to display the latest headlines across categories.',
        'Implemented category-based filtering for Sports, Technology, Business and other sections with infinite scrolling.'
      ]
    }
  ],
  projects: [
    {
      number: '01',
      title: 'Rentconnect',
      link: 'https://rentconnect-frontend.vercel.app/',
      subtitle: 'Collaborative Platform for Car Owners & Drivers',
      stack: ['MERN', 'Payments', 'Real-time Logic'],
      description:
        'A full-stack platform where car owners list vehicles and drivers request rentals, with a structured payment flow and booking lifecycle.',
      features: [
        '10% advance payment on booking approval',
        '90% post-usage payment',
        'Timer-based payment unlocking',
        'Secure transaction handling'
      ]
    },
    {
      number: '02',
      title: 'NewsTime',
      subtitle: 'Daily News Platform',
      stack: ['React', 'REST API', 'Hooks'],
      description:
        'A React-based news application that fetches real-time data from the News API and presents it through a clean category-driven interface.',
      features: [
        'Real-time News API integration',
        'Category-based news browsing',
        'React Hooks with useState/useEffect',
        'Asynchronous data fetching'
      ]
    }
  ],
  education: {
    college: 'Pillai HOC College of Engineering & Technology',
    degree: 'Bachelor of Engineering in Computer Engineering',
    period: '2022 — 2026',
    location: 'Navi Mumbai, Maharashtra',
    academics: 'CGPA: 7.1 • 12th: 63% • 10th: 85%'
  },
  certifications: [
    'Java — NPTEL Certificate (2024)',
    'Node-Express-MongoDB Certificate (2025)'
  ]
};
