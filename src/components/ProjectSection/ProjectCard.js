import React, { useState } from "react";
import styled from "styled-components";
import { projects as ProjectData } from "./ProjectData";
//Import Modal
import Modal from "./Modal";
const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin: 0px;
  padding: 0px;
  justify-items: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media screen and (min-width: 769px) and (max-width: 1130px) {
    grid-template-columns: 1fr;
  }
`;
const ImageContainer = styled.div`
  width: 540px;
  height: 260px;
  background-color: #292929;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.24);
  border: 2px solid rgba(7, 7, 7, 0.12);
  transition: all 0.3s ease;
  cursor: pointer;
  transition: all 0.3s ease;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-repeat: no-repeat;
  &:hover {
    box-shadow: 0px 2px 6px #292929;
    -ms-transform: scale(1.05, 1.05); /* IE 9 */
    transform: scale(1.05, 1.05); /* Standard syntax */
    border: 1px solid #5be0e0;
  }

  @media screen and (min-width: 400px) and (max-width: 769px) {
    transform: scale(1.05, 1.05);

    &:hover {
      box-shadow: 0px 2px 6px #292929;
      transform: scale(1.1, 1.1); /* IE 9 */

      border: 1px solid #5be0e0;
    }
  }

  @media screen and (max-width: 400px) {
    transform: scale(0.9, 0.9);
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #5be0e0;
    height: 100px;
    border-radius: 50%;
  }

  h1 {
    display: none;
    font-size: 13px;
    width: 100px;
    text-align: center;
  }

  &:hover h1 {
    color: #040404;
    display: grid;
    font-family: "Merienda", cursive;
  }
`;

const ProjectCard = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedElement, setselectedElement] = useState(0);
  const openModal = (key) => {
    setselectedElement(key);
    setShowModal((prev) => !prev);
  };
  return (
    <ProjectContainer>
      {ProjectData.map((project, key) => {
        return (
          <div
            onClick={() => openModal(key)}
            className="animate__animated animate__pulse"
          >
            <ImageContainer key={key} imageUrl={project.imageUrl}>
              <div>
                <h1>{project.title}</h1>
              </div>
            </ImageContainer>
          </div>
        );
      })}
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        project={ProjectData[selectedElement]}
      />
    </ProjectContainer>
  );
};

export default ProjectCard;
