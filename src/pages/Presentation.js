import React from "react";
import Blast from "../components/Blast";
import { TitleH1 } from "../components/HomeElements";
import {
  InfoRow,
  Column1,
  Column2,
  InfoContainer,
} from "../components/InfoSectionElements";
import { SubTitle, ImageContainer } from "../components/PresentationElements";
import DockerPresentation from "../images/PresentationDocker.PNG";
import GitHubPresentation from "../images/PresentationGitHub.PNG";

const Presentation = () => {
  return (
    <InfoContainer>
      <TitleH1>
        <Blast string="Presentation" color="#51c8cc" />
      </TitleH1>
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
