export interface Project {
  id: number;
  name: string;
  fileName: string;
  alt: string;
  description: string;
  preview?: string[];
  app?: string[];
  repository: string[];
  technologies: string[];
  isFavorite: boolean;
}

export interface Technology {
  name: string;
  fileName: string;
  documentationURL: string;
}

export type projectFilter =
  | "isFavorite"
  | "All"
  | "Javascript"
  | "Typescript"
  | "PHP"
  | "Python";
