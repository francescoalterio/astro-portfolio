import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import "../styles/MarkdownStyles.css"; // Importa tus estilos personalizados

export default function ReadmeOfRepo({ repositoryURL }) {
  const [readme, setReadme] = React.useState("");
  React.useEffect(() => {
    const repoName = repositoryURL.split("/").pop();
    const url = `https://api.github.com/repos/francescoalterio/${repoName}/readme`;
    fetch(url)
      .then(async (res) => await res.json())
      .then((result) => {
        const decoded = atob(result.content);
        setReadme(decoded);
      });
  });
  return (
    <Markdown className="markdown" rehypePlugins={[rehypeRaw]}>
      {readme}
    </Markdown>
  );
}
