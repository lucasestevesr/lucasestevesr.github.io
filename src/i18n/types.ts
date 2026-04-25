export type Lang = "pt" | "en";

export type NavKey = "home" | "about" | "projects" | "blog" | "contact";

export type Translation = {
  locale: string;
  languageName: string;
  seo: {
    siteTitle: string;
    siteDescription: string;
  };
  nav: Record<NavKey, string>;
  hero: {
    role: string;
    summary: string;
    ctaGithub: string;
    ctaLinkedin: string;
    ctaEmail: string;
    ctaResume: string;
    technologies: string;
  };
  sections: {
    aboutTitle: string;
    projectsTitle: string;
    projectsDescription: string;
    blogTitle: string;
    blogDescription: string;
    contactTitle: string;
    contactDescription: string;
  };
  about: {
    heading: string;
    intro: string;
    photoAlt: string;
    highlights: string[];
  };
  projects: {
    github: string;
    demo: string;
  };
  blog: {
    readMore: string;
    readingTime: string;
    minutes: string;
    noPosts: string;
    backToBlog: string;
    searchLabel: string;
    searchPlaceholder: string;
    sortLabel: string;
    newestFirst: string;
    oldestFirst: string;
    noResults: string;
  };
  contact: {
    email: string;
    linkedin: string;
    github: string;
    helper: string;
  };
  footer: {
    text: string;
  };
  common: {
    latestArticles: string;
    viewAllPosts: string;
  };
};
