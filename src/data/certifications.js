export const certificationCategories = [
  { id: "all", label: "All Certifications" },
  { id: "ai-ml", label: "AI / ML" },
  { id: "dsa", label: "DSA & Computer Science" },
  { id: "web", label: "Web Engineering" },
  { id: "db", label: "Database Systems" }
];

export const certifications = [
  {
    id: "dsa-spec",
    title: "Data Structures & Algorithmic Optimization",
    issuer: "Computer Science Coursework • KL University",
    date: "2025",
    category: "dsa",
    credentialId: "KLU-DSA-2025",
    credentialUrl: null,
    skills: ["Data Structures", "Big-O Analysis", "Graph Algorithms", "Dynamic Programming"],
    description: "Coursework covering asymptotic complexity, dynamic programming matrices, tree traversals, and optimal graph algorithms."
  },
  {
    id: "ml-foundations",
    title: "Machine Learning Foundations & Predictive Modeling",
    issuer: "AI & Machine Learning Module",
    date: "2025",
    category: "ai-ml",
    credentialId: "KLU-ML-2025",
    credentialUrl: null,
    skills: ["Linear Regression", "Scikit-Learn", "Feature Selection", "Supervised Learning"],
    description: "Applied machine learning on linear models, feature preprocessing, cost function gradient descent, and cross-validation metrics."
  },
  {
    id: "react-architecture",
    title: "Modern Web Engineering & React Systems",
    issuer: "Web Development Coursework",
    date: "2024",
    category: "web",
    credentialId: "KLU-WEB-2024",
    credentialUrl: null,
    skills: ["React", "JSX", "Virtual DOM", "Tailwind CSS"],
    description: "Component-driven React design, modular state lifecycles, custom hooks, and utility-first responsive styling."
  },
  {
    id: "dbms-sql",
    title: "Relational Database Management & SQL Design",
    issuer: "Database Systems Module",
    date: "2024",
    category: "db",
    credentialId: "KLU-DBMS-2024",
    credentialUrl: null,
    skills: ["PostgreSQL", "SQL Normalization", "Relational Algebra", "Indexing"],
    description: "Relational database normalization (1NF-3NF), ACID transactions, schema design, and complex SQL joins."
  }
];
