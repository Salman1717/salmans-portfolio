export interface PersonalInfo {
  name: string
  title: string
  subtitle: string
  location: string
  arabicGreeting: string
  email: string
  phone: string
  linkedin: string
  github: string
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  metrics: string[]
  image: string
  demoUrl?: string
  githubUrl?: string
  featured: boolean
}

export interface Skill {
  category: string
  items: string[]
}

export interface Experience {
  company: string
  position: string
  duration: string
  description: string[]
}

export interface Achievement {
  id: string
  title: string
  description: string
  date: string
  icon: string
  category: "award" | "recognition" | "milestone" | "certification"
}

export const personalInfo: PersonalInfo = {
  name: "Salman Mhaskar",
  title: "iOS Mobile App Devloper | AI/ML | Data Science",
  subtitle: "Building native iOS apps and shipping on-device AI/ML.",
  location: "Based in India, open to relocation and sponsorship in Dubai, UAE",
  arabicGreeting: "مرحباً بكم في محفظتي",
  email: "salmanmhaskar17@gmail.com",
  phone: "+91 93592 79473",
  linkedin: "www.linkedin.com/in/salmanmhaskar/",
  github: "github.com/Salman1717",
}

export const projects: Project[] = [
  {
  id: "pulsetrack-architecture-demo",
  title: "PulseTrack – SwiftUI Architecture & Concurrency Demo",
  description:
    "PulseTrack is an architecture-focused SwiftUI project built to demonstrate how modern iOS applications should be structured using MVVM, async/await, structured concurrency, and actor-based data safety. Rather than being a feature-heavy app, PulseTrack serves as a clean architectural walkthrough, showcasing correct UI–ViewModel separation, task lifecycle management, error handling, and XCTest-ready design. The project is intentionally simple in UI and rich in structure, making it ideal for technical discussions and interview walkthroughs.",
  technologies: [
    "Swift",
    "SwiftUI",
    "MVVM Architecture",
    "Async/Await",
    "Structured Concurrency",
    "Actors",
    "@MainActor",
    "XCTest (Async Testing)",
    "Protocol-Oriented Programming",
    "Dependency Injection"
  ],
  metrics: [
    "MVVM-based SwiftUI architecture with strict separation of concerns",
    "Parallel async data fetching using async let",
    "Explicit task cancellation tied to SwiftUI lifecycle",
    "Actor-based state management to prevent data races",
    "Typed error handling with retry-driven UI states",
    "XCTest-ready ViewModel design with async test support"
  ],
  image: "/ProjectImages/PulseTrack.png",
  githubUrl: "https://github.com/Salman1717/PulseTrack",
  featured: false
},

  {
  id: "churnguard-ai",
  title: "ChurnGuard AI – Customer Churn Prediction Platform",
  description:
    "ChurnGuard AI is a full end-to-end machine learning system designed to help businesses identify customers at high risk of churn and take proactive retention actions. The platform features a production-ready Streamlit dashboard where users can upload customer data and instantly receive churn probabilities, risk segmentation, visual analytics, and explainable AI insights using SHAP. The ML pipeline includes feature engineering on customer behavior, contract patterns, service usage, and payment methods, followed by an XGBoost-based churn classifier optimized for recall. The system emphasizes transparency, business interpretability, and real-world deployment readiness, with a clean UI tailored for both technical and non-technical stakeholders.",
  technologies: [
    "Python",
    "Streamlit",
    "XGBoost",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "SHAP",
    "Matplotlib",
    "Explainable AI (XAI)",
    "Feature Engineering",
    "Model Deployment",
    "Production ML Pipelines"
  ],
  metrics: [
    "End-to-end churn prediction pipeline with explainable AI",
    "Optimized for high recall to capture maximum at-risk customers",
    "Interactive dashboard with CSV upload and instant predictions",
    "SHAP-based feature attribution for transparent decision-making",
    "Production-ready deployment with version-pinned dependencies"
  ],
  image: "/ProjectImages/ChurnGuardAI.png",
  demoUrl: "https://churnpredictionsaimodel.streamlit.app/",
  githubUrl: "https://github.com/Salman1717/churnprediction",
  featured: true
},

  {
  id: "uae-retail-forecast",
  title: "UAE Retail Demand Forecasting Dashboard",
  description:
    "A full end-to-end machine learning system built for UAE retailers to forecast daily product demand, detect spike days (Eid, Ramadan, weekends, promotions), and support store-level inventory planning. Features a Streamlit dashboard where users can upload sales data and get instant forecasts, spike probabilities, visual analytics, and downloadable reports. The ML pipeline includes time-series feature engineering, spike classification, dual-regressor forecasting, and a blended prediction layer—trained entirely in Google Colab.",
  technologies: [
    "Python",
    "Streamlit",
    "XGBoost",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Scikit-learn",
    "Google Colab",
    "Feature Engineering",
    "Time Series Modeling",
    "MVVM-style Pipeline Structure"
  ],
  metrics: [
    "Full ML pipeline (Classifier + Dual Regressor Blend)",
    "UAE-specific weekend & seasonal demand modeling",
    "Dashboard deployed with automatic fallback model",
    "Handles 60+ day datasets with full forecasting accuracy"
  ],
  image: "/ProjectImages/UAERetailForecast.png",
  demoUrl: "https://retail-dashboard-b5btlgjtemmsvq6yaxsekr.streamlit.app/",
  githubUrl: "https://github.com/Salman1717/retail-dashboard",
  featured: false
  },
  {
    id: "medisnap",
    title: "Medi Snap",
    description:
      "An iOS medication assistant built during the Hack2k hackathon that turns prescriptions and radiology reports into actionable patient workflows. Upload an image and MediSnap extracts medicines, dosages and schedules (Vision/OCR → Gemini), creates Google Calendar reminders, saves schedules to Firestore, explains medicine safety and radiology severity in plain language, and suggests nearby doctors — all through a patient-first SwiftUI interface and an agentic sense→think→act automation flow.",
    technologies: ["Swift", "SwiftUI", "Vision/OCR", "Firebase (Firestore)", "Google Cloud Platform", "Google Gemini"],
    metrics: ["Hack2k build (Sep 2025)", "OCR → AI automation", "Google Calendar integration"],
    image: "/ProjectImages/MediSnap.png",
    featured: true,
    githubUrl: "https://github.com/Salman1717/MediSnap",
  },
  {
    id: "getline",
    title: "GetLine",
    description:
      "GetLine turns moods, thoughts and favourite media into shareable, AI-crafted quotes. Enter a mood or topic, add inspirations (movies, music, books), save favourites, and enjoy a minimalist UI with light/dark mode — the app refines results over time for more personal quotes.",
    technologies: ["Swift", "SwiftUI", "Core Data", "MVVM", "Google Gemini"],
    metrics: ["Built Dec 2024", "Personalized quote generation", "Save & revisit feature"],
    image: "/ProjectImages/GetLine.png",
    featured: false,
    githubUrl: "https://github.com/ThePuzzleDev/Quotable",
  },
  {
    id: "immersive-education",
    title: "Immersive Education",
    description:
      "An AR + AI iOS app that makes learning tactile and visual by bringing 3D models into the real world. Features interactive AR models, an AI study assistant for simplified explanations and tips, advanced note-taking and quizzes, and visual progress tracking to keep learners motivated.",
    technologies: ["Swift", "SwiftUI", "RealityKit / ARKit", "Firebase", "Cloud Firestore"],
    metrics: ["Development Sep–Nov 2024", "Interactive AR learning modules", "Progress tracking & quizzes"],
    image: "/ProjectImages/ImmersiveEdu.png",
    featured: true,
    githubUrl: "https://github.com/ThePuzzleDev/ImmersiveEdu",
  },
  {
    id: "ingregenius",
    title: "IngreGenius",
    description:
      "AI-powered cooking assistant that generates recipes from ingredient photos or text input and tailors results to dietary needs and taste preferences. Includes hands-free voice-guided cooking, save/share capabilities, and nutritional tracking for repeatable, personalized meals.",
    technologies: ["Swift", "SwiftUI", "Cloud Firestore", "Firebase", "Google Gemini", "MVVM"],
    metrics: ["Built Jul–Sep 2024", "Ingredient-to-recipe generation", "Hands-free voice mode"],
    image: "/ProjectImages/IngreGenius.png",
    featured: false,
    githubUrl: "https://github.com/ThePuzzleDev/IngreGenius-iOS",
  },
];


export const skills: Skill[] = [
  {
    category: "Core Programming",
    items: [
      "Python",
      "Swift",
      "SQL",
      "JavaScript",
      "C (basics)"
    ],
  },
  {
    category: "Machine Learning & Data Science",
    items: [
      "scikit-learn",
      "TensorFlow",
      "PyTorch",
      "XGBoost",
      "Statsmodels",
      "Prophet",
      "LSTM / RNNs",
      "Time-Series Forecasting",
      "Classification & Regression",
      "Feature Engineering",
      "Hyperparameter Tuning",
      "Cross-Validation",
      "Model Evaluation & Deployment",
      "Model Explainability (SHAP)"
    ],
  },
  {
    category: "Mobile & AR (iOS)",
    items: [
      "SwiftUI",
      "UIKit",
      "Core ML (on-device ML)",
      "Core Data",
      "URLSession",
      "Async Image Loading",
      "ARKit",
      "RealityKit",
      "Vision OCR",
      "Gemini API Integration",
      "Model Optimization for Mobile"
    ],
  },
  {
    category: "Cloud, Backend & APIs",
    items: [
      "Firebase Authentication",
      "Firestore",
      "RESTful APIs",
      "Google Cloud Platform (GCP)",
      "AWS (S3, EC2)",
      "Google Calendar API",
      "Render / Vercel / Railway",
      "Apache Airflow"
    ],
  },
  {
    category: "Data Engineering & Analytics",
    items: [
      "ETL Pipelines",
      "Pandas",
      "NumPy",
      "MySQL / PostgreSQL",
      "Great Expectations",
      "Data Visualization",
      "Tableau",
      "Power BI",
      "Matplotlib",
      "Seaborn",
      "Analytics Dashboards"
    ],
  },
  {
    category: "Dev Tools, Testing & CI/CD",
    items: [
      "Xcode",
      "Git / GitHub",
      "TestFlight",
      "App Store Connect",
      "XCTest (Unit & UI testing)",
      "Fastlane (CI basics)",
      "Docker (basic)",
      "Jupyter / Google Colab",
      "Streamlit",
      "PyCharm / VSCode"
    ],
  },
  {
    category: "Architecture & Engineering Practices",
    items: [
      "MVVM / MVC",
      "Scalable Architecture",
      "Performance Optimization",
      "Clean Code Principles",
      "Agentic Workflow Patterns (sense→think→act)",
      "Agile / Scrum",
      "Versioning & Code Reviews"
    ],
  },
  {
    category: "Professional & Soft Skills",
    items: [
      "Communication (technical → non-technical)",
      "Team Collaboration",
      "Problem-Solving",
      "Product Mindset",
      "Mentoring",
      "Time Management",
      "Adaptability",
      "Attention to Detail"
    ],
  },
];



export const experiences: Experience[] = [
{
  company: "The Puzzle Dev",
  position: "iOS Developer",
  duration: "May 2024 – May 2025",
  description: [
    "Led development and deployment of three Swift/SwiftUI apps published on the App Store, delivering smooth, production-ready experiences.",
    "Implemented Core Data caching with async prefetching to enhance data persistence and reduce UI load times.",
    "Integrated Firebase Authentication and Firestore for secure login and real-time data synchronization.",
    "Built automated test suites with XCTest, achieving 90% coverage and reducing post-release bugs.",
    "Collaborated in Agile sprints with cross-functional teams, maintaining 100% on-time deliverables."
  ],
}

]

export const achievements: Achievement[] = [
  {
    id: "hackathon-25",
    title: "Google Build & Grow Hackathon",
    description: "Participated in Google's on-Campus Hackathon for straight 18 hours!",
    date: "Sep 2025",
    icon: "🧑🏻‍💻",
    category: "milestone",
  },
  {
    id: "Honors",
    title: "Honors in Data Science",
    description: "Completed Honors in Data Science along with the university coursework.",
    date: "2024",
    icon: "🎓",
    category: "certification",
  },
  {
    id: "hackathon-23",
    title: "2nd Place",
    description: "Secured Second Place in College Hackathon",
    date: "2023",
    icon: "🥈",
    category: "award",
  },
  // {
  //   id: "downloads-milestone",
  //   title: "50K+ Downloads",
  //   description: "Combined app downloads across all published applications",
  //   date: "2024",
  //   icon: "📱",
  //   category: "milestone",
  // },
  // {
  //   id: "ar-innovation",
  //   title: "AR Innovation Award",
  //   description: "Best Educational AR App at TechInnovate Conference",
  //   date: "2023",
  //   icon: "🥇",
  //   category: "award",
  // },
  // {
  //   id: "open-source",
  //   title: "Open Source Contributor",
  //   description: "Active contributor to SwiftUI and AR development communities",
  //   date: "2022-Present",
  //   icon: "💻",
  //   category: "recognition",
  // },
]
