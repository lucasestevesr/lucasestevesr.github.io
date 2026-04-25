import type { Translation } from "./types";

const en: Translation = {
  locale: "en-US",
  languageName: "English",
  seo: {
    siteTitle: "Hi! I'm Lucas",
    siteDescription: "Just another personal portfolio and blog from a developer..."
  },
  nav: {
    home: "home",
    about: "about",
    projects: "projects",
    blog: "blog",
    contact: "contact"
  },
  hero: {
    role: "Backend/Fullstack .NET Developer",
    summary:
      "I build robust APIs, scalable services, and reliable platforms with a focus on quality, observability, and continuous evolution.",
    ctaGithub: "GitHub",
    ctaLinkedin: "LinkedIn",
    ctaEmail: "Email",
    ctaResume: "Resume",
    technologies: "Core technologies"
  },
  sections: {
    aboutTitle: "",
    projectsTitle: "",
    projectsDescription: "A few projects I'm building in my free time",
    blogTitle: "",
    blogDescription: "Articles about engineering and technology in general.",
    contactTitle: "Contact",
    contactDescription: "I am available to discuss projects, architecture, and opportunities."
  },
  about: {
    heading: "my experience as a software engineer",
    intro:
      "Hey, Lucas here. I'm that kind of developer who still dreams about living close to nature, haha. When I'm not dealing with tech, I like to picture myself outdoors, chasing some adventure.",
    photoAlt: "Profile photo of Lucas Esteves",
    highlights: [
      "I have a degree from UFJF and I'm currently taking a postgraduate program in Software Architecture at FIAP.",
      "I have experience developing and maintaining systems with both monolithic and microservices architectures.",
      "Right now I'm studying DevOps, IaC, Kubernetes orchestration, and observability practices.",
      "I enjoy designing systems with clean architecture, tactical DDD, and patterns for evolvable software."
    ]
  },
  projects: {
    github: "View on GitHub",
    demo: ""
  },
  blog: {
    readMore: "Read article",
    readingTime: "Reading time",
    minutes: "min",
    noPosts: "No posts found for this language.",
    backToBlog: "Back to blog",
    searchLabel: "",
    searchPlaceholder: "Search by title, summary, tag, or year...",
    sortLabel: "",
    newestFirst: "Most recent",
    oldestFirst: "Oldest first",
    noResults: "No articles match the current filters."
  },
  contact: {
    email: "Send email",
    linkedin: "Connect on LinkedIn",
    github: "View GitHub",
    helper: "pick your preferred channel and let's talk."
  },
  footer: {
    text: "built by lucas. 2026"
  },
  common: {
    latestArticles: "latest post",
    viewAllPosts: "View all posts"
  }
};

export default en;
