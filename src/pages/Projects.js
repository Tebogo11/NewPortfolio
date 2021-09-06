import React from "react";
import ProjectCard from "../components/ProjectSection/ProjectCard";
import Blast from "../components/Blast";
import { color } from "../constants/Colors";
import { useDispatch } from "react-redux";
import { getProjects } from "../store/action/projectA";
import { useEffect } from "react";
const Projects = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);
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
