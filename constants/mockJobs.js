const placeholderLogo = "https://via.placeholder.com/100";

export const mockJobs = [
  {
    job_id: "1",
    employer_name: "Google",
    job_title: "Software Engineer",
    employer_logo: placeholderLogo,
    location: "Mountain View, CA",
    salary: "$120,000 - $150,000",
    job_type: "Full-time",
    job_description:
      "We are looking for a highly skilled Software Engineer to join our team and work on cutting-edge technology. " +
      "You will be responsible for designing, developing, and maintaining web applications while ensuring high performance, " +
      "scalability, and security. Our ideal candidate is passionate about coding, has strong analytical skills, and thrives in a collaborative environment.",
    job_highlights: {
      Qualifications: [
        "Bachelor's degree in Computer Science, Engineering, or a related field",
        "Experience with JavaScript, React, Node.js, and TypeScript",
        "Proficiency in backend development using Express.js or NestJS",
        "Strong understanding of data structures and algorithms",
        "Experience working with cloud platforms like AWS, Google Cloud, or Azure",
        "Familiarity with CI/CD pipelines, containerization (Docker, Kubernetes)",
        "Excellent problem-solving and debugging skills",
        "Strong communication and teamwork abilities",
        "Experience with modern frontend libraries such as Redux, Next.js, or Vue.js is a plus",
        "Knowledge of SQL and NoSQL databases like PostgreSQL, MongoDB, or Firebase",
        "Ability to write clean, scalable, and well-documented code",
      ],
      Responsibilities: [
        "Design, develop, and maintain scalable web applications using modern frameworks",
        "Write clean, efficient, and well-documented code following best practices",
        "Collaborate with UX/UI designers to create visually appealing and user-friendly interfaces",
        "Optimize application performance and scalability to handle high traffic",
        "Troubleshoot, debug, and resolve software issues in a timely manner",
        "Implement security best practices and ensure applications are secure against vulnerabilities",
        "Work closely with product managers and other stakeholders to define project requirements",
        "Participate in code reviews, provide constructive feedback, and mentor junior developers",
        "Stay up-to-date with emerging technologies and continuously improve development processes",
        "Deploy and maintain cloud-based applications using AWS, Google Cloud, or Azure",
      ],
    },
    benefits: [
      "Comprehensive health, dental, and vision insurance",
      "401(k) retirement plan with company match",
      "Generous paid time off and flexible work hours",
      "Remote work options available",
      "On-site gym and wellness programs",
      "Stock options and annual performance bonuses",
      "Tuition reimbursement and career development programs",
      "Company-sponsored events, hackathons, and team-building activities",
      "Employee discounts on Google products and services",
    ],
    application_process: [
      "Submit your resume and cover letter through our career portal",
      "Complete an online technical assessment",
      "Participate in an initial phone screening with HR",
      "Engage in a technical interview with our engineering team",
      "Attend an on-site or virtual final interview with multiple team members",
      "Receive an offer and discuss benefits and compensation",
    ],
  }
,  
  {
    job_id: "2",
    employer_name: "Microsoft",
    job_title: "Frontend Developer",
    employer_logo: placeholderLogo,
    location: "Redmond, WA",
    salary: "$110,000 - $140,000",
    job_type: "Full-time",
    job_description:
      "As a Frontend Developer, you will be responsible for implementing visual elements for our applications.",
    job_highlights: {
      Qualifications: [
        "Proficiency in HTML, CSS, and JavaScript",
        "Experience with React.js or Angular",
        "Familiarity with UI/UX best practices",
      ],
      Responsibilities: [
        "Translate designs into high-quality code",
        "Ensure the technical feasibility of UI/UX designs",
        "Optimize applications for speed and scalability",
      ],
    },
  },
  {
    job_id: "3",
    employer_name: "Amazon",
    job_title: "Backend Engineer",
    employer_logo: placeholderLogo,
    location: "Seattle, WA",
    salary: "$130,000 - $160,000",
    job_type: "Full-time",
    job_description:
      "Amazon Web Services team is hiring backend engineers to build scalable cloud solutions.",
    job_highlights: {
      Qualifications: [
        "Strong experience in Python or Java",
        "Familiarity with AWS, Lambda, and DynamoDB",
      ],
      Responsibilities: [
        "Design and implement backend services",
        "Work on improving system performance",
      ],
    },
  },
  {
    job_id: "4",
    employer_name: "Facebook",
    job_title: "Product Designer",
    employer_logo: placeholderLogo,
    location: "Menlo Park, CA",
    salary: "$100,000 - $130,000",
    job_type: "Full-time",
    job_description:
      "Join Meta's design team to create intuitive and engaging user experiences.",
    job_highlights: {
      Qualifications: ["Experience with Figma, Sketch, or Adobe XD"],
      Responsibilities: ["Design and prototype UI/UX components"],
    },
  },
  {
    job_id: "5",
    employer_name: "Tesla",
    job_title: "Mechanical Engineer",
    employer_logo: placeholderLogo,
    location: "Austin, TX",
    salary: "$95,000 - $120,000",
    job_type: "Full-time",
    job_description:
      "Work on innovative electric vehicle designs and manufacturing processes.",
    job_highlights: {
      Qualifications: [
        "Degree in Mechanical Engineering",
        "Experience with CAD software",
      ],
      Responsibilities: [
        "Optimize automotive part designs",
        "Collaborate with production teams",
      ],
    },
  },
  {
    job_id: "6",
    employer_name: "Netflix",
    job_title: "Data Analyst",
    employer_logo: placeholderLogo,
    location: "Los Gatos, CA",
    salary: "$115,000 - $140,000",
    job_type: "Full-time",
    job_description:
      "Analyze viewer behavior to improve content recommendations.",
    job_highlights: {
      Qualifications: [
        "Experience with SQL, Python, and data visualization tools",
      ],
      Responsibilities: ["Develop and analyze key performance metrics"],
    },
  },
  {
    job_id: "7",
    employer_name: "Spotify",
    job_title: "Audio Engineer",
    employer_logo: placeholderLogo,
    location: "New York, NY",
    salary: "$90,000 - $120,000",
    job_type: "Full-time",
    job_description:
      "Enhance audio processing algorithms for the best music experience.",
    job_highlights: {
      Qualifications: [
        "Knowledge of digital signal processing",
        "Experience with Python or C++",
      ],
      Responsibilities: [
        "Improve streaming quality",
        "Develop new sound processing techniques",
      ],
    },
  },
  {
    job_id: "8",
    employer_name: "Airbnb",
    job_title: "Marketing Specialist",
    employer_logo: placeholderLogo,
    location: "San Francisco, CA",
    salary: "$80,000 - $110,000",
    job_type: "Full-time",
    job_description:
      "Help shape Airbnb's brand strategy and marketing campaigns.",
    job_highlights: {
      Qualifications: [
        "Experience in digital marketing",
        "Strong communication skills",
      ],
      Responsibilities: [
        "Manage social media campaigns",
        "Analyze marketing data",
      ],
    },
  },
  {
    job_id: "9",
    employer_name: "Uber",
    job_title: "Operations Manager",
    employer_logo: placeholderLogo,
    location: "Chicago, IL",
    salary: "$100,000 - $130,000",
    job_type: "Full-time",
    job_description:
      "Optimize ridesharing and delivery operations in major cities.",
    job_highlights: {
      Qualifications: ["Experience in logistics and operations management"],
      Responsibilities: ["Improve delivery times", "Manage driver networks"],
    },
  },
  {
    job_id: "10",
    employer_name: "Apple",
    job_title: "iOS Developer",
    employer_logo: placeholderLogo,
    location: "Cupertino, CA",
    salary: "$130,000 - $170,000",
    job_type: "Full-time",
    job_description: "Build world-class iOS applications for Apple devices.",
    job_highlights: {
      Qualifications: ["Proficiency in Swift and Objective-C"],
      Responsibilities: [
        "Develop and maintain iOS apps",
        "Ensure smooth performance across devices",
      ],
    },
  },
];

export default mockJobs;
