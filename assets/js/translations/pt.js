const translations_pt = {
    // Navigation
    nav: {
        about: "Sobre",
        skills: "Habilidades",
        experience: "Experiência",
        education: "Educação",
        projects: "Projetos",
        contact: "Contato"
    },
    
    // Hero Section
    hero: {
        greeting: "Olá, sou",
        getInTouch: "Entre em Contato",
        viewProjects: "Ver Projetos"
    },
    
    // About Section
    about: {
        title: "Sobre Mim",
        paragraph1: "Bem-vindo ao meu portfólio! Sou um desenvolvedor de software apaixonado com experiência em construir aplicações web e resolver problemas complexos.",
        paragraph2: "Adoro aprender novas tecnologias e contribuir para projetos de código aberto. Este portfólio apresenta minhas habilidades, experiência e alguns dos projetos em que trabalhei.",
        paragraph3: "Sinta-se à vontade para explorar meus repositórios do GitHub abaixo, que são carregados dinamicamente usando a API do GitHub."
    },
    
    // Skills Section
    skills: {
        title: "Habilidades",
        programming: {
            title: "Linguagens de Programação",
            description: "JavaScript, Python, Java, C++"
        },
        webDev: {
            title: "Desenvolvimento Web",
            description: "HTML, CSS, React, Node.js"
        },
        databases: {
            title: "Bancos de Dados",
            description: "MySQL, MongoDB, PostgreSQL"
        },
        tools: {
            title: "Ferramentas e Plataformas",
            description: "Git, Docker, AWS, Linux"
        }
    },
    
    // Experience Section
    experience: {
        title: "Experiência",
        loading: "Carregando experiência do LinkedIn...",
        error: "Não foi possível carregar dados de experiência",
        present: "Presente"
    },
    
    // Education Section
    education: {
        title: "Educação",
        loading: "Carregando educação do LinkedIn...",
        error: "Não foi possível carregar dados de educação"
    },
    
    // Projects Section
    projects: {
        title: "Projetos do GitHub",
        subtitle: "Aqui estão alguns dos meus projetos recentes do GitHub",
        loading: "Carregando projetos do GitHub...",
        noProjects: "Nenhum repositório público encontrado.",
        viewOnGitHub: "Ver no GitHub",
        error: "Não foi possível carregar projetos do GitHub no momento.",
        visitProfile: "Por favor, visite"
    },
    
    // Contact Section
    contact: {
        title: "Entre em Contato",
        email: "E-mail",
        github: "GitHub",
        linkedin: "LinkedIn"
    },
    
    // Footer
    footer: {
        rights: "Todos os direitos reservados."
    },
    
    // LinkedIn Integration
    linkedin: {
        recommendations: "Recomendações",
        viewMore: "Ver mais no LinkedIn",
        experience: {
            job1: {
                title: "Desenvolvedor de Software",
                period: "2023 - Presente",
                description: "Desenvolvendo e mantendo aplicações web, colaborando com equipes para entregar soluções de software de alta qualidade."
            },
            job2: {
                title: "Desenvolvedor Júnior",
                period: "2021 - 2023",
                description: "Trabalhei em vários projetos, aprendendo melhores práticas e contribuindo para o desenvolvimento de aplicações empresariais."
            }
        },
        education: {
            degree1: {
                title: "Ciência da Computação",
                period: "2018 - 2022",
                description: "Bacharelado em Ciência da Computação"
            }
        }
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations_pt;
}
