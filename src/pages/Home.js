import React from "react";
import Blast from "../components/Blast";
import { HomeDiv, TitleH1, SubTitle } from "../components/HomeElements";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <HomeDiv>
      <TitleH1>
        <Blast string="Hello," color="white" />
      </TitleH1>
      <TitleH1>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Blast string="I'm" color="white" />
          <Blast string="Tebogo," color="white" />
        </div>
      </TitleH1>
      <TitleH1>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Blast string="A Frontend Dev" color="white" />
        </div>
      </TitleH1>
      <SubTitle>
        JavaScript Developer | ReactJS Developer | React Native Developer |
        NodeJS Developer
      </SubTitle>
      <NavLink to="/contact" style={{ marginLeft: "15px" }}>
        <Button title="Contact Me" />
      </NavLink>
    </HomeDiv>
  );
};

export default Home;
