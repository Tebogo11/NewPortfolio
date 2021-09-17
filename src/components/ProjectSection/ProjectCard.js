import React, { useState } from "react";
import { CircularProgress } from "@material-ui/core";
//Import Modal
import Modal from "./Modal";
import {
  ProjectContainer,
  ImageContainer,
  Loading,
} from "./ProjectCardElements";
import { useSelector } from "react-redux";
const ProjectCard = () => {
  const [showModal, setShowModal] = useState(false);
  const [choosingProject, setchoosingProject] = useState({});
  const projects = useSelector((state) => state.projects);
  const openModal = (id) => {
    setchoosingProject(projects.find((p) => p._id === id));
    setShowModal((prev) => !prev);
  };

  if (!projects.length) {
    return (
      <Loading>
        <CircularProgress color="secondary" />
      </Loading>
    );
  } else {
    return (
      <ProjectContainer>
        {projects.map((project, key) => {
          let animation = "";
          if ((key + 1) % 2 === 0) {
            animation = "animate__animated animate__slideInRight";
          } else {
            animation = "animate__animated animate__slideInLeft";
          }
          return (
            <ImageContainer
              key={key}
              imageUrl={project.image}
              onClick={() => openModal(project._id)}
              className={animation}
            >
              <div>
                <h1>{project.title}</h1>
              </div>
            </ImageContainer>
          );
        })}
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          project={choosingProject}
        />
      </ProjectContainer>
    );
  }
};

export default ProjectCard;
