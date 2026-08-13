export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "ai-ml", label: "AI / ML" },
  { id: "dsa", label: "DSA" },
  { id: "web", label: "Web Development" },
  { id: "systems", label: "Systems" },
  { id: "academic", label: "Academic" }
];

export const projects = [
  {
    id: "lifelink-ai",
    title: "LifeLink AI",
    subtitle: "AI-Powered Emergency Healthcare & Donor Matching Platform",
    category: "AI + Web Application",
    secondaryCategory: "web",
    status: "Prototype",
    featured: true,
    shortDescription: "An AI-powered emergency healthcare coordination platform designed to predict blood demand, intelligently match donors and improve emergency response.",
    fullDescription: "LifeLink AI is an emergency healthcare coordination prototype web application designed to connect hospitals, blood banks, and donors onto a single real-time dashboard. It features blood stock tracking, emergency alert broadcasting, and spatial donor proximity matching.",
    
    problem: "Emergency healthcare centers face critical delays sourcing specific blood types during trauma cases due to fragmented manual coordination between blood banks and donors.",
    objective: "Engineered a responsive web prototype to centralize real-time blood inventory tracking, automate emergency donor alert broadcasting, and prioritize donor matches based on location and blood compatibility.",
    solution: "Built a modular React frontend powered by Firebase data bindings for real-time inventory updates. Developed a donor sorting heuristic to rank eligible donors by distance and blood ABO/Rh compatibility.",

    technologies: ["React", "Firebase", "Tailwind CSS", "JavaScript", "HTML5"],
    concepts: ["Emergency Workflow", "Donor Matching", "Blood Inventory", "Hospital Coordination", "Emergency Alerts", "Predictive Concepts"],

    github: null,
    demo: null,

    architecture: {
      nodes: [
        { id: 1, label: "Hospital Alert", type: "input", detail: "Emergency Blood Request Sent" },
        { id: 2, label: "Dispatch Engine", type: "process", detail: "Urgency Rating & Filter Engine" },
        { id: 3, label: "Donor Matcher", type: "algorithm", detail: "Proximity & ABO/Rh Matrix" },
        { id: 4, label: "Alert Broadcast", type: "decision", detail: "Emergency Signal Dispatch" },
        { id: 5, label: "Real-time View", type: "output", detail: "Donor Confirmation Dashboard" }
      ]
    },

    algorithms: [
      {
        name: "Blood Compatibility Matrix",
        description: "Boolean lookup matrix matching donor ABO and Rh factor types to recipient constraints."
      },
      {
        name: "Spatial Proximity Sorting",
        description: "Haversine distance calculation to rank eligible donor distance relative to hospital coordinates."
      }
    ],

    implementationDetails: [
      "Modular React state architecture with custom hooks for real-time inventory tracking.",
      "Tailwind CSS high-contrast emergency dashboard layout designed for rapid operator visibility.",
      "Firebase database triggers for real-time donor request broadcasting."
    ],

    results: null,

    implementedFeatures: [
      "Real-time blood stock status monitor",
      "Emergency request broadcast dispatch button",
      "Proximity-based donor distance sorting",
      "Responsive emergency healthcare dashboard"
    ],

    futureScope: [
      "Constraint Satisfaction Problem (CSP) donor scheduling algorithm for scheduled donations",
      "Python Scikit-learn time-series forecasting model for seasonal blood demand prediction",
      "Twilio SMS gateway integration for offline SMS donor alerts"
    ]
  },

  {
    id: "stringxpert",
    title: "StringXpert",
    subtitle: "Multi-Level String Similarity & Mutation Intelligence System",
    category: "DSA • String Algorithms",
    secondaryCategory: "dsa",
    status: "Implemented",
    featured: true,
    shortDescription: "A multi-level string similarity and mutation intelligence system focused on analysing textual similarity through algorithmic techniques.",
    fullDescription: "StringXpert is an algorithmic tool designed to compare textual sequences and analyze character mutation distances. It computes dynamic programming edit distances, detects character mutations, and visualizes step-by-step alignment matrices.",

    problem: "Analyzing structural textual similarity and mutation distances requires algorithmic precision beyond simple exact-match string searching.",
    objective: "Implement classic computer science string comparison algorithms with interactive visual matrix breakdowns for step-by-step trace inspection.",
    solution: "Implemented dynamic programming Levenshtein Distance, Hamming Distance for equal-length sequences, and Jaccard Token Overlap indexing in pure JavaScript with interactive HTML matrix visualization.",

    technologies: ["JavaScript", "React", "HTML5", "CSS3", "Tailwind CSS"],
    concepts: ["String Algorithms", "String Similarity", "Pattern Matching", "Mutation Analysis", "Algorithmic Comparison", "DSA Visualization"],

    github: null,
    demo: null,

    architecture: {
      nodes: [
        { id: 1, label: "Text Sequences", type: "input", detail: "Sequence A & Sequence B" },
        { id: 2, label: "Tokenizer", type: "process", detail: "Normalizer & Character Array Parsing" },
        { id: 3, label: "DP Matrix Engine", type: "algorithm", detail: "O(m×n) Levenshtein DP Evaluation" },
        { id: 4, label: "Traceback Solver", type: "decision", detail: "Min-Cost Edit Path Calculation" },
        { id: 5, label: "Visual Grid", type: "output", detail: "Mutation Score % & Matrix View" }
      ]
    },

    algorithms: [
      {
        name: "Levenshtein Distance (Dynamic Programming)",
        description: "Computes minimum insertion, deletion, and substitution operations with O(m×n) space/time matrix."
      },
      {
        name: "Jaccard Token Indexing",
        description: "Measures token set overlap ratio |A ∩ B| / |A ∪ B| for n-gram textual comparison."
      }
    ],

    implementationDetails: [
      "Pure JavaScript dynamic programming matrix solver with 2D array allocation.",
      "Step-by-step matrix highlight component rendering insertion/deletion cost paths.",
      "Clean separation of algorithmic calculation functions from React view components."
    ],

    results: [
      { metric: "Time Complexity", value: "O(m × n)", detail: "Exact dynamic programming grid evaluation" },
      { metric: "Space Footprint", value: "O(m × n)", detail: "Visualizable 2D DP matrix table" }
    ],

    implementedFeatures: [
      "Levenshtein edit distance calculator",
      "Interactive 2D dynamic programming grid visualizer",
      "Hamming distance calculator for equal length strings",
      "Jaccard token similarity index generator"
    ],

    futureScope: [
      "Needleman-Wunsch algorithm for bioinformatic DNA sequence alignment",
      "AST (Abstract Syntax Tree) tree-edit distance comparison for source code structural similarity"
    ]
  },

  {
    id: "chromatic-ai",
    title: "Chromatic AI",
    subtitle: "Graph Coloring & Constraint Satisfaction System",
    category: "AI • DSA • CSP",
    secondaryCategory: "ai-ml",
    status: "Implemented",
    featured: true,
    shortDescription: "An interactive graph-coloring and constraint satisfaction system that visualizes algorithmic decision-making through graph coloring.",
    fullDescription: "Chromatic AI is an interactive graph visualizer and constraint solver built with React and JavaScript. It demonstrates how CSP (Constraint Satisfaction Problem) backtracking algorithms and graph heuristics assign colors to vertices such that no adjacent vertices share the same color.",

    problem: "Graph coloring and CSP concepts can be abstract and difficult to evaluate without step-by-step visual feedback of backtracking assignments and conflict detection.",
    objective: "Build an interactive workspace where users build custom graph topologies and watch constraint satisfaction algorithms assign non-conflicting colors to adjacent vertices.",
    solution: "Developed an interactive HTML5 Canvas graph editor paired with a recursive backtracking solver, MRV (Minimum Remaining Values) heuristic, and Welsh-Powell vertex degree ordering algorithm.",

    technologies: ["React", "JavaScript", "HTML5 Canvas", "Tailwind CSS"],
    concepts: ["Graph Coloring", "Constraint Satisfaction Problems", "BFS", "DFS", "Chromatic Number", "Heuristics", "Interactive Visualization"],

    github: null,
    demo: null,

    architecture: {
      nodes: [
        { id: 1, label: "Graph Input", type: "input", detail: "Adjacency Matrix & Vertices V, E" },
        { id: 2, label: "Degree Sort", type: "process", detail: "Sort Vertices by Degree (Welsh-Powell)" },
        { id: 3, label: "Backtracking CSP", type: "algorithm", detail: "MRV Heuristic & Constraint Check" },
        { id: 4, label: "Conflict Trap", type: "decision", detail: "Validate Neighbor Color Integrity" },
        { id: 5, label: "Chromatic View", type: "output", detail: "Min Color Map & Step Animation" }
      ]
    },

    algorithms: [
      {
        name: "Welsh-Powell Greedy Algorithm",
        description: "Sorts vertices by descending degree order to assign colors greedily with reduced chromatic count."
      },
      {
        name: "Recursive CSP Backtracking",
        description: "Explores state space tree, pruning branches whenever an adjacent vertex constraint is violated."
      }
    ],

    implementationDetails: [
      "Canvas 2D rendering loop displaying node positions, edge connections, and active color fills.",
      "Step-by-step animation controller allowing pause/play execution of the graph coloring algorithm.",
      "Adjacency list data structure optimized for fast neighbor lookup during constraint checks."
    ],

    results: [
      { metric: "Chromatic Accuracy", value: "100%", detail: "Zero adjacent vertex color conflicts guaranteed" }
    ],

    implementedFeatures: [
      "Interactive node and edge graph creator",
      "Recursive CSP backtracking graph solver",
      "Welsh-Powell heuristic coloring generator",
      "Chromatic number calculator"
    ],

    futureScope: [
      "AC-3 (Arc Consistency 3) constraint propagation pre-pass algorithm",
      "Compiler register allocation simulation mapping variables to physical CPU registers"
    ]
  },

  {
    id: "shadowexec",
    title: "ShadowExec",
    subtitle: "Controlled Execution & Resource Monitoring Sandbox",
    category: "Systems Programming",
    secondaryCategory: "systems",
    status: "Prototype",
    featured: false,
    shortDescription: "A controlled program execution environment designed to demonstrate safer execution of untrusted student programs.",
    fullDescription: "ShadowExec is a systems execution wrapper written in C for operating systems coursework. It demonstrates process creation, CPU time limiting, memory bounds, and POSIX signal handling to safely execute untrusted student C code.",

    problem: "Executing untrusted student code submissions on a server can cause infinite loops, memory leaks, or runaway subprocesses that consume host system resources.",
    objective: "Construct a lightweight C-based systems wrapper that spawns subprocesses, enforces CPU/memory resource caps, sets execution timers, and traps runaway processes.",
    solution: "Engineered a process execution harness in C utilizing POSIX system calls (`fork()`, `execvp()`, `setrlimit()`, `alarm()`, and `waitpid()`) to isolate execution and capture exit verdicts.",

    technologies: ["C", "Linux Systems API", "POSIX Signals", "Makefile"],
    concepts: ["Process Creation", "Resource Limits", "Timeout Handling", "Signals", "Process Termination", "Controlled Execution"],

    github: null,
    demo: null,

    architecture: {
      nodes: [
        { id: 1, label: "Target Binary", type: "input", detail: "Executable Path & Parameters" },
        { id: 2, label: "Parent Fork", type: "process", detail: "fork() Child Subprocess Creation" },
        { id: 3, label: "Resource Caps", type: "algorithm", detail: "setrlimit() & SIGALRM Timer Set" },
        { id: 4, label: "Signal Monitor", type: "decision", detail: "Trap SIGKILL / SIGSEGV / SIGALRM" },
        { id: 5, label: "Verdict Report", type: "output", detail: "Verdict: SUCCESS / TIMEOUT / OOM" }
      ]
    },

    algorithms: [
      {
        name: "POSIX Signal Handling & Alarm",
        description: "Schedules SIGALRM timer interrupts to kill processes exceeding maximum CPU wall time."
      },
      {
        name: "setrlimit() Resource Capping",
        description: "Enforces kernel-level hard limits on CPU seconds (RLIMIT_CPU) and virtual memory (RLIMIT_AS)."
      }
    ],

    implementationDetails: [
      "Process creation using POSIX fork() and execvp() system primitives.",
      "Inter-process status checking using waitpid() with WIFEXITED and WTERMSIG macros.",
      "Custom C wrapper binary compiled with gcc and disciplined Makefile flags."
    ],

    results: null,

    implementedFeatures: [
      "Subprocess fork/exec execution pipeline",
      "CPU time limit enforcement via setrlimit",
      "Wall-clock execution timeout using SIGALRM",
      "Exit code and signal status capture"
    ],

    futureScope: [
      "Linux cgroups v2 resource accounting for containerized isolation",
      "seccomp-bpf system call filtering to restrict dangerous syscalls"
    ]
  },

  {
    id: "student-performance",
    title: "Student Performance Prediction",
    subtitle: "Linear Regression Grade Analysis Model",
    category: "Machine Learning",
    secondaryCategory: "academic",
    status: "Experimental",
    featured: false,
    shortDescription: "A Linear Regression model for analysing student-performance factors and predicting final grades using the UCI Student Performance dataset.",
    fullDescription: "A statistical machine learning study applying Ordinary Least Squares (OLS) Linear Regression on tabular records from the UCI Student Performance dataset to analyze academic factors and predict final student grades.",

    problem: "Identifying key academic and socio-economic variables affecting student outcomes to assist educators in identifying early intervention indicators.",
    objective: "Build a machine learning pipeline in Python to preprocess 395 student records, select correlated features, train a linear regression model, and evaluate error metrics.",
    solution: "Preprocessed 395 student records using Pandas and Scikit-learn, split data into 80/20 train/test sets, fit a Linear Regression estimator, and evaluated performance against MAE, RMSE, and R² metrics.",

    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    concepts: ["Feature Selection", "Preprocessing", "Label Encoding", "Train/Test Split", "Linear Regression", "Model Evaluation"],

    github: null,
    demo: null,

    architecture: {
      nodes: [
        { id: 1, label: "UCI Dataset", type: "input", detail: "395 Student Records (33 Features)" },
        { id: 2, label: "Preprocessing", type: "process", detail: "Label Encoding & 80/20 Split" },
        { id: 3, label: "Linear Regression", type: "algorithm", detail: "Scikit-learn OLS Fitting" },
        { id: 4, label: "Error Evaluator", type: "decision", detail: "Cost Function MSE & Residuals" },
        { id: 5, label: "Model Metrics", type: "output", detail: "R²: 0.766 • MAE: 1.396 • RMSE: 2.193" }
      ]
    },

    algorithms: [
      {
        name: "Ordinary Least Squares (OLS) Regression",
        description: "Minimizes the sum of squared residuals between observed student grades and linear predictions."
      },
      {
        name: "Feature Standard Scaling",
        description: "Normalizes continuous numeric variables to zero mean and unit variance."
      }
    ],

    implementationDetails: [
      "Data preprocessing pipeline utilizing Pandas DataFrame transformations and categorical label encoding.",
      "Scikit-learn LinearRegression model training on 80% split dataset.",
      "Performance score evaluation using r2_score, mean_absolute_error, and mean_squared_error."
    ],

    // Actual empirical experimental results
    results: [
      { metric: "Dataset Size", value: "395 Records", detail: "UCI Student Performance dataset" },
      { metric: "Train / Test Split", value: "80% / 20%", detail: "316 Training / 79 Testing samples" },
      { metric: "R² Score", value: "~ 0.766", detail: "Coefficient of determination variance explained" },
      { metric: "MAE Metric", value: "~ 1.396", detail: "Mean Absolute Error in grade points" },
      { metric: "RMSE Metric", value: "~ 2.193", detail: "Root Mean Squared Error metric" }
    ],

    implementedFeatures: [
      "Exploratory data analysis & feature correlation matrix",
      "Automated feature label encoding & preprocessing pipeline",
      "Linear regression model fitting on 80/20 train/test split",
      "Empirical evaluation metrics calculation (R², MAE, RMSE)"
    ],

    futureScope: [
      "Polynomial & Random Forest Regressor performance comparisons",
      "Web API interface for real-time grade prediction inputs"
    ]
  }
];
