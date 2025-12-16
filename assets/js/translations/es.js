const translations_es = {
    // Navigation
    nav: {
        about: "Acerca",
        skills: "Habilidades",
        experience: "Experiencia",
        education: "Educación",
        projects: "Proyectos",
        contact: "Contacto"
    },
    
    // Hero Section
    hero: {
        greeting: "Hola, soy",
        getInTouch: "Contactar",
        viewProjects: "Ver Proyectos"
    },
    
    // About Section
    about: {
        title: "Sobre Mí",
        paragraph1: "¡Bienvenido a mi portafolio! Soy un desarrollador de software apasionado con experiencia en la construcción de aplicaciones web y la resolución de problemas complejos.",
        paragraph2: "Me encanta aprender nuevas tecnologías y contribuir a proyectos de código abierto. Este portafolio muestra mis habilidades, experiencia y algunos de los proyectos en los que he trabajado.",
        paragraph3: "Siéntete libre de explorar mis repositorios de GitHub a continuación, que se cargan dinámicamente usando la API de GitHub."
    },
    
    // Skills Section
    skills: {
        title: "Habilidades",
        programming: {
            title: "Lenguajes de Programación",
            description: "JavaScript, Python, Java, C++"
        },
        webDev: {
            title: "Desarrollo Web",
            description: "HTML, CSS, React, Node.js"
        },
        databases: {
            title: "Bases de Datos",
            description: "MySQL, MongoDB, PostgreSQL"
        },
        tools: {
            title: "Herramientas y Plataformas",
            description: "Git, Docker, AWS, Linux"
        }
    },
    
    // Experience Section
    experience: {
        title: "Experiencia",
        loading: "Cargando experiencia de LinkedIn...",
        error: "No se pudieron cargar los datos de experiencia",
        present: "Presente"
    },
    
    // Education Section
    education: {
        title: "Educación",
        loading: "Cargando educación de LinkedIn...",
        error: "No se pudieron cargar los datos de educación"
    },
    
    // Projects Section
    projects: {
        title: "Proyectos de GitHub",
        subtitle: "Aquí están algunos de mis proyectos recientes de GitHub",
        loading: "Cargando proyectos de GitHub...",
        noProjects: "No se encontraron repositorios públicos.",
        viewOnGitHub: "Ver en GitHub",
        error: "No se pudieron cargar los proyectos de GitHub en este momento.",
        visitProfile: "Por favor visita"
    },
    
    // Contact Section
    contact: {
        title: "Ponte en Contacto",
        email: "Correo",
        github: "GitHub",
        linkedin: "LinkedIn"
    },
    
    // Footer
    footer: {
        rights: "Todos los derechos reservados."
    },
    
    // LinkedIn Integration
    linkedin: {
        recommendations: "Recomendaciones",
        viewMore: "Ver más en LinkedIn",
        experience: {
            job1: {
                title: "Desarrollador de Software",
                period: "2023 - Presente",
                description: "Desarrollando y manteniendo aplicaciones web, colaborando con equipos para entregar soluciones de software de alta calidad."
            },
            job2: {
                title: "Desarrollador Junior",
                period: "2021 - 2023",
                description: "Trabajé en varios proyectos, aprendiendo mejores prácticas y contribuyendo al desarrollo de aplicaciones empresariales."
            }
        },
        education: {
            degree1: {
                title: "Ciencias de la Computación",
                period: "2018 - 2022",
                description: "Licenciatura en Ciencias de la Computación"
            }
        }
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations_es;
}
