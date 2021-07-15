import React from "react";
import "./Sidebar.css";
//React Route
import { NavLink } from "react-router-dom";
//Logo
import Logo from "../../images/logoT.png";
//Icons
import { IconContext } from "react-icons/lib";
import { FaLinkedin, FaGithub } from "react-icons/fa";
//react route Link component
import { Link } from "react-router-dom";
//Main Navigation
const Sidebar = () => {
  return (
    <div className="Sidebar">
      <Link to="/">
        <img src={Logo} alt="Logo" className="logostyle" />
      </Link>
      <ul className="SidebarList">
        <li className="row">
          <NavLink
            to="/about"
            className="linkStyle"
            duration={500}
            spy="true"
            activeclassname="active"
          >
            <p>About</p>
          </NavLink>
        </li>
        <li className="row">
          <NavLink
            to="/projects"
            className="linkStyle"
            duration={500}
            spy="true"
            activeclassname="active"
          >
            <p>Projects</p>
          </NavLink>
        </li>
        <li className="row">
          <NavLink
            to="/presentations"
            className="linkStyle"
            duration={500}
            spy="true"
            activeclassname="active"
          >
            <p>Presentations</p>
          </NavLink>
        </li>

        <li className="row">
          <NavLink
            to="/contact"
            className="linkStyle"
            duration={500}
            spy="true"
            activeclassname="active"
          >
            <p>Contact</p>
          </NavLink>
        </li>
      </ul>
      <IconContext.Provider value={{ color: "gray" }}>
        <div className="Icons">
          <a
            href="https://github.com/Tebogo11"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={23} />
          </a>
          <a
            href="https://www.linkedin.com/in/tebogo-dube"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={23} />
          </a>
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default Sidebar;
