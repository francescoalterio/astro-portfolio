import { useState, useEffect } from "react";

export function NumberOfRepos() {
  const [reposLength, setReposLength] = useState(0);

  useEffect(() => {
    async function getReposLength() {
      const githubURL = `https://api.github.com/user/repos?per_page=1000`;
      const resGithub = await fetch(githubURL, {
        headers: {
          Authorization: `token ${import.meta.env.PUBLIC_GITHUB_TOKEN}`,
        },
      });
      const repos = await resGithub.json();
      setReposLength(repos.length);
    }
    getReposLength();
  }, []);

  return <span>{reposLength}</span>;
}
