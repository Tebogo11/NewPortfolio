import React from "react";
import {
  SidemenuContainer,
  MobileIcon,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarWrapper,
  SidebarLink,
  PhoneBanner,
  LogoHolder,
} from "./SideBarElements";
import { Link } from "react-router-dom";
import Logo from "../../images/phoneLogo.png";
import { FaBars } from "react-icons/fa";

const PhoneSideMenu = ({ isOpen, toggle }) => {
  const menustatus = !isOpen ? (
    <PhoneBanner>
      <LogoHolder>
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </LogoHolder>
      <MobileIcon onClick={toggle}>
        <FaBars size={40} color="white" />
      </MobileIcon>
    </PhoneBanner>
  ) : (
    <SidemenuContainer>
      (
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/about" onClick={toggle} activeclassname="active">
            About
          </SidebarLink>
          <SidebarLink to="/projects" onClick={toggle} activeclassname="active">
            Projects
          </SidebarLink>
          <SidebarLink
            to="/presentations"
            onClick={toggle}
            activeclassname="active"
          >
            Presentations
          </SidebarLink>
          <SidebarLink to="/contact" onClick={toggle} activeclassname="active">
            Contact
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
      )
    </SidemenuContainer>
  );
  return <div>{menustatus}</div>;
};

export default PhoneSideMenu;
