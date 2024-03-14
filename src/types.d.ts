export interface Project {
  id: number
  name: string
  projectType: projectType
  fileName: string
  alt: string
  description: string
  preview: Array<{
    name: string
    url: string
  }>

  repository: Array<{
    name: string
    url: string
  }>
  technologies: string[]
  isFavorite: boolean
}

export interface Technology {
  name: string
  fileName: string
  documentationURL: string
}

export interface TechnologyWithType extends Technology {
  type: technologyType
}

export type projectFilter =
  | 'isFavorite'
  | 'All'
  | 'Javascript'
  | 'Typescript'
  | 'PHP'
  | 'Python'

export type projectType =
  | 'Web'
  | 'Mobile'
  | 'Fullstack'
  | 'Library'
  | 'Framework'
  | 'API'
  | 'Desktop'
  | 'Terminal'

export type technologyType =
  | 'languages'
  | 'frameworks-and-libraries'
  | 'styling-and-structuring'
  | 'testing'
  | 'databases'

export interface Course {
  title: string
  logo: string
  certificationUrl: string
  platform: string
}
