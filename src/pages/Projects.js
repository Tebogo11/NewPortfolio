import React from "react";
import ProjectCard from "../components/ProjectSection/ProjectCard";
import Blast from "../components/Blast";
import { TitleH1 } from "../components/HomeElements";
const Projects = () => {
  return (
    <div>
      <TitleH1 style={{ marginBottom: "70px", textAlign: "center" }}>
        <Blast string="Projects" color="#51c8cc" />
      </TitleH1>
      <ProjectCard />
    </div>
  );
};

export default Projects;
