import type { Translation } from "./types";

const pt: Translation = {
  locale: "pt-BR",
  languageName: "Português",
  seo: {
    siteTitle: "Oi! Sou Lucas",
    siteDescription: "Apenas mais um portfólio pessoal e blog de um desenvolvedor..."
  },
  nav: {
    home: "início",
    about: "sobre",
    projects: "projetos",
    blog: "blog",
    contact: "contato"
  },
  hero: {
    role: "Desenvolvedor Backend/Fullstack .NET",
    summary:
      "Construo APIs robustas, serviços escaláveis e plataformas confiáveis com foco em qualidade, observabilidade e evolução contínua.",
    ctaGithub: "GitHub",
    ctaLinkedin: "LinkedIn",
    ctaEmail: "E-mail",
    ctaResume: "Currículo",
    technologies: "Tecnologias em destaque"
  },
  sections: {
    aboutTitle: "",
    projectsTitle: "",
    projectsDescription: "Alguns dos projetos que ando desenvolvendo no meu tempo livre",
    blogTitle: "",
    blogDescription: "Artigos sobre engenharia e tecnologias em geral.",
    contactTitle: "Contato",
    contactDescription: "Estou disponível para conversar sobre projetos, arquitetura e oportunidades."
  },
  about: {
    heading: "minha experiência como engenheiro de software",
    intro:
      "Prazer, Lucas. Sou aquele desenvolvedor que tem o sonho de ainda viver na natureza, haha. Quando não estou no computador, gosto de me imaginar na natureza, fazendo alguma aventura.",
    photoAlt: "Foto de perfil de Lucas Esteves",
    highlights: [
      "Sou graduado na UFJF e atualmente curso uma pós graduação em Arquitetura de Software na FIAP",
      "Tenho experiência com desenvolvimento e manutenção de sistemas, arquiteturas mónolitica e microserviços.",
      "Atualmente estudo a área DevOps, IaC, orquestração em Kubernetes e práticas de observabilidade.",
      "Gosto de pensar sistemas de arquitetura limpa, DDD tático e padrões para sistemas evolutivos."
    ]
  },
  projects: {
    github: "Ver no GitHub",
    demo: ""
  },
  blog: {
    readMore: "Ler artigo",
    readingTime: "Tempo de leitura",
    minutes: "min",
    noPosts: "Nenhum artigo encontrado para este idioma.",
    backToBlog: "Voltar para o blog",
    searchLabel: "",
    searchPlaceholder: "Buscar por título, resumo, tag ou ano...",
    sortLabel: "",
    newestFirst: "Mais recentes",
    oldestFirst: "Mais antigos",
    noResults: "Nenhum artigo encontrado para o filtro aplicado."
  },
  contact: {
    email: "Enviar e-mail",
    linkedin: "Conectar no LinkedIn",
    github: "Ver GitHub",
    helper: "escolha o canal que preferir e vamos conversar."
  },
  footer: {
    text: "construído por lucas. 2026"
  },
  common: {
    latestArticles: "último post",
    viewAllPosts: "Ver todos os posts"
  }
};

export default pt;
