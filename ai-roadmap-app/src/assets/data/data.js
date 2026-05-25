
export const CAREER_GOALS = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "AI Engineer",
    "ML Engineer",
    "Data Engineer",
    "App Developer",
    "Cybersecurity",
    "Competitive Programming",
    "Google Internship",
    "Remote Job",
  ];
  
  export const SKILL_LEVELS = ["Beginner", "Intermediate", "Advanced"];
  export const TIMELINES = ["3 months", "6 months", "1 year", "2 years"];
  
  // ─────────────────────────────────────────
  // Helper: build a roadmap key for lookup
  // ─────────────────────────────────────────
  export function getRoadmapKey(goal, level, timeline) {
    return `${goal}__${level}__${timeline}`;
  }
  
  // ─────────────────────────────────────────
  // ROADMAP DATA
  // Structure per roadmap:
  //   phases[]  → { title, duration, skills[], projects[], milestones[] }
  //   weeklyPlan[] → { week, tasks[] }
  // ─────────────────────────────────────────
  
  const roadmapData = {
  
    // ══════════════════════════════════════
    // FRONTEND DEVELOPER
    // ══════════════════════════════════════
    "Frontend Developer__Beginner__3 months": {
      title: "Frontend Developer — Beginner — 3 Months",
      description: "Build strong HTML/CSS/JS fundamentals and ship your first React projects.",
      phases: [
        {
          id: "p1",
          title: "Phase 1 — Web Foundations",
          duration: "Month 1",
          skills: ["HTML5 Semantics", "CSS Flexbox & Grid", "Responsive Design", "Git Basics"],
          projects: ["Personal Portfolio Page", "Responsive Landing Page"],
          milestones: ["Publish portfolio on GitHub Pages", "Pass HTML/CSS quiz"],
          completed: false,
        },
        {
          id: "p2",
          title: "Phase 2 — JavaScript Core",
          duration: "Month 2",
          skills: ["JS Variables & Functions", "DOM Manipulation", "Events & Listeners", "Fetch API basics"],
          projects: ["Todo App (Vanilla JS)", "Weather Card (static data)"],
          milestones: ["Build 2 JS projects", "Understand async/await"],
          completed: false,
        },
        {
          id: "p3",
          title: "Phase 3 — React Intro",
          duration: "Month 3",
          skills: ["React Components", "useState / useEffect", "Props", "React Router"],
          projects: ["Notes App in React", "Movie Search UI"],
          milestones: ["Deploy React app on Vercel", "Complete React basics course"],
          completed: false,
        },
      ],
      weeklyPlan: [
        { week: "Week 1–2", tasks: ["Learn HTML tags & structure", "Build 3 static pages"] },
        { week: "Week 3–4", tasks: ["CSS Flexbox exercises", "Responsive portfolio"] },
        { week: "Week 5–6", tasks: ["JS functions & arrays", "DOM manipulation labs"] },
        { week: "Week 7–8", tasks: ["Build Todo App", "Learn Fetch API"] },
        { week: "Week 9–10", tasks: ["React setup & components", "Props & state"] },
        { week: "Week 11–12", tasks: ["React Router", "Deploy final project"] },
      ],
    },
  
    "Frontend Developer__Intermediate__6 months": {
      title: "Frontend Developer — Intermediate — 6 Months",
      description: "Level up with advanced React, state management, testing, and performance.",
      phases: [
        {
          id: "p1",
          title: "Phase 1 — Advanced React",
          duration: "Month 1–2",
          skills: ["Context API", "Custom Hooks", "Code Splitting", "React Query basics"],
          projects: ["E-commerce product page", "Dashboard with filters"],
          milestones: ["Refactor old projects with hooks", "Write custom hook"],
          completed: false,
        },
        {
          id: "p2",
          title: "Phase 2 — State Management & Tooling",
          duration: "Month 3–4",
          skills: ["Redux Toolkit", "Zustand", "Vite/Webpack", "ESLint & Prettier"],
          projects: ["Shopping Cart with Redux", "Blog CMS UI"],
          milestones: ["Integrate Redux in 1 project", "Set up CI pipeline"],
          completed: false,
        },
        {
          id: "p3",
          title: "Phase 3 — Testing & Performance",
          duration: "Month 5–6",
          skills: ["Jest", "React Testing Library", "Lighthouse audits", "Lazy Loading"],
          projects: ["Tested component library", "Portfolio with 90+ Lighthouse score"],
          milestones: ["80% test coverage", "Publish npm package"],
          completed: false,
        },
      ],
      weeklyPlan: [
        { week: "Week 1–3", tasks: ["Context API deep dive", "Custom hooks practice"] },
        { week: "Week 4–6", tasks: ["React Query tutorial", "Build dashboard"] },
        { week: "Week 7–9", tasks: ["Redux Toolkit setup", "Shopping cart"] },
        { week: "Week 10–12", tasks: ["Webpack config", "Code splitting"] },
        { week: "Week 13–18", tasks: ["Jest testing", "Lighthouse audits", "Deploy final project"] },
        { week: "Week 19–24", tasks: ["Open source contribution", "Portfolio polish"] },
      ],
    },
  
    "Frontend Developer__Advanced__1 year": {
      title: "Frontend Developer — Advanced — 1 Year",
      description: "Master architecture, design systems, micro-frontends, and team leadership.",
      phases: [
        {
          id: "p1",
          title: "Phase 1 — Architecture & Design Systems",
          duration: "Quarter 1",
          skills: ["Component Architecture", "Storybook", "Design Tokens", "Accessibility (a11y)"],
          projects: ["Company design system", "Accessible form library"],
          milestones: ["Publish design system", "WCAG 2.1 AA compliance"],
          completed: false,
        },
        {
          id: "p2",
          title: "Phase 2 — Micro-Frontends & SSR",
          duration: "Quarter 2",
          skills: ["Next.js / Remix", "Module Federation", "Edge Rendering", "ISR / SSG"],
          projects: ["Next.js e-commerce site", "Micro-frontend demo"],
          milestones: ["Ship SSR app to production", "Integrate 2 micro-frontends"],
          completed: false,
        },
        {
          id: "p3",
          title: "Phase 3 — Performance Engineering",
          duration: "Quarter 3",
          skills: ["Web Vitals", "Bundle Analysis", "Service Workers", "WebAssembly intro"],
          projects: ["PWA application", "Performance audit report"],
          milestones: ["Core Web Vitals all green", "PWA with offline mode"],
          completed: false,
        },
        {
          id: "p4",
          title: "Phase 4 — Leadership & Open Source",
          duration: "Quarter 4",
          skills: ["Code Review", "RFC Writing", "Mentoring", "Open Source Contribution"],
          projects: ["Team tech blog", "OSS PR merged"],
          milestones: ["Lead team sprint", "Merge OSS contribution"],
          completed: false,
        },
      ],
      weeklyPlan: [
        { week: "Q1", tasks: ["Architecture patterns", "Storybook setup", "a11y audit"] },
        { week: "Q2", tasks: ["Next.js deep dive", "SSR/SSG", "Module Federation"] },
        { week: "Q3", tasks: ["Performance tooling", "PWA", "WebAssembly"] },
        { week: "Q4", tasks: ["OSS contributions", "Mentoring", "Leadership skills"] },
      ],
    },
  
    // ══════════════════════════════════════
    // BACKEND DEVELOPER
    // ══════════════════════════════════════
    "Backend Developer__Beginner__3 months": {
      title: "Backend Developer — Beginner — 3 Months",
      description: "Learn server-side programming, REST APIs, and databases from scratch.",
      phases: [
        {
          id: "p1",
          title: "Phase 1 — Programming Foundation",
          duration: "Month 1",
          skills: ["Python or Node.js basics", "Functions & OOP", "File I/O", "CLI tools"],
          projects: ["CLI calculator", "File organizer script"],
          milestones: ["Write 10 Python scripts", "Understand OOP"],
          completed: false,
        },
        {
          id: "p2",
          title: "Phase 2 — Web Servers & REST APIs",
          duration: "Month 2",
          skills: ["Express.js or Flask", "HTTP Methods", "Routing", "Middleware", "JSON APIs"],
          projects: ["Todo REST API", "Notes API with CRUD"],
          milestones: ["Build working REST API", "Test with Postman"],
          completed: false,
        },
        {
          id: "p3",
          title: "Phase 3 — Databases",
          duration: "Month 3",
          skills: ["SQL basics", "PostgreSQL or MySQL", "Mongoose / SQLAlchemy", "CRUD operations"],
          projects: ["User auth system", "Blog backend with DB"],
          milestones: ["Connect API to database", "Implement JWT auth"],
          completed: false,
        },
      ],
      weeklyPlan: [
        { week: "Week 1–2", tasks: ["Install Python/Node", "Variables, loops, functions"] },
        { week: "Week 3–4", tasks: ["OOP concepts", "Build CLI tools"] },
        { week: "Week 5–6", tasks: ["Express/Flask setup", "GET & POST routes"] },
        { week: "Week 7–8", tasks: ["REST API design", "Postman testing"] },
        { week: "Week 9–10", tasks: ["SQL basics", "Connect DB to API"] },
        { week: "Week 11–12", tasks: ["JWT auth", "Deploy on Railway/Render"] },
      ],
    },
  
    "Backend Developer__Intermediate__6 months": {
      title: "Backend Developer — Intermediate — 6 Months",
      description: "Build scalable APIs, learn caching, queues, and deployment.",
      phases: [
        {
          id: "p1",
          title: "Phase 1 — Advanced API Design",
          duration: "Month 1–2",
          skills: ["RESTful best practices", "GraphQL intro", "API versioning", "Rate limiting"],
          projects: ["Versioned REST API", "GraphQL server"],
          milestones: ["API documented with Swagger", "Rate limiter implemented"],
          completed: false,
        },
        {
          id: "p2",
          title: "Phase 2 — Databases & Caching",
          duration: "Month 3–4",
          skills: ["PostgreSQL advanced", "Redis caching", "Database indexing", "Transactions"],
          projects: ["Cached product API", "Analytics backend"],
          milestones: ["50% response time reduction with cache", "Complex SQL queries"],
          completed: false,
        },
        {
          id: "p3",
          title: "Phase 3 — Queues, DevOps & Deployment",
          duration: "Month 5–6",
          skills: ["BullMQ / Celery", "Docker basics", "CI/CD pipelines", "AWS/GCP intro"],
          projects: ["Email queue system", "Dockerized API"],
          milestones: ["Deploy containerized app", "Set up GitHub Actions CI"],
          completed: false,
        },
      ],
      weeklyPlan: [
        { week: "Week 1–4", tasks: ["REST patterns", "GraphQL schema design"] },
        { week: "Week 5–8", tasks: ["Redis setup", "Caching strategies"] },
        { week: "Week 9–12", tasks: ["PostgreSQL indexes", "DB transactions"] },
        { week: "Week 13–16", tasks: ["Docker fundamentals", "docker-compose"] },
        { week: "Week 17–20", tasks: ["BullMQ queues", "Job scheduling"] },
        { week: "Week 21–24", tasks: ["AWS EC2/S3", "CI/CD with GitHub Actions"] },
      ],
    },
  
    // ══════════════════════════════════════
    // FULL STACK DEVELOPER
    // ══════════════════════════════════════
    "Full Stack Developer__Beginner__6 months": {
      title: "Full Stack Developer — Beginner — 6 Months",
      description: "Go from zero to building complete web apps with frontend and backend.",
      phases: [
        {
          id: "p1",
          title: "Phase 1 — Frontend Basics",
          duration: "Month 1–2",
          skills: ["HTML/CSS", "JavaScript", "React basics", "Git & GitHub"],
          projects: ["Static portfolio", "React Todo app"],
          milestones: ["Deploy frontend on Netlify", "Complete JS course"],
          completed: false,
        },
        {
          id: "p2",
          title: "Phase 2 — Backend Basics",
          duration: "Month 3–4",
          skills: ["Node.js", "Express.js", "REST APIs", "MongoDB / PostgreSQL"],
          projects: ["Notes API", "User auth backend"],
          milestones: ["Working REST API", "Connected to database"],
          completed: false,
        },
        {
          id: "p3",
          title: "Phase 3 — Full Stack Integration",
          duration: "Month 5–6",
          skills: ["Connecting React to API", "JWT Auth", "Environment variables", "Deployment"],
          projects: ["Full Stack Blog App", "Full Stack Auth System"],
          milestones: ["Ship full stack app", "Custom domain deployed"],
          completed: false,
        },
      ],
      weeklyPlan: [
        { week: "Week 1–3", tasks: ["HTML, CSS, JS fundamentals"] },
        { week: "Week 4–6", tasks: ["React components, hooks, router"] },
        { week: "Week 7–9", tasks: ["Node/Express server setup"] },
        { week: "Week 10–12", tasks: ["Database CRUD, REST API"] },
        { week: "Week 13–18", tasks: ["Connect frontend + backend", "Auth", "Deploy"] },
      ],
    },
  
    "Full Stack Developer__Intermediate__1 year": {
      title: "Full Stack Developer — Intermediate — 1 Year",
      description: "Build production-ready full stack apps with auth, deployment, and testing.",
      phases: [
        {
          id: "p1",
          title: "Phase 1 — Advanced Frontend",
          duration: "Quarter 1",
          skills: ["Next.js", "Advanced React patterns", "TypeScript intro", "React Query"],
          projects: ["Next.js blog", "TypeScript component library"],
          milestones: ["Ship SSR app", "TypeScript in 1 project"],
          completed: false,
        },
        {
          id: "p2",
          title: "Phase 2 — Advanced Backend",
          duration: "Quarter 2",
          skills: ["NestJS or Django REST", "OAuth2", "WebSockets", "File uploads"],
          projects: ["Chat app backend", "File storage API"],
          milestones: ["Real-time feature working", "OAuth login"],
          completed: false,
        },
        {
          id: "p3",
          title: "Phase 3 — DevOps & Scaling",
          duration: "Quarter 3",
          skills: ["Docker & Kubernetes basics", "AWS basics", "Nginx", "Load balancing"],
          projects: ["Dockerized full stack app", "S3 file upload system"],
          milestones: ["App on AWS", "Load balancer configured"],
          completed: false,
        },
        {
          id: "p4",
          title: "Phase 4 — Capstone",
          duration: "Quarter 4",
          skills: ["System design basics", "Code review", "Agile/Scrum", "Portfolio polish"],
          projects: ["SaaS-like capstone app", "Open source contribution"],
          milestones: ["Capstone shipped", "3 OSS PRs"],
          completed: false,
        },
      ],
      weeklyPlan: [
        { week: "Q1", tasks: ["Next.js, TypeScript, React patterns"] },
        { week: "Q2", tasks: ["NestJS, WebSockets, OAuth"] },
        { week: "Q3", tasks: ["Docker, AWS, Nginx"] },
        { week: "Q4", tasks: ["System design, capstone, OSS"] },
      ],
    },
  
    // ══════════════════════════════════════
    // AI ENGINEER
    // ══════════════════════════════════════
    "AI Engineer__Beginner__6 months": {
      title: "AI Engineer — Beginner — 6 Months",
      description: "Learn to build, deploy, and integrate AI models into applications.",
      phases: [
        {
          id: "p1",
          title: "Phase 1 — Python & Math Foundations",
          duration: "Month 1–2",
          skills: ["Python", "NumPy", "Linear Algebra basics", "Statistics", "Pandas"],
          projects: ["Data analysis notebook", "Statistics report"],
          milestones: ["Complete Python course", "Understand matrices"],
          completed: false,
        },
        {
          id: "p2",
          title: "Phase 2 — ML & Deep Learning Basics",
          duration: "Month 3–4",
          skills: ["scikit-learn", "Neural Networks", "TensorFlow / PyTorch", "Model evaluation"],
          projects: ["Image classifier", "Sentiment analysis model"],
          milestones: ["Train first neural net", "Deploy model as API"],
          completed: false,
        },
        {
          id: "p3",
          title: "Phase 3 — LLMs & AI Integration",
          duration: "Month 5–6",
          skills: ["Prompt Engineering", "LangChain basics", "Vector databases", "RAG systems"],
          projects: ["Chatbot with memory", "Document Q&A system"],
          milestones: ["Build working RAG app", "Fine-tune small LLM"],
          completed: false,
        },
      ],
      weeklyPlan: [
        { week: "Week 1–3", tasks: ["Python data types, functions, OOP"] },
        { week: "Week 4–6", tasks: ["NumPy, Pandas, data wrangling"] },
        { week: "Week 7–10", tasks: ["scikit-learn, regression, classification"] },
        { week: "Week 11–14", tasks: ["Neural nets, PyTorch basics"] },
        { week: "Week 15–18", tasks: ["LangChain, prompt engineering"] },
        { week: "Week 19–24", tasks: ["RAG system, vector DB, deploy chatbot"] },
      ],
    },
  
    "AI Engineer__Intermediate__1 year": {
      title: "AI Engineer — Intermediate — 1 Year",
      description: "Build production AI systems with LLMs, agents, and scalable pipelines.",
      phases: [
        {
          id: "p1",
          title: "Phase 1 — Deep Learning Mastery",
          duration: "Quarter 1",
          skills: ["PyTorch advanced", "Transformers", "Hugging Face", "Fine-tuning LLMs"],
          projects: ["Custom text classifier", "Fine-tuned GPT model"],
          milestones: ["Fine-tune BERT", "Publish on HuggingFace Hub"],
          completed: false,
        },
        {
          id: "p2",
          title: "Phase 2 — LLM Engineering",
          duration: "Quarter 2",
          skills: ["LangChain agents", "LlamaIndex", "Function calling", "Evaluation metrics"],
          projects: ["Multi-agent research tool", "LLM evaluation dashboard"],
          milestones: ["Working AI agent", "Evaluation pipeline"],
          completed: false,
        },
        {
          id: "p3",
          title: "Phase 3 — AI Systems & MLOps",
          duration: "Quarter 3",
          skills: ["MLflow", "DVC", "Docker for ML", "Model monitoring"],
          projects: ["ML pipeline with MLflow", "Model drift detector"],
          milestones: ["CI/CD for ML", "Monitoring dashboard"],
          completed: false,
        },
        {
          id: "p4",
          title: "Phase 4 — Specialization",
          duration: "Quarter 4",
          skills: ["Multimodal AI", "AI safety basics", "Research reading", "AI product thinking"],
          projects: ["Multimodal app", "AI research summary blog"],
          milestones: ["Publish AI project", "Read 5 AI papers"],
          completed: false,
        },
      ],
      weeklyPlan: [
        { week: "Q1", tasks: ["PyTorch, Transformers, fine-tuning"] },
        { week: "Q2", tasks: ["LangChain agents, LlamaIndex, RAG"] },
        { week: "Q3", tasks: ["MLflow, Docker ML, monitoring"] },
        { week: "Q4", tasks: ["Multimodal, papers, product thinking"] },
      ],
    },
  
    // ══════════════════════════════════════
    // ML ENGINEER
    // ══════════════════════════════════════
    "ML Engineer__Beginner__6 months": {
      title: "ML Engineer — Beginner — 6 Months",
      description: "Master the math and code behind machine learning algorithms.",
      phases: [
        {
          id: "p1",
          title: "Phase 1 — Math & Python",
          duration: "Month 1–2",
          skills: ["Linear Algebra", "Calculus basics", "Probability", "Python", "NumPy/Pandas"],
          projects: ["Statistical analysis report", "Data cleaning script"],
          milestones: ["Matrix operations confident", "EDA on 3 datasets"],
          completed: false,
        },
        {
          id: "p2",
          title: "Phase 2 — Classical ML",
          duration: "Month 3–4",
          skills: ["Regression", "Classification", "Clustering", "scikit-learn", "Feature engineering"],
          projects: ["House price predictor", "Customer churn model"],
          milestones: ["Win or top 50% Kaggle comp", "5 ML models built"],
          completed: false,
        },
        {
          id: "p3",
          title: "Phase 3 — Deep Learning",
          duration: "Month 5–6",
          skills: ["Neural networks", "CNNs", "RNNs", "TensorFlow/Keras", "Transfer learning"],
          projects: ["Image classifier CNN", "Time series forecaster"],
          milestones: ["Train CNN > 90% accuracy", "Deploy model API"],
          completed: false,
        },
      ],
      weeklyPlan: [
        { week: "Week 1–4", tasks: ["Linear algebra, probability, Python"] },
        { week: "Week 5–8", tasks: ["EDA, feature engineering, scikit-learn"] },
        { week: "Week 9–12", tasks: ["Regression, classification, model eval"] },
        { week: "Week 13–16", tasks: ["Kaggle competitions, real datasets"] },
        { week: "Week 17–20", tasks: ["Neural networks, backprop, Keras"] },
        { week: "Week 21–24", tasks: ["CNNs, RNNs, model deployment"] },
      ],
    },
  
    // ══════════════════════════════════════
    // DATA ENGINEER
    // ══════════════════════════════════════
    "Data Engineer__Beginner__6 months": {
      title: "Data Engineer — Beginner — 6 Months",
      description: "Build data pipelines, warehouses, and ETL systems from scratch.",
      phases: [
        {
          id: "p1",
          title: "Phase 1 — SQL & Python",
          duration: "Month 1–2",
          skills: ["SQL (advanced)", "Python", "Pandas", "Data types & schemas"],
          projects: ["SQL analytics report", "Data cleaning pipeline"],
          milestones: ["Write 20 complex SQL queries", "Pandas EDA project"],
          completed: false,
        },
        {
          id: "p2",
          title: "Phase 2 — Data Pipelines & ETL",
          duration: "Month 3–4",
          skills: ["Apache Airflow basics", "ETL concepts", "dbt intro", "Data modeling"],
          projects: ["Airflow ETL pipeline", "dbt transformation project"],
          milestones: ["Scheduled ETL running", "Star schema modeled"],
          completed: false,
        },
        {
          id: "p3",
          title: "Phase 3 — Cloud & Warehousing",
          duration: "Month 5–6",
          skills: ["AWS S3 / GCS", "BigQuery / Snowflake", "Spark basics", "Data lake concepts"],
          projects: ["Cloud data warehouse", "Spark batch job"],
          milestones: ["Data in cloud warehouse", "Spark job running"],
          completed: false,
        },
      ],
      weeklyPlan: [
        { week: "Week 1–4", tasks: ["Advanced SQL, window functions, CTEs"] },
        { week: "Week 5–8", tasks: ["Python ETL scripts, Pandas"] },
        { week: "Week 9–12", tasks: ["Airflow DAGs, scheduling"] },
        { week: "Week 13–16", tasks: ["dbt models, data modeling"] },
        { week: "Week 17–20", tasks: ["AWS S3, BigQuery setup"] },
        { week: "Week 21–24", tasks: ["Spark, data lake, capstone pipeline"] },
      ],
    },
  
    // ══════════════════════════════════════
    // APP DEVELOPER
    // ══════════════════════════════════════
    "App Developer__Beginner__6 months": {
      title: "App Developer — Beginner — 6 Months",
      description: "Build cross-platform mobile apps with React Native from zero.",
      phases: [
        {
          id: "p1",
          title: "Phase 1 — React Native Basics",
          duration: "Month 1–2",
          skills: ["React Native setup", "Core components", "StyleSheet", "Navigation"],
          projects: ["Hello World app", "Simple calculator app"],
          milestones: ["App runs on emulator", "Navigation working"],
          completed: false,
        },
        {
          id: "p2",
          title: "Phase 2 — State & APIs",
          duration: "Month 3–4",
          skills: ["useState / useEffect", "FlatList", "Fetch API", "AsyncStorage"],
          projects: ["News reader app", "Weather mobile app"],
          milestones: ["API data rendered in app", "Persistent storage"],
          completed: false,
        },
        {
          id: "p3",
          title: "Phase 3 — Publishing",
          duration: "Month 5–6",
          skills: ["Expo EAS Build", "App Store basics", "Push notifications", "Performance"],
          projects: ["Polished portfolio app", "Published to TestFlight"],
          milestones: ["App on TestFlight", "Push notifications working"],
          completed: false,
        },
      ],
      weeklyPlan: [
        { week: "Week 1–3", tasks: ["Expo setup, components, StyleSheet"] },
        { week: "Week 4–6", tasks: ["Navigation, screens, tabs"] },
        { week: "Week 7–10", tasks: ["APIs, FlatList, AsyncStorage"] },
        { week: "Week 11–14", tasks: ["State management, forms"] },
        { week: "Week 15–18", tasks: ["Notifications, animations"] },
        { week: "Week 19–24", tasks: ["EAS Build, TestFlight, App Store"] },
      ],
    },
  
    // ══════════════════════════════════════
    // CYBERSECURITY
    // ══════════════════════════════════════
    "Cybersecurity__Beginner__6 months": {
      title: "Cybersecurity — Beginner — 6 Months",
      description: "Learn ethical hacking, networking, and security fundamentals.",
      phases: [
        {
          id: "p1",
          title: "Phase 1 — Networking & OS",
          duration: "Month 1–2",
          skills: ["Networking basics", "TCP/IP", "Linux command line", "Firewalls & VPNs"],
          projects: ["Set up home lab", "Wireshark traffic analysis"],
          milestones: ["CompTIA Network+ study done", "Linux comfortable"],
          completed: false,
        },
        {
          id: "p2",
          title: "Phase 2 — Security Concepts",
          duration: "Month 3–4",
          skills: ["Cryptography", "Authentication", "OWASP Top 10", "Vulnerabilities"],
          projects: ["OWASP analysis report", "Password cracker lab"],
          milestones: ["Understand OWASP Top 10", "TryHackMe 50 rooms"],
          completed: false,
        },
        {
          id: "p3",
          title: "Phase 3 — Ethical Hacking",
          duration: "Month 5–6",
          skills: ["Kali Linux", "Nmap", "Metasploit basics", "CTF competitions"],
          projects: ["CTF challenge writeup", "Pen test report"],
          milestones: ["Win 1 CTF", "HackTheBox beginner box"],
          completed: false,
        },
      ],
      weeklyPlan: [
        { week: "Week 1–3", tasks: ["Networking layers, protocols"] },
        { week: "Week 4–6", tasks: ["Linux CLI, file permissions, bash"] },
        { week: "Week 7–9", tasks: ["Cryptography, hashing, TLS"] },
        { week: "Week 10–12", tasks: ["OWASP Top 10, web vulns"] },
        { week: "Week 13–18", tasks: ["Kali, Nmap, CTF competitions"] },
      ],
    },
  
    // ══════════════════════════════════════
    // COMPETITIVE PROGRAMMING
    // ══════════════════════════════════════
    "Competitive Programming__Beginner__6 months": {
      title: "Competitive Programming — Beginner — 6 Months",
      description: "Build strong DSA foundations and start solving competitive problems.",
      phases: [
        {
          id: "p1",
          title: "Phase 1 — DSA Fundamentals",
          duration: "Month 1–2",
          skills: ["Arrays & Strings", "Linked Lists", "Stacks & Queues", "Recursion", "Big-O"],
          projects: ["50 LeetCode Easy problems", "Data structures implementation"],
          milestones: ["50 LeetCode problems solved", "Recursion confident"],
          completed: false,
        },
        {
          id: "p2",
          title: "Phase 2 — Algorithms",
          duration: "Month 3–4",
          skills: ["Sorting & Searching", "Binary Search", "Sliding Window", "Two Pointers", "Hashing"],
          projects: ["100 LeetCode Medium problems", "Codeforces Div 3 virtual contest"],
          milestones: ["Codeforces rating 1000+", "Binary search mastered"],
          completed: false,
        },
        {
          id: "p3",
          title: "Phase 3 — Advanced Topics",
          duration: "Month 5–6",
          skills: ["Dynamic Programming", "Graphs (BFS/DFS)", "Trees", "Greedy algorithms"],
          projects: ["150 total LeetCode", "Codeforces Div 2 participation"],
          milestones: ["Codeforces Div 2 problem B solved", "DP patterns learned"],
          completed: false,
        },
      ],
      weeklyPlan: [
        { week: "Week 1–3", tasks: ["Arrays, strings, basic problems"] },
        { week: "Week 4–6", tasks: ["Linked lists, stacks, recursion"] },
        { week: "Week 7–9", tasks: ["Binary search, two pointers"] },
        { week: "Week 10–12", tasks: ["Hashing, sliding window"] },
        { week: "Week 13–18", tasks: ["DP, graphs, trees, contests"] },
      ],
    },
  
    "Competitive Programming__Intermediate__1 year": {
      title: "Competitive Programming — Intermediate — 1 Year",
      description: "Reach Codeforces Expert and solve hard algorithmic problems.",
      phases: [
        {
          id: "p1",
          title: "Phase 1 — Advanced DSA",
          duration: "Quarter 1",
          skills: ["Segment Trees", "Fenwick Trees", "Disjoint Set Union", "Tries"],
          projects: ["200 LeetCode solved", "10 virtual contests"],
          milestones: ["Codeforces 1400+ rating", "Segment tree coded"],
          completed: false,
        },
        {
          id: "p2",
          title: "Phase 2 — Graph Algorithms",
          duration: "Quarter 2",
          skills: ["Dijkstra", "Bellman-Ford", "Floyd-Warshall", "Topological Sort", "SCC"],
          projects: ["Graph algorithm notebook", "Contest participation"],
          milestones: ["Solve all SSSP problems", "Rating 1600+"],
          completed: false,
        },
        {
          id: "p3",
          title: "Phase 3 — Advanced DP & Math",
          duration: "Quarter 3",
          skills: ["DP on trees", "Bitmask DP", "Number theory", "Combinatorics", "FFT intro"],
          projects: ["Hard DP problem collection", "Math contest problems"],
          milestones: ["Codeforces Expert (1600+)", "10 Div 2 D problems"],
          completed: false,
        },
        {
          id: "p4",
          title: "Phase 4 — ICPC Prep",
          duration: "Quarter 4",
          skills: ["Team strategy", "Time management", "Mock ICPC contests", "Problem setting"],
          projects: ["ICPC practice contest", "Team solution sheets"],
          milestones: ["Participate in ICPC Regional", "Rating 1800+"],
          completed: false,
        },
      ],
      weeklyPlan: [
        { week: "Q1", tasks: ["Segment trees, DSU, tries"] },
        { week: "Q2", tasks: ["All graph algorithms, shortest paths"] },
        { week: "Q3", tasks: ["Advanced DP, number theory"] },
        { week: "Q4", tasks: ["ICPC prep, team contests"] },
      ],
    },
  
    // ══════════════════════════════════════
    // GOOGLE INTERNSHIP
    // ══════════════════════════════════════
    "Google Internship__Intermediate__1 year": {
      title: "Google Internship — Intermediate — 1 Year",
      description: "Prepare for Google SWE internship: DSA, system design, and resume.",
      phases: [
        {
          id: "p1",
          title: "Phase 1 — LeetCode Grind",
          duration: "Quarter 1",
          skills: ["Arrays", "Strings", "Two Pointers", "Sliding Window", "Binary Search"],
          projects: ["100 LeetCode Easy+Medium", "Daily contest participation"],
          milestones: ["150 problems solved", "Consistent daily streak"],
          completed: false,
        },
        {
          id: "p2",
          title: "Phase 2 — Hard DSA",
          duration: "Quarter 2",
          skills: ["DP", "Graphs", "Heaps", "Backtracking", "Tries", "Segment Trees"],
          projects: ["300 total problems", "Mock interviews"],
          milestones: ["LeetCode Knight badge", "Pass 3 mock interviews"],
          completed: false,
        },
        {
          id: "p3",
          title: "Phase 3 — System Design",
          duration: "Quarter 3",
          skills: ["Scalability", "CAP theorem", "SQL vs NoSQL", "Load balancing", "Caching"],
          projects: ["Design URL shortener", "Design Twitter feed"],
          milestones: ["5 system design problems practiced", "Explain like interviewer"],
          completed: false,
        },
        {
          id: "p4",
          title: "Phase 4 — Applications & Behavioral",
          duration: "Quarter 4",
          skills: ["Resume writing", "STAR method", "Googleyness", "Cold emailing"],
          projects: ["Polished GitHub", "Referral network built"],
          milestones: ["Applied to 50 companies", "Got Google interview"],
          completed: false,
        },
      ],
      weeklyPlan: [
        { week: "Q1", tasks: ["3 LeetCode/day, Easy+Medium"] },
        { week: "Q2", tasks: ["Hard problems, mock interviews"] },
        { week: "Q3", tasks: ["System design, 1 design/week"] },
        { week: "Q4", tasks: ["Resume, referrals, applications"] },
      ],
    },
  
    // ══════════════════════════════════════
    // REMOTE JOB
    // ══════════════════════════════════════
    "Remote Job__Intermediate__6 months": {
      title: "Remote Job — Intermediate — 6 Months",
      description: "Land a remote developer job with a strong portfolio and job-hunting strategy.",
      phases: [
        {
          id: "p1",
          title: "Phase 1 — Portfolio Building",
          duration: "Month 1–2",
          skills: ["3 strong projects", "Clean GitHub", "README writing", "Live demos"],
          projects: ["SaaS-like app", "API-driven project", "Open source contribution"],
          milestones: ["3 live projects deployed", "500 GitHub contributions"],
          completed: false,
        },
        {
          id: "p2",
          title: "Phase 2 — Resume & LinkedIn",
          duration: "Month 3",
          skills: ["ATS-optimized resume", "LinkedIn SEO", "Personal branding", "Writing samples"],
          projects: ["Resume v3", "LinkedIn profile revamp"],
          milestones: ["Resume reviewed by senior dev", "LinkedIn 500+ connections"],
          completed: false,
        },
        {
          id: "p3",
          title: "Phase 3 — Job Hunt",
          duration: "Month 4–6",
          skills: ["Remote job platforms", "Cold emailing", "Technical interviews", "Negotiation"],
          projects: ["Applied to 100 jobs", "Built referral network"],
          milestones: ["10 interviews", "First offer received"],
          completed: false,
        },
      ],
      weeklyPlan: [
        { week: "Week 1–4", tasks: ["Polish 3 projects, write READMEs"] },
        { week: "Week 5–8", tasks: ["Deploy all projects, live demos"] },
        { week: "Week 9–10", tasks: ["Resume, LinkedIn, personal brand"] },
        { week: "Week 11–14", tasks: ["Apply 10 jobs/day, Toptal, Upwork"] },
        { week: "Week 15–18", tasks: ["Interview prep, system design"] },
        { week: "Week 19–24", tasks: ["Negotiate, follow up, first day!"] },
      ],
    },
  };
  
  // ─────────────────────────────────────────
  // Lookup function — finds the best matching
  // roadmap from the data object above.
  // Falls back to a generic template if no
  // exact match is found.
  // ─────────────────────────────────────────
  export function getRoadmap(goal, level, timeline) {
    const exactKey = getRoadmapKey(goal, level, timeline);
  
    // 1) Exact match
    if (roadmapData[exactKey]) return roadmapData[exactKey];
  
    // 2) Partial match — try different timelines
    const fallbackTimelines = ["6 months", "1 year", "3 months", "2 years"];
    for (const t of fallbackTimelines) {
      const key = getRoadmapKey(goal, level, t);
      if (roadmapData[key]) return { ...roadmapData[key], title: `${goal} — ${level} — ${timeline} (adapted)` };
    }
  
    // 3) Try different levels
    const fallbackLevels = ["Beginner", "Intermediate", "Advanced"];
    for (const l of fallbackLevels) {
      for (const t of fallbackTimelines) {
        const key = getRoadmapKey(goal, l, t);
        if (roadmapData[key]) return { ...roadmapData[key], title: `${goal} — ${level} — ${timeline} (adapted)` };
      }
    }
  
    // 4) Generic fallback
    return {
      title: `${goal} — ${level} — ${timeline}`,
      description: `A custom roadmap for ${goal} at ${level} level over ${timeline}.`,
      phases: [
        {
          id: "p1",
          title: "Phase 1 — Foundations",
          duration: "First third",
          skills: ["Core language fundamentals", "Development environment", "Version control"],
          projects: ["Hello World project", "Basic CLI tool"],
          milestones: ["Setup complete", "First project deployed"],
          completed: false,
        },
        {
          id: "p2",
          title: "Phase 2 — Building",
          duration: "Middle third",
          skills: ["Intermediate concepts", "Frameworks & tools", "Project architecture"],
          projects: ["Feature-complete app", "Team collaboration project"],
          milestones: ["3 projects built", "Open source PR merged"],
          completed: false,
        },
        {
          id: "p3",
          title: "Phase 3 — Mastery",
          duration: "Final third",
          skills: ["Advanced patterns", "Performance", "Best practices"],
          projects: ["Portfolio capstone", "Real-world contribution"],
          milestones: ["Job-ready portfolio", "First interview"],
          completed: false,
        },
      ],
      weeklyPlan: [
        { week: "Phase 1", tasks: ["Learn fundamentals", "Build small projects"] },
        { week: "Phase 2", tasks: ["Intermediate skills", "Larger projects"] },
        { week: "Phase 3", tasks: ["Advanced topics", "Portfolio & jobs"] },
      ],
    };
  }
  