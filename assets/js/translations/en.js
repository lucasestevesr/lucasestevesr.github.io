const translations_en = {
    // Navigation
    nav: {
        about: "About",
        skills: "Skills",
        experience: "Experience",
        education: "Education",
        projects: "Projects",
        contact: "Contact"
    },
    
    // Hero Section
    hero: {
        greeting: "Hi, I'm",
        getInTouch: "Get In Touch",
        viewProjects: "View Projects"
    },
    
    // About Section
    about: {
        title: "About Me",
        paragraph1: "Welcome to my portfolio! I'm a passionate software developer with experience in building web applications and solving complex problems.",
        paragraph2: "I love learning new technologies and contributing to open-source projects. This portfolio showcases my skills, experience, and some of the projects I've worked on.",
        paragraph3: "Feel free to explore my GitHub repositories below, which are fetched dynamically using the GitHub API."
    },
    
    // Skills Section
    skills: {
        title: "Skills",
        programming: {
            title: "Programming Languages",
            description: "JavaScript, Python, Java, C++"
        },
        webDev: {
            title: "Web Development",
            description: "HTML, CSS, React, Node.js"
        },
        databases: {
            title: "Databases",
            description: "MySQL, MongoDB, PostgreSQL"
        },
        tools: {
            title: "Tools & Platforms",
            description: "Git, Docker, AWS, Linux"
        }
    },
    
    // Experience Section
    experience: {
        title: "Experience",
        loading: "Loading experience from LinkedIn...",
        error: "Unable to load experience data",
        present: "Present"
    },
    
    // Education Section
    education: {
        title: "Education",
        loading: "Loading education from LinkedIn...",
        error: "Unable to load education data"
    },
    
    // Projects Section
    projects: {
        title: "GitHub Projects",
        subtitle: "Here are some of my recent projects from GitHub",
        loading: "Loading projects from GitHub...",
        noProjects: "No public repositories found.",
        viewOnGitHub: "View on GitHub",
        error: "Unable to load GitHub projects at the moment.",
        visitProfile: "Please visit"
    },
    
    // Contact Section
    contact: {
        title: "Get In Touch",
        email: "Email",
        github: "GitHub",
        linkedin: "LinkedIn"
    },
    
    // Footer
    footer: {
        rights: "All rights reserved."
    },
    
    // LinkedIn Integration
    linkedin: {
        recommendations: "Recommendations",
        viewMore: "View more on LinkedIn",
        experience: {
            job1: {
                title: "Software Developer",
                period: "2023 - Present",
                description: "Developing and maintaining web applications, collaborating with teams to deliver high-quality software solutions."
            },
            job2: {
                title: "Junior Developer",
                period: "2021 - 2023",
                description: "Worked on various projects, learning best practices and contributing to the development of enterprise applications."
            }
        },
        education: {
            degree1: {
                title: "Computer Science",
                period: "2018 - 2022",
                description: "Bachelor's Degree in Computer Science"
            }
        }
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations_en;
}
