import React from "react";
import Blast from "../components/Blast";
import {
  InfoRow,
  Column1,
  Column2,
  InfoContainer,
} from "../components/InfoSectionElements";
import { SubTitle, ImageContainer } from "../components/PresentationElements";
import DockerPresentation from "../images/PresentationDocker.PNG";
import GitHubPresentation from "../images/PresentationGitHub.PNG";
import { color } from "../constants/Colors";
const Presentation = () => {
  return (
    <InfoContainer>
      <h1 className="animate__animated animate__slideInLeft">
        <Blast string="Presentation" color={color.primary} />
      </h1>
      <InfoRow imgStart={false} className="PresentationContainer">
        <Column1>
          <SubTitle>Docker</SubTitle>
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
        </Column1>
        <Column2>
          <SubTitle>GitHub</SubTitle>
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
        </Column2>
      </InfoRow>
    </InfoContainer>
  );
};

export default Presentation;
