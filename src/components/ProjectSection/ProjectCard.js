import React, { useState } from "react";
//Import Modal
import Modal from "./Modal";
import { ProjectContainer, ImageContainer } from "./ProjectCardElements";
import { useSelector } from "react-redux";
const ProjectCard = () => {
  const [showModal, setShowModal] = useState(false);
  const [choosingProject, setchoosingProject] = useState({});
  const projects = useSelector((state) => state.projects);
  const openModal = (id) => {
    setchoosingProject(projects.find((p) => p._id === id));
    setShowModal((prev) => !prev);
  };
  return (
    <ProjectContainer>
      {projects.reverse()?.map((project, key) => {
        return (
          <ImageContainer
            key={key}
            imageUrl={project.image}
            onClick={() => openModal(project._id)}
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
};

export default ProjectCard;
