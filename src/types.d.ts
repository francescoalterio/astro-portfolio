export interface Project {
  id: number;
  name: string;
  projectType: projectType;
  fileName: string;
  alt: string;
  description: string;
  preview: {
    name: string;
    url: string;
  };

  repository: {
    name: string;
    url: string;
  };
  technologies: string[];
  isFavorite: boolean;
}

export interface Technology {
  name: string;
  fileName: string;
  documentationURL: string;
}

export interface TechnologyWithType extends Technology {
  type: technologyType;
  spanishType: technologyTypeSpanish;
}

export type projectFilter =
  | "isFavorite"
  | "All"
  | "Javascript"
  | "Typescript"
  | "PHP"
  | "Python";

export type projectType =
  | "Web"
  | "Mobile"
  | "Library"
  | "Framework"
  | "API"
  | "Desktop"
  | "Terminal";

export type technologyType =
  | "languages"
  | "frameworks-and-libraries"
  | "styling-and-structuring"
  | "testing"
  | "databases";

export type technologyTypeSpanish =
  | "lenguajes"
  | "frameworks-y-librerias"
  | "estilos-y-estructurado"
  | "testing"
  | "bases-de-datos";

export interface Course {
  title: string;
  logo: string;
  certificationUrl: string;
  platform: string;
}
