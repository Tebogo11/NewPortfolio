import React from "react";
import ProjectCard from "../components/ProjectSection/ProjectCard";
import Blast from "../components/Blast";
import { color } from "../constants/Colors";
const Projects = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        <Blast string="Projects" color={color.primary} />
      </h1>
      <ProjectCard />
    </div>
  );
};

export default Projects;
