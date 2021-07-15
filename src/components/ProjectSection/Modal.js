import React, { useRef, useEffect, useCallback } from "react";

import styled from "styled-components";
// src\videos\projects\solentMedcial.mp4
import { MdClear } from "react-icons/md";
const Background = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  display: flex;
  top: 10px;

  justify-content: center;
  align-items: center;
  left: 10px;

  @media screen and (max-width: 450px) {
    transform: scale(0.9, 0.9);
    width: 95%;
  }
`;

const ModalWrapper = styled.div`
  width: 1100px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: #202020;
  color: aqua;
  position: relative;
  display: grid;
  grid-template-columns: 3fr 2fr;
  z-index: 10;
  border-radius: 10px;
  padding: 10px;

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr;
    width: 600px;
    height: 600px;
  }
`;

const ModalVideo = styled.video`
  width: 100%;
  height: 100%;
  background: #000;
`;
//change this content
const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  color: whitesmoke;
  margin-bottom: 20px;
  margin: 10px;

  &::-webkit-scrollbar {
    width: 0.5em;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background: #202020;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #393d46;
    outline: none;
  }

  p {
    margin-bottom: 1rem;
    font-family: "Merienda", cursive;
    font-size: 14px;
  }

  h1,
  strong,
  h2 {
    font-family: "Rubik", sans-serif;
  }

  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }

  .ButtonContainer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;

const SkillSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
  p {
    border: 1px solid black;
    width: auto;
    padding: 3px;
    margin-left: 5px;
    box-shadow: 0px 4px 12px black;
    margin: 0;
  }
`;

const AccessSection = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;

  a {
    border: 1px solid aqua;
    width: auto;
    padding: 5px;
    margin-right: 10px;
    box-shadow: 0px 4px 12px black;
    text-decoration: none;
    color: aqua;
    font-size: 16px;
    transition: all 0.5s ease-in;
  }
  a:hover {
    background-color: aqua;
    color: black;
  }
`;

const CloseModalButton = styled(MdClear)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;
const Modal = ({ showModal, setShowModal, project }) => {
  const modalRef = useRef();

  const classModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);
  return (
    <>
      {showModal ? (
        <Background
          className="animate__animated animate__slideInDown"
          ref={modalRef}
          onClick={classModal}
        >
          <ModalWrapper showModal={showModal}>
            <ModalVideo
              src={project.videoUrl}
              width="600"
              height="800"
              controls="controls"
              autoplay="true"
              muted
            />
            <ModalContent>
              <h1>{project.title}</h1>
              <p>
                <strong>About: </strong>
                {project.description.About}
              </p>
              <p>
                <strong>Why: </strong>
                {project.description.Why}
              </p>
              <p>
                <strong>How: </strong>
                {project.description.How}
              </p>
              <h2>Software/Tools</h2>
              <SkillSection>
                {project.Software.map((item) => {
                  return <p>{item}</p>;
                })}
              </SkillSection>
              <h2>Access</h2>
              <AccessSection>
                {project.access.map((item) => {
                  return (
                    <a
                      href={item.Link}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {item.title}
                    </a>
                  );
                })}
              </AccessSection>
            </ModalContent>
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
            />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;
