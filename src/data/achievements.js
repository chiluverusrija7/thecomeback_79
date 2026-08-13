export const achievementCategories = [
  { id: "all", label: "All Achievements" },
  { id: "hackathon", label: "Hackathons" },
  { id: "academic", label: "Academic Milestones" },
  { id: "coding", label: "Algorithmic Challenges" }
];

export const achievements = [
  {
    id: "lifelink-hackathon",
    title: "LifeLink AI — Emergency Healthcare Coordination Prototype",
    category: "hackathon",
    date: "2025",
    team: "KL University Project Team",
    shortDescription: "Engineered an AI-powered emergency donor matching & blood demand coordination prototype web application.",
    problemStatement: "Trauma care centers face critical delays sourcing rare blood donor types during emergency scenarios.",
    solutionSummary: "Built a real-time React dashboard with spatial donor proximity sorting heuristics and emergency request broadcasting.",
    technologies: ["React", "Firebase", "Tailwind CSS", "JavaScript"],
    status: "Verified Project Prototype",
    projectRef: "lifelink-ai"
  },
  {
    id: "stringxpert-dsa",
    title: "StringXpert Algorithmic Similarity System Release",
    category: "coding",
    date: "2025",
    team: "Individual Engineering Project",
    shortDescription: "Designed and implemented dynamic programming string edit-distance and mutation intelligence algorithms.",
    problemStatement: "Analyzing textual sequence similarity and DP edit matrices for educational inspection.",
    solutionSummary: "Implemented Levenshtein, Hamming, and Jaccard similarity solvers paired with step-by-step matrix visualization.",
    technologies: ["JavaScript", "React", "Dynamic Programming"],
    status: "Implemented System",
    projectRef: "stringxpert"
  },
  {
    id: "cs-honor-roll",
    title: "KL University Computer Science Academic Standing",
    category: "academic",
    date: "2024",
    team: "Dept. of Computer Science & Engineering",
    shortDescription: "Recognized for consistent performance in Data Structures & Algorithms, Systems Programming, and Operating Systems coursework.",
    problemStatement: "Demonstrating theoretical understanding and practical implementation of core computer science fundamentals.",
    solutionSummary: "Maintained strong performance marks across core B.Tech CSE curriculum modules.",
    technologies: ["Data Structures", "Algorithms", "Operating Systems", "C/Java"],
    status: "Academic Standing",
    projectRef: null
  }
];
