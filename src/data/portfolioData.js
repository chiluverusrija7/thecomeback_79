export const personalInfo = {
  name: "Srija Ch",
  role: "CSE B.Tech Student & Developer",
  institution: "KL University",
  eyebrow: "COMPUTER SCIENCE • DSA • AI • FULL-STACK",
  headline: "Building intelligent systems with algorithms, AI and modern web technologies.",
  subheadline: "I'm Srija, a CSE B.Tech student at KL University building projects across Data Structures & Algorithms, Artificial Intelligence, Machine Learning and full-stack development. I enjoy turning technical concepts into interactive systems that can actually be explored, tested and understood.",
  aboutText1: "I'm a Computer Science student at KL University focused on building and understanding software through algorithms, AI and practical development. My projects span DSA visualizations, intelligent systems, machine learning, web applications and systems-oriented programming.",
  aboutText2: "I prefer learning by building — taking a concept from theory, implementing it, testing it, and then turning it into something people can interact with.",
  philosophy: "Learn → Build → Test → Improve",
  tagline: "Build. Analyze. Solve.",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  email: "srija@example.com",
  location: "KL University, Dept. of Computer Science",
  status: "CSE B.Tech Student @ KL University"
};

export const navItems = [
  { label: "Home", href: "/", isImplemented: true },
  { label: "About", href: "/#about", isImplemented: true },
  { label: "Skills", href: "/#skills", isImplemented: true },
  { label: "Projects", href: "/projects", isImplemented: true },
  { label: "Certifications", href: "/certifications", isImplemented: true },
  { label: "Achievements", href: "/achievements", isImplemented: true },
  { label: "Contact", href: "/contact", isImplemented: true }
];

export const focusAreas = [
  {
    id: "dsa",
    title: "Data Structures & Algorithms",
    iconName: "Binary",
    color: "cyan",
    description: "String algorithms, graph algorithms, problem solving, algorithm visualization and computational thinking.",
    highlights: ["String Algorithms", "Graph Traversals (BFS/DFS)", "Algorithm Visualization"]
  },
  {
    id: "ai",
    title: "Artificial Intelligence",
    iconName: "BrainCircuit",
    color: "indigo",
    description: "Constraint Satisfaction Problems, intelligent decision systems and AI-based problem solving.",
    highlights: ["Constraint Satisfaction (CSP)", "Graph Coloring", "Heuristic Search"]
  },
  {
    id: "ml",
    title: "Machine Learning",
    iconName: "TrendingUp",
    color: "emerald",
    description: "Regression modeling, data preprocessing, feature selection, and model evaluation metrics.",
    highlights: ["Linear Regression", "Preprocessing & Encodings", "Scikit-Learn Evaluation"]
  },
  {
    id: "fullstack",
    title: "Full-Stack Development",
    iconName: "Code2",
    color: "violet",
    description: "React, JavaScript, JSX, Tailwind CSS, Firebase and database technologies.",
    highlights: ["React & JSX Architecture", "Tailwind CSS Layouts", "Firebase Real-time Data"]
  },
  {
    id: "systems",
    title: "Systems Programming",
    iconName: "Cpu",
    color: "amber",
    description: "Process control, signals, resource limits and controlled program execution.",
    highlights: ["Process Isolation", "POSIX Signals", "Resource Limit Enforcements"]
  }
];

export const skillCategories = [
  { id: "all", label: "All Technologies" },
  { id: "programming", label: "Programming" },
  { id: "web", label: "Web Development" },
  { id: "cs", label: "Computer Science" },
  { id: "ai", label: "AI / ML" },
  { id: "tools", label: "Databases / Tools" }
];

export const skills = [
  // Programming
  {
    name: "C",
    category: "programming",
    iconName: "FileCode",
    description: "Low-level memory management, pointers, struct allocation, and procedural algorithm execution.",
    concepts: ["Pointers & Memory", "Struct Allocation", "Systems Standard Library", "Process Control"],
    color: "border-sky-500/30 text-sky-400 bg-sky-500/10"
  },
  {
    name: "Java",
    category: "programming",
    iconName: "Coffee",
    description: "Object-oriented development, JVM execution model, collections framework, and OOP principles.",
    concepts: ["Java Collections", "Inheritance & Interfaces", "Exception Handling", "JVM Basics"],
    color: "border-orange-500/30 text-orange-400 bg-orange-500/10"
  },
  {
    name: "Python",
    category: "programming",
    iconName: "Terminal",
    description: "Algorithmic scripting, machine learning modeling, data analysis, and automation scripts.",
    concepts: ["NumPy & Pandas", "Machine Learning Scripts", "Data Parsing", "Scripting Automation"],
    color: "border-amber-500/30 text-amber-400 bg-amber-500/10"
  },
  {
    name: "JavaScript",
    category: "programming",
    iconName: "FileSpreadsheet",
    description: "Modern ES6+ syntax, asynchronous promises, DOM event loops, and algorithm solvers.",
    concepts: ["Async / Await", "ES6+ Modules", "DOM Event Handling", "Dynamic Logic"],
    color: "border-yellow-500/30 text-yellow-400 bg-yellow-500/10"
  },

  // Web Development
  {
    name: "React",
    category: "web",
    iconName: "Atom",
    description: "Declarative component-driven UI development, state management, custom hooks, and Virtual DOM.",
    concepts: ["Custom Hooks", "Context API", "Component Lifecycle", "JSX Architecture"],
    color: "border-cyan-500/30 text-cyan-400 bg-cyan-500/10"
  },
  {
    name: "JSX",
    category: "web",
    iconName: "Code",
    description: "Declarative syntax extension pairing JavaScript power with HTML markup structure.",
    concepts: ["Conditional Rendering", "List Mapping & Keys", "Fragment Trees", "Props Patterns"],
    color: "border-blue-500/30 text-blue-400 bg-blue-500/10"
  },
  {
    name: "HTML",
    category: "web",
    iconName: "Layout",
    description: "Semantic HTML5 structural markup, accessible DOM hierarchies, and document outlines.",
    concepts: ["Semantic Elements", "Document Hierarchy", "Accessibility ARIA", "DOM Markup"],
    color: "border-orange-600/30 text-orange-400 bg-orange-600/10"
  },
  {
    name: "CSS",
    category: "web",
    iconName: "Palette",
    description: "Flexbox and CSS Grid layout systems, keyframe animations, media queries, and styling tokens.",
    concepts: ["CSS Grid & Flexbox", "Keyframe Animations", "Responsive Breakpoints", "Custom Styling"],
    color: "border-indigo-500/30 text-indigo-400 bg-indigo-500/10"
  },
  {
    name: "Tailwind CSS",
    category: "web",
    iconName: "Sparkles",
    description: "Utility-first CSS framework for rapid responsive layout composition, glassmorphism, and dark themes.",
    concepts: ["Utility Classes", "Design System Tokens", "Dark Theme Variants", "Glassmorphism"],
    color: "border-teal-500/30 text-teal-400 bg-teal-500/10"
  },

  // Computer Science
  {
    name: "Data Structures",
    category: "cs",
    iconName: "Layers",
    description: "Core data organization models: Arrays, Linked Lists, Trees, Graphs, Hash Tables, Heaps, and Queues.",
    concepts: ["Binary Search Trees", "Hash Collision Handling", "Heaps & Priority Queues", "Adjacency Graphs"],
    color: "border-purple-500/30 text-purple-400 bg-purple-500/10"
  },
  {
    name: "Algorithms",
    category: "cs",
    iconName: "Zap",
    description: "Asymptotic efficiency analysis (Big-O), Divide & Conquer, Dynamic Programming, BFS/DFS traversals.",
    concepts: ["Big-O Complexity", "Dynamic Programming", "Dijkstra & BFS/DFS", "Sorting Proofs"],
    color: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10"
  },
  {
    name: "Object-Oriented Programming",
    category: "cs",
    iconName: "Boxes",
    description: "Core engineering principles: Encapsulation, Abstraction, Inheritance, Polymorphism, and SOLID.",
    concepts: ["Encapsulation", "Polymorphic Methods", "Abstract Classes", "Modular Class Design"],
    color: "border-violet-500/30 text-violet-400 bg-violet-500/10"
  },
  {
    name: "Database Management",
    category: "cs",
    iconName: "Database",
    description: "Relational database principles, SQL normalization (1NF-3NF), ACID transactions, and ER modeling.",
    concepts: ["Relational Schemas", "ACID Compliance", "Schema Normalization", "SQL Joins & Indexing"],
    color: "border-cyan-600/30 text-cyan-300 bg-cyan-600/10"
  },
  {
    name: "Operating Systems",
    category: "cs",
    iconName: "HardDrive",
    description: "Fundamental OS concepts: Process scheduling, threads, memory paging, resource limits, and deadlocks.",
    concepts: ["Processes & Threads", "CPU Scheduling", "Virtual Memory & Paging", "Deadlock Prevention"],
    color: "border-rose-500/30 text-rose-400 bg-rose-500/10"
  },

  // AI / ML
  {
    name: "Artificial Intelligence",
    category: "ai",
    iconName: "Bot",
    description: "State-space search strategies, heuristic decision trees, logic-based reasoning, and CSP models.",
    concepts: ["Constraint Satisfaction (CSP)", "Graph Coloring", "Heuristic Search", "State-Space Graphs"],
    color: "border-emerald-400/30 text-emerald-300 bg-emerald-400/10"
  },
  {
    name: "Machine Learning",
    category: "ai",
    iconName: "Brain",
    description: "Supervised learning paradigms, feature extraction, train/test splitting, and performance evaluation metrics.",
    concepts: ["Supervised Learning", "Feature Selection", "Train/Test Splits", "Model Evaluation"],
    color: "border-fuchsia-500/30 text-fuchsia-400 bg-fuchsia-500/10"
  },
  {
    name: "Linear Regression",
    category: "ai",
    iconName: "TrendingUp",
    description: "Mathematical modeling of linear relationships, Ordinary Least Squares gradient descent, R² analysis.",
    concepts: ["Gradient Descent", "Ordinary Least Squares", "Cost Minimization", "R² / MAE Metrics"],
    color: "border-indigo-400/30 text-indigo-300 bg-indigo-400/10"
  },
  {
    name: "Scikit-learn",
    category: "ai",
    iconName: "Cpu",
    description: "Python machine learning toolkit for data preprocessing, pipeline transformers, estimators, and metrics.",
    concepts: ["StandardScaler", "Scikit-learn Estimators", "Label Encoding", "Evaluation Pipelines"],
    color: "border-sky-400/30 text-sky-300 bg-sky-400/10"
  },
  {
    name: "Constraint Satisfaction Problems",
    category: "ai",
    iconName: "Sparkles",
    description: "Algorithmic decision-making, graph vertex coloring, MRV heuristics, and state pruning.",
    concepts: ["CSP Backtracking", "MRV Heuristic", "Welsh-Powell Ordering", "Chromatic Bounds"],
    color: "border-purple-400/30 text-purple-300 bg-purple-400/10"
  },

  // Databases / Tools
  {
    name: "PostgreSQL",
    category: "tools",
    iconName: "Server",
    description: "Relational database management system, complex SQL queries, index tuning, and spatial data types.",
    concepts: ["SQL Queries", "Schema Indexing", "Foreign Keys", "Data Integrity"],
    color: "border-indigo-600/30 text-indigo-400 bg-indigo-600/10"
  },
  {
    name: "Firebase",
    category: "tools",
    iconName: "Database",
    description: "Cloud database platform, real-time data listeners, authentication, and backend integration.",
    concepts: ["Real-Time Listeners", "Cloud Firestore", "NoSQL Data Models", "Backend Integration"],
    color: "border-amber-600/30 text-amber-400 bg-amber-600/10"
  },
  {
    name: "Git",
    category: "tools",
    iconName: "GitBranch",
    description: "Distributed version control system, branching workflows, rebase strategies, and commit hygiene.",
    concepts: ["Branch Management", "Merge Conflict Resolution", "Commit History", "Rebase Workflows"],
    color: "border-rose-600/30 text-rose-400 bg-rose-600/10"
  },
  {
    name: "GitHub",
    category: "tools",
    iconName: "Globe",
    description: "Collaborative code hosting, pull request reviews, project repositories, and issue tracking.",
    concepts: ["Pull Requests", "Code Reviews", "Issue Tracking", "Repository Workflows"],
    color: "border-slate-400/30 text-slate-200 bg-slate-400/10"
  },
  {
    name: "VS Code",
    category: "tools",
    iconName: "Laptop",
    description: "Primary development workspace configured with debugging extensions, extensions, and integrated terminal.",
    concepts: ["Extension Ecosystem", "Integrated Terminal", "Debugging Setup", "Workspace Config"],
    color: "border-blue-600/30 text-blue-400 bg-blue-600/10"
  }
];
