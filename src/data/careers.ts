export interface Career {
  id: string;
  title: string;
  category: string;
  description: string;
  shortDescription: string;
  icon: string;
  salaryRange: { entry: string; mid: string; senior: string };
  demandLevel: "High" | "Very High" | "Moderate";
  growthOutlook: string;
  skills: { technical: string[]; soft: string[] };
  certifications: { name: string; provider: string; url: string; duration: string; level: string }[];
  milestones: { title: string; description: string; duration: string; type: "education" | "skill" | "certification" | "job" }[];
  topCompanies: string[];
  responsibilities: string[];
  locations: string[];
}

export const careers: Career[] = [
  {
    id: "software-engineer",
    title: "Software Engineer",
    category: "Technology",
    description: "Design, develop, and maintain software applications and systems. Software engineers apply engineering principles to create scalable, reliable solutions that solve real-world problems.",
    shortDescription: "Build the digital products that shape our world.",
    icon: "Code",
    salaryRange: { entry: "$75,000", mid: "$120,000", senior: "$180,000+" },
    demandLevel: "Very High",
    growthOutlook: "25% growth expected over the next decade",
    skills: {
      technical: ["JavaScript/TypeScript", "Python", "React", "Node.js", "SQL", "Git", "System Design", "APIs"],
      soft: ["Problem Solving", "Communication", "Team Collaboration", "Time Management"],
    },
    certifications: [
      { name: "AWS Certified Developer", provider: "Amazon", url: "https://aws.amazon.com/certification/", duration: "3 months", level: "Associate" },
      { name: "Meta Front-End Developer", provider: "Coursera", url: "https://www.coursera.org/professional-certificates/meta-front-end-developer", duration: "7 months", level: "Beginner" },
      { name: "Google IT Automation with Python", provider: "Google", url: "https://www.coursera.org/professional-certificates/google-it-automation", duration: "6 months", level: "Beginner" },
    ],
    milestones: [
      { title: "Bachelor's in CS or Bootcamp", description: "Build foundational knowledge in programming and computer science.", duration: "6 months – 4 years", type: "education" },
      { title: "Learn Core Languages", description: "Master JavaScript, Python, and a framework like React.", duration: "3–6 months", type: "skill" },
      { title: "Build Portfolio Projects", description: "Create 3-5 real-world projects to showcase your skills.", duration: "2–3 months", type: "skill" },
      { title: "Earn a Certification", description: "Get AWS or Google Cloud certified to stand out.", duration: "2–3 months", type: "certification" },
      { title: "Land First Internship", description: "Apply to internships and gain real industry experience.", duration: "3–6 months", type: "job" },
      { title: "Junior Developer Role", description: "Start your career as a junior software engineer.", duration: "1–2 years", type: "job" },
    ],
    topCompanies: ["Google", "Microsoft", "Apple", "Meta", "Amazon", "Netflix", "Stripe"],
    responsibilities: ["Write clean, maintainable code", "Design system architecture", "Code reviews and testing", "Collaborate with cross-functional teams", "Debug and resolve technical issues"],
    locations: ["San Francisco", "New York", "Seattle", "Austin", "Remote"],
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    category: "Data & AI",
    description: "Extract insights from complex datasets using statistical methods, machine learning, and data visualization to drive business decisions.",
    shortDescription: "Turn data into actionable business insights.",
    icon: "BarChart3",
    salaryRange: { entry: "$80,000", mid: "$130,000", senior: "$190,000+" },
    demandLevel: "Very High",
    growthOutlook: "35% growth expected over the next decade",
    skills: {
      technical: ["Python", "R", "SQL", "Machine Learning", "TensorFlow", "Pandas", "Statistics", "Data Visualization"],
      soft: ["Analytical Thinking", "Storytelling with Data", "Curiosity", "Business Acumen"],
    },
    certifications: [
      { name: "IBM Data Science Professional", provider: "Coursera", url: "https://www.coursera.org/professional-certificates/ibm-data-science", duration: "5 months", level: "Beginner" },
      { name: "Google Data Analytics", provider: "Google", url: "https://www.coursera.org/professional-certificates/google-data-analytics", duration: "6 months", level: "Beginner" },
      { name: "TensorFlow Developer Certificate", provider: "Google", url: "https://www.tensorflow.org/certificate", duration: "3 months", level: "Intermediate" },
    ],
    milestones: [
      { title: "Learn Statistics & Math", description: "Build a strong foundation in statistics, linear algebra, and probability.", duration: "3–6 months", type: "education" },
      { title: "Master Python for Data", description: "Learn Python with Pandas, NumPy, and Matplotlib.", duration: "2–4 months", type: "skill" },
      { title: "Machine Learning Fundamentals", description: "Study supervised, unsupervised learning, and neural networks.", duration: "3–4 months", type: "skill" },
      { title: "Earn Certification", description: "Complete IBM or Google certification.", duration: "3–5 months", type: "certification" },
      { title: "Kaggle Competitions", description: "Build portfolio through data competitions.", duration: "2–3 months", type: "skill" },
      { title: "Data Analyst/Scientist Role", description: "Land your first role in data science.", duration: "Ongoing", type: "job" },
    ],
    topCompanies: ["Google", "Meta", "Netflix", "Spotify", "Airbnb", "IBM", "McKinsey"],
    responsibilities: ["Build predictive models", "Analyze large datasets", "Create data visualizations", "Present findings to stakeholders", "Develop ML pipelines"],
    locations: ["San Francisco", "New York", "Boston", "Chicago", "Remote"],
  },
  {
    id: "ux-designer",
    title: "UX Designer",
    category: "Design",
    description: "Create intuitive, accessible, and delightful user experiences through research, wireframing, prototyping, and usability testing.",
    shortDescription: "Design experiences people love to use.",
    icon: "Palette",
    salaryRange: { entry: "$65,000", mid: "$100,000", senior: "$150,000+" },
    demandLevel: "High",
    growthOutlook: "16% growth expected over the next decade",
    skills: {
      technical: ["Figma", "Adobe XD", "Prototyping", "Wireframing", "User Research", "HTML/CSS", "Design Systems"],
      soft: ["Empathy", "Communication", "Critical Thinking", "Collaboration"],
    },
    certifications: [
      { name: "Google UX Design Certificate", provider: "Google", url: "https://www.coursera.org/professional-certificates/google-ux-design", duration: "6 months", level: "Beginner" },
      { name: "Interaction Design Specialization", provider: "UC San Diego", url: "https://www.coursera.org/specializations/interaction-design", duration: "8 months", level: "Intermediate" },
    ],
    milestones: [
      { title: "Learn UX Fundamentals", description: "Study user-centered design principles and design thinking.", duration: "2–3 months", type: "education" },
      { title: "Master Design Tools", description: "Become proficient in Figma and prototyping tools.", duration: "2–3 months", type: "skill" },
      { title: "Build Case Studies", description: "Create 3-4 detailed UX case studies for your portfolio.", duration: "3–4 months", type: "skill" },
      { title: "Get Certified", description: "Complete Google UX Design certificate.", duration: "6 months", type: "certification" },
      { title: "UX Design Internship", description: "Gain real-world experience at a company.", duration: "3–6 months", type: "job" },
      { title: "Junior UX Designer", description: "Start your professional UX career.", duration: "1–2 years", type: "job" },
    ],
    topCompanies: ["Apple", "Google", "Airbnb", "Spotify", "Figma", "Adobe", "Microsoft"],
    responsibilities: ["Conduct user research", "Create wireframes and prototypes", "Run usability tests", "Design interaction patterns", "Build design systems"],
    locations: ["San Francisco", "New York", "Los Angeles", "London", "Remote"],
  },
  {
    id: "cybersecurity-analyst",
    title: "Cybersecurity Analyst",
    category: "Security",
    description: "Protect organizations from cyber threats by monitoring networks, analyzing vulnerabilities, and implementing security measures.",
    shortDescription: "Defend the digital world from threats.",
    icon: "Shield",
    salaryRange: { entry: "$70,000", mid: "$110,000", senior: "$165,000+" },
    demandLevel: "Very High",
    growthOutlook: "33% growth expected over the next decade",
    skills: {
      technical: ["Network Security", "SIEM Tools", "Penetration Testing", "Linux", "Python", "Firewalls", "Incident Response"],
      soft: ["Attention to Detail", "Analytical Thinking", "Adaptability", "Integrity"],
    },
    certifications: [
      { name: "CompTIA Security+", provider: "CompTIA", url: "https://www.comptia.org/certifications/security", duration: "3 months", level: "Beginner" },
      { name: "Certified Ethical Hacker", provider: "EC-Council", url: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/", duration: "5 months", level: "Intermediate" },
    ],
    milestones: [
      { title: "Learn Networking Basics", description: "Understand TCP/IP, DNS, and network protocols.", duration: "2–3 months", type: "education" },
      { title: "Study Security Fundamentals", description: "Learn about threats, vulnerabilities, and defenses.", duration: "3–4 months", type: "skill" },
      { title: "Get CompTIA Security+", description: "Earn your first industry certification.", duration: "3 months", type: "certification" },
      { title: "Practice on CTF Platforms", description: "Build hands-on skills on TryHackMe and HackTheBox.", duration: "2–3 months", type: "skill" },
      { title: "SOC Analyst Role", description: "Start as a security operations center analyst.", duration: "1–2 years", type: "job" },
    ],
    topCompanies: ["CrowdStrike", "Palo Alto Networks", "Deloitte", "IBM", "Cisco", "Google", "NSA"],
    responsibilities: ["Monitor security systems", "Investigate incidents", "Perform vulnerability assessments", "Implement security policies", "Conduct penetration tests"],
    locations: ["Washington D.C.", "New York", "San Francisco", "Austin", "Remote"],
  },
  {
    id: "product-manager",
    title: "Product Manager",
    category: "Business",
    description: "Lead the strategy, roadmap, and feature definition for products, bridging the gap between business goals and technical execution.",
    shortDescription: "Shape products from vision to launch.",
    icon: "Rocket",
    salaryRange: { entry: "$85,000", mid: "$135,000", senior: "$200,000+" },
    demandLevel: "High",
    growthOutlook: "10% growth expected over the next decade",
    skills: {
      technical: ["Product Analytics", "A/B Testing", "SQL", "Jira", "Roadmapping", "Wireframing"],
      soft: ["Leadership", "Strategic Thinking", "Communication", "Decision Making", "Stakeholder Management"],
    },
    certifications: [
      { name: "Product Management Certificate", provider: "Product School", url: "https://productschool.com/product-management-certification", duration: "2 months", level: "Intermediate" },
      { name: "Google Project Management", provider: "Google", url: "https://www.coursera.org/professional-certificates/google-project-management", duration: "6 months", level: "Beginner" },
    ],
    milestones: [
      { title: "Learn PM Fundamentals", description: "Study product thinking, user stories, and agile methodologies.", duration: "2–3 months", type: "education" },
      { title: "Build Analytical Skills", description: "Learn SQL, analytics tools, and data-driven decision making.", duration: "2–3 months", type: "skill" },
      { title: "Create a Product Case Study", description: "Develop a comprehensive product strategy document.", duration: "1–2 months", type: "skill" },
      { title: "PM Certification", description: "Complete a recognized product management certification.", duration: "2–3 months", type: "certification" },
      { title: "Associate PM Role", description: "Land your first product management position.", duration: "1–2 years", type: "job" },
    ],
    topCompanies: ["Google", "Meta", "Amazon", "Stripe", "Shopify", "Salesforce", "Uber"],
    responsibilities: ["Define product vision and strategy", "Prioritize feature backlog", "Analyze user feedback", "Coordinate with engineering and design", "Track KPIs and metrics"],
    locations: ["San Francisco", "New York", "Seattle", "London", "Remote"],
  },
  {
    id: "cloud-architect",
    title: "Cloud Architect",
    category: "Technology",
    description: "Design and oversee an organization's cloud computing strategy, including cloud adoption plans, cloud application design, and cloud management.",
    shortDescription: "Architect scalable cloud infrastructure.",
    icon: "Cloud",
    salaryRange: { entry: "$100,000", mid: "$150,000", senior: "$220,000+" },
    demandLevel: "Very High",
    growthOutlook: "23% growth expected over the next decade",
    skills: {
      technical: ["AWS", "Azure", "GCP", "Terraform", "Docker", "Kubernetes", "Networking", "Security"],
      soft: ["Architecture Thinking", "Communication", "Problem Solving", "Leadership"],
    },
    certifications: [
      { name: "AWS Solutions Architect", provider: "Amazon", url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/", duration: "3 months", level: "Associate" },
      { name: "Google Cloud Architect", provider: "Google", url: "https://cloud.google.com/certification/cloud-architect", duration: "4 months", level: "Professional" },
    ],
    milestones: [
      { title: "Learn Cloud Fundamentals", description: "Understand cloud services, models, and deployment strategies.", duration: "2–3 months", type: "education" },
      { title: "Master a Cloud Platform", description: "Go deep on AWS, Azure, or GCP.", duration: "4–6 months", type: "skill" },
      { title: "Infrastructure as Code", description: "Learn Terraform, CloudFormation, and containerization.", duration: "2–3 months", type: "skill" },
      { title: "Cloud Certification", description: "Earn AWS Solutions Architect or equivalent.", duration: "3 months", type: "certification" },
      { title: "Cloud Engineer Role", description: "Start as a cloud or DevOps engineer.", duration: "2–3 years", type: "job" },
      { title: "Cloud Architect Role", description: "Advance to architecting full cloud solutions.", duration: "Ongoing", type: "job" },
    ],
    topCompanies: ["AWS", "Google Cloud", "Microsoft Azure", "Snowflake", "HashiCorp", "Databricks"],
    responsibilities: ["Design cloud architecture", "Manage cloud migrations", "Optimize costs and performance", "Ensure security compliance", "Mentor engineering teams"],
    locations: ["Seattle", "San Francisco", "New York", "Austin", "Remote"],
  },
];

export const categories = [...new Set(careers.map((c) => c.category))];
export const locations = [...new Set(careers.flatMap((c) => c.locations))].sort();

export const assessmentQuestions = [
  {
    id: 1,
    question: "What type of work excites you most?",
    options: [
      { text: "Building software and solving technical puzzles", careers: ["software-engineer", "cloud-architect"] },
      { text: "Analyzing data and finding hidden patterns", careers: ["data-scientist"] },
      { text: "Designing beautiful, intuitive experiences", careers: ["ux-designer"] },
      { text: "Protecting systems and investigating threats", careers: ["cybersecurity-analyst"] },
      { text: "Leading teams and shaping product strategy", careers: ["product-manager"] },
    ],
  },
  {
    id: 2,
    question: "Which skill do you naturally excel at?",
    options: [
      { text: "Logical thinking and coding", careers: ["software-engineer", "cloud-architect"] },
      { text: "Mathematics and statistics", careers: ["data-scientist"] },
      { text: "Visual design and empathy", careers: ["ux-designer"] },
      { text: "Attention to detail and investigation", careers: ["cybersecurity-analyst"] },
      { text: "Communication and decision-making", careers: ["product-manager"] },
    ],
  },
  {
    id: 3,
    question: "What kind of impact do you want to make?",
    options: [
      { text: "Create products millions of people use", careers: ["software-engineer", "product-manager"] },
      { text: "Help businesses make smarter decisions", careers: ["data-scientist", "product-manager"] },
      { text: "Make technology accessible and enjoyable", careers: ["ux-designer"] },
      { text: "Keep people and organizations safe online", careers: ["cybersecurity-analyst"] },
      { text: "Build the infrastructure of the future", careers: ["cloud-architect"] },
    ],
  },
  {
    id: 4,
    question: "How do you prefer to spend your workday?",
    options: [
      { text: "Writing code and building features", careers: ["software-engineer"] },
      { text: "Exploring datasets and running experiments", careers: ["data-scientist"] },
      { text: "Researching users and creating mockups", careers: ["ux-designer"] },
      { text: "Monitoring systems and responding to alerts", careers: ["cybersecurity-analyst"] },
      { text: "Meeting with stakeholders and planning roadmaps", careers: ["product-manager"] },
      { text: "Architecting systems and optimizing infrastructure", careers: ["cloud-architect"] },
    ],
  },
  {
    id: 5,
    question: "What's your educational background or interest?",
    options: [
      { text: "Computer Science or Engineering", careers: ["software-engineer", "cloud-architect"] },
      { text: "Mathematics, Statistics, or Economics", careers: ["data-scientist"] },
      { text: "Design, Psychology, or Human-Computer Interaction", careers: ["ux-designer"] },
      { text: "IT, Networking, or Criminal Justice", careers: ["cybersecurity-analyst"] },
      { text: "Business, MBA, or Marketing", careers: ["product-manager"] },
    ],
  },
];
