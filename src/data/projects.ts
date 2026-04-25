import type { Lang } from "@/i18n/types";

export type Project = {
  title: string;
  description: string;
  stack: string[];
  githubUrl: string;
  demoUrl?: string;
};

type ProjectsByLang = Record<Lang, Project[]>;

export const projectsByLang: ProjectsByLang = {
  pt: [
    {
      title: ".net agent driven clean arch template",
      description:
        "Template para projetos .net modernos utilizando clean arch e agentes de IA.",
      stack: [".NET 10", "Semantic Kernel", "SQL Server", "OpenTelemetry", "Clean Arch"],
      githubUrl: "https://github.com/lucasestevesr/Guara-Pattern",
      demoUrl: ""
    },
  ],
  en: [
    {
      title: ".net agent driven clean arch template",
      description:
        "Template for modern .NET projects using clean architecture and AI agents.",
      stack: [".NET 10", "Semantic Kernel", "SQL Server", "OpenTelemetry", "Clean Arch"],
      githubUrl: "https://github.com/lucasestevesr/Guara-Pattern",
      demoUrl: ""
    }
  ]
};
