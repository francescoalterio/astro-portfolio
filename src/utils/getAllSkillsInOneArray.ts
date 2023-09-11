import Skills from "../../db/skills.json";
import { type TechnologyWithType } from "../types.d";

export function getAllSkillsInOneArray(): TechnologyWithType[] {
  let allSkills = [];

  for (const skill in Skills) {
    const addingTechType = Skills[skill].map((x) => {
      return { ...x, type: skill };
    });
    allSkills = [...allSkills, ...addingTechType];
  }

  return allSkills;
}
