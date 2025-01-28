import RolPill from "./RolPill.tsx";
import projectTypes from "../../db/projectTypes.json";
import { capitalizeText } from "../utils/capitalizeText";
import { textToKebabCase } from "../utils/textToKebabCase";
import TextInBox from "./TextInBox.tsx";

interface Props {
  name: string;
  fileName: string;
  alt: string;
  description: string;
  projectType: string;
  technologies: string[];
  loading?: "eager" | "lazy";
}

export default function ProjectCard({
  name,
  fileName,
  technologies,
  alt,
  description,
  projectType,
  loading,
}: Props) {
  const imageURL = `/assets/projects/${fileName}`;
  const firstThreeTechs = technologies.slice(0, 3);

  const shortDescription = description.split(" ").slice(0, 25).join(" ");
  return (
    <div
      className={
        "flex relative min-w-full md:min-w-[290px] lg:min-w-[300px] xl:min-w-[300px]  flex-1 justify-between flex-col "
      }
    >
      <div className="rounded-md">
        <img
          src={imageURL}
          width={1200}
          height={675}
          sizes="1200px"
          alt={alt}
          loading={loading || "eager"}
        />
      </div>
      <div className={"flex flex-col items-center relative top-[-50px] gap-6"}>
        <p className="bg-customGray-100 p-6 rounded-md w-11/12 text-xs">
          {shortDescription}
          <span className="text-primaryLight">
            {description.length > shortDescription.length && "..."}
          </span>
        </p>
        <div className="flex w-full justify-between">
          <h4 className="text-2xl font-semibold">{name}</h4>
          <RolPill bgColor={projectTypes[projectType.toLowerCase()]?.color}>
            {capitalizeText(projectTypes[projectType.toLowerCase()]?.es)}
          </RolPill>
        </div>

        <div className="flex justify-center gap-1">
          {firstThreeTechs.map((x) => (
            <TextInBox>{x}</TextInBox>
          ))}
          {technologies.length > 3 && (
            <div className=" bg-customGray-100 whitespace-nowrap px-3 py-1 rounded-sm text-xs text-primaryLight">
              ...
            </div>
          )}
        </div>
        <a
          href={"/projects/" + textToKebabCase(name)}
          className={
            "border border-primaryLight rounded-md text-primaryLight px-4 py-2 transition-all hover:bg-opacity-10 hover:bg-primary w-full text-center"
          }
        >
          Ver más
        </a>
      </div>
    </div>
  );
}
