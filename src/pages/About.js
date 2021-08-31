import React from "react";
import Blast from "../components/Blast";
import {
  InfoRow,
  Column1,
  Column2,
  InfoContainer,
  Ptag,
  Keypoints,
} from "../components/InfoSectionElements";
//Certifcate Component
import Certifcations from "../components/Certifcations";
import { color } from "../constants/Colors";
const About = () => {
  return (
    <InfoContainer>
      <InfoRow imgStart={false}>
        <Column1 style={{ marginBottom: 70 }}>
          <h1>
            <Blast string="About Me" color={color.primary} />
          </h1>
          <Ptag>
            I recently graduated from{" "}
            <Keypoints>
              Solent University with a 2:1 in Software Engineering Bachelor's
              degree
            </Keypoints>
            . And through my journey, I would consider myself a self-taught
            programmer who is a jack of all trades, with a{" "}
            <Keypoints>strong background in web development.</Keypoints>
          </Ptag>
          <Ptag>
            My programming skill stems from my diligence to continue to develop
            myself. I have also honed them with online tutorials and Boot-Camps,
            as well as building{" "}
            <Keypoints> 5+ websites I am proud to show off.</Keypoints>
          </Ptag>
          <Ptag>
            I am interested in the entire web development spectrum and working
            on ambitious projects with <Keypoints> positive people.</Keypoints>
          </Ptag>
        </Column1>
        <Column2>
          <Certifcations />
        </Column2>
      </InfoRow>
    </InfoContainer>
  );
};

export default About;
