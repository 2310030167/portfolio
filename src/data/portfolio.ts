export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  architecture: string;
  features: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  visualType: "rca" | "timeseries" | "crm" | "logistics" | "sentiment";
  badge: string;
  accent: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  skills: string[];
  current?: boolean;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issuedDate: string;
  expiryDate?: string;
  credentialId?: string;
  verifyUrl?: string;
  badge: string;
  category: "Cloud" | "Enterprise" | "AI & ML" | "Data & Automation";
}

export interface Leadership {
  id: string;
  role: string;
  organization: string;
  metric: string;
  description: string;
  highlights: string[];
}

export interface SkillGroup {
  category: string;
  icon: string;
  description: string;
  items: string[];
}

export const personalDetails = {
  name: "Mohammed Eajaz Ahmed",
  shortName: "Eajaz",
  eyebrow: "AI • SOFTWARE • DATA",
  heroHeading: "Hi, I'm Eajaz.",
  heroSubheading: "I build intelligent systems and digital products.",
  heroDescription:
    "Computer Science Engineering student specializing in Artificial Intelligence & Data Science, focused on building AI-powered applications, scalable software, data-driven systems, and intelligent developer experiences.",
  email: "eajazahmed@gmail.com",
  github: "https://github.com/2310030167",
  linkedin: "https://www.linkedin.com/in/mohammad-eajaz-ahmed-071794288/",
  resumeUrl: "/resume.pdf",
  university: "KL University, Hyderabad",
  degree: "B.Tech in Computer Science Engineering (AI & DS)",
  graduation: "2027",
  location: "Hyderabad, India",
  aboutText:
    "I'm a Computer Science Engineering student specializing in Artificial Intelligence & Data Science. I enjoy turning complex technical problems into practical products — from AI platforms and machine learning systems to full-stack applications and data-driven tools.",
  domains: [
    "Artificial Intelligence",
    "Machine Learning",
    "Data Analytics",
    "Full-Stack Development",
    "Backend Engineering",
    "Cloud Architecture",
    "LLM Applications",
    "Predictive Modeling",
  ],
};

export const stats = [
  { value: "2027", label: "Graduation", subtext: "KL University, Hyderabad" },
  { value: "40+", label: "EDC Team Led", subtext: "Engineers & coordinators as President" },
  { value: "300+", label: "Developers Reached", subtext: "Across technical hackathons & events" },
  { value: "400+", label: "Students Trained", subtext: "Hands-on Web Dev with IEEE" },
];

export const projects: Project[] = [
  {
    id: "sentinel-ai",
    number: "01",
    title: "SentinelAI",
    subtitle: "Enterprise Root Cause Analysis Platform",
    category: "AI & Vector Search",
    description:
      "An AI-driven enterprise Root Cause Analysis platform designed to simulate incident investigation workflows, historical incident similarity search, severity detection, and actionable operational insights.",
    problem:
      "Enterprise systems generate massive volumes of noisy unstructured log telemetry during production outages, making manual RCA slow and increasing critical Mean Time to Resolution (MTTR).",
    solution:
      "Engineered an automated hybrid resolution pipeline using FAISS vector indexing with Sentence-Transformers for sub-second semantic retrieval of historical incidents, and Groq-hosted Llama 3.3 for multi-agent reasoning and automated remediation generation.",
    architecture:
      "Unstructured log ingestion -> Preprocessing & Vectorization -> FAISS similarity search against historical post-mortems -> Multi-agent Groq LLM reasoning -> Deterministic severity score & actionable playbooks.",
    features: [
      "Sub-second semantic log retrieval via Sentence-Transformers and FAISS",
      "Historical incident matching with algorithmic confidence scoring",
      "Multi-agent reasoning powered by Groq LLM API (Llama 3.3)",
      "Automated severity classification & failure root cause extraction",
      "Actionable operational remediation playbooks & interactive Streamlit console",
    ],
    techStack: ["Python", "Streamlit", "Groq API", "FAISS", "Sentence-Transformers", "Llama 3.3", "Vector Search"],
    githubUrl: "https://github.com/2310030167/SENTINEL_AI",
    liveUrl: "https://github.com/2310030167/SENTINEL_AI",
    visualType: "rca",
    badge: "Enterprise AI System",
    accent: "#6366f1",
  },
  {
    id: "time-series-forecasting",
    number: "02",
    title: "Modular Time Series Forecasting System",
    subtitle: "Automated Multi-Model Prediction Engine & REST API",
    category: "Machine Learning & Systems",
    description:
      "An automated forecasting pipeline combining statistical models and deep learning with feature engineering, model evaluation, selection, and a production-ready REST API.",
    problem:
      "Temporal metrics exhibit complex combinations of seasonality, drift, and abrupt spikes, making single-model approaches ineffective across varied enterprise forecasting horizons.",
    solution:
      "Developed a modular multi-model benchmarking engine (ARIMA, Prophet, XGBoost, LSTM) featuring automatic feature engineering and dynamic MAE-based model selection exposed via an asynchronous FastAPI microservice.",
    architecture:
      "Time series stream -> Automated calendar/lag feature extraction -> Parallel candidate model execution & cross-validation -> Model selection engine -> Low-latency async FastAPI REST endpoints.",
    features: [
      "Automated temporal lag features, rolling windows, and calendar indicator synthesis",
      "Comprehensive multi-model benchmarking (ARIMA, Prophet, XGBoost, LSTM)",
      "Dynamic MAE/RMSE model selection protocol",
      "Production-grade asynchronous FastAPI microservice for real-time inference",
    ],
    techStack: ["Python", "FastAPI", "XGBoost", "LSTM", "ARIMA", "Prophet", "Scikit-learn"],
    githubUrl: "https://github.com/2310030167/forecasting-system",
    liveUrl: "https://github.com/2310030167/forecasting-system",
    visualType: "timeseries",
    badge: "Predictive Analytics",
    accent: "#10b981",
  },
  {
    id: "ioms-core",
    number: "03",
    title: "IOMS Core",
    subtitle: "Custom In-House Enterprise CRM Platform",
    category: "Full Stack & Architecture",
    description:
      "A scalable CRM platform designed around client pipelines, operational telemetry, project workflows, database security, and multi-tenant data isolation.",
    problem:
      "Generic CRM SaaS products imposed steep license overheads while lacking specialized operational telemetry tracking and fine-grained data isolation for internal team workflows.",
    solution:
      "Architected a high-throughput, full-stack enterprise web application in Next.js and MySQL, enforcing multi-tenant isolation via database Row-Level Security and modular Object-Oriented patterns.",
    architecture:
      "Next.js App Router -> Tailwind UI -> Type-safe API routes -> MySQL with Row-Level Security policies & telemetry event triggers.",
    features: [
      "End-to-end client pipeline management and deal progression tracking",
      "Operational telemetry and team project workflow monitoring",
      "Multi-tenant data isolation using MySQL Row-Level Security (RLS)",
      "High-throughput responsive web application with clean component architecture",
      "Object-Oriented Design principles for scalable enterprise business logic",
    ],
    techStack: ["Next.js", "React.js", "Tailwind CSS", "MySQL", "Row-Level Security", "TypeScript"],
    githubUrl: "https://github.com/2310030167/ioms-core",
    liveUrl: "https://ioms-core-3o8j.vercel.app/",
    visualType: "crm",
    badge: "Enterprise Full Stack",
    accent: "#06b6d4",
  },
  {
    id: "defence-logistics",
    number: "04",
    title: "Defence Logistics Analytics Dashboard",
    subtitle: "Supply Chain Telemetry & SQL Intelligence Platform",
    category: "Data Science & BI",
    description:
      "A business intelligence solution for logistics operations featuring data generation, cleaning, SQL analytics, KPI reporting, inventory analytics, transportation analytics, and warehouse insights.",
    problem:
      "Multi-echelon logistics networks encounter severe visibility bottlenecks across inventory turnover rates, transit lead times, and warehouse capacity constraints.",
    solution:
      "Constructed a multi-tiered synthetic enterprise supply chain data generator, applied comprehensive SQL transformations, and engineered executive Power BI dashboards with real-time operational KPI telemetry.",
    architecture:
      "Synthetic Data Generator -> SQL ETL & Transformation layer -> Analytical KPI Data Models -> Interactive Power BI & Excel visual dashboards.",
    features: [
      "Synthetic enterprise-scale logistics dataset generation and validation pipelines",
      "Advanced SQL analytical queries for deep supply chain KPI reporting",
      "Multi-tier inventory turnover, transportation, and warehouse capacity analytics",
      "Interactive executive dashboards with drill-down operational metrics",
    ],
    techStack: ["Python", "SQL", "Power BI", "Excel", "Data Analytics", "KPI Engineering"],
    githubUrl: "https://github.com/2310030167/Defence-Logistics-Analytics",
    liveUrl: "https://github.com/2310030167/Defence-Logistics-Analytics",
    visualType: "logistics",
    badge: "Business Intelligence",
    accent: "#f59e0b",
  },
  {
    id: "amazon-sentiment",
    number: "05",
    title: "Amazon Sentiment Analysis Pipeline",
    subtitle: "End-to-End NLP & Review Text Mining System",
    category: "NLP & Machine Learning",
    description:
      "An end-to-end text mining and sentiment analysis framework for transforming large-scale customer review data into structured insights.",
    problem:
      "Vast volumes of unstructured customer feedback contain noisy syntax, informal slang, and mixed sentiment signals that mask critical product quality defects.",
    solution:
      "Designed a robust NLP preprocessing pipeline and multi-class Scikit-learn sentiment classifier to convert raw review corpora into structured polarity scores and actionable product improvements.",
    architecture:
      "Raw review corpus -> Custom text cleaning (tokenization, stopword removal, lemmatization) -> TF-IDF n-gram vectorization -> Scikit-learn classification & polarity telemetry.",
    features: [
      "End-to-end text mining workflow on large-scale customer review datasets",
      "Custom text preprocessing and domain-specific feature engineering",
      "Multi-metric model performance evaluation across sentiment classes",
      "Actionable product intelligence extracted from unstructured textual feedback",
    ],
    techStack: ["Python", "NLP", "Scikit-learn", "TF-IDF", "Text Mining", "Data Science"],
    githubUrl: "https://github.com/2310030167/Amazon-sentiment-analysis",
    liveUrl: "https://github.com/2310030167/Amazon-sentiment-analysis",
    visualType: "sentiment",
    badge: "Natural Language Processing",
    accent: "#ec4899",
  },
];

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Data & Systems Advisor",
    company: "HillSafe Startup",
    period: "Feb 2025 – Jan 2026",
    location: "Hyderabad, India",
    type: "Industry Advisory",
    description:
      "Advised and engineered data infrastructure and predictive models for high-reliability IoT environmental risk management systems.",
    highlights: [
      "Architected a real-time environmental monitoring platform using Python for low-latency IoT sensor stream processing.",
      "Designed secure backend APIs and high-efficiency telemetry data processing modules.",
      "Built predictive machine learning pipelines to optimize real-time alert precision and system reliability.",
      "Conducted system testing and performance optimization across distributed sensor nodes.",
    ],
    skills: ["Python", "IoT Sensor Streams", "Predictive ML", "Backend APIs", "Time Series", "System Optimization"],
  },
  {
    id: "exp-2",
    role: "Research Contributor — Predictive Analytics",
    company: "IIT Tirupati",
    period: "Jan 2025 – Present",
    location: "Tirupati, India",
    type: "Academic Research",
    current: true,
    description:
      "Conducted foundational predictive modeling and deep learning experiments on graph structures for scientific discovery.",
    highlights: [
      "Implemented deep learning and graph neural network (GNN) configurations for molecular property predictions.",
      "Contributed to structural feature engineering and complex source data preprocessing pipelines.",
      "Conducted systematic debugging and computational execution speed tuning.",
      "Constructed technical experimentation pipelines supporting active peer-reviewed publications.",
    ],
    skills: ["Deep Learning", "Graph Neural Networks", "Python", "Feature Engineering", "Scientific Computing"],
  },
  {
    id: "exp-3",
    role: "Software Development Engineer Intern",
    company: "KLINN AI Technologies",
    period: "Jul 2026 – Present",
    location: "Hyderabad, India",
    type: "Engineering Internship",
    current: true,
    description:
      "Engineering software applications, scalable digital platforms, and intelligent tools within the core engineering team.",
    highlights: [
      "Assisted in designing, developing, testing, and maintaining modern software applications and digital platforms.",
      "Engineered clean, maintainable, and well-documented features adhering to industry software standards.",
      "Participated in active code reviews, architectural discussions, and agile sprint planning activities.",
      "Debugged and resolved technical bottlenecks to optimize application execution performance.",
    ],
    skills: ["Full-Stack Engineering", "Python", "Web Architecture", "REST APIs", "Automated Testing"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming",
    icon: "Code2",
    description: "Core languages for systems, algorithms, backend architecture, and data structures.",
    items: ["Python", "Java", "SQL", "C", "JavaScript", "TypeScript"],
  },
  {
    category: "AI / ML",
    icon: "BrainCircuit",
    description: "Foundational and modern AI disciplines spanning deep learning, NLP, and agentic workflows.",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "LLMs & Agentic AI",
      "RAG Architecture",
      "Prompt Engineering",
      "Vector Search & FAISS",
      "Time Series Forecasting",
      "Graph Neural Networks",
    ],
  },
  {
    category: "Frameworks & Tools",
    icon: "Cpu",
    description: "Libraries and frameworks used to engineer intelligent products and web services.",
    items: [
      "React",
      "Next.js",
      "FastAPI",
      "Streamlit",
      "LangChain",
      "Scikit-learn",
      "TensorFlow / Keras",
      "Sentence-Transformers",
      "XGBoost",
      "Prophet",
    ],
  },
  {
    category: "Data & Cloud",
    icon: "Database",
    description: "Cloud infrastructure, relational & NoSQL databases, and deployment pipelines.",
    items: [
      "MySQL",
      "MongoDB",
      "PostgreSQL",
      "AWS (Cloud Practitioner)",
      "Docker",
      "Git & GitHub",
      "Linux CLI",
      "Power BI",
      "Row-Level Security (RLS)",
    ],
  },
];

export const certifications: Certification[] = [
  {
    id: "cert-aws",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    issuedDate: "March 4, 2026",
    expiryDate: "March 4, 2029",
    badge: "AWS Certified",
    category: "Cloud",
    verifyUrl: "https://aws.amazon.com/verification",
  },
  {
    id: "cert-redhat",
    title: "Red Hat Certified Specialist in Enterprise Application Development",
    issuer: "Red Hat",
    issuedDate: "May 14, 2026",
    badge: "Red Hat Certified",
    category: "Enterprise",
    verifyUrl: "https://www.redhat.com/en/services/certification",
  },
  {
    id: "cert-mongo",
    title: "MongoDB Associate Developer",
    issuer: "MongoDB",
    issuedDate: "2025",
    badge: "Associate Developer",
    category: "Data & Automation",
    verifyUrl: "https://learn.mongodb.com",
  },
  {
    id: "cert-aa",
    title: "Automation Anywhere Advanced RPA Professional",
    issuer: "Automation Anywhere",
    issuedDate: "2025",
    badge: "Advanced RPA",
    category: "Enterprise",
    verifyUrl: "https://university.automationanywhere.com",
  },
  {
    id: "cert-nvidia-agentic",
    title: "Building Agentic AI Applications with LLMs",
    issuer: "NVIDIA / DeepLearning.AI",
    issuedDate: "2025",
    badge: "Agentic AI",
    category: "AI & ML",
    verifyUrl: "https://www.deeplearning.ai",
  },
  {
    id: "cert-nvidia-rag",
    title: "Building RAG Agents with LLMs",
    issuer: "NVIDIA / DeepLearning.AI",
    issuedDate: "2025",
    badge: "RAG Systems",
    category: "AI & ML",
    verifyUrl: "https://www.deeplearning.ai",
  },
  {
    id: "cert-prompt-eng",
    title: "Building LLM Applications With Prompt Engineering",
    issuer: "DeepLearning.AI",
    issuedDate: "2025",
    badge: "Prompt Engineering",
    category: "AI & ML",
    verifyUrl: "https://www.deeplearning.ai",
  },
  {
    id: "cert-knowledge-llm",
    title: "Adding Knowledge to LLMs",
    issuer: "DeepLearning.AI",
    issuedDate: "2025",
    badge: "Knowledge Systems",
    category: "AI & ML",
    verifyUrl: "https://www.deeplearning.ai",
  },
];

export const leadership: Leadership[] = [
  {
    id: "lead-edc",
    role: "President",
    organization: "Entrepreneurship Development Cell (EDC), KL University",
    metric: "40+ Members Led",
    description: "Spearheading university-wide entrepreneurship ecosystem, innovation culture, and student venture development.",
    highlights: [
      "Led and mentored an active cross-functional executive team of 40+ members.",
      "Organized and hosted technical hackathons and engineering workshops for 300+ developers.",
      "Facilitated student startup incubation initiatives and industry mentor sessions.",
    ],
  },
  {
    id: "lead-ieee",
    role: "IEEE Member & Technical Workshop Lead",
    organization: "IEEE Student Branch",
    metric: "400+ Students Trained",
    description: "Conducted high-impact practical engineering and web development sessions for university students.",
    highlights: [
      "Designed and delivered a comprehensive hands-on Web Development Workshop.",
      "Mentored 400+ students through fundamental web architecture, UI principles, and responsive engineering.",
    ],
  },
  {
    id: "lead-iitb",
    role: "Campus Ambassador",
    organization: "IIT Bombay E-Cell",
    metric: "Campus Outreach",
    description: "Represented India's premier student entrepreneurship body to champion technological innovation.",
    highlights: [
      "Promoted national entrepreneurial competitions and technical initiatives across university networks.",
      "Mobilized student engineering teams for national pitch and innovation challenges.",
    ],
  },
  {
    id: "lead-speaker",
    role: "Invited Technical Speaker",
    organization: "Python Workshop — KL University",
    metric: "Technical Session",
    description: "Invited to deliver hands-on technical training on foundational and practical Python engineering.",
    highlights: [
      "Trained undergraduate students in algorithmic problem solving and practical Python development.",
      "Demonstrated real-world data structures and clean code practices.",
    ],
  },
  {
    id: "lead-hackathon",
    role: "Hackathon Finalist — Top 10%",
    organization: "Red Hat Collaborative Hackathon",
    metric: "Top 10% of 70+ Teams",
    description: "Competed and achieved finalist status in an intensive collaborative engineering hackathon.",
    highlights: [
      "Ranked in the top 10% among 70+ competitive engineering teams.",
      "Engineered open enterprise solutions adhering to modern architectural practices.",
    ],
  },
];
