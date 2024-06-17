import { useEffect, useRef, useState } from "react";
import projects from "../../db/projects.json";
import useTextInput from "../hooks/useTextInput.ts";
import ProjectCard from "./ProjectCard.tsx";
import TextInput from "./TextInput.tsx";
import TextInBox from "./TextInBox.tsx";

export default function ProjectList() {
  const [projectList, setProjectList] = useState(projects);
  const { value, onChange } = useTextInput();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [technologies, setTechnologies] = useState<string[]>([]);

  const allTechnologies = [
    ...new Set(projects.flatMap((project) => project.technologies)),
  ];

  const filterByTechnologies = () => {
    const filteredProjects = projects.filter((project) =>
      technologies.every((tech) => project.technologies.includes(tech))
    );
    return filteredProjects;
  };

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      if (value === "") return setProjectList(filterByTechnologies());
      const projectsToFilter =
        technologies.length === 0 ? projects : projectList;
      const filteredProjects = projectsToFilter.filter((project) =>
        project.name.toLowerCase().includes(value.toLowerCase())
      );
      setProjectList(filteredProjects);
    }, 400);
  }, [value]);

  useEffect(() => {
    if (technologies.length === 0) {
      setProjectList(projects);
      return;
    }
    setProjectList(filterByTechnologies());
  }, [technologies]);

  return (
    <div className="w-full flex flex-col gap-6 mt-16">
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl flex-1 text-center">
        Proyectos
      </h1>
      <div className="w-full flex justify-center items-center">
        <TextInput
          value={value}
          onChange={onChange}
          className=" max-w-3xl flex-1"
        />
      </div>
      <p className="text-xs text-gray-400 w-full text-center">
        Filtrar por tecnologias
      </p>
      <div className="w-full flex justify-center gap-2 flex-wrap">
        {allTechnologies.map((technology) => (
          <button
            onClick={() =>
              setTechnologies((technologies) => {
                if (technologies.includes(technology)) {
                  return technologies.filter((tech) => tech !== technology);
                }
                return [...technologies, technology];
              })
            }
          >
            <TextInBox
              key={technology}
              className={
                technologies.includes(technology) ? "bg-white text-black" : ""
              }
            >
              {technology}
            </TextInBox>
          </button>
        ))}
      </div>
      <div className="flex flex-wrap justify-between gap-x-12 mt-10">
        {projectList.toReversed().map((project) => {
          return (
            <ProjectCard
              key={project.name}
              name={project.name}
              fileName={project.fileName}
              alt={project.alt}
              technologies={project.technologies}
              description={project.description}
              projectType={project.projectType}
              loading={"lazy"}
            />
          );
        })}
        <div className="flex relative min-w-full md:min-w-[290px] lg:min-w-[300px] xl:min-w-[300px] flex-1 justify-between flex-col"></div>
        <div className="flex relative min-w-full md:min-w-[290px] lg:min-w-[300px] xl:min-w-[300px] flex-1 justify-between flex-col"></div>
      </div>
    </div>
  );
}
