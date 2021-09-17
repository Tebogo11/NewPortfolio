import React from "react";
import Blast from "../components/Blast";
import { InfoContainer } from "../components/InfoSectionElements";
import {
  SubTitle,
  ImageContainer,
  PresentationDiv,
} from "../components/PresentationElements";
import DockerPresentation from "../images/PresentationDocker.PNG";
import GitHubPresentation from "../images/PresentationGitHub.PNG";
import { color } from "../constants/Colors";
const Presentation = () => {
  return (
    <InfoContainer>
      <h1
        class="animate__animated animate__fadeIn animate__delay-2s"
        style={{ textAlign: "center" }}
      >
        <Blast string="Presentation" color={color.primary} />
      </h1>
      <PresentationDiv>
        <div>
          <SubTitle style={{ textAlign: "center" }}>Docker</SubTitle>
          <ImageContainer>
            <a
              href="https://github.com/Tebogo11/NewPortfolio/blob/main/Docker.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                id="Docker"
                src={DockerPresentation}
                alt="DockerPresentationImage"
                height="100%"
                width="100%"
              />
            </a>
          </ImageContainer>
        </div>
        <div>
          <SubTitle style={{ textAlign: "center" }}>GitHub</SubTitle>
          <ImageContainer>
            <a
              href="https://github.com/Tebogo11/NewPortfolio/blob/main/GitHub%20presentation.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                id="GitHub"
                src={GitHubPresentation}
                alt="GitHubPresentationImage"
                height="100%"
                width="100%"
              />
            </a>
          </ImageContainer>
        </div>
      </PresentationDiv>
    </InfoContainer>
  );
};

export default Presentation;
