import Skills from '../../db/skills.json'
import { type TechnologyWithType } from '../types.d'

const technologyTypeEnglishToSpanish: Record<string, string> = {
  languages: 'lenguajes',
  'frameworks-and-libraries': 'frameworks-y-librerias',
  'styling-and-structuring': 'estilos-y-estructurado',
  testing: 'testing',
  databases: 'bases-de-datos'
}

export function getAllSkillsInOneArray (): TechnologyWithType[] {
  let allSkills = []

  for (const skill in Skills) {
    const addingTechType = Skills[skill].map((x) => {
      return { ...x, spanishType: technologyTypeEnglishToSpanish[skill], type: skill }
    })
    allSkills = [...allSkills, ...addingTechType]
  }

  return allSkills
}
