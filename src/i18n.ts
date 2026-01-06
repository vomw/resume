import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "personalInfo": {
        "name": "Alice Johnson",
        "title": "Senior Full Stack Developer",
        "email": "alice.johnson@example.com",
        "phone": "555-123-4567",
        "linkedin": "linkedin.com/in/alicejohnson",
        "github": "github.com/alicej"
      },
      "pageTitle": "{{name}}'s Resume",
      "summaryTitle": "Summary",
      "summary": "Highly experienced and results-driven Senior Full Stack Developer with 10+ years of expertise in designing, developing, and deploying scalable web applications. Proficient in modern JavaScript frameworks (React, Angular), backend technologies (Node.js, Python/Django), and cloud platforms (AWS, Azure). Strong advocate for clean code, test-driven development, and agile methodologies. Seeking to leverage advanced technical skills and leadership capabilities to deliver innovative solutions and drive team success.",
      "experienceTitle": "Work Experience",
      "experience": [
        {
          "title": "Senior Software Engineer",
          "company": "Innovate Solutions Inc.",
          "years": "2021 - Present",
          "description": [
            "Led a team of 5 developers in the design and implementation of a new microservices architecture, improving system scalability by 40%.",
            "Developed critical features for a customer-facing portal using React, TypeScript, and GraphQL, resulting in a 25% increase in user engagement.",
            "Mentored junior and mid-level engineers, conducted regular code reviews, and fostered a culture of continuous improvement and knowledge sharing."
          ]
        },
        {
          "title": "Full Stack Developer",
          "company": "Global Tech Corp.",
          "years": "2017 - 2021",
          "description": [
            "Designed and developed RESTful APIs with Node.js and Express, supporting millions of daily transactions.",
            "Implemented responsive user interfaces using Angular and NgRx, integrating with various third-party services.",
            "Optimized database queries and application performance, reducing latency by 15% and improving user experience."
          ]
        },
        {
          "title": "Software Developer",
          "company": "Startup Innovations",
          "years": "2014 - 2017",
          "description": [
            "Built and maintained a CRM system using Python and Django, handling client data and interactions.",
            "Contributed to frontend development with jQuery and vanilla JavaScript, enhancing existing features and fixing bugs.",
            "Collaborated closely with product managers and designers to translate requirements into technical specifications and deliver features on time."
          ]
        }
      ],
      "educationTitle": "Education",
      "education": [
        {
          "degree": "Master of Science in Computer Science",
          "university": "University of Technology",
          "years": "2014"
        },
        {
          "degree": "Bachelor of Science in Software Engineering",
          "university": "State Engineering College",
          "years": "2012"
        }
      ],
      "skillsTitle": "Skills",
      "skills": {
        "programmingLanguages": ["JavaScript", "TypeScript", "Python", "Java", "Go"],
        "frontend": ["React", "Angular", "Vue.js", "HTML5", "CSS3", "Sass", "Webpack", "Vite", "Bootstrap", "Tailwind CSS"],
        "backend": ["Node.js", "Express.js", "Django", "Flask", "Spring Boot", "RESTful APIs", "GraphQL", "MongoDB", "PostgreSQL", "MySQL", "Redis"],
        "tools": ["Git", "Docker", "Kubernetes", "AWS", "Azure", "GCP", "Jira", "Jenkins", "CircleCI", "Jest", "Cypress", "Selenium"]
      },
      "skillsCategories": {
        "programmingLanguages": "Programming Languages",
        "frontend": "Frontend",
        "backend": "Backend",
        "tools": "Tools"
      },
      "projectsTitle": "Projects",
      "technologiesTitle": "Technologies",
      "projects": [
        {
          "name": "AI-Powered Recommendation Engine",
          "description": "Developed a real-time recommendation engine using machine learning algorithms, integrated into an e-commerce platform.",
          "technologies": ["Python", "TensorFlow", "Flask", "Kafka", "Redis"]
        },
        {
          "name": "Decentralized Chat Application",
          "description": "Created a secure, peer-to-peer chat application leveraging blockchain technology for data integrity and user authentication.",
          "technologies": ["Node.js", "WebSockets", "Ethereum", "Solidity"]
        },
        {
          "name": "Cloud Cost Optimization Dashboard",
          "description": "Built a dashboard to visualize and optimize cloud spending across multiple platforms, providing actionable insights to reduce infrastructure costs.",
          "technologies": ["React", "TypeScript", "AWS APIs", "Azure APIs", "GCP APIs", "D3.js"]
        }
      ],
      "emailLabel": "Email: ",
      "phoneLabel": "Phone: ",
      "linkedinLabel": "LinkedIn: ",
      "githubLabel": "GitHub: "
    }
  },
  zh: {
    translation: {
      "personalInfo": {
        "name": "爱丽丝·约翰逊",
        "title": "高级全栈开发人员",
        "email": "alice.johnson@example.com",
        "phone": "555-123-4567",
        "linkedin": "linkedin.com/in/alicejohnson",
        "github": "github.com/alicej"
      },
      "pageTitle": "{{name}}的简历",
      "summaryTitle": "概括",
      "summary": "经验丰富、以结果为导向的高级全栈开发人员，在设计、开发和部署可扩展的 Web 应用程序方面拥有 10 多年的专业知识。精通现代 JavaScript 框架（React、Angular）、后端技术（Node.js、Python/Django）和云平台（AWS、Azure）。大力倡导简洁代码、测试驱动开发和敏捷方法。寻求利用先进的技术技能和领导能力来提供创新的解决方案并推动团队成功。",
      "experienceTitle": "工作经验",
      "experience": [
        {
          "title": "高级软件工程师",
          "company": "创新解决方案公司",
          "years": "2021 - 至今",
          "description": [
            "带领一个 5 名开发人员的团队设计和实现新的微服务架构，将系统可伸缩性提高了 40%。",
            "使用 React、TypeScript 和 GraphQL 为面向客户的门户开发了关键功能，从而使用户参与度提高了 25%。",
            "指导初级和中级工程师，进行定期代码审查，并培养持续改进和知识共享的文化。"
          ]
        },
        {
          "title": "全栈开发人员",
          "company": "全球科技公司",
          "years": "2017 - 2021",
          "description": [
            "使用 Node.js 和 Express 设计和开发了 RESTful API，支持数百万的每日交易。",
            "使用 Angular 和 NgRx 实现了响应式用户界面，并与各种第三方服务集成。",
            "优化了数据库查询和应用程序性能，将延迟降低了 15%，并改善了用户体验。"
          ]
        },
        {
          "title": "软件开发人员",
          "company": "创业创新公司",
          "years": "2014 - 2017",
          "description": [
            "使用 Python 和 Django 构建和维护了一个 CRM 系统，用于处理客户数据和交互。",
            "使用 jQuery 和原生 JavaScript 为前端开发做出了贡献，增强了现有功能并修复了错误。",
            "与产品经理和设计师密切合作，将需求转化为技术规范并按时交付功能。"
          ]
        }
      ],
      "educationTitle": "教育",
      "education": [
        {
          "degree": "计算机科学理学硕士",
          "university": "科技大学",
          "years": "2014"
        },
        {
          "degree": "软件工程理学学士",
          "university": "州立工程学院",
          "years": "2012"
        }
      ],
      "skillsTitle": "技能",
      "skills": {
        "programmingLanguages": ["JavaScript", "TypeScript", "Python", "Java", "Go"],
        "frontend": ["React", "Angular", "Vue.js", "HTML5", "CSS3", "Sass", "Webpack", "Vite", "Bootstrap", "Tailwind CSS"],
        "backend": ["Node.js", "Express.js", "Django", "Flask", "Spring Boot", "RESTful APIs", "GraphQL", "MongoDB", "PostgreSQL", "MySQL", "Redis"],
        "tools": ["Git", "Docker", "Kubernetes", "AWS", "Azure", "GCP", "Jira", "Jenkins", "CircleCI", "Jest", "Cypress", "Selenium"]
      },
      "skillsCategories": {
        "programmingLanguages": "编程语言",
        "frontend": "前端",
        "backend": "后端",
        "tools": "工具"
      },
      "projectsTitle": "项目",
      "technologiesTitle": "技术",
      "projects": [
        {
          "name": "人工智能推荐引擎",
          "description": "开发了一个使用机器学习算法的实时推荐引擎，并将其集成到电子商务平台中。",
          "technologies": ["Python", "TensorFlow", "Flask", "Kafka", "Redis"]
        },
        {
          "name": "去中心化聊天应用程序",
          "description": "创建了一个安全的点对点聊天应用程序，利用区块链技术实现数据完整性和用户身份验证。",
          "technologies": ["Node.js", "WebSockets", "Ethereum", "Solidity"]
        },
        {
          "name": "云成本优化仪表板",
          "description": "构建了一个仪表板，用于可视化和优化跨多个平台的云支出，为降低基础设施成本提供可行的见解。",
          "technologies": ["React", "TypeScript", "AWS APIs", "Azure APIs", "GCP APIs", "D3.js"]
        }
      ],
      "emailLabel": "邮箱： ",
      "phoneLabel": "电话： ",
      "linkedinLabel": "领英： ",
      "githubLabel": "GitHub： "
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs: ['en', 'zh'],
    fallbackLng: 'en',
    debug: true,
    detection: {
      order: ['navigator', 'querystring', 'cookie', 'localStorage', 'sessionStorage', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
